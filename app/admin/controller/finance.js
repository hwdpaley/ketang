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
    this.tactive = "finance";
  };
  /**
   * index action
   * @return {Promise} []
   */


  _class.prototype.indexAction = function indexAction() {
    //auto render template file index_index.html
    return this.display();
  };

  /**
   * 财务日志
   */


  _class.prototype.logAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var list, _pages, pages, page, _iterator, _isArray, _i, _ref2, itme;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.model("balance_log").order("id DESC").page(this.get('page')).countSelect();

            case 2:
              list = _context.sent;

              //console.log(list);
              _pages = think.adapter("pages", "page");
              pages = new _pages(this.http);
              page = pages.pages(list);

              this.assign("pagerData", page);
              _iterator = list.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 8:
              if (!_isArray) {
                _context.next = 14;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context.next = 11;
                break;
              }

              return _context.abrupt('break', 25);

            case 11:
              _ref2 = _iterator[_i++];
              _context.next = 18;
              break;

            case 14:
              _i = _iterator.next();

              if (!_i.done) {
                _context.next = 17;
                break;
              }

              return _context.abrupt('break', 25);

            case 17:
              _ref2 = _i.value;

            case 18:
              itme = _ref2;
              _context.next = 21;
              return this.model("member").get_nickname(itme.user_id);

            case 21:
              itme.user_id = _context.sent;

              itme.admin_id = get_nickname(itme.admin_id);

            case 23:
              _context.next = 8;
              break;

            case 25:
              this.assign("list", list.data);
              this.meta_title = "财务日志";
              this.display();

            case 28:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function logAction() {
      return _ref.apply(this, arguments);
    }

    return logAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=finance.js.map