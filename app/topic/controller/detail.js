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

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

  //详情页[核心]
  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var id, document, info, roleid, priv, str, img, cate, keywords, breadcrumb, previous, next, temp, model, pid, pinfo, i, nav, lastinfo, plist, ptree_, ptree, model_id, p_id, table, p_info;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              /* 标识正确性检测*/
              id = this.get('id') || 0;
              //if(!(id && think.isString(id))){
              //    this.fail('文档ID错误！');
              //} //if(!(id && think.isString(id))){
              //    this.fail('文档ID错误！');
              //}

              console.log("id=" + id);
              /* 获取详细信息*/
              document = this.model('document');
              _context.next = 5;
              return document.detail(id);

            case 5:
              info = _context.sent;

              if (!(info.errno == 702)) {
                _context.next = 9;
                break;
              }

              this.http.error = new Error(info.errmsg);
              return _context.abrupt('return', think.statusAction(702, this.http));

            case 9:
              /* 页码检测*/
              //TODO
              roleid = 8; //游客
              //访问控制

              if (!this.is_login) {
                _context.next = 14;
                break;
              }

              _context.next = 13;
              return this.model("member").where({ id: this.is_login }).getField('groupid', true);

            case 13:
              roleid = _context.sent;

            case 14:
              if (roleid == 8) {

                this.http.error = new Error('您尚未登录，请先登录！');
                console.log('您尚未登录，请先登录！');
                this.redirect("/uc/public/login");

                // return think.statusAction(700, this.http);
              }
              _context.next = 17;
              return this.model("category_priv").priv(info.category_id, roleid, 'visit');

            case 17:
              priv = _context.sent;

              if (priv) {
                _context.next = 21;
                break;
              }

              this.http.error = new Error('您所在的用户组,禁止访问本栏目！');
              return _context.abrupt('return', think.statusAction(700, this.http));

            case 21:
              //用户自己只可以看到自己发布的拓课信息，看不到其他用户的发布信息
              // console.log("info-------------"+JSON.stringify(info));
              // console.log("user-------------"+JSON.stringify(this.user));
              // this.http.error = new Error('您所在的用户组,禁止访问本栏目！');
              // return think.statusAction(702, this.http);

              //不同的设备,压缩不同的图片尺寸
              str = info.content;

              if (!think.isEmpty(str)) {
                img = void 0;

                if (checkMobile(this.userAgent())) {
                  //手机端
                  img = image_view(str, 640, 4);
                } else {
                  //pc端

                  img = image_view(str, 847, 0);
                }
                info.content = img;
                // console.log("img----------"+img);
              }

              //分类信息
              _context.next = 25;
              return this.category(info.category_id);

            case 25:
              cate = _context.sent;

              cate = think.extend({}, cate);
              //seo
              this.meta_title = info.title; //标题
              this.keywords = info.keyname ? info.keyname : ''; //seo关键词
              this.description = info.description ? info.description : ""; //seo描述
              //keywords
              keywords = void 0;

              if (!think.isEmpty(info.keyname)) {
                keywords = info.keyname.split(",");
              }
              this.assign("keywords", keywords);
              //访问统计
              _context.next = 35;
              return document.where({ id: info.id }).increment('view');

            case 35:
              if (!(!think.isEmpty(info.link_id) && info.link_id != 0)) {
                _context.next = 37;
                break;
              }

              return _context.abrupt('return', this.redirect(info.link_id));

            case 37:
              _context.next = 39;
              return this.model('category').get_parent_category(cate.id, true);

            case 39:
              breadcrumb = _context.sent;

              this.assign('breadcrumb', breadcrumb);
              console.log("breadcrumb===========" + (0, _stringify2.default)(breadcrumb));
              // 上一篇
              _context.next = 44;
              return document.where({ id: ['>', info.id], category_id: info.category_id, 'pid': 0, 'status': 1 }).order('id DESC').find();

            case 44:
              previous = _context.sent;

              this.assign('previous', previous);
              // 下一篇
              _context.next = 48;
              return document.where({ id: ['<', info.id], category_id: info.category_id, 'pid': 0, 'status': 1 }).order('id DESC').find();

            case 48:
              next = _context.sent;

              this.assign('next', next);

              //获取模板
              temp = void 0;
              _context.next = 53;
              return this.model('model').get_model(info.model_id, 'name');

            case 53:
              model = _context.sent;

              console.log("info.model_id-------------------" + info.model_id);
              //详情模版 TODO
              //手机版模版

              this.assign('category', cate);
              //console.log(info);
              //目录/文章/段落
              pid = void 0;
              pinfo = void 0;

              if (!(info.pid != 0)) {
                _context.next = 70;
                break;
              }

              i = info.id;
              //

            case 60:
              if (!(i != 0)) {
                _context.next = 68;
                break;
              }

              _context.next = 63;
              return document.where({ id: i }).find();

            case 63:
              nav = _context.sent;

              if (nav.pid == 0) {
                pinfo = nav;
                pid = nav.id;
              }
              i = nav.pid;

              _context.next = 60;
              break;

            case 68:
              _context.next = 72;
              break;

            case 70:
              pinfo = info;
              pid = info.id;

            case 72:
              _context.next = 74;
              return document.where({ topid: pid }).order("update_time DESC").find();

            case 74:
              lastinfo = _context.sent;

              //console.log(lasttime);
              this.assign("lastinfo", lastinfo);
              //console.log(pid);
              _context.next = 78;
              return document.where({ pid: pid }).order("level DESC").select();

            case 78:
              plist = _context.sent;

              this.assign("pinfo", pinfo);
              this.assign("plist", plist);
              //console.log(plist);
              if (plist[0]) {
                //let lastlevel = plist[0].level;
                //console.log(lastlevel);
                this.assign("lastlevel", plist[0]);
              }
              //console.log(plist);
              //文档无限级目录
              _context.next = 84;
              return document.where({ topid: pid }).field('id,title,pid,name,level as sort').select();

            case 84:
              ptree_ = _context.sent;
              ptree = get_children(ptree_, pid, 1);
              //console.log(ptree);

              this.assign('topid', pid);
              this.assign("ptree", ptree);

              //如果是目录并且模板为空,模块为视频时，目录id，显示最后更新的主题

              if (!(info.type == 1 && (think.isEmpty(info.template) || info.template == 0) && info.model_id == 6)) {
                _context.next = 100;
                break;
              }

              if (!plist[0]) {
                _context.next = 100;
                break;
              }

              console.log(111111);
              model_id = plist[0].model_id;
              p_id = plist[0].id;
              _context.next = 95;
              return this.model("model").get_table_name(model_id);

            case 95:
              table = _context.sent;
              _context.next = 98;
              return this.model(table).find(p_id);

            case 98:
              p_info = _context.sent;

              info = think.extend(info, p_info);

            case 100:
              _context.next = 102;
              return get_cover2(info.cover_id, this.setup.QINIU_DOMAIN_NAME);

            case 102:
              info.fmurl = _context.sent;

              this.assign('info', info);
              this.assign("desc", info.description);
              //判断浏览客户端

              if (!checkMobile(this.userAgent())) {
                _context.next = 116;
                break;
              }

              //手机模版
              if (!think.isEmpty(info.template) && info.template != 0) {
                temp = info.template; //todo 已设置详情模板
              } else if (!think.isEmpty(cate.template_m_detail)) {
                temp = cate.template_m_detail; //分类已经设置模板
              } else {
                temp = model;
              }

              //内容分页
              if (!think.isEmpty(info.content)) {
                info.content = info.content.split("_ueditor_page_break_tag_");
              }
              console.log("mobile detail-index------------," + ('mobile/' + this.http.controller + '/' + temp));

              if (!(is_weixin(this.userAgent()) && temp == 'mytuoke.html')) {
                _context.next = 113;
                break;
              }

              this.redirect('/uc/weixin/tuoke/id/' + id);
              _context.next = 114;
              break;

            case 113:
              return _context.abrupt('return', this.display('mobile/' + this.http.controller + '/' + temp));

            case 114:
              _context.next = 121;
              break;

            case 116:
              if (!think.isEmpty(info.template) && info.template != 0) {
                temp = info.template; //已设置详情模板
              } else if (!think.isEmpty(cate.template_detail)) {
                temp = cate.template_detail; //分类已经设置模板
              } else {
                temp = model;
              }
              // console.log("info----------------"+JSON.stringify(info));
              // console.log("cate----------------"+JSON.stringify(cate));
              console.log("temp-------------------" + temp + "," + model);
              //console.log(info);
              //内容分页
              if (!think.isEmpty(info.content)) {
                info.content = info.content.split("_ueditor_page_break_tag_");
              }
              console.log("detail----------------" + temp);
              // console.log("detail info----------------"+JSON.stringify(info));
              return _context.abrupt('return', this.display(temp));

            case 121:
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
   * 下载
   */


  _class.prototype.downloadgetidAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var id, db, info, file_id, dlink, location, d, qiniu, instance, pan, _iterator, _isArray, _i, _ref3, v, varr;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = this.get("id").split("||");
              db = this.model('document_download');
              _context2.next = 4;
              return db.find(id[0]);

            case 4:
              info = _context2.sent;

              console.log(info);
              file_id = info.file_id;

              console.log(file_id);
              dlink = void 0;

              if (!(id[1] == 1)) {
                _context2.next = 37;
                break;
              }

              _context2.next = 12;
              return this.model('file').where({ id: file_id }).getField("location", true);

            case 12:
              location = _context2.sent;

              console.log(location);
              _context2.next = 16;
              return get_file(file_id);

            case 16:
              d = _context2.sent;

              if (!(this.setup.IS_QINIU == 1 && location == 1)) {
                _context2.next = 25;
                break;
              }

              //七牛下载
              // dlink = await get_file(file_id,"savename",true);
              qiniu = think.service("qiniu");
              instance = new qiniu();
              _context2.next = 22;
              return instance.download(d.savename);

            case 22:
              dlink = _context2.sent;
              _context2.next = 26;
              break;

            case 25:
              // 本地下载
              dlink = d.savepath + d.savename + "?attname=";

            case 26:
              console.log(dlink);
              //访问统计
              _context2.next = 29;
              return db.where({ id: info.id }).increment('download');

            case 29:
              //return this.redirect(dlink);
              this.assign("durl", dlink);

              if (!checkMobile(this.userAgent())) {
                _context2.next = 34;
                break;
              }

              return _context2.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 34:
              return _context2.abrupt('return', this.display());

            case 35:
              _context2.next = 70;
              break;

            case 37:
              if (!(id[1] == 2)) {
                _context2.next = 44;
                break;
              }

              dlink = id[2];
              _context2.next = 41;
              return db.where({ id: info.id }).increment('download');

            case 41:
              return _context2.abrupt('return', this.redirect(dlink));

            case 44:
              if (!(id[1] == 3)) {
                _context2.next = 70;
                break;
              }

              //返回网盘提取码
              pan = info.panurl.split("\r\n");
              _iterator = pan, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 47:
              if (!_isArray) {
                _context2.next = 53;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context2.next = 50;
                break;
              }

              return _context2.abrupt('break', 63);

            case 50:
              _ref3 = _iterator[_i++];
              _context2.next = 57;
              break;

            case 53:
              _i = _iterator.next();

              if (!_i.done) {
                _context2.next = 56;
                break;
              }

              return _context2.abrupt('break', 63);

            case 56:
              _ref3 = _i.value;

            case 57:
              v = _ref3;
              varr = v.split("|");

              console.log(varr[1]);
              if (!think.isEmpty(varr[2]) && think._.trim(id[2]) == think._.trim(varr[1])) {
                this.assign({
                  title: varr[0],
                  durl: varr[1],
                  sn: varr[2]
                });
              }

            case 61:
              _context2.next = 47;
              break;

            case 63:
              _context2.next = 65;
              return db.where({ id: info.id }).increment('download');

            case 65:
              if (!checkMobile(this.userAgent())) {
                _context2.next = 69;
                break;
              }

              return _context2.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 69:
              return _context2.abrupt('return', this.display());

            case 70:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function downloadgetidAction() {
      return _ref2.apply(this, arguments);
    }

    return downloadgetidAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=detail.js.map