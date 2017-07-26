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
    this.tactive = "article";
  };
  /** 话题控制器
   * index action
   * @return {Promise} []
   */


  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var map, list, _iterator, _isArray, _i, _ref2, v, Pages, pages, page;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //搜索
              map = {};

              if (this.get("keyname")) {
                map.keyname = ["like", "%" + this.get("keyname") + "%"];
              }
              if (this.get("type") == 'parent') {
                map.is_parent = 1;
              }
              _context.next = 5;
              return this.model("keyword").where(map).order('add_time DESC').page(this.get("page"), 20).countSelect();

            case 5:
              list = _context.sent;
              _iterator = list.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 7:
              if (!_isArray) {
                _context.next = 13;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context.next = 10;
                break;
              }

              return _context.abrupt('break', 23);

            case 10:
              _ref2 = _iterator[_i++];
              _context.next = 17;
              break;

            case 13:
              _i = _iterator.next();

              if (!_i.done) {
                _context.next = 16;
                break;
              }

              return _context.abrupt('break', 23);

            case 16:
              _ref2 = _i.value;

            case 17:
              v = _ref2;
              _context.next = 20;
              return this.model("keyword_data").where({ tagid: v.id }).order("add_time DESC").getField("uid", true);

            case 20:
              v.lastuser = _context.sent;

            case 21:
              _context.next = 7;
              break;

            case 23:
              Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

              pages = new Pages(this.http); //实例化 Adapter

              page = pages.pages(list);

              this.assign('list', list);
              this.assign('pagerData', page); //分页展示使用
              this.meta_title = "话题管理";
              //auto render template file index_index.html
              return _context.abrupt('return', this.display());

            case 30:
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
   * 添加话题
   */


  _class.prototype.addAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var data, isadd, res, parent;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.isPost()) {
                _context2.next = 18;
                break;
              }

              data = this.post();

              data.pic = data.pic || 0;
              data.pid = data.is_parent == 1 ? 0 : data.pid;
              data.add_time = new Date().getTime();
              _context2.next = 7;
              return this.model("keyword").where({ keyname: data.keyname }).find();

            case 7:
              isadd = _context2.sent;

              if (think.isEmpty(isadd)) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt('return', this.fail("已经存在相同的话题"));

            case 10:
              res = this.model("keyword").add(data);

              if (!res) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt('return', this.success({ name: "添加成功！", url: "/admin/keyword/index" }));

            case 15:
              return _context2.abrupt('return', this.fail("添加失败！"));

            case 16:
              _context2.next = 25;
              break;

            case 18:
              this.meta_title = "新增话题";
              this.active = 'admin/keyword/index';
              _context2.next = 22;
              return this.model("keyword").where({ is_parent: 1 }).select();

            case 22:
              parent = _context2.sent;

              this.assign("parent", parent);
              return _context2.abrupt('return', this.display());

            case 25:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function addAction() {
      return _ref3.apply(this, arguments);
    }

    return addAction;
  }();

  /**
   * 编辑话题
   */


  _class.prototype.editAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var data, res, id, info, parent;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!this.isPost()) {
                _context3.next = 14;
                break;
              }

              data = this.post();

              data.pic = data.pic || 0;
              data.pid = data.is_parent == 1 ? 0 : data.pid;
              data.discuss_count_update = new Date().getTime();
              console.log(data);
              res = this.model("keyword").update(data);

              if (!res) {
                _context3.next = 11;
                break;
              }

              return _context3.abrupt('return', this.success({ name: "修改成功！", url: "/admin/keyword/index" }));

            case 11:
              return _context3.abrupt('return', this.fail("修改失败！"));

            case 12:
              _context3.next = 26;
              break;

            case 14:
              id = this.get("id");

              this.meta_title = "编辑话题";
              this.active = 'admin/keyword/index';
              _context3.next = 19;
              return this.model("keyword").find(id);

            case 19:
              info = _context3.sent;
              _context3.next = 22;
              return this.model("keyword").where({ is_parent: 1 }).select();

            case 22:
              parent = _context3.sent;

              this.assign("parent", parent);
              this.assign("info", info);
              return _context3.abrupt('return', this.display());

            case 26:
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
   * 删除话题
   */


  _class.prototype.delAction = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var ids;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              ids = this.param("ids");

              if (!think.isEmpty(ids)) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt('return', this.fail("参数不能为空!"));

            case 3:
              _context4.next = 5;
              return this.model("keyword").where({ id: ["IN", ids] }).delete();

            case 5:
              _context4.next = 7;
              return this.model("keyword_data").where({ tagid: ["IN", ids] }).delete();

            case 7:
              _context4.next = 9;
              return this.model("keyword_focus").where({ key_id: ["IN", ids] }).delete();

            case 9:
              return _context4.abrupt('return', this.success({ name: "删除成功!" }));

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function delAction() {
      return _ref5.apply(this, arguments);
    }

    return delAction;
  }();
  //锁定话题


  _class.prototype.lockAction = function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      var ids, lock, up;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              ids = this.param("ids");
              lock = this.get("lock");
              _context5.next = 4;
              return this.model("keyword").where({ id: ["IN", ids] }).update({ lock: lock });

            case 4:
              up = _context5.sent;

              if (!up) {
                _context5.next = 9;
                break;
              }

              return _context5.abrupt('return', this.success({ name: "操作成功!" }));

            case 9:
              return _context5.abrupt('return', this.fail("操作失败!"));

            case 10:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function lockAction() {
      return _ref6.apply(this, arguments);
    }

    return lockAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=keyword.js.map