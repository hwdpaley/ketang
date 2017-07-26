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

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 模型数据管理控制器
 * @author 阿特 <arterli@qq.com>
 * http://www.cmswing.com
 */
var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.tactive = "setup";
    };
    /**
     * list action
     * @return {Promise} []
     */
    //id:编号
    //title:标题:[EDIT]
    //type:类型
    //update_time:最后更新
    //status:状态
    //view:浏览
    //id:操作:[EDIT]|编辑,[DELETE]|删除


    _class.prototype.listAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var model, fields, grids, ngrids, _iterator, _isArray, _i, _ref2, value, val, field, values, _val$1$split, _iterator2, _isArray2, _i2, _ref3, v, array, map, key, iskey, k, name, data, parent, fix, _key, Pages, pages, page;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:

                            //auto render template file index_index.html
                            model = this.get('model');

                            !think.isEmpty(model) || this.fail("模型名标识必须有！");

                            //获取模型信息
                            _context.next = 4;
                            return this.model('model').where({ name: model }).find();

                        case 4:
                            model = _context.sent;

                            !think.isEmpty(model) || this.fail("模型不存在！");
                            //解析列表规则
                            fields = [];
                            grids = trim(model.list_grid).split('\r\n');

                            console.log(model);
                            ngrids = [];
                            _iterator = grids, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 11:
                            if (!_isArray) {
                                _context.next = 17;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 14;
                                break;
                            }

                            return _context.abrupt('break', 48);

                        case 14:
                            _ref2 = _iterator[_i++];
                            _context.next = 21;
                            break;

                        case 17:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 20;
                                break;
                            }

                            return _context.abrupt('break', 48);

                        case 20:
                            _ref2 = _i.value;

                        case 21:
                            value = _ref2;

                            if (!(trim(value) === '')) {
                                _context.next = 24;
                                break;
                            }

                            return _context.abrupt('continue', 46);

                        case 24:
                            // 字段:标题:链接
                            val = value.split(':');
                            // 支持多个字段显示

                            field = val[0].split(',');
                            values = { 'field': field, 'title': val[1] };

                            if (!think.isEmpty(val[2])) {
                                values.href = val[2];
                            }
                            if (val[1].indexOf('|') > -1) {
                                _val$1$split = val[1].split('|');
                                // 显示格式定义

                                values.title = _val$1$split[0];
                                values.format = _val$1$split[1];
                            }
                            _iterator2 = field, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 30:
                            if (!_isArray2) {
                                _context.next = 36;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 33;
                                break;
                            }

                            return _context.abrupt('break', 45);

                        case 33:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 40;
                            break;

                        case 36:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 39;
                                break;
                            }

                            return _context.abrupt('break', 45);

                        case 39:
                            _ref3 = _i2.value;

                        case 40:
                            v = _ref3;
                            array = v.split('|');

                            fields.push(array[0]);

                        case 43:
                            _context.next = 30;
                            break;

                        case 45:
                            ngrids.push(values);

                        case 46:
                            _context.next = 11;
                            break;

                        case 48:

                            //console.log(ngrids)
                            // 过滤重复字段信息
                            fields = unique(fields);
                            //console.log(model)
                            //关键字搜索
                            map = {};
                            key = model.search_key ? model.search_key : 'title';
                            iskey = this.param();

                            if (!think.isEmpty(iskey[key])) {
                                map[key] = ['like', '%' + this.get(key) + '%'];
                                delete iskey[key];
                            }

                            //console.log(iskey)
                            //条件搜索
                            for (k in iskey) {
                                if (in_array(k, fields)) {
                                    map[k] = iskey[k];
                                }
                            }
                            //console.log(map);
                            if (!think.isEmpty(model.list_row)) {
                                this.config("db.nums_per_page", model.list_row);
                            }
                            //let http =this.http;
                            //读取模型数据列表
                            name = void 0;
                            data = void 0;

                            if (!model.extend) {
                                _context.next = 72;
                                break;
                            }

                            _context.next = 60;
                            return this.model('model').get_table_name(model.id);

                        case 60:
                            name = _context.sent;
                            _context.next = 63;
                            return this.model('model').get_table_name(model.extend);

                        case 63:
                            parent = _context.sent;
                            fix = this.config('db.prefix');
                            _key = array_search(fields, 'id');
                            //console.log(key);

                            if (false === _key) {
                                fields.push('' + fix + parent + '.id as id');
                            } else {
                                fields[_key] = '' + fix + parent + '.id as id';
                            }
                            // console.log(fields);
                            _context.next = 69;
                            return this.model(parent).join({
                                table: name,
                                join: "inner", //join 方式，有 left, right, inner 3 种方式
                                as: "c", // 表别名
                                on: ["id", "id"] //ON 条件
                            }).field(fields).order('' + fix + parent + '.id DESC').where(map).page(this.get("page")).countSelect();

                        case 69:
                            data = _context.sent;
                            _context.next = 79;
                            break;

                        case 72:
                            if (model.need_pk) {
                                in_array('id', fields) || fields.push('id');
                            }
                            //console.log(fields)
                            _context.next = 75;
                            return this.model('model').get_table_name(model.id);

                        case 75:
                            name = _context.sent;
                            _context.next = 78;
                            return this.model(name)
                            /* 查询指定字段，不指定则查询所有字段 */
                            .field(fields)
                            // 查询条件
                            .where(map)
                            /* 默认通过id逆序排列 */
                            .order(model.need_pk ? 'id DESC' : '')
                            /* 数据分页 */
                            .page(this.get("page"))
                            /* 执行查询 */
                            .countSelect();

                        case 78:
                            data = _context.sent;

                        case 79:

                            // console.log(ngrids);
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);
                            _context.next = 84;
                            return this.parseDocumentList(data.data, model.id);

                        case 84:
                            data.data = _context.sent;

                            this.assign('pagerData', page); //分页展示使用
                            this.meta_title = model.title + '列表';
                            this.active = "admin/model/index";
                            this.assign('model', model);
                            this.assign('list_grids', ngrids);
                            this.assign('list_data', data.data);
                            return _context.abrupt('return', this.display());

                        case 92:
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
     * 设置一条或者多条数据的状态
     */


    _class.prototype.setstatusAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _Base.prototype.setstatusAction.call(this, this, 'document');

                        case 2:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function setstatusAction() {
            return _ref4.apply(this, arguments);
        }

        return setstatusAction;
    }();
    //TODO 模型添加数据


    _class.prototype.addAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var model_id, model;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            //获取模型信息
                            model_id = this.get("model");
                            _context3.next = 3;
                            return this.model("model").where({ status: 1, id: model_id }).find();

                        case 3:
                            model = _context3.sent;

                            model || this.fail('模型不存在！');
                            if (this.isPost()) {
                                //TODO 后台验证后续天极

                            }

                        case 6:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function addAction() {
            return _ref5.apply(this, arguments);
        }

        return addAction;
    }();
    // TODO 模型编辑数据


    _class.prototype.editAction = function editAction() {}
    // TODO

    // TODO  模型数据验证
    ;

    _class.prototype.checkAttr = function checkAttr(Model, model_id) {
        // TODO

    };

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=cms.js.map