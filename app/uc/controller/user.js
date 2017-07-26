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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

var _thinkPagination = require('think-pagination');

var _thinkPagination2 = _interopRequireDefault(_thinkPagination);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _jimp = require('jimp');

var _jimp2 = _interopRequireDefault(_jimp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        //let login = await super.islogin()
        ////是否验证登陆
        //if(!login){
        //    return this.fail("你木有登录！")
        //}
    };

    /**
     * index action
     * 用户中心主页
     * @return {Promise} []
     */


    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var userInfo, order, orderTotal, onOrder, mtype, vuedata;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.weblogin();

                        case 2:
                            _context.next = 4;
                            return this.model("member").join({
                                table: "customer",
                                jion: "left",
                                on: ["id", "user_id"]
                            }).find(this.user.uid);

                        case 4:
                            userInfo = _context.sent;

                            this.assign("userInfo", userInfo);
                            //订单交易总金额
                            _context.next = 8;
                            return this.model("order").where({ user_id: this.user.uid, pay_status: 1 }).getField('order_amount');

                        case 8:
                            order = _context.sent;
                            orderTotal = eval(order.join("+"));

                            this.assign("orderTotal", orderTotal);
                            //进行中的订单
                            _context.next = 13;
                            return this.model("order").where({ status: 4, user_id: this.user.uid }).count("id");

                        case 13:
                            onOrder = _context.sent;

                            this.assign("onOrder", onOrder);
                            //带评价的商品 TODO
                            this.meta_title = "用户中心";
                            //判断浏览客户端

                            if (!checkMobile(this.userAgent())) {
                                _context.next = 27;
                                break;
                            }

                            mtype = this.get('mtype');

                            if (!(mtype == 'vue')) {
                                _context.next = 23;
                                break;
                            }

                            //vue
                            vuedata = { orderTotal: orderTotal, onOrder: onOrder };
                            return _context.abrupt('return', this.json(vuedata));

                        case 23:
                            //普通模板
                            this.active = this.http.controller + "/" + this.http.action;
                            return _context.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 25:
                            _context.next = 28;
                            break;

                        case 27:
                            return _context.abrupt('return', this.display());

                        case 28:
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

    //我的订单


    _class.prototype.orderAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var status, map, data, html, _iterator, _isArray, _i, _ref3, val, numarr, _iterator3, _isArray3, _i3, _ref5, _v, nopaid, receipt, _iterator2, _isArray2, _i2, _ref4, v;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.weblogin();

                        case 2:
                            status = this.param("status") || null;
                            //console.log(status);

                            map = void 0;

                            //当前位置

                            if (!think.isEmpty(status)) {
                                this.assign('status', status);
                            }
                            //筛选订单

                            if (status == 0) {
                                //未付款的订单
                                map = {
                                    type: 0,
                                    pay_status: 0,
                                    delivery_status: ["!=", 1],
                                    status: ["NOTIN", [4, 6]],
                                    is_del: 0,
                                    user_id: this.user.uid
                                };
                            } else if (status == 1) {
                                //代收货的订单
                                //(item.pay_status == 1 or item.status ==3) and item.delivery_status != 1 and item.status != 6 and item.status != 4
                                //item.delivery_status == 1 and item.status != 6 and item.status != 4
                                // map={
                                //     status: ["NOTIN", [4, 6]],
                                //     delivery_status: ["!=", 1],
                                //     is_del: 0,
                                //     user_id: this.user.uid,
                                //     _complex:{
                                //         pay_status: 1,
                                //         status: 3,
                                //         _logic: "or"
                                //     }
                                // }
                                map = {
                                    type: 0,
                                    status: ["NOTIN", [4, 6]],
                                    delivery_status: 1,
                                    is_del: 0,
                                    user_id: this.user.uid
                                };
                            } else {
                                map = {
                                    type: 0,
                                    is_del: 0,
                                    user_id: this.user.uid
                                };
                            }

                            //console.log(map);
                            // this.config("db.nums_per_page",20)
                            _context2.next = 8;
                            return this.model("order").where(map).page(this.param('page')).order("create_time DESC").countSelect();

                        case 8:
                            data = _context2.sent;
                            html = (0, _thinkPagination2.default)(data, this.http, {
                                desc: false, //show description
                                pageNum: 2,
                                url: '', //page url, when not set, it will auto generated
                                class: 'nomargin', //pagenation extra class
                                text: {
                                    next: '下一页',
                                    prev: '上一页',
                                    total: 'count: ${count} , pages: ${pages}'
                                }
                            });

                            this.assign('pagination', html);
                            _iterator = data.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 12:
                            if (!_isArray) {
                                _context2.next = 18;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context2.next = 15;
                                break;
                            }

                            return _context2.abrupt('break', 68);

                        case 15:
                            _ref3 = _iterator[_i++];
                            _context2.next = 22;
                            break;

                        case 18:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context2.next = 21;
                                break;
                            }

                            return _context2.abrupt('break', 68);

                        case 21:
                            _ref3 = _i.value;

                        case 22:
                            val = _ref3;
                            _context2.t0 = val.payment;
                            _context2.next = _context2.t0 === 100 ? 26 : _context2.t0 === 1001 ? 28 : 30;
                            break;

                        case 26:
                            val.channel = "预付款支付";
                            return _context2.abrupt('break', 33);

                        case 28:
                            val.channel = "货到付款";
                            return _context2.abrupt('break', 33);

                        case 30:
                            _context2.next = 32;
                            return this.model("pingxx").where({ id: val.payment }).getField("title", true);

                        case 32:
                            val.channel = _context2.sent;

                        case 33:
                            _context2.next = 35;
                            return this.model("area").where({ id: val.province }).getField("name", true);

                        case 35:
                            val.province = _context2.sent;
                            _context2.next = 38;
                            return this.model("area").where({ id: val.city }).getField("name", true);

                        case 38:
                            val.city = _context2.sent;
                            _context2.next = 41;
                            return this.model("area").where({ id: val.county }).getField("name", true);

                        case 41:
                            val.county = _context2.sent;

                            //未付款订单倒计时
                            if (val.pay_status == 0) {
                                val.end_time = date_from(val.create_time + Number(this.setup.ORDER_DELAY) * 60000);
                            }
                            //console.log(this.setup.ORDER_DELAY_BUND)
                            //查出订单里面的商品列表
                            _context2.next = 45;
                            return this.model("order_goods").where({ order_id: val.id }).select();

                        case 45:
                            val.goods = _context2.sent;
                            numarr = [];
                            _iterator3 = val.goods, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 48:
                            if (!_isArray3) {
                                _context2.next = 54;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context2.next = 51;
                                break;
                            }

                            return _context2.abrupt('break', 65);

                        case 51:
                            _ref5 = _iterator3[_i3++];
                            _context2.next = 58;
                            break;

                        case 54:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context2.next = 57;
                                break;
                            }

                            return _context2.abrupt('break', 65);

                        case 57:
                            _ref5 = _i3.value;

                        case 58:
                            _v = _ref5;

                            _v.prom_goods = JSON.parse(_v.prom_goods);
                            numarr.push(_v.goods_nums);
                            _v = think.extend(_v, _v.prom_goods);
                            delete _v.prom_goods;

                        case 63:
                            _context2.next = 48;
                            break;

                        case 65:
                            //console.log(val.goods)
                            val.nums = eval(numarr.join("+"));

                        case 66:
                            _context2.next = 12;
                            break;

                        case 68:
                            _context2.next = 70;
                            return this.model("order").where({
                                type: 0,
                                pay_status: 0,
                                delivery_status: ["!=", 1],
                                status: ["NOTIN", [4, 6]],
                                is_del: 0,
                                user_id: this.user.uid
                            }).count("id");

                        case 70:
                            nopaid = _context2.sent;

                            this.assign("nopaid", nopaid);
                            //未付款统计
                            _context2.next = 74;
                            return this.model("order").where({
                                type: 0,
                                status: ["NOTIN", [4, 6]],
                                delivery_status: 1,
                                is_del: 0,
                                user_id: this.user.uid
                            }).count("id");

                        case 74:
                            receipt = _context2.sent;

                            this.assign("nopaid", nopaid);
                            this.assign("receipt", receipt);
                            //console.log(data.data);
                            this.assign("count", data.count);
                            this.assign('list', data.data);
                            this.meta_title = "我的订单";
                            //判断浏览客户端

                            if (!checkMobile(this.userAgent())) {
                                _context2.next = 104;
                                break;
                            }

                            if (!this.isAjax("get")) {
                                _context2.next = 100;
                                break;
                            }

                            _iterator2 = data.data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 83:
                            if (!_isArray2) {
                                _context2.next = 89;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context2.next = 86;
                                break;
                            }

                            return _context2.abrupt('break', 97);

                        case 86:
                            _ref4 = _iterator2[_i2++];
                            _context2.next = 93;
                            break;

                        case 89:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context2.next = 92;
                                break;
                            }

                            return _context2.abrupt('break', 97);

                        case 92:
                            _ref4 = _i2.value;

                        case 93:
                            v = _ref4;

                            v.create_time = (0, _moment2.default)(v.create_time).format('lll');

                        case 95:
                            _context2.next = 83;
                            break;

                        case 97:
                            return _context2.abrupt('return', this.json(data));

                        case 100:
                            this.active = "user/index";
                            return _context2.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 102:
                            _context2.next = 105;
                            break;

                        case 104:
                            return _context2.abrupt('return', this.display());

                        case 105:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function orderAction() {
            return _ref2.apply(this, arguments);
        }

        return orderAction;
    }();

    //删除订单


    _class.prototype.delorderAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var res, type, map;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return this.weblogin();

                        case 2:
                            res = void 0;
                            type = this.get("type") || null;

                            if (!think.isEmpty(type)) {
                                _context3.next = 11;
                                break;
                            }

                            map = {
                                id: this.get("id"),
                                user_id: this.user.uid,
                                status: ["IN", [4, 6]]
                            };
                            _context3.next = 8;
                            return this.model("order").where(map).update({ is_del: 1 });

                        case 8:
                            res = _context3.sent;
                            _context3.next = 14;
                            break;

                        case 11:
                            _context3.next = 13;
                            return this.model("order").where({ id: this.get("id"), user_id: this.user.uid }).delete();

                        case 13:
                            res = _context3.sent;

                        case 14:
                            if (!res) {
                                _context3.next = 18;
                                break;
                            }

                            return _context3.abrupt('return', this.success({ name: "删除成功！" }));

                        case 18:
                            return _context3.abrupt('return', this.fail("删除失败!"));

                        case 19:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function delorderAction() {
            return _ref6.apply(this, arguments);
        }

        return delorderAction;
    }();

    //确认收货


    _class.prototype.confirmreceiptAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var map, res;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return this.weblogin();

                        case 2:
                            map = {
                                id: this.get("id"),
                                user_id: this.user.uid,
                                delivery_status: 1,
                                status: ["NOTIN", [4, 6]]
                            };
                            _context4.next = 5;
                            return this.model("order").where(map).update({ status: 4 });

                        case 5:
                            res = _context4.sent;

                            if (!res) {
                                _context4.next = 10;
                                break;
                            }

                            return _context4.abrupt('return', this.success({ name: "操作成功！" }));

                        case 10:
                            return _context4.abrupt('return', this.fail("操作失败!"));

                        case 11:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function confirmreceiptAction() {
            return _ref7.apply(this, arguments);
        }

        return confirmreceiptAction;
    }();

    /**
     * 收货地址管理
     * @returns {PreventPromise}
     */


    _class.prototype.addressAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var data, html, _iterator4, _isArray4, _i4, _ref9, val;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return this.weblogin();

                        case 2:
                            _context5.next = 4;
                            return this.model("address").where({ user_id: this.user.uid }).page(this.get('page')).order("is_default DESC,id DESC").countSelect();

                        case 4:
                            data = _context5.sent;
                            html = (0, _thinkPagination2.default)(data, this.http, {
                                desc: false, //show description
                                pageNum: 2,
                                url: '', //page url, when not set, it will auto generated
                                class: 'nomargin', //pagenation extra class
                                text: {
                                    next: '下一页',
                                    prev: '上一页',
                                    total: 'count: ${count} , pages: ${pages}'
                                }
                            });
                            //think.log(data);

                            this.assign('pagination', html);

                            if (think.isEmpty(data.data)) {
                                _context5.next = 34;
                                break;
                            }

                            _iterator4 = data.data, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 9:
                            if (!_isArray4) {
                                _context5.next = 15;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context5.next = 12;
                                break;
                            }

                            return _context5.abrupt('break', 34);

                        case 12:
                            _ref9 = _iterator4[_i4++];
                            _context5.next = 19;
                            break;

                        case 15:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context5.next = 18;
                                break;
                            }

                            return _context5.abrupt('break', 34);

                        case 18:
                            _ref9 = _i4.value;

                        case 19:
                            val = _ref9;

                            val.province_num = val.province;
                            val.city_num = val.city;
                            val.county_num = val.county;
                            _context5.next = 25;
                            return this.model("area").where({ id: val.province }).getField("name", true);

                        case 25:
                            val.province = _context5.sent;
                            _context5.next = 28;
                            return this.model("area").where({ id: val.city }).getField("name", true);

                        case 28:
                            val.city = _context5.sent;
                            _context5.next = 31;
                            return this.model("area").where({ id: val.county }).getField("name", true);

                        case 31:
                            val.county = _context5.sent;

                        case 32:
                            _context5.next = 9;
                            break;

                        case 34:
                            this.assign("list", data.data);
                            this.meta_title = "收货地址";
                            //判断浏览客户端

                            if (!checkMobile(this.userAgent())) {
                                _context5.next = 41;
                                break;
                            }

                            this.active = "user/index";
                            return _context5.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 41:
                            return _context5.abrupt('return', this.display());

                        case 42:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function addressAction() {
            return _ref8.apply(this, arguments);
        }

        return addressAction;
    }();

    /**
     * 账户金额管理
     * @returns {PreventPromise}
     */


    _class.prototype.accountAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var type, data, _iterator5, _isArray5, _i5, _ref11, val, html, userInfo, unpaid, _iterator6, _isArray6, _i6, _ref12, v;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return this.weblogin();

                        case 2:
                            type = this.get("type") || null;
                            data = void 0;

                            if (!think.isEmpty(type)) {
                                _context6.next = 10;
                                break;
                            }

                            _context6.next = 7;
                            return this.model("balance_log").where({ user_id: this.user.uid }).page(this.param('page')).order("time DESC").countSelect();

                        case 7:
                            data = _context6.sent;
                            _context6.next = 36;
                            break;

                        case 10:
                            if (!(type == 1)) {
                                _context6.next = 16;
                                break;
                            }

                            _context6.next = 13;
                            return this.model("balance_log").where({ user_id: 10000 }).page(this.param('page')).order("time DESC").countSelect();

                        case 13:
                            data = _context6.sent;
                            _context6.next = 36;
                            break;

                        case 16:
                            _context6.next = 18;
                            return this.model("order").where({
                                user_id: this.user.uid,
                                type: 1,
                                is_del: 0
                            }).page(this.get('page')).order("create_time DESC").countSelect();

                        case 18:
                            data = _context6.sent;
                            _iterator5 = data.data, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

                        case 20:
                            if (!_isArray5) {
                                _context6.next = 26;
                                break;
                            }

                            if (!(_i5 >= _iterator5.length)) {
                                _context6.next = 23;
                                break;
                            }

                            return _context6.abrupt('break', 36);

                        case 23:
                            _ref11 = _iterator5[_i5++];
                            _context6.next = 30;
                            break;

                        case 26:
                            _i5 = _iterator5.next();

                            if (!_i5.done) {
                                _context6.next = 29;
                                break;
                            }

                            return _context6.abrupt('break', 36);

                        case 29:
                            _ref11 = _i5.value;

                        case 30:
                            val = _ref11;
                            _context6.next = 33;
                            return this.model("pingxx").where({ id: val.payment }).getField("title", true);

                        case 33:
                            val.channel = _context6.sent;

                        case 34:
                            _context6.next = 20;
                            break;

                        case 36:
                            html = (0, _thinkPagination2.default)(data, this.http, {
                                desc: false, //show description
                                pageNum: 2,
                                url: '', //page url, when not set, it will auto generated
                                class: 'nomargin', //pagenation extra class
                                text: {
                                    next: '下一页',
                                    prev: '上一页',
                                    total: 'count: ${count} , pages: ${pages}'
                                }
                            });
                            //think.log(data);

                            this.assign('pagination', html);
                            this.assign("list", data.data);
                            this.assign("type", type);
                            this.assign("count", data.count);
                            //获取用户信息
                            _context6.next = 43;
                            return this.model("member").join({
                                table: "customer",
                                jion: "left",
                                on: ["id", "user_id"]
                            }).find(this.user.uid);

                        case 43:
                            userInfo = _context6.sent;

                            this.assign("userInfo", userInfo);
                            //未付款的充值订单统计
                            _context6.next = 47;
                            return this.model("order").where({
                                user_id: this.user.uid,
                                type: 1,
                                is_del: 0,
                                pay_status: 0
                            }).count("id");

                        case 47:
                            unpaid = _context6.sent;

                            this.assign("unpaid", unpaid);
                            this.meta_title = "账户金额管理";
                            //判断浏览客户端

                            if (!checkMobile(this.userAgent())) {
                                _context6.next = 76;
                                break;
                            }

                            if (!this.isAjax("get")) {
                                _context6.next = 72;
                                break;
                            }

                            _iterator6 = data.data, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

                        case 53:
                            if (!_isArray6) {
                                _context6.next = 59;
                                break;
                            }

                            if (!(_i6 >= _iterator6.length)) {
                                _context6.next = 56;
                                break;
                            }

                            return _context6.abrupt('break', 69);

                        case 56:
                            _ref12 = _iterator6[_i6++];
                            _context6.next = 63;
                            break;

                        case 59:
                            _i6 = _iterator6.next();

                            if (!_i6.done) {
                                _context6.next = 62;
                                break;
                            }

                            return _context6.abrupt('break', 69);

                        case 62:
                            _ref12 = _i6.value;

                        case 63:
                            v = _ref12;

                            v.time = (0, _moment2.default)(v.create_time).format('YYYY-MM-DD HH:mm:ss');
                            v.amount = formatCurrency(v.amount);
                            v.amount_log = formatCurrency(v.amount_log);

                        case 67:
                            _context6.next = 53;
                            break;

                        case 69:
                            return _context6.abrupt('return', this.json(data));

                        case 72:
                            this.active = "user/index";
                            return _context6.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 74:
                            _context6.next = 77;
                            break;

                        case 76:
                            return _context6.abrupt('return', this.display());

                        case 77:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function accountAction() {
            return _ref10.apply(this, arguments);
        }

        return accountAction;
    }();

    /**
     * 充值
     */


    _class.prototype.rechargeAction = function () {
        var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var data, nowtime, oid, channel, open_id, payment, pay, charges, order_id, receiving, map, paylist;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return this.weblogin();

                        case 2:
                            if (!this.isAjax("POST")) {
                                _context7.next = 49;
                                break;
                            }

                            data = this.post();

                            if (!think.isEmpty(data.order_amount)) {
                                _context7.next = 8;
                                break;
                            }

                            return _context7.abrupt('return', this.fail("请输入金额！"));

                        case 8:
                            if (think.isNumberString(data.order_amount)) {
                                _context7.next = 12;
                                break;
                            }

                            return _context7.abrupt('return', this.fail("金额类型错误！"));

                        case 12:
                            if (!think.isEmpty(data.payment)) {
                                _context7.next = 14;
                                break;
                            }

                            return _context7.abrupt('return', this.fail("必须选一种支付方式！"));

                        case 14:

                            //用户
                            data.user_id = this.user.uid;
                            //生成订单编号//todo
                            nowtime = new Date().valueOf();
                            oid = ["c", this.user.uid, nowtime];

                            data.order_no = oid.join("");
                            //支付状态 pay_stayus 0:未付款 ,1:已付款
                            data.pay_status = 0;
                            //订单状态 status 2:等待审核，3:已审核
                            data.status = 2;
                            //发货状态 type 0:普通，1:充值
                            data.type = 1;
                            //订单创建时间 create_time
                            data.create_time = new Date().valueOf();
                            //生成订单

                            //判断是否已经绑定pingxx_id,如果已绑定查询pingxx订单直接支付。防止订单重复生成。
                            // console.log(111111111)
                            //获取渠道
                            _context7.next = 24;
                            return this.model("pingxx").where({ id: data.payment }).getField("channel", true);

                        case 24:
                            channel = _context7.sent;
                            open_id = void 0;

                            if (!(channel == "wx_pub")) {
                                _context7.next = 30;
                                break;
                            }

                            _context7.next = 29;
                            return this.session("wx_openid");

                        case 29:
                            open_id = _context7.sent;

                        case 30:
                            //调用ping++ 服务端
                            payment = think.service("payment");
                            pay = new payment(this.http);
                            //传入 channel,order_no,order_amount,this.ip()

                            _context7.next = 34;
                            return pay.pingxx(channel, data.order_no, data.order_amount, this.ip(), open_id);

                        case 34:
                            charges = _context7.sent;

                            if (!charges) {
                                _context7.next = 46;
                                break;
                            }

                            //把pingxx_id存到订单
                            data.pingxx_id = charges.id;
                            _context7.next = 39;
                            return this.model("order").add(data);

                        case 39:
                            order_id = _context7.sent;


                            //支付日志
                            receiving = {
                                order_id: order_id,
                                user_id: this.user.uid,
                                amount: data.order_amount,
                                create_time: new Date().getTime(),
                                payment_time: new Date().getTime(),
                                doc_type: 1,
                                payment_id: data.payment,
                                pay_status: 0
                            };
                            _context7.next = 43;
                            return this.model("doc_receiving").add(receiving);

                        case 43:
                            return _context7.abrupt('return', this.success({ name: "支付订单对接成功，正在转跳！", data: charges }));

                        case 46:
                            return _context7.abrupt('return', this.fail("调用接口失败！"));

                        case 47:
                            _context7.next = 62;
                            break;

                        case 49:
                            //ping++ 支付渠道 pc网页
                            //根据不同的客户端调用不同的支付方式
                            map = void 0;

                            if (checkMobile(this.userAgent())) {
                                map = {
                                    type: 2,
                                    status: 1
                                };
                                if (!is_weixin(this.userAgent())) {
                                    map.channel = ["!=", "wx_pub"];
                                }
                            } else {
                                map = {
                                    type: 1,
                                    status: 1
                                };
                            }
                            _context7.next = 53;
                            return this.model("pingxx").where(map).order("sort ASC").select();

                        case 53:
                            paylist = _context7.sent;

                            this.assign("paylist", paylist);
                            this.meta_title = "充值";

                            if (!checkMobile(this.userAgent())) {
                                _context7.next = 61;
                                break;
                            }

                            this.active = "user/index";
                            return _context7.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 61:

                            this.display();

                        case 62:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function rechargeAction() {
            return _ref13.apply(this, arguments);
        }

        return rechargeAction;
    }();

    //   用户设置


    _class.prototype.setingAction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var userInfo, province, city, county;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            _context8.next = 2;
                            return this.weblogin();

                        case 2:
                            _context8.next = 4;
                            return this.model("member").join({
                                table: "customer",
                                jion: "left",
                                on: ["id", "user_id"]
                            }).find(this.user.uid);

                        case 4:
                            userInfo = _context8.sent;

                            //console.log(userInfo);
                            this.assign("userInfo", userInfo);
                            province = void 0, city = void 0, county = void 0;
                            //获取省份

                            if (!checkMobile(this.userAgent())) {
                                _context8.next = 19;
                                break;
                            }

                            _context8.next = 10;
                            return this.model('area').where({ id: userInfo.province }).getField("name", true);

                        case 10:
                            province = _context8.sent;
                            _context8.next = 13;
                            return this.model('area').where({ id: userInfo.city }).getField("name", true);

                        case 13:
                            city = _context8.sent;
                            _context8.next = 16;
                            return this.model('area').where({ id: userInfo.county }).getField("name", true);

                        case 16:
                            county = _context8.sent;
                            _context8.next = 28;
                            break;

                        case 19:
                            _context8.next = 21;
                            return this.model('area').where({ parent_id: 0 }).select();

                        case 21:
                            province = _context8.sent;
                            _context8.next = 24;
                            return this.model('area').where({ parent_id: userInfo.province }).select();

                        case 24:
                            city = _context8.sent;
                            _context8.next = 27;
                            return this.model('area').where({ parent_id: userInfo.city }).select();

                        case 27:
                            county = _context8.sent;

                        case 28:

                            this.assign("province", province);
                            this.assign("city", city);
                            this.assign("county", county);
                            this.meta_title = "用户设置";
                            //判断浏览客户端

                            if (!checkMobile(this.userAgent())) {
                                _context8.next = 37;
                                break;
                            }

                            this.active = "user/index";
                            return _context8.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 37:
                            return _context8.abrupt('return', this.display());

                        case 38:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function setingAction() {
            return _ref14.apply(this, arguments);
        }

        return setingAction;
    }();

    //更新用户信息


    _class.prototype.updateinfoAction = function () {
        var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var data, member, customer, city_picke, update1, update2;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            _context9.next = 2;
                            return this.weblogin();

                        case 2:
                            data = this.post();
                            // think.log(data);

                            member = {
                                email: data.email,
                                mobile: data.mobile
                            };
                            customer = {
                                real_name: data.real_name,
                                sex: data.sex,
                                birthday: new Date(data.birthday).getTime(),
                                phone: data.phone,
                                province: data.province,
                                city: data.city,
                                county: data.county,
                                addr: data.addr

                                //判断浏览客户端
                            };

                            if (!checkMobile(this.userAgent())) {
                                _context9.next = 17;
                                break;
                            }

                            if (think.isEmpty(data.city_picke)) {
                                _context9.next = 17;
                                break;
                            }

                            city_picke = data.city_picke.split(" ");
                            _context9.next = 10;
                            return this.model("area").where({
                                name: ["like", '%' + city_picke[0] + '%'],
                                parent_id: 0
                            }).getField("id", true);

                        case 10:
                            customer.province = _context9.sent;
                            _context9.next = 13;
                            return this.model("area").where({
                                name: ["like", '%' + city_picke[1] + '%'],
                                parent_id: customer.province
                            }).getField("id", true);

                        case 13:
                            customer.city = _context9.sent;
                            _context9.next = 16;
                            return this.model("area").where({
                                name: ["like", '%' + city_picke[2] + '%'],
                                parent_id: customer.city
                            }).getField("id", true);

                        case 16:
                            customer.county = _context9.sent;

                        case 17:
                            _context9.next = 19;
                            return this.model("member").where({ id: this.user.uid }).update(member);

                        case 19:
                            update1 = _context9.sent;
                            _context9.next = 22;
                            return this.model("customer").where({ user_id: this.user.uid }).update(customer);

                        case 22:
                            update2 = _context9.sent;

                            if (!(update1 && update2)) {
                                _context9.next = 27;
                                break;
                            }

                            return _context9.abrupt('return', this.success({ name: "更新用户资料成功！" }));

                        case 27:
                            return _context9.abrupt('return', this.fail("更新失败！"));

                        case 28:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function updateinfoAction() {
            return _ref15.apply(this, arguments);
        }

        return updateinfoAction;
    }();

    //修改密码


    _class.prototype.updatepasswordAction = function () {
        var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var data, password;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            _context10.next = 2;
                            return this.weblogin();

                        case 2:
                            data = this.post();
                            _context10.next = 5;
                            return this.model("member").where({ id: this.user.uid }).getField("password", true);

                        case 5:
                            password = _context10.sent;

                            if (!(password === encryptPassword(data.oldpassword))) {
                                _context10.next = 12;
                                break;
                            }

                            _context10.next = 9;
                            return this.model("member").where({ id: this.user.uid }).update({ password: encryptPassword(data.password) });

                        case 9:
                            return _context10.abrupt('return', this.success({ name: "密码修改成功，请用新密码重新登陆！" }));

                        case 12:
                            return _context10.abrupt('return', this.fail("旧密码不正确，请重新输入。"));

                        case 13:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function updatepasswordAction() {
            return _ref16.apply(this, arguments);
        }

        return updatepasswordAction;
    }();

    //上传头像


    _class.prototype.updateavatarAction = function () {
        var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
            var _this2 = this;

            var file, filepath, uploadPath, res, jimp2, post, avatar_data, jimp, data;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            _context11.next = 2;
                            return this.weblogin();

                        case 2:
                            file = think.extend({}, this.file('file'));

                            console.log(file);
                            //think.log(avatar_data);
                            filepath = file.path;
                            //文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件

                            uploadPath = think.RESOURCE_PATH + '/upload/avatar/' + this.user.uid;

                            think.mkdir(uploadPath);
                            res = void 0;

                            if (!checkMobile(this.userAgent())) {
                                _context11.next = 15;
                                break;
                            }

                            jimp2 = function jimp2() {
                                console.log(111);
                                var deferred = think.defer();
                                var self = _this2;
                                _jimp2.default.read(filepath, function (err, lenna) {
                                    if (err) throw err;
                                    lenna.resize(200, 200) // resize
                                    .quality(60) // set JPEG quality
                                    .write(uploadPath + "/avatar.png", function (e, r) {
                                        deferred.resolve('/upload/avatar/' + self.user.uid + "/avatar.png");
                                    }); // save
                                });
                                return deferred.promise;
                            };

                            _context11.next = 12;
                            return jimp2();

                        case 12:
                            res = _context11.sent;
                            _context11.next = 21;
                            break;

                        case 15:
                            post = this.post();
                            avatar_data = JSON.parse(post.avatar_data);

                            jimp = function jimp() {
                                var deferred = think.defer();
                                var self = _this2;
                                _jimp2.default.read(filepath, function (err, lenna) {
                                    //console.log(lenna)

                                    if (err) throw err;
                                    lenna.crop(avatar_data.x, avatar_data.y, avatar_data.width, avatar_data.height) // resize
                                    .quality(60).write(uploadPath + "/avatar.png", function (e, r) {
                                        deferred.resolve('/upload/avatar/' + self.user.uid + "/avatar.png");
                                    }); // save
                                });
                                return deferred.promise;
                            };

                            _context11.next = 20;
                            return jimp();

                        case 20:
                            res = _context11.sent;

                        case 21:

                            //think.log(res);
                            data = {
                                "result": res,
                                "errno": 0,
                                "message": "头像上传成功！"
                            };
                            return _context11.abrupt('return', this.end(data));

                        case 23:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function updateavatarAction() {
            return _ref17.apply(this, arguments);
        }

        return updateavatarAction;
    }();

    //获取头像


    _class.prototype.avatarAction = function () {
        var _ref18 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
            var uid, uploadPath, path, pic;
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            uid = this.get("uid") || this.user.uid;
                            uploadPath = think.RESOURCE_PATH + '/upload/avatar/' + uid;
                            path = think.isFile(uploadPath + "/" + "avatar.png");

                            this.type("image/png");
                            pic = void 0;

                            if (path) {
                                // this.download(uploadPath + "/" + "/avatar.png");
                                pic = _fs2.default.readFileSync(uploadPath + "/" + "avatar.png");
                            } else {
                                //this.download(think.RESOURCE_PATH + '/upload/avatar/avatar.jpg')
                                pic = _fs2.default.readFileSync(think.RESOURCE_PATH + '/upload/avatar/avatar.jpg');
                            }
                            this.end(pic);

                        case 7:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        function avatarAction() {
            return _ref18.apply(this, arguments);
        }

        return avatarAction;
    }();

    /**
     * 显示左边菜单，进行权限控制
     * @author
     */

    _class.prototype.priv = function () {
        var _ref19 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13(cate_id) {
            var cate, roleid, cates, _priv, parr, _iterator7, _isArray7, _i7, _ref20, _val2, _priv2, _iterator8, _isArray8, _i8, _ref21, val, _iterator9, _isArray9, _i9, _ref22, _val;

            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            _context13.t0 = cate_id;

                            if (_context13.t0) {
                                _context13.next = 5;
                                break;
                            }

                            _context13.next = 4;
                            return this.model("category", {}, 'admin').get_all_category();

                        case 4:
                            _context13.t0 = _context13.sent;

                        case 5:
                            cate = _context13.t0;
                            _context13.next = 8;
                            return this.model("member").where({ id: this.user.uid }).getField('groupid', true);

                        case 8:
                            roleid = _context13.sent;
                            cates = [];

                            if (!cate_id) {
                                _context13.next = 17;
                                break;
                            }

                            _context13.next = 13;
                            return this.model("category_priv").priv(cate_id, roleid, 'add');

                        case 13:
                            _priv = _context13.sent;

                            if (_priv == 1) {
                                cates.push(_priv);
                            }
                            _context13.next = 71;
                            break;

                        case 17:
                            // let priv = await this.model("category_priv").where({catid:39,is_admin:0,roleid:2,action:'add'}).select();
                            // console.log(priv);
                            //前台投稿分类
                            //TODO 权限控制(管理员)
                            parr = [];
                            _iterator7 = cate, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);

                        case 19:
                            if (!_isArray7) {
                                _context13.next = 25;
                                break;
                            }

                            if (!(_i7 >= _iterator7.length)) {
                                _context13.next = 22;
                                break;
                            }

                            return _context13.abrupt('break', 37);

                        case 22:
                            _ref20 = _iterator7[_i7++];
                            _context13.next = 29;
                            break;

                        case 25:
                            _i7 = _iterator7.next();

                            if (!_i7.done) {
                                _context13.next = 28;
                                break;
                            }

                            return _context13.abrupt('break', 37);

                        case 28:
                            _ref20 = _i7.value;

                        case 29:
                            _val2 = _ref20;
                            _context13.next = 32;
                            return this.model("category_priv").priv(_val2.id, roleid, 'add');

                        case 32:
                            _priv2 = _context13.sent;

                            _val2.priv = _priv2;
                            if (_priv2 == 1 && _val2.pid != 0) {
                                parr.push(_val2.pid);
                            }

                        case 35:
                            _context13.next = 19;
                            break;

                        case 37:
                            if (!think.isEmpty(parr)) {
                                _context13.next = 41;
                                break;
                            }

                            cates = cate;
                            _context13.next = 71;
                            break;

                        case 41:
                            _iterator8 = cate, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);

                        case 42:
                            if (!_isArray8) {
                                _context13.next = 48;
                                break;
                            }

                            if (!(_i8 >= _iterator8.length)) {
                                _context13.next = 45;
                                break;
                            }

                            return _context13.abrupt('break', 56);

                        case 45:
                            _ref21 = _iterator8[_i8++];
                            _context13.next = 52;
                            break;

                        case 48:
                            _i8 = _iterator8.next();

                            if (!_i8.done) {
                                _context13.next = 51;
                                break;
                            }

                            return _context13.abrupt('break', 56);

                        case 51:
                            _ref21 = _i8.value;

                        case 52:
                            val = _ref21;

                            if (in_array(val.id, parr)) {
                                val.priv = 1;
                            }

                        case 54:
                            _context13.next = 42;
                            break;

                        case 56:
                            _iterator9 = cate, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);

                        case 57:
                            if (!_isArray9) {
                                _context13.next = 63;
                                break;
                            }

                            if (!(_i9 >= _iterator9.length)) {
                                _context13.next = 60;
                                break;
                            }

                            return _context13.abrupt('break', 71);

                        case 60:
                            _ref22 = _iterator9[_i9++];
                            _context13.next = 67;
                            break;

                        case 63:
                            _i9 = _iterator9.next();

                            if (!_i9.done) {
                                _context13.next = 66;
                                break;
                            }

                            return _context13.abrupt('break', 71);

                        case 66:
                            _ref22 = _i9.value;

                        case 67:
                            _val = _ref22;

                            if (_val.priv == 1) {
                                cates.push(_val);
                            }

                        case 69:
                            _context13.next = 57;
                            break;

                        case 71:
                            return _context13.abrupt('return', think.isEmpty(cates));

                        case 72:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        function priv(_x) {
            return _ref19.apply(this, arguments);
        }

        return priv;
    }();
    /**
     * 默认文档列表方法
     * @param integer $cate_id 分类id
     * @param integer $model_id 模型id
     * @param integer $position 推荐标志
     * @param mixed $field 字段列表
     * @param integer $group_id 分组id
     */


    _class.prototype.getDocumentList = function () {
        var _ref23 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14(cate_id, model_id, position, field, group_id, sortval, sortid) {
            var map, status, Document, subcate, tablefields, modelName, key, nsobj, optionidarr, valuearr, _iterator10, _isArray10, _i10, _ref24, v, qarr, vv, list, Pages, pages, page, article, allow_publish;

            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            //console.log(2222222);
                            /* 查询条件初始化 */
                            cate_id = cate_id || 0, field = field || true;
                            map = {};
                            //获取当前用户的信息

                            map.uid = this.user.uid;
                            status = void 0;

                            if (!think.isEmpty(this.get('title'))) {
                                map.title = ['like', '%' + this.param('title') + '%'];
                            }
                            if (!think.isEmpty(this.get('status'))) {
                                map.status = this.param('status');
                                status = map.status;
                            } else {
                                status = null;
                                map.status = ['IN', '0,1,2'];
                            }
                            if (!think.isEmpty(this.get('time-start'))) {
                                map.update_time = { '>=': new Date(this.param('time-start').valueOf()) };
                            }
                            if (!think.isEmpty(this.get('time-end'))) {
                                map.update_time = { '<=': 24 * 60 * 60 + new Date(this.param('time-end').valueOf()) };
                            }

                            if (think.isEmpty(this.get('nickname'))) {
                                _context14.next = 12;
                                break;
                            }

                            _context14.next = 11;
                            return this.model('member').where({ 'nickname': this.param('nickname') }).getField('uid');

                        case 11:
                            map.uid = _context14.sent;

                        case 12:

                            // 构建列表数据
                            Document = this.model('document');

                            if (!cate_id) {
                                _context14.next = 19;
                                break;
                            }

                            _context14.next = 16;
                            return this.model('category', {}, 'admin').get_sub_category(cate_id);

                        case 16:
                            subcate = _context14.sent;

                            // console.log(subcate);
                            subcate.push(cate_id);
                            map.category_id = ['IN', subcate];

                        case 19:
                            // console.log(map);
                            map.pid = this.param('pid') || 0;
                            //console.log(map.pid);
                            if (map.pid != 0) {
                                // 子文档列表忽略分类
                                delete map.category_id;
                            }

                            //console.log(array_diff(tablefields,field));

                            if (think.isEmpty(model_id)) {
                                _context14.next = 37;
                                break;
                            }

                            map.model_id = model_id;
                            _context14.next = 25;
                            return Document.select();

                        case 25:
                            _context14.t0 = _keys2.default;
                            _context14.next = 28;
                            return Document.getSchema();

                        case 28:
                            _context14.t1 = _context14.sent;
                            tablefields = (0, _context14.t0)(_context14.t1);

                            if (!(think.isArray(field) && array_diff(tablefields, field))) {
                                _context14.next = 37;
                                break;
                            }

                            _context14.next = 33;
                            return this.model('model').where({ id: model_id }).getField('name');

                        case 33:
                            modelName = _context14.sent;

                            //console.log('__DOCUMENT_'+modelName[0].toUpperCase()+'__ '+modelName[0]+' ON DOCUMENT.id='+modelName[0]+'.id');
                            // let sql = Document.parseSql(sql)
                            //console.log(`${this.config('db.prefix')}document_${modelName[0]} ${modelName[0]} ON DOCUMENT.id=${modelName[0]}.id`);
                            // return
                            //Document.join('__DOCUMENT_'+modelName[0].toUpperCase()+'__ '+modelName[0]+' ON DOCUMENT.id='+modelName[0]+'.id');
                            //Document.alias('DOCUMENT').join(`${this.config('db.prefix')}document_${modelName[0]} ${modelName[0]} ON DOCUMENT.id=${modelName[0]}.id`);
                            //console.log(3333333333);
                            Document.alias('DOCUMENT').join({
                                table: 'document_' + modelName[0],
                                join: "inner",
                                as: modelName[0],
                                on: ["id", "id"]
                            });
                            key = array_search(field, 'id');
                            //console.log(key)

                            if (false !== key) {
                                delete field[key];
                                field[key] = 'DOCUMENT.id';
                            }

                        case 37:
                            //console.log(field);
                            //console.log(1111111);
                            if (!think.isEmpty(position)) {
                                map[1] = "position & {$position} = {$position}";
                            }
                            if (!think.isEmpty(group_id)) {
                                map['group_id'] = group_id;
                            }
                            if (!think.isEmpty(sortid)) {
                                map.sort_id = ["IN", [sortid, 0]];
                            }
                            nsobj = {};

                            if (think.isEmpty(sortval)) {
                                _context14.next = 64;
                                break;
                            }

                            sortval = sortval.split("|");
                            nsobj = {};
                            optionidarr = [];
                            valuearr = [];
                            _iterator10 = sortval, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);

                        case 47:
                            if (!_isArray10) {
                                _context14.next = 53;
                                break;
                            }

                            if (!(_i10 >= _iterator10.length)) {
                                _context14.next = 50;
                                break;
                            }

                            return _context14.abrupt('break', 63);

                        case 50:
                            _ref24 = _iterator10[_i10++];
                            _context14.next = 57;
                            break;

                        case 53:
                            _i10 = _iterator10.next();

                            if (!_i10.done) {
                                _context14.next = 56;
                                break;
                            }

                            return _context14.abrupt('break', 63);

                        case 56:
                            _ref24 = _i10.value;

                        case 57:
                            v = _ref24;
                            qarr = v.split("_");

                            nsobj[qarr[0]] = qarr[1];
                            if (qarr[1] != 0) {
                                vv = qarr[1].split(">");
                                //console.log(vv);

                                if (vv[0] == "d" && !think.isEmpty(vv[1])) {
                                    map["t." + qarr[0]] = ["<", vv[1]];
                                } else if (vv[0] == "u" && !think.isEmpty(vv[1])) {
                                    map["t." + qarr[0]] = [">", vv[1]];
                                } else if (vv[0] == "l" && !think.isEmpty(vv[1])) {
                                    map["t." + qarr[0]] = ["like", '%"' + vv[1] + '"%'];
                                } else if (!think.isEmpty(vv[0]) && !think.isEmpty(vv[1])) {
                                    map["t." + qarr[0]] = ["BETWEEN", Number(vv[0]), Number(vv[1])];
                                } else {
                                    map["t." + qarr[0]] = qarr[1];
                                }
                            }

                        case 61:
                            _context14.next = 47;
                            break;

                        case 63:
                            map.fid = cate_id;
                            // where.optionid = ["IN",optionidarr];
                            // where['value'] = ["IN",valuearr];
                            // let type= await this.model("typeoptionvar").where(where).select();
                            //  console.log(type);
                            // console.log(map);

                        case 64:
                            //console.log(map);
                            list = void 0;

                            if (think.isEmpty(sortval)) {
                                _context14.next = 71;
                                break;
                            }

                            _context14.next = 68;
                            return Document.alias('DOCUMENT').join({
                                table: "type_optionvalue" + sortid,
                                join: "left", // 有 left,right,inner 3 个值
                                as: "t",
                                on: ["id", "tid"]

                            }).where(map).order('level DESC,DOCUMENT.id DESC').field(field.join(",")).page(this.get("page"), 20).countSelect();

                        case 68:
                            list = _context14.sent;
                            _context14.next = 74;
                            break;

                        case 71:
                            _context14.next = 73;
                            return Document.alias('DOCUMENT').where(map).order('level DESC,DOCUMENT.id DESC').field(field.join(",")).page(this.get("page"), 20).countSelect();

                        case 73:
                            list = _context14.sent;

                        case 74:
                            //let list=await this.model('document').where(map).order('level DESC').field(field.join(",")).page(this.get("page")).countSelect();
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(); //实例化 Adapter

                            page = pages.pages(list);

                            if (!(map['pid'] != 0)) {
                                _context14.next = 82;
                                break;
                            }

                            _context14.next = 80;
                            return Document.field('id,title,type').find(map['pid']);

                        case 80:
                            article = _context14.sent;

                            this.assign('article', article);
                            // console.log(article);

                        case 82:
                            _context14.next = 84;
                            return this.model("category", {}, 'admin').get_category(cate_id, 'allow_publish');

                        case 84:
                            allow_publish = _context14.sent;

                            this.assign("nsobj", nsobj);
                            this.assign('_total', list.count); //该分类下的文档总数
                            this.assign('pagerData', page); //分页展示使用
                            this.assign('status', status);
                            this.assign('allow', allow_publish);
                            this.assign('pid', map.pid);
                            //console.log(list.data);
                            this.meta_title = '文档列表';
                            return _context14.abrupt('return', list.data);

                        case 93:
                        case 'end':
                            return _context14.stop();
                    }
                }
            }, _callee14, this);
        }));

        function getDocumentList(_x2, _x3, _x4, _x5, _x6, _x7, _x8) {
            return _ref23.apply(this, arguments);
        }

        return getDocumentList;
    }();

    /**
     * 新增投稿
     */


    _class.prototype.addAction = function () {
        var _ref25 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15() {
            var cate_id, priv, model_id, group_id, sortid, groups, sort, typevar, _iterator11, _isArray11, _i11, _ref26, val, allow_publish, model, info, article, fields, type_list, nav;

            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            _context15.next = 2;
                            return this.weblogin();

                        case 2:
                            cate_id = this.get("cate_id") || 0;
                            //权限控制

                            _context15.next = 5;
                            return this.priv(cate_id);

                        case 5:
                            priv = _context15.sent;

                            if (!priv) {
                                _context15.next = 9;
                                break;
                            }

                            this.http.error = new Error('您所在的会员组,禁止在本栏目投稿！');
                            return _context15.abrupt('return', think.statusAction(702, this.http));

                        case 9:
                            model_id = this.get("model_id") || 0;
                            group_id = this.get("group_id") || '';
                            sortid = this.get('sortid') || 0;

                            think.isEmpty(cate_id) && this.fail("参数不能为空");
                            think.isEmpty(model_id) && this.fail("该分类未绑定模型");
                            // 获取分组定义
                            _context15.next = 16;
                            return this.model("category", {}, 'admin').get_category(cate_id, 'groups');

                        case 16:
                            groups = _context15.sent;

                            if (groups) {
                                groups = parse_config_attr(groups);
                            }
                            // 获取分类信息
                            _context15.next = 20;
                            return this.model("category", {}, 'admin').get_category(cate_id, 'documentsorts');

                        case 20:
                            sort = _context15.sent;

                            if (!sort) {
                                _context15.next = 46;
                                break;
                            }

                            sort = JSON.parse(sort);
                            if (sortid == 0) {
                                sortid = sort.defaultshow;
                            }
                            _context15.next = 26;
                            return this.model("typevar", {}, 'admin').where({ sortid: sortid }).select();

                        case 26:
                            typevar = _context15.sent;
                            _iterator11 = typevar, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : (0, _getIterator3.default)(_iterator11);

                        case 28:
                            if (!_isArray11) {
                                _context15.next = 34;
                                break;
                            }

                            if (!(_i11 >= _iterator11.length)) {
                                _context15.next = 31;
                                break;
                            }

                            return _context15.abrupt('break', 45);

                        case 31:
                            _ref26 = _iterator11[_i11++];
                            _context15.next = 38;
                            break;

                        case 34:
                            _i11 = _iterator11.next();

                            if (!_i11.done) {
                                _context15.next = 37;
                                break;
                            }

                            return _context15.abrupt('break', 45);

                        case 37:
                            _ref26 = _i11.value;

                        case 38:
                            val = _ref26;
                            _context15.next = 41;
                            return this.model("typeoption", {}, 'admin').where({ optionid: val.optionid }).find();

                        case 41:
                            val.option = _context15.sent;

                            if (val.option.type == 'select') {
                                if (!think.isEmpty(val.option.rules)) {
                                    val.option.rules = JSON.parse(val.option.rules);
                                    val.rules = parse_type_attr(val.option.rules.choices);
                                    val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                                }
                            } else if (val.option.type == "radio" || val.option.type == "checkbox") {
                                if (!think.isEmpty(val.option.rules)) {
                                    val.option.rules = JSON.parse(val.option.rules);
                                    val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                                }
                            } else {
                                if (!think.isEmpty(val.option.rules)) {
                                    val.option.rules = JSON.parse(val.option.rules);
                                }
                            }

                        case 43:
                            _context15.next = 28;
                            break;

                        case 45:
                            //console.log(typevar);
                            this.assign("typevar", typevar);

                        case 46:
                            //console.log(sort);
                            this.assign("sort", sort);
                            //检查该分类是否允许发布
                            _context15.next = 49;
                            return this.model("category", {}, 'admin').check_category(cate_id);

                        case 49:
                            allow_publish = _context15.sent;

                            //console.log(allow_publish);
                            !allow_publish && this.fail("该分类不允许发布内容");

                            //获取当先的模型信息
                            _context15.next = 53;
                            return this.model("model", {}, 'admin').get_document_model(model_id);

                        case 53:
                            model = _context15.sent;


                            //处理结果
                            info = {};

                            info.pid = this.get("pid") ? this.get("pid") : 0;
                            info.model_id = model_id;
                            info.category_id = cate_id;
                            info.group_id = group_id;

                            if (!info.pid) {
                                _context15.next = 64;
                                break;
                            }

                            _context15.next = 62;
                            return this.model("document", {}, 'admin').field('id,title,type').find(info.pid);

                        case 62:
                            article = _context15.sent;

                            this.assign("article", article);

                        case 64:
                            _context15.next = 66;
                            return this.model("attribute", {}, 'admin').get_model_attribute(model.id, true);

                        case 66:
                            fields = _context15.sent;

                            think.log(fields);
                            //获取当前分类文档的类型
                            _context15.next = 70;
                            return this.model("category", {}, 'admin').get_type_bycate(cate_id);

                        case 70:
                            type_list = _context15.sent;
                            _context15.next = 73;
                            return this.model('category', {}, 'admin').get_parent_category(cate_id);

                        case 73:
                            nav = _context15.sent;

                            //console.log(model);
                            this.assign('groups', groups);
                            this.assign('breadcrumb', nav);
                            this.assign('info', info);
                            this.assign('fields', fields);
                            this.assign('type_list', type_list);
                            this.assign('model', model);
                            this.meta_title = '新增' + model.title;
                            this.active = "admin/article/index";
                            return _context15.abrupt('return', this.display());

                        case 83:
                        case 'end':
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        function addAction() {
            return _ref25.apply(this, arguments);
        }

        return addAction;
    }();

    //编辑文档


    _class.prototype.editAction = function () {
        var _ref27 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee16() {
            var id, sortid, document, data, article, model, groups, sort, typevar, _iterator12, _isArray12, _i12, _ref28, val, fields, type_list, tags, nav;

            return _regenerator2.default.wrap(function _callee16$(_context16) {
                while (1) {
                    switch (_context16.prev = _context16.next) {
                        case 0:
                            _context16.next = 2;
                            return this.weblogin();

                        case 2:
                            id = this.get('id') || "";
                            sortid = this.get('sortid') || 0;

                            if (think.isEmpty(id)) {
                                this.fail("参数不能为空");
                            }
                            //获取详细数据；
                            document = this.model("document", {}, 'admin');
                            _context16.next = 8;
                            return document.details(id);

                        case 8:
                            data = _context16.sent;

                            if (!(data.uid != this.user.uid)) {
                                _context16.next = 12;
                                break;
                            }

                            this.http.error = new Error('只能编辑自己的稿件哦(*^_^*)!');
                            return _context16.abrupt('return', think.statusAction(702, this.http));

                        case 12:
                            //let model =  this.model("model").getmodel(2);
                            if (data.pid != 0) {
                                //获取上级文档
                                article = document.field("id,title,type").find(data.pid);

                                this.assign('article', article);
                            }
                            _context16.next = 15;
                            return this.model("model", {}, 'admin').get_document_model(data.model_id);

                        case 15:
                            model = _context16.sent;
                            _context16.next = 18;
                            return this.model("category", {}, 'admin').get_category(data.category_id, 'groups');

                        case 18:
                            groups = _context16.sent;

                            if (groups) {
                                groups = parse_config_attr(groups);
                            }
                            this.assign('groups', groups);
                            // 获取分类信息
                            _context16.next = 23;
                            return this.model("category", {}, 'admin').get_category(data.category_id, 'documentsorts');

                        case 23:
                            sort = _context16.sent;

                            if (!sort) {
                                _context16.next = 80;
                                break;
                            }

                            sort = JSON.parse(sort);
                            if (sortid != 0) {
                                data.sort_id = sortid;
                            } else if (data.sort_id == 0) {
                                data.sort_id = sort.defaultshow;
                            }
                            _context16.next = 29;
                            return this.model("typevar").where({ sortid: data.sort_id }).select();

                        case 29:
                            typevar = _context16.sent;
                            _iterator12 = typevar, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : (0, _getIterator3.default)(_iterator12);

                        case 31:
                            if (!_isArray12) {
                                _context16.next = 37;
                                break;
                            }

                            if (!(_i12 >= _iterator12.length)) {
                                _context16.next = 34;
                                break;
                            }

                            return _context16.abrupt('break', 79);

                        case 34:
                            _ref28 = _iterator12[_i12++];
                            _context16.next = 41;
                            break;

                        case 37:
                            _i12 = _iterator12.next();

                            if (!_i12.done) {
                                _context16.next = 40;
                                break;
                            }

                            return _context16.abrupt('break', 79);

                        case 40:
                            _ref28 = _i12.value;

                        case 41:
                            val = _ref28;
                            _context16.next = 44;
                            return this.model("typeoption").where({ optionid: val.optionid }).find();

                        case 44:
                            val.option = _context16.sent;

                            if (!(val.option.type == 'select')) {
                                _context16.next = 57;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context16.next = 55;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            _context16.next = 51;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 51:
                            _context16.t0 = _context16.sent;

                            if (_context16.t0) {
                                _context16.next = 54;
                                break;
                            }

                            _context16.t0 = "";

                        case 54:
                            val.option.value = _context16.t0;

                        case 55:
                            _context16.next = 77;
                            break;

                        case 57:
                            if (!(val.option.type == "radio" || val.option.type == "checkbox")) {
                                _context16.next = 69;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context16.next = 67;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            _context16.next = 63;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 63:
                            _context16.t1 = _context16.sent;

                            if (_context16.t1) {
                                _context16.next = 66;
                                break;
                            }

                            _context16.t1 = "";

                        case 66:
                            val.option.value = _context16.t1;

                        case 67:
                            _context16.next = 77;
                            break;

                        case 69:
                            if (think.isEmpty(val.option.rules)) {
                                _context16.next = 77;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            _context16.next = 73;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 73:
                            _context16.t2 = _context16.sent;

                            if (_context16.t2) {
                                _context16.next = 76;
                                break;
                            }

                            _context16.t2 = "";

                        case 76:
                            val.option.value = _context16.t2;

                        case 77:
                            _context16.next = 31;
                            break;

                        case 79:
                            // console.log(typevar);
                            this.assign("typevar", typevar);

                        case 80:
                            //console.log(sort);
                            this.assign("sort", sort);
                            //获取表单字段排序
                            _context16.next = 83;
                            return this.model("attribute", {}, 'admin').get_model_attribute(model.id, true);

                        case 83:
                            fields = _context16.sent;

                            this.assign('fields', fields);
                            //获取当前分类文档的类型
                            _context16.next = 87;
                            return this.model("category", {}, 'admin').get_type_bycate(data.category_id);

                        case 87:
                            type_list = _context16.sent;
                            _context16.next = 90;
                            return this.model('tags').where({ model_id: data.model_id }).select();

                        case 90:
                            tags = _context16.sent;

                            this.assign('tags', tags);
                            //获取面包屑信息
                            _context16.next = 94;
                            return this.model('category', {}, 'admin').get_parent_category(data.category_id);

                        case 94:
                            nav = _context16.sent;

                            //console.log(model);
                            this.assign('breadcrumb', nav);
                            //console.log(model);
                            this.assign('type_list', type_list);
                            this.meta_title = '编辑' + model.title;
                            this.active = "admin/article/index";
                            this.assign({
                                "navxs": true
                            });
                            //console.log(data);
                            this.assign('data', data);
                            this.assign('model_id', data.model_id);
                            this.assign('model', model);
                            this.display();

                        case 104:
                        case 'end':
                            return _context16.stop();
                    }
                }
            }, _callee16, this);
        }));

        function editAction() {
            return _ref27.apply(this, arguments);
        }

        return editAction;
    }();
    /**
     * 更新或者添加数据
     */


    _class.prototype.updateAction = function () {
        var _ref29 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee17() {
            var data, res;
            return _regenerator2.default.wrap(function _callee17$(_context17) {
                while (1) {
                    switch (_context17.prev = _context17.next) {
                        case 0:
                            _context17.next = 2;
                            return this.weblogin();

                        case 2:
                            data = this.post();
                            //绑定发布者id

                            data.uid = this.user.uid;
                            //安全验证

                            if (!(data.is_ajax != 'true')) {
                                _context17.next = 6;
                                break;
                            }

                            return _context17.abrupt('return', this.fail("非法提交！"));

                        case 6:
                            _context17.next = 8;
                            return this.model('document', {}, 'admin').updates(data);

                        case 8:
                            res = _context17.sent;

                            if (!res) {
                                _context17.next = 17;
                                break;
                            }

                            if (res.data.id) {
                                _context17.next = 14;
                                break;
                            }

                            return _context17.abrupt('return', this.success({ name: "添加成功", url: "/user/publish/cate_id/" + res.data.category_id }));

                        case 14:
                            return _context17.abrupt('return', this.success({ name: "更新成功", url: "/user/publish/cate_id/" + res.data.category_id }));

                        case 15:
                            _context17.next = 18;
                            break;

                        case 17:
                            return _context17.abrupt('return', this.fail("操作失败！"));

                        case 18:
                        case 'end':
                            return _context17.stop();
                    }
                }
            }, _callee17, this);
        }));

        function updateAction() {
            return _ref29.apply(this, arguments);
        }

        return updateAction;
    }();

    //alipay_in_weixin 在微信客户端中使用支付宝手机网页支付（alipay_wap）


    _class.prototype.alipayinweixinAction = function alipayinweixinAction() {
        return this.display();
    };

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=user.js.map