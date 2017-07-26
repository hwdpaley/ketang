'use strict';
/**
 * 插件前台控制器
 * 如果插件有前台展示业务，写在这个控制器里面
 * 插件如需建立表务必遵循下面格式：
 * 单表：表前缀_ext_插件目录名
 * 多表：表前缀_ext_插件目录名，表前缀_ext_插件目录名_分表1，表前缀_ext_插件目录名_分表2...
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

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  /**
   * index action
   *
   * @return {Promise} []
   */
  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var table, data;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //auto render template file index_index.html
              table = "ext_" + this.ext.ext;
              //console.log(table);
              //获取当前分类

              _context.t0 = this;
              _context.next = 4;
              return this.gettype();

            case 4:
              _context.t1 = _context.sent;

              _context.t0.assign.call(_context.t0, "type", _context.t1);

              _context.next = 8;
              return this.model(table).where({ passed: 1 }).order("sort ASC").select();

            case 8:
              data = _context.sent;

              //console.log(data);
              this.assign("list", data);
              return _context.abrupt('return', this.display());

            case 11:
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

  _class.prototype.applyAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var data, res;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this.setting.ispost == 0)) {
                _context2.next = 3;
                break;
              }

              this.http.error = new Error('已关闭申请，请在后台插件设置开启！');
              return _context2.abrupt('return', think.statusAction(702, this.http));

            case 3:
              if (!this.isPost()) {
                _context2.next = 19;
                break;
              }

              data = this.post();

              data.passed = 0;

              if (!(data.linktype == 1)) {
                _context2.next = 9;
                break;
              }

              if (!think.isEmpty(data.logo)) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt('return', this.fail("logo链接类型，请填写logo地址！"));

            case 9:
              _context2.next = 11;
              return this.model("ext_link").add(data);

            case 11:
              res = _context2.sent;

              if (!res) {
                _context2.next = 16;
                break;
              }

              return _context2.abrupt('return', this.success({ name: "申请成功!", url: "/ext/link/index" }));

            case 16:
              return _context2.abrupt('return', this.fail("添加失败！"));

            case 17:
              _context2.next = 25;
              break;

            case 19:
              _context2.t0 = this;
              _context2.next = 22;
              return this.gettype();

            case 22:
              _context2.t1 = _context2.sent;

              _context2.t0.assign.call(_context2.t0, "type", _context2.t1);

              return _context2.abrupt('return', this.display());

            case 25:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function applyAction() {
      return _ref2.apply(this, arguments);
    }

    return applyAction;
  }();

  return _class;
}(_index2.default);

exports.default = _class;
//# sourceMappingURL=index.js.map