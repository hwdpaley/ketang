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

var _base = require('../../admin/controller/base.js');

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
  };

  /**
   * 模型公共参数
   * @private
   */


  _class.prototype.__before = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Base.prototype.__before.call(this);

            case 2:
              if (!this.get('cate_id')) {
                _context.next = 9;
                break;
              }

              _context.next = 5;
              return this.category(this.get('cate_id'));

            case 5:
              this.m_cate = _context.sent;
              _context.next = 8;
              return this.model("model").get_model(this.m_cate.model);

            case 8:
              this.mod = _context.sent;

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function __before() {
      return _ref.apply(this, arguments);
    }

    return __before;
  }();

  /**
   * index action
   * @return {Promise} []
   * 封面入口
   */


  _class.prototype.indexAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var cxt, cc;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              cxt = think.require("mod/controller/" + this.mod.name + "/admin");
              cc = new cxt(this.http);
              _context2.next = 5;
              return this.action(cc, "index");

            case 5:
              _context2.next = 12;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);

              think.log(_context2.t0.message, 'ERROR');
              this.assign("err", _context2.t0);
              return _context2.abrupt('return', this.action("index", "moderror"));

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 7]]);
    }));

    function indexAction() {
      return _ref2.apply(this, arguments);
    }

    return indexAction;
  }();

  //获取分类信息


  _class.prototype.category = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(id, field) {
      var cate;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = id || 0;
              field = field || "";

              if (!think.isEmpty(id)) {
                _context3.next = 5;
                break;
              }

              //this.fail('没有指定数据分类！');
              this.http.error = new Error('没有指定数据分类！');
              return _context3.abrupt('return', think.statusAction(702, this.http));

            case 5:
              console.log("category-------" + id);
              _context3.next = 8;
              return this.model("category").info(id, field);

            case 8:
              cate = _context3.sent;

              if (!(cate && 1 == cate.status)) {
                _context3.next = 19;
                break;
              }

              _context3.t0 = cate.display;
              _context3.next = _context3.t0 === 0 ? 13 : 16;
              break;

            case 13:
              //this.fail('该分类禁止显示')
              this.http.error = new Error('该分类禁止显示！');
              return _context3.abrupt('return', think.statusAction(702, this.http));

            case 16:
              return _context3.abrupt('return', cate);

            case 17:
              _context3.next = 21;
              break;

            case 19:

              //this.fail("分类不存在或者被禁用！");
              this.http.error = new Error('分类不存在或者被禁用！');
              return _context3.abrupt('return', think.statusAction(702, this.http));

            case 21:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function category(_x, _x2) {
      return _ref3.apply(this, arguments);
    }

    return category;
  }();

  //独立模型display方法封装


  _class.prototype.modtemp = function modtemp(mod) {
    var moblie = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var ctr = this.http.controller.split("/");
    if (!moblie) {
      if (ctr[1]) {
        return this.display();
      } else {
        return this.display(think.ROOT_PATH + think.sep + "view" + think.sep + "mod" + think.sep + mod + think.sep + this.http.controller + "_" + this.http.action + this.config("view.file_ext"));
      }
    } else {
      if (ctr[1]) {
        return this.display(think.ROOT_PATH + think.sep + "view" + think.sep + "mod" + think.sep + ctr[0] + think.sep + moblie + think.sep + ctr[1] + "_" + this.http.action + this.config("view.file_ext"));
      } else {
        return this.display(think.ROOT_PATH + think.sep + "view" + think.sep + "mod" + think.sep + mod + think.sep + moblie + think.sep + this.http.controller + "_" + this.http.action + this.config("view.file_ext"));
      }
    }
  };

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=admin.js.map