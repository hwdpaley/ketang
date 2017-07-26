// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';
/**
 * rest controller
 * @type {Class}
 */

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$controller$res) {
  (0, _inherits3.default)(_class, _think$controller$res);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _think$controller$res.apply(this, arguments));
  }

  /**
   * init
   * @param  {Object} http []
   * @return {}      []
   */
  _class.prototype.init = function init(http) {
    _think$controller$res.prototype.init.call(this, http);
    //this._method = "_method";
    var model = this.get('model');
    this.modelInstance = this.model(model);
  };
  /**
   * before magic method
   * @return {Promise} []
   */


  _class.prototype.__before = function __before() {};

  _class.prototype.getAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var data, _modelInstance$where, pk;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(this.resource);
              console.log(this.id);
              data = void 0;

              if (!think.isNumberString(this.id)) {
                _context.next = 13;
                break;
              }

              _context.next = 6;
              return this.modelInstance.getPk();

            case 6:
              pk = _context.sent;
              _context.next = 9;
              return this.modelInstance.where((_modelInstance$where = {}, _modelInstance$where[pk] = this.id, _modelInstance$where)).find();

            case 9:
              data = _context.sent;
              return _context.abrupt('return', this.success(data));

            case 13:
              _context.next = 15;
              return this.modelInstance.select();

            case 15:
              data = _context.sent;

            case 16:
              return _context.abrupt('return', this.success(data));

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getAction() {
      return _ref.apply(this, arguments);
    }

    return getAction;
  }();

  return _class;
}(think.controller.rest);

exports.default = _class;
//# sourceMappingURL=apirest.js.map