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

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

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
                table: "member_group",
                join: "left",
                as: "c",
                on: ["groupid", "groupid"]
              }).find(this.user.uid);

            case 4:
              userInfo = _context.sent;


              this.assign("userInfo", userInfo);
              // console.log("用户中心"+JSON.stringify(userInfo) );
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

  //获取头像


  _class.prototype.avatarAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var uid, uploadPath, path, pic;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              uid = this.get("uid") || this.user.uid;
              uploadPath = think.RESOURCE_PATH + '/upload/avatar/' + uid;
              path = think.isFile(uploadPath + "/" + "/avatar.png");

              this.type("image/png");
              pic = void 0;

              if (path) {
                // this.download(uploadPath + "/" + "/avatar.png");
                pic = _fs2.default.readFileSync(uploadPath + "/" + "/avatar.png");
              } else {
                //this.download(think.RESOURCE_PATH + '/upload/avatar/avatar.jpg')
                pic = _fs2.default.readFileSync(think.RESOURCE_PATH + '/upload/avatar/avatar.jpg');
              }

              this.end(pic);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function avatarAction() {
      return _ref2.apply(this, arguments);
    }

    return avatarAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=index.js.map