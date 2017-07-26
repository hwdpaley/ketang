// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

exports.__esModule = true;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

var _wechatApi = require('wechat-api');

var _wechatApi2 = _interopRequireDefault(_wechatApi);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    /**
    * index action
    * @return {Promise} []1212
    */
    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
    };
    /**
     * index action
     * @return {Promise} []
     */

    _class.prototype.indexAction = function indexAction() {
        //auto render template file index_index.html
        this.meta_title = '公众号信息';
        this.assign({ "navxs": true, "bg": "bg-black" });
        return this.display();
    };
    /**
     * 公众账号管理
     */


    _class.prototype.setingAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var map, data, Pages, pages, page, _iterator, _isArray, _i, _ref2, val;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            map = { 'status': ['>', -1] };

                            if (!this.is_admin) {
                                //管理员可以管理全部公共账号
                                map.uid = this.user.uid;
                            }
                            _context.next = 4;
                            return this.model('member_public').where(map).page(this.get('page')).countSelect();

                        case 4:
                            data = _context.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);
                            _iterator = data.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 11:
                            if (!_isArray) {
                                _context.next = 17;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 14;
                                break;
                            }

                            return _context.abrupt('break', 27);

                        case 14:
                            _ref2 = _iterator[_i++];
                            _context.next = 21;
                            break;

                        case 17:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 20;
                                break;
                            }

                            return _context.abrupt('break', 27);

                        case 20:
                            _ref2 = _i.value;

                        case 21:
                            val = _ref2;
                            _context.next = 24;
                            return this.model('member').get_nickname(val.uid);

                        case 24:
                            val.uid = _context.sent;

                        case 25:
                            _context.next = 11;
                            break;

                        case 27:
                            this.assign({ "navxs": true });
                            this.meta_title = "公共账号管理";
                            return _context.abrupt('return', this.display());

                        case 30:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function setingAction() {
            return _ref.apply(this, arguments);
        }

        return setingAction;
    }();

    /**
     *新增公众账号
     */


    _class.prototype.addsetingAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var data, res;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context2.next = 12;
                                break;
                            }

                            data = this.post();
                            _context2.next = 4;
                            return this.model('member_public').add(data);

                        case 4:
                            res = _context2.sent;

                            if (!res) {
                                _context2.next = 9;
                                break;
                            }

                            return _context2.abrupt('return', this.success({ name: "添加成功", url: "/admin/mpbase/seting" }));

                        case 9:
                            return _context2.abrupt('return', this.fail("添加失败"));

                        case 10:
                            _context2.next = 15;
                            break;

                        case 12:

                            this.assign({ "navxs": true });
                            this.meta_title = "新增公众账号";
                            return _context2.abrupt('return', this.display());

                        case 15:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function addsetingAction() {
            return _ref3.apply(this, arguments);
        }

        return addsetingAction;
    }();

    /**
     *编辑公众账号
     */


    _class.prototype.editsetingAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var data, id, res, _id, _data;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context3.next = 23;
                                break;
                            }

                            data = {};
                            id = this.post("id");

                            data.uid = this.post('uid');
                            data.public_id = this.post('public_id');
                            data.wechat = this.post('wechat');
                            data.type = this.post('type');
                            data.appid = this.post('appid');
                            data.secret = this.post('secret');
                            data.encodingaeskey = this.post('encodingaeskey');
                            data.mchid = this.post('mchid');
                            data.mchkey = this.post('mchkey');
                            data.notify_url = this.post('notify_url');
                            _context3.next = 15;
                            return this.model("member_public").where({ 'id': id }).update(data);

                        case 15:
                            res = _context3.sent;

                            if (!res) {
                                _context3.next = 20;
                                break;
                            }

                            return _context3.abrupt('return', this.success({ name: "编辑成功", url: "/admin/mpbase/seting" }));

                        case 20:
                            return _context3.abrupt('return', this.fail("编辑失败"));

                        case 21:
                            _context3.next = 32;
                            break;

                        case 23:
                            _id = this.get("id");

                            if (think.isEmpty(_id)) {
                                this.fail('参数不能为空！');
                            }
                            _context3.next = 27;
                            return this.model('member_public').where({ 'id': _id }).find();

                        case 27:
                            _data = _context3.sent;

                            this.assign('info', _data);
                            this.assign({ "navxs": true });
                            this.meta_title = "编辑公众账号";
                            return _context3.abrupt('return', this.display());

                        case 32:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function editsetingAction() {
            return _ref4.apply(this, arguments);
        }

        return editsetingAction;
    }();
    /**
     *删除公众账号
     */


    _class.prototype.delsetingAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var id, res;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            id = this.get("ids");
                            _context4.next = 3;
                            return this.model('member_public').where({ 'id': id }).delete();

                        case 3:
                            res = _context4.sent;

                            if (!res) {
                                _context4.next = 8;
                                break;
                            }

                            return _context4.abrupt('return', this.success({ name: "删除成功", url: "/admin/mpbase/seting" }));

                        case 8:
                            return _context4.abrupt('return', this.fail("删除失败"));

                        case 9:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function delsetingAction() {
            return _ref5.apply(this, arguments);
        }

        return delsetingAction;
    }();

    _class.prototype.huifuAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var post;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context5.next = 5;
                                break;
                            }

                            post = this.post();

                            if (think.isEmpty(post)) {
                                post = (0, _stringify2.default)(post);
                                //console.log(post);
                                this.success({ name: post, url: "/admin/mpbase" });
                            } else {
                                this.fail("dffdsfs");
                            }
                            _context5.next = 8;
                            break;

                        case 5:

                            this.meta_title = "自动回复";
                            this.assign({ "navxs": true, "bg": "bg-dark" });
                            return _context5.abrupt('return', this.display());

                        case 8:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function huifuAction() {
            return _ref6.apply(this, arguments);
        }

        return huifuAction;
    }();
    /**
     * 设置一条或者多条数据的状态
     */


    _class.prototype.setstatusAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return _Base.prototype.setstatusAction.call(this, this, 'member_public');

                        case 2:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function setstatusAction() {
            return _ref7.apply(this, arguments);
        }

        return setstatusAction;
    }();

    /**
    * 群发功能
    */


    _class.prototype.massAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var api, self, aa, res;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            this.meta_title = "群发功能";
                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);
                            //let api = new API('wxec8fffd0880eefbe', 'a084f19ebb6cc5dddd2988106e739a07');

                            self = this;
                            //调用用户分组API

                            aa = function aa(api) {
                                var deferred = think.defer();
                                api.getGroups(function (err, result) {
                                    if (!think.isEmpty(result)) {
                                        deferred.resolve(result['groups']);
                                    } else {
                                        console.error(err);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context7.next = 6;
                            return aa(api);

                        case 6:
                            res = _context7.sent;

                            this.assign('groups', res); //用户分组
                            this.assign({ "navxs": true });
                            return _context7.abrupt('return', self.display());

                        case 10:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function massAction() {
            return _ref8.apply(this, arguments);
        }

        return massAction;
    }();

    /**
     * 微信自定义菜单管理页面
     */


    _class.prototype.selfmenuAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var menu_model, data, self, menu, str;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:

                            this.meta_title = "自定义菜单";
                            menu_model = this.model('wx_menu');
                            _context8.next = 4;
                            return menu_model.select();

                        case 4:
                            data = _context8.sent;
                            self = this;
                            menu = {
                                "menu": {
                                    "button": []
                                }
                            };
                            str = (0, _stringify2.default)(menu);

                            this.assign('menu', str);
                            return _context8.abrupt('return', self.display());

                        case 10:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function selfmenuAction() {
            return _ref9.apply(this, arguments);
        }

        return selfmenuAction;
    }();

    /**
     * 微信端生成自定义菜单
     */


    _class.prototype.setupselfmenuAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var menu_model, data, menu, info, res;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            menu_model = this.model('wx_menu');
                            _context9.next = 3;
                            return menu_model.select();

                        case 3:
                            data = _context9.sent;
                            menu = buildselfmenu(data);

                            info = function info(api) {
                                var deferred = think.defer();
                                api.createMenu(menu, function (err, result) {
                                    if (!think.isEmpty(result)) {
                                        deferred.resolve(result);
                                    } else {
                                        Console.error('err' + err);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context9.next = 8;
                            return info(api);

                        case 8:
                            res = _context9.sent;

                            if (!(res.errmsg == 'ok')) {
                                _context9.next = 13;
                                break;
                            }

                            return _context9.abrupt('return', this.json('ok'));

                        case 13:
                            return _context9.abrupt('return', this.json('no'));

                        case 14:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function setupselfmenuAction() {
            return _ref10.apply(this, arguments);
        }

        return setupselfmenuAction;
    }();

    /**
     * 添加微信自定义菜单
     */


    _class.prototype.addselfmenuAction = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var m_id, name, sort, pid, type, url, web_token, media_id, menu_model, data, res;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            m_id = this.post("id");
                            name = this.post("name");
                            sort = this.post('sort');
                            pid = this.post('pid');
                            type = this.post('type');
                            url = this.post('url');
                            web_token = '';
                            media_id = this.post('media_id');
                            menu_model = this.model("wx_menu");
                            data = {
                                "m_id": m_id,
                                "name": name,
                                "sort": sort,
                                "pid": pid,
                                "type": type,
                                "web_token": web_token,
                                "media_id": media_id,
                                "url": url
                            };
                            _context10.next = 12;
                            return menu_model.add(data);

                        case 12:
                            res = _context10.sent;

                            if (!res) {
                                _context10.next = 17;
                                break;
                            }

                            return _context10.abrupt('return', this.json("1"));

                        case 17:
                            return _context10.abrupt('return', this.json("2"));

                        case 18:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function addselfmenuAction() {
            return _ref11.apply(this, arguments);
        }

        return addselfmenuAction;
    }();

    /**
     * 删除微信自定义菜单
     */


    _class.prototype.delselfmenuAction = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
            var m_id, pid, menu_model, res, cmenus, ure, x;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            m_id = this.post('m_id');
                            pid = this.post('pid');

                            console.log(m_id);
                            console.log(pid);
                            menu_model = this.model("wx_menu");
                            _context11.next = 7;
                            return menu_model.where({ m_id: ["=", m_id] }).delete();

                        case 7:
                            res = _context11.sent;

                            if (!res) {
                                _context11.next = 30;
                                break;
                            }

                            if (!m_id) {
                                _context11.next = 28;
                                break;
                            }

                            _context11.next = 12;
                            return menu_model.where({ pid: ["=", m_id] }).select();

                        case 12:
                            cmenus = _context11.sent;
                            ure = "";
                            x = 0;

                        case 15:
                            if (!(x < cmenus.length)) {
                                _context11.next = 22;
                                break;
                            }

                            _context11.next = 18;
                            return menu_model.where({ id: ["=", cmenus[x].id] }).update({ "sort": x + 1 });

                        case 18:
                            ure = _context11.sent;

                        case 19:
                            x++;
                            _context11.next = 15;
                            break;

                        case 22:
                            if (!res) {
                                _context11.next = 26;
                                break;
                            }

                            return _context11.abrupt('return', this.json("1"));

                        case 26:
                            console.log("mawt");
                            return _context11.abrupt('return', this.json("2"));

                        case 28:
                            _context11.next = 31;
                            break;

                        case 30:
                            return _context11.abrupt('return', this.json("2"));

                        case 31:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function delselfmenuAction() {
            return _ref12.apply(this, arguments);
        }

        return delselfmenuAction;
    }();

    /**
     * 监听微信关注或取消，进行本地用户数据更新
     */


    _class.prototype.updateusersAction = function () {
        var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
            var FromUserName, Event, user_model, api, userinfo, resusers;
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            FromUserName = 'openid'; //发送方帐号（一个OpenID）

                            Event = 'subscribe'; //subscribe(订阅)、unsubscribe(取消订阅)

                            user_model = this.model('wx_user');
                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);

                            if (!(Event == 'subscribe' && !thik.isEmpty(FromUserName))) {
                                _context12.next = 13;
                                break;
                            }

                            //通过openid获取用户基本信息
                            userinfo = function userinfo(api) {
                                var deferinfo = think.defer();
                                api.getUser(FromUserName, function (err, result) {
                                    if (!think.isEmpty(result)) {
                                        deferinfo.resolve(result);
                                    } else {
                                        Console.error('err' + err);
                                    }
                                });
                                return deferinfo.promise;
                            };

                            _context12.next = 8;
                            return userinfo(api);

                        case 8:
                            resusers = _context12.sent;
                            _context12.next = 11;
                            return user_model.add(resusers);

                        case 11:
                            _context12.next = 15;
                            break;

                        case 13:
                            _context12.next = 15;
                            return user_model.where({ 'openid': FromUserName }).update({ 'subscribe': 0 });

                        case 15:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        function updateusersAction() {
            return _ref13.apply(this, arguments);
        }

        return updateusersAction;
    }();

    /**
     * 获取素材详情
     */


    _class.prototype.getmaterialinfoAction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13() {
            var material_model, materid, materialinfo, api, self, info, res;
            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            material_model = this.model('wx_material');
                            materid = this.post('id');
                            _context13.next = 4;
                            return material_model.where({ id: materid }).find();

                        case 4:
                            materialinfo = _context13.sent;

                            //let api = new API('wxec8fffd0880eefbe', 'a084f19ebb6cc5dddd2988106e739a07');
                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);
                            self = this;

                            info = function info(api) {
                                var deferred = think.defer();
                                api.getMaterial(materialinfo.media_id, function (err, result) {
                                    if (!think.isEmpty(result)) {
                                        deferred.resolve(result);
                                    } else {
                                        Console.error('err' + err);
                                    }
                                });
                                return deferred.promise;
                            };

                            //let res =  await
                            //    info(api);
                            //

                            _context13.next = 10;
                            return info(api);

                        case 10:
                            res = _context13.sent;

                            console.log(res);

                        case 12:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        function getmaterialinfoAction() {
            return _ref14.apply(this, arguments);
        }

        return getmaterialinfoAction;
    }();

    /**
     * 获取微信公众账号用户信息并保存到本地库
     */


    _class.prototype.getusersAction = function () {
        var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14() {
            var user_model, api, self, users, res, useropenid, count, isadd, tmp_openids, i, userinfo, resusers, resinfo, key, element, subscribe_time, addres;
            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            this.meta_title = "获取粉丝信息";
                            user_model = this.model('wx_user');
                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);
                            self = this;
                            //获取关注者列表

                            users = function users(api) {
                                var deferred = think.defer();
                                api.getFollowers(function (err, result) {
                                    if (!think.isEmpty(result)) {
                                        deferred.resolve(result);
                                    } else {
                                        Console.error('err' + err);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context14.next = 7;
                            return users(api);

                        case 7:
                            res = _context14.sent;

                            console.log("users----------" + (0, _stringify2.default)(res));
                            useropenid = res['data']['openid'];
                            count = res['count'];
                            //self.end(useropenid);
                            //think.log(res);
                            //批量获取用户基本信息

                            isadd = false;
                            tmp_openids = [];
                            i = 0;

                        case 14:
                            if (!(i < count)) {
                                _context14.next = 44;
                                break;
                            }

                            tmp_openids.push(useropenid[i]);

                            if (!((i + 1) % 100 == 0 || i == count - 1)) {
                                _context14.next = 41;
                                break;
                            }

                            //think.log('dd','aaa');
                            userinfo = function userinfo(api) {
                                var deferinfo = think.defer();
                                api.batchGetUsers(tmp_openids, function (err, result) {
                                    if (!think.isEmpty(result)) {
                                        deferinfo.resolve(result);
                                    } else {
                                        Console.error('err' + err);
                                    }
                                });
                                return deferinfo.promise;
                            };

                            _context14.next = 20;
                            return userinfo(api);

                        case 20:
                            resusers = _context14.sent;
                            resinfo = resusers['user_info_list'];
                            //console.log(resusers);
                            //return false;
                            //self.end(resinfo);

                            console.log("开始：");
                            _context14.t0 = _regenerator2.default.keys(resinfo);

                        case 24:
                            if ((_context14.t1 = _context14.t0()).done) {
                                _context14.next = 40;
                                break;
                            }

                            key = _context14.t1.value;
                            element = resinfo[key];
                            //self.end(element.openid);

                            console.log('-------------' + element.openid);
                            //let addres = await user_model.add(element);
                            //let nickname = element.nickname.replace(/(\\x[a-fA-F0-9]{2})*/g, ' ');
                            //let nickname = element.nickname.replace(/[\x80-\xfe]*/g, ' ');
                            //let nickname = removeFourChar(element.nickname);
                            subscribe_time = element.subscribe_time * 1000;
                            //element.nickname = nickname;

                            element.subscribe_time = subscribe_time;

                            _context14.next = 32;
                            return user_model.thenAdd(element, { openid: element.openid });

                        case 32:
                            addres = _context14.sent;

                            console.log(addres);

                            if (!(addres.type == 'exist')) {
                                _context14.next = 38;
                                break;
                            }

                            _context14.next = 37;
                            return user_model.where({ openid: element.openid }).update(element);

                        case 37:
                            isadd = true;

                        case 38:
                            _context14.next = 24;
                            break;

                        case 40:
                            tmp_openids = [];

                        case 41:
                            i++;
                            _context14.next = 14;
                            break;

                        case 44:
                            if (isadd) {
                                this.success({ name: "操作成功！", url: "/admin/mpbase/userlist" });
                            } else {
                                this.fail("error");
                            }

                        case 45:
                        case 'end':
                            return _context14.stop();
                    }
                }
            }, _callee14, this);
        }));

        function getusersAction() {
            return _ref15.apply(this, arguments);
        }

        return getusersAction;
    }();

    /**
     * 根据条件筛选进行群发--通过openid,只能是认证服务号使用
     * 通过分组groupid进行群发，认证后的订阅号和服务号都可以使用
     */


    _class.prototype.masssendAction = function () {
        var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15() {
            var api, model, media_model, masssend_model, self, send_type, group_id, group_type, me_id, content, map, sex, province, city, userinfo, media_id, openids, key, res, msg_id, data, wx_content, material_content, material_wx_content, isAdd;
            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);
                            //let api = new API('wxe8c1b5ac7db990b6', 'ebcd685e93715b3470444cf6b7e763e6');
                            //let api = new API('wxec8fffd0880eefbe', 'a084f19ebb6cc5dddd2988106e739a07');

                            model = this.model('wx_user');
                            media_model = this.model('wx_material');
                            masssend_model = this.model('wx_masssend');
                            self = this;
                            send_type = this.post('send_type'); //1:图文2：文字3：图片4：语音5：视频6：卡卷

                            group_id = this.post('group_id');
                            group_type = this.post('group_type'); //0:全部用户1：分组
                            // let media_id = 'WnHaYbbZUpy6xrrbADac_zObgAaFqh474Row6ar4PLJXEfVeA2OnR65uUSREYn_i';

                            me_id = this.post('me_id');
                            content = this.post('editor_content');

                            content = content.replace(/<.*?mo-/g, '[').replace(/">/g, "]");
                            //self.end(province+city);
                            //查询条件
                            map = {};
                            sex = this.post('sex');

                            if (sex == 1 || sex == 2) {
                                map.sex = sex;
                            }
                            province = this.post('provincetext');

                            if (province != 0) {
                                map.province = province;
                            }
                            city = this.post('citytext');

                            if (city != 0) {
                                map.city = city;
                            }
                            //通过条件查询本地库数据
                            _context15.next = 20;
                            return model.where(map).field('openid').select();

                        case 20:
                            userinfo = _context15.sent;
                            _context15.next = 23;
                            return media_model.where({ 'id': me_id }).getField('media_id');

                        case 23:
                            media_id = _context15.sent;

                            media_id = media_id[0];
                            openids = [];

                            for (key in userinfo) {
                                //if (userinfo.hasOwnProperty(key)) {
                                openids.push(userinfo[key].openid);
                                // }
                            }
                            //self.end(aa);
                            res = '';

                            //判断是通过groupid还是openid进行群发

                            if (!(group_type == 1)) {
                                _context15.next = 54;
                                break;
                            }

                            _context15.t0 = send_type;
                            _context15.next = _context15.t0 === 'newsArea' ? 32 : _context15.t0 === 'textArea' ? 36 : _context15.t0 === 'imageArea' ? 40 : _context15.t0 === 'audioArea' ? 44 : _context15.t0 === 'videoArea' ? 48 : 52;
                            break;

                        case 32:
                            _context15.next = 34;
                            return massSendNews(api, media_id, group_id);

                        case 34:
                            res = _context15.sent;
                            return _context15.abrupt('break', 52);

                        case 36:
                            _context15.next = 38;
                            return massSendText(api, content, group_id);

                        case 38:
                            res = _context15.sent;
                            return _context15.abrupt('break', 52);

                        case 40:
                            _context15.next = 42;
                            return massSendImage(api, media_id, group_id);

                        case 42:
                            res = _context15.sent;
                            return _context15.abrupt('break', 52);

                        case 44:
                            _context15.next = 46;
                            return massSendVoice(api, media_id, group_id);

                        case 46:
                            res = _context15.sent;
                            return _context15.abrupt('break', 52);

                        case 48:
                            _context15.next = 50;
                            return massSendVideo(api, media_id, group_id);

                        case 50:
                            res = _context15.sent;
                            return _context15.abrupt('break', 52);

                        case 52:
                            _context15.next = 77;
                            break;

                        case 54:
                            _context15.t1 = send_type;
                            _context15.next = _context15.t1 === 'newsArea' ? 57 : _context15.t1 === 'textArea' ? 61 : _context15.t1 === 'imageArea' ? 65 : _context15.t1 === 'audioArea' ? 69 : _context15.t1 === 'videoArea' ? 73 : 77;
                            break;

                        case 57:
                            _context15.next = 59;
                            return massSendNews(api, media_id, openids);

                        case 59:
                            res = _context15.sent;
                            return _context15.abrupt('break', 77);

                        case 61:
                            _context15.next = 63;
                            return massSendText(api, content, openids);

                        case 63:
                            res = _context15.sent;
                            return _context15.abrupt('break', 77);

                        case 65:
                            _context15.next = 67;
                            return massSendImage(api, media_id, openids);

                        case 67:
                            res = _context15.sent;
                            return _context15.abrupt('break', 77);

                        case 69:
                            _context15.next = 71;
                            return massSendVoice(api, media_id, openids);

                        case 71:
                            res = _context15.sent;
                            return _context15.abrupt('break', 77);

                        case 73:
                            _context15.next = 75;
                            return massSendVideo(api, media_id, openids);

                        case 75:
                            res = _context15.sent;
                            return _context15.abrupt('break', 77);

                        case 77:
                            msg_id = res['msg_id']; //发送成功返回消息ID
                            //self.end(msg_id);

                            //判断是否群发消息是否成功

                            if (!(res['errcode'] == 0)) {
                                _context15.next = 103;
                                break;
                            }

                            //本地保存media_id和msg_id
                            //查询图文内容
                            data = {};

                            if (!(send_type == 'textArea')) {
                                _context15.next = 86;
                                break;
                            }

                            data.msg_id = msg_id;
                            data.material_wx_content = content;
                            data.type = send_type;
                            _context15.next = 97;
                            break;

                        case 86:
                            if (!me_id) {
                                _context15.next = 97;
                                break;
                            }

                            _context15.next = 89;
                            return media_model.where({ 'id': me_id }).find();

                        case 89:
                            wx_content = _context15.sent;

                            //self.end('aaa'+wx_content['material_content']);
                            material_content = wx_content['material_content'];
                            material_wx_content = wx_content['material_wx_content'];


                            data.mate_id = me_id;
                            data.msg_id = msg_id;
                            data.material_content = material_content;
                            data.material_wx_content = material_wx_content;
                            data.type = send_type;

                        case 97:
                            //self.end(data);
                            isAdd = masssend_model.thenAdd(data, { msg_id: msg_id });

                            if (!isAdd) {
                                _context15.next = 101;
                                break;
                            }

                            this.assign({ "navxs": true, "bg": "bg-dark" });
                            return _context15.abrupt('return', this.redirect("/admin/mpbase/mass"));

                        case 101:
                            _context15.next = 104;
                            break;

                        case 103:
                            this.fail("error");

                        case 104:
                        case 'end':
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        function masssendAction() {
            return _ref16.apply(this, arguments);
        }

        return masssendAction;
    }();

    /**
     * 查询已发送的群发消息
     */


    _class.prototype.hassendAction = function () {
        var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee16() {
            var self, data, Pages, pages, page, emoji;
            return _regenerator2.default.wrap(function _callee16$(_context16) {
                while (1) {
                    switch (_context16.prev = _context16.next) {
                        case 0:
                            self = this; //{{item.material_wx_content}}

                            _context16.next = 3;
                            return this.model('wx_masssend').page(this.get('page')).countSelect();

                        case 3:
                            data = _context16.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);
                            emoji = ["微笑", "撇嘴", "色", "发呆", "得意", "流泪", "害羞", "闭嘴", "睡", "大哭", "尴尬", "发怒", "调皮", "呲牙", "惊讶", "难过", "酷", "冷汗", "抓狂", "吐", "偷笑", "可爱", "白眼", "傲慢", "饥饿", "困", "惊恐", "流汗", "憨笑", "大兵", "奋斗", "咒骂", "疑问", "嘘", "晕", "折磨", "衰", "骷髅", "敲打", "再见", "擦汗", "抠鼻", "鼓掌", "糗大了", "坏笑", "左哼哼", "右哼哼", "哈欠", "鄙视", "委屈", "快哭了", "阴险", "亲亲", "吓", "可怜", "菜刀", "西瓜", "啤酒", "篮球", "乒乓", "咖啡", "饭", "猪头", "玫瑰", "凋谢", "示爱", "爱心", "心碎", "蛋糕", "闪电", "炸弹", "刀", "足球", "瓢虫", "便便", "月亮", "太阳", "礼物", "拥抱", "强", "弱", "握手", "胜利", "抱拳", "勾引", "拳头", "差劲", "爱你", "NO", "OK", "爱情", "飞吻", "跳跳", "发抖", "怄火", "转圈", "磕头", "回头", "跳绳", "挥手", "激动", "街舞", "献吻", "左太极", "右太极"];


                            this.assign('emoji', emoji);
                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);

                            this.assign({ "navxs": true, "bg": "bg-dark" });
                            return _context16.abrupt('return', self.display());

                        case 13:
                        case 'end':
                            return _context16.stop();
                    }
                }
            }, _callee16, this);
        }));

        function hassendAction() {
            return _ref17.apply(this, arguments);
        }

        return hassendAction;
    }();

    /**
     * 查询消息URL
     */


    _class.prototype.findurlAction = function () {
        var _ref18 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee17() {
            var self, msg_id, status, masssend_model, news, news_item, url;
            return _regenerator2.default.wrap(function _callee17$(_context17) {
                while (1) {
                    switch (_context17.prev = _context17.next) {
                        case 0:
                            self = this;
                            msg_id = this.get('msg_id');
                            status = this.get('status');
                            //self.end(status);

                            if (!status) {
                                _context17.next = 7;
                                break;
                            }

                            return _context17.abrupt('return', this.redirect('http://www.baidu.com'));

                        case 7:
                            masssend_model = this.model('wx_masssend');
                            _context17.next = 10;
                            return masssend_model.where({ msg_id: msg_id }).getField('material_wx_content');

                        case 10:
                            news = _context17.sent;

                            news = JSON.parse(news);
                            news_item = news.news_item;
                            //self.end(news_item[0]['url']);

                            url = news_item[0]['url'];
                            return _context17.abrupt('return', this.redirect(url));

                        case 15:
                        case 'end':
                            return _context17.stop();
                    }
                }
            }, _callee17, this);
        }));

        function findurlAction() {
            return _ref18.apply(this, arguments);
        }

        return findurlAction;
    }();

    /**
     * 删除已发送的消息
     */


    _class.prototype.delmassAction = function () {
        var _ref19 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee18() {
            var masssend_model, self, msg_id, isDel;
            return _regenerator2.default.wrap(function _callee18$(_context18) {
                while (1) {
                    switch (_context18.prev = _context18.next) {
                        case 0:
                            masssend_model = this.model('wx_masssend');
                            self = this;
                            msg_id = this.get('msg_id');
                            //let isDel = await masssend_model.where({msg_id:msg_id}).delete();

                            _context18.next = 5;
                            return masssend_model.where({ msg_id: msg_id }).update({ del_status: 1 });

                        case 5:
                            isDel = _context18.sent;

                            if (isDel) {
                                this.success({ name: "删除成功！", url: "/admin/mpbase/hassend" });
                            } else {
                                this.fail("error");
                            }

                        case 7:
                        case 'end':
                            return _context18.stop();
                    }
                }
            }, _callee18, this);
        }));

        function delmassAction() {
            return _ref19.apply(this, arguments);
        }

        return delmassAction;
    }();

    /**
     * 查看用户列表
     */


    _class.prototype.userlistAction = function () {
        var _ref20 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee19() {
            var data, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee19$(_context19) {
                while (1) {
                    switch (_context19.prev = _context19.next) {
                        case 0:
                            _context19.next = 2;
                            return this.model('wx_user').page(this.get('page'), 20).countSelect();

                        case 2:
                            data = _context19.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);
                            this.meta_title = "微信用户管理";
                            this.assign({ "navxs": true, "bg": "bg-dark" });
                            return _context19.abrupt('return', this.display());

                        case 11:
                        case 'end':
                            return _context19.stop();
                    }
                }
            }, _callee19, this);
        }));

        function userlistAction() {
            return _ref20.apply(this, arguments);
        }

        return userlistAction;
    }();

    /**
     * 自定义菜单页面
     */


    _class.prototype.selfmenuAction = function () {
        var _ref21 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee20() {
            var self, menu_model, data, d, str;
            return _regenerator2.default.wrap(function _callee20$(_context20) {
                while (1) {
                    switch (_context20.prev = _context20.next) {
                        case 0:
                            this.meta_title = "自定义菜单";
                            self = this;
                            menu_model = this.model("wx_menu");
                            _context20.next = 5;
                            return menu_model.order('pid ASC, sort ASC').select();

                        case 5:
                            data = _context20.sent;

                            console.log((0, _stringify2.default)(data));

                            d = createSelfMenu(data);
                            //console.log(d.menu.button[0]['type']);

                            str = (0, _stringify2.default)(d);

                            this.assign('menu', str);
                            return _context20.abrupt('return', self.display());

                        case 11:
                        case 'end':
                            return _context20.stop();
                    }
                }
            }, _callee20, this);
        }));

        function selfmenuAction() {
            return _ref21.apply(this, arguments);
        }

        return selfmenuAction;
    }();

    /**
     * 发送菜单到微信端
     */


    _class.prototype.sendselfmenutowxAction = function () {
        var _ref22 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee21() {
            var menu_model, data, menu, api, info, res;
            return _regenerator2.default.wrap(function _callee21$(_context21) {
                while (1) {
                    switch (_context21.prev = _context21.next) {
                        case 0:
                            menu_model = this.model('wx_menu');
                            _context21.next = 3;
                            return menu_model.order('pid ASC, sort ASC').select();

                        case 3:
                            data = _context21.sent;
                            menu = buildselfmenu(data);
                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);
                            //let api = new API('wx3e72261823fb62dd', '593bf2b86a00c913d8e38e9cf1d4e1ec');

                            console.log(menu);

                            info = function info(api) {
                                var deferred = think.defer();
                                api.createMenu(menu, function (err, result) {
                                    if (!think.isEmpty(result)) {
                                        deferred.resolve(result);
                                    } else {
                                        Console.error('err' + err);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context21.next = 10;
                            return info(api);

                        case 10:
                            res = _context21.sent;

                            console.log(res);

                            if (!(res.errmsg == 'ok')) {
                                _context21.next = 16;
                                break;
                            }

                            return _context21.abrupt('return', this.json('1'));

                        case 16:
                            return _context21.abrupt('return', this.json('2'));

                        case 17:
                        case 'end':
                            return _context21.stop();
                    }
                }
            }, _callee21, this);
        }));

        function sendselfmenutowxAction() {
            return _ref22.apply(this, arguments);
        }

        return sendselfmenutowxAction;
    }();

    /*
            "m_id": time,
            "pid": "0",
            "type": "",
            "name": "菜单名称",
            "sort": (length+1),
            "sub_button": []
    */

    _class.prototype.ajaxaddmenuAction = function () {
        var _ref23 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee22() {
            var m_id, name, sort, pid, type, url, web_token, media_id, menu_model, data, res;
            return _regenerator2.default.wrap(function _callee22$(_context22) {
                while (1) {
                    switch (_context22.prev = _context22.next) {
                        case 0:
                            m_id = this.post("id");
                            name = this.post("name");
                            sort = this.post('sort');
                            pid = this.post('pid');
                            type = this.post('type');
                            url = this.post('url');
                            web_token = '';
                            media_id = this.post('media_id');
                            menu_model = this.model("wx_menu");
                            data = {
                                "m_id": m_id,
                                "name": name,
                                "sort": sort,
                                "pid": pid,
                                "type": type,
                                "web_token": web_token,
                                "media_id": media_id,
                                "url": url
                            };
                            _context22.next = 12;
                            return menu_model.add(data);

                        case 12:
                            res = _context22.sent;

                            if (!res) {
                                _context22.next = 17;
                                break;
                            }

                            return _context22.abrupt('return', this.json("1"));

                        case 17:
                            return _context22.abrupt('return', this.json("2"));

                        case 18:
                        case 'end':
                            return _context22.stop();
                    }
                }
            }, _callee22, this);
        }));

        function ajaxaddmenuAction() {
            return _ref23.apply(this, arguments);
        }

        return ajaxaddmenuAction;
    }();

    /**
     * 通过素材ID获取素材链接
     */


    _class.prototype.getmaterialbyidAction = function () {
        var _ref24 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee23() {
            var model, id, data, url;
            return _regenerator2.default.wrap(function _callee23$(_context23) {
                while (1) {
                    switch (_context23.prev = _context23.next) {
                        case 0:
                            model = this.model("wx_material");
                            id = this.post('id');
                            _context23.next = 4;
                            return model.where({ id: id }).find();

                        case 4:
                            data = _context23.sent;
                            url = JSON.parse(data.material_wx_content).news_item.url;
                            return _context23.abrupt('return', this.json(JSON.parse(data.material_wx_content).news_item[0].url));

                        case 7:
                        case 'end':
                            return _context23.stop();
                    }
                }
            }, _callee23, this);
        }));

        function getmaterialbyidAction() {
            return _ref24.apply(this, arguments);
        }

        return getmaterialbyidAction;
    }();

    /**
     * 通过ID获取素材信息
     */


    _class.prototype.getmaterialAction = function () {
        var _ref25 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee24() {
            var model, id, data;
            return _regenerator2.default.wrap(function _callee24$(_context24) {
                while (1) {
                    switch (_context24.prev = _context24.next) {
                        case 0:
                            model = this.model("wx_material");
                            id = this.get("id");
                            _context24.next = 4;
                            return model.find(id);

                        case 4:
                            data = _context24.sent;
                            return _context24.abrupt('return', this.json(data));

                        case 6:
                        case 'end':
                            return _context24.stop();
                    }
                }
            }, _callee24, this);
        }));

        function getmaterialAction() {
            return _ref25.apply(this, arguments);
        }

        return getmaterialAction;
    }();
    //远程拿图片


    _class.prototype.spiderImage = function spiderImage(imgUrl, filePath) {
        var deferred = think.defer();
        _http2.default.get(imgUrl, function (res) {
            var imgData = "";
            res.setEncoding("binary");
            res.on("data", function (chunk) {
                imgData += chunk;
            });

            res.on("end", function () {
                _fs2.default.writeFileSync(filePath, imgData, "binary");
                deferred.resolve(filePath);
            });
        });
        return deferred.promise;
    };
    /**
     * 微信素材列表
     */


    _class.prototype.fodderlistAction = function () {
        var _ref26 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee25() {
            var self, model, data, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee25$(_context25) {
                while (1) {
                    switch (_context25.prev = _context25.next) {
                        case 0:
                            self = this;

                            self.meta_title = "微信素材列表";
                            self.assign({ "navxs": true, "bg": "bg-dark" });
                            model = self.model("wx_material");
                            _context25.next = 6;
                            return model.page(this.get('page')).order('add_time DESC').countSelect();

                        case 6:
                            data = _context25.sent;
                            Pages = think.adapter("pages", "page");
                            pages = new Pages(this.http);
                            page = pages.pages(data);

                            self.assign('pagerData', page);
                            self.assign('fodder_list', data.data);
                            return _context25.abrupt('return', this.display());

                        case 13:
                        case 'end':
                            return _context25.stop();
                    }
                }
            }, _callee25, this);
        }));

        function fodderlistAction() {
            return _ref26.apply(this, arguments);
        }

        return fodderlistAction;
    }();
    /**
     * 新建素材
     */


    _class.prototype.fodderAction = function fodderAction() {
        this.assign({ "navxs": true, "bg": "bg-dark" });
        this.active = "admin/mpbase/fodderlist";
        this.meta_title = "新建微信素材";
        return this.display();
    };
    /**
     * 删除素材
     */


    _class.prototype.deletefodderAction = function () {
        var _ref27 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee26() {
            var api, self, id, model, olddata, wxremove, wxres, res;
            return _regenerator2.default.wrap(function _callee26$(_context26) {
                while (1) {
                    switch (_context26.prev = _context26.next) {
                        case 0:
                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);
                            self = this;
                            id = self.get('id');
                            //let ids = self.get('ids')
                            //return self.end(ids);

                            model = self.model('wx_material');
                            _context26.next = 6;
                            return model.where({ id: ['IN', id] }).getField('media_id', false);

                        case 6:
                            olddata = _context26.sent;

                            // return self.end(olddata);
                            wxremove = function wxremove(api, data) {
                                var deferred = think.defer();
                                api.removeMaterial(data, function (err, result) {
                                    if (err) {
                                        deferred.reject(err);
                                    } else {
                                        deferred.resolve(result);
                                    }
                                });
                                return deferred.promise;
                            };

                            if (think.isEmpty(olddata)) {
                                _context26.next = 18;
                                break;
                            }

                            _context26.next = 11;
                            return wxremove(api, olddata[0]);

                        case 11:
                            wxres = _context26.sent;

                            if (!(wxres.errcode == 0)) {
                                _context26.next = 18;
                                break;
                            }

                            _context26.next = 15;
                            return model.where({ id: ['IN', id] }).delete();

                        case 15:
                            res = _context26.sent;

                            if (!res) {
                                _context26.next = 18;
                                break;
                            }

                            return _context26.abrupt('return', self.success({ name: '删除成功' }));

                        case 18:
                            return _context26.abrupt('return', self.fail('删除失败'));

                        case 19:
                        case 'end':
                            return _context26.stop();
                    }
                }
            }, _callee26, this);
        }));

        function deletefodderAction() {
            return _ref27.apply(this, arguments);
        }

        return deletefodderAction;
    }();

    /**
     * 模态窗信息列表
     * @returns {*}
     */


    _class.prototype.asyncfodderlistAction = function () {
        var _ref28 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee27() {
            var self, model, data;
            return _regenerator2.default.wrap(function _callee27$(_context27) {
                while (1) {
                    switch (_context27.prev = _context27.next) {
                        case 0:
                            self = this;
                            model = self.model("wx_material");
                            _context27.next = 4;
                            return model.page(this.get('page'), 20).order("add_time DESC").countSelect();

                        case 4:
                            data = _context27.sent;
                            return _context27.abrupt('return', this.json(data));

                        case 6:
                        case 'end':
                            return _context27.stop();
                    }
                }
            }, _callee27, this);
        }));

        function asyncfodderlistAction() {
            return _ref28.apply(this, arguments);
        }

        return asyncfodderlistAction;
    }();

    /**
     * 编辑
     */


    _class.prototype.foddereditAction = function () {
        var _ref29 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee28() {
            var id, model, data;
            return _regenerator2.default.wrap(function _callee28$(_context28) {
                while (1) {
                    switch (_context28.prev = _context28.next) {
                        case 0:
                            id = this.get('id');

                            this.assign({ "navxs": true, "bg": "bg-dark" });
                            this.active = "admin/mpbase/fodderlist";
                            this.meta_title = "编辑微信素材";
                            model = this.model("wx_material");
                            _context28.next = 7;
                            return model.where({ 'id': id }).find();

                        case 7:
                            data = _context28.sent;

                            this.assign('data', (0, _stringify2.default)(data));

                            //this.end(data);
                            return _context28.abrupt('return', this.display('fodder'));

                        case 10:
                        case 'end':
                            return _context28.stop();
                    }
                }
            }, _callee28, this);
        }));

        function foddereditAction() {
            return _ref29.apply(this, arguments);
        }

        return foddereditAction;
    }();
    /**
     * 给微信上传临时素材 /图片 更新本地库
     */


    _class.prototype.wxuploadtmpAction = function () {
        var _ref30 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee29() {
            var thumb_id, model, pic, paths, filePath, name, longpic, wx, api, img_result;
            return _regenerator2.default.wrap(function _callee29$(_context29) {
                while (1) {
                    switch (_context29.prev = _context29.next) {
                        case 0:
                            //上传图片
                            // this.end("暂不开发");
                            thumb_id = this.get('thumb_id');
                            model = this.model('picture');
                            // let data = await model.where({id:thumb_id}).find();
                            //获取图片

                            _context29.next = 4;
                            return get_pic(thumb_id, 1, 900, 500);

                        case 4:
                            pic = _context29.sent;

                            //判断是本地还是外地,如果是外地就抓回来
                            paths = void 0;
                            filePath = think.RESOURCE_PATH + '/upload/long/';

                            if (!(pic.indexOf("http://") == 0)) {
                                _context29.next = 18;
                                break;
                            }

                            think.mkdir(filePath);
                            _context29.next = 11;
                            return get_cover(thumb_id, "path");

                        case 11:
                            name = _context29.sent;
                            _context29.next = 14;
                            return this.spiderImage(pic, filePath + name);

                        case 14:
                            longpic = _context29.sent;

                            paths = longpic;
                            _context29.next = 19;
                            break;

                        case 18:
                            paths = think.ROOT_PATH + '/www/' + pic;

                        case 19:
                            //console.log(pic);
                            //return false;
                            wx = function wx(api, data) {
                                var deferred = think.defer();
                                api.uploadMaterial(data, 'thumb', function (err, result) {
                                    if (!think.isEmpty(result)) {
                                        deferred.resolve(result);
                                    } else {
                                        console.error(err);
                                    }
                                });
                                return deferred.promise;
                            };

                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);
                            _context29.next = 23;
                            return wx(api, paths);

                        case 23:
                            img_result = _context29.sent;

                            if (!img_result) {
                                _context29.next = 32;
                                break;
                            }

                            //删除远程文件
                            _fs2.default.unlinkSync(paths);
                            _context29.next = 28;
                            return model.where({ id: thumb_id }).update({ url: img_result.url, source_id: img_result.media_id });

                        case 28:
                            img_result.hs_image_src = pic;
                            return _context29.abrupt('return', this.json(img_result));

                        case 32:
                            return _context29.abrupt('return', this.json(""));

                        case 33:
                        case 'end':
                            return _context29.stop();
                    }
                }
            }, _callee29, this);
        }));

        function wxuploadtmpAction() {
            return _ref30.apply(this, arguments);
        }

        return wxuploadtmpAction;
    }();

    /**
     * 上传保存永久素材
     */


    _class.prototype.savefodderAction = function () {
        var _ref31 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee30() {
            var self, params, edit_id, model, api, olddata, wxr, wxrres, delrow, anews, wx, wxres, wxg, wx_news, time, data, effect;
            return _regenerator2.default.wrap(function _callee30$(_context30) {
                while (1) {
                    switch (_context30.prev = _context30.next) {
                        case 0:
                            self = this;
                            params = self.post("params");
                            edit_id = self.get("edit_id");
                            model = self.model('wx_material');
                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);

                            if (!edit_id) {
                                _context30.next = 16;
                                break;
                            }

                            _context30.next = 8;
                            return model.where({ id: edit_id }).find();

                        case 8:
                            olddata = _context30.sent;

                            wxr = function wxr(api, data) {
                                var deferred = think.defer();
                                api.removeMaterial(data, function (err, result) {
                                    if (err) {
                                        deferred.reject(err);
                                    } else {
                                        deferred.resolve(result);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context30.next = 12;
                            return wxr(api, olddata.media_id);

                        case 12:
                            wxrres = _context30.sent;
                            _context30.next = 15;
                            return model.where({ id: edit_id }).delete();

                        case 15:
                            delrow = _context30.sent;

                        case 16:
                            _context30.prev = 16;
                            anews = JSON.parse(params);

                            wx = function wx(api, data) {
                                var deferred = think.defer();
                                api.uploadNewsMaterial(data, function (err, result) {
                                    if (err) {
                                        deferred.reject(err);
                                    } else {
                                        deferred.resolve(result);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context30.next = 21;
                            return wx(api, anews);

                        case 21:
                            wxres = _context30.sent;

                            if (!wxres) {
                                _context30.next = 33;
                                break;
                            }

                            wxg = function wxg(api, data) {
                                var deferred = think.defer();
                                api.getMaterial(data, function (err, result) {
                                    if (err) {
                                        deferred.reject(err);
                                    } else {
                                        deferred.resolve(result);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context30.next = 26;
                            return wxg(api, wxres.media_id);

                        case 26:
                            wx_news = _context30.sent;

                            // let wx_news_str = JSON.stringify(wx_news);
                            time = new Date().getTime();
                            data = {
                                "media_id": wxres.media_id,
                                "material_content": params,
                                "material_wx_content": wx_news + '',
                                "web_token": 0,
                                "add_time": time
                            };
                            _context30.next = 31;
                            return model.add(data);

                        case 31:
                            effect = _context30.sent;

                            if (effect) {
                                self.success({ "name": "上传成功！", url: "" });
                            }

                        case 33:
                            self.fail("上传失败！");
                            _context30.next = 39;
                            break;

                        case 36:
                            _context30.prev = 36;
                            _context30.t0 = _context30['catch'](16);

                            self.fail("上传失败！");

                        case 39:
                        case 'end':
                            return _context30.stop();
                    }
                }
            }, _callee30, this, [[16, 36]]);
        }));

        function savefodderAction() {
            return _ref31.apply(this, arguments);
        }

        return savefodderAction;
    }();

    /**
     * 微信公众账号自动回复
     * @returns {*}
     */


    _class.prototype.autoreplyAction = function () {
        var _ref32 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee31() {
            var rule, i, current, ks, rs;
            return _regenerator2.default.wrap(function _callee31$(_context31) {
                while (1) {
                    switch (_context31.prev = _context31.next) {
                        case 0:
                            _context31.next = 2;
                            return this.model('wx_keywords_rule').where({}).select();

                        case 2:
                            rule = _context31.sent;
                            i = 0;

                        case 4:
                            if (!(i < rule.length)) {
                                _context31.next = 17;
                                break;
                            }

                            current = rule[i];
                            _context31.next = 8;
                            return this.model('wx_keywords').where({ id: ['IN', current.keywords_id] }).select();

                        case 8:
                            ks = _context31.sent;
                            _context31.next = 11;
                            return this.model('wx_replylist').where({ id: ['IN', current.reply_id] }).select();

                        case 11:
                            rs = _context31.sent;

                            rule[i].ks = ks;
                            rule[i].rs = rs;

                        case 14:
                            i++;
                            _context31.next = 4;
                            break;

                        case 17:
                            this.assign('rulelist', rule);
                            this.assign({ "navxs": true, "bg": "bg-dark" });
                            this.meta_title = "关键词回复";
                            return _context31.abrupt('return', this.display());

                        case 21:
                        case 'end':
                            return _context31.stop();
                    }
                }
            }, _callee31, this);
        }));

        function autoreplyAction() {
            return _ref32.apply(this, arguments);
        }

        return autoreplyAction;
    }();
    /**
     * 新建回复
     */


    _class.prototype.createrAction = function () {
        var _ref33 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee32() {
            var self, type, ruleid, model, currtime, currwebtoken, result, content, rulemodel, ruledata, rs, r;
            return _regenerator2.default.wrap(function _callee32$(_context32) {
                while (1) {
                    switch (_context32.prev = _context32.next) {
                        case 0:
                            self = this;
                            type = self.post('type');
                            ruleid = self.post('ruleid');

                            if (ruleid) {
                                _context32.next = 5;
                                break;
                            }

                            return _context32.abrupt('return', self.fail('规则不存在'));

                        case 5:
                            model = self.model('wx_replylist');
                            currtime = new Date().getTime();
                            currwebtoken = 0;
                            result = 0;
                            _context32.next = 11;
                            return model.startTrans();

                        case 11:
                            _context32.t0 = type;
                            _context32.next = _context32.t0 === 'text' ? 14 : _context32.t0 === 'image' ? 19 : _context32.t0 === 'audio' ? 20 : _context32.t0 === 'video' ? 21 : _context32.t0 === 'news' ? 22 : 23;
                            break;

                        case 14:
                            content = self.post('content');
                            _context32.next = 17;
                            return model.add({
                                'type': 'text',
                                'content': content,
                                'create_time': currtime,
                                'web_token': currwebtoken
                            });

                        case 17:
                            result = _context32.sent;
                            return _context32.abrupt('break', 23);

                        case 19:
                            return _context32.abrupt('break', 23);

                        case 20:
                            return _context32.abrupt('break', 23);

                        case 21:
                            return _context32.abrupt('break', 23);

                        case 22:
                            return _context32.abrupt('break', 23);

                        case 23:
                            if (!result) {
                                _context32.next = 45;
                                break;
                            }

                            rulemodel = self.model('wx_keywords_rule');
                            _context32.next = 27;
                            return rulemodel.where({ id: ruleid }).find();

                        case 27:
                            ruledata = _context32.sent;

                            console.log(ruledata);
                            rs = ruledata.reply_id.split(',');

                            rs.push(result);
                            _context32.next = 33;
                            return rulemodel.where({ id: ruleid }).update({ 'reply_id': rs.join(','), 'create_time': currtime });

                        case 33:
                            r = _context32.sent;

                            if (!r) {
                                _context32.next = 40;
                                break;
                            }

                            _context32.next = 37;
                            return model.commit();

                        case 37:
                            return _context32.abrupt('return', self.success({ name: '添加回复成功', rid: result }));

                        case 40:
                            _context32.next = 42;
                            return model.rollback();

                        case 42:
                            return _context32.abrupt('return', self.fail('回复添加失败'));

                        case 43:
                            _context32.next = 48;
                            break;

                        case 45:
                            _context32.next = 47;
                            return model.rollback();

                        case 47:
                            return _context32.abrupt('return', self.fail('回复添加失败'));

                        case 48:
                        case 'end':
                            return _context32.stop();
                    }
                }
            }, _callee32, this);
        }));

        function createrAction() {
            return _ref33.apply(this, arguments);
        }

        return createrAction;
    }();
    /**
     * 编辑规则名称
     */


    _class.prototype.ruleeditnameAction = function () {
        var _ref34 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee33() {
            var self, ruleid, rulename, rulemodel, res;
            return _regenerator2.default.wrap(function _callee33$(_context33) {
                while (1) {
                    switch (_context33.prev = _context33.next) {
                        case 0:
                            self = this;
                            ruleid = self.post('ruleid');
                            rulename = self.post('rulename');
                            rulemodel = self.model('wx_keywords_rule');
                            _context33.next = 6;
                            return rulemodel.where({ id: ruleid }).update({ rule_name: rulename });

                        case 6:
                            res = _context33.sent;

                            if (!res) {
                                _context33.next = 9;
                                break;
                            }

                            return _context33.abrupt('return', self.success({ name: '编辑成功' }));

                        case 9:
                            return _context33.abrupt('return', self.fail('编辑失败'));

                        case 10:
                        case 'end':
                            return _context33.stop();
                    }
                }
            }, _callee33, this);
        }));

        function ruleeditnameAction() {
            return _ref34.apply(this, arguments);
        }

        return ruleeditnameAction;
    }();
    /**
     * 新建规则
     */


    _class.prototype.createkruleAction = function () {
        var _ref35 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee34() {
            var rule_name, model, id;
            return _regenerator2.default.wrap(function _callee34$(_context34) {
                while (1) {
                    switch (_context34.prev = _context34.next) {
                        case 0:
                            //let id = 1;
                            rule_name = this.get('rule_name');
                            model = this.model('wx_keywords_rule');
                            _context34.next = 4;
                            return model.add({ 'rule_name': rule_name, 'create_time': new Date().getTime() });

                        case 4:
                            id = _context34.sent;

                            if (!id) {
                                _context34.next = 9;
                                break;
                            }

                            return _context34.abrupt('return', this.success({ name: "规则添加成功", ruleid: id }));

                        case 9:
                            return _context34.abrupt('return', this.fail('添加规则失败'));

                        case 10:
                        case 'end':
                            return _context34.stop();
                    }
                }
            }, _callee34, this);
        }));

        function createkruleAction() {
            return _ref35.apply(this, arguments);
        }

        return createkruleAction;
    }();
    /**
     * 删除规则
     */


    _class.prototype.ruledeleteAction = function () {
        var _ref36 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee35() {
            var self, ruleid, rulemodel, currentrule, kids, rids, kmodel, rmodel, kres, rres, rulres;
            return _regenerator2.default.wrap(function _callee35$(_context35) {
                while (1) {
                    switch (_context35.prev = _context35.next) {
                        case 0:
                            self = this;
                            ruleid = self.post('ruleid');
                            rulemodel = self.model('wx_keywords_rule');
                            _context35.next = 5;
                            return rulemodel.startTrans();

                        case 5:
                            _context35.next = 7;
                            return rulemodel.where({ id: ruleid }).find();

                        case 7:
                            currentrule = _context35.sent;
                            kids = currentrule.keywords_id;
                            rids = currentrule.reply_id;
                            kmodel = self.model('wx_keywords');
                            rmodel = self.model('wx_replylist');
                            _context35.next = 14;
                            return kmodel.where({ id: ['IN', kids] }).delete();

                        case 14:
                            kres = _context35.sent;
                            _context35.next = 17;
                            return rmodel.where({ id: ['IN', rids] }).delete();

                        case 17:
                            rres = _context35.sent;
                            _context35.next = 20;
                            return rulemodel.where({ id: ruleid }).delete();

                        case 20:
                            rulres = _context35.sent;

                            if (!rulres) {
                                _context35.next = 27;
                                break;
                            }

                            _context35.next = 24;
                            return rulemodel.commit();

                        case 24:
                            return _context35.abrupt('return', self.success({ name: '规则删除成功' }));

                        case 27:
                            _context35.next = 29;
                            return rulemodel.rollback();

                        case 29:
                            return _context35.abrupt('return', self.fail('规则删除失败'));

                        case 30:
                        case 'end':
                            return _context35.stop();
                    }
                }
            }, _callee35, this);
        }));

        function ruledeleteAction() {
            return _ref36.apply(this, arguments);
        }

        return ruledeleteAction;
    }();
    /**
     * 规则编辑 （关键字的添加和删除）
     */


    _class.prototype.ruleeditAction = function () {
        var _ref37 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee36() {
            var self, ruleid, rulemodel, ruledata, currtime, currwebtoken, edittype, kmodel, kid, r, tmp, ks, v, kname, ktype, _r, _ks;

            return _regenerator2.default.wrap(function _callee36$(_context36) {
                while (1) {
                    switch (_context36.prev = _context36.next) {
                        case 0:
                            self = this;
                            ruleid = self.post('ruleid');
                            rulemodel = self.model('wx_keywords_rule');
                            _context36.next = 5;
                            return rulemodel.where({ id: ruleid }).find();

                        case 5:
                            ruledata = _context36.sent;
                            currtime = new Date().getTime();
                            currwebtoken = 0;
                            edittype = self.post('edittype'); //判断是编辑关键字 1，还是回复内容 2

                            if (!(edittype == 1 && ruleid)) {
                                _context36.next = 45;
                                break;
                            }

                            //关键字操作
                            kmodel = self.model('wx_keywords');
                            kid = self.post('kid'); //如果带有kid表示该操作为删除，否则为添加

                            if (!kid) {
                                _context36.next = 25;
                                break;
                            }

                            _context36.next = 15;
                            return kmodel.where({ id: kid }).delete();

                        case 15:
                            r = _context36.sent;

                            if (!r) {
                                _context36.next = 22;
                                break;
                            }

                            tmp = [];
                            ks = ruledata.keywords_id.split(',');

                            for (v in ks) {
                                if (ks[v] != kid) {
                                    tmp.push(ks[v]);
                                }
                            }
                            _context36.next = 22;
                            return rulemodel.where({ id: ruleid }).update({ 'keywords_id': tmp.join(','), 'create_time': currtime });

                        case 22:
                            return _context36.abrupt('return', self.json(r));

                        case 25:
                            //新建关键字
                            kname = self.post('name');
                            ktype = self.post('type');
                            _r = 0;
                            _context36.prev = 28;
                            _context36.next = 31;
                            return kmodel.add({
                                'keyword_name': kname,
                                'match_type': ktype,
                                'rule_id': ruleid,
                                'create_time': currtime,
                                'web_token': currwebtoken
                            });

                        case 31:
                            _r = _context36.sent;
                            _context36.next = 37;
                            break;

                        case 34:
                            _context36.prev = 34;
                            _context36.t0 = _context36['catch'](28);
                            return _context36.abrupt('return', self.json(-1));

                        case 37:
                            if (!_r) {
                                _context36.next = 42;
                                break;
                            }

                            _ks = ruledata.keywords_id.split(',');

                            _ks.push(_r);
                            _context36.next = 42;
                            return rulemodel.where({ id: ruleid }).update({ 'keywords_id': _ks.join(','), 'create_time': currtime });

                        case 42:
                            return _context36.abrupt('return', self.json(_r));

                        case 43:
                            _context36.next = 46;
                            break;

                        case 45:
                            if (edittype == 2 && ruleid) {
                                //回复操作
                            } else {}

                        case 46:
                        case 'end':
                            return _context36.stop();
                    }
                }
            }, _callee36, this, [[28, 34]]);
        }));

        function ruleeditAction() {
            return _ref37.apply(this, arguments);
        }

        return ruleeditAction;
    }();
    /**
     * 删除回复
     */


    _class.prototype.deleterAction = function () {
        var _ref38 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee37() {
            var self, ruleid, rid, currtime, model, rr, rulemodel, ruledata, tmp, rs, i, r;
            return _regenerator2.default.wrap(function _callee37$(_context37) {
                while (1) {
                    switch (_context37.prev = _context37.next) {
                        case 0:
                            self = this;
                            ruleid = self.post('ruleid');
                            rid = self.post('rid');
                            currtime = new Date().getTime();

                            if (!(ruleid && rid)) {
                                _context37.next = 38;
                                break;
                            }

                            model = self.model('wx_replylist');
                            _context37.next = 8;
                            return model.startTrans();

                        case 8:
                            _context37.next = 10;
                            return model.where({ id: rid }).delete();

                        case 10:
                            rr = _context37.sent;

                            if (!rr) {
                                _context37.next = 33;
                                break;
                            }

                            rulemodel = self.model('wx_keywords_rule');
                            _context37.next = 15;
                            return rulemodel.where({ id: ruleid }).find();

                        case 15:
                            ruledata = _context37.sent;
                            tmp = [];
                            rs = ruledata.reply_id.split(',');

                            for (i in rs) {
                                if (rs[i] != rid) {
                                    tmp.push(rs[i]);
                                }
                            }
                            _context37.next = 21;
                            return rulemodel.where({ id: ruleid }).update({
                                'reply_id': tmp.join(','),
                                'create_time': currtime
                            });

                        case 21:
                            r = _context37.sent;

                            if (!r) {
                                _context37.next = 28;
                                break;
                            }

                            _context37.next = 25;
                            return model.commit();

                        case 25:
                            return _context37.abrupt('return', self.success({ name: '回复删除成功' }));

                        case 28:
                            _context37.next = 30;
                            return model.rollback();

                        case 30:
                            return _context37.abrupt('return', self.fail('回复删除失败'));

                        case 31:
                            _context37.next = 36;
                            break;

                        case 33:
                            _context37.next = 35;
                            return model.rollback();

                        case 35:
                            return _context37.abrupt('return', self.fail('删除失败'));

                        case 36:
                            _context37.next = 39;
                            break;

                        case 38:
                            return _context37.abrupt('return', self.fail('提交参数错误'));

                        case 39:
                        case 'end':
                            return _context37.stop();
                    }
                }
            }, _callee37, this);
        }));

        function deleterAction() {
            return _ref38.apply(this, arguments);
        }

        return deleterAction;
    }();
    /**
     *  编辑回复
     */


    _class.prototype.editreplyAction = function () {
        var _ref39 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee38() {
            var self, type, rid, model, currtime, currwebtoken, result, content;
            return _regenerator2.default.wrap(function _callee38$(_context38) {
                while (1) {
                    switch (_context38.prev = _context38.next) {
                        case 0:
                            self = this;
                            type = self.post('type');
                            rid = self.post('ruleid');
                            model = self.model('wx_replylist');
                            currtime = new Date().getTime();
                            currwebtoken = 0;
                            result = 0;
                            _context38.t0 = type;
                            _context38.next = _context38.t0 === 'text' ? 10 : _context38.t0 === 'image' ? 15 : _context38.t0 === 'audio' ? 16 : _context38.t0 === 'video' ? 17 : _context38.t0 === 'news' ? 18 : 19;
                            break;

                        case 10:
                            content = self.post('content');
                            _context38.next = 13;
                            return model.where({ id: rid }).update({
                                'content': content,
                                'create_time': currtime,
                                'web_token': currwebtoken
                            });

                        case 13:
                            result = _context38.sent;
                            return _context38.abrupt('break', 19);

                        case 15:
                            return _context38.abrupt('break', 19);

                        case 16:
                            return _context38.abrupt('break', 19);

                        case 17:
                            return _context38.abrupt('break', 19);

                        case 18:
                            return _context38.abrupt('break', 19);

                        case 19:
                            if (!result) {
                                _context38.next = 23;
                                break;
                            }

                            return _context38.abrupt('return', self.success({ name: '编辑成功' }));

                        case 23:
                            return _context38.abrupt('return', self.fail('编辑失败'));

                        case 24:
                        case 'end':
                            return _context38.stop();
                    }
                }
            }, _callee38, this);
        }));

        function editreplyAction() {
            return _ref39.apply(this, arguments);
        }

        return editreplyAction;
    }();
    /**
     * 消息自动回复
     */


    _class.prototype.messageAction = function () {
        var _ref40 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee39() {
            var model, data, _iterator2, _isArray2, _i2, _ref41, v, info, initinfo;

            return _regenerator2.default.wrap(function _callee39$(_context39) {
                while (1) {
                    switch (_context39.prev = _context39.next) {
                        case 0:
                            model = this.model('wx_replylist');
                            //初始化数据

                            data = [{ type: "text", reply_type: 2 }, { type: "news", reply_type: 2 }, { type: "image", reply_type: 2 }, { type: "music", reply_type: 2 }, { type: "video", reply_type: 2 }, { type: "voice", reply_type: 2 }];
                            _iterator2 = data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 3:
                            if (!_isArray2) {
                                _context39.next = 9;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context39.next = 6;
                                break;
                            }

                            return _context39.abrupt('break', 18);

                        case 6:
                            _ref41 = _iterator2[_i2++];
                            _context39.next = 13;
                            break;

                        case 9:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context39.next = 12;
                                break;
                            }

                            return _context39.abrupt('break', 18);

                        case 12:
                            _ref41 = _i2.value;

                        case 13:
                            v = _ref41;
                            _context39.next = 16;
                            return model.where(v).thenAdd(v);

                        case 16:
                            _context39.next = 3;
                            break;

                        case 18:
                            _context39.next = 20;
                            return model.where({ reply_type: 2 }).order("create_time DESC").select();

                        case 20:
                            info = _context39.sent;

                            this.assign('list', info);
                            //初始化
                            initinfo = info[0];

                            this.assign("initinfo", initinfo);
                            this.assign({ "navxs": true, "bg": "bg-dark" });
                            this.meta_title = "消息自动回复";
                            this.active = "admin/mpbase/autoreply";
                            return _context39.abrupt('return', this.display());

                        case 28:
                        case 'end':
                            return _context39.stop();
                    }
                }
            }, _callee39, this);
        }));

        function messageAction() {
            return _ref40.apply(this, arguments);
        }

        return messageAction;
    }();
    /**
     * 关注自动回复
     */


    _class.prototype.followAction = function () {
        var _ref42 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee40() {
            var model, data, _iterator3, _isArray3, _i3, _ref43, v, info, initinfo;

            return _regenerator2.default.wrap(function _callee40$(_context40) {
                while (1) {
                    switch (_context40.prev = _context40.next) {
                        case 0:
                            model = this.model('wx_replylist');
                            //首次访问检查数据库有没有数据,如果没有就添加
                            // 'news','music','video','voice','image','text'

                            data = [{ type: "text", reply_type: 1 }, { type: "news", reply_type: 1 }, {
                                type: "image",
                                reply_type: 1
                            }, { type: "music", reply_type: 1 }, { type: "video", reply_type: 1 }, { type: "voice", reply_type: 1 }];
                            _iterator3 = data, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 3:
                            if (!_isArray3) {
                                _context40.next = 9;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context40.next = 6;
                                break;
                            }

                            return _context40.abrupt('break', 18);

                        case 6:
                            _ref43 = _iterator3[_i3++];
                            _context40.next = 13;
                            break;

                        case 9:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context40.next = 12;
                                break;
                            }

                            return _context40.abrupt('break', 18);

                        case 12:
                            _ref43 = _i3.value;

                        case 13:
                            v = _ref43;
                            _context40.next = 16;
                            return model.where(v).thenAdd(v);

                        case 16:
                            _context40.next = 3;
                            break;

                        case 18:
                            _context40.next = 20;
                            return model.where({ reply_type: 1 }).order("create_time DESC").select();

                        case 20:
                            info = _context40.sent;

                            this.assign('list', info);
                            //初始化
                            initinfo = info[0];

                            this.assign({ "initinfo": initinfo });
                            this.assign({ "navxs": true, "bg": "bg-dark" });
                            this.meta_title = "关注自动回复";
                            this.active = "admin/mpbase/autoreply";
                            return _context40.abrupt('return', this.display());

                        case 28:
                        case 'end':
                            return _context40.stop();
                    }
                }
            }, _callee40, this);
        }));

        function followAction() {
            return _ref42.apply(this, arguments);
        }

        return followAction;
    }();
    /**
     * 保存回复数据
     */


    _class.prototype.saveinfoAction = function () {
        var _ref44 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee41() {
            var model, media_model, reply_type, send_type, editor_content, me_id, data, wx_content, material_content, targetArr, articles, host, key, tmpobj, isAdd;
            return _regenerator2.default.wrap(function _callee41$(_context41) {
                while (1) {
                    switch (_context41.prev = _context41.next) {
                        case 0:
                            model = this.model('wx_replylist');
                            media_model = this.model('wx_material');
                            reply_type = this.post('reply_type');
                            send_type = this.post('send_type');
                            editor_content = this.post('editor_content');
                            me_id = this.post('me_id') == "" ? null : this.post('me_id');
                            //this.end(reply_type+send_type+editor_content);

                            data = {};
                            //消息回复
                            /*if(reply_type == 2){
                             data.content = editor_content;
                             }else if(reply_type == 1){
                             //关注回复
                              }*/
                            //this.end(send_type);

                            if (!(send_type == 'textArea')) {
                                _context41.next = 12;
                                break;
                            }

                            data.type = 'text';
                            data.content = editor_content;
                            _context41.next = 30;
                            break;

                        case 12:
                            if (!(send_type == 'newsArea')) {
                                _context41.next = 30;
                                break;
                            }

                            console.log(!think.isEmpty(me_id));

                            if (think.isEmpty(me_id)) {
                                _context41.next = 27;
                                break;
                            }

                            _context41.next = 17;
                            return media_model.where({ 'id': me_id }).find();

                        case 17:
                            wx_content = _context41.sent;

                            //this.end('aaa'+wx_content['material_content']);
                            material_content = wx_content['material_content'];

                            material_content = JSON.parse(material_content);
                            targetArr = [];
                            articles = material_content.articles;
                            host = 'http://' + this.http.host;

                            for (key in articles) {
                                tmpobj = {};

                                tmpobj.title = articles[key]['title'];
                                tmpobj.description = articles[key]['digest'];
                                if (articles[key]['hs_image_src'].indexOf("http://") == 0) {
                                    tmpobj.picurl = articles[key]['hs_image_src'];
                                } else {
                                    tmpobj.picurl = host + articles[key]['hs_image_src'];
                                }

                                tmpobj.url = articles[key]['content_source_url'];
                                targetArr.push(tmpobj);
                            }
                            data.content = (0, _stringify2.default)(targetArr);
                            _context41.next = 28;
                            break;

                        case 27:
                            data.content = null;

                        case 28:
                            data.type = 'news';
                            data.media_id = me_id;

                        case 30:
                            data.reply_type = reply_type;
                            data.create_time = new Date().getTime();
                            data.id = this.post("id");
                            //this.end(data);
                            console.log(data);
                            // return false;
                            //查询该类型下是否有保存的回复信息
                            isAdd = '';
                            _context41.next = 37;
                            return model.update(data);

                        case 37:
                            isAdd = _context41.sent;

                            if (!isAdd) {
                                _context41.next = 45;
                                break;
                            }

                            if (!(reply_type == 2)) {
                                _context41.next = 43;
                                break;
                            }

                            return _context41.abrupt('return', this.success({ name: "修改成功!", url: "/admin/mpbase/message" }));

                        case 43:
                            if (!(reply_type == 1)) {
                                _context41.next = 45;
                                break;
                            }

                            return _context41.abrupt('return', this.success({ name: "修改成功!", url: "/admin/mpbase/follow" }));

                        case 45:
                        case 'end':
                            return _context41.stop();
                    }
                }
            }, _callee41, this);
        }));

        function saveinfoAction() {
            return _ref44.apply(this, arguments);
        }

        return saveinfoAction;
    }();

    /**
     * 打开自定义菜单
     */


    _class.prototype.custommenuAction = function () {
        var _ref45 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee42() {
            var data, self, model, ddata;
            return _regenerator2.default.wrap(function _callee42$(_context42) {
                while (1) {
                    switch (_context42.prev = _context42.next) {
                        case 0:
                            data = {
                                version: 20120000,
                                button: [{
                                    name: '1个福彩蛋',
                                    type: 1,
                                    act_list: [],
                                    sub_button: [{
                                        name: '投资赚钱吧',
                                        type: 1,
                                        act_list: [{ type: 2, value: 'http://www.baidu.com' }],
                                        sub_button: []
                                    }]
                                }]
                            };
                            self = this;
                            model = self.model('wx_custom_menu');
                            _context42.next = 5;
                            return model.where({ personality: null }).find();

                        case 5:
                            ddata = _context42.sent;

                            self.assign('data', ddata.custom_menu);
                            self.assign('menuid', ddata.id);
                            self.meta_title = "微信自定义菜单";
                            self.assign({ "navxs": true, "bg": "bg-dark" });
                            return _context42.abrupt('return', this.display());

                        case 11:
                        case 'end':
                            return _context42.stop();
                    }
                }
            }, _callee42, this);
        }));

        function custommenuAction() {
            return _ref45.apply(this, arguments);
        }

        return custommenuAction;
    }();
    /**
     * 保存自定义菜单
     */


    _class.prototype.savecustommenuAction = function () {
        var _ref46 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee43() {
            var self, newv, menuid, currwebtoken, currtime, model, res;
            return _regenerator2.default.wrap(function _callee43$(_context43) {
                while (1) {
                    switch (_context43.prev = _context43.next) {
                        case 0:
                            self = this;
                            newv = self.post('newv');
                            menuid = self.post('menuid'); //菜单ID

                            currwebtoken = 0;

                            console.log(newv);
                            //return false;
                            _context43.prev = 5;

                            if (newv) {
                                _context43.next = 8;
                                break;
                            }

                            return _context43.abrupt('return', self.fail('参数错误'));

                        case 8:
                            //newv = JSON.parse(newv);
                            currtime = new Date().getTime();
                            model = self.model('wx_custom_menu');
                            res = void 0;

                            if (!think.isEmpty(menuid)) {
                                _context43.next = 17;
                                break;
                            }

                            _context43.next = 14;
                            return model.add({
                                create_time: currtime,
                                custom_menu: newv,
                                web_token: currwebtoken
                            });

                        case 14:
                            res = _context43.sent;
                            _context43.next = 20;
                            break;

                        case 17:
                            _context43.next = 19;
                            return model.update({
                                id: menuid,
                                create_time: currtime,
                                custom_menu: newv,
                                web_token: currwebtoken
                            });

                        case 19:
                            res = _context43.sent;

                        case 20:
                            if (!res) {
                                _context43.next = 24;
                                break;
                            }

                            return _context43.abrupt('return', self.success({ name: '菜单保存成功' }));

                        case 24:
                            return _context43.abrupt('return', self.fail('菜单保存失败'));

                        case 25:
                            _context43.next = 30;
                            break;

                        case 27:
                            _context43.prev = 27;
                            _context43.t0 = _context43['catch'](5);
                            return _context43.abrupt('return', self.fail('参数错误'));

                        case 30:
                        case 'end':
                            return _context43.stop();
                    }
                }
            }, _callee43, this, [[5, 27]]);
        }));

        function savecustommenuAction() {
            return _ref46.apply(this, arguments);
        }

        return savecustommenuAction;
    }();

    /**
     * 生成微信菜单
     */


    _class.prototype.asyncwxmenuAction = function () {
        var _ref47 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee44() {
            var self, model, data, wxsubmit, dataObj, final, _iterator4, _isArray4, _i4, _ref48, a, tmpbtn, _iterator5, _isArray5, _i5, _ref49, b, tmpsub, api, res;

            return _regenerator2.default.wrap(function _callee44$(_context44) {
                while (1) {
                    switch (_context44.prev = _context44.next) {
                        case 0:
                            self = this;
                            model = self.model('wx_custom_menu');
                            _context44.next = 4;
                            return model.where({}).find();

                        case 4:
                            data = _context44.sent;

                            wxsubmit = function wxsubmit(api, data) {
                                var deferred = think.defer();
                                api.createMenu(data, function (err, result) {
                                    if (err) {
                                        deferred.reject(false);
                                    } else {
                                        deferred.resolve(result);
                                    }
                                });
                                return deferred.promise;
                            };

                            console.log(data);

                            dataObj = JSON.parse(data.custom_menu);
                            final = { button: [] };
                            // for(let i = 0; i < dataObj.button.length; i++){
                            //     let btn = dataObj.button[i];
                            //     let tmpbtn = { /*name:'', type:'', key:'', sub_button:''*/ };
                            //
                            //     tmpbtn.name = btn.name;
                            //     if(btn.sub_button.length > 0){
                            //         tmpbtn.sub_button = [];
                            //         for(let j = 0; j < btn.sub_button.length; j++){
                            //             let sub = btn.sub_button[i];
                            //             let tmpsub = { /*name:'', type:'', key:'', sub_button:''*/ };
                            //             tmpsub.name = sub.name;
                            //             tmpsub.type = 'view';
                            //             tmpsub.url = sub.act_list[i].value;
                            //
                            //             tmpbtn.sub_button.push(tmpsub);
                            //         }
                            //     }else if(!btn.hasOwnProperty('key')){
                            //         btn.key = (new Date().getTime())+"KEY";
                            //     }else{
                            //     }
                            //
                            //     final.button.push( tmpbtn );
                            // }

                            _iterator4 = dataObj.button, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 10:
                            if (!_isArray4) {
                                _context44.next = 16;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context44.next = 13;
                                break;
                            }

                            return _context44.abrupt('break', 66);

                        case 13:
                            _ref48 = _iterator4[_i4++];
                            _context44.next = 20;
                            break;

                        case 16:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context44.next = 19;
                                break;
                            }

                            return _context44.abrupt('break', 66);

                        case 19:
                            _ref48 = _i4.value;

                        case 20:
                            a = _ref48;
                            tmpbtn = {};

                            tmpbtn.name = a.name;
                            //console.log(a);

                            if (!think.isEmpty(a.sub_button)) {
                                _context44.next = 35;
                                break;
                            }

                            _context44.t0 = a.type;
                            _context44.next = _context44.t0 === '1' ? 27 : _context44.t0 === '2' ? 30 : 33;
                            break;

                        case 27:
                            tmpbtn.type = "click";
                            tmpbtn.key = a.act_list[0].value;
                            return _context44.abrupt('break', 33);

                        case 30:
                            tmpbtn.type = "view";
                            tmpbtn.url = a.act_list[0].value;
                            return _context44.abrupt('break', 33);

                        case 33:
                            _context44.next = 62;
                            break;

                        case 35:
                            tmpbtn.sub_button = [];
                            _iterator5 = a.sub_button, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

                        case 37:
                            if (!_isArray5) {
                                _context44.next = 43;
                                break;
                            }

                            if (!(_i5 >= _iterator5.length)) {
                                _context44.next = 40;
                                break;
                            }

                            return _context44.abrupt('break', 62);

                        case 40:
                            _ref49 = _iterator5[_i5++];
                            _context44.next = 47;
                            break;

                        case 43:
                            _i5 = _iterator5.next();

                            if (!_i5.done) {
                                _context44.next = 46;
                                break;
                            }

                            return _context44.abrupt('break', 62);

                        case 46:
                            _ref49 = _i5.value;

                        case 47:
                            b = _ref49;
                            tmpsub = {};

                            tmpsub.name = b.name;
                            //console.log(b.type);
                            _context44.t1 = b.type;
                            _context44.next = _context44.t1 === '1' ? 53 : _context44.t1 === '2' ? 56 : 59;
                            break;

                        case 53:
                            tmpsub.type = "click";
                            tmpsub.key = b.act_list[0].value;
                            return _context44.abrupt('break', 59);

                        case 56:
                            tmpsub.type = "view";
                            tmpsub.url = b.act_list[0].value;
                            return _context44.abrupt('break', 59);

                        case 59:
                            tmpbtn.sub_button.push(tmpsub);

                        case 60:
                            _context44.next = 37;
                            break;

                        case 62:
                            final.button.push(tmpbtn);
                            console.log(tmpbtn);

                        case 64:
                            _context44.next = 10;
                            break;

                        case 66:
                            think.log(final);
                            //return false;
                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);
                            _context44.next = 70;
                            return wxsubmit(api, final);

                        case 70:
                            res = _context44.sent;

                            // let res = true;
                            console.log(res);

                            if (!res) {
                                _context44.next = 76;
                                break;
                            }

                            return _context44.abrupt('return', self.success({ name: '微信菜单生成成功' }));

                        case 76:
                            return _context44.abrupt('return', self.fail('微信菜单生成失败'));

                        case 77:
                        case 'end':
                            return _context44.stop();
                    }
                }
            }, _callee44, this);
        }));

        function asyncwxmenuAction() {
            return _ref47.apply(this, arguments);
        }

        return asyncwxmenuAction;
    }();
    /**
     */

    _class.prototype.yj2dAction = function () {
        var _ref50 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee45() {
            var api, res, qrcod;
            return _regenerator2.default.wrap(function _callee45$(_context45) {
                while (1) {
                    switch (_context45.prev = _context45.next) {
                        case 0:
                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);
                            // let yj2d = function(api, sceneId) {
                            //     let deferred = think.defer();
                            //     api.createLimitQRCode({  sceneId: sceneId }, (err, result) => {
                            //         if (!think.isEmpty(result)) {
                            //             think.log(result, "createLimitQRCode");
                            //             deferred.resolve(result);
                            //         } else {
                            //             Console.error('err' + err)
                            //         }
                            //     });
                            //     return deferred.promise;
                            // }

                            _context45.next = 3;
                            return createLimitQRCode(api, 100);

                        case 3:
                            res = _context45.sent;

                            console.log((0, _stringify2.default)(res));
                            qrcod = api.showQRCodeURL(res.ticket);


                            this.assign('qrurl', qrcod);
                            // let id = this.get("ids");
                            // let res = await this.model('member_public').where({'id':id}).delete();
                            return _context45.abrupt('return', this.display());

                        case 8:
                        case 'end':
                            return _context45.stop();
                    }
                }
            }, _callee45, this);
        }));

        function yj2dAction() {
            return _ref50.apply(this, arguments);
        }

        return yj2dAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=mpbase.js.map