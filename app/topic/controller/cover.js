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

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');

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
  //频道页
  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var get, id, cate, roleid, priv, models, modellist, _iterator, _isArray, _i, _ref2, val, modelobj, breadcrumb, get_sub_category, temp;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:

              //auto render template file index_index.html
              get = this.get('category') || 0;
              id = 0;

              if (get != 0) {
                id = get.split("-")[0];
              }
              _context.next = 5;
              return this.category(id);

            case 5:
              cate = _context.sent;

              cate = think.extend({}, cate);
              //console.log(cate);
              roleid = 8; //游客
              //访问控制

              console.log("uid=============" + this.is_login);

              if (!this.is_login) {
                _context.next = 16;
                break;
              }

              this.assign('userid', this.is_login);
              _context.next = 13;
              return this.model("member").where({ id: this.is_login }).getField('groupid', true);

            case 13:
              roleid = _context.sent;
              _context.next = 17;
              break;

            case 16:
              this.assign('userid', 0);

            case 17:
              _context.next = 19;
              return this.model("category_priv").priv(cate.id, roleid, 'visit');

            case 19:
              priv = _context.sent;

              if (priv) {
                _context.next = 23;
                break;
              }

              this.http.error = new Error('您所在的用户组,禁止访问本栏目！');
              return _context.abrupt('return', think.statusAction(700, this.http));

            case 23:
              _context.next = 25;
              return this.model("category").get_category(cate.id, 'model');

            case 25:
              models = _context.sent;

              //获取模型信息
              modellist = [];
              //console.log(111111111)

              if (!think.isEmpty(models)) {
                _context.next = 31;
                break;
              }

              modellist = null;
              _context.next = 51;
              break;

            case 31:
              _iterator = models.split(","), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 32:
              if (!_isArray) {
                _context.next = 38;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context.next = 35;
                break;
              }

              return _context.abrupt('break', 51);

            case 35:
              _ref2 = _iterator[_i++];
              _context.next = 42;
              break;

            case 38:
              _i = _iterator.next();

              if (!_i.done) {
                _context.next = 41;
                break;
              }

              return _context.abrupt('break', 51);

            case 41:
              _ref2 = _i.value;

            case 42:
              val = _ref2;
              modelobj = {};

              modelobj.id = val;
              _context.next = 47;
              return this.model("model").get_model(val, "title");

            case 47:
              modelobj.title = _context.sent;

              modellist.push(modelobj);

            case 49:
              _context.next = 32;
              break;

            case 51:
              this.assign('modellist', modellist);
              this.assign('model', models.split(","));

              this.meta_title = cate.meta_title ? cate.meta_title : cate.title; //标题
              this.keywords = cate.keywords ? cate.keywords : ''; //seo关键词
              this.description = cate.description ? cate.description : ""; //seo描述
              //频道页只显示模板，默认不读取任何内容
              //内容可以通过模板标签自行定制
              //获取面包屑信息 
              _context.next = 58;
              return this.model('category').get_parent_category(cate.id, true);

            case 58:
              breadcrumb = _context.sent;

              this.assign('breadcrumb', breadcrumb);
              console.log("cover breadcrumb===========" + (0, _stringify2.default)(breadcrumb));

              _context.next = 63;
              return this.model('category').get_sub_category(cate.id);

            case 63:
              get_sub_category = _context.sent;

              this.assign('cate_id', get_sub_category[0]);
              // console.log("cover get_sub_category==========="+JSON.stringify(get_sub_category));

              /* 模板赋值并渲染模板 */
              this.assign('category', cate);
              this.assign('group_id', 0);
              this.assign('sortid', 0);

              // console.log("cover category--------"+JSON.stringify(cate));
              temp = cate.template_index ? '' + cate.template_index : '' + this.http.action;

              //判断浏览客户端

              if (!checkMobile(this.userAgent())) {
                _context.next = 75;
                break;
              }

              temp = cate.template_m_index ? '' + cate.template_m_index : '' + this.http.action;
              console.log("cover index===========," + ('mobile/' + this.http.controller + '/' + temp));
              return _context.abrupt('return', this.display('mobile/' + this.http.controller + '/' + temp));

            case 75:
              console.log("cover index===========" + temp);
              console.log("cover category===========" + (0, _stringify2.default)(cate));
              return _context.abrupt('return', this.display(temp));

            case 78:
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

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=cover.js.map