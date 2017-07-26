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

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

var _thinkPagination = require('think-pagination');

var _thinkPagination2 = _interopRequireDefault(_thinkPagination);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

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
     * 封面入口
     */
    _class.prototype.indexAction = function indexAction() {
        //console.log(this);
        //auto render template file index_index.html

        this.end(2222);
        return this.display();
    };
    /**
     * 列表入口
     * @returns {*}
     */


    _class.prototype.listAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var method, get, id, query, cate, model, subcate, num, breadcrumb, map, o, order, sortid, sortarr, nsobj, sort, typevar, _iterator, _isArray, _i, _ref2, val, _iterator2, _isArray2, _i2, _ref3, v, searchtxt, searcharr, arr, len, i, obj, optionidarr, valuearr, _iterator3, _isArray3, _i3, _ref4, _v, qarr, vv, group_id, data, html, _iterator4, _isArray4, _i4, _ref5, _v2;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //跨域
                            method = this.http.method.toLowerCase();

                            if (!(method === "options")) {
                                _context.next = 5;
                                break;
                            }

                            this.setCorsHeader();
                            this.end();
                            return _context.abrupt('return');

                        case 5:
                            this.setCorsHeader();
                            get = this.get('category') || 0;
                            id = 0;
                            query = get.split("-");

                            if (get != 0) {
                                id = query[0];
                            }
                            //获取栏目信息
                            cate = this.m_cate;

                            cate = think.extend({}, cate);

                            //栏目权限验证
                            _context.next = 14;
                            return this.c_verify("visit");

                        case 14:

                            // 获取当前栏目的模型
                            model = this.mod;

                            this.assign('model', model);

                            //获取当前分类的所有子栏目
                            _context.next = 18;
                            return this.model('category').get_sub_category(cate.id);

                        case 18:
                            subcate = _context.sent;

                            subcate.push(cate.id);

                            //当前栏目列表每页行数
                            num = this.page_num();

                            //获取面包屑信息

                            _context.next = 23;
                            return this.model('category').get_parent_category(cate.id, true);

                        case 23:
                            breadcrumb = _context.sent;


                            //获取列表数据
                            //条件
                            map = {
                                'category_id': ['IN', subcate]
                            };
                            //排序

                            o = {};
                            order = this.modget(1) || 0;

                            order = Number(order);
                            _context.t0 = order;
                            _context.next = _context.t0 === 1 ? 31 : _context.t0 === 2 ? 33 : _context.t0 === 3 ? 36 : 39;
                            break;

                        case 31:
                            o.popular_value = 'DESC';
                            return _context.abrupt('break', 40);

                        case 33:
                            map.is_recommend = 1;
                            o.id = 'DESC';
                            return _context.abrupt('break', 40);

                        case 36:
                            map.answer_count = 0;
                            o.id = 'DESC';
                            return _context.abrupt('break', 40);

                        case 39:
                            o.update_time = 'DESC';

                        case 40:
                            this.assign('order', order);
                            // 获取分类信息
                            sortid = query[3] || 0;

                            if (!think.isEmpty(sortid)) {
                                map.sort_id = sortid;
                            }
                            sortarr = query[4] || null;
                            nsobj = {};
                            _context.next = 47;
                            return this.model("category").get_category(cate.id, 'documentsorts');

                        case 47:
                            sort = _context.sent;

                            if (!sort) {
                                _context.next = 101;
                                break;
                            }

                            this.assign("sorturl", get.split("-")[4]);
                            sort = JSON.parse(sort);
                            if (sortid == 0) {
                                sortid = sort.defaultshow;
                            }
                            _context.next = 54;
                            return this.model("typevar").where({ sortid: sortid }).order('displayorder ASC').select();

                        case 54:
                            typevar = _context.sent;
                            _iterator = typevar, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 56:
                            if (!_isArray) {
                                _context.next = 62;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 59;
                                break;
                            }

                            return _context.abrupt('break', 100);

                        case 59:
                            _ref2 = _iterator[_i++];
                            _context.next = 66;
                            break;

                        case 62:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 65;
                                break;
                            }

                            return _context.abrupt('break', 100);

                        case 65:
                            _ref2 = _i.value;

                        case 66:
                            val = _ref2;
                            _context.next = 69;
                            return this.model("typeoption").where({ optionid: val.optionid }).find();

                        case 69:
                            val.option = _context.sent;

                            if (!(val.option.type == 'select' || val.option.type == 'radio')) {
                                _context.next = 74;
                                break;
                            }

                            if (!think.isEmpty(val.option.rules)) {
                                val.option.rules = JSON.parse(val.option.rules);
                                val.rules = parse_type_attr(val.option.rules.choices);
                                val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                                //console.log(val.rules);
                            }

                            _context.next = 98;
                            break;

                        case 74:
                            if (!(val.option.type == 'checkbox')) {
                                _context.next = 97;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context.next = 95;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.rules = parse_type_attr(val.option.rules.choices);
                            console.log(val.rules);
                            _iterator2 = val.rules, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 80:
                            if (!_isArray2) {
                                _context.next = 86;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 83;
                                break;
                            }

                            return _context.abrupt('break', 94);

                        case 83:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 90;
                            break;

                        case 86:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 89;
                                break;
                            }

                            return _context.abrupt('break', 94);

                        case 89:
                            _ref3 = _i2.value;

                        case 90:
                            v = _ref3;

                            v.id = "l>" + v.id;

                        case 92:
                            _context.next = 80;
                            break;

                        case 94:
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            //console.log(val.rules);

                        case 95:
                            _context.next = 98;
                            break;

                        case 97:
                            if (val.option.type == 'range') {
                                if (!think.isEmpty(val.option.rules)) {
                                    searchtxt = JSON.parse(val.option.rules).searchtxt;
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
                                    val.option.rules = JSON.parse(val.option.rules);
                                    val.rules = searcharr;
                                    // val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                                }
                            }

                        case 98:
                            _context.next = 56;
                            break;

                        case 100:
                            // console.log(typevar);
                            this.assign("typevar", typevar);

                        case 101:
                            if (think.isEmpty(sortarr)) {
                                _context.next = 124;
                                break;
                            }

                            sortarr = sortarr.split("|");
                            nsobj = {};
                            optionidarr = [];
                            valuearr = [];
                            _iterator3 = sortarr, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 107:
                            if (!_isArray3) {
                                _context.next = 113;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context.next = 110;
                                break;
                            }

                            return _context.abrupt('break', 123);

                        case 110:
                            _ref4 = _iterator3[_i3++];
                            _context.next = 117;
                            break;

                        case 113:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context.next = 116;
                                break;
                            }

                            return _context.abrupt('break', 123);

                        case 116:
                            _ref4 = _i3.value;

                        case 117:
                            _v = _ref4;
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

                        case 121:
                            _context.next = 107;
                            break;

                        case 123:
                            map.fid = cate.id;
                            // where.optionid = ["IN",optionidarr];
                            // where['value'] = ["IN",valuearr];
                            // let type= await this.model("typeoptionvar").where(where).select();
                            //  console.log(type);
                            // console.log(map);

                        case 124:
                            //console.log(map);
                            //return false;
                            //console.log(sort);
                            this.assign("sort", sort);
                            this.assign("nsobj", nsobj);

                            this.assign("sortid", sortid);
                            //分组
                            group_id = 0;

                            if (!think.isEmpty(this.modget(2)) && this.modget(2) != 0) {
                                map.group_id = this.modget(2);
                                group_id = map.group_id;
                            }
                            data = void 0;

                            if (think.isEmpty(sortarr)) {
                                _context.next = 136;
                                break;
                            }

                            _context.next = 133;
                            return this.model(this.mod.name).join({
                                table: "type_optionvalue" + sortid,
                                join: "left", // 有 left,right,inner 3 个值
                                as: "t",
                                on: ["id", "tid"]

                            }).where(map).page(this.param('page'), num).order(o).countSelect();

                        case 133:
                            data = _context.sent;
                            _context.next = 139;
                            break;

                        case 136:
                            _context.next = 138;
                            return this.model(this.mod.name).where(map).page(this.param('page'), num).order(o).countSelect();

                        case 138:
                            data = _context.sent;

                        case 139:

                            //分页
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
                            /* 模板赋值并渲染模板 */
                            this.assign("group_id", group_id);
                            this.assign('category', cate);
                            this.assign('list', data.data);
                            this.assign('count', data.count);
                            this.assign('breadcrumb', breadcrumb);

                            //跨屏

                            if (!checkMobile(this.userAgent())) {
                                _context.next = 178;
                                break;
                            }

                            if (!this.isAjax("get")) {
                                _context.next = 175;
                                break;
                            }

                            _iterator4 = data.data, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 149:
                            if (!_isArray4) {
                                _context.next = 155;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context.next = 152;
                                break;
                            }

                            return _context.abrupt('break', 174);

                        case 152:
                            _ref5 = _iterator4[_i4++];
                            _context.next = 159;
                            break;

                        case 155:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context.next = 158;
                                break;
                            }

                            return _context.abrupt('break', 174);

                        case 158:
                            _ref5 = _i4.value;

                        case 159:
                            _v2 = _ref5;
                            _context.next = 162;
                            return get_nickname(_v2.uid);

                        case 162:
                            _v2.nickname = _context.sent;

                            _v2.create_time = (0, _moment2.default)(_v2.create_time).fromNow();
                            _context.next = 166;
                            return this.model("category").get_category(_v2.category_id, "title");

                        case 166:
                            _v2.catename = _context.sent;

                            _v2.detail = _v2.detail.replace(/<[^>]+>/g, "");
                            _context.next = 170;
                            return get_nickname(_v2.answer_users);

                        case 170:
                            _v2.answer_username = _context.sent;

                            _v2.update_time = (0, _moment2.default)(_v2.update_time).fromNow();

                        case 172:
                            _context.next = 149;
                            break;

                        case 174:
                            return _context.abrupt('return', this.json(data));

                        case 175:
                            return _context.abrupt('return', this.modtemp(this.mod.name, "mobile"));

                        case 178:
                            return _context.abrupt('return', this.modtemp(this.mod.name));

                        case 179:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function listAction() {
            return _ref.apply(this, arguments);
        }

        return listAction;
    }();

    /**
     * 详情入口
     * @returns {*}
     */


    _class.prototype.detailAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var id, info, breadcrumb, cate, focus, focususer, answer, _iterator5, _isArray5, _i5, _ref7, a, where, tagid, rtid, rq, str, img, _iterator6, _isArray6, _i6, _ref8, v;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            //获取详情id
                            id = this.get("id");
                            // //判断请求参数是否合法。

                            if (!think.isEmpty(id)) {
                                _context2.next = 4;
                                break;
                            }

                            this.http.error = new Error("请求参数不合法！");
                            return _context2.abrupt('return', think.statusAction(702, this.http));

                        case 4:
                            if (think.isNumberString(id)) {
                                _context2.next = 8;
                                break;
                            }

                            _context2.next = 7;
                            return this.model("author").where({ pinyin: id }).getField("id", true);

                        case 7:
                            id = _context2.sent;

                        case 8:
                            _context2.next = 10;
                            return this.model("author").find(id);

                        case 10:
                            info = _context2.sent;

                            if (!think.isEmpty(info)) {
                                _context2.next = 14;
                                break;
                            }

                            this.http.error = new Error("信息不存在！");
                            return _context2.abrupt('return', think.statusAction(702, this.http));

                        case 14:
                            //TODO
                            //访问控制
                            //await this.c_verify("visit",info.category_id);

                            this.assign("info", info);

                            //seo
                            this.meta_title = info.title; //标题
                            this.keywords = info.keyname ? info.keyname : ''; //seo关键词
                            this.description = info.description ? info.description : ""; //seo描述

                            //获取面包屑信息
                            _context2.next = 20;
                            return this.model('category').get_parent_category(info.category_id, true);

                        case 20:
                            breadcrumb = _context2.sent;

                            this.assign('breadcrumb', breadcrumb);
                            //获取栏目信息
                            _context2.next = 24;
                            return this.category(info.category_id);

                        case 24:
                            cate = _context2.sent;

                            this.assign('category', cate);
                            //当前用户是否关注

                            if (!this.is_login) {
                                _context2.next = 31;
                                break;
                            }

                            _context2.next = 29;
                            return this.model("question_focus").where({ question_id: id, uid: this.user.uid }).find();

                        case 29:
                            focus = _context2.sent;

                            this.assign("focus", focus);

                        case 31:
                            _context2.next = 33;
                            return this.model("question_focus").where({ question_id: id }).getField("uid");

                        case 33:
                            focususer = _context2.sent;

                            this.assign("focususer", focususer);
                            //访问统计
                            _context2.next = 37;
                            return this.model("author").where({ id: info.id }).increment('view');

                        case 37:
                            _context2.next = 39;
                            return this.model("question_answer").where({ question_id: id }).select();

                        case 39:
                            answer = _context2.sent;
                            _iterator5 = answer, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

                        case 41:
                            if (!_isArray5) {
                                _context2.next = 47;
                                break;
                            }

                            if (!(_i5 >= _iterator5.length)) {
                                _context2.next = 44;
                                break;
                            }

                            return _context2.abrupt('break', 57);

                        case 44:
                            _ref7 = _iterator5[_i5++];
                            _context2.next = 51;
                            break;

                        case 47:
                            _i5 = _iterator5.next();

                            if (!_i5.done) {
                                _context2.next = 50;
                                break;
                            }

                            return _context2.abrupt('break', 57);

                        case 50:
                            _ref7 = _i5.value;

                        case 51:
                            a = _ref7;
                            _context2.next = 54;
                            return this.model("question_answer_comments").where({ answer_id: a.answer_id }).count("id");

                        case 54:
                            a.ccount = _context2.sent;

                        case 55:
                            _context2.next = 41;
                            break;

                        case 57:
                            this.assign("answer", answer);
                            //console.log(cate);
                            //相关问题
                            where = { docid: id, mod_type: 1, mod_id: cate.model
                                //获取相关tagid
                            };
                            _context2.next = 61;
                            return this.model("keyword_data").where(where).getField("tagid");

                        case 61:
                            tagid = _context2.sent;

                            if (think.isEmpty(tagid)) {
                                _context2.next = 70;
                                break;
                            }

                            _context2.next = 65;
                            return this.model("keyword_data").where({ tagid: ["IN", tagid], mod_id: cate.model }).getField("docid");

                        case 65:
                            rtid = _context2.sent;
                            _context2.next = 68;
                            return this.model("question").where({ id: ["IN", rtid] }).limit(10).select();

                        case 68:
                            rq = _context2.sent;

                            this.assign("rq", rq);

                        case 70:

                            //不同的设备,压缩不同的图片尺寸
                            str = info.detail;

                            if (!think.isEmpty(str)) {
                                img = void 0;

                                if (checkMobile(this.userAgent())) {
                                    //手机端
                                    img = image_view(str, 640, 4);
                                } else {
                                    //pc端

                                    img = image_view(str, 847, 0);
                                }
                                info.detail = img;
                            }

                            if (!checkMobile(this.userAgent())) {
                                _context2.next = 104;
                                break;
                            }

                            if (!this.isAjax("get")) {
                                _context2.next = 101;
                                break;
                            }

                            _iterator6 = data.data, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

                        case 75:
                            if (!_isArray6) {
                                _context2.next = 81;
                                break;
                            }

                            if (!(_i6 >= _iterator6.length)) {
                                _context2.next = 78;
                                break;
                            }

                            return _context2.abrupt('break', 100);

                        case 78:
                            _ref8 = _iterator6[_i6++];
                            _context2.next = 85;
                            break;

                        case 81:
                            _i6 = _iterator6.next();

                            if (!_i6.done) {
                                _context2.next = 84;
                                break;
                            }

                            return _context2.abrupt('break', 100);

                        case 84:
                            _ref8 = _i6.value;

                        case 85:
                            v = _ref8;
                            _context2.next = 88;
                            return get_nickname(v.uid);

                        case 88:
                            v.nickname = _context2.sent;

                            v.create_time = (0, _moment2.default)(v.create_time).fromNow();
                            _context2.next = 92;
                            return this.model("category").get_category(v.category_id, "title");

                        case 92:
                            v.catename = _context2.sent;

                            v.detail = v.detail.replace(/<[^>]+>/g, "");
                            _context2.next = 96;
                            return get_nickname(v.answer_users);

                        case 96:
                            v.answer_username = _context2.sent;

                            v.update_time = (0, _moment2.default)(v.update_time).fromNow();

                        case 98:
                            _context2.next = 75;
                            break;

                        case 100:
                            return _context2.abrupt('return', this.json(data));

                        case 101:
                            return _context2.abrupt('return', this.modtemp("question", "mobile"));

                        case 104:
                            return _context2.abrupt('return', this.modtemp());

                        case 105:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function detailAction() {
            return _ref6.apply(this, arguments);
        }

        return detailAction;
    }();

    _class.prototype.infoAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var author_id, model_id, info, breadcrumb, cate, o, order, list, html;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            author_id = this.get('author_id');
                            model_id = this.get("model_id");
                            //获取详情信息

                            _context3.next = 4;
                            return this.model("author").find(author_id);

                        case 4:
                            info = _context3.sent;

                            if (!think.isEmpty(info)) {
                                _context3.next = 8;
                                break;
                            }

                            this.http.error = new Error("信息不存在！");
                            return _context3.abrupt('return', think.statusAction(702, this.http));

                        case 8:
                            this.assign("info", info);
                            //seo
                            this.meta_title = info.title; //标题
                            this.keywords = info.keyname ? info.keyname : ''; //seo关键词
                            this.description = info.description ? info.description : ""; //seo描述
                            //获取面包屑信息
                            _context3.next = 14;
                            return this.model('category').get_parent_category(info.category_id, true);

                        case 14:
                            breadcrumb = _context3.sent;

                            this.assign('breadcrumb', breadcrumb);
                            //获取栏目信息
                            _context3.next = 18;
                            return this.category(info.category_id);

                        case 18:
                            cate = _context3.sent;

                            this.assign('category', cate);

                            //排序
                            o = {};

                            o.level = 'DESC';
                            order = this.get("order");

                            order = Number(order);
                            _context3.t0 = order;
                            _context3.next = _context3.t0 === 1 ? 27 : _context3.t0 === 2 ? 29 : _context3.t0 === 3 ? 31 : 33;
                            break;

                        case 27:
                            o.update_time = 'ASC';
                            return _context3.abrupt('break', 34);

                        case 29:
                            o.view = 'DESC';
                            return _context3.abrupt('break', 34);

                        case 31:
                            o.view = 'ASC';
                            return _context3.abrupt('break', 34);

                        case 33:
                            o.update_time = 'DESC';

                        case 34:
                            this.assign('order', order);
                            _context3.next = 37;
                            return this.model("document").where({ model_id: model_id, author_id: author_id }).page(this.param('page'), 10).order(o).countSelect();

                        case 37:
                            list = _context3.sent;

                            this.assign("list", list);
                            //分页
                            html = (0, _thinkPagination2.default)(list, this.http, {
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
                            console.log(list);
                            return _context3.abrupt('return', this.modtemp());

                        case 43:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function infoAction() {
            return _ref9.apply(this, arguments);
        }

        return infoAction;
    }();

    return _class;
}(_index2.default);

exports.default = _class;
//# sourceMappingURL=index.js.map