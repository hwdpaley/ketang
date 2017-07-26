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

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

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
     * @return {Promise} []
     */
    _class.prototype.indexAction = function indexAction() {
        //auto render template file index_index.html
        return this.display();
    };
    //获取用户信息接口


    _class.prototype.getuserinfoAction = function getuserinfoAction() {
        //

        var cy_appkey = this.setup.CY_APPKEY;
        var ret = void 0;
        if (this.is_login) {
            ret = {
                "is_login": 1, //已登录，返回登录的用户信息
                "user": {
                    "user_id": this.user.uid,
                    "nickname": this.user.username,
                    "img_url": "//" + this.http.host + "/uc/index/avatar/uid/" + this.user.uid,
                    "profile_url": "",
                    "sign": this.cysign(cy_appkey, "", "", this.user.username, "", this.user.uid) }
            };
        } else {
            ret = {
                "is_login": 0 //为登录
            };
        }
        console.log(ret);
        return this.jsonp(ret);
    };
    //用户登录接口


    _class.prototype.loginAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var cy_appkey, get, cy_user, uid, ret, userinfo, cy_userInfo;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            cy_appkey = this.setup.CY_APPKEY;
                            get = this.get();

                            get.img_url = decodeURIComponent(get.img_url);
                            get.sign = decodeURIComponent(get.sign);
                            get.profile_url = decodeURIComponent(get.profile_url);
                            get.nickname = decodeURIComponent(get.nickname);

                            console.log(get);
                            console.log(this.cysign(cy_appkey, get.cy_user_id, get.img_url, get.nickname, get.profile_url, get.user_id));
                            _context.next = 10;
                            return this.model("cy_user").where({ cy_user_id: get.cy_user_id }).find();

                        case 10:
                            cy_user = _context.sent;

                            if (!think.isEmpty(cy_user)) {
                                _context.next = 14;
                                break;
                            }

                            _context.next = 14;
                            return this.model("cy_user").add(get);

                        case 14:
                            _context.next = 16;
                            return this.model("cy_user").where({ cy_user_id: get.cy_user_id }).getField('uid', true);

                        case 16:
                            uid = _context.sent;

                            // console.log(uid);
                            // return false;
                            ret = void 0;

                            if (this.is_login) {
                                _context.next = 36;
                                break;
                            }

                            if (!think.isEmpty(uid)) {
                                _context.next = 25;
                                break;
                            }

                            //没有绑定网站用户去绑定
                            ret = {
                                'user_id': '0',
                                'reload_page': 0,
                                'js_src': ['//' + this.http.host + '/static/assets/js/cy.js']
                            };
                            _context.next = 23;
                            return this.session("changyan", get);

                        case 23:
                            _context.next = 34;
                            break;

                        case 25:
                            _context.next = 27;
                            return this.model("member").find(uid);

                        case 27:
                            userinfo = _context.sent;
                            _context.next = 30;
                            return this.model("member").autoLogin({ id: userinfo.id }, this.ip());

                        case 30:
                            //更新用户登录信息，自动登陆
                            cy_userInfo = {
                                'uid': userinfo.id,
                                'username': userinfo.username,
                                'last_login_time': userinfo.reg_time
                            };
                            _context.next = 33;
                            return this.session('webuser', cy_userInfo);

                        case 33:
                            ret = {
                                'user_id': userinfo.id,
                                'reload_page': 1
                            };

                        case 34:
                            _context.next = 37;
                            break;

                        case 36:
                            ret = {
                                'user_id': this.user.uid,
                                'reload_page': 0
                            };

                        case 37:
                            return _context.abrupt('return', this.jsonp(ret));

                        case 38:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function loginAction() {
            return _ref.apply(this, arguments);
        }

        return loginAction;
    }();
    //补充资料


    _class.prototype.binduserAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var data;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.session("changyan");

                        case 2:
                            data = _context2.sent;

                            this.cookie('changyanurl', this.http.referrer());
                            this.meta_title = "畅言用户绑定";
                            this.assign("data", data);
                            return _context2.abrupt('return', this.display());

                        case 7:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function binduserAction() {
            return _ref2.apply(this, arguments);
        }

        return binduserAction;
    }();

    /**完善资料绑定 */


    _class.prototype.organizingAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var data, res, resurl, reg, filePath, wx_userInfo;
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
                            console.log(data);
                            resurl = this.cookie("changyanurl");
                            _context3.next = 43;
                            return this.model("member").add(data);

                        case 43:
                            reg = _context3.sent;

                            if (think.isEmpty(reg)) {
                                _context3.next = 52;
                                break;
                            }

                            _context3.next = 47;
                            return this.model("cy_user").where({ cy_user_id: data.cy_user_id }).update({ uid: reg });

                        case 47:
                            //更新微信头像
                            filePath = think.RESOURCE_PATH + '/upload/avatar/' + reg;

                            think.mkdir(filePath);

                            if (think.isFile(filePath + '/avatar.png')) {
                                _context3.next = 52;
                                break;
                            }

                            _context3.next = 52;
                            return this.spiderImage(data.headimgurl, filePath + '/avatar.png');

                        case 52:
                            console.log(data);
                            _context3.next = 55;
                            return this.model("member").autoLogin({ id: reg }, this.ip());

                        case 55:
                            //更新用户登录信息，自动登陆
                            wx_userInfo = {
                                'uid': reg,
                                'username': data.username,
                                'last_login_time': data.reg_time
                            };
                            _context3.next = 58;
                            return this.session('webuser', wx_userInfo);

                        case 58:
                            return _context3.abrupt('return', this.success({ name: "绑定成功", url: resurl }));

                        case 59:
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
            var data, username, password, resurl, res, filePath, fail;
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
                            resurl = this.cookie("changyanurl");
                            _context4.next = 8;
                            return this.model("member").signin(username, password, this.ip(), 5, 0);

                        case 8:
                            res = _context4.sent;

                            if (!(0 < res.uid)) {
                                _context4.next = 22;
                                break;
                            }

                            _context4.next = 12;
                            return this.model("cy_user").where({ cy_user_id: data.cy_user_id }).update({ uid: res.uid });

                        case 12:
                            filePath = think.RESOURCE_PATH + '/upload/avatar/' + res.uid;

                            think.mkdir(filePath);

                            if (think.isFile(filePath + '/avatar.png')) {
                                _context4.next = 17;
                                break;
                            }

                            _context4.next = 17;
                            return this.spiderImage(data.headimgurl, filePath + '/avatar.png');

                        case 17:
                            _context4.next = 19;
                            return this.session('webuser', res);

                        case 19:
                            return _context4.abrupt('return', this.success({ name: "绑定成功", url: resurl }));

                        case 22:
                            //登录失败
                            fail = void 0;
                            _context4.t0 = res;
                            _context4.next = _context4.t0 === -1 ? 26 : _context4.t0 === -2 ? 28 : 30;
                            break;

                        case 26:
                            fail = '用户不存在或被禁用';
                            return _context4.abrupt('break', 32);

                        case 28:
                            fail = '密码错误';
                            return _context4.abrupt('break', 32);

                        case 30:
                            fail = '未知错误';
                            return _context4.abrupt('break', 32);

                        case 32:
                            return _context4.abrupt('return', this.fail(fail));

                        case 33:
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

    _class.prototype.signinAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var username, password, res, fail;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context5.next = 27;
                                break;
                            }

                            username = this.post('username');
                            password = this.post('password');

                            password = encryptPassword(password);
                            _context5.next = 6;
                            return this.model("member").signin(username, password, this.ip(), 5, 0);

                        case 6:
                            res = _context5.sent;

                            if (!(0 < res.uid)) {
                                _context5.next = 13;
                                break;
                            }

                            _context5.next = 10;
                            return this.session('webuser', res);

                        case 10:
                            return _context5.abrupt('return', this.success({ name: "绑定成功" }));

                        case 13:
                            //登录失败
                            fail = void 0;
                            _context5.t0 = res;
                            _context5.next = _context5.t0 === -1 ? 17 : _context5.t0 === -2 ? 19 : _context5.t0 === -3 ? 21 : 23;
                            break;

                        case 17:
                            fail = '用户不存在或被禁用';return _context5.abrupt('break', 24);

                        case 19:
                            fail = '密码错误';return _context5.abrupt('break', 24);

                        case 21:
                            fail = '您无权登陆后台！';return _context5.abrupt('break', 24);

                        case 23:
                            fail = '未知错误';

                        case 24:
                            return _context5.abrupt('return', this.fail(fail));

                        case 25:
                            _context5.next = 28;
                            break;

                        case 27:
                            return _context5.abrupt('return', this.display());

                        case 28:
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
    // //签名验证
    // truesign(cy_user_id,img_url,nickname,profile_url,user_id){
    //    let toSign=`cy_user_id=${cy_user_id}&img_url=${img_url}&nickname=${nickname}&profile_url=${profile_url}&user_id=${user_id}`
    //     return crypto.createHmac('sha1', user_id).update(toSign,'utf8').digest('hex');
    // }
    //生成畅言回调签名


    _class.prototype.cysign = function cysign(key, cy_user_id, imgUrl, nickname, profileUrl, isvUserId) {
        var str = void 0;
        str = "img_url=" + imgUrl + "&nickname=" + nickname + "&profile_url=" + profileUrl + "&user_id=" + isvUserId;
        if (!think.isEmpty(cy_user_id)) {
            str = 'cy_user_id=' + cy_user_id + str;
        }
        return _crypto2.default.createHmac('sha1', key).update(str, 'utf8').digest().toString('base64');
    };
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
//# sourceMappingURL=changyan.js.map