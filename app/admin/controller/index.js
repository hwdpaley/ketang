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

var _os = require('os');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 后台首页控制器
 * @author Tony <912697590@qq.com>
 * http://www.gzxinbibo.com
 */
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
   * index action
   * @return {Promise} []
   */

  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var mysqlv, node, user_count, wxuser_count, action_count, cate_count, model_count, ext_count, type_count;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //auto render template file index_index.html
              //console.log(think.parseConfig(true,think.config("db")).prefix);
              //await this.model("action").log("chufa","member","sdffds",this.user.uid,this.ip(),this.http.url);//测试日志行为
              //服务器信息
              this.meta_title = this.locale('meta_title_admin');
              _context.next = 3;
              return this.model('mysql').query("select version()");

            case 3:
              mysqlv = _context.sent;
              node = process.versions;

              this.assign({
                'version': think.BIEBER_VERSION,
                'OS': (0, _os.type)(),
                'nodejs_v': node.node,
                'thinkjs': think.version,
                'mysqlv': mysqlv[0]['version()']
              });
              //用户统计
              _context.next = 8;
              return this.model("member").count('id');

            case 8:
              user_count = _context.sent;
              _context.next = 11;
              return this.model("wx_user").count('id');

            case 11:
              wxuser_count = _context.sent;
              _context.next = 14;
              return this.model("action").count("id");

            case 14:
              action_count = _context.sent;
              _context.next = 17;
              return this.model("category").count("id");

            case 17:
              cate_count = _context.sent;
              _context.next = 20;
              return this.model("model").count("id");

            case 20:
              model_count = _context.sent;
              _context.next = 23;
              return this.model("ext").count();

            case 23:
              ext_count = _context.sent;
              _context.next = 26;
              return this.model("type").count();

            case 26:
              type_count = _context.sent;

              this.assign({
                wxuser_count: wxuser_count,
                user_count: user_count,
                action_count: action_count,
                cate_count: cate_count,
                model_count: model_count,
                ext_count: ext_count,
                type_count: type_count
              });
              //console.log(111)
              return _context.abrupt('return', this.display());

            case 29:
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
//# sourceMappingURL=index.js.map