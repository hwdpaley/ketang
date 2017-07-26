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

  _class.prototype.snAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var prefix, oo;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // let date = new Date();
              // let y = date.getFullYear();
              // let m = date.getMonth()+1 <10 ?"0"+(date.getMonth()+1):date.getMonth()+1;
              // let d = date.getDate()<10?"0"+date.getDate():date.getDate();
              // let v_timestr = y+m+d;
              prefix = think.parseConfig(true, think.config("db")).prefix;
              _context.next = 3;
              return this.model().query('call seq_no(1)');

            case 3:
              oo = _context.sent;
              //TODO
              // let order_no= await this.query(`SELECT CONCAT(${v_timestr},LPAD(order_sn,7,0)) AS order_sn FROM cmswing_order_seq WHERE timestr=${v_timestr}`);
              this.end(oo[0][0]["order_sn"]);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function snAction() {
      return _ref.apply(this, arguments);
    }

    return snAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=test.js.map