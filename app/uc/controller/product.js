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

var _pingpp = require('pingpp');

var _pingpp2 = _interopRequireDefault(_pingpp);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _wechatApi = require('wechat-api');

var _wechatApi2 = _interopRequireDefault(_wechatApi);

var _jssdk = require('./jssdk.js');

var _jssdk2 = _interopRequireDefault(_jssdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

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
                            this.jssdk = _jssdk2.default; //new JSSDK(this.setup.wx_AppID, this.setup.wx_AppSecret);

                        case 5:
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
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function indexAction() {
        //auto render template file index_index.html
        return this.display();
    };

    _class.prototype.oauthAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var openid, oauthUrl;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.session("wx_openid");

                        case 2:
                            openid = _context2.sent;

                            //openid =null;// await this.session("wx_openid",null);
                            console.log("oauthAction--------" + openid);
                            if (is_weixin(this.userAgent()) && (think.isEmpty(openid) || typeof openid == 'undefined')) {
                                // 先把url暂存起来
                                this.cookie("bieber_wx_url", this.http.url);
                                oauthUrl = _pingpp2.default.wxPubOauth.createOauthUrlForCode(this.setup.wx_AppID, 'http://' + this.http.host + '/uc/weixin/getopenid?showwxpaytitle=1', true);

                                console.log("oauthAction-----------" + oauthUrl);
                                this.redirect(oauthUrl);
                            }

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function oauthAction() {
            return _ref2.apply(this, arguments);
        }

        return oauthAction;
    }();
    //用微信客户端获取getopenid


    _class.prototype.getopenidAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var _this2 = this;

            var code, getopenid, openid, userinfo, wx_user, filePath, last_login_time, wx_userInfo;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            //获取用户openid
                            code = this.get("code");

                            console.log(code);
                            //获取openid

                            getopenid = function getopenid() {
                                var deferred = think.defer();
                                _pingpp2.default.wxPubOauth.getOpenid(_this2.setup.wx_AppID, _this2.setup.wx_AppSecret, code, function (err, openid) {
                                    //console.log(openid);
                                    deferred.resolve(openid);
                                    // ...
                                    // pass openid to extra['open_id'] and create a charge
                                    // ...
                                });
                                return deferred.promise;
                            };

                            _context3.next = 5;
                            return getopenid();

                        case 5:
                            openid = _context3.sent;
                            _context3.next = 8;
                            return getUser(this.api, openid);

                        case 8:
                            userinfo = _context3.sent;

                            console.log("userinfo-------------" + (0, _stringify2.default)(userinfo));
                            //如果没有关注先跳到关注页面
                            //if (userinfo.subscribe == 0) {
                            //    console.log(1111111111111)
                            //    this.redirect('/uc/weixin/follow');
                            //    return false;
                            //};
                            //userinfo.subscribe_time = userinfo.subscribe_time * 1000;
                            userinfo.subscribe_time = new Date().getTime();
                            _context3.next = 13;
                            return this.model("wx_user").where({ openid: openid }).find();

                        case 13:
                            wx_user = _context3.sent;
                            _context3.next = 16;
                            return this.session('wx_openid', openid);

                        case 16:
                            if (!think.isEmpty(wx_user)) {
                                _context3.next = 21;
                                break;
                            }

                            _context3.next = 19;
                            return this.model("wx_user").add(userinfo);

                        case 19:
                            _context3.next = 34;
                            break;

                        case 21:
                            _context3.next = 23;
                            return this.model("wx_user").where({ openid: openid }).update(userinfo);

                        case 23:
                            //更新微信头像
                            filePath = think.RESOURCE_PATH + '/upload/avatar/' + wx_user.uid;

                            think.mkdir(filePath);
                            _context3.next = 27;
                            return this.spiderImage(userinfo.headimgurl, filePath + '/avatar.png');

                        case 27:
                            _context3.next = 29;
                            return this.model("member").where({ id: wx_user.uid }).getField("last_login_time", true);

                        case 29:
                            last_login_time = _context3.sent;
                            wx_userInfo = {
                                'uid': wx_user.uid,
                                'username': userinfo.nickname,
                                'last_login_time': last_login_time
                            };
                            _context3.next = 33;
                            return this.session('webuser', wx_userInfo);

                        case 33:
                            this.redirect(this.cookie("bieber_wx_url"));

                        case 34:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function getopenidAction() {
            return _ref3.apply(this, arguments);
        }

        return getopenidAction;
    }();

    /**
     * 没有关注提示关注
     */


    _class.prototype.followAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var qrcod;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            //console.log(this.setup)
                            //创建关注二维码
                            //TODO
                            // let titck =await createLimitQRCode(this.api,1);
                            // console.log(titck);
                            qrcod = this.api.showQRCodeURL("gQF_8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMXRCbEExc2pmbDAxMDAwMGcwM08AAgTTf1JZAwQAAAAA");

                            this.assign("qrurl", qrcod);
                            console.log("qrurl============" + qrcod);
                            //think.log(qrcod);
                            // this.end(qrcod);
                            this.meta_title = '\u626B\u7801\u5173\u6CE8';
                            //判断浏览客户端

                            if (!checkMobile(this.userAgent())) {
                                _context4.next = 8;
                                break;
                            }

                            return _context4.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 8:
                            return _context4.abrupt('return', this.display());

                        case 9:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function followAction() {
            return _ref4.apply(this, arguments);
        }

        return followAction;
    }();

    /**
     * 微信账号与网站会员绑定
     */


    _class.prototype.signinAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var open_id, wx_info;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            // await this.session('wx_openid',"o33lBt0Pz3rEXUARWtUUO5GxuUG0");
                            open_id = void 0;

                            if (!think.isEmpty(this.cookie("wx_openid"))) {
                                _context5.next = 8;
                                break;
                            }

                            _context5.next = 4;
                            return this.session("wx_openid");

                        case 4:
                            open_id = _context5.sent;

                            this.cookie("wx_openid", open_id);
                            _context5.next = 9;
                            break;

                        case 8:
                            open_id = this.cookie("wx_openid");

                        case 9:
                            _context5.next = 11;
                            return this.session('wx_openid', null);

                        case 11:
                            _context5.next = 13;
                            return this.model("wx_user").where({ openid: open_id }).find();

                        case 13:
                            wx_info = _context5.sent;

                            this.assign("wx_info", wx_info);
                            this.meta_title = "账号绑定";
                            this.assign("openid", open_id);
                            this.assign("headimgurl", wx_info.headimgurl);
                            //todo

                            if (!checkMobile(this.userAgent())) {
                                _context5.next = 22;
                                break;
                            }

                            return _context5.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 22:
                            return _context5.abrupt('return', this.display());

                        case 23:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function signinAction() {
            return _ref5.apply(this, arguments);
        }

        return signinAction;
    }();
    /**完善资料绑定 */


    _class.prototype.organizingAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var data, res, reg, filePath, wx_userInfo;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            data = this.post();
                            //验证

                            res = void 0;

                            if (!think.isEmpty(data.username)) {
                                _context6.next = 6;
                                break;
                            }

                            return _context6.abrupt('return', this.fail("用户昵称不能为空！"));

                        case 6:
                            _context6.next = 8;
                            return this.model("member").where({ username: ltrim(data.username) }).find();

                        case 8:
                            res = _context6.sent;

                            if (think.isEmpty(res)) {
                                _context6.next = 11;
                                break;
                            }

                            return _context6.abrupt('return', this.fail("用户昵称已存在，请重新填写！"));

                        case 11:
                            if (!think.isEmpty(data.mobile)) {
                                _context6.next = 15;
                                break;
                            }

                            return _context6.abrupt('return', this.fail("手机号码不能为空！"));

                        case 15:
                            _context6.next = 17;
                            return this.model("member").where({ mobile: data.mobile }).find();

                        case 17:
                            res = _context6.sent;

                            if (think.isEmpty(res)) {
                                _context6.next = 20;
                                break;
                            }

                            return _context6.abrupt('return', this.fail("手机号码已存在，请重新填写！"));

                        case 20:
                            if (!think.isEmpty(data.email)) {
                                _context6.next = 24;
                                break;
                            }

                            return _context6.abrupt('return', this.fail("电子邮箱不能为空！"));

                        case 24:
                            _context6.next = 26;
                            return this.model("member").where({ email: data.email }).find();

                        case 26:
                            res = _context6.sent;

                            if (think.isEmpty(res)) {
                                _context6.next = 29;
                                break;
                            }

                            return _context6.abrupt('return', this.fail("电子邮箱已存在，请重新填写！"));

                        case 29:
                            if (!(think.isEmpty(data.password) && think.isEmpty(data.password2))) {
                                _context6.next = 33;
                                break;
                            }

                            return _context6.abrupt('return', this.fail("密码不能为空！"));

                        case 33:
                            if (!(data.password != data.password2)) {
                                _context6.next = 35;
                                break;
                            }

                            return _context6.abrupt('return', this.fail("两次输入的密码不一致，请重新填写！"));

                        case 35:
                            data.status = 1;
                            data.reg_time = new Date().valueOf();
                            data.reg_ip = _ip2int(this.ip());
                            data.password = encryptPassword(data.password);
                            _context6.next = 41;
                            return this.model("member").add(data);

                        case 41:
                            reg = _context6.sent;

                            if (think.isEmpty(reg)) {
                                _context6.next = 49;
                                break;
                            }

                            _context6.next = 45;
                            return this.model("wx_user").where({ openid: data.openid }).update({ uid: reg });

                        case 45:
                            //更新微信头像
                            filePath = think.RESOURCE_PATH + '/upload/avatar/' + reg;

                            think.mkdir(filePath);
                            _context6.next = 49;
                            return this.spiderImage(data.headimgurl, filePath + '/avatar.png');

                        case 49:
                            console.log(data);
                            _context6.next = 52;
                            return this.model("member").autoLogin({ id: reg }, this.ip());

                        case 52:
                            //更新用户登录信息，自动登陆
                            wx_userInfo = {
                                'uid': reg,
                                'username': data.username,
                                'last_login_time': data.reg_time
                            };
                            _context6.next = 55;
                            return this.session('webuser', wx_userInfo);

                        case 55:
                            _context6.next = 57;
                            return this.session('wx_openid', data.openid);

                        case 57:
                            this.cookie('wx_openid', null);
                            return _context6.abrupt('return', this.success({ name: "绑定成功", url: "/uc/index" }));

                        case 59:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function organizingAction() {
            return _ref6.apply(this, arguments);
        }

        return organizingAction;
    }();
    /**登录绑定 */


    _class.prototype.logonbindingAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var data, username, password, res, wx_info, filePath, fail;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            data = this.post();
                            //console.log(data);

                            username = this.post('username');
                            password = this.post('password');

                            password = encryptPassword(password);
                            console.log(data);

                            _context7.next = 7;
                            return this.model("member").signin(username, password, this.ip(), 5, 0);

                        case 7:
                            res = _context7.sent;

                            if (!(0 < res.uid)) {
                                _context7.next = 27;
                                break;
                            }

                            _context7.next = 11;
                            return this.model("wx_user").where({ openid: data.openid }).find();

                        case 11:
                            wx_info = _context7.sent;
                            _context7.next = 14;
                            return this.model("wx_user").where({ openid: data.openid }).update({ uid: res.uid });

                        case 14:
                            //更新微信头像
                            filePath = think.RESOURCE_PATH + '/upload/avatar/' + res.uid;

                            think.mkdir(filePath);
                            _context7.next = 18;
                            return this.spiderImage(data.headimgurl, filePath + '/avatar.png');

                        case 18:
                            res.username = wx_info.nickname;
                            _context7.next = 21;
                            return this.session('webuser', res);

                        case 21:
                            _context7.next = 23;
                            return this.session('wx_openid', data.openid);

                        case 23:
                            this.cookie('wx_openid', null);
                            //TODO 用户密钥
                            return _context7.abrupt('return', this.success({ name: "绑定成功", url: "/uc/index" }));

                        case 27:
                            //登录失败
                            fail = void 0;
                            _context7.t0 = res;
                            _context7.next = _context7.t0 === -1 ? 31 : _context7.t0 === -2 ? 33 : 35;
                            break;

                        case 31:
                            fail = '用户不存在或被禁用';
                            return _context7.abrupt('break', 37);

                        case 33:
                            fail = '密码错误';
                            return _context7.abrupt('break', 37);

                        case 35:
                            fail = '未知错误';
                            return _context7.abrupt('break', 37);

                        case 37:
                            this.fail(fail);

                        case 38:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function logonbindingAction() {
            return _ref7.apply(this, arguments);
        }

        return logonbindingAction;
    }();
    /**
     * 更新微信头像
     */


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

    _class.prototype.tuokecopyAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var data, openid, map, res, mmap, document, info, doc, _data, islogin, _document, _info, cname, mytuokeid, _res;

            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            if (!is_weixin(this.userAgent())) {
                                _context8.next = 33;
                                break;
                            }

                            data = this.post();

                            console.log(data);
                            _context8.next = 5;
                            return this.session("wx_openid");

                        case 5:
                            openid = _context8.sent;


                            //已是微信用户，

                            map = {
                                openid: openid,
                                docid: data.docid
                            };
                            _context8.next = 9;
                            return this.model("doc_wxuser").where(map).find();

                        case 9:
                            res = _context8.sent;

                            console.log(res);

                            if (think.isEmpty(res)) {
                                _context8.next = 16;
                                break;
                            }

                            console.log("have---------" + res);
                            return _context8.abrupt('return', this.success({ status: 0, name: "用户已经报名!" }));

                        case 16:
                            mmap = {
                                openid: openid,
                                docid: data.docid,
                                status: 1,
                                create_time: new Date().valueOf()
                            };

                            console.log(mmap);
                            _context8.next = 20;
                            return this.model("doc_wxuser").add(mmap);

                        case 20:
                            res = _context8.sent;

                            //报名人数+1
                            document = this.model('document');
                            _context8.next = 24;
                            return document.detail(data.docid);

                        case 24:
                            info = _context8.sent;

                            info.addnums++;
                            console.log("info.nums" + info.addnums);
                            //报名人数+1
                            _context8.next = 29;
                            return document.updates(info);

                        case 29:
                            doc = _context8.sent;
                            return _context8.abrupt('return', this.success({ status: 0, name: "用户报名成功!" }));

                        case 31:
                            _context8.next = 61;
                            break;

                        case 33:
                            //PC端
                            _data = this.post();

                            console.log(_data);
                            _context8.next = 37;
                            return this.islogin();

                        case 37:
                            islogin = _context8.sent;

                            if (islogin) {
                                _context8.next = 40;
                                break;
                            }

                            return _context8.abrupt('return', this.success({ status: -1, name: "请先登录，谢谢参与" }));

                        case 40:
                            console.log("islogn----------" + islogin);
                            _document = this.model('document');
                            _context8.next = 44;
                            return _document.detail(_data.docId);

                        case 44:
                            _info = _context8.sent;

                            if (!(_info.uid == islogin)) {
                                _context8.next = 47;
                                break;
                            }

                            return _context8.abrupt('return', this.success({ status: 0, name: "您已经拥有该拓客模板!" }));

                        case 47:
                            _info.uid = islogin;
                            _info.id = null;
                            _info.create_time = null;
                            _info.position = 0;
                            cname = _data.cname;
                            _context8.next = 54;
                            return this.model('category').where({ name: cname }).find();

                        case 54:
                            mytuokeid = _context8.sent;

                            console.log("mytuokeid.id===================" + mytuokeid.id);
                            _info.category_id = mytuokeid.id; //我的拓客模板
                            // console.log("tuoke info------"+JSON.stringify(info));
                            _context8.next = 59;
                            return _document.updates(_info);

                        case 59:
                            _res = _context8.sent;
                            return _context8.abrupt('return', this.success({ status: 0, name: "拓客模板拷贝成功!" }));

                        case 61:
                            return _context8.abrupt('return', this.success({ status: -1, name: "用户报名失败!" }));

                        case 62:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function tuokecopyAction() {
            return _ref8.apply(this, arguments);
        }

        return tuokecopyAction;
    }();
    //报名


    _class.prototype.enrollAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var data, openid, map, res, mmap, document, info, doc, _data2, islogin, _openid, _mmap, _document2, _info2, _doc;

            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            if (!is_weixin(this.userAgent())) {
                                _context9.next = 33;
                                break;
                            }

                            data = this.post();

                            console.log(data);
                            _context9.next = 5;
                            return this.session("wx_openid");

                        case 5:
                            openid = _context9.sent;


                            //已是微信用户，

                            map = {
                                openid: openid,
                                docid: data.docid
                            };
                            _context9.next = 9;
                            return this.model("doc_wxuser").where(map).find();

                        case 9:
                            res = _context9.sent;

                            console.log(res);

                            if (think.isEmpty(res)) {
                                _context9.next = 16;
                                break;
                            }

                            console.log("have---------" + res);
                            return _context9.abrupt('return', this.success({ status: 0, name: "用户已经报名!" }));

                        case 16:
                            mmap = {
                                openid: openid,
                                docid: data.docid,
                                status: 1,
                                create_time: new Date().valueOf()
                            };

                            console.log(mmap);
                            _context9.next = 20;
                            return this.model("doc_wxuser").add(mmap);

                        case 20:
                            res = _context9.sent;

                            //报名人数+1
                            document = this.model('document');
                            _context9.next = 24;
                            return document.detail(data.docid);

                        case 24:
                            info = _context9.sent;

                            info.addnums++;
                            console.log("info.nums" + info.addnums);
                            //报名人数+1
                            _context9.next = 29;
                            return document.updates(info);

                        case 29:
                            doc = _context9.sent;
                            return _context9.abrupt('return', this.success({ status: 0, name: "用户报名成功!" }));

                        case 31:
                            _context9.next = 63;
                            break;

                        case 33:
                            //PC端
                            _data2 = this.post();

                            console.log(_data2);
                            _context9.next = 37;
                            return this.islogin();

                        case 37:
                            islogin = _context9.sent;

                            if (islogin) {
                                _context9.next = 40;
                                break;
                            }

                            return _context9.abrupt('return', this.success({ status: -1, name: "请先登录，谢谢参与" }));

                        case 40:
                            console.log("islogn----------" + islogin);
                            _context9.next = 43;
                            return this.model("wx_user").where({ uid: islogin }).getField('openid');

                        case 43:
                            _openid = _context9.sent;

                            console.log("openid----------" + _openid);

                            if (!think.isEmpty(_openid)) {
                                _context9.next = 47;
                                break;
                            }

                            return _context9.abrupt('return', this.success({ status: -1, name: "请先关注微信公众号，谢谢参与" }));

                        case 47:
                            _mmap = {
                                openid: _openid[0],
                                docid: _data2.docid,
                                status: 1,
                                create_time: new Date().valueOf()
                            };

                            console.log(_mmap);
                            _context9.next = 51;
                            return this.model("doc_wxuser").add(_mmap);

                        case 51:
                            _context9.next = 53;
                            return this.model("wx_user").where({ openid: _openid[0] }).update({ phone: _data2.phone });

                        case 53:
                            _document2 = this.model('document');
                            _context9.next = 56;
                            return _document2.detail(_data2.docid);

                        case 56:
                            _info2 = _context9.sent;

                            _info2.addnums++;
                            console.log("info.nums" + _info2.addnums);
                            //报名人数+1
                            _context9.next = 61;
                            return _document2.updates(_info2);

                        case 61:
                            _doc = _context9.sent;
                            return _context9.abrupt('return', this.success({ status: 0, name: "用户报名成功!" }));

                        case 63:
                            return _context9.abrupt('return', this.success({ status: -1, name: "用户报名失败!" }));

                        case 64:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function enrollAction() {
            return _ref9.apply(this, arguments);
        }

        return enrollAction;
    }();

    _class.prototype.tuokeAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var uurl, aa, signPackage, id, document, info, islogin, str, img, cate, keywords, temp, model, pid, pinfo, i, nav, lastinfo, plist, ptree_, ptree, model_id, p_id, table, p_info, openid, map, res, oid, _map, _res2;

            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            uurl = "http://www.gzxinbibo.com" + this.http.url;

                            console.log("url-------------" + uurl);
                            if (!is_weixin(this.userAgent())) {
                                this.redirect("/uc/public/login");
                            }

                            if (!is_weixin(this.userAgent())) {
                                _context10.next = 12;
                                break;
                            }

                            _context10.next = 6;
                            return this.oauthAction();

                        case 6:
                            aa = function aa(jssdk, url) {
                                var deferred = think.defer();
                                jssdk.getSignPackage(url, function (err, signPackage) {
                                    if (!think.isEmpty(signPackage)) {
                                        deferred.resolve(signPackage);
                                    } else {
                                        console.error(err);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context10.next = 9;
                            return aa(this.jssdk, uurl);

                        case 9:
                            signPackage = _context10.sent;

                            console.log(signPackage);
                            this.assign("signPackage", signPackage);

                        case 12:
                            id = this.get("id");

                            console.log("id==========" + id);
                            document = this.model('document');
                            _context10.next = 17;
                            return document.detail(id);

                        case 17:
                            info = _context10.sent;

                            this.assign("docid", id);
                            _context10.next = 21;
                            return this.islogin();

                        case 21:
                            islogin = _context10.sent;
                            str = info.content;

                            if (!think.isEmpty(str)) {
                                img = void 0;

                                if (checkMobile(this.userAgent())) {
                                    //手机端
                                    img = image_view(str, 640, 4);
                                } else {
                                    //pc端

                                    img = image_view(str, 847, 0);
                                }
                                info.content = img;
                            }
                            //console.log(info);
                            //分类信息
                            _context10.next = 26;
                            return this.category(info.category_id);

                        case 26:
                            cate = _context10.sent;

                            cate = think.extend({}, cate);
                            //seo
                            this.meta_title = info.title; //标题
                            this.keywords = info.keyname ? info.keyname : ''; //seo关键词
                            this.description = info.description ? info.description : ""; //seo描述
                            //keywords
                            keywords = void 0;

                            if (!think.isEmpty(info.keyname)) {
                                keywords = info.keyname.split(",");
                            }
                            this.assign("keywords", keywords);
                            //访问统计
                            _context10.next = 36;
                            return document.where({ id: info.id }).increment('view');

                        case 36:
                            //外链
                            // if (!think.isEmpty(info.link_id) && info.link_id != 0) {
                            //     return this.redirect(info.link_id);
                            // }
                            // 获取面包屑信息
                            // let breadcrumb = await this.model('category').get_parent_category(cate.id, true);
                            // this.assign('breadcrumb', breadcrumb);

                            // 上一篇
                            // let previous = await document.where({ id: ['>', info.id], category_id: info.category_id, 'pid': 0, 'status': 1 }).order('id DESC').find();
                            // this.assign('previous', previous)
                            //     // 下一篇
                            // let next = await document.where({ id: ['<', info.id], category_id: info.category_id, 'pid': 0, 'status': 1 }).order('id DESC').find();
                            // this.assign('next', next)

                            //获取模板
                            temp = void 0;
                            _context10.next = 39;
                            return this.model('model').get_model(info.model_id, 'name');

                        case 39:
                            model = _context10.sent;

                            console.log("model-------" + (0, _stringify2.default)(model));
                            // 详情模版 TODO
                            // 手机版模版

                            this.assign('category', cate);
                            // console.log(info);
                            // 目录/文章/段落
                            pid = void 0;
                            pinfo = void 0;

                            if (!(info.pid != 0)) {
                                _context10.next = 56;
                                break;
                            }

                            i = info.id;
                            //

                        case 46:
                            if (!(i != 0)) {
                                _context10.next = 54;
                                break;
                            }

                            _context10.next = 49;
                            return document.where({ id: i }).find();

                        case 49:
                            nav = _context10.sent;

                            if (nav.pid == 0) {
                                pinfo = nav;
                                pid = nav.id;
                            }
                            i = nav.pid;
                            _context10.next = 46;
                            break;

                        case 54:
                            _context10.next = 58;
                            break;

                        case 56:
                            pinfo = info;
                            pid = info.id;

                        case 58:
                            _context10.next = 60;
                            return document.where({ topid: pid }).order("update_time DESC").find();

                        case 60:
                            lastinfo = _context10.sent;

                            //console.log(lasttime);
                            this.assign("lastinfo", lastinfo);
                            console.log(pid);
                            _context10.next = 65;
                            return document.where({ pid: pid }).order("level DESC").select();

                        case 65:
                            plist = _context10.sent;

                            this.assign("pinfo", pinfo);
                            this.assign("plist", plist);
                            //console.log(plist);
                            if (plist[0]) {
                                //let lastlevel = plist[0].level;
                                //console.log(lastlevel);
                                this.assign("lastlevel", plist[0]);
                            }
                            console.log(plist);
                            // 文档无限级目录
                            _context10.next = 72;
                            return document.where({ topid: pid }).field('id,title,pid,name,level as sort').select();

                        case 72:
                            ptree_ = _context10.sent;
                            ptree = get_children(ptree_, pid, 1);
                            //console.log(ptree);

                            this.assign('topid', pid);
                            this.assign("ptree", ptree);

                            // 如果是目录并且模板为空,模块为视频时，目录id，显示最后更新的主题

                            if (!(info.type == 1 && (think.isEmpty(info.template) || info.template == 0) && info.model_id == 6)) {
                                _context10.next = 88;
                                break;
                            }

                            if (!plist[0]) {
                                _context10.next = 88;
                                break;
                            }

                            console.log(111111);
                            model_id = plist[0].model_id;
                            p_id = plist[0].id;
                            _context10.next = 83;
                            return this.model("model").get_table_name(model_id);

                        case 83:
                            table = _context10.sent;
                            _context10.next = 86;
                            return this.model(table).find(p_id);

                        case 86:
                            p_info = _context10.sent;

                            info = think.extend(info, p_info);

                        case 88:
                            _context10.next = 90;
                            return get_cover2(info.fmurl, this.setup.QINIU_DOMAIN_NAME);

                        case 90:
                            info.fmurl = _context10.sent;
                            _context10.next = 93;
                            return get_cover2(info.twourl, this.setup.QINIU_DOMAIN_NAME);

                        case 93:
                            info.twourl = _context10.sent;

                            // info.twourl = '//' + this.setup.QINIU_DOMAIN_NAME + '/' + pic.path;
                            // console.log("tuokeAction---------" + JSON.stringify(info));
                            this.assign("info", info);
                            //console.log("description-------------" + info.description);
                            this.assign("desc", info.description);
                            openid = void 0;

                            if (!checkMobile(this.userAgent())) {
                                _context10.next = 115;
                                break;
                            }

                            _context10.next = 100;
                            return this.session("wx_openid");

                        case 100:
                            openid = _context10.sent;
                            map = {
                                openid: openid,
                                docid: id
                            };

                            if (!(typeof openid == 'undefined')) {
                                _context10.next = 106;
                                break;
                            }

                            this.assign("pay_type", 0);
                            _context10.next = 111;
                            break;

                        case 106:
                            _context10.next = 108;
                            return this.model("doc_wxuser").where(map).find();

                        case 108:
                            res = _context10.sent;

                            console.log(res);
                            //是否已经报名
                            if (res.openid != undefined) {
                                this.assign("pay_type", 1);
                            } else {
                                //未报名
                                this.assign("pay_type", 0);
                            }

                        case 111:
                            //手机模版
                            if (!think.isEmpty(info.template) && info.template != 0) {
                                temp = info.template; //todo 已设置详情模板
                            } else if (!think.isEmpty(cate.template_m_detail)) {
                                temp = cate.template_m_detail; //分类已经设置模板
                            } else {
                                temp = model;
                            }

                            //内容分页
                            if (!think.isEmpty(info.content)) {
                                info.content = info.content.split("_ueditor_page_break_tag_");
                            }
                            console.log("tuokeAction 手机========" + (this.http.controller + '/' + temp));
                            return _context10.abrupt('return', this.display('mobile/' + this.http.controller + '/' + temp));

                        case 115:
                            if (islogin) {
                                _context10.next = 117;
                                break;
                            }

                            return _context10.abrupt('return', this.success({ status: -1, name: "请先登录，谢谢参与" }));

                        case 117:
                            _context10.next = 119;
                            return this.model("wx_user").where({ uid: islogin }).find();

                        case 119:
                            oid = _context10.sent;

                            if (think.isEmpty(oid)) {
                                _context10.next = 131;
                                break;
                            }

                            console.log("PC用户--------------" + oid);
                            openid = oid.openid;
                            _map = {
                                openid: openid,
                                docid: id
                            };

                            console.log("PC用户 oid,--------------" + (0, _stringify2.default)(_map));
                            _context10.next = 127;
                            return this.model("doc_wxuser").where(_map).find();

                        case 127:
                            _res2 = _context10.sent;

                            //是否已经报名
                            if (!think.isEmpty(_res2)) {
                                this.assign("pay_type", 1);
                            } else {
                                //未报名
                                this.assign("pay_type", 0);
                            }
                            _context10.next = 132;
                            break;

                        case 131:
                            //未报名
                            this.assign("pay_type", 0);

                        case 132:
                            // if (!think.isEmpty(info.template) && info.template != 0) {
                            //     temp = info.template; //已设置详情模板
                            // } else if (!think.isEmpty(cate.template_detail)) {
                            //     temp = cate.template_detail; //分类已经设置模板
                            // } else {
                            //     temp = model;
                            // }
                            // console.log(temp);
                            //console.log(info);
                            //内容分页
                            if (!think.isEmpty(info.content)) {
                                info.content = info.content.split("_ueditor_page_break_tag_");
                            }

                            // if(model=="myshop"){
                            //     return this.display(`${this.http.controller}/myshop`);
                            // }
                            console.log("tuokeAction========" + (this.http.controller + '/' + model));
                            return _context10.abrupt('return', this.display(this.http.controller + '/' + model));

                        case 135:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function tuokeAction() {
            return _ref10.apply(this, arguments);
        }

        return tuokeAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=product.js.map