// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

exports.__esModule = true;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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
  //支付


  _class.prototype.payAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var payment, pay, charges, post, order, receiving, balance, decrement, log, url, _url, channel, open_id, order_id, setp, _order, map, paylist;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(this.post());
              //判断是否登录
              _context.next = 3;
              return this.weblogin();

            case 3:
              if (!this.isAjax("post")) {
                _context.next = 90;
                break;
              }

              payment = void 0;
              pay = void 0;
              charges = void 0;
              post = this.post();
              //获取订单信息

              _context.next = 10;
              return this.model("order").where({ pay_status: 0, user_id: this.user.uid }).find(post.order_id);

            case 10:
              order = _context.sent;

              if (!think.isEmpty(order)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt('return', this.fail("订单不存在！"));

            case 13:
              _context.next = 15;
              return this.model("order").where({ id: order.id }).update({ payment: post.payment });

            case 15:
              //支付日志
              receiving = {
                order_id: post.order_id,
                user_id: this.user.uid,
                amount: order.order_amount,
                create_time: new Date().getTime(),
                payment_time: new Date().getTime(),
                doc_type: 0,
                payment_id: post.payment,
                pay_status: 0

                //100预付款支付

              };

              if (!(post.payment == 100)) {
                _context.next = 51;
                break;
              }

              _context.next = 19;
              return this.model("member").where({ user_id: this.user.uid }).getField("amount", true);

            case 19:
              balance = _context.sent;

              if (!(Number(balance) < Number(order.order_amount))) {
                _context.next = 24;
                break;
              }

              return _context.abrupt('return', this.fail("您余额不足，请充值，或者选择其他支付方式！"));

            case 24:
              //扣款
              decrement = this.model("member").where({ user_id: this.user.uid }).decrement("amount", Number(order.order_amount));

              if (!decrement) {
                _context.next = 50;
                break;
              }

              _context.next = 28;
              return this.model("order").where({ order_no: order.order_no }).update({ status: 3, pay_status: 1 });

            case 28:
              _context.t0 = this.user.uid;
              _context.t1 = new Date().valueOf();
              _context.t2 = 0 - Number(order.order_amount);
              _context.next = 33;
              return this.model("member").where({ id: this.user.uid }).getField("amount", true);

            case 33:
              _context.t3 = _context.sent;
              _context.next = 36;
              return get_nickname(this.user.uid);

            case 36:
              _context.t4 = _context.sent;
              _context.t5 = _context.t4 + ' \u901A\u8FC7\u4F59\u989D\u652F\u4ED8\u65B9\u5F0F\u8FDB\u884C\u5546\u54C1\u8D2D\u4E70,\u8BA2\u5355\u7F16\u53F7\uFF1A';
              _context.t6 = order.order_no;
              _context.t7 = _context.t5 + _context.t6;
              log = {
                admin_id: 0,
                user_id: _context.t0,
                type: 2,
                time: _context.t1,
                amount: _context.t2,
                amount_log: _context.t3,
                note: _context.t7
              };
              _context.next = 43;
              return this.model('balance_log').add(log);

            case 43:
              receiving.pay_status = 1;
              _context.next = 46;
              return this.model("doc_receiving").add(receiving);

            case 46:
              url = '/uc/pay/cart/payres/c_o_id/' + post.order_id;
              return _context.abrupt('return', this.success({ name: "支付订单对接成功，正在转跳！", url: url }));

            case 50:
              return _context.abrupt('return', this.fail("您没有要支付的订单"));

            case 51:
              if (!(post.payment == 1001)) {
                _context.next = 54;
                break;
              }

              _url = '/uc/pay/payres/c_o_id/' + post.order_id;
              return _context.abrupt('return', this.success({ name: "支付订单对接成功，正在转跳！", url: _url }));

            case 54:
              if (!think.isEmpty(order)) {
                _context.next = 58;
                break;
              }

              return _context.abrupt('return', this.fail("您没有要支付的订单"));

            case 58:
              if (!think.isEmpty(order.pingxx_id)) {
                _context.next = 76;
                break;
              }

              _context.next = 61;
              return this.model("pingxx").where({ id: post.payment }).getField("channel", true);

            case 61:
              channel = _context.sent;
              open_id = void 0;

              if (!(channel == "wx_pub")) {
                _context.next = 67;
                break;
              }

              _context.next = 66;
              return this.session("wx_openid");

            case 66:
              open_id = _context.sent;

            case 67:
              //调用ping++ 服务端
              payment = think.service("payment");
              pay = new payment(this.http);
              //传入 channel,order_no,order_amount,this.ip()
              _context.next = 71;
              return pay.pingxx(channel, order.order_no, order.order_amount, this.ip(), open_id);

            case 71:
              charges = _context.sent;
              _context.next = 74;
              return this.model('order').where({ id: post.order_id }).update({ pingxx_id: charges.id });

            case 74:
              _context.next = 81;
              break;

            case 76:
              // console.log(33333333);
              //调用ping++ 服务端
              payment = think.service("payment");
              pay = new payment(this.http);
              _context.next = 80;
              return pay.charge(order.pingxx_id);

            case 80:
              charges = _context.sent;

            case 81:
              if (!charges) {
                _context.next = 87;
                break;
              }

              _context.next = 84;
              return this.model("doc_receiving").add(receiving);

            case 84:
              return _context.abrupt('return', this.success({ name: "支付订单对接成功，正在转跳！", data: charges }));

            case 87:
              return _context.abrupt('return', this.fail("调用接口失败！"));

            case 88:
              _context.next = 115;
              break;

            case 90:
              order_id = this.get("order");
              setp = this.get("setp") || "";
              //this.end(order_id  + "=" + setp)
              //订单信息

              _context.next = 94;
              return this.model("order").where({ pay_status: 0, user_id: this.user.uid }).find(order_id);

            case 94:
              _order = _context.sent;

              if (!think.isEmpty(_order)) {
                _context.next = 98;
                break;
              }

              this.http.error = new Error('订单不存在或者已经支付！');
              return _context.abrupt('return', think.statusAction(702, this.http));

            case 98:
              _order.end_time = date_from(_order.create_time + Number(this.setup.ORDER_DELAY) * 60000);
              //console.log(order);
              this.assign("order", _order);

              //   //支付方式
              // let paylist = await this.model("payment").where({status:1}).order("sort ASC").select();
              // for(let val of paylist){
              //      val.logo =  await this.model("pay_plugin").where({id:val.plugin_id}).getField("logo",true);
              //   }
              //   this.assign("paylist",paylist);
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
              _context.next = 104;
              return this.model("pingxx").where(map).order("sort ASC").select();

            case 104:
              paylist = _context.sent;

              this.assign("paylist", paylist);
              this.assign("setp", setp);
              this.meta_title = "订单支付"; //标题1
              this.keywords = this.setup.WEB_SITE_KEYWORD ? this.setup.WEB_SITE_KEYWORD : ''; //seo关键词
              this.description = this.setup.WEB_SITE_DESCRIPTION ? this.setup.WEB_SITE_DESCRIPTION : ""; //seo描述
              //判断浏览客户端

              if (!checkMobile(this.userAgent())) {
                _context.next = 114;
                break;
              }

              return _context.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 114:
              return _context.abrupt('return', this.display());

            case 115:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function payAction() {
      return _ref.apply(this, arguments);
    }

    return payAction;
  }();
  //Webhooks


  _class.prototype.webhooksAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var data, verify_signature, raw_data, signature, pub_key_path, order, update, log;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = this.post();
              // 验证 webhooks 签名

              verify_signature = function verify_signature(raw_data, signature, pub_key_path) {
                var verifier = _crypto2.default.createVerify('RSA-SHA256').update(raw_data, "utf8");
                var pub_key = _fs2.default.readFileSync(pub_key_path, "utf8");
                return verifier.verify(pub_key, signature, 'base64');
              };

              // POST 原始请求数据是待验签数据，请根据实际情况获取


              raw_data = (0, _stringify2.default)(data);
              // 签名在头部信息的 x-pingplusplus-signature 字段

              signature = this.http.headers["x-pingplusplus-signature"];
              // 请从 https://dashboard.pingxx.com 获取「Webhooks 验证 Ping++ 公钥」

              pub_key_path = think.RESOURCE_PATH + "/upload/pingpp/pingpp_rsa_public_key.pem";

              if (verify_signature(raw_data, signature, pub_key_path, _fs2.default, _crypto2.default)) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt('return', this.fail("服务其验证失败！"));

            case 7:
              _context2.t0 = data.type;
              _context2.next = _context2.t0 === "charge.succeeded" ? 10 : _context2.t0 === "refund.succeeded" ? 47 : 48;
              break;

            case 10:
              if (!data.data.object.paid) {
                _context2.next = 45;
                break;
              }

              _context2.next = 13;
              return this.model("order").where({ order_no: data.data.object.order_no }).find();

            case 13:
              order = _context2.sent;
              _context2.next = 16;
              return this.model("order").where({ order_no: data.data.object.order_no }).update({ status: 3, pay_status: 1, pay_time: data.data.object.time_paid * 1000 });

            case 16:
              update = _context2.sent;

              if (!(order.type == 1 && update)) {
                _context2.next = 40;
                break;
              }

              _context2.next = 20;
              return this.model("member").where({ user_id: order.user_id }).increment("amount", order.order_amount);

            case 20:
              _context2.t1 = order.user_id;
              _context2.t2 = new Date().valueOf();
              _context2.t3 = Number(order.order_amount);
              _context2.next = 25;
              return this.model("member").where({ user_id: order.user_id }).getField("amount", true);

            case 25:
              _context2.t4 = _context2.sent;
              _context2.next = 28;
              return get_nickname(order.user_id);

            case 28:
              _context2.t5 = _context2.sent;
              _context2.t6 = _context2.t5 + ' \u901A\u8FC7[';
              _context2.next = 32;
              return this.model("pingxx").where({ id: order.payment }).getField("title", true);

            case 32:
              _context2.t7 = _context2.sent;
              _context2.t8 = _context2.t6 + _context2.t7;
              _context2.t9 = _context2.t8 + ']\u652F\u4ED8\u65B9\u5F0F\u8FDB\u884C\u5145\u503C,\u8BA2\u5355\u7F16\u53F7\uFF1A';
              _context2.t10 = data.data.object.order_no;
              _context2.t11 = _context2.t9 + _context2.t10;
              log = {
                admin_id: 0,
                user_id: _context2.t1,
                type: 2,
                time: _context2.t2,
                amount: _context2.t3,
                amount_log: _context2.t4,
                note: _context2.t11
              };
              _context2.next = 40;
              return this.model('balance_log').add(log);

            case 40:
              _context2.next = 42;
              return this.model("doc_receiving").where({ order_id: order.id }).update({ pay_status: 1, payment_time: data.data.object.time_paid * 1000 });

            case 42:
              this.success({ name: "成功！" });
              _context2.next = 46;
              break;

            case 45:
              this.fail("失败！");

            case 46:
              return _context2.abrupt('break', 48);

            case 47:
              return _context2.abrupt('break', 48);

            case 48:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function webhooksAction() {
      return _ref2.apply(this, arguments);
    }

    return webhooksAction;
  }();
  //支付回掉


  _class.prototype.payresAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var code, order, _order2, payment, pay, charges, update, log;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              code = this.param();

              //orderId: '1458722092073', respMsg: 'success'

              console.log(code);
              //站内支付回掉

              if (!code.c_o_id) {
                _context3.next = 17;
                break;
              }

              _context3.next = 5;
              return this.model("order").find(code.c_o_id);

            case 5:
              order = _context3.sent;

              order.amount = order.order_amount;
              _context3.t0 = order.payment;
              _context3.next = _context3.t0 === 100 ? 10 : 12;
              break;

            case 10:
              order.channel = "预付款支付";
              return _context3.abrupt('break', 14);

            case 12:
              order.channel = "货到付款";
              return _context3.abrupt('break', 14);

            case 14:
              this.assign("order", order);
              _context3.next = 62;
              break;

            case 17:
              _context3.next = 19;
              return this.model("order").where({ order_no: code.out_trade_no || code.orderId || code.order_no }).find();

            case 19:
              _order2 = _context3.sent;

              //调用ping++ 服务端
              payment = think.service("payment");
              pay = new payment(this.http);
              _context3.next = 24;
              return pay.charge(_order2.pingxx_id);

            case 24:
              charges = _context3.sent;

              if (!(charges.paid && _order2.pay_status == 0)) {
                _context3.next = 54;
                break;
              }

              _context3.next = 28;
              return this.model("order").where({ order_no: charges.order_no }).update({ status: 3, pay_status: 1, pay_time: charges.time_paid * 1000 });

            case 28:
              update = _context3.sent;

              if (!(_order2.type == 1 && update)) {
                _context3.next = 52;
                break;
              }

              _context3.next = 32;
              return this.model("member").where({ id: _order2.user_id }).increment("amount", _order2.order_amount);

            case 32:
              _context3.t1 = _order2.user_id;
              _context3.t2 = new Date().valueOf();
              _context3.t3 = Number(_order2.order_amount);
              _context3.next = 37;
              return this.model("member").where({ id: _order2.user_id }).getField("amount", true);

            case 37:
              _context3.t4 = _context3.sent;
              _context3.next = 40;
              return get_nickname(_order2.user_id);

            case 40:
              _context3.t5 = _context3.sent;
              _context3.t6 = _context3.t5 + ' \u901A\u8FC7[';
              _context3.next = 44;
              return this.model("pingxx").where({ id: _order2.payment }).getField("title", true);

            case 44:
              _context3.t7 = _context3.sent;
              _context3.t8 = _context3.t6 + _context3.t7;
              _context3.t9 = _context3.t8 + ']\u652F\u4ED8\u65B9\u5F0F\u8FDB\u884C\u5145\u503C,\u8BA2\u5355\u7F16\u53F7\uFF1A';
              _context3.t10 = _order2.order_no;
              _context3.t11 = _context3.t9 + _context3.t10;
              log = {
                admin_id: 0,
                user_id: _context3.t1,
                type: 2,
                time: _context3.t2,
                amount: _context3.t3,
                amount_log: _context3.t4,
                note: _context3.t11
              };
              _context3.next = 52;
              return this.model('balance_log').add(log);

            case 52:
              _context3.next = 54;
              return this.model("doc_receiving").where({ order_id: _order2.id }).update({ pay_status: 1, payment_time: charges.time_paid * 1000 });

            case 54:
              if (!(charges.paid && _order2.pay_status == 0 && _order2.type == 1)) {
                _context3.next = 57;
                break;
              }

              _context3.next = 57;
              return this.model("order").where({ order_no: _order2.order_no }).delete();

            case 57:
              charges.amount = charges.amount / 100;
              _context3.next = 60;
              return this.model("pingxx").where({ channel: charges.channel }).getField("title", true);

            case 60:
              charges.channel = _context3.sent;

              this.assign("order", charges);

            case 62:

              this.meta_title = "支付结果"; //标题1
              this.keywords = this.setup.WEB_SITE_KEYWORD ? this.setup.WEB_SITE_KEYWORD : ''; //seo关键词
              this.description = this.setup.WEB_SITE_DESCRIPTION ? this.setup.WEB_SITE_DESCRIPTION : ""; //seo描述
              //判断浏览客户端

              if (!checkMobile(this.userAgent())) {
                _context3.next = 69;
                break;
              }

              return _context3.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 69:
              return _context3.abrupt('return', this.display());

            case 70:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function payresAction() {
      return _ref3.apply(this, arguments);
    }

    return payresAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=pay.js.map