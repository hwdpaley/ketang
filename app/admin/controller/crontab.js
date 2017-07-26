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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$controller$bas) {
  (0, _inherits3.default)(_class, _think$controller$bas);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));
  }

  _class.prototype.init = function init(http) {
    _think$controller$bas.prototype.init.call(this, http);
    //网站配置
  };
  /**
   * index action
   * @return {Promise} []
   */


  _class.prototype.indexAction = function indexAction() {
    //auto render template file index_index.html
    return this.display();
  };

  _class.prototype.cloaAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var setup, map, order, _iterator, _isArray, _i, _ref2, v;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.isCli()) {
                _context.next = 3;
                break;
              }

              this.http.error = new Error('only invoked in cli mode！');
              return _context.abrupt('return', think.statusAction(702, this.http));

            case 3:
              _context.next = 5;
              return this.model("setup").getset();

            case 5:
              setup = _context.sent;
              map = {
                pay_status: 0,
                status: 2,
                create_time: ["<", new Date().getTime() - Number(setup.ORDER_DELAY) * 60000],
                type: 0
              };
              _context.next = 9;
              return this.model("order").where(map).field("id").select();

            case 9:
              order = _context.sent;

              if (think.isEmpty(order)) {
                _context.next = 29;
                break;
              }

              _iterator = order, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 12:
              if (!_isArray) {
                _context.next = 18;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt('break', 29);

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

              return _context.abrupt('break', 29);

            case 21:
              _ref2 = _i.value;

            case 22:
              v = _ref2;
              _context.next = 25;
              return this.model("order").where({ id: v.id }).update({ status: 6, admin_remark: "规定时间未付款系统自动作废" });

            case 25:
              _context.next = 27;
              return this.model("order").stock(v.id, false);

            case 27:
              _context.next = 12;
              break;

            case 29:

              //think.log(new Date(),"订单作废任务执行时间")
              console.log('----------cloaAction-------');
              this.end();

            case 31:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function cloaAction() {
      return _ref.apply(this, arguments);
    }

    return cloaAction;
  }();

  return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=crontab.js.map