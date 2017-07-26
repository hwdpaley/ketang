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

    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.db = this.model('category');
        this.tactive = "article";
    };

    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var where, tree;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            where = {};

                            if (this.get("mold")) {
                                where.mold = this.get("mold");
                            }
                            // console.log(where);
                            //auto render template file index_index.html
                            _context.next = 4;
                            return this.db.gettree(0, "id,name,title,sort,pid,allow_publish,status,model,mold,isapp", where);

                        case 4:
                            tree = _context.sent;

                            //console.log(tree)
                            this.assign("active", this.get("mold") || null);
                            this.assign("list", tree);
                            this.meta_title = "栏目管理";
                            return _context.abrupt('return', this.display());

                        case 9:
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

    _class.prototype.gettreeAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var tree;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.db.gettree(0, "id,name,title,sort,pid,allow_publish,status");

                        case 2:
                            tree = _context2.sent;
                            return _context2.abrupt('return', this.json(tree));

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function gettreeAction() {
            return _ref2.apply(this, arguments);
        }

        return gettreeAction;
    }();

    /**
     * 添加栏目
     */


    _class.prototype.addAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var data, check, res, mold, sortid, type, model, temp_pc, temp_m, group, role;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context3.next = 21;
                                break;
                            }

                            data = this.post();

                            if (!(data.mold != 2)) {
                                _context3.next = 8;
                                break;
                            }

                            if (!think.isEmpty(data.model)) {
                                _context3.next = 5;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("至少要绑定一个模型！"));

                        case 5:
                            if (!(data.mold == 0)) {
                                _context3.next = 8;
                                break;
                            }

                            if (!think.isEmpty(data.type)) {
                                _context3.next = 8;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("允许文档类型，至少要选项一个！"));

                        case 8:

                            //console.log(data);

                            //return false;
                            data.status = 1;
                            //console.log(data);

                            if (think.isEmpty(data.name)) {
                                _context3.next = 15;
                                break;
                            }

                            _context3.next = 12;
                            return this.model("category").where({ name: data.name }).find();

                        case 12:
                            check = _context3.sent;

                            if (think.isEmpty(check)) {
                                _context3.next = 15;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("同节点下,栏目标示不能重复"));

                        case 15:
                            _context3.next = 17;
                            return this.model("category").updates(data);

                        case 17:
                            res = _context3.sent;

                            if (res) {
                                this.success({ name: "新增成功！", url: "/admin/category/index/mold/" + data.mold });
                            } else {
                                this.fail("更新失败！");
                            }
                            _context3.next = 74;
                            break;

                        case 21:
                            mold = this.get('mold');
                            _context3.next = 24;
                            return this.model("typevar").getField("sortid");

                        case 24:
                            sortid = _context3.sent;
                            type = void 0;

                            if (think.isEmpty(sortid)) {
                                _context3.next = 31;
                                break;
                            }

                            sortid = unique(sortid);
                            //console.log(sortid);
                            //获取分类信息
                            _context3.next = 30;
                            return this.model("type").where({ typeid: ['IN', sortid] }).order('displayorder ASC').select();

                        case 30:
                            type = _context3.sent;

                        case 31:

                            this.assign("typelist", type);
                            //获取模型信息；
                            model = void 0;

                            if (!(mold == 0)) {
                                _context3.next = 39;
                                break;
                            }

                            _context3.next = 36;
                            return this.model("model").get_model(null, null, { extend: 1 });

                        case 36:
                            model = _context3.sent;
                            _context3.next = 43;
                            break;

                        case 39:
                            if (!(mold == 1)) {
                                _context3.next = 43;
                                break;
                            }

                            _context3.next = 42;
                            return this.model("model").get_model(null, null, { extend: 0 });

                        case 42:
                            model = _context3.sent;

                        case 43:
                            console.log(model);
                            //console.log(obj_values(model));
                            this.assign("models", model);

                            //获取运行的文档类型
                            this.active = "admin/category/index";
                            this.action = "/admin/category/add";
                            //获取模版列表（pc）
                            _context3.next = 49;
                            return this.model("temp").gettemp(1);

                        case 49:
                            temp_pc = _context3.sent;

                            //console.log(temp_pc);
                            this.assign("temp_pc", temp_pc);
                            //获取手机端模版
                            _context3.next = 53;
                            return this.model("temp").gettemp(2);

                        case 53:
                            temp_m = _context3.sent;

                            //console.log(temp_m);
                            this.assign("temp_m", temp_m);
                            //template_lists
                            //会员组

                            _context3.next = 57;
                            return this.model("member_group").order("sort ASC").select();

                        case 57:
                            group = _context3.sent;

                            this.assign('group', group);
                            _context3.next = 61;
                            return this.model("auth_role").order("sort ASC").select();

                        case 61:
                            role = _context3.sent;

                            this.assign('role', role);
                            _context3.t0 = Number(mold);
                            _context3.next = _context3.t0 === 0 ? 66 : _context3.t0 === 1 ? 68 : _context3.t0 === 2 ? 70 : 72;
                            break;

                        case 66:
                            this.meta_title = "添加栏目(系统模型)";
                            return _context3.abrupt('break', 73);

                        case 68:
                            this.meta_title = "添加栏目(独立模型)";
                            return _context3.abrupt('break', 73);

                        case 70:
                            this.meta_title = "添加栏目(单页面)";
                            return _context3.abrupt('break', 73);

                        case 72:
                            this.meta_title = "添加栏目";

                        case 73:
                            return _context3.abrupt('return', this.display());

                        case 74:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function addAction() {
            return _ref3.apply(this, arguments);
        }

        return addAction;
    }();

    /**编辑分类
     *
     */


    _class.prototype.editAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var category, data, check, res, id, info, types, typeobj, _iterator, _isArray, _i, _ref5, val, sortid, type, model, mod, temp_pc, temp_m, group, role, priv, priv_roleid, priv_groupid, _iterator2, _isArray2, _i2, _ref6, _v2, v, arr, _iterator3, _isArray3, _i3, _ref7, m, _v, _arr, _iterator4, _isArray4, _i4, _ref8, _m;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            category = this.model("category");

                            if (!this.isPost()) {
                                _context4.next = 16;
                                break;
                            }

                            data = this.post();

                            data.status = 1;
                            //console.log(data);
                            //检查同节点下分类标示是否重复

                            if (think.isEmpty(data.name)) {
                                _context4.next = 10;
                                break;
                            }

                            _context4.next = 7;
                            return this.model("category").where({ id: ["!=", data.id], name: data.name }).find();

                        case 7:
                            check = _context4.sent;

                            if (think.isEmpty(check)) {
                                _context4.next = 10;
                                break;
                            }

                            return _context4.abrupt('return', this.fail("同节点下,栏目标示不能重复"));

                        case 10:
                            _context4.next = 12;
                            return this.model("category").updates(data);

                        case 12:
                            res = _context4.sent;

                            if (res) {
                                this.success({ name: "更新成功！", url: "/admin/category/index" });
                            } else {
                                this.fail("更新失败！");
                            }
                            _context4.next = 157;
                            break;

                        case 16:
                            id = this.get("cid");
                            //console.log(id);
                            //获取分类信息

                            _context4.next = 19;
                            return category.find(id);

                        case 19:
                            info = _context4.sent;

                            this.assign("info", info);
                            //console.log(info);

                            if (think.isEmpty(info.documentsorts)) {
                                _context4.next = 40;
                                break;
                            }

                            types = JSON.parse(info.documentsorts);
                            typeobj = {};
                            _iterator = types.types, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 25:
                            if (!_isArray) {
                                _context4.next = 31;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context4.next = 28;
                                break;
                            }

                            return _context4.abrupt('break', 39);

                        case 28:
                            _ref5 = _iterator[_i++];
                            _context4.next = 35;
                            break;

                        case 31:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context4.next = 34;
                                break;
                            }

                            return _context4.abrupt('break', 39);

                        case 34:
                            _ref5 = _i.value;

                        case 35:
                            val = _ref5;

                            typeobj[val.enable] = val;

                        case 37:
                            _context4.next = 25;
                            break;

                        case 39:
                            this.assign("typeobj", typeobj);

                        case 40:
                            _context4.next = 42;
                            return this.model("typevar").getField("sortid");

                        case 42:
                            sortid = _context4.sent;
                            type = void 0;

                            if (think.isEmpty(sortid)) {
                                _context4.next = 49;
                                break;
                            }

                            sortid = unique(sortid);
                            //console.log(sortid);
                            //获取分类信息
                            _context4.next = 48;
                            return this.model("type").where({ typeid: ['IN', sortid] }).order('displayorder ASC').select();

                        case 48:
                            type = _context4.sent;

                        case 49:

                            this.assign("typelist", type);
                            //获取模型信息；
                            model = void 0;

                            if (!(info.mold == 0)) {
                                _context4.next = 57;
                                break;
                            }

                            _context4.next = 54;
                            return this.model("model").get_model(null, null, { extend: 1 });

                        case 54:
                            model = _context4.sent;
                            _context4.next = 61;
                            break;

                        case 57:
                            if (!(info.mold == 1)) {
                                _context4.next = 61;
                                break;
                            }

                            _context4.next = 60;
                            return this.model("model").get_model(null, null, { extend: 0 });

                        case 60:
                            model = _context4.sent;

                        case 61:

                            //console.log(obj_values(model));
                            this.assign("models", model);

                            if (!(info.mold == 1)) {
                                _context4.next = 70;
                                break;
                            }

                            _context4.next = 65;
                            return this.model("model").get_model(info.model);

                        case 65:
                            mod = _context4.sent;

                            console.log(mod);
                            this.assign("mod", mod);
                            _context4.next = 71;
                            break;

                        case 70:
                            this.assign("mod", { temp_show: 1,
                                type_show: 1,
                                priv_show: 1,
                                groups_show: 1 });

                        case 71:
                            this.active = "admin/category/index";
                            this.action = "/admin/category/edit";
                            this.meta_title = "编辑栏目";
                            //获取模版列表
                            //获取模版列表（pc）
                            _context4.next = 76;
                            return this.model("temp").gettemp(1);

                        case 76:
                            temp_pc = _context4.sent;

                            //console.log(temp_pc);
                            this.assign("temp_pc", temp_pc);
                            //获取手机端模版
                            _context4.next = 80;
                            return this.model("temp").gettemp(2);

                        case 80:
                            temp_m = _context4.sent;

                            //console.log(temp_m);
                            this.assign("temp_m", temp_m);
                            //template_lists
                            //会员组
                            _context4.next = 84;
                            return this.model("member_group").order("sort ASC").select();

                        case 84:
                            group = _context4.sent;

                            this.assign('group', group);
                            _context4.next = 88;
                            return this.model("auth_role").order("sort ASC").select();

                        case 88:
                            role = _context4.sent;

                            this.assign('role', role);
                            //提取权限
                            _context4.next = 92;
                            return this.model("category_priv").where({ catid: id }).select();

                        case 92:
                            priv = _context4.sent;

                            //console.log(priv);
                            priv_roleid = {};
                            priv_groupid = {};
                            _iterator2 = priv, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 96:
                            if (!_isArray2) {
                                _context4.next = 102;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context4.next = 99;
                                break;
                            }

                            return _context4.abrupt('break', 110);

                        case 99:
                            _ref6 = _iterator2[_i2++];
                            _context4.next = 106;
                            break;

                        case 102:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context4.next = 105;
                                break;
                            }

                            return _context4.abrupt('break', 110);

                        case 105:
                            _ref6 = _i2.value;

                        case 106:
                            _v2 = _ref6;

                            if (_v2.is_admin == 1) {
                                priv_roleid[_v2.roleid] = [];
                            } else {

                                priv_groupid[_v2.roleid] = [];
                            }

                        case 108:
                            _context4.next = 96;
                            break;

                        case 110:
                            _context4.t0 = _regenerator2.default.keys(priv_groupid);

                        case 111:
                            if ((_context4.t1 = _context4.t0()).done) {
                                _context4.next = 132;
                                break;
                            }

                            v = _context4.t1.value;
                            arr = [];
                            _iterator3 = priv, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 115:
                            if (!_isArray3) {
                                _context4.next = 121;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context4.next = 118;
                                break;
                            }

                            return _context4.abrupt('break', 129);

                        case 118:
                            _ref7 = _iterator3[_i3++];
                            _context4.next = 125;
                            break;

                        case 121:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context4.next = 124;
                                break;
                            }

                            return _context4.abrupt('break', 129);

                        case 124:
                            _ref7 = _i3.value;

                        case 125:
                            m = _ref7;

                            if (v == m.roleid && m.is_admin == 0) {
                                arr.push(m.action);
                            }

                        case 127:
                            _context4.next = 115;
                            break;

                        case 129:
                            priv_groupid[v] = arr;
                            _context4.next = 111;
                            break;

                        case 132:
                            _context4.t2 = _regenerator2.default.keys(priv_roleid);

                        case 133:
                            if ((_context4.t3 = _context4.t2()).done) {
                                _context4.next = 154;
                                break;
                            }

                            _v = _context4.t3.value;
                            _arr = [];
                            _iterator4 = priv, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 137:
                            if (!_isArray4) {
                                _context4.next = 143;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context4.next = 140;
                                break;
                            }

                            return _context4.abrupt('break', 151);

                        case 140:
                            _ref8 = _iterator4[_i4++];
                            _context4.next = 147;
                            break;

                        case 143:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context4.next = 146;
                                break;
                            }

                            return _context4.abrupt('break', 151);

                        case 146:
                            _ref8 = _i4.value;

                        case 147:
                            _m = _ref8;

                            if (_v == _m.roleid && _m.is_admin == 1) {
                                _arr.push(_m.action);
                            }

                        case 149:
                            _context4.next = 137;
                            break;

                        case 151:
                            priv_roleid[_v] = _arr;
                            _context4.next = 133;
                            break;

                        case 154:
                            //console.log(priv_groupid);
                            //console.log(priv_roleid);
                            this.assign("priv_groupid", priv_groupid);
                            this.assign("priv_roleid", priv_roleid);
                            return _context4.abrupt('return', this.display());

                        case 157:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function editAction() {
            return _ref4.apply(this, arguments);
        }

        return editAction;
    }();
    //删除栏目


    _class.prototype.delAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var id, confirm, type, pid, l, count, _pid, _iterator5, _isArray5, _i5, _ref10, v;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            id = this.get("id");
                            confirm = this.get("confirm");
                            type = this.get("type");

                            if (!(confirm == 1)) {
                                _context5.next = 24;
                                break;
                            }

                            _context5.next = 6;
                            return this.model("category").get_sub_category(id);

                        case 6:
                            pid = _context5.sent;

                            //console.log(pid);

                            l = pid.length;

                            if (!(l > 0)) {
                                _context5.next = 10;
                                break;
                            }

                            return _context5.abrupt('return', this.json({ ok: 2, info: '\u8BE5\u680F\u76EE\u542B\u6709' + l + '\u5B50\u680F\u76EE' }));

                        case 10:
                            _context5.next = 12;
                            return this.model("document").where({ category_id: id }).count("id");

                        case 12:
                            count = _context5.sent;

                            if (!(count == 0)) {
                                _context5.next = 23;
                                break;
                            }

                            _context5.next = 16;
                            return this.model("category").delete({ where: { id: id } });

                        case 16:
                            _context5.next = 18;
                            return this.model("category_priv").delete({ where: { catid: id } });

                        case 18:
                            think.cache("sys_category_list", null);
                            think.cache("all_category", null);
                            return _context5.abrupt('return', this.json({ ok: 0, info: "删除成功!" }));

                        case 23:
                            return _context5.abrupt('return', this.json({ ok: 1, info: '\u8BE5\u680F\u76EE\u542B\u6709' + count + '\u6761\u5185\u5BB9' }));

                        case 24:
                            if (!(type == "one")) {
                                _context5.next = 30;
                                break;
                            }

                            _context5.next = 27;
                            return this.delcate(id);

                        case 27:
                            return _context5.abrupt('return', this.json({ ok: 0, info: "删除成功!" }));

                        case 30:
                            if (!(type == "all")) {
                                _context5.next = 53;
                                break;
                            }

                            _context5.next = 33;
                            return this.model("category").get_sub_category(id);

                        case 33:
                            _pid = _context5.sent;
                            _iterator5 = _pid, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

                        case 35:
                            if (!_isArray5) {
                                _context5.next = 41;
                                break;
                            }

                            if (!(_i5 >= _iterator5.length)) {
                                _context5.next = 38;
                                break;
                            }

                            return _context5.abrupt('break', 50);

                        case 38:
                            _ref10 = _iterator5[_i5++];
                            _context5.next = 45;
                            break;

                        case 41:
                            _i5 = _iterator5.next();

                            if (!_i5.done) {
                                _context5.next = 44;
                                break;
                            }

                            return _context5.abrupt('break', 50);

                        case 44:
                            _ref10 = _i5.value;

                        case 45:
                            v = _ref10;
                            _context5.next = 48;
                            return this.delcate(v);

                        case 48:
                            _context5.next = 35;
                            break;

                        case 50:
                            _context5.next = 52;
                            return this.delcate(id);

                        case 52:
                            return _context5.abrupt('return', this.json({ ok: 0, info: "删除成功!" }));

                        case 53:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function delAction() {
            return _ref9.apply(this, arguments);
        }

        return delAction;
    }();

    _class.prototype.delcate = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(id) {
            var ids, model_id, _iterator6, _isArray6, _i6, _ref12, v, table, sort, _iterator7, _isArray7, _i7, _ref13, _v3, _table;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return this.model("document").where({ category_id: id }).getField("id");

                        case 2:
                            ids = _context6.sent;

                            if (think.isEmpty(ids)) {
                                _context6.next = 26;
                                break;
                            }

                            _context6.next = 6;
                            return this.model("category").get_category(id, "model");

                        case 6:
                            model_id = _context6.sent;
                            _iterator6 = model_id.split(","), _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

                        case 8:
                            if (!_isArray6) {
                                _context6.next = 14;
                                break;
                            }

                            if (!(_i6 >= _iterator6.length)) {
                                _context6.next = 11;
                                break;
                            }

                            return _context6.abrupt('break', 26);

                        case 11:
                            _ref12 = _iterator6[_i6++];
                            _context6.next = 18;
                            break;

                        case 14:
                            _i6 = _iterator6.next();

                            if (!_i6.done) {
                                _context6.next = 17;
                                break;
                            }

                            return _context6.abrupt('break', 26);

                        case 17:
                            _ref12 = _i6.value;

                        case 18:
                            v = _ref12;
                            _context6.next = 21;
                            return this.model("model").get_table_name(v);

                        case 21:
                            table = _context6.sent;
                            _context6.next = 24;
                            return this.model(table).where({ id: ["IN", ids] }).delete();

                        case 24:
                            _context6.next = 8;
                            break;

                        case 26:
                            _context6.next = 28;
                            return this.model("category").get_category(id, "documentsorts");

                        case 28:
                            sort = _context6.sent;

                            if (think.isEmpty(sort)) {
                                _context6.next = 50;
                                break;
                            }

                            _context6.next = 32;
                            return this.model("typeoptionvar").where({ fid: id }).delete();

                        case 32:
                            if (think.isEmpty(JSON.parse(sort).types)) {
                                _context6.next = 50;
                                break;
                            }

                            _iterator7 = JSON.parse(sort).types, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);

                        case 34:
                            if (!_isArray7) {
                                _context6.next = 40;
                                break;
                            }

                            if (!(_i7 >= _iterator7.length)) {
                                _context6.next = 37;
                                break;
                            }

                            return _context6.abrupt('break', 50);

                        case 37:
                            _ref13 = _iterator7[_i7++];
                            _context6.next = 44;
                            break;

                        case 40:
                            _i7 = _iterator7.next();

                            if (!_i7.done) {
                                _context6.next = 43;
                                break;
                            }

                            return _context6.abrupt('break', 50);

                        case 43:
                            _ref13 = _i7.value;

                        case 44:
                            _v3 = _ref13;
                            _table = 'type_optionvalue' + _v3.enable;
                            _context6.next = 48;
                            return this.model(_table).where({ fid: id }).delete();

                        case 48:
                            _context6.next = 34;
                            break;

                        case 50:
                            _context6.next = 52;
                            return this.model("category").delete({ where: { id: id } });

                        case 52:
                            _context6.next = 54;
                            return this.model("category_priv").delete({ where: { catid: id } });

                        case 54:
                            _context6.next = 56;
                            return this.model("document").delete({ where: { category_id: id } });

                        case 56:
                            update_cache("category"); //更新栏目缓存
                            //查处要删除的该栏目内容的id

                        case 57:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function delcate(_x) {
            return _ref11.apply(this, arguments);
        }

        return delcate;
    }();
    //移动/合并栏目


    _class.prototype.moveAction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var data, pid, l, source, target, s_model_id, t_model_id, ntarget, a1, a2, o1, _iterator8, _isArray8, _i8, _ref15, v, o2, _iterator9, _isArray9, _i9, _ref16, _v4, o3, na, k, url, documentsorts, _iterator10, _isArray10, _i10, _ref17, _v5, from;

            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context7.next = 105;
                                break;
                            }

                            data = this.post();

                            console.log(data);
                            //return false;
                            //检查要移动的栏目是否包含子栏目
                            _context7.next = 5;
                            return this.model("category").get_sub_category(data.source);

                        case 5:
                            pid = _context7.sent;

                            //console.log(pid);
                            l = pid.length;

                            if (!(l > 0)) {
                                _context7.next = 9;
                                break;
                            }

                            return _context7.abrupt('return', this.fail('\u6E90\u680F\u76EE\u542B\u6709' + l + '\u4E2A\u5B50\u680F\u76EE\uFF0C\u524D\u5148\u5220\u9664\u6216\u8005\u79FB\u8D70\u5B50\u680F\u76EE\uFF0C\u518D\u8FDB\u884C\u64CD\u4F5C\uFF01'));

                        case 9:
                            if (!(data.source == data.target)) {
                                _context7.next = 11;
                                break;
                            }

                            return _context7.abrupt('return', this.fail("源栏目不能与目标栏目重复！"));

                        case 11:
                            if (!(data.target == 0)) {
                                _context7.next = 13;
                                break;
                            }

                            return _context7.abrupt('return', this.fail("请选择目标栏目！"));

                        case 13:
                            _context7.next = 15;
                            return this.model("category").find(data.source);

                        case 15:
                            source = _context7.sent;
                            _context7.next = 18;
                            return this.model("category").find(data.target);

                        case 18:
                            target = _context7.sent;

                            //获取栏目模型信息
                            console.log(target);
                            s_model_id = [];

                            if (!think.isEmpty(source.model)) {
                                s_model_id = source.model.split(",");
                            }
                            t_model_id = [];

                            if (!think.isEmpty(target.model)) {
                                t_model_id = target.model.split(",");
                            }
                            ntarget = target;
                            //检查源栏目与目标栏目的模型，如果相等，直接复制，如果不相等合并。

                            if (!a2a(s_model_id, t_model_id)) {
                                ntarget.model = unique(t_model_id.concat(s_model_id)).sort().join(",");
                            };
                            //console.log(2222222);
                            if (!think.isEmpty(source.groups) && think.isEmpty(target.groups)) {
                                ntarget.groups = source.groups;
                            }
                            if (!think.isEmpty(source.documentsorts) && think.isEmpty(target.documentsorts)) {
                                ntarget.documentsorts = source.documentsorts;
                            }

                            if (!(!think.isEmpty(source.documentsorts) && !think.isEmpty(target.documentsorts))) {
                                _context7.next = 69;
                                break;
                            }

                            a1 = JSON.parse(source.documentsorts);
                            a2 = JSON.parse(target.documentsorts);
                            o1 = {};
                            _iterator8 = a1.types, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);

                        case 34:
                            if (!_isArray8) {
                                _context7.next = 40;
                                break;
                            }

                            if (!(_i8 >= _iterator8.length)) {
                                _context7.next = 37;
                                break;
                            }

                            return _context7.abrupt('break', 48);

                        case 37:
                            _ref15 = _iterator8[_i8++];
                            _context7.next = 44;
                            break;

                        case 40:
                            _i8 = _iterator8.next();

                            if (!_i8.done) {
                                _context7.next = 43;
                                break;
                            }

                            return _context7.abrupt('break', 48);

                        case 43:
                            _ref15 = _i8.value;

                        case 44:
                            v = _ref15;

                            o1[v.enable] = v;

                        case 46:
                            _context7.next = 34;
                            break;

                        case 48:
                            o2 = {};
                            _iterator9 = a2.types, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);

                        case 50:
                            if (!_isArray9) {
                                _context7.next = 56;
                                break;
                            }

                            if (!(_i9 >= _iterator9.length)) {
                                _context7.next = 53;
                                break;
                            }

                            return _context7.abrupt('break', 64);

                        case 53:
                            _ref16 = _iterator9[_i9++];
                            _context7.next = 60;
                            break;

                        case 56:
                            _i9 = _iterator9.next();

                            if (!_i9.done) {
                                _context7.next = 59;
                                break;
                            }

                            return _context7.abrupt('break', 64);

                        case 59:
                            _ref16 = _i9.value;

                        case 60:
                            _v4 = _ref16;

                            o2[_v4.enable] = _v4;

                        case 62:
                            _context7.next = 50;
                            break;

                        case 64:
                            //console.log(o1);
                            //console.log(o2);
                            o3 = think.extend(o1, o2);
                            //console.log(o3);

                            na = [];

                            for (k in o3) {
                                na.push(o3[k]);
                            }
                            a2.types = na;
                            //console.log(na);
                            ntarget.documentsorts = (0, _stringify2.default)(a2);

                        case 69:
                            if (!(!think.isEmpty(source.groups) && source.groups != target.groups && !think.isEmpty(target.groups))) {
                                _context7.next = 77;
                                break;
                            }

                            _context7.next = 72;
                            return this.session("ntarget", ntarget);

                        case 72:
                            url = '/admin/category/moveinfo/source/' + data.source + '/target/' + data.target;

                            if (data.merge == 1) {
                                url = '/admin/category/moveinfo/merge/1/source/' + data.source + '/target/' + data.target;
                            }
                            return _context7.abrupt('return', this.success({ "name": "源栏目与目标栏目存在不同的分组或者分类信息，转入处理页面。", "url": url }));

                        case 77:

                            //console.log(ntarget);
                            this.model("category").update(ntarget); //复制栏目信息
                            this.model("document").where({ category_id: source.id }).update({ category_id: ntarget.id }); //移动文章
                            //如果存在分类信息移动分类信息内容

                            if (think.isEmpty(source.documentsorts)) {
                                _context7.next = 98;
                                break;
                            }

                            documentsorts = JSON.parse(source.documentsorts);

                            if (think.isEmpty(documentsorts.types)) {
                                _context7.next = 98;
                                break;
                            }

                            _iterator10 = documentsorts.types, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);

                        case 83:
                            if (!_isArray10) {
                                _context7.next = 89;
                                break;
                            }

                            if (!(_i10 >= _iterator10.length)) {
                                _context7.next = 86;
                                break;
                            }

                            return _context7.abrupt('break', 98);

                        case 86:
                            _ref17 = _iterator10[_i10++];
                            _context7.next = 93;
                            break;

                        case 89:
                            _i10 = _iterator10.next();

                            if (!_i10.done) {
                                _context7.next = 92;
                                break;
                            }

                            return _context7.abrupt('break', 98);

                        case 92:
                            _ref17 = _i10.value;

                        case 93:
                            _v5 = _ref17;

                            this.model("type_optionvalue" + _v5.enable).where({ fid: source.id }).update({ fid: ntarget.id });
                            this.model("typeoptionvar").where({ fid: source.id, sortid: _v5.enable }).update({ fid: ntarget.id });

                        case 96:
                            _context7.next = 83;
                            break;

                        case 98:
                            if (!(data.merge == 1)) {
                                _context7.next = 101;
                                break;
                            }

                            _context7.next = 101;
                            return this.model("category").delete({ where: { id: data.source } });

                        case 101:
                            update_cache("category"); //更新栏目缓存
                            return _context7.abrupt('return', this.success({ name: "成功！", url: "/admin/category/index" }));

                        case 103:
                            _context7.next = 110;
                            break;

                        case 105:
                            from = this.get("from");

                            this.assign("from", from);
                            this.active = "admin/category/index";
                            if (this.get('merge') == 1) {
                                this.meta_title = "合并栏目";
                            } else {
                                this.meta_title = "移动栏目";
                            }

                            return _context7.abrupt('return', this.display());

                        case 110:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function moveAction() {
            return _ref14.apply(this, arguments);
        }

        return moveAction;
    }();

    _class.prototype.moveinfoAction = function () {
        var _ref18 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var data, source, ntarget, arr, _iterator11, _isArray11, _i11, _ref19, v, documentsorts, _iterator12, _isArray12, _i12, _ref20, _v6, groups, _iterator13, _isArray13, _i13, _ref21, _v7, _data, _source, target;

            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context8.next = 73;
                                break;
                            }

                            data = this.post();

                            console.log(data);
                            //return false;
                            _context8.next = 5;
                            return this.model("category").find(data.source_id);

                        case 5:
                            source = _context8.sent;
                            _context8.next = 8;
                            return this.session("ntarget");

                        case 8:
                            ntarget = _context8.sent;

                            console.log(source);

                            if (!(data.option == 2)) {
                                _context8.next = 28;
                                break;
                            }

                            arr = [];
                            _iterator11 = JSON.parse(data.data), _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : (0, _getIterator3.default)(_iterator11);

                        case 13:
                            if (!_isArray11) {
                                _context8.next = 19;
                                break;
                            }

                            if (!(_i11 >= _iterator11.length)) {
                                _context8.next = 16;
                                break;
                            }

                            return _context8.abrupt('break', 27);

                        case 16:
                            _ref19 = _iterator11[_i11++];
                            _context8.next = 23;
                            break;

                        case 19:
                            _i11 = _iterator11.next();

                            if (!_i11.done) {
                                _context8.next = 22;
                                break;
                            }

                            return _context8.abrupt('break', 27);

                        case 22:
                            _ref19 = _i11.value;

                        case 23:
                            v = _ref19;

                            arr.push('\r\n' + v.nid + ':' + v.name);

                        case 25:
                            _context8.next = 13;
                            break;

                        case 27:
                            ntarget.groups = ntarget.groups + arr.join("");

                        case 28:
                            _context8.next = 30;
                            return this.model("category").update(ntarget);

                        case 30:
                            //复制栏目信息

                            this.model("document").where({ category_id: source.id }).update({ category_id: ntarget.id }); //移动文章
                            //如果存在分类信息移动分类信息内容

                            if (think.isEmpty(source.documentsorts)) {
                                _context8.next = 50;
                                break;
                            }

                            documentsorts = JSON.parse(source.documentsorts);

                            if (think.isEmpty(documentsorts.types)) {
                                _context8.next = 50;
                                break;
                            }

                            _iterator12 = documentsorts.types, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : (0, _getIterator3.default)(_iterator12);

                        case 35:
                            if (!_isArray12) {
                                _context8.next = 41;
                                break;
                            }

                            if (!(_i12 >= _iterator12.length)) {
                                _context8.next = 38;
                                break;
                            }

                            return _context8.abrupt('break', 50);

                        case 38:
                            _ref20 = _iterator12[_i12++];
                            _context8.next = 45;
                            break;

                        case 41:
                            _i12 = _iterator12.next();

                            if (!_i12.done) {
                                _context8.next = 44;
                                break;
                            }

                            return _context8.abrupt('break', 50);

                        case 44:
                            _ref20 = _i12.value;

                        case 45:
                            _v6 = _ref20;

                            this.model("type_optionvalue" + _v6.enable).where({ fid: source.id }).update({ fid: ntarget.id });
                            this.model("typeoptionvar").where({ fid: source.id, sortid: _v6.enable }).update({ fid: ntarget.id });

                        case 48:
                            _context8.next = 35;
                            break;

                        case 50:
                            //移动分组
                            groups = JSON.parse(data.data);
                            _iterator13 = groups, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : (0, _getIterator3.default)(_iterator13);

                        case 52:
                            if (!_isArray13) {
                                _context8.next = 58;
                                break;
                            }

                            if (!(_i13 >= _iterator13.length)) {
                                _context8.next = 55;
                                break;
                            }

                            return _context8.abrupt('break', 66);

                        case 55:
                            _ref21 = _iterator13[_i13++];
                            _context8.next = 62;
                            break;

                        case 58:
                            _i13 = _iterator13.next();

                            if (!_i13.done) {
                                _context8.next = 61;
                                break;
                            }

                            return _context8.abrupt('break', 66);

                        case 61:
                            _ref21 = _i13.value;

                        case 62:
                            _v7 = _ref21;

                            if (_v7.oid != _v7.nid) {
                                this.model("document").where({ group_id: _v7.oid }).update({ group_id: _v7.nid }); //移动文章
                            }

                        case 64:
                            _context8.next = 52;
                            break;

                        case 66:
                            if (!(data.merge == 1)) {
                                _context8.next = 69;
                                break;
                            }

                            _context8.next = 69;
                            return this.model("category").delete({ where: { id: data.source_id } });

                        case 69:
                            update_cache("category"); //更新栏目缓存
                            return _context8.abrupt('return', this.success({ name: "成功！", url: "/admin/category/index" }));

                        case 73:
                            _data = this.get();

                            console.log(_data);
                            _context8.next = 77;
                            return this.model("category").find(_data.source);

                        case 77:
                            _source = _context8.sent;
                            _context8.next = 80;
                            return this.session("ntarget");

                        case 80:
                            target = _context8.sent;

                            this.assign({
                                source_groups: parse_type_attr(_source.groups),
                                target_groups: parse_type_attr(target.groups),
                                source_g_s: (0, _stringify2.default)(parse_type_attr(_source.groups)),
                                source_name: _source.title,
                                target_name: target.title,
                                source_id: _source.id
                            });
                            console.log(parse_type_attr(_source.groups));
                            console.log(target);
                            this.active = "admin/category/index";

                            if (_data.merge == 1) {
                                this.meta_title = "合并栏目";
                            } else {
                                this.meta_title = "移动栏目";
                            }

                            return _context8.abrupt('return', this.display());

                        case 87:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function moveinfoAction() {
            return _ref18.apply(this, arguments);
        }

        return moveinfoAction;
    }();
    //是否在手机端显示


    _class.prototype.isappAction = function () {
        var _ref22 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var up;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            _context9.next = 2;
                            return this.model("category").where({ id: this.get("ids") }).update({ isapp: this.get("isapp") });

                        case 2:
                            up = _context9.sent;

                            if (!up) {
                                _context9.next = 8;
                                break;
                            }

                            update_cache("category"); //更新栏目缓存
                            return _context9.abrupt('return', this.success({ name: "操作成功!" }));

                        case 8:
                            return _context9.abrupt('return', this.fail("操作失败!"));

                        case 9:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function isappAction() {
            return _ref22.apply(this, arguments);
        }

        return isappAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=category.js.map