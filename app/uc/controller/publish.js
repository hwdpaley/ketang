// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

exports.__esModule = true;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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
    //在线投稿
    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var cate_id, priv, model_id, position, group_id, sortid, sortval, models, groups, model, _model, sort, typevar, _iterator, _isArray, _i, _ref2, val, _iterator2, _isArray2, _i2, _ref3, v, searchtxt, searcharr, arr, len, i, obj, pid, nav, data, fields, ngrids, grids, _iterator3, _isArray3, _i3, _ref4, value, _val2, field, _val2$1$split, _iterator6, _isArray6, _i6, _ref7, _val3, array, list, _iterator4, _isArray4, _i4, _ref5, _val4, modellist, _iterator5, _isArray5, _i5, _ref6, _val, modelobj;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.weblogin();

                        case 2:
                            cate_id = this.get('cate_id') || null;
                            //console.log(cate_id);
                            //权限控制

                            _context.next = 5;
                            return this.priv(cate_id);

                        case 5:
                            priv = _context.sent;

                            if (!priv) {
                                _context.next = 9;
                                break;
                            }

                            this.http.error = new Error('网站禁止投稿！');
                            return _context.abrupt('return', think.statusAction(702, this.http));

                        case 9:

                            //let [model_id=null,position=null,group_id=null,sortid=null,sortval=null]=[this.get('model_id'),this.get('position'),this.get('group_id'),this.get('sortid'),this.get('sortval')];

                            model_id = this.get('model_id') || null;
                            position = this.get('position') || null;
                            group_id = this.get('group_id') || 0;
                            sortid = this.get('sortid') || 0;
                            sortval = this.get('sortval') || null;
                            models = void 0, groups = void 0, model = void 0, _model = void 0;
                            // let groups;
                            // let model;
                            // let _model;

                            if (think.isEmpty(cate_id)) {
                                _context.next = 109;
                                break;
                            }

                            _context.next = 18;
                            return this.model("category").get_category(cate_id, 'documentsorts');

                        case 18:
                            sort = _context.sent;

                            if (!sort) {
                                _context.next = 71;
                                break;
                            }

                            sort = JSON.parse(sort);
                            if (sortid == 0) {
                                sortid = sort.defaultshow;
                            }
                            _context.next = 24;
                            return this.model("typevar").where({ sortid: sortid }).select();

                        case 24:
                            typevar = _context.sent;
                            _iterator = typevar, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 26:
                            if (!_isArray) {
                                _context.next = 32;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 29;
                                break;
                            }

                            return _context.abrupt('break', 70);

                        case 29:
                            _ref2 = _iterator[_i++];
                            _context.next = 36;
                            break;

                        case 32:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 35;
                                break;
                            }

                            return _context.abrupt('break', 70);

                        case 35:
                            _ref2 = _i.value;

                        case 36:
                            val = _ref2;
                            _context.next = 39;
                            return this.model("typeoption").where({ optionid: val.optionid }).find();

                        case 39:
                            val.option = _context.sent;

                            if (!(val.option.type == 'select' || val.option.type == 'radio')) {
                                _context.next = 44;
                                break;
                            }

                            if (!think.isEmpty(val.option.rules)) {
                                val.option.rules = JSON.parse(val.option.rules);
                                val.rules = parse_type_attr(val.option.rules.choices);
                                val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            }

                            _context.next = 68;
                            break;

                        case 44:
                            if (!(val.option.type == 'checkbox')) {
                                _context.next = 67;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context.next = 65;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.rules = parse_type_attr(val.option.rules.choices);
                            console.log(val.rules);
                            _iterator2 = val.rules, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 50:
                            if (!_isArray2) {
                                _context.next = 56;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 53;
                                break;
                            }

                            return _context.abrupt('break', 64);

                        case 53:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 60;
                            break;

                        case 56:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 59;
                                break;
                            }

                            return _context.abrupt('break', 64);

                        case 59:
                            _ref3 = _i2.value;

                        case 60:
                            v = _ref3;

                            v.id = "l>" + v.id;

                        case 62:
                            _context.next = 50;
                            break;

                        case 64:
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            //console.log(val.rules);

                        case 65:
                            _context.next = 68;
                            break;

                        case 67:
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

                        case 68:
                            _context.next = 26;
                            break;

                        case 70:
                            //console.log(typevar);
                            this.assign("typevar", typevar);

                        case 71:
                            //console.log(sort);
                            this.assign("sort", sort);
                            pid = this.get("pid") || 0;
                            // 获取列表绑定的模型

                            if (!(pid == 0)) {
                                _context.next = 83;
                                break;
                            }

                            _context.next = 76;
                            return this.model("category").get_category(cate_id, 'model');

                        case 76:
                            models = _context.sent;
                            _context.next = 79;
                            return this.model("category").get_category(cate_id, 'groups');

                        case 79:
                            groups = _context.sent;

                            if (groups) {
                                groups = parse_config_attr(groups);
                            }
                            _context.next = 86;
                            break;

                        case 83:
                            _context.next = 85;
                            return this.model("category").get_category(cate_id, 'model_sub');

                        case 85:
                            models = _context.sent;

                        case 86:
                            _context.next = 88;
                            return this.model('category').get_parent_category(cate_id || 0);

                        case 88:
                            nav = _context.sent;

                            this.assign('breadcrumb', nav);

                            if (!(think.isEmpty(model_id) && !think.isNumberString(models))) {
                                _context.next = 96;
                                break;
                            }

                            _context.next = 93;
                            return this.model('model').where({ name: 'document' }).find();

                        case 93:
                            model = _context.sent;
                            _context.next = 105;
                            break;

                        case 96:

                            model_id = model_id ? model_id : models;
                            //获取模型信息
                            _context.next = 99;
                            return this.model('model').where({ id: ['IN', [model_id]] }).find();

                        case 99:
                            model = _context.sent;

                            if (!think.isEmpty(model['list_grid'])) {
                                _context.next = 105;
                                break;
                            }

                            _context.next = 103;
                            return this.model('model').field('list_grid').where({ name: 'document' }).find();

                        case 103:
                            data = _context.sent;

                            model.list_grid = data.list_grid;
                            //console.log(33);

                        case 105:
                            this.assign('model', models.split(","));
                            _model = models.split(",");
                            _context.next = 116;
                            break;

                        case 109:
                            _context.next = 111;
                            return this.model("model").where({ name: "document" }).find();

                        case 111:
                            model = _context.sent;

                            model_id = null;
                            cate_id = 0;
                            this.assign('model', null);
                            _model = null;

                        case 116:
                            //解析列表规则
                            fields = [];
                            ngrids = [];
                            //console.log(model);

                            grids = model.list_grid.split("\r\n");
                            _iterator3 = grids, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 120:
                            if (!_isArray3) {
                                _context.next = 126;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context.next = 123;
                                break;
                            }

                            return _context.abrupt('break', 155);

                        case 123:
                            _ref4 = _iterator3[_i3++];
                            _context.next = 130;
                            break;

                        case 126:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context.next = 129;
                                break;
                            }

                            return _context.abrupt('break', 155);

                        case 129:
                            _ref4 = _i3.value;

                        case 130:
                            value = _ref4;

                            //字段:标题:链接
                            _val2 = value.split(":");
                            //支持多个字段显示

                            field = _val2[0].split(",");

                            value = { field: field, title: _val2[1] };

                            if (!think.isEmpty(_val2[2])) {
                                value.href = _val2[2];
                            }
                            // console.log(222);
                            if (_val2[1]) {
                                if (_val2[1].indexOf('|') > -1) {
                                    _val2$1$split = _val2[1].split('|');
                                    // 显示格式定义

                                    values.title = _val2$1$split[0];
                                    values.format = _val2$1$split[1];
                                }
                            }
                            //console.log(field);
                            _iterator6 = field, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

                        case 137:
                            if (!_isArray6) {
                                _context.next = 143;
                                break;
                            }

                            if (!(_i6 >= _iterator6.length)) {
                                _context.next = 140;
                                break;
                            }

                            return _context.abrupt('break', 152);

                        case 140:
                            _ref7 = _iterator6[_i6++];
                            _context.next = 147;
                            break;

                        case 143:
                            _i6 = _iterator6.next();

                            if (!_i6.done) {
                                _context.next = 146;
                                break;
                            }

                            return _context.abrupt('break', 152);

                        case 146:
                            _ref7 = _i6.value;

                        case 147:
                            _val3 = _ref7;
                            array = _val3.split('|');

                            fields.push(array[0]);

                        case 150:
                            _context.next = 137;
                            break;

                        case 152:
                            ngrids.push(value);

                        case 153:
                            _context.next = 120;
                            break;

                        case 155:
                            // 文档模型列表始终要获取的数据字段 用于其他用途
                            fields.push('category_id');
                            fields.push('model_id');
                            fields.push('pid');
                            //过滤重复字段
                            fields = unique(fields);
                            //console.log(fields);
                            // console.log(model_id);
                            _context.next = 161;
                            return this.getDocumentList(cate_id, model_id, position, fields, group_id, sortval, sortid);

                        case 161:
                            list = _context.sent;
                            _iterator4 = list, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 163:
                            if (!_isArray4) {
                                _context.next = 169;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context.next = 166;
                                break;
                            }

                            return _context.abrupt('break', 183);

                        case 166:
                            _ref5 = _iterator4[_i4++];
                            _context.next = 173;
                            break;

                        case 169:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context.next = 172;
                                break;
                            }

                            return _context.abrupt('break', 183);

                        case 172:
                            _ref5 = _i4.value;

                        case 173:
                            _val4 = _ref5;

                            if (!_val4.pics) {
                                _context.next = 180;
                                break;
                            }

                            _context.next = 177;
                            return get_pic(_val4.pics.split(",")[0], 1, 100);

                        case 177:
                            _val4.pics = _context.sent;
                            _context.next = 181;
                            break;

                        case 180:
                            _val4.pics = '/static/noimg.jpg';

                        case 181:
                            _context.next = 163;
                            break;

                        case 183:
                            _context.next = 185;
                            return this.parseDocumentList(list, model_id);

                        case 185:
                            list = _context.sent;

                            //获取模型信息
                            modellist = [];
                            //console.log(111111111)

                            if (!think.isEmpty(_model)) {
                                _context.next = 191;
                                break;
                            }

                            modellist = null;
                            _context.next = 211;
                            break;

                        case 191:
                            _iterator5 = _model, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

                        case 192:
                            if (!_isArray5) {
                                _context.next = 198;
                                break;
                            }

                            if (!(_i5 >= _iterator5.length)) {
                                _context.next = 195;
                                break;
                            }

                            return _context.abrupt('break', 211);

                        case 195:
                            _ref6 = _iterator5[_i5++];
                            _context.next = 202;
                            break;

                        case 198:
                            _i5 = _iterator5.next();

                            if (!_i5.done) {
                                _context.next = 201;
                                break;
                            }

                            return _context.abrupt('break', 211);

                        case 201:
                            _ref6 = _i5.value;

                        case 202:
                            _val = _ref6;
                            modelobj = {};

                            modelobj.id = _val;
                            _context.next = 207;
                            return this.model("model").get_document_model(_val, "title");

                        case 207:
                            modelobj.title = _context.sent;

                            modellist.push(modelobj);

                        case 209:
                            _context.next = 192;
                            break;

                        case 211:
                            this.meta_title = "在线投稿";
                            this.assign('modellist', modellist);
                            this.assign('cate_id', cate_id);
                            this.assign('model_id', model_id);
                            this.assign('group_id', group_id);
                            this.assign('sortid', sortid);
                            this.assign('position', position);
                            this.assign('groups', groups);
                            this.assign('list', list);
                            this.assign('list_grids', ngrids);
                            this.assign('model_list', model);
                            console.log("list=============" + (0, _stringify2.default)(list));
                            console.log("list_grids=============" + (0, _stringify2.default)(ngrids));
                            return _context.abrupt('return', this.display());

                        case 225:
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
     * 新增投稿
     */


    _class.prototype.addAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var cate_id, priv, model_id, group_id, sortid, groups, sort, typevar, _iterator7, _isArray7, _i7, _ref9, val, allow_publish, model, info, article, fields, type_list, nav;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.weblogin();

                        case 2:
                            cate_id = this.get("cate_id") || 0;

                            if (think.isEmpty(cate_id)) {
                                console.log("null.    ----------");
                            }
                            //权限控制
                            _context2.next = 6;
                            return this.priv(cate_id);

                        case 6:
                            priv = _context2.sent;

                            if (!priv) {
                                _context2.next = 10;
                                break;
                            }

                            this.http.error = new Error('您所在的会员组,禁止在本栏目投稿！');
                            return _context2.abrupt('return', think.statusAction(702, this.http));

                        case 10:
                            model_id = this.get("model_id") || 0;
                            group_id = this.get("group_id") || '';
                            sortid = this.get('sortid') || 0;

                            console.log("cate_id,model_id,group_id,sortid=====" + cate_id + "," + model_id + "," + group_id + "," + sortid);
                            think.isEmpty(cate_id) && this.fail("参数不能为空");
                            think.isEmpty(model_id) && this.fail("该分类未绑定模型");
                            // 获取分组定义
                            _context2.next = 18;
                            return this.model("category").get_category(cate_id, 'groups');

                        case 18:
                            groups = _context2.sent;

                            if (groups) {
                                groups = parse_config_attr(groups);
                            }
                            // 获取分类信息
                            _context2.next = 22;
                            return this.model("category").get_category(cate_id, 'documentsorts');

                        case 22:
                            sort = _context2.sent;

                            if (!sort) {
                                _context2.next = 48;
                                break;
                            }

                            sort = JSON.parse(sort);
                            if (sortid == 0) {
                                sortid = sort.defaultshow;
                            }
                            _context2.next = 28;
                            return this.model("typevar").where({ sortid: sortid }).select();

                        case 28:
                            typevar = _context2.sent;
                            _iterator7 = typevar, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);

                        case 30:
                            if (!_isArray7) {
                                _context2.next = 36;
                                break;
                            }

                            if (!(_i7 >= _iterator7.length)) {
                                _context2.next = 33;
                                break;
                            }

                            return _context2.abrupt('break', 47);

                        case 33:
                            _ref9 = _iterator7[_i7++];
                            _context2.next = 40;
                            break;

                        case 36:
                            _i7 = _iterator7.next();

                            if (!_i7.done) {
                                _context2.next = 39;
                                break;
                            }

                            return _context2.abrupt('break', 47);

                        case 39:
                            _ref9 = _i7.value;

                        case 40:
                            val = _ref9;
                            _context2.next = 43;
                            return this.model("typeoption").where({ optionid: val.optionid }).find();

                        case 43:
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

                        case 45:
                            _context2.next = 30;
                            break;

                        case 47:
                            //console.log(typevar);
                            this.assign("typevar", typevar);

                        case 48:
                            //console.log(sort);
                            this.assign("sort", sort);
                            //检查该分类是否允许发布
                            _context2.next = 51;
                            return this.model("category").check_category(cate_id);

                        case 51:
                            allow_publish = _context2.sent;

                            //console.log(allow_publish);
                            !allow_publish && this.fail("该分类不允许发布内容");

                            //获取当先的模型信息
                            _context2.next = 55;
                            return this.model("model").get_document_model(model_id);

                        case 55:
                            model = _context2.sent;


                            //处理结果
                            info = {};

                            info.pid = this.get("pid") ? this.get("pid") : 0;
                            info.model_id = model_id;
                            info.category_id = cate_id;
                            info.group_id = group_id;

                            if (!info.pid) {
                                _context2.next = 66;
                                break;
                            }

                            _context2.next = 64;
                            return this.model("document").field('id,title,type').find(info.pid);

                        case 64:
                            article = _context2.sent;

                            this.assign("article", article);

                        case 66:
                            _context2.next = 68;
                            return this.model("attribute").get_model_attribute(model.id, true);

                        case 68:
                            fields = _context2.sent;

                            think.log(fields);
                            //获取当前分类文档的类型
                            _context2.next = 72;
                            return this.model("category").get_type_bycate(cate_id);

                        case 72:
                            type_list = _context2.sent;
                            _context2.next = 75;
                            return this.model('category').get_parent_category(cate_id);

                        case 75:
                            nav = _context2.sent;

                            //console.log(model);
                            this.assign('groups', groups);
                            this.assign('breadcrumb', nav);
                            this.assign('info', info);
                            this.assign('fields', fields);
                            this.assign('type_list', type_list);
                            this.assign('model', model);
                            this.meta_title = '新增' + model.title;
                            this.active = "admin/article/index";
                            console.log('add------------');
                            return _context2.abrupt('return', this.display());

                        case 86:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function addAction() {
            return _ref8.apply(this, arguments);
        }

        return addAction;
    }();

    //编辑文档


    _class.prototype.editAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var id, sortid, document, data, article, model, groups, sort, typevar, _iterator8, _isArray8, _i8, _ref11, val, fields, type_list, tags, nav;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return this.weblogin();

                        case 2:
                            id = this.get('id') || "";

                            console.log("id==========," + id);
                            sortid = this.get('sortid') || 0;

                            if (think.isEmpty(id)) {
                                this.fail("参数不能为空");
                            }
                            //获取详细数据；
                            document = this.model("document");
                            _context3.next = 9;
                            return document.details(id);

                        case 9:
                            data = _context3.sent;

                            if (!(data.uid != this.user.uid)) {
                                _context3.next = 13;
                                break;
                            }

                            this.http.error = new Error('只能编辑自己的稿件哦(*^_^*)!');
                            return _context3.abrupt('return', think.statusAction(702, this.http));

                        case 13:
                            //let model =  this.model("model").getmodel(2);
                            if (data.pid != 0) {
                                //获取上级文档
                                article = document.field("id,title,type").find(data.pid);

                                this.assign('article', article);
                            }
                            _context3.next = 16;
                            return this.model("model").get_document_model(data.model_id);

                        case 16:
                            model = _context3.sent;
                            _context3.next = 19;
                            return this.model("category").get_category(data.category_id, 'groups');

                        case 19:
                            groups = _context3.sent;

                            if (groups) {
                                groups = parse_config_attr(groups);
                            }
                            this.assign('groups', groups);
                            // 获取分类信息
                            _context3.next = 24;
                            return this.model("category").get_category(data.category_id, 'documentsorts');

                        case 24:
                            sort = _context3.sent;

                            if (!sort) {
                                _context3.next = 81;
                                break;
                            }

                            sort = JSON.parse(sort);
                            if (sortid != 0) {
                                data.sort_id = sortid;
                            } else if (data.sort_id == 0) {
                                data.sort_id = sort.defaultshow;
                            }
                            _context3.next = 30;
                            return this.model("typevar").where({ sortid: data.sort_id }).select();

                        case 30:
                            typevar = _context3.sent;
                            _iterator8 = typevar, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);

                        case 32:
                            if (!_isArray8) {
                                _context3.next = 38;
                                break;
                            }

                            if (!(_i8 >= _iterator8.length)) {
                                _context3.next = 35;
                                break;
                            }

                            return _context3.abrupt('break', 80);

                        case 35:
                            _ref11 = _iterator8[_i8++];
                            _context3.next = 42;
                            break;

                        case 38:
                            _i8 = _iterator8.next();

                            if (!_i8.done) {
                                _context3.next = 41;
                                break;
                            }

                            return _context3.abrupt('break', 80);

                        case 41:
                            _ref11 = _i8.value;

                        case 42:
                            val = _ref11;
                            _context3.next = 45;
                            return this.model("typeoption").where({ optionid: val.optionid }).find();

                        case 45:
                            val.option = _context3.sent;

                            if (!(val.option.type == 'select')) {
                                _context3.next = 58;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context3.next = 56;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            _context3.next = 52;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 52:
                            _context3.t0 = _context3.sent;

                            if (_context3.t0) {
                                _context3.next = 55;
                                break;
                            }

                            _context3.t0 = "";

                        case 55:
                            val.option.value = _context3.t0;

                        case 56:
                            _context3.next = 78;
                            break;

                        case 58:
                            if (!(val.option.type == "radio" || val.option.type == "checkbox")) {
                                _context3.next = 70;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context3.next = 68;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            _context3.next = 64;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 64:
                            _context3.t1 = _context3.sent;

                            if (_context3.t1) {
                                _context3.next = 67;
                                break;
                            }

                            _context3.t1 = "";

                        case 67:
                            val.option.value = _context3.t1;

                        case 68:
                            _context3.next = 78;
                            break;

                        case 70:
                            if (think.isEmpty(val.option.rules)) {
                                _context3.next = 78;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            _context3.next = 74;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 74:
                            _context3.t2 = _context3.sent;

                            if (_context3.t2) {
                                _context3.next = 77;
                                break;
                            }

                            _context3.t2 = "";

                        case 77:
                            val.option.value = _context3.t2;

                        case 78:
                            _context3.next = 32;
                            break;

                        case 80:
                            // console.log(typevar);
                            this.assign("typevar", typevar);

                        case 81:
                            //console.log(sort);
                            this.assign("sort", sort);
                            //获取表单字段排序
                            _context3.next = 84;
                            return this.model("attribute").get_model_attribute(model.id, true);

                        case 84:
                            fields = _context3.sent;

                            this.assign('fields', fields);
                            //获取当前分类文档的类型
                            _context3.next = 88;
                            return this.model("category").get_type_bycate(data.category_id);

                        case 88:
                            type_list = _context3.sent;
                            _context3.next = 91;
                            return this.model('tags').where({ model_id: data.model_id }).select();

                        case 91:
                            tags = _context3.sent;

                            this.assign('tags', tags);
                            //获取面包屑信息
                            _context3.next = 95;
                            return this.model('category').get_parent_category(data.category_id);

                        case 95:
                            nav = _context3.sent;

                            //console.log(model);
                            this.assign('breadcrumb', nav);
                            //console.log(model);
                            this.assign('type_list', type_list);
                            this.meta_title = '编辑' + model.title;
                            this.active = "admin/article/index";
                            this.assign({
                                "navxs": true
                            });
                            //console.log(data);
                            this.assign('data', data);
                            this.assign('model_id', data.model_id);
                            this.assign('model', model);
                            this.display();

                        case 105:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function editAction() {
            return _ref10.apply(this, arguments);
        }

        return editAction;
    }();
    //编辑文档


    _class.prototype.zxmyshopAction = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var id, sortid, document, data, article, model, groups, sort, typevar, _iterator9, _isArray9, _i9, _ref13, val, fields, type_list, tags, nav;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return this.weblogin();

                        case 2:
                            id = this.get('id') || "";

                            console.log("id==========," + id);
                            sortid = this.get('sortid') || 0;

                            if (think.isEmpty(id)) {
                                this.fail("参数不能为空");
                            }
                            //获取详细数据；
                            document = this.model("document");
                            _context4.next = 9;
                            return document.details(id);

                        case 9:
                            data = _context4.sent;

                            if (!(data.uid != this.user.uid)) {
                                _context4.next = 13;
                                break;
                            }

                            this.http.error = new Error('只能编辑自己的稿件哦(*^_^*)!');
                            return _context4.abrupt('return', think.statusAction(702, this.http));

                        case 13:
                            //let model =  this.model("model").getmodel(2);
                            if (data.pid != 0) {
                                //获取上级文档
                                article = document.field("id,title,type").find(data.pid);

                                this.assign('article', article);
                            }
                            _context4.next = 16;
                            return this.model("model").get_document_model(data.model_id);

                        case 16:
                            model = _context4.sent;
                            _context4.next = 19;
                            return this.model("category").get_category(data.category_id, 'groups');

                        case 19:
                            groups = _context4.sent;

                            if (groups) {
                                groups = parse_config_attr(groups);
                            }
                            this.assign('groups', groups);
                            // 获取分类信息
                            _context4.next = 24;
                            return this.model("category").get_category(data.category_id, 'documentsorts');

                        case 24:
                            sort = _context4.sent;

                            if (!sort) {
                                _context4.next = 81;
                                break;
                            }

                            sort = JSON.parse(sort);
                            if (sortid != 0) {
                                data.sort_id = sortid;
                            } else if (data.sort_id == 0) {
                                data.sort_id = sort.defaultshow;
                            }
                            _context4.next = 30;
                            return this.model("typevar").where({ sortid: data.sort_id }).select();

                        case 30:
                            typevar = _context4.sent;
                            _iterator9 = typevar, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);

                        case 32:
                            if (!_isArray9) {
                                _context4.next = 38;
                                break;
                            }

                            if (!(_i9 >= _iterator9.length)) {
                                _context4.next = 35;
                                break;
                            }

                            return _context4.abrupt('break', 80);

                        case 35:
                            _ref13 = _iterator9[_i9++];
                            _context4.next = 42;
                            break;

                        case 38:
                            _i9 = _iterator9.next();

                            if (!_i9.done) {
                                _context4.next = 41;
                                break;
                            }

                            return _context4.abrupt('break', 80);

                        case 41:
                            _ref13 = _i9.value;

                        case 42:
                            val = _ref13;
                            _context4.next = 45;
                            return this.model("typeoption").where({ optionid: val.optionid }).find();

                        case 45:
                            val.option = _context4.sent;

                            if (!(val.option.type == 'select')) {
                                _context4.next = 58;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context4.next = 56;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            _context4.next = 52;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 52:
                            _context4.t0 = _context4.sent;

                            if (_context4.t0) {
                                _context4.next = 55;
                                break;
                            }

                            _context4.t0 = "";

                        case 55:
                            val.option.value = _context4.t0;

                        case 56:
                            _context4.next = 78;
                            break;

                        case 58:
                            if (!(val.option.type == "radio" || val.option.type == "checkbox")) {
                                _context4.next = 70;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context4.next = 68;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            _context4.next = 64;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 64:
                            _context4.t1 = _context4.sent;

                            if (_context4.t1) {
                                _context4.next = 67;
                                break;
                            }

                            _context4.t1 = "";

                        case 67:
                            val.option.value = _context4.t1;

                        case 68:
                            _context4.next = 78;
                            break;

                        case 70:
                            if (think.isEmpty(val.option.rules)) {
                                _context4.next = 78;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            _context4.next = 74;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 74:
                            _context4.t2 = _context4.sent;

                            if (_context4.t2) {
                                _context4.next = 77;
                                break;
                            }

                            _context4.t2 = "";

                        case 77:
                            val.option.value = _context4.t2;

                        case 78:
                            _context4.next = 32;
                            break;

                        case 80:
                            // console.log(typevar);
                            this.assign("typevar", typevar);

                        case 81:
                            //console.log(sort);
                            this.assign("sort", sort);
                            //获取表单字段排序
                            _context4.next = 84;
                            return this.model("attribute").get_model_attribute(model.id, true);

                        case 84:
                            fields = _context4.sent;

                            this.assign('fields', fields);
                            //获取当前分类文档的类型
                            _context4.next = 88;
                            return this.model("category").get_type_bycate(data.category_id);

                        case 88:
                            type_list = _context4.sent;
                            _context4.next = 91;
                            return this.model('tags').where({ model_id: data.model_id }).select();

                        case 91:
                            tags = _context4.sent;

                            this.assign('tags', tags);
                            //获取面包屑信息
                            _context4.next = 95;
                            return this.model('category').get_parent_category(data.category_id);

                        case 95:
                            nav = _context4.sent;

                            //console.log(model);
                            this.assign('breadcrumb', nav);
                            //console.log(model);
                            this.assign('type_list', type_list);
                            this.meta_title = '编辑' + model.title;
                            this.active = "admin/article/index";
                            this.assign({
                                "navxs": true
                            });
                            //console.log(data);
                            this.assign('data', data);
                            this.assign('model_id', data.model_id);
                            this.assign('model', model);
                            this.display();

                        case 105:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function zxmyshopAction() {
            return _ref12.apply(this, arguments);
        }

        return zxmyshopAction;
    }();
    /**
     * 更新或者添加数据
     */


    _class.prototype.updateAction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var data, roleid, addexa, _roleid, _addexa, res;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return this.weblogin();

                        case 2:
                            data = this.post();
                            //绑定发布者id

                            data.uid = this.user.uid;
                            //安全验证

                            if (!(data.is_ajax != 'true')) {
                                _context5.next = 6;
                                break;
                            }

                            return _context5.abrupt('return', this.fail("非法提交！"));

                        case 6:
                            if (!think.isEmpty(data.id)) {
                                _context5.next = 17;
                                break;
                            }

                            //发布
                            data.uid = this.user.uid;
                            data.ip = this.ip();
                            //检查本栏目发布是否需要审核
                            _context5.next = 11;
                            return this.model("member").where({ id: this.is_login }).getField('groupid', true);

                        case 11:
                            roleid = _context5.sent;
                            _context5.next = 14;
                            return this.model("category_priv").priv(data.category_id, roleid, 'addexa');

                        case 14:
                            addexa = _context5.sent;
                            _context5.next = 27;
                            break;

                        case 17:
                            //修改
                            data.uid = this.user.uid;
                            data.ip = this.ip();
                            //检查本栏目编辑是否需要审核
                            console.log();
                            _context5.next = 22;
                            return this.model("member").where({ id: this.is_login }).getField('groupid', true);

                        case 22:
                            _roleid = _context5.sent;
                            _context5.next = 25;
                            return this.model("category_priv").priv(data.category_id, _roleid, 'editexa');

                        case 25:
                            _addexa = _context5.sent;

                            console.log("addexa-------------" + _addexa + "," + data.category_id);
                            // if (addexa) {
                            //     let addp = await this.model("approval").adds(data.model_id, this.user.uid, data.title, data);
                            //     if (addp) {
                            //         return this.success({ name: "编辑成功, 请等待管理员审核...", url: '/uc/publish/index/cate_id/' + data.category_id });
                            //     } else {
                            //         return this.fail("操作失败！");
                            //     }
                            // }

                        case 27:
                            _context5.next = 29;
                            return this.model('document').updates(data);

                        case 29:
                            res = _context5.sent;

                            if (!res) {
                                _context5.next = 38;
                                break;
                            }

                            if (res.data.id) {
                                _context5.next = 35;
                                break;
                            }

                            return _context5.abrupt('return', this.success({ name: "添加成功", url: "/uc/" + res.data.category_id }));

                        case 35:
                            return _context5.abrupt('return', this.success({ name: "更新成功", url: "/uc" }));

                        case 36:
                            _context5.next = 39;
                            break;

                        case 38:
                            return _context5.abrupt('return', this.fail("操作失败！"));

                        case 39:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function updateAction() {
            return _ref14.apply(this, arguments);
        }

        return updateAction;
    }();

    /**
     * 默认文档列表方法
     * @param integer $cate_id 分类id
     * @param integer $model_id 模型id
     * @param integer $position 推荐标志
     * @param mixed $field 字段列表
     * @param integer $group_id 分组id
     */


    _class.prototype.getDocumentList = function () {
        var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(cate_id, model_id, position, field, group_id, sortval, sortid) {
            var map, status, Document, subcate, tablefields, modelName, key, nsobj, optionidarr, valuearr, _iterator10, _isArray10, _i10, _ref16, v, qarr, vv, list, Pages, pages, page, article, allow_publish;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            //console.log(2222222);
                            /* 查询条件初始化 */
                            cate_id = cate_id || 0, field = field || true;
                            map = {};
                            //获取当前用户的信息

                            map.uid = this.user.uid;
                            status = void 0;

                            if (!think.isEmpty(this.get('title'))) {
                                map.title = ['like', '%' + this.param('title') + '%'];
                            }
                            if (!think.isEmpty(this.get('status'))) {
                                map.status = this.param('status');
                                status = map.status;
                            } else {
                                status = null;
                                map.status = ['IN', '0,1,2'];
                            }
                            if (!think.isEmpty(this.get('time-start'))) {
                                map.update_time = { '>=': new Date(this.param('time-start').valueOf()) };
                            }
                            if (!think.isEmpty(this.get('time-end'))) {
                                map.update_time = { '<=': 24 * 60 * 60 + new Date(this.param('time-end').valueOf()) };
                            }

                            if (think.isEmpty(this.get('nickname'))) {
                                _context6.next = 12;
                                break;
                            }

                            _context6.next = 11;
                            return this.model('member').where({ 'nickname': this.param('nickname') }).getField('uid');

                        case 11:
                            map.uid = _context6.sent;

                        case 12:

                            // 构建列表数据
                            Document = this.model('document');

                            if (!cate_id) {
                                _context6.next = 19;
                                break;
                            }

                            _context6.next = 16;
                            return this.model('category').get_sub_category(cate_id);

                        case 16:
                            subcate = _context6.sent;

                            // console.log(subcate);
                            subcate.push(cate_id);
                            map.category_id = ['IN', subcate];

                        case 19:
                            // console.log(map);
                            map.pid = this.param('pid') || 0;
                            //console.log(map.pid);
                            if (map.pid != 0) {
                                // 子文档列表忽略分类
                                delete map.category_id;
                            }

                            //console.log(array_diff(tablefields,field));

                            if (think.isEmpty(model_id)) {
                                _context6.next = 37;
                                break;
                            }

                            map.model_id = model_id;
                            _context6.next = 25;
                            return Document.select();

                        case 25:
                            _context6.t0 = _keys2.default;
                            _context6.next = 28;
                            return Document.getSchema();

                        case 28:
                            _context6.t1 = _context6.sent;
                            tablefields = (0, _context6.t0)(_context6.t1);

                            if (!(think.isArray(field) && array_diff(tablefields, field))) {
                                _context6.next = 37;
                                break;
                            }

                            _context6.next = 33;
                            return this.model('model').where({ id: model_id }).getField('name');

                        case 33:
                            modelName = _context6.sent;

                            //console.log('__DOCUMENT_'+modelName[0].toUpperCase()+'__ '+modelName[0]+' ON DOCUMENT.id='+modelName[0]+'.id');
                            // let sql = Document.parseSql(sql)
                            //console.log(`${this.config('db.prefix')}document_${modelName[0]} ${modelName[0]} ON DOCUMENT.id=${modelName[0]}.id`);
                            // return
                            //Document.join('__DOCUMENT_'+modelName[0].toUpperCase()+'__ '+modelName[0]+' ON DOCUMENT.id='+modelName[0]+'.id');
                            //Document.alias('DOCUMENT').join(`${this.config('db.prefix')}document_${modelName[0]} ${modelName[0]} ON DOCUMENT.id=${modelName[0]}.id`);
                            //console.log(3333333333);
                            Document.alias('DOCUMENT').join({
                                table: 'document_' + modelName[0],
                                join: "inner",
                                as: modelName[0],
                                on: ["id", "id"]
                            });
                            key = array_search(field, 'id');
                            //console.log(key)

                            if (false !== key) {
                                delete field[key];
                                field[key] = 'DOCUMENT.id';
                            }

                        case 37:
                            //console.log(field);
                            //console.log(1111111);
                            if (!think.isEmpty(position)) {
                                map[1] = "position & {$position} = {$position}";
                            }
                            if (!think.isEmpty(group_id)) {
                                map['group_id'] = group_id;
                            }
                            if (!think.isEmpty(sortid)) {
                                map.sort_id = ["IN", [sortid, 0]];
                            }
                            nsobj = {};

                            if (think.isEmpty(sortval)) {
                                _context6.next = 64;
                                break;
                            }

                            sortval = sortval.split("|");
                            nsobj = {};
                            optionidarr = [];
                            valuearr = [];
                            _iterator10 = sortval, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);

                        case 47:
                            if (!_isArray10) {
                                _context6.next = 53;
                                break;
                            }

                            if (!(_i10 >= _iterator10.length)) {
                                _context6.next = 50;
                                break;
                            }

                            return _context6.abrupt('break', 63);

                        case 50:
                            _ref16 = _iterator10[_i10++];
                            _context6.next = 57;
                            break;

                        case 53:
                            _i10 = _iterator10.next();

                            if (!_i10.done) {
                                _context6.next = 56;
                                break;
                            }

                            return _context6.abrupt('break', 63);

                        case 56:
                            _ref16 = _i10.value;

                        case 57:
                            v = _ref16;
                            qarr = v.split("_");

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

                        case 61:
                            _context6.next = 47;
                            break;

                        case 63:
                            map.fid = cate_id;
                            // where.optionid = ["IN",optionidarr];
                            // where['value'] = ["IN",valuearr];
                            // let type= await this.model("typeoptionvar").where(where).select();
                            //  console.log(type);
                            // console.log(map);

                        case 64:
                            //console.log(map);
                            list = void 0;

                            if (think.isEmpty(sortval)) {
                                _context6.next = 71;
                                break;
                            }

                            _context6.next = 68;
                            return Document.alias('DOCUMENT').join({
                                table: "type_optionvalue" + sortid,
                                join: "left", // 有 left,right,inner 3 个值
                                as: "t",
                                on: ["id", "tid"]

                            }).where(map).order('level DESC,DOCUMENT.id DESC').field(field.join(",")).page(this.get("page"), 20).countSelect();

                        case 68:
                            list = _context6.sent;
                            _context6.next = 74;
                            break;

                        case 71:
                            _context6.next = 73;
                            return Document.alias('DOCUMENT').where(map).order('level DESC,DOCUMENT.id DESC').field(field.join(",")).page(this.get("page"), 20).countSelect();

                        case 73:
                            list = _context6.sent;

                        case 74:
                            //let list=await this.model('document').where(map).order('level DESC').field(field.join(",")).page(this.get("page")).countSelect();
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(list);

                            if (!(map['pid'] != 0)) {
                                _context6.next = 82;
                                break;
                            }

                            _context6.next = 80;
                            return Document.field('id,title,type').find(map['pid']);

                        case 80:
                            article = _context6.sent;

                            this.assign('article', article);
                            // console.log(article);

                        case 82:
                            _context6.next = 84;
                            return this.model("category").get_category(cate_id, 'allow_publish');

                        case 84:
                            allow_publish = _context6.sent;

                            this.assign("nsobj", nsobj);
                            this.assign('_total', list.count); //该分类下的文档总数
                            this.assign('pagerData', page); //分页展示使用
                            this.assign('status', status);
                            this.assign('allow', allow_publish);
                            this.assign('pid', map.pid);
                            //console.log(list.data);
                            this.meta_title = '文档列表';
                            return _context6.abrupt('return', list.data);

                        case 93:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function getDocumentList(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
            return _ref15.apply(this, arguments);
        }

        return getDocumentList;
    }();
    //权限验证


    _class.prototype.priv = function () {
        var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(cate_id) {
            var cate, roleid, cates, _priv, parr, _iterator11, _isArray11, _i11, _ref18, _val6, _priv2, _iterator12, _isArray12, _i12, _ref19, val, _iterator13, _isArray13, _i13, _ref20, _val5;

            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.t0 = cate_id;

                            if (_context7.t0) {
                                _context7.next = 5;
                                break;
                            }

                            _context7.next = 4;
                            return this.model("category").get_all_category();

                        case 4:
                            _context7.t0 = _context7.sent;

                        case 5:
                            cate = _context7.t0;
                            _context7.next = 8;
                            return this.model("member").where({ id: this.user.uid }).getField('groupid', true);

                        case 8:
                            roleid = _context7.sent;
                            cates = [];

                            if (!cate_id) {
                                _context7.next = 17;
                                break;
                            }

                            _context7.next = 13;
                            return this.model("category_priv").priv(cate_id, roleid, 'add');

                        case 13:
                            _priv = _context7.sent;

                            if (_priv == 1) {
                                cates.push(_priv);
                            }
                            _context7.next = 71;
                            break;

                        case 17:
                            // let priv = await this.model("category_priv").where({catid:39,is_admin:0,roleid:2,action:'add'}).select();
                            // console.log(priv);
                            //前台投稿分类
                            //TODO 权限控制(管理员)
                            parr = [];
                            _iterator11 = cate, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : (0, _getIterator3.default)(_iterator11);

                        case 19:
                            if (!_isArray11) {
                                _context7.next = 25;
                                break;
                            }

                            if (!(_i11 >= _iterator11.length)) {
                                _context7.next = 22;
                                break;
                            }

                            return _context7.abrupt('break', 37);

                        case 22:
                            _ref18 = _iterator11[_i11++];
                            _context7.next = 29;
                            break;

                        case 25:
                            _i11 = _iterator11.next();

                            if (!_i11.done) {
                                _context7.next = 28;
                                break;
                            }

                            return _context7.abrupt('break', 37);

                        case 28:
                            _ref18 = _i11.value;

                        case 29:
                            _val6 = _ref18;
                            _context7.next = 32;
                            return this.model("category_priv").priv(_val6.id, roleid, 'add');

                        case 32:
                            _priv2 = _context7.sent;

                            _val6.priv = _priv2;
                            if (_priv2 == 1 && _val6.pid != 0) {
                                parr.push(_val6.pid);
                            }

                        case 35:
                            _context7.next = 19;
                            break;

                        case 37:
                            if (!think.isEmpty(parr)) {
                                _context7.next = 41;
                                break;
                            }

                            cates = cate;
                            _context7.next = 71;
                            break;

                        case 41:
                            _iterator12 = cate, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : (0, _getIterator3.default)(_iterator12);

                        case 42:
                            if (!_isArray12) {
                                _context7.next = 48;
                                break;
                            }

                            if (!(_i12 >= _iterator12.length)) {
                                _context7.next = 45;
                                break;
                            }

                            return _context7.abrupt('break', 56);

                        case 45:
                            _ref19 = _iterator12[_i12++];
                            _context7.next = 52;
                            break;

                        case 48:
                            _i12 = _iterator12.next();

                            if (!_i12.done) {
                                _context7.next = 51;
                                break;
                            }

                            return _context7.abrupt('break', 56);

                        case 51:
                            _ref19 = _i12.value;

                        case 52:
                            val = _ref19;

                            if (in_array(val.id, parr)) {
                                val.priv = 1;
                            }

                        case 54:
                            _context7.next = 42;
                            break;

                        case 56:
                            _iterator13 = cate, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : (0, _getIterator3.default)(_iterator13);

                        case 57:
                            if (!_isArray13) {
                                _context7.next = 63;
                                break;
                            }

                            if (!(_i13 >= _iterator13.length)) {
                                _context7.next = 60;
                                break;
                            }

                            return _context7.abrupt('break', 71);

                        case 60:
                            _ref20 = _iterator13[_i13++];
                            _context7.next = 67;
                            break;

                        case 63:
                            _i13 = _iterator13.next();

                            if (!_i13.done) {
                                _context7.next = 66;
                                break;
                            }

                            return _context7.abrupt('break', 71);

                        case 66:
                            _ref20 = _i13.value;

                        case 67:
                            _val5 = _ref20;

                            if (_val5.priv == 1) {
                                cates.push(_val5);
                            }

                        case 69:
                            _context7.next = 57;
                            break;

                        case 71:
                            return _context7.abrupt('return', think.isEmpty(cates));

                        case 72:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function priv(_x8) {
            return _ref17.apply(this, arguments);
        }

        return priv;
    }();

    /**
     * 待审稿件
     * @returns {Promise.<void>}
     */


    _class.prototype.approvalAction = function () {
        var _ref21 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var map, list, Pages, pages, page, modlist, _iterator14, _isArray14, _i14, _ref22, val;

            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            map = {};

                            map.uid = this.user.uid;
                            if (!think.isEmpty(this.get("model"))) {
                                map.model = this.get("model");
                            }
                            _context8.next = 5;
                            return this.model("approval").where(map).page(this.get('page'), 20).order('time DESC').countSelect();

                        case 5:
                            list = _context8.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(list);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', list);
                            _context8.next = 13;
                            return this.model("model").get_model(null, null, { is_approval: 1 });

                        case 13:
                            modlist = _context8.sent;
                            _iterator14 = modlist, _isArray14 = Array.isArray(_iterator14), _i14 = 0, _iterator14 = _isArray14 ? _iterator14 : (0, _getIterator3.default)(_iterator14);

                        case 15:
                            if (!_isArray14) {
                                _context8.next = 21;
                                break;
                            }

                            if (!(_i14 >= _iterator14.length)) {
                                _context8.next = 18;
                                break;
                            }

                            return _context8.abrupt('break', 31);

                        case 18:
                            _ref22 = _iterator14[_i14++];
                            _context8.next = 25;
                            break;

                        case 21:
                            _i14 = _iterator14.next();

                            if (!_i14.done) {
                                _context8.next = 24;
                                break;
                            }

                            return _context8.abrupt('break', 31);

                        case 24:
                            _ref22 = _i14.value;

                        case 25:
                            val = _ref22;
                            _context8.next = 28;
                            return this.model("approval").where({ model: val.id }).count();

                        case 28:
                            val.count = _context8.sent;

                        case 29:
                            _context8.next = 15;
                            break;

                        case 31:
                            //console.log(modlist);
                            this.assign("model", modlist);
                            _context8.t0 = this;
                            _context8.next = 35;
                            return this.model("approval").where({ uid: this.user.uid }).count();

                        case 35:
                            _context8.t1 = _context8.sent;

                            _context8.t0.assign.call(_context8.t0, "count", _context8.t1);

                            this.meta_title = "待审稿件";
                            return _context8.abrupt('return', this.display());

                        case 39:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function approvalAction() {
            return _ref21.apply(this, arguments);
        }

        return approvalAction;
    }();
    /**
     * 查看待审稿件详情
     */


    _class.prototype.approvaldetailsAction = function () {
        var _ref23 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var id, details, info;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            id = this.get("id");
                            _context9.next = 3;
                            return this.model("approval").where({ uid: this.user.uid }).find(id);

                        case 3:
                            details = _context9.sent;
                            info = JSON.parse(details.data);

                            this.assign("info", info);
                            this.meta_title = "查看详情";
                            return _context9.abrupt('return', this.display());

                        case 8:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function approvaldetailsAction() {
            return _ref23.apply(this, arguments);
        }

        return approvaldetailsAction;
    }();

    /**
     * 删除撤销审核
     *
     */


    _class.prototype.approvaldelAction = function () {
        var _ref24 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var id, res;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            id = this.get("id");
                            _context10.next = 3;
                            return this.model("approval").where({ uid: this.user.uid, id: id }).delete();

                        case 3:
                            res = _context10.sent;

                            if (!res) {
                                _context10.next = 8;
                                break;
                            }

                            return _context10.abrupt('return', this.success({ name: "删除成功!" }));

                        case 8:
                            return _context10.abrupt('return', this.fail("操作失败!"));

                        case 9:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function approvaldelAction() {
            return _ref24.apply(this, arguments);
        }

        return approvaldelAction;
    }();
    /**
     * 显示左边菜单，进行权限控制
     * @author
     */

    _class.prototype.getmenuAction = function () {
        var _ref25 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
            var cate, roleid, parr, _iterator15, _isArray15, _i15, _ref26, _val9, priv, cates, _iterator16, _isArray16, _i16, _ref27, val, _iterator17, _isArray17, _i17, _ref28, _val7, _iterator18, _isArray18, _i18, _ref29, _val8;

            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            _context11.next = 2;
                            return this.model("category").get_all_category({ mold: 0 });

                        case 2:
                            cate = _context11.sent;
                            _context11.next = 5;
                            return this.model("member").where({ id: this.user.uid }).getField('groupid', true);

                        case 5:
                            roleid = _context11.sent;

                            // let priv = await this.model("category_priv").where({catid:39,is_admin:0,roleid:2,action:'add'}).select();
                            // console.log(priv);
                            //前台投稿分类
                            //TODO 权限控制(管理员)
                            parr = [];
                            _iterator15 = cate, _isArray15 = Array.isArray(_iterator15), _i15 = 0, _iterator15 = _isArray15 ? _iterator15 : (0, _getIterator3.default)(_iterator15);

                        case 8:
                            if (!_isArray15) {
                                _context11.next = 14;
                                break;
                            }

                            if (!(_i15 >= _iterator15.length)) {
                                _context11.next = 11;
                                break;
                            }

                            return _context11.abrupt('break', 28);

                        case 11:
                            _ref26 = _iterator15[_i15++];
                            _context11.next = 18;
                            break;

                        case 14:
                            _i15 = _iterator15.next();

                            if (!_i15.done) {
                                _context11.next = 17;
                                break;
                            }

                            return _context11.abrupt('break', 28);

                        case 17:
                            _ref26 = _i15.value;

                        case 18:
                            _val9 = _ref26;

                            _val9.url = '/uc/publish/index/cate_id/' + _val9.id;
                            _val9.target = '_self';
                            _context11.next = 23;
                            return this.model("category_priv").priv(_val9.id, roleid, 'add');

                        case 23:
                            priv = _context11.sent;

                            _val9.priv = priv;
                            if (priv == 1 && _val9.pid != 0) {
                                parr.push(_val9.pid);
                            }

                        case 26:
                            _context11.next = 8;
                            break;

                        case 28:
                            cates = [];

                            if (!think.isEmpty(parr)) {
                                _context11.next = 47;
                                break;
                            }

                            _iterator16 = cate, _isArray16 = Array.isArray(_iterator16), _i16 = 0, _iterator16 = _isArray16 ? _iterator16 : (0, _getIterator3.default)(_iterator16);

                        case 31:
                            if (!_isArray16) {
                                _context11.next = 37;
                                break;
                            }

                            if (!(_i16 >= _iterator16.length)) {
                                _context11.next = 34;
                                break;
                            }

                            return _context11.abrupt('break', 45);

                        case 34:
                            _ref27 = _iterator16[_i16++];
                            _context11.next = 41;
                            break;

                        case 37:
                            _i16 = _iterator16.next();

                            if (!_i16.done) {
                                _context11.next = 40;
                                break;
                            }

                            return _context11.abrupt('break', 45);

                        case 40:
                            _ref27 = _i16.value;

                        case 41:
                            val = _ref27;

                            if (val.priv == 1) {
                                cates.push(val);
                            }

                        case 43:
                            _context11.next = 31;
                            break;

                        case 45:
                            _context11.next = 77;
                            break;

                        case 47:
                            _iterator17 = cate, _isArray17 = Array.isArray(_iterator17), _i17 = 0, _iterator17 = _isArray17 ? _iterator17 : (0, _getIterator3.default)(_iterator17);

                        case 48:
                            if (!_isArray17) {
                                _context11.next = 54;
                                break;
                            }

                            if (!(_i17 >= _iterator17.length)) {
                                _context11.next = 51;
                                break;
                            }

                            return _context11.abrupt('break', 62);

                        case 51:
                            _ref28 = _iterator17[_i17++];
                            _context11.next = 58;
                            break;

                        case 54:
                            _i17 = _iterator17.next();

                            if (!_i17.done) {
                                _context11.next = 57;
                                break;
                            }

                            return _context11.abrupt('break', 62);

                        case 57:
                            _ref28 = _i17.value;

                        case 58:
                            _val7 = _ref28;

                            if (in_array(_val7.id, parr)) {
                                _val7.priv = 1;
                            }

                        case 60:
                            _context11.next = 48;
                            break;

                        case 62:
                            _iterator18 = cate, _isArray18 = Array.isArray(_iterator18), _i18 = 0, _iterator18 = _isArray18 ? _iterator18 : (0, _getIterator3.default)(_iterator18);

                        case 63:
                            if (!_isArray18) {
                                _context11.next = 69;
                                break;
                            }

                            if (!(_i18 >= _iterator18.length)) {
                                _context11.next = 66;
                                break;
                            }

                            return _context11.abrupt('break', 77);

                        case 66:
                            _ref29 = _iterator18[_i18++];
                            _context11.next = 73;
                            break;

                        case 69:
                            _i18 = _iterator18.next();

                            if (!_i18.done) {
                                _context11.next = 72;
                                break;
                            }

                            return _context11.abrupt('break', 77);

                        case 72:
                            _ref29 = _i18.value;

                        case 73:
                            _val8 = _ref29;

                            if (_val8.priv == 1) {
                                cates.push(_val8);
                            }

                        case 75:
                            _context11.next = 63;
                            break;

                        case 77:
                            return _context11.abrupt('return', this.json(arr_to_tree(cates, 0)));

                        case 78:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function getmenuAction() {
            return _ref25.apply(this, arguments);
        }

        return getmenuAction;
    }();
    //ajax添加tags


    _class.prototype.ajaxaddtagsAction = function () {
        var _ref30 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
            var data, model, res, rdata;
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            data = this.post();

                            data.model_id = Number(data.model_id);
                            model = this.model("tags");
                            _context12.next = 5;
                            return model.where({ name: data.name }).thenAdd(data);

                        case 5:
                            res = _context12.sent;

                            if (!(res.type == "exist")) {
                                _context12.next = 10;
                                break;
                            }

                            _context12.next = 9;
                            return model.where({ id: res.id }).increment('num');

                        case 9:
                            return _context12.abrupt('return', this.fail("已经存在，不要重复添加，请直接选择！"));

                        case 10:
                            rdata = {
                                errno: 0,
                                id: res.id,
                                name: data.name
                            };
                            return _context12.abrupt('return', this.json(rdata));

                        case 12:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        function ajaxaddtagsAction() {
            return _ref30.apply(this, arguments);
        }

        return ajaxaddtagsAction;
    }();

    _class.prototype.ajaxgettagsAction = function () {
        var _ref31 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13() {
            var map, model, res;
            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            map = this.get();
                            model = this.model("tags");
                            _context13.next = 4;
                            return model.where(map).select();

                        case 4:
                            res = _context13.sent;
                            return _context13.abrupt('return', this.json(res));

                        case 6:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        function ajaxgettagsAction() {
            return _ref31.apply(this, arguments);
        }

        return ajaxgettagsAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=publish.js.map