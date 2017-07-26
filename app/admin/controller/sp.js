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

  _class.prototype.init = function init(http) {
    _Base.prototype.init.call(this, http);
    this.tactive = "article";
    this.db = this.model("category_sp");
  };
  /**
   * index action
   * @return {Promise} []
   */


  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var cate_id, name, nav, info;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cate_id = this.get('cate_id') || null;

              if (!think.isEmpty(cate_id)) {
                _context.next = 4;
                break;
              }

              this.http.error = new Error('该栏目不存在！');
              return _context.abrupt('return', think.statusAction(702, this.http));

            case 4:
              _context.next = 6;
              return this.admin_priv("init", cate_id, "您没有权限查看本栏目！");

            case 6:
              _context.next = 8;
              return this.model("category").get_category(cate_id, 'name');

            case 8:
              _context.t0 = _context.sent;

              if (_context.t0) {
                _context.next = 11;
                break;
              }

              _context.t0 = cate_id;

            case 11:
              name = _context.t0;
              _context.next = 14;
              return this.model('category').get_parent_category(cate_id);

            case 14:
              nav = _context.sent;

              this.assign('breadcrumb', nav);
              //获取内容
              //console.log(cate_id);
              _context.next = 18;
              return this.db.find({ where: { cid: cate_id } });

            case 18:
              info = _context.sent;

              //console.log(info);
              //auto render template file index_index.html
              this.meta_title = 'PC单页内容';
              this.assign({
                "navxs": true,
                "name": name,
                "info": info
              });
              return _context.abrupt('return', this.display());

            case 22:
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
   * index action
   * @return {Promise} []
   */


  _class.prototype.mobileAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var cate_id, name, nav, info;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              cate_id = this.get('cate_id') || null;

              if (!think.isEmpty(cate_id)) {
                _context2.next = 4;
                break;
              }

              this.http.error = new Error('该栏目不存在！');
              return _context2.abrupt('return', think.statusAction(702, this.http));

            case 4:
              _context2.next = 6;
              return this.admin_priv("init", cate_id, "您没有权限查看本栏目！");

            case 6:
              _context2.next = 8;
              return this.model("category").get_category(cate_id, 'name');

            case 8:
              _context2.t0 = _context2.sent;

              if (_context2.t0) {
                _context2.next = 11;
                break;
              }

              _context2.t0 = cate_id;

            case 11:
              name = _context2.t0;
              _context2.next = 14;
              return this.model('category').get_parent_category(cate_id);

            case 14:
              nav = _context2.sent;

              this.assign('breadcrumb', nav);
              //auto render template file index_index.html
              _context2.next = 18;
              return this.db.find({ where: { cid: cate_id } });

            case 18:
              info = _context2.sent;

              this.meta_title = '手机单页内容';
              this.assign({
                "navxs": true,
                "name": name,
                "info": info
              });
              return _context2.abrupt('return', this.display());

            case 22:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function mobileAction() {
      return _ref2.apply(this, arguments);
    }

    return mobileAction;
  }();

  //编辑


  _class.prototype.updateAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var data, isup;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              data = this.post();

              console.log(data);
              //权限验证
              _context3.next = 4;
              return this.admin_priv("edit", data.cid);

            case 4:
              _context3.next = 6;
              return this.db.thenAdd(data, { cid: data.cid });

            case 6:
              isup = _context3.sent;

              if (!(isup.type == 'exist')) {
                _context3.next = 10;
                break;
              }

              _context3.next = 10;
              return this.db.update(data, { where: { cid: data.cid } });

            case 10:
              return _context3.abrupt('return', this.success({ name: "编辑成功！" }));

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function updateAction() {
      return _ref3.apply(this, arguments);
    }

    return updateAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=sp.js.map