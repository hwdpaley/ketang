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

  /**
   * 账户金额管理
   * @returns {PreventPromise}
   */
  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var type, data, _iterator, _isArray, _i, _ref2, val, html, userInfo, unpaid, _iterator2, _isArray2, _i2, _ref3, v;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.weblogin();

            case 2:
              type = this.get("type") || null;
              data = void 0;

              if (!think.isEmpty(type)) {
                _context.next = 10;
                break;
              }

              _context.next = 7;
              return this.model("balance_log").where({ user_id: this.user.uid }).page(this.param('page')).order("time DESC").countSelect();

            case 7:
              data = _context.sent;
              _context.next = 36;
              break;

            case 10:
              if (!(type == 1)) {
                _context.next = 16;
                break;
              }

              _context.next = 13;
              return this.model("balance_log").where({ user_id: 10000 }).page(this.param('page')).order("time DESC").countSelect();

            case 13:
              data = _context.sent;
              _context.next = 36;
              break;

            case 16:
              _context.next = 18;
              return this.model("order").where({
                user_id: this.user.uid,
                type: 1,
                is_del: 0
              }).page(this.get('page')).order("create_time DESC").countSelect();

            case 18:
              data = _context.sent;
              _iterator = data.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 20:
              if (!_isArray) {
                _context.next = 26;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context.next = 23;
                break;
              }

              return _context.abrupt('break', 36);

            case 23:
              _ref2 = _iterator[_i++];
              _context.next = 30;
              break;

            case 26:
              _i = _iterator.next();

              if (!_i.done) {
                _context.next = 29;
                break;
              }

              return _context.abrupt('break', 36);

            case 29:
              _ref2 = _i.value;

            case 30:
              val = _ref2;
              _context.next = 33;
              return this.model("pingxx").where({ id: val.payment }).getField("title", true);

            case 33:
              val.channel = _context.sent;

            case 34:
              _context.next = 20;
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
              _context.next = 43;
              return this.model("member").find(this.user.uid);

            case 43:
              userInfo = _context.sent;

              this.assign("userInfo", userInfo);
              //未付款的充值订单统计
              _context.next = 47;
              return this.model("order").where({
                user_id: this.user.uid,
                type: 1,
                is_del: 0,
                pay_status: 0
              }).count("id");

            case 47:
              unpaid = _context.sent;

              this.assign("unpaid", unpaid);
              this.meta_title = "账户金额管理";
              //判断浏览客户端

              if (!checkMobile(this.userAgent())) {
                _context.next = 76;
                break;
              }

              if (!this.isAjax("get")) {
                _context.next = 72;
                break;
              }

              _iterator2 = data.data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

            case 53:
              if (!_isArray2) {
                _context.next = 59;
                break;
              }

              if (!(_i2 >= _iterator2.length)) {
                _context.next = 56;
                break;
              }

              return _context.abrupt('break', 69);

            case 56:
              _ref3 = _iterator2[_i2++];
              _context.next = 63;
              break;

            case 59:
              _i2 = _iterator2.next();

              if (!_i2.done) {
                _context.next = 62;
                break;
              }

              return _context.abrupt('break', 69);

            case 62:
              _ref3 = _i2.value;

            case 63:
              v = _ref3;

              v.time = (0, _moment2.default)(v.create_time).format('YYYY-MM-DD HH:mm:ss');
              v.amount = formatCurrency(v.amount);
              v.amount_log = formatCurrency(v.amount_log);

            case 67:
              _context.next = 53;
              break;

            case 69:
              return _context.abrupt('return', this.json(data));

            case 72:
              this.active = "user/index";
              return _context.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 74:
              _context.next = 77;
              break;

            case 76:
              return _context.abrupt('return', this.display());

            case 77:
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

  /**
   * 充值
   */


  _class.prototype.rechargeAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var data, nowtime, oid, channel, open_id, payment, pay, charges, order_id, receiving, map, paylist;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.weblogin();

            case 2:
              if (!this.isAjax("POST")) {
                _context2.next = 49;
                break;
              }

              data = this.post();

              if (!think.isEmpty(data.order_amount)) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt('return', this.fail("请输入金额！"));

            case 8:
              if (think.isNumberString(data.order_amount)) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt('return', this.fail("金额类型错误！"));

            case 12:
              if (!think.isEmpty(data.payment)) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt('return', this.fail("必须选一种支付方式！"));

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
              _context2.next = 24;
              return this.model("pingxx").where({ id: data.payment }).getField("channel", true);

            case 24:
              channel = _context2.sent;
              open_id = void 0;

              if (!(channel == "wx_pub")) {
                _context2.next = 30;
                break;
              }

              _context2.next = 29;
              return this.session("wx_openid");

            case 29:
              open_id = _context2.sent;

            case 30:
              //调用ping++ 服务端
              payment = think.service("payment");
              pay = new payment(this.http);
              //传入 channel,order_no,order_amount,this.ip()

              _context2.next = 34;
              return pay.pingxx(channel, data.order_no, data.order_amount, this.ip(), open_id);

            case 34:
              charges = _context2.sent;

              if (!charges) {
                _context2.next = 46;
                break;
              }

              //把pingxx_id存到订单
              data.pingxx_id = charges.id;
              _context2.next = 39;
              return this.model("order").add(data);

            case 39:
              order_id = _context2.sent;


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
              _context2.next = 43;
              return this.model("doc_receiving").add(receiving);

            case 43:
              return _context2.abrupt('return', this.success({ name: "支付订单对接成功，正在转跳！", data: charges }));

            case 46:
              return _context2.abrupt('return', this.fail("调用接口失败！"));

            case 47:
              _context2.next = 62;
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
              _context2.next = 53;
              return this.model("pingxx").where(map).order("sort ASC").select();

            case 53:
              paylist = _context2.sent;

              this.assign("paylist", paylist);
              this.meta_title = "充值";

              if (!checkMobile(this.userAgent())) {
                _context2.next = 61;
                break;
              }

              this.active = "user/index";
              return _context2.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 61:

              this.display();

            case 62:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function rechargeAction() {
      return _ref4.apply(this, arguments);
    }

    return rechargeAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=account.js.map