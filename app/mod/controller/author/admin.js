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
            var cate_id, group_id, sortid, nav, sort, typevar, _iterator, _isArray, _i, _ref2, val, _iterator2, _isArray2, _i2, _ref3, v, searchtxt, searcharr, arr, len, i, obj, db, map, subcate, nsobj, sortval, _iterator3, _isArray3, _i3, _ref4, _v, qarr, vv, groups, list, Pages, pages, page;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            cate_id = this.get('cate_id') || null;
                            group_id = this.get('group_id') || 0;
                            sortid = this.get('sortid') || 0;

                            if (!think.isEmpty(cate_id)) {
                                _context.next = 6;
                                break;
                            }

                            this.http.error = new Error('该栏目不存在！');
                            return _context.abrupt('return', think.statusAction(702, this.http));

                        case 6:
                            _context.next = 8;
                            return this.model('category').get_parent_category(cate_id);

                        case 8:
                            nav = _context.sent;

                            this.assign('breadcrumb', nav);
                            // 获取分类信息
                            _context.next = 12;
                            return this.model("category").get_category(cate_id, 'documentsorts');

                        case 12:
                            sort = _context.sent;

                            if (!sort) {
                                _context.next = 65;
                                break;
                            }

                            sort = JSON.parse(sort);
                            if (sortid == 0) {
                                sortid = sort.defaultshow;
                            }
                            _context.next = 18;
                            return this.model("typevar").where({ sortid: sortid }).select();

                        case 18:
                            typevar = _context.sent;
                            _iterator = typevar, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 20:
                            if (!_isArray) {
                                _context.next = 26;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 23;
                                break;
                            }

                            return _context.abrupt('break', 64);

                        case 23:
                            _ref2 = _iterator[_i++];
                            _context.next = 30;
                            break;

                        case 26:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 29;
                                break;
                            }

                            return _context.abrupt('break', 64);

                        case 29:
                            _ref2 = _i.value;

                        case 30:
                            val = _ref2;
                            _context.next = 33;
                            return this.model("typeoption").where({ optionid: val.optionid }).find();

                        case 33:
                            val.option = _context.sent;

                            if (!(val.option.type == 'select' || val.option.type == 'radio')) {
                                _context.next = 38;
                                break;
                            }

                            if (!think.isEmpty(val.option.rules)) {
                                val.option.rules = JSON.parse(val.option.rules);
                                val.rules = parse_type_attr(val.option.rules.choices);
                                val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            }

                            _context.next = 62;
                            break;

                        case 38:
                            if (!(val.option.type == 'checkbox')) {
                                _context.next = 61;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context.next = 59;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.rules = parse_type_attr(val.option.rules.choices);
                            console.log(val.rules);
                            _iterator2 = val.rules, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 44:
                            if (!_isArray2) {
                                _context.next = 50;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 47;
                                break;
                            }

                            return _context.abrupt('break', 58);

                        case 47:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 54;
                            break;

                        case 50:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 53;
                                break;
                            }

                            return _context.abrupt('break', 58);

                        case 53:
                            _ref3 = _i2.value;

                        case 54:
                            v = _ref3;

                            v.id = "l>" + v.id;

                        case 56:
                            _context.next = 44;
                            break;

                        case 58:
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            //console.log(val.rules);

                        case 59:
                            _context.next = 62;
                            break;

                        case 61:
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
                                                    obj.name = '低于' + arr[i] + val.option.unit;
                                                    obj.pid = 0;
                                                    searcharr.push(obj);
                                                } else {
                                                    obj.id = arr[i - 1] + '>' + arr[i];
                                                    obj.name = arr[i - 1] + "-" + arr[i] + val.option.unit;
                                                    obj.pid = 0;
                                                    searcharr.push(obj);
                                                }
                                            }
                                        }
                                        searcharr.push({ id: 'u>' + arr[len - 1], name: '高于' + arr[len - 1] + val.option.unit, pid: 0 });
                                    }
                                    //console.log(searcharr);
                                    val.option.rules = JSON.parse(val.option.rules);
                                    val.rules = searcharr;
                                    // val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                                }
                            }

                        case 62:
                            _context.next = 20;
                            break;

                        case 64:
                            //console.log(typevar);
                            this.assign("typevar", typevar);

                        case 65:
                            //console.log(sort);
                            this.assign("sort", sort);
                            this.assign('sortid', sortid);
                            //获取内容
                            // 构建列表数据
                            db = this.model(this.mod.name);
                            map = {};

                            if (!cate_id) {
                                _context.next = 75;
                                break;
                            }

                            _context.next = 72;
                            return this.model('category').get_sub_category(cate_id);

                        case 72:
                            subcate = _context.sent;

                            // console.log(subcate);
                            subcate.push(cate_id);
                            map.category_id = ['IN', subcate];

                        case 75:
                            if (group_id != 0) {
                                map.group_id = group_id;
                            }
                            nsobj = {};

                            if (think.isEmpty(this.get('sortval'))) {
                                _context.next = 98;
                                break;
                            }

                            sortval = this.get('sortval').split("|");

                            nsobj = {};
                            _iterator3 = sortval, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 81:
                            if (!_isArray3) {
                                _context.next = 87;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context.next = 84;
                                break;
                            }

                            return _context.abrupt('break', 97);

                        case 84:
                            _ref4 = _iterator3[_i3++];
                            _context.next = 91;
                            break;

                        case 87:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context.next = 90;
                                break;
                            }

                            return _context.abrupt('break', 97);

                        case 90:
                            _ref4 = _i3.value;

                        case 91:
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

                        case 95:
                            _context.next = 81;
                            break;

                        case 97:
                            this.assign("nsobj", nsobj);

                        case 98:
                            console.log(map);
                            //获取分组
                            _context.next = 101;
                            return this.model("category").get_category(cate_id, 'groups');

                        case 101:
                            groups = _context.sent;

                            if (groups) {
                                groups = parse_config_attr(groups);
                            }
                            this.assign('groups', groups);
                            //搜索
                            if (this.get("title")) {
                                map.title = ["like", "%" + this.get("title") + "%"];
                            }
                            list = void 0;

                            if (think.isEmpty(this.get('sortval'))) {
                                _context.next = 112;
                                break;
                            }

                            _context.next = 109;
                            return db.join({
                                table: "type_optionvalue" + sortid,
                                join: "left", // 有 left,right,inner 3 个值
                                as: "t",
                                on: ["id", "tid"]

                            }).where(map).order('update_time DESC').page(this.get("page"), 20).countSelect();

                        case 109:
                            list = _context.sent;
                            _context.next = 115;
                            break;

                        case 112:
                            _context.next = 114;
                            return db.where(map).order('update_time DESC').page(this.get("page"), 20).countSelect();

                        case 114:
                            list = _context.sent;

                        case 115:

                            console.log(list);
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(list);

                            this.assign('list', list);
                            this.assign('pagerData', page); //分页展示使用
                            console.log(map);
                            this.meta_title = this.m_cate.title;
                            this.assign({
                                "navxs": true,
                                "name": this.m_cate.name
                            });
                            this.assign('group_id', group_id);
                            //渲染模版
                            return _context.abrupt('return', this.modtemp(this.mod.name));

                        case 126:
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
     * 添加名家
     * @returns {Promise.<void>}
     */


    _class.prototype.addAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var cate_id, group_id, sortid, groups, sort, typevar, _iterator4, _isArray4, _i4, _ref6, val, nav;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            cate_id = this.get('cate_id') || null;
                            group_id = this.get('group_id') || 0;
                            sortid = this.get('sortid') || 0;
                            //权限验证

                            _context2.next = 5;
                            return this.admin_priv("add", cate_id);

                        case 5:
                            _context2.next = 7;
                            return this.model("category").get_category(cate_id, 'groups');

                        case 7:
                            groups = _context2.sent;

                            if (groups) {
                                groups = parse_config_attr(groups);
                            }
                            this.assign('groups', groups);
                            // 获取分类信息
                            _context2.next = 12;
                            return this.model("category").get_category(cate_id, 'documentsorts');

                        case 12:
                            sort = _context2.sent;

                            if (!sort) {
                                _context2.next = 38;
                                break;
                            }

                            sort = JSON.parse(sort);
                            if (sortid == 0) {
                                sortid = sort.defaultshow;
                            }
                            _context2.next = 18;
                            return this.model("typevar").where({ sortid: sortid }).select();

                        case 18:
                            typevar = _context2.sent;
                            _iterator4 = typevar, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 20:
                            if (!_isArray4) {
                                _context2.next = 26;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context2.next = 23;
                                break;
                            }

                            return _context2.abrupt('break', 37);

                        case 23:
                            _ref6 = _iterator4[_i4++];
                            _context2.next = 30;
                            break;

                        case 26:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context2.next = 29;
                                break;
                            }

                            return _context2.abrupt('break', 37);

                        case 29:
                            _ref6 = _i4.value;

                        case 30:
                            val = _ref6;
                            _context2.next = 33;
                            return this.model("typeoption").where({ optionid: val.optionid }).find();

                        case 33:
                            val.option = _context2.sent;

                            if (val.option.type == 'select') {
                                if (!think.isEmpty(val.option.rules)) {
                                    val.option.rules = JSON.parse(val.option.rules);
                                    val.rules = parse_type_attr(val.option.rules.choices);
                                    val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                                }
                            } else if (val.option.type == "radio" || val.option.type == "checkbox") {
                                if (!think.isEmpty(val.option.rules)) {
                                    val.option.rules = JSON.parse(val.option.rules);
                                    val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                                }
                            } else {
                                if (!think.isEmpty(val.option.rules)) {
                                    val.option.rules = JSON.parse(val.option.rules);
                                }
                            }

                        case 35:
                            _context2.next = 20;
                            break;

                        case 37:

                            this.assign("typevar", typevar);

                        case 38:
                            //console.log(sort);
                            this.assign("sort", sort);

                            if (!think.isEmpty(cate_id)) {
                                _context2.next = 42;
                                break;
                            }

                            this.http.error = new Error('该栏目不存在！');
                            return _context2.abrupt('return', think.statusAction(702, this.http));

                        case 42:
                            _context2.next = 44;
                            return this.model('category').get_parent_category(cate_id);

                        case 44:
                            nav = _context2.sent;

                            this.assign('breadcrumb', nav);

                            this.meta_title = "添加" + this.m_cate.title;
                            this.assign({
                                "navxs": true,
                                "name": this.m_cate.name
                            });
                            //渲染模版
                            return _context2.abrupt('return', this.modtemp(this.mod.name));

                        case 49:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function addAction() {
            return _ref5.apply(this, arguments);
        }

        return addAction;
    }();

    /**
     * 编辑
     *
     */


    _class.prototype.editAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var id, sortid, db, data, model, groups, sort, typevar, _iterator5, _isArray5, _i5, _ref8, val, nav;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            id = this.get("id") || "";
                            sortid = this.get("sortid") || 0;

                            if (!think.isEmpty(id)) {
                                _context3.next = 4;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("参数不能为空"));

                        case 4:
                            db = this.model("author");
                            _context3.next = 7;
                            return db.find(id);

                        case 7:
                            data = _context3.sent;

                            console.log(data);
                            //权限验证
                            _context3.next = 11;
                            return this.admin_priv("edit", data.category_id);

                        case 11:
                            _context3.next = 13;
                            return this.model("model").get_model(data.model_id);

                        case 13:
                            model = _context3.sent;

                            console.log(model);
                            // 获取分组定义
                            _context3.next = 17;
                            return this.model("category").get_category(data.category_id, 'groups');

                        case 17:
                            groups = _context3.sent;

                            if (groups) {
                                groups = parse_config_attr(groups);
                            }
                            this.assign('groups', groups);
                            // 获取分类信息
                            _context3.next = 22;
                            return this.model("category").get_category(data.category_id, 'documentsorts');

                        case 22:
                            sort = _context3.sent;

                            if (!sort) {
                                _context3.next = 80;
                                break;
                            }

                            sort = JSON.parse(sort);
                            if (sortid != 0) {
                                data.sort_id = sortid;
                            } else if (data.sort_id == 0) {
                                data.sort_id = sort.defaultshow;
                            }
                            _context3.next = 28;
                            return this.model("typevar").where({ sortid: data.sort_id }).select();

                        case 28:
                            typevar = _context3.sent;
                            _iterator5 = typevar, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

                        case 30:
                            if (!_isArray5) {
                                _context3.next = 36;
                                break;
                            }

                            if (!(_i5 >= _iterator5.length)) {
                                _context3.next = 33;
                                break;
                            }

                            return _context3.abrupt('break', 78);

                        case 33:
                            _ref8 = _iterator5[_i5++];
                            _context3.next = 40;
                            break;

                        case 36:
                            _i5 = _iterator5.next();

                            if (!_i5.done) {
                                _context3.next = 39;
                                break;
                            }

                            return _context3.abrupt('break', 78);

                        case 39:
                            _ref8 = _i5.value;

                        case 40:
                            val = _ref8;
                            _context3.next = 43;
                            return this.model("typeoption").where({ optionid: val.optionid }).find();

                        case 43:
                            val.option = _context3.sent;

                            if (!(val.option.type == 'select')) {
                                _context3.next = 56;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context3.next = 54;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            _context3.next = 50;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 50:
                            _context3.t0 = _context3.sent;

                            if (_context3.t0) {
                                _context3.next = 53;
                                break;
                            }

                            _context3.t0 = "";

                        case 53:
                            val.option.value = _context3.t0;

                        case 54:
                            _context3.next = 76;
                            break;

                        case 56:
                            if (!(val.option.type == "radio" || val.option.type == "checkbox")) {
                                _context3.next = 68;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context3.next = 66;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            _context3.next = 62;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 62:
                            _context3.t1 = _context3.sent;

                            if (_context3.t1) {
                                _context3.next = 65;
                                break;
                            }

                            _context3.t1 = "";

                        case 65:
                            val.option.value = _context3.t1;

                        case 66:
                            _context3.next = 76;
                            break;

                        case 68:
                            if (think.isEmpty(val.option.rules)) {
                                _context3.next = 76;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            _context3.next = 72;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 72:
                            _context3.t2 = _context3.sent;

                            if (_context3.t2) {
                                _context3.next = 75;
                                break;
                            }

                            _context3.t2 = "";

                        case 75:
                            val.option.value = _context3.t2;

                        case 76:
                            _context3.next = 30;
                            break;

                        case 78:
                            console.log(typevar);
                            this.assign("typevar", typevar);

                        case 80:
                            //console.log(sort);
                            this.assign("sort", sort);
                            //获取面包屑信息
                            _context3.next = 83;
                            return this.model('category').get_parent_category(data.category_id);

                        case 83:
                            nav = _context3.sent;

                            //console.log(model);
                            this.assign('breadcrumb', nav);
                            this.meta_title = '编辑' + model.title;
                            this.active = "admin/article/index";
                            this.assign({
                                "navxs": true
                            });
                            this.assign('data', data);
                            this.assign('model_id', data.model_id);
                            this.assign('model', model);
                            return _context3.abrupt('return', this.modtemp(model.name));

                        case 92:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function editAction() {
            return _ref7.apply(this, arguments);
        }

        return editAction;
    }();
    /**
     * 更新或者添加数据
     */


    _class.prototype.updateAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var data, res;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            data = this.post();
                            _context4.next = 3;
                            return this.model('author').updates(data);

                        case 3:
                            res = _context4.sent;

                            if (!res) {
                                _context4.next = 14;
                                break;
                            }

                            if (res.data.id) {
                                _context4.next = 11;
                                break;
                            }

                            _context4.next = 8;
                            return this.model("action").log("add_document", "document", res.id, this.user.uid, this.ip(), this.http.url);

                        case 8:
                            this.success({ name: "添加成功", url: "/mod/admin/index/cate_id/" + res.data.category_id });
                            _context4.next = 12;
                            break;

                        case 11:
                            this.success({ name: "更新成功", url: "/mod/admin/index/cate_id/" + res.data.category_id });

                        case 12:
                            _context4.next = 15;
                            break;

                        case 14:
                            this.fail("操作失败！");

                        case 15:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function updateAction() {
            return _ref9.apply(this, arguments);
        }

        return updateAction;
    }();

    return _class;
}(_admin2.default);

exports.default = _class;
//# sourceMappingURL=admin.js.map