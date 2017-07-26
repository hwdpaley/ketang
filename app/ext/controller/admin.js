// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------

'use strict';

exports.__esModule = true;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _base = require('../../admin/controller/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  /**
   * some base method in here
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
              this.tactive = "ext";
              this.active = 'admin/ext/index';
              _context.next = 6;
              return this.model("ext").where({ ext: this.http.controller.split("/")[0] }).find();

            case 6:
              this.ext = _context.sent;

              //console.log(this.ext);
              this.meta_title = this.ext.name + "管理";
              if (!think.isEmpty(this.ext.setting)) {
                this.setting = JSON.parse(this.ext.setting);
              } else {
                this.setting = {};
              }

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
   * 获取当前插件分类
   * @returns {*}
   */


  _class.prototype.gettype = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.model("ext_type").where({ ext: this.ext.ext }).order("sort ASC").select();

            case 2:
              data = _context2.sent;
              return _context2.abrupt('return', data);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function gettype() {
      return _ref2.apply(this, arguments);
    }

    return gettype;
  }();

  /**
   * 排序
   * @param self
   * @param model 表名
   * @param id 主键
   * @returns {*}
   */


  _class.prototype.sortAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(self, table) {
      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';

      var param, sort, data, _iterator, _isArray, _i, _ref4, v, map, res;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              table = table || "ext_" + this.http.controller.split("/")[0];
              console.log(table);
              param = this.param();
              sort = JSON.parse(param.sort);

              console.log(sort);
              data = [];
              _iterator = sort, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 7:
              if (!_isArray) {
                _context3.next = 13;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt('break', 24);

            case 10:
              _ref4 = _iterator[_i++];
              _context3.next = 17;
              break;

            case 13:
              _i = _iterator.next();

              if (!_i.done) {
                _context3.next = 16;
                break;
              }

              return _context3.abrupt('break', 24);

            case 16:
              _ref4 = _i.value;

            case 17:
              v = _ref4;
              map = {};

              map[id] = v.id;
              map.sort = v.sort;
              data.push(map);

            case 22:
              _context3.next = 7;
              break;

            case 24:
              _context3.next = 26;
              return this.model(table).updateMany(data);

            case 26:
              res = _context3.sent;

              if (!(res > 0)) {
                _context3.next = 31;
                break;
              }

              return _context3.abrupt('return', this.success({ name: "更新排序成功！" }));

            case 31:
              return _context3.abrupt('return', this.fail("排序失败！"));

            case 32:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function sortAction(_x, _x2) {
      return _ref3.apply(this, arguments);
    }

    return sortAction;
  }();

  /**
   *  插件配置管理。
   */


  _class.prototype.settingAction = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var data, res;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!this.isPost()) {
                _context4.next = 13;
                break;
              }

              data = this.post();

              if (think.isEmpty(data.ext)) {
                data.ext = this.ext.ext;
              }
              // console.log(data);
              _context4.next = 5;
              return this.model("ext").where({ ext: this.ext.ext }).update({ setting: (0, _stringify2.default)(data) });

            case 5:
              res = _context4.sent;

              if (!res) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt('return', this.success({ name: "更新成功！" }));

            case 10:
              return _context4.abrupt('return', this.fail("更新失败！"));

            case 11:
              _context4.next = 15;
              break;

            case 13:
              this.assign("setting", this.setting);
              return _context4.abrupt('return', this.display());

            case 15:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function settingAction() {
      return _ref5.apply(this, arguments);
    }

    return settingAction;
  }();
  /**
   * 插件分类管理
   * @returns {*}
   */


  _class.prototype.typeAction = function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      var data, Pages, pages, page;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.model("ext_type").where({ ext: this.ext.ext }).page(this.get('page')).order("sort ASC").countSelect();

            case 2:
              data = _context5.sent;

              //console.log(data);
              Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

              pages = new Pages(this.http); //实例化 Adapter

              page = pages.pages(data);

              this.assign('pagerData', page); //分页展示使用
              this.assign('list', data.data);
              return _context5.abrupt('return', this.display());

            case 9:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function typeAction() {
      return _ref6.apply(this, arguments);
    }

    return typeAction;
  }();
  /**
   * 排序
   * @param self
   * @param model 表名
   * @param id 主键
   * @returns {*}
   */


  _class.prototype.typesortAction = function () {
    var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
      var param, sort, data, _iterator2, _isArray2, _i2, _ref8, v, map, res;

      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              param = this.param();
              sort = JSON.parse(param.sort);
              data = [];
              _iterator2 = sort, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

            case 4:
              if (!_isArray2) {
                _context6.next = 10;
                break;
              }

              if (!(_i2 >= _iterator2.length)) {
                _context6.next = 7;
                break;
              }

              return _context6.abrupt('break', 21);

            case 7:
              _ref8 = _iterator2[_i2++];
              _context6.next = 14;
              break;

            case 10:
              _i2 = _iterator2.next();

              if (!_i2.done) {
                _context6.next = 13;
                break;
              }

              return _context6.abrupt('break', 21);

            case 13:
              _ref8 = _i2.value;

            case 14:
              v = _ref8;
              map = {};

              map.typeid = v.id;
              map.sort = v.sort;
              data.push(map);

            case 19:
              _context6.next = 4;
              break;

            case 21:
              _context6.next = 23;
              return this.model("ext_type").updateMany(data);

            case 23:
              res = _context6.sent;

              if (!(res > 0)) {
                _context6.next = 28;
                break;
              }

              return _context6.abrupt('return', this.success({ name: "更新排序成功！" }));

            case 28:
              return _context6.abrupt('return', this.fail("排序失败！"));

            case 29:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function typesortAction() {
      return _ref7.apply(this, arguments);
    }

    return typesortAction;
  }();

  /**
   * 删除分类
   * @returns {*}
   */


  _class.prototype.typedelAction = function () {
    var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
      var ids, res;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              ids = this.param("ids");
              //console.log(ids);

              _context7.next = 3;
              return this.model("ext_type").where({ typeid: ["IN", ids] }).delete();

            case 3:
              res = _context7.sent;

              if (!res) {
                _context7.next = 8;
                break;
              }

              return _context7.abrupt('return', this.success({ name: "删除成功!" }));

            case 8:
              return _context7.abrupt('return', this.fail("删除失败！"));

            case 9:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function typedelAction() {
      return _ref9.apply(this, arguments);
    }

    return typedelAction;
  }();
  /**
   * 添加类别
   * @returns {*}
   */


  _class.prototype.typeaddAction = function () {
    var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
      var data, res;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!this.isPost()) {
                _context8.next = 13;
                break;
              }

              data = this.post();

              data.ext = this.ext.ext;
              _context8.next = 5;
              return this.model("ext_type").add(data);

            case 5:
              res = _context8.sent;

              if (!res) {
                _context8.next = 10;
                break;
              }

              return _context8.abrupt('return', this.success({ name: "添加成功!" }));

            case 10:
              return _context8.abrupt('return', this.fail("添加失败！"));

            case 11:
              _context8.next = 15;
              break;

            case 13:
              this.meta_title = "添加类别";
              return _context8.abrupt('return', this.display());

            case 15:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function typeaddAction() {
      return _ref10.apply(this, arguments);
    }

    return typeaddAction;
  }();
  /**
   * 修改友情链接
   */


  _class.prototype.typeeditAction = function () {
    var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
      var data, res, id, type;
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!this.isPost()) {
                _context9.next = 13;
                break;
              }

              data = this.post();

              data.ext = this.ext.ext;
              _context9.next = 5;
              return this.model("ext_type").where({ typeid: data.typeid }).update(data);

            case 5:
              res = _context9.sent;

              if (!res) {
                _context9.next = 10;
                break;
              }

              return _context9.abrupt('return', this.success({ name: "修改成功!" }));

            case 10:
              return _context9.abrupt('return', this.fail("修改失败！"));

            case 11:
              _context9.next = 21;
              break;

            case 13:
              id = this.get("id");
              _context9.next = 16;
              return this.model("ext_type").where({ typeid: id }).find();

            case 16:
              type = _context9.sent;

              console.log(type);
              this.assign("type", type);
              //获取当前插件的分类
              this.meta_title = "修改类别";
              return _context9.abrupt('return', this.display());

            case 21:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function typeeditAction() {
      return _ref11.apply(this, arguments);
    }

    return typeeditAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=admin.js.map