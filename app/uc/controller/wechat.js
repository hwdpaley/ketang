// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

exports.__esModule = true;

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

var _wechatApi = require('wechat-api');

var _wechatApi2 = _interopRequireDefault(_wechatApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$controller$bas) {
    (0, _inherits3.default)(_class, _think$controller$bas);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));
    }

    _class.prototype.init = function init(http) {
        _think$controller$bas.prototype.init.call(this, http);
    };

    _class.prototype.__before = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.model("setup").getset();

                        case 2:
                            this.setup = _context.sent;

                            this.api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);

                        case 4:
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
                            return this.session('webuser');

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
     * 微信服务器验证
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function indexAction() {
        var echostr = this.get('echostr');
        return this.end(echostr);
    };

    _class.prototype.reply = function reply(message) {
        this.http.res.reply(message);
    };

    //获取分类信息


    _class.prototype.category = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(id, field) {
            var cate;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            id = id || 0;
                            field = field || "";

                            if (!think.isEmpty(id)) {
                                _context3.next = 5;
                                break;
                            }

                            //this.fail('没有指定数据分类！');
                            this.http.error = new Error('没有指定数据分类！');
                            return _context3.abrupt('return', think.statusAction(702, this.http));

                        case 5:
                            _context3.next = 7;
                            return this.model("category").info(id, field);

                        case 7:
                            cate = _context3.sent;

                            if (!(cate && 1 == cate.status)) {
                                _context3.next = 18;
                                break;
                            }

                            _context3.t0 = cate.display;
                            _context3.next = _context3.t0 === 0 ? 12 : 15;
                            break;

                        case 12:
                            //this.fail('该分类禁止显示')
                            this.http.error = new Error('该分类禁止显示！');
                            return _context3.abrupt('return', think.statusAction(702, this.http));

                        case 15:
                            return _context3.abrupt('return', cate);

                        case 16:
                            _context3.next = 20;
                            break;

                        case 18:

                            //this.fail("分类不存在或者被禁用！");
                            this.http.error = new Error('分类不存在或者被禁用！');
                            return _context3.abrupt('return', think.statusAction(702, this.http));

                        case 20:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function category(_x, _x2) {
            return _ref3.apply(this, arguments);
        }

        return category;
    }();
    //关键词消息回复


    _class.prototype.textAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var message, key, kmodel, isKey, rulemodel, replyliststr, replylisttmp, replylist, i, randomi, _replymodel, _data, replymodel, datas, data, content;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            console.log(this.http);
                            message = this.post();

                            console.log("message-------------------" + message);

                            key = message.Content.trim();
                            kmodel = this.model('wx_keywords');
                            _context4.next = 7;
                            return kmodel.field('rule_id').where({ keyword_name: key }).find();

                        case 7:
                            isKey = _context4.sent;

                            if (think.isEmpty(isKey)) {
                                _context4.next = 23;
                                break;
                            }

                            //是关键字
                            rulemodel = this.model('wx_keywords_rule');
                            _context4.next = 12;
                            return rulemodel.where({ id: isKey.rule_id }).getField('reply_id', true);

                        case 12:
                            replyliststr = _context4.sent;
                            replylisttmp = replyliststr.split(',');
                            replylist = [];

                            for (i in replylisttmp) {
                                if (replylisttmp[i] != '') {
                                    replylist.push(replylisttmp[i]);
                                }
                            }

                            if (think.isEmpty(replylist)) {
                                _context4.next = 23;
                                break;
                            }

                            randomi = parseInt(Math.random() * replylist.length);
                            _replymodel = this.model('wx_replylist');
                            _context4.next = 21;
                            return _replymodel.where({ id: replylist[randomi] }).getField('content', true);

                        case 21:
                            _data = _context4.sent;
                            return _context4.abrupt('return', this.reply(_data));

                        case 23:
                            //普通消息回复
                            replymodel = this.model('wx_replylist');
                            _context4.next = 26;
                            return replymodel.where({ reply_type: 2 }).order("create_time DESC").select();

                        case 26:
                            datas = _context4.sent;
                            data = datas[0];
                            content = void 0;
                            _context4.t0 = data.type;
                            _context4.next = _context4.t0 === "text" ? 32 : _context4.t0 === "news" ? 34 : 36;
                            break;

                        case 32:
                            content = data.content;
                            return _context4.abrupt('break', 36);

                        case 34:
                            content = JSON.parse(data.content);
                            return _context4.abrupt('break', 36);

                        case 36:
                            this.reply(content);

                        case 37:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function textAction() {
            return _ref4.apply(this, arguments);
        }

        return textAction;
    }();

    //事件关注


    _class.prototype.eventAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var message, userinfo, member, resuser, datas, data, content, res, news_item, list, _iterator, _isArray, _i, _ref6, v;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            message = this.post();
                            _context5.t0 = message.Event;
                            _context5.next = _context5.t0 === "subscribe" ? 4 : _context5.t0 === "unsubscribe" ? 45 : _context5.t0 === "CLICK" ? 50 : _context5.t0 === "SCAN" ? 72 : 74;
                            break;

                        case 4:
                            //首次关注
                            console.log("首次关注------" + message.FromUserName);
                            _context5.next = 7;
                            return getUser(this.api, message.FromUserName);

                        case 7:
                            userinfo = _context5.sent;

                            console.log("userinfo-----------" + (0, _stringify2.default)(userinfo));
                            _context5.next = 11;
                            return this.model("member").where({ username: userinfo.nickname }).find();

                        case 11:
                            member = _context5.sent;

                            if (think.isEmpty(member)) {
                                _context5.next = 16;
                                break;
                            }

                            userinfo.uid = member.id;
                            _context5.next = 24;
                            break;

                        case 16:
                            userinfo.username = userinfo.nickname;
                            userinfo.real_name = userinfo.nickname;
                            userinfo.email = userinfo.nickname + '@qq.com';
                            userinfo.password = '7fe293a2a8994cca42668d5a37747d4f';
                            _context5.next = 22;
                            return this.model("member").add(userinfo);

                        case 22:
                            member = _context5.sent;

                            userinfo.uid = member;
                            // console.log("member-----------" + JSON.stringify(member));

                        case 24:
                            _context5.next = 26;
                            return this.model("wx_user").where({ openid: userinfo.openid }).find();

                        case 26:
                            resuser = _context5.sent;

                            if (!think.isEmpty(resuser.openid)) {
                                _context5.next = 31;
                                break;
                            }

                            _context5.next = 30;
                            return this.model("wx_user").add(userinfo);

                        case 30:
                            console.log("添加，userinfo-----------" + (0, _stringify2.default)(userinfo));

                        case 31:
                            _context5.next = 33;
                            return this.model("wx_replylist").where({ reply_type: 1 }).order("create_time DESC").select();

                        case 33:
                            datas = _context5.sent;
                            data = datas[0];
                            content = void 0;
                            _context5.t1 = data.type;
                            _context5.next = _context5.t1 === "text" ? 39 : _context5.t1 === "news" ? 41 : 43;
                            break;

                        case 39:
                            content = data.content;
                            return _context5.abrupt('break', 43);

                        case 41:
                            content = JSON.parse(data.content);
                            return _context5.abrupt('break', 43);

                        case 43:
                            // console.log("bieber_wx_url-------------"+this.cookie("bieber_wx_url"));
                            this.reply(content);
                            // await action("topic/index","index");
                            // this.redirect(this.setup.wx_url);
                            return _context5.abrupt('break', 76);

                        case 45:
                            //取消关注
                            console.log("取消关注-------------");
                            // let wx_user = await this.model("wx_user").where({ openid: message.FromUserName }).delete();
                            // wx_user = await this.model("member").where({ openid: message.FromUserName }).delete();
                            console.log("message------" + message.FromUserName);
                            _context5.next = 49;
                            return this.session('wx_openid', null);

                        case 49:
                            return _context5.abrupt('break', 76);

                        case 50:
                            _context5.next = 52;
                            return this.model("wx_material").find(message.EventKey);

                        case 52:
                            res = _context5.sent;
                            news_item = JSON.parse(res.material_wx_content);
                            list = news_item.news_item;
                            _iterator = list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 56:
                            if (!_isArray) {
                                _context5.next = 62;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context5.next = 59;
                                break;
                            }

                            return _context5.abrupt('break', 70);

                        case 59:
                            _ref6 = _iterator[_i++];
                            _context5.next = 66;
                            break;

                        case 62:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context5.next = 65;
                                break;
                            }

                            return _context5.abrupt('break', 70);

                        case 65:
                            _ref6 = _i.value;

                        case 66:
                            v = _ref6;

                            v.picurl = v.thumb_url;

                        case 68:
                            _context5.next = 56;
                            break;

                        case 70:
                            this.reply(list);
                            //todo
                            return _context5.abrupt('break', 76);

                        case 72:
                            //扫码事件监听
                            //todo
                            console.log(message);
                            return _context5.abrupt('break', 76);

                        case 74:
                            console.log(message);
                            return _context5.abrupt('break', 76);

                        case 76:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function eventAction() {
            return _ref5.apply(this, arguments);
        }

        return eventAction;
    }();

    _class.prototype.__call = function __call() {
        this.reply(DEFULT_AUTO_REPLY);
    };

    /**
     * 获取用户分组
     */


    _class.prototype.groupsAction = function groupsAction() {
        //let api = new API('wxec8fffd0880eefbe', 'a084f19ebb6cc5dddd2988106e739a07');
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        var self = this;
        this.api.getGroups(function (err, result) {
            if (!think.isEmpty(result)) {
                //think.log(result['groups'],"test");
                for (var _iterator2 = result['groups'], _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
                    var _ref7;

                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) break;
                        _ref7 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) break;
                        _ref7 = _i2.value;
                    }

                    var val = _ref7;

                    think.log(val['name'], "test");
                };
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };
    /**
     * 查询用户在哪个分组
     */


    _class.prototype.getwithgroupAction = function getwithgroupAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        var self = this;
        this.api.getWhichGroup('oVe9Ew0zHFp0up1CeNcK2J5RL4xs', function (err, result) {
            if (!think.isEmpty(result)) {
                think.log(result, "test");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };

    /**
     * 创建用户分组
     */


    _class.prototype.creategroupAction = function creategroupAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        var self = this;
        this.api.createGroup('旅游', function (err, result) {
            if (!think.isEmpty(result)) {
                think.log(result, "test");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };

    /**
     * 群发文本消息
     */


    _class.prototype.masssendtextAction = function masssendtextAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        //let api = new API('wxe8c1b5ac7db990b6', 'ebcd685e93715b3470444cf6b7e763e6');
        var self = this;
        this.api.massSendText('你好，恭喜你中奖了,这是测试信息', ['oXJPVwCuRDHRshz1yz5t-1Fdh9Ig', 'oXJPVwA0peWnTbnx3aDytJtCwdeo'], function (err, result) {
            if (!think.isEmpty(result)) {
                think.log(result, "masssendtext");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };
    /**
     * 群发图文消息
     */


    _class.prototype.masssendnewsAction = function masssendnewsAction() {
        //let api = new API('wxec8fffd0880eefbe', 'a084f19ebb6cc5dddd2988106e739a07');
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        var self = this;
        this.api.massSendNews('kiW60VzuoCNnoIgdpmrQ8mUaCeDHGOTg4z_ug1DtPkI', ['oXJPVwCuRDHRshz1yz5t-1Fdh9Ig', 'oXJPVwN4JY0Y3fAVDuvl3EWh2_uQ'], function (err, result) {
            //api.massSendNews('ys1SXTdWnZhTZQB77MODarSaJ36xfoTG15deo5aGM3eRvEiuT034AMaUocc66uq9','0',(err,result)=>{
            if (!think.isEmpty(result)) {
                think.log(result, "masssendnews");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };

    /**
     * 获取永久素材列表
     */


    _class.prototype.getmaterialsAction = function getmaterialsAction() {
        //let api = new API('wxec8fffd0880eefbe', 'a084f19ebb6cc5dddd2988106e739a07');
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        var self = this;
        this.api.getMaterials('image', 0, 10, function (err, result) {
            if (!think.isEmpty(result)) {
                think.log(result, "test");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };

    /**
     * 上传永久素材（缩略图）
     */


    _class.prototype.uploadmaterialAction = function uploadmaterialAction() {

        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        var self = this;
        //{"media_id":"Snt_yv6I9f5KMAJKz4GNZAjZSXJeIgZVbUgRey2STH8","url":"https://mmbiz.qlogo.cn/mmbiz/yNHpDQhqmZmaEjdMt6hokMa5ic2a8tjEmDp2tHVAxe3orww1bN4YIiayUBThKC9k3PKyr7OxeZ0vIklb2tMaKDXw/0?wx_fmt=jpeg"}
        this.api.uploadMaterial('D:\\webStorm\\CmsWing\\www\\static\\admin\\img\\m0.jpg', 'thumb', function (err, result) {
            //api.uploadThumbMaterial('D:\\webStorm\\CmsWing\\www\\static\\admin\\img\\m21.jpg',(err,result)=>{
            if (!think.isEmpty(result)) {
                think.log(result, "uploadmaterial");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };

    /**
     * 获取永久素材
     */


    _class.prototype.getmaterialAction = function getmaterialAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        var self = this;
        this.api.getMaterial('PW4hZzpj-j3qdr_hpRFsePOXn8w4YkAPcKfrOfnvVDCHcYZsp81YZcjLiUMiKg3s', function (err, result) {
            if (!think.isEmpty(result)) {
                think.log(result, "getmaterial");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };

    /**
     * 获取临时素材
     */


    _class.prototype.getmediaAction = function getmediaAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        var self = this;
        this.api.getMedia('PW4hZzpj-j3qdr_hpRFsePOXn8w4YkAPcKfrOfnvVDCHcYZsp81YZcjLiUMiKg3s', function (err, result) {
            if (!think.isEmpty(result)) {
                think.log(result, "getmedia");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };

    /**
     * 新增永久图文素材
     */


    _class.prototype.uploadNewsMaterialAction = function uploadNewsMaterialAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        var self = this;
        this.api.uploadNewsMaterial({
            "articles": [{
                "thumb_media_id": "_P6PWPwDdEROB-VD0RWrThuI-CfLgi3vm88mOWHvqtyAmU8Jp3UU1sNs2wfAaYf7",
                "author": "HH",
                "title": "Happy Day",
                "content_source_url": "www.qq.com",
                "content": "hello word",
                "digest": "test",
                "show_cover_pic": "1"
            }]
        }, function (err, result) {
            if (!think.isEmpty(result)) {
                think.log(result, "uploadNewsMaterial");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };

    /**
     * 上传多媒体文件（图文）
     */


    _class.prototype.uploadnewsAction = function uploadnewsAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        var self = this;
        this.api.uploadNews({
            "articles": [{
                "thumb_media_id": "_P6PWPwDdEROB-VD0RWrThuI-CfLgi3vm88mOWHvqtyAmU8Jp3UU1sNs2wfAaYf7",
                "author": "HH",
                "title": "Happy Day",
                "content_source_url": "www.qq.com",
                "content": "hello word",
                "digest": "test",
                "show_cover_pic": "1"
            }]
        }, function (err, result) {
            if (!think.isEmpty(result)) {
                think.log(result, "uploadnews");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };

    /**
     * 上传图文消息内的图片获取URL
     */


    _class.prototype.uploadimageAction = function uploadimageAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        var self = this;
        this.api.uploadImage('D:\\webStorm\\CmsWing\\www\\static\\admin\\img\\a3.png', function (err, result) {
            if (!think.isEmpty(result)) {
                think.log(result, "uploadimag");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };

    /**
     * 临时(获取thumb_media_id)
     */


    _class.prototype.uploadmediaAction = function uploadmediaAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        var self = this;
        this.api.uploadMedia('D:\\webStorm\\CmsWing\\www\\static\\admin\\img\\m0.jpg', 'thumb', function (err, result) {
            if (!think.isEmpty(result)) {
                think.log(result, "uploadmedia");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    };

    /**
     * 测试
     */


    _class.prototype.testAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var self, picpath;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
                            self = this;
                            _context6.next = 3;
                            return this.model('picture').find(34);

                        case 3:
                            picpath = _context6.sent;

                            this.api.uploadMedia(think.ROOT_PATH + '/www/' + picpath.path, 'thumb', function (err, result) {
                                if (!think.isEmpty(result)) {
                                    think.log(result, "getmaterial");
                                    self.end(result);
                                } else {
                                    console.error('err' + err);
                                }
                            });

                        case 5:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function testAction() {
            return _ref8.apply(this, arguments);
        }

        return testAction;
    }();

    /**
     * 获取关注者列表
     */


    _class.prototype.getusersAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var self;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            //let api = new API('wxec8fffd0880eefbe', 'a084f19ebb6cc5dddd2988106e739a07');
                            // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
                            self = this;

                            this.api.getFollowers(function (err, result) {
                                if (!think.isEmpty(result)) {

                                    think.log(result, "getuser");
                                    self.end(result['data']);
                                } else {
                                    Console.error('err' + err);
                                }
                            });

                        case 2:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function getusersAction() {
            return _ref9.apply(this, arguments);
        }

        return getusersAction;
    }();
    /**
     * 获取用户基本信息
     */

    _class.prototype.getuserinfoAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var getuserinfo, openid, result;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            getuserinfo = function getuserinfo(api, openid) {
                                var deferred = think.defer();
                                api.getUser({ openid: openid, lang: 'zh_CN' }, function (err, result) {
                                    if (!think.isEmpty(result)) {
                                        think.log(result, "getuserinfo");
                                        deferred.resolve(result);
                                    } else {
                                        Console.error('err' + err);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context8.next = 3;
                            return this.cache('getuserinfo');

                        case 3:
                            openid = _context8.sent;
                            _context8.next = 6;
                            return getuserinfo(this.api, openid);

                        case 6:
                            result = _context8.sent;
                            return _context8.abrupt('return', result);

                        case 8:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function getuserinfoAction() {
            return _ref10.apply(this, arguments);
        }

        return getuserinfoAction;
    }();

    /**
     * 批量获取用户基本信息
     */


    _class.prototype.getusersinfoAction = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
                            // let self = this;//tina,tony
                            this.api.batchGetUsers(['oXJPVwCuRDHRshz1yz5t-1Fdh9Ig', 'oXJPVwN4JY0Y3fAVDuvl3EWh2_uQ'], function (err, result) {
                                if (!think.isEmpty(result)) {
                                    think.log(result, "getusersinfo");
                                    self.end(result);
                                } else {
                                    Console.error('err' + err);
                                }
                            });

                        case 1:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function getusersinfoAction() {
            return _ref11.apply(this, arguments);
        }

        return getusersinfoAction;
    }();

    return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=wechat.js.map