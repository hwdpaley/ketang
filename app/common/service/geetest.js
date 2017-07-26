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

var _geetest = require('geetest');

var _geetest2 = _interopRequireDefault(_geetest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$service$base) {
    (0, _inherits3.default)(_class, _think$service$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$service$base.apply(this, arguments));
    }

    /**
     * init
     * @return {}         []
     */
    _class.prototype.init = function init(http) {
        _think$service$base.prototype.init.call(this, http);
    };
    //初始化


    _class.prototype.register = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(type) {
            var setup, privateKey, publicKey, geetest, register;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return think.cache("setup");

                        case 2:
                            setup = _context.sent;
                            privateKey = void 0, publicKey = void 0;

                            if (type == 'mobile') {
                                privateKey = setup.GEETEST_KEY_M; //key
                                publicKey = setup.GEETEST_ID_M; //id
                            } else {
                                privateKey = setup.GEETEST_KEY; //key
                                publicKey = setup.GEETEST_ID; //id
                            }

                            geetest = new _geetest2.default({
                                geetest_id: publicKey,
                                geetest_key: privateKey
                            });

                            //初始

                            register = function register() {
                                var deferred = think.defer();
                                // 向极验申请一次验证所需的challenge
                                geetest.register(function (err, data) {
                                    console.log(data);
                                    deferred.resolve({
                                        gt: geetest.geetest_id,
                                        challenge: data.challenge,
                                        success: data.success
                                    });
                                });
                                return deferred.promise;
                            };

                            _context.next = 9;
                            return register();

                        case 9:
                            return _context.abrupt('return', _context.sent);

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function register(_x) {
            return _ref.apply(this, arguments);
        }

        return register;
    }();
    // 二次服务器验证


    _class.prototype.validate = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(data, type) {
            var setup, privateKey, publicKey, geetest, validate;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return think.cache("setup");

                        case 2:
                            setup = _context2.sent;
                            privateKey = void 0, publicKey = void 0;

                            if (type == 'mobile') {
                                privateKey = setup.GEETEST_KEY_M; //key
                                publicKey = setup.GEETEST_ID_M; //id
                            } else {
                                privateKey = setup.GEETEST_KEY; //key
                                publicKey = setup.GEETEST_ID; //id
                            }

                            geetest = new _geetest2.default({
                                geetest_key: privateKey,
                                geetest_id: publicKey
                            });
                            //验证

                            validate = function validate(data) {
                                var deferred = think.defer();
                                geetest.validate({

                                    challenge: data.geetest_challenge,
                                    validate: data.geetest_validate,
                                    seccode: data.geetest_seccode

                                }, function (err, result) {
                                    console.log(result);
                                    var data = { status: "success" };

                                    if (err || !result) {
                                        console.log(err);
                                        data.status = "fail";
                                    }

                                    deferred.resolve(data);
                                });
                                return deferred.promise;
                            };

                            _context2.next = 9;
                            return validate(data);

                        case 9:
                            return _context2.abrupt('return', _context2.sent);

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function validate(_x2, _x3) {
            return _ref2.apply(this, arguments);
        }

        return validate;
    }();

    return _class;
}(think.service.base);

exports.default = _class;
//# sourceMappingURL=geetest.js.map