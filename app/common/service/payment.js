// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------

'use strict';

exports.__esModule = true;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

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
        this.http = http;
    };

    //发起付款


    _class.prototype.pingxx = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(channel, order_no, order_amount, ip, open_id) {
            var http_, config, extra, amount, setup, pingpp, create;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            create = function create(pingpp, config) {
                                var deferred = think.defer();
                                pingpp.charges.create(config, function (err, charge) {
                                    console.log(err);
                                    deferred.resolve(charge);
                                });
                                return deferred.promise;
                            };

                            http_ = think.config("http_") == 1 ? "http" : "https";
                            config = void 0;
                            extra = {};
                            amount = Number(order_amount) * 100;
                            _context.next = 7;
                            return think.cache("setup");

                        case 7:
                            setup = _context.sent;
                            pingpp = require('pingpp')(setup.PINGXX_LIVE_SECRET_KEY);

                            pingpp.setPrivateKeyPath(think.RESOURCE_PATH + "/upload/pingpp/bieber_rsa_private_key.pem");
                            _context.t0 = channel;
                            _context.next = _context.t0 === 'alipay_pc_direct' ? 13 : _context.t0 === 'wx_pub_qr' ? 15 : _context.t0 === 'alipay_qr' ? 17 : _context.t0 === 'upacp_pc' ? 18 : _context.t0 === 'upacp_wap' ? 20 : _context.t0 === 'alipay_wap' ? 22 : _context.t0 === 'bfb_wap' ? 24 : _context.t0 === 'wx_pub' ? 26 : 28;
                            break;

                        case 13:
                            //支付宝网页支付
                            extra = {
                                success_url: http_ + "://" + this.http.host + "/uc/pay/payres"
                            };

                            return _context.abrupt("break", 28);

                        case 15:
                            //微信网pc页扫码支付
                            extra = {
                                limit_pay: null, product_id: order_no
                            };

                            return _context.abrupt("break", 28);

                        case 17:
                            return _context.abrupt("break", 28);

                        case 18:
                            //网银pc网页支付
                            extra = {
                                result_url: http_ + "://" + this.http.host + "/uc/pay/payres"
                            };
                            return _context.abrupt("break", 28);

                        case 20:
                            //网银pc网页支付
                            extra = {
                                result_url: http_ + "://" + this.http.host + "/uc/pay/payres"
                            };
                            return _context.abrupt("break", 28);

                        case 22:
                            //支付宝网页支付
                            extra = {
                                success_url: http_ + "://" + this.http.host + "/uc/pay/payres"
                            };

                            return _context.abrupt("break", 28);

                        case 24:
                            //支付宝网页支付
                            extra = {
                                result_url: http_ + "://" + this.http.host + "/uc/pay/payres",
                                bfb_login: false
                            };

                            return _context.abrupt("break", 28);

                        case 26:
                            // 微信公共账号支付
                            extra = {
                                open_id: open_id
                            };
                            return _context.abrupt("break", 28);

                        case 28:
                            config = {
                                subject: "网站订单支付",
                                body: "网站订单支付",
                                amount: amount,
                                order_no: order_no,
                                channel: channel,
                                currency: "cny",
                                client_ip: ip,
                                app: { id: setup.PINGXX_APP_ID },
                                extra: extra
                            };
                            console.log(config);
                            _context.next = 32;
                            return create(pingpp, config);

                        case 32:
                            return _context.abrupt("return", _context.sent);

                        case 33:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function pingxx(_x, _x2, _x3, _x4, _x5) {
            return _ref.apply(this, arguments);
        }

        return pingxx;
    }();

    _class.prototype.charge = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(id) {
            var setup, pingpp, retrieve, res;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            retrieve = function retrieve(pingpp, id) {
                                var deferred = think.defer();
                                pingpp.charges.retrieve(id, function (err, charge) {
                                    console.log(err);
                                    deferred.resolve(charge);
                                });
                                return deferred.promise;
                            };

                            _context2.next = 3;
                            return think.cache("setup");

                        case 3:
                            setup = _context2.sent;
                            pingpp = require('pingpp')(setup.PINGXX_LIVE_SECRET_KEY);

                            pingpp.setPrivateKeyPath(think.RESOURCE_PATH + "/upload/pingpp/bieber_rsa_private_key.pem");
                            _context2.next = 8;
                            return retrieve(pingpp, id);

                        case 8:
                            res = _context2.sent;
                            return _context2.abrupt("return", res);

                        case 10:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function charge(_x6) {
            return _ref2.apply(this, arguments);
        }

        return charge;
    }();

    return _class;
}(think.service.base);

exports.default = _class;
//# sourceMappingURL=payment.js.map