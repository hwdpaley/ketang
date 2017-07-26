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
    _class.prototype.indexAction = function indexAction() {
        //auto render template file index_index.html
        return this.display();
    };

    _class.prototype.snAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var prefix, oo;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            // let date = new Date();
                            // let y = date.getFullYear();
                            // let m = date.getMonth()+1 <10 ?"0"+(date.getMonth()+1):date.getMonth()+1;
                            // let d = date.getDate()<10?"0"+date.getDate():date.getDate();
                            // let v_timestr = y+m+d;
                            prefix = think.parseConfig(true, think.config("db")).prefix;
                            _context.next = 3;
                            return this.model().query('call seq_no(1)');

                        case 3:
                            oo = _context.sent;
                            //TODO
                            // let order_no= await this.query(`SELECT CONCAT(${v_timestr},LPAD(order_sn,7,0)) AS order_sn FROM cmswing_order_seq WHERE timestr=${v_timestr}`);
                            this.end(oo[0][0]["order_sn"]);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function snAction() {
            return _ref.apply(this, arguments);
        }

        return snAction;
    }();

    /**
     * 
     */


    _class.prototype.tuokeAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var id, document, info, roleid, islogin, str, img, cate, keywords, breadcrumb, previous, next, temp, model, pid, pinfo, i, nav, lastinfo, plist, ptree_, ptree, model_id, p_id, table, p_info, pic, openid, map, res;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            id = this.get("id").split("||");
                            document = this.model('document');
                            _context2.next = 4;
                            return document.detail(id);

                        case 4:
                            info = _context2.sent;

                            this.assign("docid", id);

                            /* 页码检测*/
                            //TODO
                            roleid = 8; //游客
                            //访问控制

                            _context2.next = 9;
                            return this.islogin();

                        case 9:
                            islogin = _context2.sent;
                            ;
                            // console.log("login--------"+JSON.stringify(islogin));

                            if (!islogin) {
                                _context2.next = 15;
                                break;
                            }

                            _context2.next = 14;
                            return this.model("member").where({ id: islogin }).getField('groupid', true);

                        case 14:
                            roleid = _context2.sent;

                        case 15:
                            if (!(roleid == 8)) {
                                _context2.next = 18;
                                break;
                            }

                            this.http.error = new Error('您尚未登录，请先登录！');
                            return _context2.abrupt('return', think.statusAction(700, this.http));

                        case 18:
                            // if(info.uid!=1){
                            //   if(info.uid!=islogin){
                            //     this.http.error = new Error('无查看权限！');
                            //     return think.statusAction(700, this.http);
                            //   }
                            // }
                            // // console.log("info.category_id----------" + info.category_id + "," + info.uid + "," + islogin);
                            // let priv = await this.model("category_priv").priv(info.category_id, roleid, 'visit');
                            // if(!priv){
                            //   this.http.error = new Error('您所在的用户组,禁止访问本栏目！');
                            //   return think.statusAction(700, this.http);
                            // }
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
                            }
                            //console.log(info);
                            //分类信息
                            _context2.next = 22;
                            return this.category(info.category_id);

                        case 22:
                            cate = _context2.sent;

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
                            _context2.next = 32;
                            return document.where({ id: info.id }).increment('view');

                        case 32:
                            if (!(!think.isEmpty(info.link_id) && info.link_id != 0)) {
                                _context2.next = 34;
                                break;
                            }

                            return _context2.abrupt('return', this.redirect(info.link_id));

                        case 34:
                            _context2.next = 36;
                            return this.model('category').get_parent_category(cate.id, true);

                        case 36:
                            breadcrumb = _context2.sent;

                            this.assign('breadcrumb', breadcrumb);

                            // 上一篇
                            _context2.next = 40;
                            return document.where({ id: ['>', info.id], category_id: info.category_id, 'pid': 0, 'status': 1 }).order('id DESC').find();

                        case 40:
                            previous = _context2.sent;

                            this.assign('previous', previous);
                            // 下一篇
                            _context2.next = 44;
                            return document.where({ id: ['<', info.id], category_id: info.category_id, 'pid': 0, 'status': 1 }).order('id DESC').find();

                        case 44:
                            next = _context2.sent;

                            this.assign('next', next);

                            //获取模板
                            temp = void 0;
                            _context2.next = 49;
                            return this.model('model').get_model(info.model_id, 'name');

                        case 49:
                            model = _context2.sent;


                            //详情模版 TODO
                            //手机版模版

                            this.assign('category', cate);
                            //console.log(info);
                            //目录/文章/段落
                            pid = void 0;
                            pinfo = void 0;

                            if (!(info.pid != 0)) {
                                _context2.next = 65;
                                break;
                            }

                            i = info.id;
                            //

                        case 55:
                            if (!(i != 0)) {
                                _context2.next = 63;
                                break;
                            }

                            _context2.next = 58;
                            return document.where({ id: i }).find();

                        case 58:
                            nav = _context2.sent;

                            if (nav.pid == 0) {
                                pinfo = nav;
                                pid = nav.id;
                            }
                            i = nav.pid;

                            _context2.next = 55;
                            break;

                        case 63:
                            _context2.next = 67;
                            break;

                        case 65:
                            pinfo = info;
                            pid = info.id;

                        case 67:
                            _context2.next = 69;
                            return document.where({ topid: pid }).order("update_time DESC").find();

                        case 69:
                            lastinfo = _context2.sent;

                            //console.log(lasttime);
                            this.assign("lastinfo", lastinfo);
                            //console.log(pid);
                            _context2.next = 73;
                            return document.where({ pid: pid }).order("level DESC").select();

                        case 73:
                            plist = _context2.sent;

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
                            _context2.next = 79;
                            return document.where({ topid: pid }).field('id,title,pid,name,level as sort').select();

                        case 79:
                            ptree_ = _context2.sent;
                            ptree = get_children(ptree_, pid, 1);
                            //console.log(ptree);

                            this.assign('topid', pid);
                            this.assign("ptree", ptree);

                            //如果是目录并且模板为空,模块为视频时，目录id，显示最后更新的主题

                            if (!(info.type == 1 && (think.isEmpty(info.template) || info.template == 0) && info.model_id == 6)) {
                                _context2.next = 95;
                                break;
                            }

                            if (!plist[0]) {
                                _context2.next = 95;
                                break;
                            }

                            console.log(111111);
                            model_id = plist[0].model_id;
                            p_id = plist[0].id;
                            _context2.next = 90;
                            return this.model("model").get_table_name(model_id);

                        case 90:
                            table = _context2.sent;
                            _context2.next = 93;
                            return this.model(table).find(p_id);

                        case 93:
                            p_info = _context2.sent;

                            info = think.extend(info, p_info);

                        case 95:
                            if (!checkMobile(this.userAgent())) {
                                _context2.next = 101;
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
                            return _context2.abrupt('return', this.display('mobile/' + this.http.controller + '/' + temp));

                        case 101:
                            if (!think.isEmpty(info.template) && info.template != 0) {
                                temp = info.template; //已设置详情模板
                            } else if (!think.isEmpty(cate.template_detail)) {
                                temp = cate.template_detail; //分类已经设置模板
                            } else {
                                temp = model;
                            }
                            // console.log(temp);
                            //console.log(info);
                            //内容分页
                            if (!think.isEmpty(info.content)) {
                                info.content = info.content.split("_ueditor_page_break_tag_");
                            }

                        case 103:
                            _context2.next = 105;
                            return get_cover(info.fmurl);

                        case 105:
                            pic = _context2.sent;

                            console.log("tuoke.  pic---------" + (0, _stringify2.default)(pic));
                            info.fmurl = '//' + this.setup.QINIU_DOMAIN_NAME + '/' + pic.path;
                            _context2.next = 110;
                            return get_cover(info.twourl);

                        case 110:
                            pic = _context2.sent;

                            info.twourl = '//' + this.setup.QINIU_DOMAIN_NAME + '/' + pic.path;
                            // console.log("tuokeAction---------" + JSON.stringify(info));
                            this.assign("info", info);
                            openid = 'oXJPVwN4JY0Y3fAVDuvl3EWh2_uQ'; // await this.session("wx_openid");

                            map = {
                                openid: openid,
                                docid: id
                            };
                            _context2.next = 117;
                            return this.model("doc_wxuser").where(map).find();

                        case 117:
                            res = _context2.sent;

                            //是否已经报名
                            if (res.openid != undefined) {
                                this.assign("pay_type", 1);
                            } else {
                                this.assign("pay_type", 0);
                            }

                            console.log("tuokeAction========" + (this.http.controller + '/' + this.http.action));

                            if (!checkMobile(this.userAgent())) {
                                _context2.next = 124;
                                break;
                            }

                            return _context2.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 124:
                            return _context2.abrupt('return', this.display());

                        case 125:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function tuokeAction() {
            return _ref2.apply(this, arguments);
        }

        return tuokeAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=tuoke.js.map