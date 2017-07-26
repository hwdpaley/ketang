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
  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var get, cate, sp, roleid, priv, breadcrumb, temp;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //auto render template file index_index.html
              get = this.get('category') || 0;
              _context.next = 3;
              return this.category(get);

            case 3:
              cate = _context.sent;
              _context.next = 6;
              return this.model('category_sp').find({ where: { cid: cate.id } });

            case 6:
              sp = _context.sent;

              cate = think.extend({}, cate, sp);
              //console.log(cate);
              //访问控制
              roleid = 8; //游客

              if (!this.is_login) {
                _context.next = 13;
                break;
              }

              _context.next = 12;
              return this.model("member").where({ id: this.is_login }).getField('groupid', true);

            case 12:
              roleid = _context.sent;

            case 13:
              _context.next = 15;
              return this.model("category_priv").priv(cate.id, roleid, 'visit');

            case 15:
              priv = _context.sent;

              if (priv) {
                _context.next = 19;
                break;
              }

              this.http.error = new Error('您所在的用户组,禁止访问本栏目！');
              return _context.abrupt('return', think.statusAction(702, this.http));

            case 19:

              this.meta_title = cate.meta_title ? cate.meta_title : cate.title; //标题
              this.keywords = cate.keywords ? cate.keywords : ''; //seo关键词
              this.description = cate.description ? cate.description : ""; //seo描述
              //频道页只显示模板，默认不读取任何内容
              //内容可以通过模板标签自行定制
              //获取面包屑信息
              _context.next = 24;
              return this.model('category').get_parent_category(cate.id, true);

            case 24:
              breadcrumb = _context.sent;

              //console.log(breadcrumb);
              this.assign('breadcrumb', breadcrumb);
              /* 模板赋值并渲染模板 */
              this.assign('category', cate);
              temp = void 0;

              console.log(sp);
              //判断浏览客户端

              if (!checkMobile(this.userAgent())) {
                _context.next = 44;
                break;
              }

              _context.t0 = cate.ismt;
              _context.next = _context.t0 === 0 ? 33 : _context.t0 === 1 ? 36 : _context.t0 === 2 ? 38 : 41;
              break;

            case 33:
              //系统模版
              temp = cate.template_m_index ? cate.template_m_index : this.http.action;
              temp = 'mobile/' + this.http.controller + '/' + temp;
              return _context.abrupt('break', 41);

            case 36:
              //用户的自定义模版统一放在view/sp/目录下，可以但文件或者文件夹
              temp = think.ROOT_PATH + '/view/sp/' + cate.sp_temp_m;
              return _context.abrupt('break', 41);

            case 38:
              //转跳 http://www.xxxx.com
              temp = cate.m_url;
              return _context.abrupt('return', this.redirect(temp));

            case 41:
              return _context.abrupt('return', this.display(temp));

            case 44:
              _context.t1 = cate.ispct;
              _context.next = _context.t1 === 0 ? 47 : _context.t1 === 1 ? 50 : _context.t1 === 2 ? 52 : 55;
              break;

            case 47:
              //系统模版
              temp = cate.template_index ? cate.template_index : this.http.action;
              temp = this.http.controller + '/' + temp;
              return _context.abrupt('break', 55);

            case 50:
              //用户的自定义模版统一放在view/sp/目录下，可以但文件或者文件夹
              temp = think.ROOT_PATH + '/view/sp/' + cate.sp_temp_pc;
              return _context.abrupt('break', 55);

            case 52:
              //转跳 http://www.xxxx.com
              temp = cate.pc_url;
              return _context.abrupt('return', this.redirect(temp));

            case 55:
              return _context.abrupt('return', this.display(temp));

            case 56:
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
//# sourceMappingURL=sp.js.map