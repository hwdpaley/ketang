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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

var _thinkPagination = require('think-pagination');

var _thinkPagination2 = _interopRequireDefault(_thinkPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  //我的订单
  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var status, map, data, html, _iterator, _isArray, _i, _ref2, val, numarr, _iterator3, _isArray3, _i3, _ref4, _v, nopaid, receipt, _iterator2, _isArray2, _i2, _ref3, v;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
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
              _context.next = 8;
              return this.model("order").where(map).page(this.param('page')).order("create_time DESC").countSelect();

            case 8:
              data = _context.sent;
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
                _context.next = 18;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt('break', 68);

            case 15:
              _ref2 = _iterator[_i++];
              _context.next = 22;
              break;

            case 18:
              _i = _iterator.next();

              if (!_i.done) {
                _context.next = 21;
                break;
              }

              return _context.abrupt('break', 68);

            case 21:
              _ref2 = _i.value;

            case 22:
              val = _ref2;
              _context.t0 = val.payment;
              _context.next = _context.t0 === 100 ? 26 : _context.t0 === 1001 ? 28 : 30;
              break;

            case 26:
              val.channel = "预付款支付";
              return _context.abrupt('break', 33);

            case 28:
              val.channel = "货到付款";
              return _context.abrupt('break', 33);

            case 30:
              _context.next = 32;
              return this.model("pingxx").where({ id: val.payment }).getField("title", true);

            case 32:
              val.channel = _context.sent;

            case 33:
              _context.next = 35;
              return this.model("area").where({ id: val.province }).getField("name", true);

            case 35:
              val.province = _context.sent;
              _context.next = 38;
              return this.model("area").where({ id: val.city }).getField("name", true);

            case 38:
              val.city = _context.sent;
              _context.next = 41;
              return this.model("area").where({ id: val.county }).getField("name", true);

            case 41:
              val.county = _context.sent;

              //未付款订单倒计时
              if (val.pay_status == 0) {
                val.end_time = date_from(val.create_time + Number(this.setup.ORDER_DELAY) * 60000);
              }
              //console.log(this.setup.ORDER_DELAY_BUND)
              //查出订单里面的商品列表
              _context.next = 45;
              return this.model("order_goods").where({ order_id: val.id }).select();

            case 45:
              val.goods = _context.sent;
              numarr = [];
              _iterator3 = val.goods, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

            case 48:
              if (!_isArray3) {
                _context.next = 54;
                break;
              }

              if (!(_i3 >= _iterator3.length)) {
                _context.next = 51;
                break;
              }

              return _context.abrupt('break', 65);

            case 51:
              _ref4 = _iterator3[_i3++];
              _context.next = 58;
              break;

            case 54:
              _i3 = _iterator3.next();

              if (!_i3.done) {
                _context.next = 57;
                break;
              }

              return _context.abrupt('break', 65);

            case 57:
              _ref4 = _i3.value;

            case 58:
              _v = _ref4;

              _v.prom_goods = JSON.parse(_v.prom_goods);
              numarr.push(_v.goods_nums);
              _v = think.extend(_v, _v.prom_goods);
              delete _v.prom_goods;

            case 63:
              _context.next = 48;
              break;

            case 65:
              //console.log(val.goods)
              val.nums = eval(numarr.join("+"));

            case 66:
              _context.next = 12;
              break;

            case 68:
              _context.next = 70;
              return this.model("order").where({
                type: 0,
                pay_status: 0,
                delivery_status: ["!=", 1],
                status: ["NOTIN", [4, 6]],
                is_del: 0,
                user_id: this.user.uid
              }).count("id");

            case 70:
              nopaid = _context.sent;

              this.assign("nopaid", nopaid);
              //未付款统计
              _context.next = 74;
              return this.model("order").where({
                type: 0,
                status: ["NOTIN", [4, 6]],
                delivery_status: 1,
                is_del: 0,
                user_id: this.user.uid
              }).count("id");

            case 74:
              receipt = _context.sent;

              this.assign("nopaid", nopaid);
              this.assign("receipt", receipt);
              //console.log(data.data);
              this.assign("count", data.count);
              this.assign('list', data.data);
              this.meta_title = "我的订单";
              //判断浏览客户端

              if (!checkMobile(this.userAgent())) {
                _context.next = 104;
                break;
              }

              if (!this.isAjax("get")) {
                _context.next = 100;
                break;
              }

              _iterator2 = data.data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

            case 83:
              if (!_isArray2) {
                _context.next = 89;
                break;
              }

              if (!(_i2 >= _iterator2.length)) {
                _context.next = 86;
                break;
              }

              return _context.abrupt('break', 97);

            case 86:
              _ref3 = _iterator2[_i2++];
              _context.next = 93;
              break;

            case 89:
              _i2 = _iterator2.next();

              if (!_i2.done) {
                _context.next = 92;
                break;
              }

              return _context.abrupt('break', 97);

            case 92:
              _ref3 = _i2.value;

            case 93:
              v = _ref3;

              v.create_time = (0, _moment2.default)(v.create_time).format('lll');

            case 95:
              _context.next = 83;
              break;

            case 97:
              return _context.abrupt('return', this.json(data));

            case 100:
              this.active = "user/index";
              return _context.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 102:
              _context.next = 105;
              break;

            case 104:
              return _context.abrupt('return', this.display());

            case 105:
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

  //删除订单


  _class.prototype.delorderAction = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var res, type, map;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.weblogin();

            case 2:
              res = void 0;
              type = this.get("type") || null;

              if (!think.isEmpty(type)) {
                _context2.next = 11;
                break;
              }

              map = {
                id: this.get("id"),
                user_id: this.user.uid,
                status: ["IN", [4, 6]]
              };
              _context2.next = 8;
              return this.model("order").where(map).update({ is_del: 1 });

            case 8:
              res = _context2.sent;
              _context2.next = 14;
              break;

            case 11:
              _context2.next = 13;
              return this.model("order").where({ id: this.get("id"), user_id: this.user.uid }).delete();

            case 13:
              res = _context2.sent;

            case 14:
              if (!res) {
                _context2.next = 18;
                break;
              }

              return _context2.abrupt('return', this.success({ name: "删除成功！" }));

            case 18:
              return _context2.abrupt('return', this.fail("删除失败!"));

            case 19:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function delorderAction() {
      return _ref5.apply(this, arguments);
    }

    return delorderAction;
  }();

  //确认收货


  _class.prototype.confirmreceiptAction = function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var map, res;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.weblogin();

            case 2:
              map = {
                id: this.get("id"),
                user_id: this.user.uid,
                delivery_status: 1,
                status: ["NOTIN", [4, 6]]
              };
              _context3.next = 5;
              return this.model("order").where(map).update({ status: 4 });

            case 5:
              res = _context3.sent;

              if (!res) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt('return', this.success({ name: "操作成功！" }));

            case 10:
              return _context3.abrupt('return', this.fail("操作失败!"));

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function confirmreceiptAction() {
      return _ref6.apply(this, arguments);
    }

    return confirmreceiptAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=order.js.map