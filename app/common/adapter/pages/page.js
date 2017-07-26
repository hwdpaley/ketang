// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';
/**
 * base adapter
 */
/*
let data = await this.model('user').where(map).page(this.get('page')).countSelect();//查询数据库
let Pages = think.adapter("pages", "page"); //加载名为 page 的 pages Adapter
let pages = new Pages(); //实例化 Adapter
let page = pages.pages(data);//传入数据库查询返回的数据集
this.assign('list', data.data);//输出到模板
*/

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$adapter$base) {
  (0, _inherits3.default)(_class, _think$adapter$base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _think$adapter$base.apply(this, arguments));
  }

  /**
   * init
   * @return {[]}         []
   */
  _class.prototype.init = function init(http) {
    this.thinkhttp = http;
  };

  /**
   *
   * @param pagerData
   * @returns {*}
   */


  _class.prototype.pages = function pages(pagerData) {
    var http = this.thinkhttp;
    var pagerHtml = void 0;
    if (pagerData.totalPages > 1) {

      var pageUrl = pagerData.url;
      if (!pageUrl) {
        var htmlMaps = {
          '<': '<',
          '>': '>',
          '"': '"e;',
          "'": "'"
        };
        var escape_html = function escape_html(str) {
          return (str + "").replace(/[<>'"]/g, function (a) {
            return htmlMaps[a];
          });
        };
        //var prefix = "?";
        var prefix = "?";
        var querys = [];
        for (var name in http.query) {
          if (name == 'page') continue;
          querys.push(escape_html(name) + '=' + escape_html(http.query[name]));
        }
        prefix += querys.join("&");
        if (querys.length) {
          prefix += "&";
        }
        pageUrl = prefix + "page=${page}";
      }
      pagerHtml = '<div class="btn-group m-t-none m-b-none">';
      if (!pagerData.hideDesc) {
        pagerHtml += '<a class="disabled btn btn-default"><span>\u5171\u6709' + pagerData.count + '\u6761\u8BB0\u5F55\uFF0C\u5171' + pagerData.totalPages + '\u9875</span></a>';
      }
      if (pagerData.currentPage > 1) {
        pagerHtml += '<a class="prev btn btn-default" href="' + pageUrl.replace('${page}', pagerData.currentPage - 1) + '">\u4E0A\u4E00\u9875</a>';
      }
      //var num = pagerData.numsPerPage || 3;
      var num = 5;
      var pageIndex = [];
      var page = pagerData.currentPage | 0 || 1;
      for (var i = page - num; i <= page + num; i++) {
        if (i >= 1 && i <= pagerData.totalPages) {
          pageIndex.push(i);
        };
      }
      if (pageIndex[0] > 1) {
        pagerHtml += '<a  class="btn btn-default"  href="' + pageUrl.replace('${page}', 1) + '">1</a>';
      }
      if (pageIndex[0] > 2) {
        pagerHtml += '<a class="disabled btn btn-default"><span>...</span></a>';
      }

      for (var i = 0, length = pageIndex.length; i < length; i++) {
        var p = pageIndex[i];
        if (p == page) {
          pagerHtml += '<a class="active btn btn-default" href="' + pageUrl.replace('${page}', p) + '"> ' + p + ' </a>';
        } else {
          pagerHtml += '<a class="btn btn-default" href="' + pageUrl.replace('${page}', p) + '">' + p + '</a>';
        }
      }

      if (pageIndex.length > 1) {
        var last = pageIndex[pageIndex.length - 1];
        if (last < pagerData.totalPages - 1) {
          pagerHtml += '<a class="disabled btn btn-default"><span>...</span></a>';
        };
        if (last < pagerData.totalPages) {
          pagerHtml += '<a class="btn btn-default" href="' + pageUrl.replace('${page}', pagerData.totalPages) + '">' + pagerData.totalPages + '</a>';
        };
      };

      if (page < pagerData.totalPages) {
        pagerHtml += '<a  class="next btn btn-default" href="' + pageUrl.replace('${page}', pagerData.currentPage + 1) + '">\u4E0B\u4E00\u9875</a>';
      };
      pagerHtml += '</div>';
      return pagerHtml;
    }
  };

  return _class;
}(think.adapter.base);

exports.default = _class;
//# sourceMappingURL=page.js.map