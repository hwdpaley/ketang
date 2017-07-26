// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------

'use strict';
/**
 * model
 */

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$base) {
    (0, _inherits3.default)(_class, _think$model$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
    }

    /**
     * 用户登录认证
     * @param  string  $username 用户名
     * @param  string  $password 用户密码
     * @param  integer $type     用户名类型 （1-用户名，2-邮箱，3-手机，4-UID）
     * @param  {int} login 登陆方式 0-前台登陆 ， 1-后台登陆
     * @return integer           登录成功-用户ID，登录失败-错误编号
     */
    _class.prototype.signin = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(username, password, ip) {
            var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
            var login = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var map, user, isVip, userInfo;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            map = {};
                            _context.t0 = type;
                            _context.next = _context.t0 === 1 ? 4 : _context.t0 === 2 ? 6 : _context.t0 === 3 ? 8 : _context.t0 === 4 ? 10 : _context.t0 === 5 ? 12 : 14;
                            break;

                        case 4:
                            map.username = username;
                            return _context.abrupt('break', 15);

                        case 6:
                            map.email = username;
                            return _context.abrupt('break', 15);

                        case 8:
                            map.mobile = username;
                            return _context.abrupt('break', 15);

                        case 10:
                            map.id = username;
                            return _context.abrupt('break', 15);

                        case 12:
                            map = {
                                username: username,
                                email: username,
                                mobile: username,
                                _logic: "OR"
                            };
                            return _context.abrupt('break', 15);

                        case 14:
                            return _context.abrupt('return', 0);

                        case 15:
                            _context.next = 17;
                            return this.where(map).find();

                        case 17:
                            user = _context.sent;

                            if (!(!think.isEmpty(user) && 1 == user.status)) {
                                _context.next = 35;
                                break;
                            }

                            if (!(login == 1)) {
                                _context.next = 22;
                                break;
                            }

                            if (!(0 == user.is_admin)) {
                                _context.next = 22;
                                break;
                            }

                            return _context.abrupt('return', -3);

                        case 22:
                            if (!(password === user.password)) {
                                _context.next = 32;
                                break;
                            }

                            _context.next = 25;
                            return this.autoLogin(user, ip);

                        case 25:
                            _context.next = 27;
                            return this.get_vip(user.id);

                        case 27:
                            isVip = _context.sent;
                            userInfo = {
                                'uid': user.id,
                                'username': user.username,
                                'last_login_time': user.last_login_time,
                                'real_name': user.real_name,
                                'isVip': isVip,
                                'groupid': user.groupid
                            };
                            return _context.abrupt('return', userInfo);

                        case 32:
                            return _context.abrupt('return', -2);

                        case 33:
                            _context.next = 36;
                            break;

                        case 35:
                            return _context.abrupt('return', -1);

                        case 36:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function signin(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        }

        return signin;
    }();

    /**
     * 自动登录用户
     * @param  integer $user 用户信息数组
     */


    _class.prototype.autoLogin = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(user, ip) {
            var data, use;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            /* 更新登录信息 */
                            data = {
                                'last_login_time': new Date().valueOf(),
                                'last_login_ip': _ip2int(ip)
                            };
                            _context2.next = 3;
                            return this.where({ id: user.id }).update(data);

                        case 3:
                            use = _context2.sent;
                            _context2.next = 6;
                            return this.where({ id: user.id }).increment('login');

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function autoLogin(_x6, _x7) {
            return _ref2.apply(this, arguments);
        }

        return autoLogin;
    }();

    /**
     * 根据用户ID获取用户昵称
     * @param  integer $uid 用户ID
     * @return string       用户昵称
     */

    _class.prototype.get_nickname = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(uid) {
            var name, info;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            uid = uid || 0;
                            //TODO 缓存处理后续
                            name = void 0;
                            _context3.next = 4;
                            return this.field("username").find(uid);

                        case 4:
                            info = _context3.sent;

                            name = info.username;
                            return _context3.abrupt('return', name);

                        case 7:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function get_nickname(_x8) {
            return _ref3.apply(this, arguments);
        }

        return get_nickname;
    }();

    _class.prototype.get_realname = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(uid) {
            var name, info;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            uid = uid || 0;
                            //TODO 缓存处理后续
                            name = void 0;
                            _context4.next = 4;
                            return this.field("real_name").find(uid);

                        case 4:
                            info = _context4.sent;

                            name = info.real_name;
                            return _context4.abrupt('return', name);

                        case 7:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function get_realname(_x9) {
            return _ref4.apply(this, arguments);
        }

        return get_realname;
    }();

    _class.prototype.get_vip = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(uid) {
            var name, info, now;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            uid = uid || 0;
                            //TODO 缓存处理后续
                            name = 0;
                            _context5.next = 4;
                            return this.field(["vip", "overduedate"]).find(uid);

                        case 4:
                            info = _context5.sent;
                            now = new Date().getTime();

                            if (info.vip == 1 && info.overduedate > now) {
                                name = 1;
                            };
                            return _context5.abrupt('return', name);

                        case 9:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function get_vip(_x10) {
            return _ref5.apply(this, arguments);
        }

        return get_vip;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=member.js.map