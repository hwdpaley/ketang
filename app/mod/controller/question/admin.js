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

var _admin = require('../admin.js');

var _admin2 = _interopRequireDefault(_admin);

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
  /**
   * 模型后台管理入口
   * index action
   * @return {Promise} []
   */


  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var cate_id, group_id, name, nav, question, map, subcate, groups, list, Pages, pages, page;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cate_id = this.get('cate_id') || null;
              group_id = this.get('group_id') || 0;

              if (!think.isEmpty(cate_id)) {
                _context.next = 5;
                break;
              }

              this.http.error = new Error('该栏目不存在！');
              return _context.abrupt('return', think.statusAction(702, this.http));

            case 5:
              _context.next = 7;
              return this.model("category").get_category(cate_id, 'name');

            case 7:
              _context.t0 = _context.sent;

              if (_context.t0) {
                _context.next = 10;
                break;
              }

              _context.t0 = cate_id;

            case 10:
              name = _context.t0;
              _context.next = 13;
              return this.model('category').get_parent_category(cate_id);

            case 13:
              nav = _context.sent;

              this.assign('breadcrumb', nav);
              //获取内容
              // 构建列表数据
              question = this.model('question');
              map = {};

              if (!cate_id) {
                _context.next = 23;
                break;
              }

              _context.next = 20;
              return this.model('category').get_sub_category(cate_id);

            case 20:
              subcate = _context.sent;

              // console.log(subcate);
              subcate.push(cate_id);
              map.category_id = ['IN', subcate];

            case 23:
              if (group_id) {
                map.group_id = group_id;
              }

              //获取分组
              _context.next = 26;
              return this.model("category").get_category(cate_id, 'groups');

            case 26:
              groups = _context.sent;

              if (groups) {
                groups = parse_config_attr(groups);
              }
              this.assign('groups', groups);
              //搜索
              if (this.get("title")) {
                map.title = ["like", "%" + this.get("title") + "%"];
              }
              _context.next = 32;
              return question.where(map).order('update_time DESC').page(this.get("page"), 20).countSelect();

            case 32:
              list = _context.sent;
              Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

              pages = new Pages(this.http); //实例化 Adapter

              page = pages.pages(list);

              this.assign('list', list);
              this.assign('pagerData', page); //分页展示使用
              console.log(map);
              this.meta_title = this.m_cate.title;
              this.assign({
                "navxs": true,
                "name": name
              });
              this.assign('group_id', group_id);
              return _context.abrupt('return', this.modtemp(this.mod.name));

            case 43:
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
  //删除


  _class.prototype.delAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var ids, qm, _iterator, _isArray, _i, _ref3, id;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ids = this.post("ids");

              if (!think.isEmpty(ids)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return', this.fail("至少选择一条数据！"));

            case 3:
              _context2.next = 5;
              return this.model("question").where({ id: ["IN", ids] }).delete();

            case 5:
              _context2.next = 7;
              return this.model("question_answer").where({ question_id: ["IN", ids] }).getField("answer_id");

            case 7:
              qm = _context2.sent;
              _context2.next = 10;
              return this.model("question_answer").where({ question_id: ["IN", ids] }).delete();

            case 10:
              if (think.isEmpty(qm)) {
                _context2.next = 13;
                break;
              }

              _context2.next = 13;
              return this.model("question_answer_comments").where({ answer_id: ["IN", qm] }).delete();

            case 13:
              if (!think.isArray(ids)) {
                _context2.next = 34;
                break;
              }

              _iterator = ids, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 15:
              if (!_isArray) {
                _context2.next = 21;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context2.next = 18;
                break;
              }

              return _context2.abrupt('break', 32);

            case 18:
              _ref3 = _iterator[_i++];
              _context2.next = 25;
              break;

            case 21:
              _i = _iterator.next();

              if (!_i.done) {
                _context2.next = 24;
                break;
              }

              return _context2.abrupt('break', 32);

            case 24:
              _ref3 = _i.value;

            case 25:
              id = _ref3;
              _context2.next = 28;
              return this.model("search").delsearch(8, id);

            case 28:
              _context2.next = 30;
              return this.model("keyword").delkey(id, 8);

            case 30:
              _context2.next = 15;
              break;

            case 32:
              _context2.next = 38;
              break;

            case 34:
              _context2.next = 36;
              return this.model('search').delsearch(8, ids);

            case 36:
              _context2.next = 38;
              return this.model("keyword").delkey(ids, 8);

            case 38:
              return _context2.abrupt('return', this.success({ name: "删除成功！" }));

            case 39:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function delAction() {
      return _ref2.apply(this, arguments);
    }

    return delAction;
  }();

  return _class;
}(_admin2.default);

exports.default = _class;
//# sourceMappingURL=admin.js.map