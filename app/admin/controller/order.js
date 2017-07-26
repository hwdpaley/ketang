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

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.tactive = "order";
    };
    /**
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function indexAction() {
        //auto render template file index_index.html

        return this.display();
    };
    //订单列表


    _class.prototype.listAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var status, map, data, Pages, pages, page, _iterator, _isArray, _i, _ref2, val;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            status = this.get("status");
                            map = {};

                            if (!think.isEmpty(status)) {
                                map.status = status;
                                this.assign('status', status);
                            }

                            map.is_del = 0;
                            map.type = 0;
                            // this.config("db.nums_per_page",20)
                            _context.next = 7;
                            return this.model("order").where(map).page(this.get('page')).order("create_time DESC").countSelect();

                        case 7:
                            data = _context.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            //console.log(data.data);
                            this.active = "admin/order/list";
                            _iterator = data.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 14:
                            if (!_isArray) {
                                _context.next = 20;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 17;
                                break;
                            }

                            return _context.abrupt('break', 37);

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

                            return _context.abrupt('break', 37);

                        case 23:
                            _ref2 = _i.value;

                        case 24:
                            val = _ref2;
                            _context.t0 = val.payment;
                            _context.next = _context.t0 === 100 ? 28 : _context.t0 === 1001 ? 30 : 32;
                            break;

                        case 28:
                            val.channel = "预付款支付";
                            return _context.abrupt('break', 35);

                        case 30:
                            val.channel = "货到付款";
                            return _context.abrupt('break', 35);

                        case 32:
                            _context.next = 34;
                            return this.model("pingxx").where({ id: val.payment }).getField("title", true);

                        case 34:
                            val.channel = _context.sent;

                        case 35:
                            _context.next = 14;
                            break;

                        case 37:
                            this.assign('list', data.data);
                            this.meta_title = "订单管理";
                            return _context.abrupt('return', this.display());

                        case 40:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function listAction() {
            return _ref.apply(this, arguments);
        }

        return listAction;
    }();

    /**
     * 审核订单
     */


    _class.prototype.auditAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var id, admin_remark, audit, _id;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context2.next = 13;
                                break;
                            }

                            id = this.post("id");
                            admin_remark = this.post("admin_remark");
                            _context2.next = 5;
                            return this.model("order").where({ id: id }).update({ status: 3, admin_remark: admin_remark });

                        case 5:
                            audit = _context2.sent;

                            if (!audit) {
                                _context2.next = 10;
                                break;
                            }

                            return _context2.abrupt('return', this.success({ name: "审核成功！", url: this.http.header["referer"] }));

                        case 10:
                            return _context2.abrupt('return', this.fail("审核失败！"));

                        case 11:
                            _context2.next = 17;
                            break;

                        case 13:
                            _id = this.get("id");

                            this.assign("id", _id);
                            this.meta_title = "审核订单";
                            return _context2.abrupt('return', this.display());

                        case 17:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function auditAction() {
            return _ref3.apply(this, arguments);
        }

        return auditAction;
    }();

    /**
     * 删除订单
     */


    _class.prototype.delAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var id, res;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            id = this.get("id");
                            //作废的订单才能删除

                            _context3.next = 3;
                            return this.model("order").where({ id: id, status: 6 }).delete();

                        case 3:
                            res = _context3.sent;

                            if (!res) {
                                _context3.next = 8;
                                break;
                            }

                            return _context3.abrupt('return', this.success({ name: "删除成功！" }));

                        case 8:
                            return _context3.abrupt('return', this.fail("删除失败！"));

                        case 9:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function delAction() {
            return _ref4.apply(this, arguments);
        }

        return delAction;
    }();
    /**
     * 作废订单
     */


    _class.prototype.voidAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var id, admin_remark, voids, _id2;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context4.next = 15;
                                break;
                            }

                            id = this.post("id");
                            admin_remark = this.post("admin_remark");
                            _context4.next = 5;
                            return this.model("order").where({ id: id }).update({ status: 6, admin_remark: admin_remark });

                        case 5:
                            voids = _context4.sent;

                            if (!voids) {
                                _context4.next = 12;
                                break;
                            }

                            _context4.next = 9;
                            return this.model("order").stock(id, false);

                        case 9:
                            return _context4.abrupt('return', this.success({ name: "操作成功！", url: this.http.header["referer"] }));

                        case 12:
                            return _context4.abrupt('return', this.fail("操作失败！"));

                        case 13:
                            _context4.next = 19;
                            break;

                        case 15:
                            _id2 = this.get("id");

                            this.assign("id", _id2);
                            this.meta_title = "审核订单";
                            return _context4.abrupt('return', this.display());

                        case 19:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function voidAction() {
            return _ref5.apply(this, arguments);
        }

        return voidAction;
    }();
    /**
     * 完成订单
     */


    _class.prototype.finishAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var id, admin_remark, finish, _id3;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context5.next = 13;
                                break;
                            }

                            id = this.post("id");
                            admin_remark = this.post("admin_remark");
                            _context5.next = 5;
                            return this.model("order").where({ id: id }).update({ status: 4, admin_remark: admin_remark });

                        case 5:
                            finish = _context5.sent;

                            if (!finish) {
                                _context5.next = 10;
                                break;
                            }

                            return _context5.abrupt('return', this.success({ name: "操作成功！", url: this.http.header["referer"] }));

                        case 10:
                            return _context5.abrupt('return', this.fail("操作失败！"));

                        case 11:
                            _context5.next = 17;
                            break;

                        case 13:
                            _id3 = this.get("id");

                            this.assign("id", _id3);
                            this.meta_title = "完成订单";
                            return _context5.abrupt('return', this.display());

                        case 17:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function finishAction() {
            return _ref6.apply(this, arguments);
        }

        return finishAction;
    }();

    /**
     * 备注订单
     */


    _class.prototype.remarkAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var id, admin_remark, remark, _id4;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context6.next = 13;
                                break;
                            }

                            id = this.post("id");
                            admin_remark = this.post("admin_remark");
                            _context6.next = 5;
                            return this.model("order").where({ id: id }).update({ admin_remark: admin_remark });

                        case 5:
                            remark = _context6.sent;

                            if (!remark) {
                                _context6.next = 10;
                                break;
                            }

                            return _context6.abrupt('return', this.success({ name: "操作成功！", url: this.http.header["referer"] }));

                        case 10:
                            return _context6.abrupt('return', this.fail("操作失败！"));

                        case 11:
                            _context6.next = 17;
                            break;

                        case 13:
                            _id4 = this.get("id");

                            this.assign("id", _id4);
                            this.meta_title = "备注订单";
                            return _context6.abrupt('return', this.display());

                        case 17:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function remarkAction() {
            return _ref7.apply(this, arguments);
        }

        return remarkAction;
    }();
    /**
     * 查看订单
     * @returns {*}
     */


    _class.prototype.seeAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var id, order, goods, sum, _iterator2, _isArray2, _i2, _ref9, val, user, express_company, olde_order_amount, province, city, county;

            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            id = this.get("id");

                            console.log(id);
                            this.meta_title = "查看订单";
                            //获取订单信息
                            _context7.next = 5;
                            return this.model("order").find(id);

                        case 5:
                            order = _context7.sent;
                            _context7.next = 8;
                            return this.model("order_goods").where({ order_id: id }).select();

                        case 8:
                            goods = _context7.sent;
                            sum = [];
                            _iterator2 = goods, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 11:
                            if (!_isArray2) {
                                _context7.next = 17;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context7.next = 14;
                                break;
                            }

                            return _context7.abrupt('break', 29);

                        case 14:
                            _ref9 = _iterator2[_i2++];
                            _context7.next = 21;
                            break;

                        case 17:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context7.next = 20;
                                break;
                            }

                            return _context7.abrupt('break', 29);

                        case 20:
                            _ref9 = _i2.value;

                        case 21:
                            val = _ref9;

                            val.title = JSON.parse(val.prom_goods).title;
                            val.pic = JSON.parse(val.prom_goods).pic;
                            val.type = JSON.parse(val.prom_goods).type;
                            val.sum = JSON.parse(val.prom_goods).price;
                            sum.push(val.goods_nums);

                        case 27:
                            _context7.next = 11;
                            break;

                        case 29:
                            sum = eval(sum.join('+'));
                            this.assign("sum", sum);
                            this.assign("goods", goods);
                            //获取购买人信息
                            //购买人信息
                            _context7.next = 34;
                            return this.model("member").find(order.user_id);

                        case 34:
                            user = _context7.sent;

                            this.assign("user", user);
                            //订单信息
                            _context7.t0 = order.payment;
                            _context7.next = _context7.t0 === 100 ? 39 : _context7.t0 === 1001 ? 41 : 43;
                            break;

                        case 39:
                            order.payment = "预付款支付";
                            return _context7.abrupt('break', 46);

                        case 41:
                            order.payment = "货到付款";
                            return _context7.abrupt('break', 46);

                        case 43:
                            _context7.next = 45;
                            return this.model("pingxx").where({ id: order.payment }).getField("title", true);

                        case 45:
                            order.payment = _context7.sent;

                        case 46:
                            this.assign("order", order);
                            //获取 快递公司
                            express_company = this.model("express_company").order("sort ASC").select();

                            this.assign("express_company", express_company);
                            //获取省份
                            /**
                             * 订单原价 = 商品真实价格 + 真实运费
                             */
                            olde_order_amount = order.real_amount + order.real_freight;

                            this.assign("olde_order_amount", olde_order_amount);
                            _context7.next = 53;
                            return this.model('area').where({ parent_id: 0 }).select();

                        case 53:
                            province = _context7.sent;
                            _context7.next = 56;
                            return this.model('area').where({ parent_id: order.province }).select();

                        case 56:
                            city = _context7.sent;
                            _context7.next = 59;
                            return this.model('area').where({ parent_id: order.city }).select();

                        case 59:
                            county = _context7.sent;

                            this.assign("province", province);
                            this.assign("city", city);
                            this.assign("county", county);
                            return _context7.abrupt('return', this.display());

                        case 64:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function seeAction() {
            return _ref8.apply(this, arguments);
        }

        return seeAction;
    }();
    /**
     * 编辑订单
     */


    _class.prototype.editAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var data, order, olde_order_amount, res, log, id, _order, goods, sum, _iterator3, _isArray3, _i3, _ref11, val, user, express_company, _olde_order_amount, province, city, county;

            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context8.next = 21;
                                break;
                            }

                            data = this.post();
                            _context8.next = 4;
                            return this.model("order").find(data.id);

                        case 4:
                            order = _context8.sent;

                            /**
                             * 订单原价 = 商品真实价格 + 真实运费
                             */
                            olde_order_amount = order.real_amount + order.real_freight;

                            data.order_amount = Number(olde_order_amount) + Number(data.adjust_amount);
                            //更新订单信息
                            _context8.next = 9;
                            return this.model("order").update(data);

                        case 9:
                            res = _context8.sent;

                            if (!res) {
                                _context8.next = 18;
                                break;
                            }

                            //记录日志
                            log = void 0;

                            if (data.adjust_amount == 0) {
                                log = '\u4FEE\u6539\u4E86\u8BA2\u5355\uFF0C\u8BA2\u5355\u7F16\u53F7\uFF1A' + order.order_no;
                            } else {
                                log = '\u4FEE\u6539\u4E86\u8BA2\u5355\uFF0C\u8BA2\u5355\u7F16\u53F7\uFF1A' + order.order_no + '\uFF0C\u5E76\u8C03\u6574\u8BA2\u5355\u91D1\u989D ' + data.adjust_amount + ' \u5143\uFF0C\u539F\u8BA2\u5355\u91D1\u989D\uFF1A' + olde_order_amount + ' \u5143\uFF0C\u8C03\u6574\u540E\u8BA2\u5355\u91D1\u989D\uFF1A' + data.order_amount + ' \u5143';
                            }

                            _context8.next = 15;
                            return this.model("action").log("order", "order", log, this.user.uid, this.ip(), this.http.url);

                        case 15:
                            return _context8.abrupt('return', this.success({ name: "编辑成功！" }));

                        case 18:
                            return _context8.abrupt('return', this.fail("编辑失败！"));

                        case 19:
                            _context8.next = 87;
                            break;

                        case 21:
                            id = this.get("id");

                            console.log(id);
                            this.meta_title = "编辑订单";
                            //获取订单信息
                            _context8.next = 26;
                            return this.model("order").find(id);

                        case 26:
                            _order = _context8.sent;

                            if (!(_order.pay_status == 1 && item.status == 3 && item.delivery_status == 1)) {
                                _context8.next = 29;
                                break;
                            }

                            return _context8.abrupt('return', this.fail("订单已经付款，无法编辑！"));

                        case 29:
                            _context8.next = 31;
                            return this.model("order_goods").where({ order_id: id }).select();

                        case 31:
                            goods = _context8.sent;
                            sum = [];
                            _iterator3 = goods, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 34:
                            if (!_isArray3) {
                                _context8.next = 40;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context8.next = 37;
                                break;
                            }

                            return _context8.abrupt('break', 52);

                        case 37:
                            _ref11 = _iterator3[_i3++];
                            _context8.next = 44;
                            break;

                        case 40:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context8.next = 43;
                                break;
                            }

                            return _context8.abrupt('break', 52);

                        case 43:
                            _ref11 = _i3.value;

                        case 44:
                            val = _ref11;

                            val.title = JSON.parse(val.prom_goods).title;
                            val.pic = JSON.parse(val.prom_goods).pic;
                            val.type = JSON.parse(val.prom_goods).type;
                            val.sum = JSON.parse(val.prom_goods).price;
                            sum.push(val.goods_nums);

                        case 50:
                            _context8.next = 34;
                            break;

                        case 52:
                            sum = eval(sum.join('+'));
                            this.assign("sum", sum);
                            this.assign("goods", goods);
                            //获取购买人信息
                            //购买人信息
                            _context8.next = 57;
                            return this.model("member").join({
                                customer: {
                                    on: ["id", "user_id"]
                                }
                            }).find(_order.user_id);

                        case 57:
                            user = _context8.sent;

                            this.assign("user", user);
                            //订单信息
                            _context8.t0 = _order.payment;
                            _context8.next = _context8.t0 === 100 ? 62 : _context8.t0 === 1001 ? 64 : 66;
                            break;

                        case 62:
                            _order.payment = "预付款支付";
                            return _context8.abrupt('break', 69);

                        case 64:
                            _order.payment = "货到付款";
                            return _context8.abrupt('break', 69);

                        case 66:
                            _context8.next = 68;
                            return this.model("pingxx").where({ id: _order.payment }).getField("title", true);

                        case 68:
                            _order.payment = _context8.sent;

                        case 69:
                            this.assign("order", _order);
                            //获取 快递公司
                            express_company = this.model("express_company").order("sort ASC").select();

                            this.assign("express_company", express_company);
                            //获取省份
                            /**
                             * 订单原价 = 商品真实价格 + 真实运费
                             */
                            _olde_order_amount = _order.real_amount + _order.real_freight;

                            this.assign("olde_order_amount", _olde_order_amount);
                            _context8.next = 76;
                            return this.model('area').where({ parent_id: 0 }).select();

                        case 76:
                            province = _context8.sent;
                            _context8.next = 79;
                            return this.model('area').where({ parent_id: _order.province }).select();

                        case 79:
                            city = _context8.sent;
                            _context8.next = 82;
                            return this.model('area').where({ parent_id: _order.city }).select();

                        case 82:
                            county = _context8.sent;

                            this.assign("province", province);
                            this.assign("city", city);
                            this.assign("county", county);
                            return _context8.abrupt('return', this.display());

                        case 87:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function editAction() {
            return _ref10.apply(this, arguments);
        }

        return editAction;
    }();
    /**
     * 发货设置
     */


    _class.prototype.shipAction = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var data, kid, res, id, order, goods, sum, _iterator4, _isArray4, _i4, _ref13, val, user, express_company, province, city, county;

            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context9.next = 17;
                                break;
                            }

                            data = this.post();
                            _context9.next = 4;
                            return get_nickname(this.user.uid);

                        case 4:
                            data.admin = _context9.sent;

                            //生成快递单编号
                            kid = ['k', new Date().getTime()];

                            data.invoice_no = kid.join("");

                            data.create_time = new Date().getTime();
                            _context9.next = 10;
                            return this.model("doc_invoice").add(data);

                        case 10:
                            res = _context9.sent;

                            if (!res) {
                                _context9.next = 14;
                                break;
                            }

                            _context9.next = 14;
                            return this.model("order").where({ id: data.order_id }).update({ delivery_status: 1 });

                        case 14:
                            return _context9.abrupt('return', this.success({ "name": "发货成功！", "url": this.http.header["referer"] }));

                        case 17:
                            id = this.get("id");
                            _context9.next = 20;
                            return this.model("order").find(id);

                        case 20:
                            order = _context9.sent;

                            if (!(order.status != 3)) {
                                _context9.next = 23;
                                break;
                            }

                            return _context9.abrupt('return', this.fail("订单还没审核！，请先审核订单。"));

                        case 23:
                            _context9.t0 = order.payment;
                            _context9.next = _context9.t0 === 100 ? 26 : _context9.t0 === 1001 ? 28 : 30;
                            break;

                        case 26:
                            order.payment = "预付款支付";
                            return _context9.abrupt('break', 33);

                        case 28:
                            order.payment = "货到付款";
                            return _context9.abrupt('break', 33);

                        case 30:
                            _context9.next = 32;
                            return this.model("pingxx").where({ id: order.payment }).getField("title", true);

                        case 32:
                            order.payment = _context9.sent;

                        case 33:
                            _context9.next = 35;
                            return this.model("order_goods").where({ order_id: id }).select();

                        case 35:
                            goods = _context9.sent;
                            sum = [];
                            _iterator4 = goods, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 38:
                            if (!_isArray4) {
                                _context9.next = 44;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context9.next = 41;
                                break;
                            }

                            return _context9.abrupt('break', 56);

                        case 41:
                            _ref13 = _iterator4[_i4++];
                            _context9.next = 48;
                            break;

                        case 44:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context9.next = 47;
                                break;
                            }

                            return _context9.abrupt('break', 56);

                        case 47:
                            _ref13 = _i4.value;

                        case 48:
                            val = _ref13;

                            val.title = JSON.parse(val.prom_goods).title;
                            val.pic = JSON.parse(val.prom_goods).pic;
                            val.type = JSON.parse(val.prom_goods).type;
                            val.sum = JSON.parse(val.prom_goods).price;
                            sum.push(val.goods_nums);

                        case 54:
                            _context9.next = 38;
                            break;

                        case 56:
                            _context9.next = 58;
                            return this.model("member").find(order.user_id);

                        case 58:
                            user = _context9.sent;

                            //获取 快递公司
                            express_company = this.model("express_company").order("sort ASC").select();

                            this.assign("express_company", express_company);
                            //获取省份
                            _context9.next = 63;
                            return this.model('area').where({ parent_id: 0 }).select();

                        case 63:
                            province = _context9.sent;
                            _context9.next = 66;
                            return this.model('area').where({ parent_id: order.province }).select();

                        case 66:
                            city = _context9.sent;
                            _context9.next = 69;
                            return this.model('area').where({ parent_id: order.city }).select();

                        case 69:
                            county = _context9.sent;

                            this.assign("province", province);
                            this.assign("city", city);
                            this.assign("county", county);
                            this.assign("user", user);
                            sum = eval(sum.join('+'));
                            this.assign("sum", sum);
                            console.log(goods);
                            this.assign("goods", goods);
                            this.assign("order", order);
                            this.meta_title = "发货";
                            return _context9.abrupt('return', this.display());

                        case 81:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function shipAction() {
            return _ref12.apply(this, arguments);
        }

        return shipAction;
    }();
    /**
     * 查看订单
     */


    _class.prototype.vieworderAction = function vieworderAction() {
        var list = [1, 2, 3];
        this.assign("list", list);
        return this.display();
    };

    /**
     * 收款单
     */

    _class.prototype.receivingAction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var data, Pages, pages, page, _iterator5, _isArray5, _i5, _ref15, val;

            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            _context10.next = 2;
                            return this.model("doc_receiving").page(this.get('page')).order("create_time DESC").countSelect();

                        case 2:
                            data = _context10.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            //console.log(data.data);
                            // this.active="admin/order/list"
                            _iterator5 = data.data, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

                        case 8:
                            if (!_isArray5) {
                                _context10.next = 14;
                                break;
                            }

                            if (!(_i5 >= _iterator5.length)) {
                                _context10.next = 11;
                                break;
                            }

                            return _context10.abrupt('break', 34);

                        case 11:
                            _ref15 = _iterator5[_i5++];
                            _context10.next = 18;
                            break;

                        case 14:
                            _i5 = _iterator5.next();

                            if (!_i5.done) {
                                _context10.next = 17;
                                break;
                            }

                            return _context10.abrupt('break', 34);

                        case 17:
                            _ref15 = _i5.value;

                        case 18:
                            val = _ref15;
                            _context10.t0 = val.payment_id;
                            _context10.next = _context10.t0 === 100 ? 22 : _context10.t0 === 1001 ? 24 : 26;
                            break;

                        case 22:
                            val.channel = "预付款支付";
                            return _context10.abrupt('break', 29);

                        case 24:
                            val.channel = "货到付款";
                            return _context10.abrupt('break', 29);

                        case 26:
                            _context10.next = 28;
                            return this.model("pingxx").where({ id: val.payment_id }).getField("title", true);

                        case 28:
                            val.channel = _context10.sent;

                        case 29:
                            _context10.next = 31;
                            return this.model("order").where({ id: val.order_id }).getField("order_no", true);

                        case 31:
                            val.order_id = _context10.sent;

                        case 32:
                            _context10.next = 8;
                            break;

                        case 34:
                            this.assign('list', data.data);
                            // this.active="admin/order/receiving"
                            this.meta_title = "收款单";
                            return _context10.abrupt('return', this.display());

                        case 37:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function receivingAction() {
            return _ref14.apply(this, arguments);
        }

        return receivingAction;
    }();

    /**
     * 发货单
     */


    _class.prototype.invoiceAction = function () {
        var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
            var data, Pages, pages, page, _iterator6, _isArray6, _i6, _ref17, v;

            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            _context11.next = 2;
                            return this.model("doc_invoice").page(this.get('page')).order("create_time DESC").countSelect();

                        case 2:
                            data = _context11.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            _iterator6 = data.data, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

                        case 8:
                            if (!_isArray6) {
                                _context11.next = 14;
                                break;
                            }

                            if (!(_i6 >= _iterator6.length)) {
                                _context11.next = 11;
                                break;
                            }

                            return _context11.abrupt('break', 24);

                        case 11:
                            _ref17 = _iterator6[_i6++];
                            _context11.next = 18;
                            break;

                        case 14:
                            _i6 = _iterator6.next();

                            if (!_i6.done) {
                                _context11.next = 17;
                                break;
                            }

                            return _context11.abrupt('break', 24);

                        case 17:
                            _ref17 = _i6.value;

                        case 18:
                            v = _ref17;
                            _context11.next = 21;
                            return this.model("express_company").where({ id: v.express_company_id }).getField("name", true);

                        case 21:
                            v.express_company_id = _context11.sent;

                        case 22:
                            _context11.next = 8;
                            break;

                        case 24:
                            this.assign("list", data.data);
                            this.active = "admin/order/receiving";
                            this.meta_title = "发货单";
                            return _context11.abrupt('return', this.display());

                        case 28:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function invoiceAction() {
            return _ref16.apply(this, arguments);
        }

        return invoiceAction;
    }();

    /**
     * 退款单
     */

    _class.prototype.refundAction = function refundAction() {

        this.active = "admin/order/receiving";
        this.meta_title = "退款单";
        return this.display();
    };

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=order.js.map