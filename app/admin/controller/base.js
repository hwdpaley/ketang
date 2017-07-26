// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

exports.__esModule = true;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$controller$bas) {
    (0, _inherits3.default)(_class, _think$controller$bas);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));
    }

    /**
     * some base method in here
     */
    _class.prototype.init = function init(http) {
        _think$controller$bas.prototype.init.call(this, http);
    };

    _class.prototype.__before = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var is_login, url, notifications, approval;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.islogin();

                        case 2:
                            is_login = _context.sent;

                            if (is_login) {
                                _context.next = 5;
                                break;
                            }

                            return _context.abrupt('return', this.redirect('/admin/public/signin'));

                        case 5:
                            _context.next = 7;
                            return this.session('userInfo');

                        case 7:
                            this.user = _context.sent;

                            this.assign("userinfo", this.user);
                            _context.next = 11;
                            return this.model("auth_user_role").where({ user_id: this.user.uid }).getField('role_id', true);

                        case 11:
                            this.roleid = _context.sent;
                            _context.next = 14;
                            return this.model("setup").getset();

                        case 14:
                            this.setup = _context.sent;
                            _context.next = 17;
                            return this.isadmin();

                        case 17:
                            this.is_admin = _context.sent;
                            _context.next = 20;
                            return this.model('menu').getallmenu(this.user.uid, this.is_admin);

                        case 20:
                            this.adminmenu = _context.sent;

                            //console.log(this.adminmenu);
                            this.assign("setup", this.setup);
                            //菜单当前状态

                            /**
                             * 权限验证超级管理员
                             */
                            //let url = `${this.http.module}/${this.http.controller}/${think.sep+this.http.action}`;
                            //console.log(url);

                            //console.log(is_admin);
                            url = this.http.module + '/' + this.http.controller + '/' + this.http.action;
                            //console.log(url);
                            // if (!this.is_admin) {
                            //     let Auth = think.adapter("auth", "rbac");
                            //     let auth = new Auth(this.user.uid);
                            //     let res = await auth.check(url);
                            //     if (!res) {
                            //         //return this.fail('未授权访问!');
                            //         this.http.error = new Error('未授权访问!');
                            //         return think.statusAction(702, this.http);
                            //     }
                            // }

                            //console.log(this.user.uid);
                            //this.active = this.http.url.slice(1),
                            // console.log(this.active);

                            this.active = this.http.module + "/" + this.http.controller + "/" + this.http.action;
                            //think.log(this.active);
                            //后台提示
                            //审核提示
                            notifications = {};

                            notifications.count = 0;
                            notifications.data = [];
                            _context.next = 29;
                            return this.model("approval").count();

                        case 29:
                            approval = _context.sent;

                            if (approval > 0) {
                                notifications.count = notifications.count + Number(approval);
                                notifications.data.push({ type: "approval", info: '\u6709 ' + approval + ' \u6761\u5185\u5BB9\u5F85\u5BA1\u6838', url: "/admin/approval/index", ico: "fa-umbrella" });
                            }

                            //console.log(notifications);
                            this.assign({
                                "navxs": false,
                                "bg": "bg-black",
                                "notifications": notifications
                            });

                        case 32:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function __before() {
            return _ref.apply(this, arguments);
        }

        return __before;
    }();

    /**
     * 判断是否登录
     * @returns {boolean}
     */


    _class.prototype.islogin = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var user, res;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.session('userInfo');

                        case 2:
                            user = _context2.sent;
                            res = think.isEmpty(user) ? false : user.uid;
                            return _context2.abrupt('return', res);

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function islogin() {
            return _ref2.apply(this, arguments);
        }

        return islogin;
    }();

    /**
     * 检查当前用户是否为管理员
     * @param uid
     * @returns {*|boolean}
     */


    _class.prototype.isadmin = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(uid) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            uid = uid || null;

                            if (!think.isEmpty(uid)) {
                                _context3.next = 7;
                                break;
                            }

                            _context3.next = 4;
                            return this.islogin();

                        case 4:
                            _context3.t0 = _context3.sent;
                            _context3.next = 8;
                            break;

                        case 7:
                            _context3.t0 = uid;

                        case 8:
                            uid = _context3.t0;
                            return _context3.abrupt('return', uid && in_array(parseInt(uid), this.config('user_administrator')));

                        case 10:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function isadmin(_x) {
            return _ref3.apply(this, arguments);
        }

        return isadmin;
    }();
    /**
     * 对数据表中的单行或多行记录执行修改 GET参数id为数字或逗号分隔的数字
     *
     * @param {String} model 模型名称,供M函数使用的参数
     * @param {Object}  data  修改的数据
     * @param {Object}  where 查询时的where()方法的参数
     * @param {Object}  msg   执行正确和错误的消息 {'success':'','error':'', 'url':'','ajax':false}
     *                      url为跳转页面,ajax是否ajax方式(数字则为倒数计时秒数)
     *
     * @author arterli <arterli@qq.com>
     */


    _class.prototype.editRow = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(model, data, where, msg) {
            var id, fields, res;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            id = this.param('id');

                            id = think.isArray(id) ? id : id;
                            //如存在id字段，则加入该条件
                            fields = this.model(model).getSchema();

                            if (in_array('id', fields) && !think.isEmpty(id)) {
                                where = think.extend({ 'id': ['IN', id] }, where);
                            }
                            msg = think.extend({ 'success': '操作成功！', 'error': '操作失败！', 'url': '', 'ajax': this.isAjax() }, msg);
                            // model="document_tuoke";
                            _context4.next = 7;
                            return this.model(model).where(where).update(data);

                        case 7:
                            res = _context4.sent;

                            if (!res) {
                                _context4.next = 21;
                                break;
                            }

                            _context4.t0 = model;
                            _context4.next = _context4.t0 === 'channel' ? 12 : _context4.t0 === 'category' ? 14 : _context4.t0 === 'model' ? 16 : 18;
                            break;

                        case 12:
                            //更新频道缓存信息
                            update_cache("channel"); //更新频道缓存信息
                            return _context4.abrupt('break', 18);

                        case 14:
                            //更新全站分类缓存
                            update_cache("category"); //更新栏目缓存
                            return _context4.abrupt('break', 18);

                        case 16:
                            update_cache("model"); //更新栏目缓存
                            return _context4.abrupt('break', 18);

                        case 18:
                            this.success({ name: msg.success, url: msg.url });
                            _context4.next = 22;
                            break;

                        case 21:
                            this.fail(msg.error, msg.url);

                        case 22:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function editRow(_x2, _x3, _x4, _x5) {
            return _ref4.apply(this, arguments);
        }

        return editRow;
    }();

    /**
     * 禁用条目
     * @param {String} model 模型名称,供D函数使用的参数
     * @param {Object}  where 查询时的 where()方法的参数
     * @param {Object}  msg   执行正确和错误的消息,可以设置四个元素 {'success':'','error':'', 'url':'','ajax':false}
     *                     url为跳转页面,ajax是否ajax方式(数字则为倒数计时秒数)
     *
     * @author arterli <arterli@qq.com>
     */


    _class.prototype.forbid = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(model, where, msg) {
            var data;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            where = where || {}, msg = msg || { 'success': '状态禁用成功！', 'error': '状态禁用失败！' };
                            data = { 'status': 0 };
                            _context5.next = 4;
                            return this.editRow(model, data, where, msg);

                        case 4:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function forbid(_x6, _x7, _x8) {
            return _ref5.apply(this, arguments);
        }

        return forbid;
    }();

    /**
     * 恢复条目
     * @param {String} model 模型名称,供D函数使用的参数
     * @param {Object}  where 查询时的where()方法的参数
     * @param {Object}  msg   执行正确和错误的消息 {'success':'','error':'', 'url':'','ajax':false}
     *                     url为跳转页面,ajax是否ajax方式(数字则为倒数计时秒数)
     *
     * @author arterli <arterli@qq.com>
     */


    _class.prototype.resume = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(model, where, msg) {
            var data;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            where = where || {}, msg = msg || { 'success': '状态恢复成功！', 'error': '状态恢复失败！' };
                            data = { 'status': 1 };
                            _context6.next = 4;
                            return this.editRow(model, data, where, msg);

                        case 4:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function resume(_x9, _x10, _x11) {
            return _ref6.apply(this, arguments);
        }

        return resume;
    }();

    _class.prototype.onlineUp = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(model, where, msg) {
            var data;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            where = where || {}, msg = msg || { 'success': '状态恢复成功！', 'error': '状态恢复失败！' };
                            data = { 'online': 1 };
                            _context7.next = 4;
                            return this.editRow(model, data, where, msg);

                        case 4:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function onlineUp(_x12, _x13, _x14) {
            return _ref7.apply(this, arguments);
        }

        return onlineUp;
    }();

    _class.prototype.onlineDown = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(model, where, msg) {
            var data;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            where = where || {}, msg = msg || { 'success': '状态恢复成功！', 'error': '状态恢复失败！' };
                            data = { 'online': 2 };
                            _context8.next = 4;
                            return this.editRow(model, data, where, msg);

                        case 4:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function onlineDown(_x15, _x16, _x17) {
            return _ref8.apply(this, arguments);
        }

        return onlineDown;
    }();
    /**
     * 还原条目
     * @param {string} model 模型名称,供D函数使用的参数
     * @param {array}  where 查询时的where()方法的参数
     * @param {array}  msg   执行正确和错误的消息 {'success':'','error':'', 'url':'','ajax':false}
     *                     url为跳转页面,ajax是否ajax方式(数字则为倒数计时秒数)
     * @author arterli <arterli@qq.com>
     */


    _class.prototype.restore = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(model, where, msg) {
            var data;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            where = where || {}, msg = msg || { 'success': '状态还原成功！', 'error': '状态还原失败！' };
                            data = { 'status': 1 };

                            where = think.extend({ 'status': -1 }, where);
                            _context9.next = 5;
                            return this.editRow(model, data, where, msg);

                        case 5:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function restore(_x18, _x19, _x20) {
            return _ref9.apply(this, arguments);
        }

        return restore;
    }();

    /**
     * 条目假删除
     * @param {string} model 模型名称,供D函数使用的参数
     * @param {array}  where 查询时的where()方法的参数
     * @param {array} msg   执行正确和错误的消息 {'success':'','error':'', 'url':'','ajax':false}
     *                     url为跳转页面,ajax是否ajax方式(数字则为倒数计时秒数)
     *
     * @author arterli <arterli@qq.com>
     */


    _class.prototype.delete = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(model, where, msg) {
            var data;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            where = where || {}, msg = msg || { 'success': '删除成功！', 'error': '删除失败！' };
                            data = { 'status': -1 };
                            _context10.next = 4;
                            return this.editRow(model, data, where, msg);

                        case 4:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function _delete(_x21, _x22, _x23) {
            return _ref10.apply(this, arguments);
        }

        return _delete;
    }();

    /**
     * 设置一条或者多条数据的状态
     */


    _class.prototype.setstatusAction = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11(self, model) {
            var pk = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "id";
            var ids, status, map;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            if (!think.isEmpty(this.post('model'))) {
                                // console.log("post model---------" + JSON.stringify(this.post('model'));
                                model = this.post('model');
                            } else {
                                if (think.isEmpty(this.param('model'))) {
                                    model = model || this.http.controller;
                                } else {
                                    model = this.param('model');
                                }
                            }

                            console.log("model---------" + model);
                            ids = this.param('ids');
                            status = this.param('status');

                            status = parseInt(status);
                            if (think.isEmpty(ids)) {
                                this.fail("请选择要操作的数据");
                            }
                            map = {};

                            if (!think.isEmpty(this.param('pk'))) {
                                pk = this.param('pk');
                            }
                            map[pk] = ['IN', ids];
                            //let get = this.get();
                            //this.end(status);
                            _context11.t0 = status;
                            _context11.next = _context11.t0 === -1 ? 12 : _context11.t0 === 0 ? 15 : _context11.t0 === 1 ? 18 : _context11.t0 === 10 ? 21 : _context11.t0 === 11 ? 25 : 29;
                            break;

                        case 12:
                            _context11.next = 14;
                            return this.delete(model, map, { 'success': '删除成功', 'error': '删除失败' });

                        case 14:
                            return _context11.abrupt('break', 31);

                        case 15:
                            _context11.next = 17;
                            return this.forbid(model, map, { 'success': '禁用成功', 'error': '禁用失败' });

                        case 17:
                            return _context11.abrupt('break', 31);

                        case 18:
                            _context11.next = 20;
                            return this.resume(model, map, { 'success': '启用成功', 'error': '启用失败' });

                        case 20:
                            return _context11.abrupt('break', 31);

                        case 21:
                            //拓课下架
                            console.log("下架------" + (0, _stringify2.default)(map) + "," + (0, _stringify2.default)(model));
                            _context11.next = 24;
                            return this.onlineDown(model, map, { 'success': '下架成功', 'error': '启用失败' });

                        case 24:
                            return _context11.abrupt('break', 31);

                        case 25:
                            //拓课上架
                            console.log("上架------");
                            _context11.next = 28;
                            return this.onlineUp(model, map, { 'success': '上架成功', 'error': '启用失败' });

                        case 28:
                            return _context11.abrupt('break', 31);

                        case 29:
                            this.fail('参数错误');
                            return _context11.abrupt('break', 31);

                        case 31:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function setstatusAction(_x24, _x25) {
            return _ref11.apply(this, arguments);
        }

        return setstatusAction;
    }();

    /**
     * 排序
     */


    _class.prototype.sortAction = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12(self, model) {
            var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

            var param, sort, data, _iterator, _isArray, _i, _ref13, v, map, res;

            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            model = model || this.http.controller;
                            param = this.param();
                            sort = JSON.parse(param.sort);
                            data = [];
                            _iterator = sort, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 5:
                            if (!_isArray) {
                                _context12.next = 11;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context12.next = 8;
                                break;
                            }

                            return _context12.abrupt('break', 22);

                        case 8:
                            _ref13 = _iterator[_i++];
                            _context12.next = 15;
                            break;

                        case 11:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context12.next = 14;
                                break;
                            }

                            return _context12.abrupt('break', 22);

                        case 14:
                            _ref13 = _i.value;

                        case 15:
                            v = _ref13;
                            map = {};

                            map[id] = v.id;
                            map.sort = v.sort;
                            data.push(map);

                        case 20:
                            _context12.next = 5;
                            break;

                        case 22:
                            _context12.next = 24;
                            return this.model(model).updateMany(data);

                        case 24:
                            res = _context12.sent;

                            if (!(res > 0)) {
                                _context12.next = 36;
                                break;
                            }

                            _context12.t0 = model;
                            _context12.next = _context12.t0 === 'channel' ? 29 : _context12.t0 === 'category' ? 31 : 33;
                            break;

                        case 29:
                            //更新频道缓存信息
                            update_cache("channel"); //更新频道缓存信息
                            return _context12.abrupt('break', 33);

                        case 31:
                            //更新全站分类缓存
                            update_cache("category"); //更新栏目缓存
                            return _context12.abrupt('break', 33);

                        case 33:
                            return _context12.abrupt('return', this.success({ name: "更新排序成功！" }));

                        case 36:
                            return _context12.abrupt('return', this.fail("排序失败！"));

                        case 37:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        function sortAction(_x27, _x28) {
            return _ref12.apply(this, arguments);
        }

        return sortAction;
    }();

    _class.prototype.puliccacheAction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13(self, model) {
            var type, res, msg;
            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            type = this.param('type');

                            if (think.isEmpty(type)) {
                                type = model || this.http.controller;
                            }
                            res = false;
                            msg = "未知错误！";
                            _context13.t0 = type;
                            _context13.next = _context13.t0 === 'channel' ? 7 : _context13.t0 === 'category' ? 11 : _context13.t0 === 'model' ? 15 : 19;
                            break;

                        case 7:
                            //更新频道缓存信息
                            update_cache("channel"); //更新频道缓存信息
                            res = true;
                            msg = "更新导航缓存成功！";
                            return _context13.abrupt('break', 19);

                        case 11:
                            //更新全站分类缓存
                            update_cache("category"); //更新栏目缓存
                            res = true;
                            msg = "更新栏目缓存成功！";
                            return _context13.abrupt('break', 19);

                        case 15:
                            update_cache("model"); //更新模型缓存
                            res = true;
                            msg = "更新栏目缓存成功！";
                            return _context13.abrupt('break', 19);

                        case 19:
                            if (!res) {
                                _context13.next = 23;
                                break;
                            }

                            return _context13.abrupt('return', this.success({ name: msg }));

                        case 23:
                            return _context13.abrupt('return', this.fail(msg));

                        case 24:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        function puliccacheAction(_x30, _x31) {
            return _ref14.apply(this, arguments);
        }

        return puliccacheAction;
    }();
    /**
     * 返回后台节点数据
     * @param {boolean} tree    是否返回多维数组结构(生成菜单时用到),为false返回一维数组(生成权限节点时用到)
     * @retrun {array}
     *
     * 注意,返回的主菜单节点数组中有'controller'元素,以供区分子节点和主节点
     *
     * @author
     */


    _class.prototype.returnnodes = function () {
        var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14(tree) {
            var http, tree_nodes, nodes, list;
            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            tree = tree || true;
                            http = this.http;
                            //let modelname = http.module;

                            tree_nodes = [];

                            if (!(tree && !think.isEmpty(tree_nodes))) {
                                _context14.next = 5;
                                break;
                            }

                            return _context14.abrupt('return', tree_nodes);

                        case 5:
                            nodes = void 0;

                            if (!tree) {
                                _context14.next = 13;
                                break;
                            }

                            _context14.next = 9;
                            return this.model('menu').field('id,pid,title,url,tip,hide').order('sort asc').select();

                        case 9:
                            list = _context14.sent;

                            nodes = get_children(list, 0);
                            _context14.next = 16;
                            break;

                        case 13:
                            _context14.next = 15;
                            return this.model('menu').field('title,url,tip,pid').order('sort asc').select();

                        case 15:
                            nodes = _context14.sent;

                        case 16:
                            tree_nodes = nodes;
                            return _context14.abrupt('return', nodes);

                        case 18:
                        case 'end':
                            return _context14.stop();
                    }
                }
            }, _callee14, this);
        }));

        function returnnodes(_x32) {
            return _ref15.apply(this, arguments);
        }

        return returnnodes;
    }();

    /**
     * 处理文档列表显示
     * @param {array} list 列表数据
     * @param {integer} model_id 模型id
     */


    _class.prototype.parseDocumentList = function () {
        var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15(list, model_id) {
            var attrList, userList, groupList;
            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            model_id = model_id || 1;
                            _context15.next = 3;
                            return this.model('attribute').get_model_attribute(model_id, false, 'id,name,type,extra');

                        case 3:
                            attrList = _context15.sent;
                            _context15.next = 6;
                            return this.session("userList");

                        case 6:
                            userList = _context15.sent;

                            if (!think.isEmpty(userList)) {
                                _context15.next = 18;
                                break;
                            }

                            _context15.next = 10;
                            return this.model('member').field('id,real_name,groupid').select();

                        case 10:
                            userList = _context15.sent;
                            _context15.next = 13;
                            return this.model('member_group').field('groupid,name').select();

                        case 13:
                            groupList = _context15.sent;

                            userList.forEach(function (u) {
                                groupList.forEach(function (k) {
                                    if (k.groupid == u.groupid) {
                                        u.groupname = k.name;
                                    }
                                });
                            });

                            console.log("userList------" + (0, _stringify2.default)(userList));
                            _context15.next = 18;
                            return this.session("userList", userList);

                        case 18:
                            if (!think.isArray(list)) {
                                _context15.next = 21;
                                break;
                            }

                            list.forEach(function (data, k) {
                                var _loop = function _loop(key) {
                                    // console.log(key)
                                    if (!think.isEmpty(attrList[key])) {
                                        var extra = attrList[key]['extra'];
                                        var type = attrList[key]['type'];
                                        // if()
                                        // console.log(extra);
                                        if ('select' == type || 'checkbox' == type || 'radio' == type || 'bool' == type) {
                                            // 枚举/多选/单选/布尔型
                                            var options = parse_config_attr(extra);
                                            var oparr = (0, _keys2.default)(options);
                                            if (options && in_array(data[key], oparr)) {
                                                data[key] = options[data[key]];
                                            }
                                        } else if ('date' == type) {
                                            // 日期型
                                            data[key] = dateformat('Y-m-d', data[key]);
                                        } else if ('datetime' == type) {
                                            // 时间型
                                            data[key] = dateformat('Y-m-d H:i', data[key]);
                                        } else if ('pics' === type) {
                                            data[key] = '<span class="thumb-sm"><img alt="..." src="' + data[key] + '" class="img-responsive img-thumbnail"></span>';
                                        }
                                        if (key == 'uid') {
                                            userList.forEach(function (k) {
                                                if (k.id == data[key]) {
                                                    data[key] = k.real_name;
                                                    data['groupid'] = k.groupname;
                                                }
                                            });
                                        }
                                        // else if(key=='groupid'){
                                        //     userList.forEach((k) => {
                                        //         if(k.id==data['uid']){
                                        //             data['groupid']=k.groupname;
                                        //         }
                                        //     });
                                        // }
                                    }
                                };

                                //console.log(data);
                                for (var key in data) {
                                    _loop(key);
                                }
                                data.model_id = model_id;
                                list[k] = data;
                            });
                            //console.log(222)
                            return _context15.abrupt('return', list);

                        case 21:
                        case 'end':
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        function parseDocumentList(_x33, _x34) {
            return _ref16.apply(this, arguments);
        }

        return parseDocumentList;
    }();
    /**
     * 后台栏目权限验证方法
     * await this.admin_priv("init",cid,error) 查看
     * @param ac //init:查看,add:添加,edit:编辑,delete:删除,listorder:排序,push:推送,move:移动，examine：审核，disable：禁用
     * @param cid //栏目id
     * @param error //错误提示
     * @returns {PreventPromise}
     */


    _class.prototype.admin_priv = function () {
        var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee16(ac, cid) {
            var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "您所在的用户组,禁止本操作！";
            var priv;
            return _regenerator2.default.wrap(function _callee16$(_context16) {
                while (1) {
                    switch (_context16.prev = _context16.next) {
                        case 0:
                            if (this.is_admin) {
                                _context16.next = 7;
                                break;
                            }

                            _context16.next = 3;
                            return this.model("category_priv").priv(cid, this.roleid, ac, 1);

                        case 3:
                            priv = _context16.sent;

                            if (priv) {
                                _context16.next = 7;
                                break;
                            }

                            this.http.error = new Error(error);
                            return _context16.abrupt('return', think.statusAction(702, this.http));

                        case 7:
                        case 'end':
                            return _context16.stop();
                    }
                }
            }, _callee16, this);
        }));

        function admin_priv(_x35, _x36) {
            return _ref17.apply(this, arguments);
        }

        return admin_priv;
    }();

    return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=base.js.map