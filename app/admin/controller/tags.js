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
  //ajax添加tags


  _class.prototype.ajaxaddtagsAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var data, model, res, rdata;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = this.post();

              data.model_id = Number(data.model_id);
              model = this.model("tags");
              _context.next = 5;
              return model.where({ name: data.name }).thenAdd(data);

            case 5:
              res = _context.sent;

              if (!(res.type == "exist")) {
                _context.next = 10;
                break;
              }

              _context.next = 9;
              return model.where({ id: res.id }).increment('num');

            case 9:
              return _context.abrupt('return', this.fail("已经存在，不要重复添加，请直接选择！"));

            case 10:
              rdata = {
                errno: 0,
                id: res.id,
                name: data.name
              };
              return _context.abrupt('return', this.json(rdata));

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function ajaxaddtagsAction() {
      return _ref.apply(this, arguments);
    }

    return ajaxaddtagsAction;
  }();

  _class.prototype.ajaxgettagsAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var map, model, res;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              map = this.get();
              model = this.model("tags");
              _context2.next = 4;
              return model.where(map).select();

            case 4:
              res = _context2.sent;
              return _context2.abrupt('return', this.json(res));

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function ajaxgettagsAction() {
      return _ref2.apply(this, arguments);
    }

    return ajaxgettagsAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=tags.js.map