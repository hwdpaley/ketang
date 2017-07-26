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

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.tactive = "article";
    };

    /**
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var cate_id, model_id, position, group_id, sortid, sortval, models, groups, model, _model, sort, typevar, _iterator, _isArray, _i, _ref2, val, _iterator2, _isArray2, _i2, _ref3, v, searchtxt, searcharr, arr, len, i, obj, pid, data, fields, ngrids, grids, _iterator3, _isArray3, _i3, _ref4, value, _val2, field, _val2$1$split, _iterator6, _isArray6, _i6, _ref7, _val3, array, list, _iterator4, _isArray4, _i4, _ref5, _val4, nav, modellist, _iterator5, _isArray5, _i5, _ref6, _val, modelobj;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            cate_id = this.get('cate_id') || null;
                            model_id = this.get('model_id') || null;
                            position = this.get('position') || null;
                            group_id = this.get('group_id') || 0;
                            sortid = this.get('sortid') || 0;
                            sortval = this.get('sortval') || null;
                            models = void 0;
                            groups = void 0;
                            model = void 0;
                            _model = void 0;
                            //console.log(2222);

                            console.log(cate_id);

                            if (think.isEmpty(cate_id)) {
                                _context.next = 107;
                                break;
                            }

                            _context.next = 14;
                            return this.admin_priv("init", cate_id, "您没有权限查看本栏目！");

                        case 14:
                            _context.next = 16;
                            return this.model("category").get_category(cate_id, 'documentsorts');

                        case 16:
                            sort = _context.sent;

                            if (!sort) {
                                _context.next = 71;
                                break;
                            }

                            sort = JSON.parse(sort);
                            console.log("sort-------------------" + (0, _stringify2.default)(sort));
                            if (sortid == 0) {
                                sortid = sort.defaultshow;
                            }
                            _context.next = 23;
                            return this.model("typevar").where({ sortid: sortid }).select();

                        case 23:
                            typevar = _context.sent;
                            _iterator = typevar, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 25:
                            if (!_isArray) {
                                _context.next = 31;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 28;
                                break;
                            }

                            return _context.abrupt('break', 69);

                        case 28:
                            _ref2 = _iterator[_i++];
                            _context.next = 35;
                            break;

                        case 31:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 34;
                                break;
                            }

                            return _context.abrupt('break', 69);

                        case 34:
                            _ref2 = _i.value;

                        case 35:
                            val = _ref2;
                            _context.next = 38;
                            return this.model("typeoption").where({ optionid: val.optionid }).find();

                        case 38:
                            val.option = _context.sent;

                            if (!(val.option.type == 'select' || val.option.type == 'radio')) {
                                _context.next = 43;
                                break;
                            }

                            if (!think.isEmpty(val.option.rules)) {
                                val.option.rules = JSON.parse(val.option.rules);
                                val.rules = parse_type_attr(val.option.rules.choices);
                                val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            }

                            _context.next = 67;
                            break;

                        case 43:
                            if (!(val.option.type == 'checkbox')) {
                                _context.next = 66;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context.next = 64;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.rules = parse_type_attr(val.option.rules.choices);
                            console.log(val.rules);
                            _iterator2 = val.rules, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 49:
                            if (!_isArray2) {
                                _context.next = 55;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 52;
                                break;
                            }

                            return _context.abrupt('break', 63);

                        case 52:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 59;
                            break;

                        case 55:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 58;
                                break;
                            }

                            return _context.abrupt('break', 63);

                        case 58:
                            _ref3 = _i2.value;

                        case 59:
                            v = _ref3;

                            v.id = "l>" + v.id;

                        case 61:
                            _context.next = 49;
                            break;

                        case 63:
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            //console.log(val.rules);

                        case 64:
                            _context.next = 67;
                            break;

                        case 66:
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

                        case 67:
                            _context.next = 25;
                            break;

                        case 69:
                            //console.log(typevar);
                            this.assign("typevar", typevar);
                            console.log("typevar-------------------" + (0, _stringify2.default)(typevar));

                        case 71:
                            //console.log(sort);
                            this.assign("sort", sort);
                            console.log("sort---------," + (0, _stringify2.default)(sort));
                            pid = this.get("pid") || 0;
                            // 获取列表绑定的模型

                            if (!(pid == 0)) {
                                _context.next = 84;
                                break;
                            }

                            _context.next = 77;
                            return this.model("category").get_category(cate_id, 'model');

                        case 77:
                            models = _context.sent;
                            _context.next = 80;
                            return this.model("category").get_category(cate_id, 'groups');

                        case 80:
                            groups = _context.sent;

                            if (groups) {
                                groups = parse_config_attr(groups);
                            }
                            _context.next = 87;
                            break;

                        case 84:
                            _context.next = 86;
                            return this.model("category").get_category(cate_id, 'model_sub');

                        case 86:
                            models = _context.sent;

                        case 87:
                            if (!(think.isEmpty(model_id) && !think.isNumberString(models))) {
                                _context.next = 93;
                                break;
                            }

                            _context.next = 90;
                            return this.model('model').where({ name: 'document' }).find();

                        case 90:
                            model = _context.sent;
                            _context.next = 103;
                            break;

                        case 93:

                            model_id = model_id ? model_id : models;
                            //获取模型信息
                            _context.next = 96;
                            return this.model('model').where({ id: ['IN', [model_id]] }).find();

                        case 96:
                            model = _context.sent;
                            ;

                            if (!think.isEmpty(model['list_grid'])) {
                                _context.next = 103;
                                break;
                            }

                            _context.next = 101;
                            return this.model('model').field('list_grid').where({ name: 'document' }).find();

                        case 101:
                            data = _context.sent;

                            model.list_grid = data.list_grid;
                            //console.log(33);

                        case 103:
                            this.assign('model', models.split(","));
                            _model = models.split(",");
                            _context.next = 114;
                            break;

                        case 107:
                            _context.next = 109;
                            return this.model("model").where({ name: "document" }).find();

                        case 109:
                            model = _context.sent;

                            model_id = null;
                            cate_id = 0;
                            this.assign('model', null);
                            _model = null;

                        case 114:
                            //解析列表规则
                            fields = [];
                            ngrids = [];
                            //console.log(model);

                            grids = model.list_grid.split("\r\n");

                            console.log("grids----------,," + (0, _stringify2.default)(grids));
                            _iterator3 = grids, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 119:
                            if (!_isArray3) {
                                _context.next = 125;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context.next = 122;
                                break;
                            }

                            return _context.abrupt('break', 154);

                        case 122:
                            _ref4 = _iterator3[_i3++];
                            _context.next = 129;
                            break;

                        case 125:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context.next = 128;
                                break;
                            }

                            return _context.abrupt('break', 154);

                        case 128:
                            _ref4 = _i3.value;

                        case 129:
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

                        case 136:
                            if (!_isArray6) {
                                _context.next = 142;
                                break;
                            }

                            if (!(_i6 >= _iterator6.length)) {
                                _context.next = 139;
                                break;
                            }

                            return _context.abrupt('break', 151);

                        case 139:
                            _ref7 = _iterator6[_i6++];
                            _context.next = 146;
                            break;

                        case 142:
                            _i6 = _iterator6.next();

                            if (!_i6.done) {
                                _context.next = 145;
                                break;
                            }

                            return _context.abrupt('break', 151);

                        case 145:
                            _ref7 = _i6.value;

                        case 146:
                            _val3 = _ref7;
                            array = _val3.split('|');

                            fields.push(array[0]);

                        case 149:
                            _context.next = 136;
                            break;

                        case 151:
                            ngrids.push(value);

                        case 152:
                            _context.next = 119;
                            break;

                        case 154:
                            // 文档模型列表始终要获取的数据字段 用于其他用途
                            fields.push('category_id');
                            fields.push('model_id');
                            fields.push('pid');
                            //过滤重复字段
                            fields = unique(fields);
                            //console.log(fields);
                            // console.log(model_id);
                            _context.next = 160;
                            return this.getDocumentList(cate_id, model_id, position, fields, group_id, sortval, sortid);

                        case 160:
                            list = _context.sent;
                            _iterator4 = list, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 162:
                            if (!_isArray4) {
                                _context.next = 168;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context.next = 165;
                                break;
                            }

                            return _context.abrupt('break', 182);

                        case 165:
                            _ref5 = _iterator4[_i4++];
                            _context.next = 172;
                            break;

                        case 168:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context.next = 171;
                                break;
                            }

                            return _context.abrupt('break', 182);

                        case 171:
                            _ref5 = _i4.value;

                        case 172:
                            _val4 = _ref5;

                            if (!_val4.pics) {
                                _context.next = 179;
                                break;
                            }

                            _context.next = 176;
                            return get_pic(_val4.pics.split(",")[0], 1, 100);

                        case 176:
                            _val4.pics = _context.sent;
                            _context.next = 180;
                            break;

                        case 179:
                            _val4.pics = '/static/noimg.jpg';

                        case 180:
                            _context.next = 162;
                            break;

                        case 182:
                            _context.next = 184;
                            return this.parseDocumentList(list, model_id);

                        case 184:
                            list = _context.sent;
                            _context.next = 187;
                            return this.model('category').get_parent_category(cate_id);

                        case 187:
                            nav = _context.sent;

                            this.assign('breadcrumb', nav);
                            //获取模型信息
                            modellist = [];

                            //console.log(111111111)

                            if (!think.isEmpty(_model)) {
                                _context.next = 194;
                                break;
                            }

                            modellist = null;
                            _context.next = 214;
                            break;

                        case 194:
                            _iterator5 = _model, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

                        case 195:
                            if (!_isArray5) {
                                _context.next = 201;
                                break;
                            }

                            if (!(_i5 >= _iterator5.length)) {
                                _context.next = 198;
                                break;
                            }

                            return _context.abrupt('break', 214);

                        case 198:
                            _ref6 = _iterator5[_i5++];
                            _context.next = 205;
                            break;

                        case 201:
                            _i5 = _iterator5.next();

                            if (!_i5.done) {
                                _context.next = 204;
                                break;
                            }

                            return _context.abrupt('break', 214);

                        case 204:
                            _ref6 = _i5.value;

                        case 205:
                            _val = _ref6;
                            modelobj = {};

                            modelobj.id = _val;
                            _context.next = 210;
                            return this.model("model").get_document_model(_val, "title");

                        case 210:
                            modelobj.title = _context.sent;

                            modellist.push(modelobj);

                        case 212:
                            _context.next = 195;
                            break;

                        case 214:
                            //console.log(this.setup.DOCUMENT_POSITION)

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
                            this.meta_title = '内容管理';
                            this.assign({
                                "navxs": true
                            });

                            // console.log("model---------,"+JSON.stringify(model) );
                            // console.log("ngrids---------,"+JSON.stringify(ngrids) );
                            console.log("cate_id---------," + (0, _stringify2.default)(cate_id));
                            // console.log("model_id---------,"+JSON.stringify(model_id) );
                            // console.log("sortid---------,"+JSON.stringify(sortid) );
                            // console.log("position---------,"+JSON.stringify(position) );
                            // console.log("groups---------,"+JSON.stringify(groups) );
                            // console.log("model_list---------,"+JSON.stringify(model) );

                            // console.log("modellist---------,"+JSON.stringify(modellist) );
                            // console.log("list---------,"+JSON.stringify(list) );
                            return _context.abrupt('return', this.display());

                        case 228:
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
     * 默认文档列表方法
     * @param integer $cate_id 分类id
     * @param integer $model_id 模型id
     * @param integer $position 推荐标志
     * @param mixed $field 字段列表
     * @param integer $group_id 分组id
     */


    _class.prototype.getDocumentList = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(cate_id, model_id, position, field, group_id, sortval, sortid) {
            var map, status, Document, subcate, tablefields, modelName, key, nsobj, optionidarr, valuearr, _iterator7, _isArray7, _i7, _ref9, v, qarr, vv, list, Pages, pages, page, article, allow_publish;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            //console.log(2222222);
                            /* 查询条件初始化 */
                            cate_id = cate_id || 0, field = field || true;
                            map = {};
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
                                _context2.next = 11;
                                break;
                            }

                            _context2.next = 10;
                            return this.model('member').where({ 'nickname': this.param('nickname') }).getField('uid');

                        case 10:
                            map.uid = _context2.sent;

                        case 11:

                            // 构建列表数据
                            Document = this.model('document');

                            if (!cate_id) {
                                _context2.next = 18;
                                break;
                            }

                            _context2.next = 15;
                            return this.model('category').get_sub_category(cate_id);

                        case 15:
                            subcate = _context2.sent;

                            // console.log(subcate);
                            subcate.push(cate_id);
                            map.category_id = ['IN', subcate];

                        case 18:
                            // console.log(map);
                            map.pid = this.param('pid') || 0;
                            //console.log(map.pid);
                            if (map.pid != 0) {
                                // 子文档列表忽略分类
                                delete map.category_id;
                            }

                            //console.log(array_diff(tablefields,field));

                            if (think.isEmpty(model_id)) {
                                _context2.next = 36;
                                break;
                            }

                            map.model_id = model_id;
                            _context2.next = 24;
                            return Document.select();

                        case 24:
                            _context2.t0 = _keys2.default;
                            _context2.next = 27;
                            return Document.getSchema();

                        case 27:
                            _context2.t1 = _context2.sent;
                            tablefields = (0, _context2.t0)(_context2.t1);

                            if (!(think.isArray(field) && array_diff(tablefields, field))) {
                                _context2.next = 36;
                                break;
                            }

                            _context2.next = 32;
                            return this.model('model').where({ id: model_id }).getField('name');

                        case 32:
                            modelName = _context2.sent;

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

                        case 36:
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
                                _context2.next = 63;
                                break;
                            }

                            sortval = sortval.split("|");
                            nsobj = {};
                            optionidarr = [];
                            valuearr = [];
                            _iterator7 = sortval, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);

                        case 46:
                            if (!_isArray7) {
                                _context2.next = 52;
                                break;
                            }

                            if (!(_i7 >= _iterator7.length)) {
                                _context2.next = 49;
                                break;
                            }

                            return _context2.abrupt('break', 62);

                        case 49:
                            _ref9 = _iterator7[_i7++];
                            _context2.next = 56;
                            break;

                        case 52:
                            _i7 = _iterator7.next();

                            if (!_i7.done) {
                                _context2.next = 55;
                                break;
                            }

                            return _context2.abrupt('break', 62);

                        case 55:
                            _ref9 = _i7.value;

                        case 56:
                            v = _ref9;
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

                        case 60:
                            _context2.next = 46;
                            break;

                        case 62:
                            map.fid = cate_id;
                            // where.optionid = ["IN",optionidarr];
                            // where['value'] = ["IN",valuearr];
                            // let type= await this.model("typeoptionvar").where(where).select();
                            //  console.log(type);
                            // console.log(map);

                        case 63:
                            console.log(map);
                            list = void 0;

                            if (think.isEmpty(sortval)) {
                                _context2.next = 71;
                                break;
                            }

                            _context2.next = 68;
                            return Document.alias('DOCUMENT').join({
                                table: "type_optionvalue" + sortid,
                                join: "left", // 有 left,right,inner 3 个值
                                as: "t",
                                on: ["id", "tid"]

                            }).where(map).order('level DESC,DOCUMENT.id DESC').field(field.join(",")).page(this.get("page"), 20).countSelect();

                        case 68:
                            list = _context2.sent;
                            _context2.next = 74;
                            break;

                        case 71:
                            _context2.next = 73;
                            return Document.alias('DOCUMENT').where(map).order('level DESC,DOCUMENT.id DESC').field(field.join(",")).page(this.get("page"), 20).countSelect();

                        case 73:
                            list = _context2.sent;

                        case 74:
                            //let list=await this.model('document').where(map).order('level DESC').field(field.join(",")).page(this.get("page")).countSelect();
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(list);

                            if (!(map['pid'] != 0)) {
                                _context2.next = 82;
                                break;
                            }

                            _context2.next = 80;
                            return Document.field('id,title,type').find(map['pid']);

                        case 80:
                            article = _context2.sent;

                            this.assign('article', article);
                            // console.log(article);

                        case 82:
                            _context2.next = 84;
                            return this.model("category").get_category(cate_id, 'allow_publish');

                        case 84:
                            allow_publish = _context2.sent;

                            this.assign("nsobj", nsobj);
                            this.assign('_total', list.count); //该分类下的文档总数
                            this.assign('pagerData', page); //分页展示使用
                            this.assign('status', status);
                            this.assign('allow', allow_publish);
                            this.assign('pid', map.pid);
                            //console.log(list.data);
                            this.meta_title = '文档列表';
                            return _context2.abrupt('return', list.data);

                        case 93:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function getDocumentList(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
            return _ref8.apply(this, arguments);
        }

        return getDocumentList;
    }();

    /**
     * 显示左边菜单，进行权限控制
     * @author
     */

    _class.prototype.getmenuAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var cate, cate1, _iterator8, _isArray8, _i8, _ref11, v, parr, _iterator9, _isArray9, _i9, _ref12, _val6, priv, cates, _iterator10, _isArray10, _i10, _ref13, val, _iterator11, _isArray11, _i11, _ref14, _val5, csrf, _iterator12, _isArray12, _i12, _ref15, _val7;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            cate = void 0;
                            // let cid=parseInt(this.post('cid'));
                            // console.log("cate id---------"+cid);
                            // if (!think.isEmpty(this.post("cid"))) {

                            // }else{
                            //     let cate = await this.model("category").get_all_category();
                            // }

                            _context3.next = 3;
                            return this.model("category").get_all_category({ id: 145 });

                        case 3:
                            cate = _context3.sent;
                            _context3.next = 6;
                            return this.model("category").get_all_category({ pid: 145 });

                        case 6:
                            cate1 = _context3.sent;
                            _iterator8 = cate1, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);

                        case 8:
                            if (!_isArray8) {
                                _context3.next = 14;
                                break;
                            }

                            if (!(_i8 >= _iterator8.length)) {
                                _context3.next = 11;
                                break;
                            }

                            return _context3.abrupt('break', 22);

                        case 11:
                            _ref11 = _iterator8[_i8++];
                            _context3.next = 18;
                            break;

                        case 14:
                            _i8 = _iterator8.next();

                            if (!_i8.done) {
                                _context3.next = 17;
                                break;
                            }

                            return _context3.abrupt('break', 22);

                        case 17:
                            _ref11 = _i8.value;

                        case 18:
                            v = _ref11;

                            cate.push(v);

                        case 20:
                            _context3.next = 8;
                            break;

                        case 22:
                            if (this.is_admin) {
                                _context3.next = 91;
                                break;
                            }

                            parr = [];
                            //后台分类

                            _iterator9 = cate, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);

                        case 25:
                            if (!_isArray9) {
                                _context3.next = 31;
                                break;
                            }

                            if (!(_i9 >= _iterator9.length)) {
                                _context3.next = 28;
                                break;
                            }

                            return _context3.abrupt('break', 53);

                        case 28:
                            _ref12 = _iterator9[_i9++];
                            _context3.next = 35;
                            break;

                        case 31:
                            _i9 = _iterator9.next();

                            if (!_i9.done) {
                                _context3.next = 34;
                                break;
                            }

                            return _context3.abrupt('break', 53);

                        case 34:
                            _ref12 = _i9.value;

                        case 35:
                            _val6 = _ref12;
                            _context3.t0 = _val6.mold;
                            _context3.next = _context3.t0 === 1 ? 39 : _context3.t0 === 2 ? 41 : 43;
                            break;

                        case 39:
                            _val6.url = '/mod/admin/index/cate_id/' + _val6.id;
                            return _context3.abrupt('break', 44);

                        case 41:
                            _val6.url = '/admin/sp/index/cate_id/' + _val6.id;
                            return _context3.abrupt('break', 44);

                        case 43:
                            _val6.url = '/admin/dpcp/index/cate_id/' + _val6.id;

                        case 44:

                            _val6.target = '_self';
                            delete _val6.icon;
                            _context3.next = 48;
                            return this.model("category_priv").priv(_val6.id, this.roleid, 'init', 1);

                        case 48:
                            priv = _context3.sent;

                            _val6.priv = priv;
                            if (priv == 1 && _val6.pid != 0) {
                                parr.push(_val6.pid);
                            }

                        case 51:
                            _context3.next = 25;
                            break;

                        case 53:
                            cates = [];

                            if (!think.isEmpty(parr)) {
                                _context3.next = 58;
                                break;
                            }

                            cates = cate;
                            _context3.next = 88;
                            break;

                        case 58:
                            _iterator10 = cate, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);

                        case 59:
                            if (!_isArray10) {
                                _context3.next = 65;
                                break;
                            }

                            if (!(_i10 >= _iterator10.length)) {
                                _context3.next = 62;
                                break;
                            }

                            return _context3.abrupt('break', 73);

                        case 62:
                            _ref13 = _iterator10[_i10++];
                            _context3.next = 69;
                            break;

                        case 65:
                            _i10 = _iterator10.next();

                            if (!_i10.done) {
                                _context3.next = 68;
                                break;
                            }

                            return _context3.abrupt('break', 73);

                        case 68:
                            _ref13 = _i10.value;

                        case 69:
                            val = _ref13;

                            if (in_array(val.id, parr)) {
                                val.priv = 1;
                            }

                        case 71:
                            _context3.next = 59;
                            break;

                        case 73:
                            _iterator11 = cate, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : (0, _getIterator3.default)(_iterator11);

                        case 74:
                            if (!_isArray11) {
                                _context3.next = 80;
                                break;
                            }

                            if (!(_i11 >= _iterator11.length)) {
                                _context3.next = 77;
                                break;
                            }

                            return _context3.abrupt('break', 88);

                        case 77:
                            _ref14 = _iterator11[_i11++];
                            _context3.next = 84;
                            break;

                        case 80:
                            _i11 = _iterator11.next();

                            if (!_i11.done) {
                                _context3.next = 83;
                                break;
                            }

                            return _context3.abrupt('break', 88);

                        case 83:
                            _ref14 = _i11.value;

                        case 84:
                            _val5 = _ref14;

                            if (_val5.priv == 1) {
                                cates.push(_val5);
                            }

                        case 86:
                            _context3.next = 74;
                            break;

                        case 88:
                            return _context3.abrupt('return', this.json(arr_to_tree(cates, 0)));

                        case 91:
                            _context3.next = 93;
                            return this.session('__CSRF__');

                        case 93:
                            csrf = _context3.sent;
                            _iterator12 = cate, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : (0, _getIterator3.default)(_iterator12);

                        case 95:
                            if (!_isArray12) {
                                _context3.next = 101;
                                break;
                            }

                            if (!(_i12 >= _iterator12.length)) {
                                _context3.next = 98;
                                break;
                            }

                            return _context3.abrupt('break', 118);

                        case 98:
                            _ref15 = _iterator12[_i12++];
                            _context3.next = 105;
                            break;

                        case 101:
                            _i12 = _iterator12.next();

                            if (!_i12.done) {
                                _context3.next = 104;
                                break;
                            }

                            return _context3.abrupt('break', 118);

                        case 104:
                            _ref15 = _i12.value;

                        case 105:
                            _val7 = _ref15;
                            _context3.t1 = _val7.mold;
                            _context3.next = _context3.t1 === 1 ? 109 : _context3.t1 === 2 ? 111 : 113;
                            break;

                        case 109:
                            _val7.url = '/mod/admin/index/cate_id/' + _val7.id;
                            return _context3.abrupt('break', 114);

                        case 111:
                            _val7.url = '/admin/sp/index/cate_id/' + _val7.id;
                            return _context3.abrupt('break', 114);

                        case 113:
                            _val7.url = '/admin/dpcp/index/cate_id/' + _val7.id;

                        case 114:

                            _val7.target = '_self';
                            delete _val7.icon;

                        case 116:
                            _context3.next = 95;
                            break;

                        case 118:
                            return _context3.abrupt('return', this.json(arr_to_tree(cate, 0)));

                        case 119:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function getmenuAction() {
            return _ref10.apply(this, arguments);
        }

        return getmenuAction;
    }();

    /**
     * 新增文档
     */


    _class.prototype.addAction = function () {
        var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var cate_id, model_id, group_id, sortid, groups, sort, typevar, _iterator13, _isArray13, _i13, _ref17, val, allow_publish, model, info, topid, i, _nav, article, fields, type_list, nav;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            cate_id = this.get("cate_id") || 0;
                            model_id = this.get("model_id") || 0;
                            group_id = this.get("group_id") || '';
                            sortid = this.get('sortid') || 0;

                            think.isEmpty(cate_id) && this.fail("参数不能为空");
                            think.isEmpty(model_id) && this.fail("该分类未绑定模型");
                            //权限验证
                            _context4.next = 8;
                            return this.admin_priv("add", cate_id);

                        case 8:
                            _context4.next = 10;
                            return this.model("category").get_category(cate_id, 'groups');

                        case 10:
                            groups = _context4.sent;

                            if (groups) {
                                groups = parse_config_attr(groups);
                            }
                            // 获取分类信息
                            _context4.next = 14;
                            return this.model("category").get_category(cate_id, 'documentsorts');

                        case 14:
                            sort = _context4.sent;

                            if (!sort) {
                                _context4.next = 40;
                                break;
                            }

                            sort = JSON.parse(sort);
                            if (sortid == 0) {
                                sortid = sort.defaultshow;
                            }
                            _context4.next = 20;
                            return this.model("typevar").where({ sortid: sortid }).select();

                        case 20:
                            typevar = _context4.sent;
                            _iterator13 = typevar, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : (0, _getIterator3.default)(_iterator13);

                        case 22:
                            if (!_isArray13) {
                                _context4.next = 28;
                                break;
                            }

                            if (!(_i13 >= _iterator13.length)) {
                                _context4.next = 25;
                                break;
                            }

                            return _context4.abrupt('break', 39);

                        case 25:
                            _ref17 = _iterator13[_i13++];
                            _context4.next = 32;
                            break;

                        case 28:
                            _i13 = _iterator13.next();

                            if (!_i13.done) {
                                _context4.next = 31;
                                break;
                            }

                            return _context4.abrupt('break', 39);

                        case 31:
                            _ref17 = _i13.value;

                        case 32:
                            val = _ref17;
                            _context4.next = 35;
                            return this.model("typeoption").where({ optionid: val.optionid }).find();

                        case 35:
                            val.option = _context4.sent;

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

                        case 37:
                            _context4.next = 22;
                            break;

                        case 39:
                            //console.log(typevar);
                            this.assign("typevar", typevar);

                        case 40:
                            //console.log(sort);
                            this.assign("sort", sort);
                            //检查该分类是否允许发布
                            _context4.next = 43;
                            return this.model("category").check_category(cate_id);

                        case 43:
                            allow_publish = _context4.sent;

                            //console.log(allow_publish);
                            !allow_publish && this.fail("该分类不允许发布内容");

                            //获取当先的模型信息
                            _context4.next = 47;
                            return this.model("model").get_document_model(model_id);

                        case 47:
                            model = _context4.sent;


                            //处理结果
                            info = {};

                            info.pid = this.get("pid") ? this.get("pid") : 0;
                            info.model_id = model_id;
                            info.category_id = cate_id;
                            info.group_id = group_id;
                            topid = 0;

                            if (!(info.pid != 0)) {
                                _context4.next = 68;
                                break;
                            }

                            i = info.pid;
                            //

                        case 56:
                            if (!(i != 0)) {
                                _context4.next = 64;
                                break;
                            }

                            _context4.next = 59;
                            return this.model("document").where({ id: i }).find();

                        case 59:
                            _nav = _context4.sent;

                            if (_nav.pid == 0) {
                                topid = _nav.id;
                            }
                            i = _nav.pid;

                            _context4.next = 56;
                            break;

                        case 64:
                            _context4.next = 66;
                            return this.model("document").field('id,title,type').find(info.pid);

                        case 66:
                            article = _context4.sent;

                            this.assign("article", article);

                        case 68:
                            //console.log(topid);
                            // this.assign("topid",topid);
                            info.topid = topid;
                            //获取表单字段排序
                            _context4.next = 71;
                            return this.model("attribute").get_model_attribute(model.id, true);

                        case 71:
                            fields = _context4.sent;
                            _context4.next = 74;
                            return this.model("category").get_type_bycate(cate_id);

                        case 74:
                            type_list = _context4.sent;
                            _context4.next = 77;
                            return this.model('category').get_parent_category(cate_id);

                        case 77:
                            nav = _context4.sent;

                            //console.log(model);
                            this.assign('groups', groups);
                            this.assign('breadcrumb', nav);
                            this.assign('info', info);
                            this.assign('fields', fields);
                            this.assign('type_list', type_list);
                            this.assign('model', model);
                            this.meta_title = '新增' + model.title;
                            this.active = "admin/dpcp/index";
                            this.assign({
                                "navxs": true
                            });
                            return _context4.abrupt('return', this.display());

                        case 88:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function addAction() {
            return _ref16.apply(this, arguments);
        }

        return addAction;
    }();

    //编辑文档


    _class.prototype.editAction = function () {
        var _ref18 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var id, sortid, document, data, article, model, xfmb, table, details, groups, sort, typevar, _iterator14, _isArray14, _i14, _ref19, val, fields, type_list, tags, nav;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            id = this.get('id') || "";
                            sortid = this.get('sortid') || 0;

                            if (!think.isEmpty(id)) {
                                _context5.next = 4;
                                break;
                            }

                            return _context5.abrupt('return', this.fail("参数不能为空"));

                        case 4:

                            //获取详细数据；
                            document = this.model("document");
                            _context5.next = 7;
                            return document.details(id);

                        case 7:
                            data = _context5.sent;
                            _context5.next = 10;
                            return this.admin_priv("edit", data.category_id);

                        case 10:
                            //let model =  this.model("model").getmodel(2);
                            if (data.pid != 0) {
                                //获取上级文档
                                article = document.field("id,title,type").find(data.pid);

                                this.assign('article', article);
                            }
                            _context5.next = 13;
                            return this.model("model").get_document_model(data.model_id);

                        case 13:
                            model = _context5.sent;

                            console.log("model---------" + (0, _stringify2.default)(model));

                            if (!(model.name == 'xfmb')) {
                                _context5.next = 28;
                                break;
                            }

                            _context5.next = 18;
                            return document.where({ title: "吸粉模板图库", category_id: 147 }).find();

                        case 18:
                            xfmb = _context5.sent;

                            console.log("xfmb---------" + (0, _stringify2.default)(xfmb));
                            _context5.next = 22;
                            return think.model("model", think.config("db")).get_table_name(xfmb.model_id);

                        case 22:
                            table = _context5.sent;
                            _context5.next = 25;
                            return think.model(table, think.config("db")).find(xfmb.id);

                        case 25:
                            details = _context5.sent;

                            console.log("details---------" + (0, _stringify2.default)(details));
                            this.assign('xfmb', details);

                        case 28:
                            _context5.next = 30;
                            return this.model("category").get_category(data.category_id, 'groups');

                        case 30:
                            groups = _context5.sent;

                            if (groups) {
                                groups = parse_config_attr(groups);
                            }
                            this.assign('groups', groups);
                            // 获取分类信息
                            _context5.next = 35;
                            return this.model("category").get_category(data.category_id, 'documentsorts');

                        case 35:
                            sort = _context5.sent;

                            if (!sort) {
                                _context5.next = 92;
                                break;
                            }

                            sort = JSON.parse(sort);
                            if (sortid != 0) {
                                data.sort_id = sortid;
                            } else if (data.sort_id == 0) {
                                data.sort_id = sort.defaultshow;
                            }
                            _context5.next = 41;
                            return this.model("typevar").where({ sortid: data.sort_id }).select();

                        case 41:
                            typevar = _context5.sent;
                            _iterator14 = typevar, _isArray14 = Array.isArray(_iterator14), _i14 = 0, _iterator14 = _isArray14 ? _iterator14 : (0, _getIterator3.default)(_iterator14);

                        case 43:
                            if (!_isArray14) {
                                _context5.next = 49;
                                break;
                            }

                            if (!(_i14 >= _iterator14.length)) {
                                _context5.next = 46;
                                break;
                            }

                            return _context5.abrupt('break', 91);

                        case 46:
                            _ref19 = _iterator14[_i14++];
                            _context5.next = 53;
                            break;

                        case 49:
                            _i14 = _iterator14.next();

                            if (!_i14.done) {
                                _context5.next = 52;
                                break;
                            }

                            return _context5.abrupt('break', 91);

                        case 52:
                            _ref19 = _i14.value;

                        case 53:
                            val = _ref19;
                            _context5.next = 56;
                            return this.model("typeoption").where({ optionid: val.optionid }).find();

                        case 56:
                            val.option = _context5.sent;

                            if (!(val.option.type == 'select')) {
                                _context5.next = 69;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context5.next = 67;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            _context5.next = 63;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 63:
                            _context5.t0 = _context5.sent;

                            if (_context5.t0) {
                                _context5.next = 66;
                                break;
                            }

                            _context5.t0 = "";

                        case 66:
                            val.option.value = _context5.t0;

                        case 67:
                            _context5.next = 89;
                            break;

                        case 69:
                            if (!(val.option.type == "radio" || val.option.type == "checkbox")) {
                                _context5.next = 81;
                                break;
                            }

                            if (think.isEmpty(val.option.rules)) {
                                _context5.next = 79;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            val.option.rules.choices = parse_config_attr(val.option.rules.choices);
                            _context5.next = 75;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 75:
                            _context5.t1 = _context5.sent;

                            if (_context5.t1) {
                                _context5.next = 78;
                                break;
                            }

                            _context5.t1 = "";

                        case 78:
                            val.option.value = _context5.t1;

                        case 79:
                            _context5.next = 89;
                            break;

                        case 81:
                            if (think.isEmpty(val.option.rules)) {
                                _context5.next = 89;
                                break;
                            }

                            val.option.rules = JSON.parse(val.option.rules);
                            _context5.next = 85;
                            return this.model("typeoptionvar").where({ sortid: data.sort_id, tid: data.id, fid: data.category_id, optionid: val.option.optionid }).getField("value", true);

                        case 85:
                            _context5.t2 = _context5.sent;

                            if (_context5.t2) {
                                _context5.next = 88;
                                break;
                            }

                            _context5.t2 = "";

                        case 88:
                            val.option.value = _context5.t2;

                        case 89:
                            _context5.next = 43;
                            break;

                        case 91:
                            // console.log(typevar);
                            this.assign("typevar", typevar);

                        case 92:
                            //console.log(sort);
                            this.assign("sort", sort);
                            //获取表单字段排序
                            _context5.next = 95;
                            return this.model("attribute").get_model_attribute(model.id, true);

                        case 95:
                            fields = _context5.sent;

                            console.log("fields-----------" + (0, _stringify2.default)(fields));
                            this.assign('fields', fields);
                            //获取当前分类文档的类型
                            _context5.next = 100;
                            return this.model("category").get_type_bycate(data.category_id);

                        case 100:
                            type_list = _context5.sent;
                            _context5.next = 103;
                            return this.model('tags').where({ model_id: data.model_id }).select();

                        case 103:
                            tags = _context5.sent;

                            this.assign('tags', tags);
                            //获取面包屑信息
                            _context5.next = 107;
                            return this.model('category').get_parent_category(data.category_id);

                        case 107:
                            nav = _context5.sent;

                            //console.log(model);
                            this.assign('breadcrumb', nav);
                            //console.log(model);
                            this.assign('type_list', type_list);
                            this.meta_title = '编辑' + model.title;
                            this.active = "admin/dpcp/index";
                            this.assign({
                                "navxs": true
                            });
                            //console.log(data);
                            this.assign('data', data);
                            this.assign('model_id', data.model_id);
                            this.assign('model', model);
                            this.display();

                        case 117:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function editAction() {
            return _ref18.apply(this, arguments);
        }

        return editAction;
    }();

    /**
     * 更新或者添加数据
     */


    _class.prototype.updateAction = function () {
        var _ref20 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var data, res;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            data = this.post();

                            console.log("updateAction----------------" + (0, _stringify2.default)(data));
                            _context6.next = 4;
                            return this.model('document').updates(data);

                        case 4:
                            res = _context6.sent;

                            if (!res) {
                                _context6.next = 15;
                                break;
                            }

                            if (res.data.id) {
                                _context6.next = 12;
                                break;
                            }

                            _context6.next = 9;
                            return this.model("action").log("add_document", "document", res.id, this.user.uid, this.ip(), this.http.url);

                        case 9:
                            this.success({ name: "添加成功", url: "/admin/dpcp/index/cate_id/" + res.data.category_id });
                            _context6.next = 13;
                            break;

                        case 12:
                            this.success({ name: "更新成功", url: "/admin/dpcp/index/cate_id/" + res.data.category_id });

                        case 13:
                            _context6.next = 16;
                            break;

                        case 15:
                            this.fail("操作失败！");

                        case 16:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function updateAction() {
            return _ref20.apply(this, arguments);
        }

        return updateAction;
    }();
    /**
     * 设置一条或者多条数据的状态
     */


    _class.prototype.setstatusAction = function () {
        var _ref21 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var data, _iterator15, _isArray15, _i15, _ref22, v, _iterator16, _isArray16, _i16, _ref23, _v, _iterator17, _isArray17, _i17, _ref24, _v2, _iterator18, _isArray18, _i18, _ref25, _v3, _iterator19, _isArray19, _i19, _ref26, _v4;

            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            console.log("param art ---------" + (0, _stringify2.default)(this.param()));
                            _context7.next = 3;
                            return this.model("document").where({ id: ["IN", this.param('ids')] }).select();

                        case 3:
                            data = _context7.sent;
                            _context7.t0 = Number(this.param('status'));
                            _context7.next = _context7.t0 === -1 ? 7 : _context7.t0 === 1 ? 24 : _context7.t0 === 0 ? 41 : 58;
                            break;

                        case 7:
                            _iterator15 = data, _isArray15 = Array.isArray(_iterator15), _i15 = 0, _iterator15 = _isArray15 ? _iterator15 : (0, _getIterator3.default)(_iterator15);

                        case 8:
                            if (!_isArray15) {
                                _context7.next = 14;
                                break;
                            }

                            if (!(_i15 >= _iterator15.length)) {
                                _context7.next = 11;
                                break;
                            }

                            return _context7.abrupt('break', 23);

                        case 11:
                            _ref22 = _iterator15[_i15++];
                            _context7.next = 18;
                            break;

                        case 14:
                            _i15 = _iterator15.next();

                            if (!_i15.done) {
                                _context7.next = 17;
                                break;
                            }

                            return _context7.abrupt('break', 23);

                        case 17:
                            _ref22 = _i15.value;

                        case 18:
                            v = _ref22;
                            _context7.next = 21;
                            return this.admin_priv("delete", v.category_id);

                        case 21:
                            _context7.next = 8;
                            break;

                        case 23:
                            return _context7.abrupt('break', 58);

                        case 24:
                            _iterator16 = data, _isArray16 = Array.isArray(_iterator16), _i16 = 0, _iterator16 = _isArray16 ? _iterator16 : (0, _getIterator3.default)(_iterator16);

                        case 25:
                            if (!_isArray16) {
                                _context7.next = 31;
                                break;
                            }

                            if (!(_i16 >= _iterator16.length)) {
                                _context7.next = 28;
                                break;
                            }

                            return _context7.abrupt('break', 40);

                        case 28:
                            _ref23 = _iterator16[_i16++];
                            _context7.next = 35;
                            break;

                        case 31:
                            _i16 = _iterator16.next();

                            if (!_i16.done) {
                                _context7.next = 34;
                                break;
                            }

                            return _context7.abrupt('break', 40);

                        case 34:
                            _ref23 = _i16.value;

                        case 35:
                            _v = _ref23;
                            _context7.next = 38;
                            return this.admin_priv("examine", _v.category_id);

                        case 38:
                            _context7.next = 25;
                            break;

                        case 40:
                            return _context7.abrupt('break', 58);

                        case 41:
                            _iterator17 = data, _isArray17 = Array.isArray(_iterator17), _i17 = 0, _iterator17 = _isArray17 ? _iterator17 : (0, _getIterator3.default)(_iterator17);

                        case 42:
                            if (!_isArray17) {
                                _context7.next = 48;
                                break;
                            }

                            if (!(_i17 >= _iterator17.length)) {
                                _context7.next = 45;
                                break;
                            }

                            return _context7.abrupt('break', 57);

                        case 45:
                            _ref24 = _iterator17[_i17++];
                            _context7.next = 52;
                            break;

                        case 48:
                            _i17 = _iterator17.next();

                            if (!_i17.done) {
                                _context7.next = 51;
                                break;
                            }

                            return _context7.abrupt('break', 57);

                        case 51:
                            _ref24 = _i17.value;

                        case 52:
                            _v2 = _ref24;
                            _context7.next = 55;
                            return this.admin_priv("disable", _v2.category_id);

                        case 55:
                            _context7.next = 42;
                            break;

                        case 57:
                            return _context7.abrupt('break', 58);

                        case 58:
                            console.log("post data----" + (0, _stringify2.default)(this.post()));
                            _context7.next = 61;
                            return _Base.prototype.setstatusAction.call(this, this, 'document');

                        case 61:
                            if (!(this.param('status') == -1 || this.param('status') == 0)) {
                                _context7.next = 83;
                                break;
                            }

                            _iterator18 = data, _isArray18 = Array.isArray(_iterator18), _i18 = 0, _iterator18 = _isArray18 ? _iterator18 : (0, _getIterator3.default)(_iterator18);

                        case 63:
                            if (!_isArray18) {
                                _context7.next = 69;
                                break;
                            }

                            if (!(_i18 >= _iterator18.length)) {
                                _context7.next = 66;
                                break;
                            }

                            return _context7.abrupt('break', 81);

                        case 66:
                            _ref25 = _iterator18[_i18++];
                            _context7.next = 73;
                            break;

                        case 69:
                            _i18 = _iterator18.next();

                            if (!_i18.done) {
                                _context7.next = 72;
                                break;
                            }

                            return _context7.abrupt('break', 81);

                        case 72:
                            _ref25 = _i18.value;

                        case 73:
                            _v3 = _ref25;
                            _context7.next = 76;
                            return this.model('search').delsearch(_v3.model_id, _v3.id);

                        case 76:
                            if (think.isEmpty(_v3.keyname)) {
                                _context7.next = 79;
                                break;
                            }

                            _context7.next = 79;
                            return this.model("keyword").delkey(_v3.id, _v3.model_id);

                        case 79:
                            _context7.next = 63;
                            break;

                        case 81:
                            _context7.next = 104;
                            break;

                        case 83:
                            if (!(this.param('status') == 1)) {
                                _context7.next = 104;
                                break;
                            }

                            _iterator19 = data, _isArray19 = Array.isArray(_iterator19), _i19 = 0, _iterator19 = _isArray19 ? _iterator19 : (0, _getIterator3.default)(_iterator19);

                        case 85:
                            if (!_isArray19) {
                                _context7.next = 91;
                                break;
                            }

                            if (!(_i19 >= _iterator19.length)) {
                                _context7.next = 88;
                                break;
                            }

                            return _context7.abrupt('break', 104);

                        case 88:
                            _ref26 = _iterator19[_i19++];
                            _context7.next = 95;
                            break;

                        case 91:
                            _i19 = _iterator19.next();

                            if (!_i19.done) {
                                _context7.next = 94;
                                break;
                            }

                            return _context7.abrupt('break', 104);

                        case 94:
                            _ref26 = _i19.value;

                        case 95:
                            _v4 = _ref26;
                            _context7.next = 98;
                            return this.model("search").addsearch(_v4.model_id, _v4.id, _v4);

                        case 98:
                            console.log(_v4.keyname);

                            if (think.isEmpty(_v4.keyname)) {
                                _context7.next = 102;
                                break;
                            }

                            _context7.next = 102;
                            return this.model("keyword").addkey(_v4.keyname, _v4.id, _v4.uid, _v4.model_id, 0);

                        case 102:
                            _context7.next = 85;
                            break;

                        case 104:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function setstatusAction() {
            return _ref21.apply(this, arguments);
        }

        return setstatusAction;
    }();

    /**
     * 回收站列表
     */


    _class.prototype.recycleAction = function () {
        var _ref27 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var map, list, Pages, pages, page, _iterator20, _isArray20, _i20, _ref28, val;

            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            map = { status: -1 };

                            if (this.is_admin) {
                                //TODO
                            }

                            _context8.next = 4;
                            return this.model('document').where(map).order('update_time desc').field("id,title,uid,type,category_id,update_time").page(this.get('page')).countSelect();

                        case 4:
                            list = _context8.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(list);
                            _iterator20 = list.data, _isArray20 = Array.isArray(_iterator20), _i20 = 0, _iterator20 = _isArray20 ? _iterator20 : (0, _getIterator3.default)(_iterator20);

                        case 9:
                            if (!_isArray20) {
                                _context8.next = 15;
                                break;
                            }

                            if (!(_i20 >= _iterator20.length)) {
                                _context8.next = 12;
                                break;
                            }

                            return _context8.abrupt('break', 28);

                        case 12:
                            _ref28 = _iterator20[_i20++];
                            _context8.next = 19;
                            break;

                        case 15:
                            _i20 = _iterator20.next();

                            if (!_i20.done) {
                                _context8.next = 18;
                                break;
                            }

                            return _context8.abrupt('break', 28);

                        case 18:
                            _ref28 = _i20.value;

                        case 19:
                            val = _ref28;
                            _context8.next = 22;
                            return this.model('category').get_category(val.category_id, "title");

                        case 22:
                            val.category = _context8.sent;
                            _context8.next = 25;
                            return this.model('member').get_nickname(val.uid);

                        case 25:
                            val.username = _context8.sent;

                        case 26:
                            _context8.next = 9;
                            break;

                        case 28:

                            this.assign("_total", list.count);
                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', list.data);
                            this.meta_title = "回收站";
                            return _context8.abrupt('return', this.display());

                        case 33:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function recycleAction() {
            return _ref27.apply(this, arguments);
        }

        return recycleAction;
    }();

    _class.prototype.clearAction = function () {
        var _ref29 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var clist, _iterator21, _isArray21, _i21, _ref30, v, table, res;

            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            _context9.next = 2;
                            return this.model("document").where({ status: -1 }).select();

                        case 2:
                            clist = _context9.sent;

                            if (!think.isEmpty(clist)) {
                                _context9.next = 5;
                                break;
                            }

                            return _context9.abrupt('return', this.success({ name: "回收站没有内容！" }));

                        case 5:
                            _iterator21 = clist, _isArray21 = Array.isArray(_iterator21), _i21 = 0, _iterator21 = _isArray21 ? _iterator21 : (0, _getIterator3.default)(_iterator21);

                        case 6:
                            if (!_isArray21) {
                                _context9.next = 12;
                                break;
                            }

                            if (!(_i21 >= _iterator21.length)) {
                                _context9.next = 9;
                                break;
                            }

                            return _context9.abrupt('break', 25);

                        case 9:
                            _ref30 = _iterator21[_i21++];
                            _context9.next = 16;
                            break;

                        case 12:
                            _i21 = _iterator21.next();

                            if (!_i21.done) {
                                _context9.next = 15;
                                break;
                            }

                            return _context9.abrupt('break', 25);

                        case 15:
                            _ref30 = _i21.value;

                        case 16:
                            v = _ref30;
                            _context9.next = 19;
                            return this.model("model").get_table_name(v.model_id);

                        case 19:
                            table = _context9.sent;

                            console.log(table);
                            _context9.next = 23;
                            return this.model(table).where({ id: v.id }).delete();

                        case 23:
                            _context9.next = 6;
                            break;

                        case 25:
                            _context9.next = 27;
                            return this.model("document").delete({ where: { status: -1 } });

                        case 27:
                            res = _context9.sent;

                            if (!res) {
                                _context9.next = 30;
                                break;
                            }

                            return _context9.abrupt('return', this.success({ name: "清空回收站成功" }));

                        case 30:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function clearAction() {
            return _ref29.apply(this, arguments);
        }

        return clearAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=dpcp.js.map