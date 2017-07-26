// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

exports.__esModule = true;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

  _class.prototype.init = function init(http) {
    _Base.prototype.init.call(this, http);
    this.tactive = "user";
  };
  /**
   * index action
   * @return {Promise} []
   */

  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var action, _pages, pages, page;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.model('action').where({ 'status': ['>', -1] }).order("id DESC").page(this.get('page')).countSelect();

            case 2:
              action = _context.sent;
              _pages = think.adapter("pages", "page");
              pages = new _pages(this.http);
              page = pages.pages(action);

              this.assign("pagerData", page);
              this.assign("list", action.data);
              this.meta_title = "用户行为";
              return _context.abrupt('return', this.display());

            case 10:
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

  /**
   * 日志列表
   * @returns {*}
     */


  _class.prototype.logAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var map, list, _pages, pages, page, _iterator, _isArray, _i, _ref3, itme;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              //获取列表数据
              map = {};

              map.status = ['>', -1];
              _context2.next = 4;
              return this.model("action_log").where({ 'status': ['>', -1] }).order("id DESC").page(this.get('page')).countSelect();

            case 4:
              list = _context2.sent;

              //console.log(list);
              _pages = think.adapter("pages", "page");
              pages = new _pages(this.http);
              page = pages.pages(list);

              this.assign("pagerData", page);
              _iterator = list.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 10:
              if (!_isArray) {
                _context2.next = 16;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context2.next = 13;
                break;
              }

              return _context2.abrupt('break', 29);

            case 13:
              _ref3 = _iterator[_i++];
              _context2.next = 20;
              break;

            case 16:
              _i = _iterator.next();

              if (!_i.done) {
                _context2.next = 19;
                break;
              }

              return _context2.abrupt('break', 29);

            case 19:
              _ref3 = _i.value;

            case 20:
              itme = _ref3;
              _context2.next = 23;
              return this.model("action").get_action(itme.action_id, "title");

            case 23:
              itme.action_id = _context2.sent;
              _context2.next = 26;
              return this.model("member").get_nickname(itme.user_id);

            case 26:
              itme.user_id = _context2.sent;

            case 27:
              _context2.next = 10;
              break;

            case 29:
              this.assign("list", list.data);
              this.meta_title = "行为日志";
              return _context2.abrupt('return', this.display());

            case 32:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function logAction() {
      return _ref2.apply(this, arguments);
    }

    return logAction;
  }();

  /**
   * 新增行为
   * @returns {*}
     */


  _class.prototype.addAction = function addAction() {
    this.meta_title = "新增行为";
    this.active = "admin/action/index";
    this.assign("data", null);
    return this.display();
  };

  /**
   * 编辑行为
   * @returns {*}
     */


  _class.prototype.editAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var id, data;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = this.get("id");

              think.isEmpty(id) && this.fail("参数不能为空！");
              _context3.next = 4;
              return this.model('action').find(id);

            case 4:
              data = _context3.sent;

              this.active = "admin/action/index";
              this.meta_title = "编辑行为";
              this.assign("data", data);
              return _context3.abrupt('return', this.display('add'));

            case 9:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function editAction() {
      return _ref4.apply(this, arguments);
    }

    return editAction;
  }();

  /**
   * 更新行为
   */


  _class.prototype.updateAction = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var data, res, _res;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              data = this.post();

              if (!think.isEmpty(data.id)) {
                _context4.next = 10;
                break;
              }

              data.status = 1;
              data.update_time = Date.now();
              _context4.next = 6;
              return this.model("action").add(data);

            case 6:
              res = _context4.sent;

              if (res) {
                this.success({ name: "新增成功！", url: "/admin/action/index" });
              } else {
                this.fail("添加失败！");
              }
              _context4.next = 15;
              break;

            case 10:

              data.update_time = Date.now();
              _context4.next = 13;
              return this.model("action").update(data);

            case 13:
              _res = _context4.sent;

              if (_res) {
                this.success({ name: "更新成功！", url: "/admin/action/index" });
              } else {
                this.fail("更新失败！");
              }

            case 15:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function updateAction() {
      return _ref5.apply(this, arguments);
    }

    return updateAction;
  }();

  /**
   * 删除日志
   */


  _class.prototype.removeAction = function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      var ids, map, res;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              ids = this.param("ids");

              think.isEmpty(ids) && this.fail("参数错误");
              map = {};

              if (think.isArray(ids)) {
                map.id = ['IN', ids];
              } else if (think.isNumberString(ids)) {
                map.id = ids;
              }
              _context5.next = 6;
              return this.model('action_log').where(map).delete();

            case 6:
              res = _context5.sent;

              if (res) {
                this.success({ name: "删除成功！", url: "/admin/action/log" });
              } else {
                this.fail("删除失败！");
              }

            case 8:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function removeAction() {
      return _ref6.apply(this, arguments);
    }

    return removeAction;
  }();
  // 清楚日志


  _class.prototype.clearAction = function () {
    var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
      var res;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.model('action_log').where('1=1').delete();

            case 2:
              res = _context6.sent;

              if (res) {
                this.success({ name: '日志清空成功！', url: "/admin/action/log" });
              } else {
                this.fail("日志清空失败！");
              }

            case 4:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function clearAction() {
      return _ref7.apply(this, arguments);
    }

    return clearAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=action.js.map