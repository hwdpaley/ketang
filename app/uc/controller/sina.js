// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

exports.__esModule = true;

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
     * 新浪授权回掉地址
     * index action
     * @return {Promise} []
     */
    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var http_, redirectURI, code, SINA, sina, token, userinfo, sina_user, filePath, last_login_time, sina_userInfo;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!(this.setup.IS_SINA_LOGIN == 0)) {
                                _context.next = 3;
                                break;
                            }

                            this.http.error = new Error('没有开启微博登陆，请到后台开启！');
                            return _context.abrupt('return', think.statusAction(702, this.http));

                        case 3:
                            if (!this.is_login) {
                                _context.next = 5;
                                break;
                            }

                            return _context.abrupt('return', this.redirect('/uc/index'));

                        case 5:
                            http_ = void 0;

                            if (this.config().http_ == 1) {
                                http_ = "http://";
                            } else {
                                http_ = "https://";
                            }
                            redirectURI = '' + http_ + this.http.host + '/uc/sina/index';
                            //检查是否回掉code，如果没有跳转授权接口

                            if (!think.isEmpty(this.get("code"))) {
                                _context.next = 12;
                                break;
                            }

                            return _context.abrupt('return', this.redirect('https://api.weibo.com/oauth2/authorize?client_id=' + this.setup.SINA_APPKEY + '&redirect_uri=' + redirectURI + '&response_type=code'));

                        case 12:
                            code = this.get("code");
                            SINA = think.service("sina");
                            sina = new SINA(code, redirectURI);
                            _context.next = 17;
                            return sina.gettoken();

                        case 17:
                            token = _context.sent;

                            console.log(token);
                            _context.next = 21;
                            return sina.getuserinfo(token.access_token, token.uid);

                        case 21:
                            userinfo = _context.sent;
                            _context.next = 24;
                            return this.model("sina_user").find(userinfo.id);

                        case 24:
                            sina_user = _context.sent;

                            console.log(sina_user);

                            if (!think.isEmpty(sina_user)) {
                                _context.next = 32;
                                break;
                            }

                            _context.next = 29;
                            return this.model("sina_user").add(userinfo);

                        case 29:
                            return _context.abrupt('return', this.redirect('/uc/sina/login/id/' + userinfo.id));

                        case 32:
                            _context.next = 34;
                            return this.model("sina_user").where({ id: userinfo.id }).update(userinfo);

                        case 34:
                            if (!(think.isEmpty(sina_user.uid) || sina_user.uid == 0)) {
                                _context.next = 38;
                                break;
                            }

                            return _context.abrupt('return', this.redirect('/uc/sina/login/id/' + userinfo.id));

                        case 38:
                            //更新头像
                            filePath = think.RESOURCE_PATH + '/upload/avatar/' + sina_user.uid;

                            think.mkdir(filePath);
                            //如果没有用户没有图像，使用微博头像

                            if (think.isFile(filePath + '/avatar.png')) {
                                _context.next = 43;
                                break;
                            }

                            _context.next = 43;
                            return this.spiderImage(userinfo.avatar_large || userinfo.avatar_hd, filePath + '/avatar.png');

                        case 43:
                            _context.next = 45;
                            return this.model("member").where({ id: sina_user.uid }).getField("last_login_time", true);

                        case 45:
                            last_login_time = _context.sent;
                            sina_userInfo = {
                                'uid': sina_user.uid,
                                'username': sina_user.screen_name,
                                'last_login_time': last_login_time
                            };
                            _context.next = 49;
                            return this.session('webuser', sina_userInfo);

                        case 49:
                            _context.next = 51;
                            return this.model("member").autoLogin({ id: sina_user.uid }, this.ip());

                        case 51:
                            return _context.abrupt('return', this.redirect("/uc/index"));

                        case 52:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function indexAction() {
            return _ref.apply(this, arguments);
        }

        return indexAction;
    }();
    //用户绑定页面


    _class.prototype.loginAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var id, sina_user;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (!(this.setup.IS_SINA_LOGIN == 0)) {
                                _context2.next = 3;
                                break;
                            }

                            this.http.error = new Error('没有开启微博登陆，请到后台开启！');
                            return _context2.abrupt('return', think.statusAction(702, this.http));

                        case 3:
                            if (this.is_login) {
                                this.redirect('/uc/index');
                            }
                            id = this.get("id");
                            _context2.next = 7;
                            return this.model("sina_user").find(id);

                        case 7:
                            sina_user = _context2.sent;

                            console.log(sina_user);
                            this.assign("sina_user", sina_user);
                            this.meta_title = "账号绑定";

                            if (!checkMobile(this.userAgent())) {
                                _context2.next = 15;
                                break;
                            }

                            return _context2.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 15:
                            return _context2.abrupt('return', this.display());

                        case 16:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function loginAction() {
            return _ref2.apply(this, arguments);
        }

        return loginAction;
    }();
    /**完善资料绑定 */


    _class.prototype.organizingAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var data, res, reg, filePath, sina_userInfo;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            data = this.post();
                            //验证

                            res = void 0;

                            if (!think.isEmpty(data.username)) {
                                _context3.next = 6;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("用户昵称不能为空！"));

                        case 6:
                            _context3.next = 8;
                            return this.model("member").where({ username: ltrim(data.username) }).find();

                        case 8:
                            res = _context3.sent;

                            if (think.isEmpty(res)) {
                                _context3.next = 11;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("用户昵称已存在，请重新填写！"));

                        case 11:
                            if (!think.isEmpty(data.mobile)) {
                                _context3.next = 15;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("手机号码不能为空！"));

                        case 15:
                            _context3.next = 17;
                            return this.model("member").where({ mobile: data.mobile }).find();

                        case 17:
                            res = _context3.sent;

                            if (think.isEmpty(res)) {
                                _context3.next = 20;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("手机号码已存在，请重新填写！"));

                        case 20:
                            if (!think.isEmpty(data.email)) {
                                _context3.next = 24;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("电子邮箱不能为空！"));

                        case 24:
                            _context3.next = 26;
                            return this.model("member").where({ email: data.email }).find();

                        case 26:
                            res = _context3.sent;

                            if (think.isEmpty(res)) {
                                _context3.next = 29;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("电子邮箱已存在，请重新填写！"));

                        case 29:
                            if (!(think.isEmpty(data.password) && think.isEmpty(data.password2))) {
                                _context3.next = 33;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("密码不能为空！"));

                        case 33:
                            if (!(data.password != data.password2)) {
                                _context3.next = 35;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("两次输入的密码不一致，请重新填写！"));

                        case 35:
                            data.status = 1;
                            data.reg_time = new Date().valueOf();
                            data.reg_ip = _ip2int(this.ip());
                            data.password = encryptPassword(data.password);
                            _context3.next = 41;
                            return this.model("member").add(data);

                        case 41:
                            reg = _context3.sent;

                            if (think.isEmpty(reg)) {
                                _context3.next = 50;
                                break;
                            }

                            _context3.next = 45;
                            return this.model("sina_user").where({ id: data.openid }).update({ uid: reg });

                        case 45:
                            //更新微信头像
                            filePath = think.RESOURCE_PATH + '/upload/avatar/' + reg;

                            think.mkdir(filePath);

                            if (think.isFile(filePath + '/avatar.png')) {
                                _context3.next = 50;
                                break;
                            }

                            _context3.next = 50;
                            return this.spiderImage(data.headimgurl, filePath + '/avatar.png');

                        case 50:
                            console.log(data);
                            _context3.next = 53;
                            return this.model("member").autoLogin({ id: reg }, this.ip());

                        case 53:
                            //更新用户登录信息，自动登陆
                            sina_userInfo = {
                                'uid': reg,
                                'username': data.username,
                                'last_login_time': data.reg_time
                            };
                            _context3.next = 56;
                            return this.session('webuser', sina_userInfo);

                        case 56:
                            return _context3.abrupt('return', this.success({ name: "绑定成功", url: "/uc/index" }));

                        case 57:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function organizingAction() {
            return _ref3.apply(this, arguments);
        }

        return organizingAction;
    }();
    /**登录绑定 */


    _class.prototype.logonbindingAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var data, username, password, res, sina_info, filePath, fail;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            data = this.post();
                            //console.log(data);

                            username = this.post('username');
                            password = this.post('password');

                            password = encryptPassword(password);
                            console.log(data);

                            _context4.next = 7;
                            return this.model("member").signin(username, password, this.ip(), 5, 0);

                        case 7:
                            res = _context4.sent;

                            console.log(res);

                            if (!(0 < res.uid)) {
                                _context4.next = 27;
                                break;
                            }

                            _context4.next = 12;
                            return this.model("sina_user").where({ id: data.openid }).find();

                        case 12:
                            sina_info = _context4.sent;

                            console.log(sina_info);
                            _context4.next = 16;
                            return this.model("sina_user").where({ id: data.openid }).update({ uid: res.uid });

                        case 16:
                            //更新微信头像
                            filePath = think.RESOURCE_PATH + '/upload/avatar/' + res.uid;

                            think.mkdir(filePath);

                            if (think.isFile(filePath + '/avatar.png')) {
                                _context4.next = 21;
                                break;
                            }

                            _context4.next = 21;
                            return this.spiderImage(data.headimgurl, filePath + '/avatar.png');

                        case 21:
                            res.username = sina_info.screen_name;
                            _context4.next = 24;
                            return this.session('webuser', res);

                        case 24:
                            return _context4.abrupt('return', this.success({ name: "绑定成功", url: "/uc/index" }));

                        case 27:
                            //登录失败
                            fail = void 0;
                            _context4.t0 = res;
                            _context4.next = _context4.t0 === -1 ? 31 : _context4.t0 === -2 ? 33 : 35;
                            break;

                        case 31:
                            fail = '用户不存在或被禁用';
                            return _context4.abrupt('break', 37);

                        case 33:
                            fail = '密码错误';
                            return _context4.abrupt('break', 37);

                        case 35:
                            fail = '未知错误';
                            return _context4.abrupt('break', 37);

                        case 37:
                            this.fail(fail);

                        case 38:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function logonbindingAction() {
            return _ref4.apply(this, arguments);
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

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=sina.js.map