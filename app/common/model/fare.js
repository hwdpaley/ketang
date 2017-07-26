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

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$base) {
    (0, _inherits3.default)(_class, _think$model$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
    }

    /**
     * 获取运费
     * @param {obj} cart_godds 购物车内的宝贝列表
     * @param {number} addr_id null-默认地址，number-配送地址id
     * @param {int} uid 用户id
     * 运费计算
     * 1、如果店铺只使用统一运费，那么顾客下单计算时按最低运费收取。
     * 2、如果店铺只使用一种运费模板规则，那么顾客下单计算时均按此规则收取运费。
     * 3、如果店铺使用了不同的运费模板规则，那么顾客下单时各运费模板规则先单独计算运费再叠加。
     * 4、如果店铺同时使用统一运费和不同的运费模板规则，那么顾客下单时统一运费单独计算运费，不同的运费模板
     *TODO
     * @returns {*}
     */
    _class.prototype.getfare = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(cart_godds, addr_id, uid) {
            var real_freight, fare, address, warr, _iterator, _isArray, _i, _ref2, _val, goods_weight, area, zoning, _iterator2, _isArray2, _i2, _ref3, val;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            real_freight = void 0;
                            fare = void 0;
                            address = void 0;

                            if (think.isEmpty(addr_id)) {
                                _context.next = 9;
                                break;
                            }

                            _context.next = 6;
                            return this.model("address").find(addr_id);

                        case 6:
                            address = _context.sent;
                            _context.next = 12;
                            break;

                        case 9:
                            _context.next = 11;
                            return this.model("address").where({ is_default: 1, user_id: uid }).find();

                        case 11:
                            address = _context.sent;

                        case 12:
                            //console.log(address);
                            warr = [];
                            _iterator = cart_godds, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 14:
                            if (!_isArray) {
                                _context.next = 20;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 17;
                                break;
                            }

                            return _context.abrupt("break", 28);

                        case 17:
                            _ref2 = _iterator[_i++];
                            _context.next = 24;
                            break;

                        case 20:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 23;
                                break;
                            }

                            return _context.abrupt("break", 28);

                        case 23:
                            _ref2 = _i.value;

                        case 24:
                            _val = _ref2;

                            warr.push(_val.weight * _val.qty);

                        case 26:
                            _context.next = 14;
                            break;

                        case 28:
                            goods_weight = eval(warr.join('+'));
                            //console.log(goods_weight);

                            area = address.province + "_" + address.city + "_" + address.county;
                            _context.next = 32;
                            return this.where({ is_default: 1 }).find();

                        case 32:
                            fare = _context.sent;
                            zoning = JSON.parse(fare.zoning);

                            if (!(think.isEmpty(zoning) || think.isEmpty(address))) {
                                _context.next = 38;
                                break;
                            }

                            real_freight = fare.first_price + Math.max(Math.ceil((goods_weight - fare.first_weight) / fare.second_weight), 0) * fare.second_price;

                            _context.next = 53;
                            break;

                        case 38:
                            _iterator2 = zoning, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 39:
                            if (!_isArray2) {
                                _context.next = 45;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 42;
                                break;
                            }

                            return _context.abrupt("break", 53);

                        case 42:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 49;
                            break;

                        case 45:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 48;
                                break;
                            }

                            return _context.abrupt("break", 53);

                        case 48:
                            _ref3 = _i2.value;

                        case 49:
                            val = _ref3;

                            //console.log(area)
                            // console.log(val.area);
                            if (in_array(area, JSON.parse(val.area))) {
                                //console.log(Number(val.f_weight)+Number(val.s_weight));
                                real_freight = Number(val.f_price) + Math.max(Math.ceil((goods_weight - Number(val.f_weight)) / Number(val.s_weight)), 0) * Number(val.s_price);
                            } else {
                                real_freight = fare.first_price + Math.max(Math.ceil((goods_weight - fare.first_weight) / fare.second_weight), 0) * fare.second_price;
                            }

                        case 51:
                            _context.next = 39;
                            break;

                        case 53:
                            return _context.abrupt("return", real_freight);

                        case 54:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getfare(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        }

        return getfare;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=fare.js.map