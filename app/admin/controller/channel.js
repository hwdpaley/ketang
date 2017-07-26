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
  _class.prototype.init = function init(http) {
    _Base.prototype.init.call(this, http);
    this.db = this.model('channel');
    this.tactive = "setup";
  };

  /**
   * 导航管理首页
   * @returns {*}
   */


  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var tree;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.db.get_channel_cache();

            case 2:
              tree = _context.sent;

              //console.log(tree)
              this.assign("list", tree);
              this.meta_title = "导航管理";
              return _context.abrupt('return', this.display());

            case 6:
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
   * 获取全部导航ajax
   * @returns {*}
   */


  _class.prototype.getchannelAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var tree;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.db.get_channel_cache();

            case 2:
              tree = _context2.sent;
              return _context2.abrupt('return', this.json(tree));

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getchannelAction() {
      return _ref2.apply(this, arguments);
    }

    return getchannelAction;
  }();

  _class.prototype.addAction = function addAction() {
    //添加导航
    this.meta_title = "添加导航";
    this.active = "admin/channel/index";
    return this.display();
  };

  _class.prototype.editAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var id, info;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              //编辑导航
              id = this.get('cid');
              _context3.next = 3;
              return this.model('channel').find(id);

            case 3:
              info = _context3.sent;

              if (think.isEmpty(info)) {
                this.fail("获取配置信息错误");
              }
              this.assign('info', info);
              this.meta_title = "编辑导航";
              this.active = "admin/channel/index";
              return _context3.abrupt('return', this.display('add'));

            case 9:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function editAction() {
      return _ref3.apply(this, arguments);
    }

    return editAction;
  }();
  //更新或者新增导航


  _class.prototype.updatesAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var data, res;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              data = this.post();
              _context4.next = 3;
              return this.model("channel").updates(data);

            case 3:
              res = _context4.sent;
              _context4.t0 = res.err;
              _context4.next = _context4.t0 === 1 ? 7 : _context4.t0 === 2 ? 11 : _context4.t0 === 3 ? 13 : 17;
              break;

            case 7:
              _context4.next = 9;
              return this.model("action").log("update_channel", "channel", res.id, this.user.uid, this.ip(), this.http.url);

            case 9:
              return _context4.abrupt('return', this.success({ name: "新增成功！", url: "/admin/channel/index" }));

            case 11:
              return _context4.abrupt('return', this.fail("新增失败！"));

            case 13:
              _context4.next = 15;
              return this.model("action").log("update_channel", "channel", res.id, this.user.uid, this.ip(), this.http.url);

            case 15:
              return _context4.abrupt('return', this.success({ name: "更新成功！", url: "/admin/channel/index" }));

            case 17:
              return _context4.abrupt('return', this.fail("更新失败！"));

            case 18:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function updatesAction() {
      return _ref4.apply(this, arguments);
    }

    return updatesAction;
  }();

  //删除导航


  _class.prototype.delAction = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      var id, map, res;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = this.get('id');

              id = id.split(",");
              if (think.isEmpty(id)) {
                this.fail("请选择要操作的数据！");
              }
              map = { id: ['IN', id] };
              _context5.next = 6;
              return this.model('channel').where(map).delete();

            case 6:
              res = _context5.sent;

              if (!res) {
                _context5.next = 14;
                break;
              }

              _context5.next = 10;
              return this.model("action").log("update_channel", "channel", id, this.user.uid, this.ip(), this.http.url);

            case 10:
              //记录行为
              think.cache("get_channel_cache", null); //更新频道缓存信息
              return _context5.abrupt('return', this.success({ name: "删除成功！" }));

            case 14:
              return _context5.abrupt('return', this.fail("删除失败！"));

            case 15:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function delAction() {
      return _ref5.apply(this, arguments);
    }

    return delAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=channel.js.map