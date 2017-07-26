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

var _thinkPagination = require('think-pagination');

var _thinkPagination2 = _interopRequireDefault(_thinkPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  //列表页[核心]
  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var method, get, id, query, cate, roleid, priv, models, modellist, _iterator, _isArray, _i, _ref2, val, modelobj, subcate, num, pagenum, map, o, order, sortid, sortarr, nsobj, sort, typevar, _iterator2, _isArray2, _i2, _ref3, _val, _iterator3, _isArray3, _i3, _ref4, v, searchtxt, searcharr, arr, len, i, obj, optionidarr, valuearr, _iterator4, _isArray4, _i4, _ref5, _v, qarr, vv, group_id, data, html, breadcrumb, temp, _iterator5, _isArray5, _i5, _ref6, _v2, _arr, _iterator6, _isArray6, _i6, _ref7, _i7;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(GetDateStr(5) + " " + "00:00:00");
              console.log(new Date(GetDateStr(0) + " " + "23:59:59").getTime());
              console.log("this.http.url------------" + this.http.url);
              //跨域
              method = this.http.method.toLowerCase();

              if (!(method === "options")) {
                _context.next = 8;
                break;
              }

              this.setCorsHeader();
              this.end();
              return _context.abrupt('return');

            case 8:
              this.setCorsHeader();
              get = this.get('category') || 0;
              id = 0;
              query = get.split("-");

              if (get != 0) {
                id = query[0];
              }

              _context.next = 15;
              return this.category(id);

            case 15:
              cate = _context.sent;

              cate = think.extend({}, cate);
              roleid = 8; //游客
              //访问控制

              if (!this.is_login) {
                _context.next = 25;
                break;
              }

              this.assign('userid', this.is_login);
              _context.next = 22;
              return this.model("member").where({ id: this.is_login }).getField('groupid', true);

            case 22:
              roleid = _context.sent;
              _context.next = 26;
              break;

            case 25:
              this.assign('userid', 0);

            case 26:
              _context.next = 28;
              return this.model("category_priv").priv(cate.id, roleid, 'visit');

            case 28:
              priv = _context.sent;

              if (priv) {
                _context.next = 32;
                break;
              }

              this.http.error = new Error('您所在的用户组,禁止访问本栏目！');
              return _context.abrupt('return', think.statusAction(702, this.http));

            case 32:
              _context.next = 34;
              return this.model("category").get_category(cate.id, 'model');

            case 34:
              models = _context.sent;

              //获取模型信息
              modellist = [];
              //console.log(111111111)

              if (!think.isEmpty(models)) {
                _context.next = 40;
                break;
              }

              modellist = null;
              _context.next = 60;
              break;

            case 40:
              _iterator = models.split(","), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 41:
              if (!_isArray) {
                _context.next = 47;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context.next = 44;
                break;
              }

              return _context.abrupt('break', 60);

            case 44:
              _ref2 = _iterator[_i++];
              _context.next = 51;
              break;

            case 47:
              _i = _iterator.next();

              if (!_i.done) {
                _context.next = 50;
                break;
              }

              return _context.abrupt('break', 60);

            case 50:
              _ref2 = _i.value;

            case 51:
              val = _ref2;
              modelobj = {};

              modelobj.id = val;
              _context.next = 56;
              return this.model("model").get_model(val, "title");

            case 56:
              modelobj.title = _context.sent;

              modellist.push(modelobj);

            case 58:
              _context.next = 41;
              break;

            case 60:
              this.assign('modellist', modellist);
              this.assign('model', models.split(","));
              //console.log(cate);
              //获取当前分类的所有子栏目
              _context.next = 64;
              return this.model('category').get_sub_category(cate.id);

            case 64:
              subcate = _context.sent;

              // console.log(subcate);
              subcate.push(cate.id);
              //获取模型列表数据个数
              // console.log("cate-------"+JSON.stringify(cate));
              num = void 0;

              if (!(cate.list_row > 0)) {
                _context.next = 71;
                break;
              }

              num = cate.list_row;
              _context.next = 79;
              break;

            case 71:
              if (!(cate.model.split(",").length == 1)) {
                _context.next = 78;
                break;
              }

              _context.next = 74;
              return this.model('model').get_model(cate.model, "list_row");

            case 74:
              pagenum = _context.sent;

              if (pagenum != 0) {
                num = pagenum;
              }
              _context.next = 79;
              break;

            case 78:
              num = this.config("db.nums_per_page");

            case 79:
              if (checkMobile(this.userAgent())) {
                num = 10;
              }
              // console.log("num-------"+JSON.stringify(num));
              //console.log(subcate);
              map = {
                'pid': 0,
                'status': 1,
                'category_id': ['IN', subcate]
              };

              if (this.is_login) {
                map.uid = ['IN', [1, this.is_login]];
              } else {
                map.uid = ['IN', 1];
              }
              //排序
              o = {};

              o.level = 'DESC';
              order = query[1] || 0;

              order = Number(order);
              _context.t0 = order;
              _context.next = _context.t0 === 1 ? 89 : _context.t0 === 2 ? 91 : _context.t0 === 3 ? 93 : _context.t0 === 4 ? 95 : _context.t0 === 5 ? 98 : _context.t0 === 6 ? 101 : _context.t0 === 7 ? 105 : 108;
              break;

            case 89:
              o.update_time = 'ASC';
              return _context.abrupt('break', 109);

            case 91:
              o.view = 'DESC';
              return _context.abrupt('break', 109);

            case 93:
              o.view = 'ASC';
              return _context.abrupt('break', 109);

            case 95:
              map.create_time = { ">": new Date(GetDateStr(0) + " " + "00:00:00").getTime(), "<": new Date(GetDateStr(0) + " " + "23:59:59").getTime() };
              o.update_time = 'DESC';
              return _context.abrupt('break', 109);

            case 98:
              map.create_time = { ">": new Date(GetDateStr(1) + " " + "00:00:00").getTime(), "<": new Date(GetDateStr(5) + " " + "23:59:59").getTime() };
              o.update_time = 'DESC';
              return _context.abrupt('break', 109);

            case 101:
              map.create_time = { "<": new Date().getTime() };
              map.deadline = { ">": new Date().getTime() };
              o.update_time = 'DESC';
              return _context.abrupt('break', 109);

            case 105:
              map.deadline = { "<": new Date().getTime() };
              o.update_time = 'DESC';
              return _context.abrupt('break', 109);

            case 108:
              o.update_time = 'DESC';

            case 109:
              this.assign('order', order);
              // 获取分类信息
              sortid = query[3] || 0;

              if (!think.isEmpty(sortid)) {
                map.sort_id = sortid;
              }
              sortarr = query[4] || null;
              nsobj = {};
              _context.next = 116;
              return this.model("category").get_category(cate.id, 'documentsorts');

            case 116:
              sort = _context.sent;

              if (!sort) {
                _context.next = 170;
                break;
              }

              this.assign("sorturl", get.split("-")[4]);
              sort = JSON.parse(sort);
              if (sortid == 0) {
                sortid = sort.defaultshow;
              }
              _context.next = 123;
              return this.model("typevar").where({ sortid: sortid }).order('displayorder ASC').select();

            case 123:
              typevar = _context.sent;
              _iterator2 = typevar, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

            case 125:
              if (!_isArray2) {
                _context.next = 131;
                break;
              }

              if (!(_i2 >= _iterator2.length)) {
                _context.next = 128;
                break;
              }

              return _context.abrupt('break', 169);

            case 128:
              _ref3 = _iterator2[_i2++];
              _context.next = 135;
              break;

            case 131:
              _i2 = _iterator2.next();

              if (!_i2.done) {
                _context.next = 134;
                break;
              }

              return _context.abrupt('break', 169);

            case 134:
              _ref3 = _i2.value;

            case 135:
              _val = _ref3;
              _context.next = 138;
              return this.model("typeoption").where({ optionid: _val.optionid }).find();

            case 138:
              _val.option = _context.sent;

              if (!(_val.option.type == 'select' || _val.option.type == 'radio')) {
                _context.next = 143;
                break;
              }

              if (!think.isEmpty(_val.option.rules)) {
                _val.option.rules = JSON.parse(_val.option.rules);
                _val.rules = parse_type_attr(_val.option.rules.choices);
                _val.option.rules.choices = parse_config_attr(_val.option.rules.choices);
                //console.log(val.rules);
              }

              _context.next = 167;
              break;

            case 143:
              if (!(_val.option.type == 'checkbox')) {
                _context.next = 166;
                break;
              }

              if (think.isEmpty(_val.option.rules)) {
                _context.next = 164;
                break;
              }

              _val.option.rules = JSON.parse(_val.option.rules);
              _val.rules = parse_type_attr(_val.option.rules.choices);
              console.log(_val.rules);
              _iterator3 = _val.rules, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

            case 149:
              if (!_isArray3) {
                _context.next = 155;
                break;
              }

              if (!(_i3 >= _iterator3.length)) {
                _context.next = 152;
                break;
              }

              return _context.abrupt('break', 163);

            case 152:
              _ref4 = _iterator3[_i3++];
              _context.next = 159;
              break;

            case 155:
              _i3 = _iterator3.next();

              if (!_i3.done) {
                _context.next = 158;
                break;
              }

              return _context.abrupt('break', 163);

            case 158:
              _ref4 = _i3.value;

            case 159:
              v = _ref4;

              v.id = "l>" + v.id;

            case 161:
              _context.next = 149;
              break;

            case 163:
              _val.option.rules.choices = parse_config_attr(_val.option.rules.choices);
              //console.log(val.rules);

            case 164:
              _context.next = 167;
              break;

            case 166:
              if (_val.option.type == 'range') {
                if (!think.isEmpty(_val.option.rules)) {
                  searchtxt = JSON.parse(_val.option.rules).searchtxt;
                  searcharr = [];

                  if (!think.isEmpty(searchtxt)) {
                    arr = searchtxt.split(",");
                    len = arr.length;

                    for (i = 0; i < len; i++) {
                      obj = {};

                      if (!think.isEmpty(arr[i - 1])) {
                        if (i == 1) {
                          obj.id = 'd>' + arr[i];
                          obj.name = '低于' + arr[i];
                          obj.pid = 0;
                          searcharr.push(obj);
                        } else {
                          obj.id = arr[i - 1] + '>' + arr[i];
                          obj.name = arr[i - 1] + "-" + arr[i];
                          obj.pid = 0;
                          searcharr.push(obj);
                        }
                      }
                    }
                    searcharr.push({ id: 'u>' + arr[len - 1], name: '高于' + arr[len - 1], pid: 0 });
                  }
                  //console.log(searcharr);
                  _val.option.rules = JSON.parse(_val.option.rules);
                  _val.rules = searcharr;
                  // val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                }
              }

            case 167:
              _context.next = 125;
              break;

            case 169:
              // console.log(typevar);
              this.assign("typevar", typevar);

            case 170:
              if (think.isEmpty(sortarr)) {
                _context.next = 193;
                break;
              }

              sortarr = sortarr.split("|");
              nsobj = {};
              optionidarr = [];
              valuearr = [];
              _iterator4 = sortarr, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

            case 176:
              if (!_isArray4) {
                _context.next = 182;
                break;
              }

              if (!(_i4 >= _iterator4.length)) {
                _context.next = 179;
                break;
              }

              return _context.abrupt('break', 192);

            case 179:
              _ref5 = _iterator4[_i4++];
              _context.next = 186;
              break;

            case 182:
              _i4 = _iterator4.next();

              if (!_i4.done) {
                _context.next = 185;
                break;
              }

              return _context.abrupt('break', 192);

            case 185:
              _ref5 = _i4.value;

            case 186:
              _v = _ref5;
              qarr = _v.split("_");

              nsobj[qarr[0]] = qarr[1];
              if (qarr[1] != 0) {
                vv = qarr[1].split(">");
                //console.log(vv);

                if (vv[0] == "d" && !think.isEmpty(vv[1])) {
                  map["t." + qarr[0]] = ["<", vv[1]];
                } else if (vv[0] == "u" && !think.isEmpty(vv[1])) {
                  map["t." + qarr[0]] = [">", vv[1]];
                } else if (vv[0] == "l" && !think.isEmpty(vv[1])) {
                  map["t." + qarr[0]] = ["like", '%"' + vv[1] + '"%'];
                } else if (!think.isEmpty(vv[0]) && !think.isEmpty(vv[1])) {
                  map["t." + qarr[0]] = ["BETWEEN", Number(vv[0]), Number(vv[1])];
                } else {
                  map["t." + qarr[0]] = qarr[1];
                }
              }

            case 190:
              _context.next = 176;
              break;

            case 192:
              map.fid = cate.id;
              // where.optionid = ["IN",optionidarr];
              // where['value'] = ["IN",valuearr];
              // let type= await this.model("typeoptionvar").where(where).select();
              //  console.log(type);
              // console.log(map);

            case 193:
              console.log("controller--------" + this.http.url);
              console.log("map--------" + (0, _stringify2.default)(map));
              //return false;
              //console.log(sort);
              this.assign("sort", sort);
              this.assign("nsobj", nsobj);

              this.assign("sortid", sortid);
              group_id = 0;

              if (!think.isEmpty(query[2]) && query[2] != 0) {
                map.group_id = query[2];
                group_id = map.group_id;
              }
              this.assign("group_id", group_id);
              //console.log(map);
              data = void 0;

              if (think.isEmpty(sortarr)) {
                _context.next = 208;
                break;
              }

              _context.next = 205;
              return this.model('document').join({
                table: "type_optionvalue" + sortid,
                join: "left", // 有 left,right,inner 3 个值
                as: "t",
                on: ["id", "tid"]

              }).where(map).page(this.param('page'), num).order(o).countSelect();

            case 205:
              data = _context.sent;
              _context.next = 211;
              break;

            case 208:
              _context.next = 210;
              return this.model('document').where(map).page(this.param('page'), num).order(o).countSelect();

            case 210:
              data = _context.sent;

            case 211:
              // console.log("list-data------"+JSON.stringify(data));
              // let data = await this.model('document').join({
              //     typeoptionvar: {
              //         join: "left", // 有 left,right,inner 3 个值
              //         as: "c",
              //         on: ["sort_id", "sortid"]
              //     }
              // }).where(map).page(this.param('page'),num).order('update_time DESC').countSelect();
              html = (0, _thinkPagination2.default)(data, this.http, {
                desc: false, //show description
                pageNum: 2,
                url: '', //page url, when not set, it will auto generated
                class: 'nomargin', //pagenation extra class
                text: {
                  next: '下一页',
                  prev: '上一页',
                  total: 'count: ${count} , pages: ${pages}'
                }
              });

              this.assign('pagination', html);

              //seo
              this.meta_title = cate.meta_title ? cate.meta_title : cate.title; //标题
              this.keywords = cate.keywords ? cate.keywords : ''; //seo关键词
              this.description = cate.description ? cate.description : ""; //seo描述

              //获取面包屑信息
              _context.next = 218;
              return this.model('category').get_parent_category(cate.id, true);

            case 218:
              breadcrumb = _context.sent;

              this.assign('breadcrumb', breadcrumb);
              console.log("breadcrumb-------" + (0, _stringify2.default)(breadcrumb));

              /* 模板赋值并渲染模板 */
              this.assign('category', cate);
              this.assign('list', data.data);
              this.assign('count', data.count);
              console.log("category------------" + (0, _stringify2.default)(cate));
              temp = cate.template_lists ? '' + cate.template_lists : "";
              // console.log(cate);
              //console.log(111)

              if (!checkMobile(this.userAgent())) {
                _context.next = 279;
                break;
              }

              if (!this.isAjax("get")) {
                _context.next = 274;
                break;
              }

              _iterator5 = data.data, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

            case 229:
              if (!_isArray5) {
                _context.next = 235;
                break;
              }

              if (!(_i5 >= _iterator5.length)) {
                _context.next = 232;
                break;
              }

              return _context.abrupt('break', 273);

            case 232:
              _ref6 = _iterator5[_i5++];
              _context.next = 239;
              break;

            case 235:
              _i5 = _iterator5.next();

              if (!_i5.done) {
                _context.next = 238;
                break;
              }

              return _context.abrupt('break', 273);

            case 238:
              _ref6 = _i5.value;

            case 239:
              _v2 = _ref6;

              if (think.isEmpty(_v2.pics)) {
                _context.next = 262;
                break;
              }

              _arr = [];
              _iterator6 = _v2.pics.split(","), _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

            case 243:
              if (!_isArray6) {
                _context.next = 249;
                break;
              }

              if (!(_i6 >= _iterator6.length)) {
                _context.next = 246;
                break;
              }

              return _context.abrupt('break', 261);

            case 246:
              _ref7 = _iterator6[_i6++];
              _context.next = 253;
              break;

            case 249:
              _i6 = _iterator6.next();

              if (!_i6.done) {
                _context.next = 252;
                break;
              }

              return _context.abrupt('break', 261);

            case 252:
              _ref7 = _i6.value;

            case 253:
              _i7 = _ref7;
              _context.t1 = _arr;
              _context.next = 257;
              return get_pic(_i7, 1, 300, 169);

            case 257:
              _context.t2 = _context.sent;

              _context.t1.push.call(_context.t1, _context.t2);

            case 259:
              _context.next = 243;
              break;

            case 261:
              _v2.pics = _arr;

            case 262:
              if (think.isEmpty(_v2.cover_id)) {
                _context.next = 266;
                break;
              }

              _context.next = 265;
              return get_pic(_v2.cover_id, 1, 300, 169);

            case 265:
              _v2.cover_id = _context.sent;

            case 266:
              _context.next = 268;
              return get_realname(_v2.uid);

            case 268:
              _v2.uid = _context.sent;

              _v2.url = get_url(_v2.name, _v2.id);
              _v2.update_time = (0, _moment2.default)(_v2.update_time).fromNow();

            case 271:
              _context.next = 229;
              break;

            case 273:
              return _context.abrupt('return', this.json(data));

            case 274:
              //手机端模版
              temp = cate.template_m_lists ? '' + cate.template_m_lists : '' + this.http.action;
              console.log("mobile list------333323w3-------" + temp);

              return _context.abrupt('return', this.display('mobile/' + this.http.controller + '/' + temp));

            case 279:
              //console.log(temp);
              console.log("list------333323w3-------" + temp);
              return _context.abrupt('return', this.display(temp));

            case 281:
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
  //keywrods列表


  _class.prototype.keywordsAction = function () {
    var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var keywords, map, data, html;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              keywords = this.get("key");
              map = { keyname: ["like", '%' + keywords + '%'] };
              _context2.next = 4;
              return this.model('document').where(map).page(this.get('page')).countSelect();

            case 4:
              data = _context2.sent;
              html = (0, _thinkPagination2.default)(data, this.http, {
                desc: false, //show description
                pageNum: 2,
                url: '', //page url, when not set, it will auto generated
                class: 'nomargin', //pagenation extra class
                text: {
                  next: '下一页',
                  prev: '上一页',
                  total: 'count: ${count} , pages: ${pages}'
                }
              });

              this.assign('pagination', html);
              this.assign("list", data);
              //seo
              this.meta_title = keywords; //标题
              this.keywords = keywords; //seo关键词
              this.description = keywords; //seo描述
              return _context2.abrupt('return', this.display());

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function keywordsAction() {
      return _ref8.apply(this, arguments);
    }

    return keywordsAction;
  }();

  /**
   * 独立模型 questionAction
   */


  _class.prototype.questionAction = function () {
    var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var method, get, id, query, cate, roleid, priv, model, subcate, num, pagenum, breadcrumb, map, o, order, group_id, data, temp;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              //跨域
              method = this.http.method.toLowerCase();

              if (!(method === "options")) {
                _context3.next = 5;
                break;
              }

              this.setCorsHeader();
              this.end();
              return _context3.abrupt('return');

            case 5:
              this.setCorsHeader();
              get = this.get('category') || 0;
              id = 0;
              query = get.split("-");

              if (get != 0) {
                id = query[0];
              }
              _context3.next = 12;
              return this.category(id);

            case 12:
              cate = _context3.sent;

              cate = think.extend({}, cate);
              roleid = 8; //游客
              //访问控制

              if (!this.is_login) {
                _context3.next = 19;
                break;
              }

              _context3.next = 18;
              return this.model("member").where({ id: this.is_login }).getField('groupid', true);

            case 18:
              roleid = _context3.sent;

            case 19:
              _context3.next = 21;
              return this.model("category_priv").priv(cate.id, roleid, 'visit');

            case 21:
              priv = _context3.sent;

              if (priv) {
                _context3.next = 25;
                break;
              }

              this.http.error = new Error('您所在的用户组,禁止访问本栏目！');
              return _context3.abrupt('return', think.statusAction(702, this.http));

            case 25:
              _context3.next = 27;
              return this.model("model").get_model(cate.model);

            case 27:
              model = _context3.sent;

              //console.log(model);
              this.assign('model', model);
              //console.log(cate);
              //获取当前分类的所有子栏目
              _context3.next = 31;
              return this.model('category').get_sub_category(cate.id);

            case 31:
              subcate = _context3.sent;

              // console.log(subcate);
              subcate.push(cate.id);
              //获取模型列表数据个数
              // console.log(cate);
              num = void 0;

              if (!(cate.list_row > 0)) {
                _context3.next = 38;
                break;
              }

              num = cate.list_row;
              _context3.next = 46;
              break;

            case 38:
              if (!(cate.model.split(",").length == 1)) {
                _context3.next = 45;
                break;
              }

              _context3.next = 41;
              return this.model('model').get_model(cate.model, "list_row");

            case 41:
              pagenum = _context3.sent;

              if (pagenum != 0) {
                num = pagenum;
              }
              _context3.next = 46;
              break;

            case 45:
              num = this.config("db.nums_per_page");

            case 46:
              if (checkMobile(this.userAgent())) {
                num = 10;
              }
              //seo
              this.meta_title = cate.meta_title ? cate.meta_title : cate.title; //标题
              this.keywords = cate.keywords ? cate.keywords : ''; //seo关键词
              this.description = cate.description ? cate.description : ""; //seo描述

              //获取面包屑信息
              _context3.next = 52;
              return this.model('category').get_parent_category(cate.id, true);

            case 52:
              breadcrumb = _context3.sent;

              this.assign('breadcrumb', breadcrumb);
              //console.log(breadcrumb)
              map = {
                'category_id': ['IN', subcate]
              };
              //排序

              o = {};
              order = query[1] || 0;

              order = Number(order);
              _context3.t0 = order;
              _context3.next = _context3.t0 === 1 ? 61 : _context3.t0 === 2 ? 63 : _context3.t0 === 3 ? 65 : 67;
              break;

            case 61:
              o.popular_value = 'DESC';
              return _context3.abrupt('break', 68);

            case 63:
              map.is_recommend = 1;
              return _context3.abrupt('break', 68);

            case 65:
              map.answer_count = 0;
              return _context3.abrupt('break', 68);

            case 67:
              o.create_time = 'DESC';

            case 68:
              this.assign('order', order);
              //分组
              group_id = 0;

              if (!think.isEmpty(query[2]) && query[2] != 0) {
                map.group_id = query[2];
                group_id = map.group_id;
              }
              console.log(map);
              this.assign("group_id", group_id);
              _context3.next = 75;
              return this.model(model.name).where(map).page(this.param('page'), num).order(o);

            case 75:
              data = _context3.sent;


              /* 模板赋值并渲染模板 */
              this.assign('category', cate);
              this.assign('list', data.data);
              this.assign('count', data.count);
              //console.log(cate)
              temp = cate.template_lists ? '' + cate.template_lists : "";
              //console.log(cate);
              //console.log(111)

              if (!checkMobile(this.userAgent())) {
                _context3.next = 87;
                break;
              }

              if (!this.isAjax("get")) {
                _context3.next = 83;
                break;
              }

              return _context3.abrupt('return', this.json(data));

            case 83:
              //手机端模版
              temp = cate.template_m_lists ? '' + cate.template_m_lists : '' + this.http.action;
              //think.log(temp);
              return _context3.abrupt('return', this.display('mobile/' + this.http.controller + '/' + temp));

            case 87:
              return _context3.abrupt('return', this.display(temp));

            case 88:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function questionAction() {
      return _ref9.apply(this, arguments);
    }

    return questionAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=list.js.map