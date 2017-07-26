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

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

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
     * 增减库存
     * @param oder_id 订单id
     * @param regulation true-减库存，false-加库存
     * @param sku sku字段 默认 "suk",自建模型减少库存是需要填写自己新建的字段名
     * @param stock 库存 默认 "total_stock",
     */
    _class.prototype.stock = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(oder_id) {
            var regulation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var sku = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "suk";

            var _stock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "total_stock";

            var goodlist, _iterator, _isArray, _i, _ref2, val, model_id, table, model, prom_goods, data, type, _iterator2, _isArray2, _i2, _ref3, v, _iterator3, _isArray3, _i3, _ref4, _v, _iterator4, _isArray4, _i4, _ref5, __v, date;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.model("order_goods").where({ order_id: oder_id }).select();

                        case 2:
                            goodlist = _context.sent;
                            _iterator = goodlist, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 4:
                            if (!_isArray) {
                                _context.next = 10;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 7;
                                break;
                            }

                            return _context.abrupt("break", 95);

                        case 7:
                            _ref2 = _iterator[_i++];
                            _context.next = 14;
                            break;

                        case 10:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 13;
                                break;
                            }

                            return _context.abrupt("break", 95);

                        case 13:
                            _ref2 = _i.value;

                        case 14:
                            val = _ref2;
                            _context.next = 17;
                            return this.model("document").where({ id: val.goods_id }).getField("model_id", true);

                        case 17:
                            model_id = _context.sent;
                            _context.next = 20;
                            return this.model("model").get_table_name(model_id);

                        case 20:
                            table = _context.sent;
                            model = this.model(table);
                            prom_goods = JSON.parse(val.prom_goods);

                            if (think.isEmpty(prom_goods.type)) {
                                _context.next = 86;
                                break;
                            }

                            _context.next = 26;
                            return model.where({ id: val.goods_id }).getField(sku, true);

                        case 26:
                            data = _context.sent;

                            data = JSON.parse(data);
                            type = prom_goods.type.split(",");

                            console.log(type);
                            _iterator2 = data.data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 31:
                            if (!_isArray2) {
                                _context.next = 37;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 34;
                                break;
                            }

                            return _context.abrupt("break", 81);

                        case 34:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 41;
                            break;

                        case 37:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 40;
                                break;
                            }

                            return _context.abrupt("break", 81);

                        case 40:
                            _ref3 = _i2.value;

                        case 41:
                            v = _ref3;

                            if (!(v.ch && v.name == type[0])) {
                                _context.next = 78;
                                break;
                            }

                            _iterator3 = v.ch, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 44:
                            if (!_isArray3) {
                                _context.next = 50;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context.next = 47;
                                break;
                            }

                            return _context.abrupt("break", 76);

                        case 47:
                            _ref4 = _iterator3[_i3++];
                            _context.next = 54;
                            break;

                        case 50:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context.next = 53;
                                break;
                            }

                            return _context.abrupt("break", 76);

                        case 53:
                            _ref4 = _i3.value;

                        case 54:
                            _v = _ref4;

                            if (!(_v.ch && _v.name == type[1])) {
                                _context.next = 73;
                                break;
                            }

                            _iterator4 = _v.ch, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 57:
                            if (!_isArray4) {
                                _context.next = 63;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context.next = 60;
                                break;
                            }

                            return _context.abrupt("break", 71);

                        case 60:
                            _ref5 = _iterator4[_i4++];
                            _context.next = 67;
                            break;

                        case 63:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context.next = 66;
                                break;
                            }

                            return _context.abrupt("break", 71);

                        case 66:
                            _ref5 = _i4.value;

                        case 67:
                            __v = _ref5;

                            if (__v.name == type[2]) {
                                if (regulation) {
                                    __v.sku_stock = Number(__v.sku_stock) - val.goods_nums;
                                } else {
                                    __v.sku_stock = Number(__v.sku_stock) + val.goods_nums;
                                }
                            }

                        case 69:
                            _context.next = 57;
                            break;

                        case 71:
                            _context.next = 74;
                            break;

                        case 73:
                            if (_v.name == type[1]) {
                                if (regulation) {
                                    _v.sku_stock = Number(_v.sku_stock) - val.goods_nums;
                                } else {
                                    _v.sku_stock = Number(_v.sku_stock) + val.goods_nums;
                                }
                            }

                        case 74:
                            _context.next = 44;
                            break;

                        case 76:
                            _context.next = 79;
                            break;

                        case 78:
                            if (v.name == type[0]) {
                                if (regulation) {
                                    v.sku_stock = Number(v.sku_stock) - val.goods_nums;
                                } else {
                                    v.sku_stock = Number(v.sku_stock) + val.goods_nums;
                                }
                            }

                        case 79:
                            _context.next = 31;
                            break;

                        case 81:
                            think.log(data);
                            date = {};

                            date[sku] = (0, _stringify2.default)(data);
                            _context.next = 86;
                            return model.where({ id: val.goods_id }).update(date);

                        case 86:
                            if (!regulation) {
                                _context.next = 91;
                                break;
                            }

                            _context.next = 89;
                            return model.where({ id: val.goods_id }).decrement(_stock, val.goods_nums);

                        case 89:
                            _context.next = 93;
                            break;

                        case 91:
                            _context.next = 93;
                            return model.where({ id: val.goods_id }).increment(_stock, val.goods_nums);

                        case 93:
                            _context.next = 4;
                            break;

                        case 95:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function stock(_x) {
            return _ref.apply(this, arguments);
        }

        return stock;
    }();

    /**
     *
     * @param goods_id 商品id
     * @param type 商品sku类型
     * @param sku  新建模型的 sku 字段名
     * @param stock 新建模型的 总库存字段名
     * @returns {*} 库存数量
     */


    _class.prototype.getstock = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(goods_id, type) {
            var sku = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "suk";
            var stock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "total_stock";

            var ressku, model_id, table, model, data, skuarr, _iterator5, _isArray5, _i5, _ref7, v, _iterator6, _isArray6, _i6, _ref8, _v, _iterator7, _isArray7, _i7, _ref9, __v;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            ressku = void 0;
                            _context2.next = 3;
                            return this.model("document").where({ id: goods_id }).getField("model_id", true);

                        case 3:
                            model_id = _context2.sent;

                            if (model_id) {
                                _context2.next = 6;
                                break;
                            }

                            return _context2.abrupt("return", 0);

                        case 6:
                            _context2.next = 8;
                            return this.model("model").get_table_name(model_id);

                        case 8:
                            table = _context2.sent;
                            model = this.model(table);

                            if (!think.isEmpty(type)) {
                                _context2.next = 16;
                                break;
                            }

                            _context2.next = 13;
                            return model.where({ id: goods_id }).getField(stock, true);

                        case 13:
                            ressku = _context2.sent;
                            _context2.next = 74;
                            break;

                        case 16:
                            _context2.next = 18;
                            return model.where({ id: goods_id }).getField(sku, true);

                        case 18:
                            data = _context2.sent;

                            data = JSON.parse(data);
                            type = type.split(",");
                            skuarr = [];
                            _iterator5 = data.data, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

                        case 23:
                            if (!_isArray5) {
                                _context2.next = 29;
                                break;
                            }

                            if (!(_i5 >= _iterator5.length)) {
                                _context2.next = 26;
                                break;
                            }

                            return _context2.abrupt("break", 73);

                        case 26:
                            _ref7 = _iterator5[_i5++];
                            _context2.next = 33;
                            break;

                        case 29:
                            _i5 = _iterator5.next();

                            if (!_i5.done) {
                                _context2.next = 32;
                                break;
                            }

                            return _context2.abrupt("break", 73);

                        case 32:
                            _ref7 = _i5.value;

                        case 33:
                            v = _ref7;

                            if (!(v.ch && v.name == type[0])) {
                                _context2.next = 70;
                                break;
                            }

                            _iterator6 = v.ch, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

                        case 36:
                            if (!_isArray6) {
                                _context2.next = 42;
                                break;
                            }

                            if (!(_i6 >= _iterator6.length)) {
                                _context2.next = 39;
                                break;
                            }

                            return _context2.abrupt("break", 68);

                        case 39:
                            _ref8 = _iterator6[_i6++];
                            _context2.next = 46;
                            break;

                        case 42:
                            _i6 = _iterator6.next();

                            if (!_i6.done) {
                                _context2.next = 45;
                                break;
                            }

                            return _context2.abrupt("break", 68);

                        case 45:
                            _ref8 = _i6.value;

                        case 46:
                            _v = _ref8;

                            if (!(_v.ch && _v.name == type[1])) {
                                _context2.next = 65;
                                break;
                            }

                            _iterator7 = _v.ch, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);

                        case 49:
                            if (!_isArray7) {
                                _context2.next = 55;
                                break;
                            }

                            if (!(_i7 >= _iterator7.length)) {
                                _context2.next = 52;
                                break;
                            }

                            return _context2.abrupt("break", 63);

                        case 52:
                            _ref9 = _iterator7[_i7++];
                            _context2.next = 59;
                            break;

                        case 55:
                            _i7 = _iterator7.next();

                            if (!_i7.done) {
                                _context2.next = 58;
                                break;
                            }

                            return _context2.abrupt("break", 63);

                        case 58:
                            _ref9 = _i7.value;

                        case 59:
                            __v = _ref9;

                            if (__v.name == type[2]) {

                                skuarr.push(Number(__v.sku_stock));
                            }

                        case 61:
                            _context2.next = 49;
                            break;

                        case 63:
                            _context2.next = 66;
                            break;

                        case 65:
                            if (_v.name == type[1]) {
                                skuarr.push(Number(_v.sku_stock));
                            }

                        case 66:
                            _context2.next = 36;
                            break;

                        case 68:
                            _context2.next = 71;
                            break;

                        case 70:
                            if (v.name == type[0]) {
                                skuarr.push(Number(v.sku_stock));
                            }

                        case 71:
                            _context2.next = 23;
                            break;

                        case 73:
                            ressku = skuarr[0];

                        case 74:
                            return _context2.abrupt("return", ressku);

                        case 75:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function getstock(_x5, _x6) {
            return _ref6.apply(this, arguments);
        }

        return getstock;
    }();

    _class.prototype.orderid = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var prefix, oo;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            // let date = new Date();
                            // let y = date.getFullYear();
                            // let m = date.getMonth()+1 <10 ?"0"+(date.getMonth()+1):date.getMonth()+1;
                            // let d = date.getDate()<10?"0"+date.getDate():date.getDate();
                            // let v_timestr = y+m+d;
                            prefix = think.parseConfig(true, think.config("db")).prefix;
                            _context3.next = 3;
                            return think.model("mysql", think.config("db")).query("call seq_no(1)");

                        case 3:
                            oo = _context3.sent;
                            return _context3.abrupt("return", oo[0][0]["order_sn"]);

                        case 5:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function orderid() {
            return _ref10.apply(this, arguments);
        }

        return orderid;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=order.js.map