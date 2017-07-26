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

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$base) {
  (0, _inherits3.default)(_class, _think$model$base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
  }

  /**
   * 添加审核
   * @param model
   * @param uid
   * @param title
   * @param data
   * @returns {Promise}
   */
  _class.prototype.adds = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(model, uid, title, data) {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.add({ model: model, uid: uid, title: title, data: (0, _stringify2.default)(data), time: new Date().getTime() });

            case 2:
              res = _context.sent;
              return _context.abrupt('return', res);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function adds(_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    }

    return adds;
  }();

  return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=approval.js.map