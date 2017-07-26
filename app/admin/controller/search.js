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

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _segment = require('segment');

var _segment2 = _interopRequireDefault(_segment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var list, variables, ft_min_word_len;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.model("search_model").order('sort ASC').select();

                        case 2:
                            list = _context.sent;

                            this.assign("list", list);
                            this.meta_title = "全站搜索";
                            //检查全文搜索配置
                            _context.next = 7;
                            return this.model("mysql").query('show variables');

                        case 7:
                            variables = _context.sent;
                            ft_min_word_len = think._.find(variables, ['Variable_name', 'ft_min_word_len']).Value;

                            this.assign("ft_min_word_len", ft_min_word_len);
                            return _context.abrupt('return', this.display());

                        case 11:
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
     * 添加搜索分类
     * @returns {Promise.<void>}
     */


    _class.prototype.addAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var data, extend, add, modlist;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context2.next = 16;
                                break;
                            }

                            data = this.post();
                            _context2.next = 4;
                            return this.model("model").get_model(data.mod, "extend");

                        case 4:
                            extend = _context2.sent;

                            data.extend = extend;
                            _context2.next = 8;
                            return this.model("search_model").add(data);

                        case 8:
                            add = _context2.sent;

                            if (!add) {
                                _context2.next = 13;
                                break;
                            }

                            return _context2.abrupt('return', this.success({ name: "添加成功!" }));

                        case 13:
                            return _context2.abrupt('return', this.fail("添加失败!"));

                        case 14:
                            _context2.next = 22;
                            break;

                        case 16:
                            _context2.next = 18;
                            return this.model("model").where({ status: 1, id: [">", 1] }).select();

                        case 18:
                            modlist = _context2.sent;

                            //console.log(modlist);
                            this.assign("modlist", modlist);
                            this.meta_title = "添加搜索分类";
                            return _context2.abrupt('return', this.display());

                        case 22:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function addAction() {
            return _ref2.apply(this, arguments);
        }

        return addAction;
    }();

    /**
     * 编辑
     * @returns {Promise.<void>}
     */


    _class.prototype.editAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var data, extend, up, info, modlist;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context3.next = 16;
                                break;
                            }

                            data = this.post();
                            _context3.next = 4;
                            return this.model("model").get_model(data.mod, "extend");

                        case 4:
                            extend = _context3.sent;

                            data.extend = extend;
                            _context3.next = 8;
                            return this.model("search_model").update(data);

                        case 8:
                            up = _context3.sent;

                            if (!up) {
                                _context3.next = 13;
                                break;
                            }

                            return _context3.abrupt('return', this.success({ name: "编辑成功!" }));

                        case 13:
                            return _context3.abrupt('return', this.fail("编辑失败!"));

                        case 14:
                            _context3.next = 26;
                            break;

                        case 16:
                            _context3.next = 18;
                            return this.model("search_model").find(this.get("id"));

                        case 18:
                            info = _context3.sent;

                            this.assign("info", info);
                            _context3.next = 22;
                            return this.model("model").where({ status: 1, id: [">", 1] }).select();

                        case 22:
                            modlist = _context3.sent;

                            this.assign("modlist", modlist);
                            this.meta_title = "编辑搜索分类";
                            return _context3.abrupt('return', this.display());

                        case 26:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function editAction() {
            return _ref3.apply(this, arguments);
        }

        return editAction;
    }();

    _class.prototype.delAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var id, del;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            id = this.get("id");
                            _context4.next = 3;
                            return this.model("search_model").where({ id: id }).delete();

                        case 3:
                            del = _context4.sent;

                            if (!del) {
                                _context4.next = 8;
                                break;
                            }

                            return _context4.abrupt('return', this.success({ name: "删除成功!" }));

                        case 8:
                            return _context4.abrupt('return', this.fail("删除失败!"));

                        case 9:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function delAction() {
            return _ref4.apply(this, arguments);
        }

        return delAction;
    }();

    _class.prototype.sortAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return _Base.prototype.sortAction.call(this, this, "search_model");

                        case 2:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function sortAction() {
            return _ref5.apply(this, arguments);
        }

        return sortAction;
    }();
    /**
     * 重建索引
     * @returns {Promise.<void>}
     */


    _class.prototype.createindexAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var paths, lock, variables, ft_min_word_len, tables, _iterator, _isArray, _i, _ref7, v, page, _tables, id, start, _page, pagesize, map, field, olist, narr, _iterator2, _isArray2, _i2, _ref8, _v, obj, arr, _iterator3, _isArray3, _i3, _ref9, d, segment, segment_q, _page2, rate, _page3, _page4, _variables, _ft_min_word_len;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            paths = think.RESOURCE_PATH + "/backup/";
                            lock = paths + "createindex.lock";
                            //检查全文搜索配置

                            _context6.next = 4;
                            return this.model("mysql").query('show variables');

                        case 4:
                            variables = _context6.sent;
                            ft_min_word_len = think._.find(variables, ['Variable_name', 'ft_min_word_len']).Value;

                            if (!(this.isAjax("post") && !think.isEmpty(this.post()))) {
                                _context6.next = 45;
                                break;
                            }

                            think.mkdir(paths);
                            //检查是否有正在执行的任务

                            if (!think.isFile(lock)) {
                                _context6.next = 12;
                                break;
                            }

                            return _context6.abrupt('return', this.fail(20, '检测到有一个重建任务正在执行，请稍后再试！'));

                        case 12:
                            //创建锁文件
                            _fs2.default.writeFileSync(lock, new Date());

                        case 13:
                            _context6.next = 15;
                            return this.model("search_model").select();

                        case 15:
                            tables = _context6.sent;
                            _iterator = tables, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 17:
                            if (!_isArray) {
                                _context6.next = 23;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context6.next = 20;
                                break;
                            }

                            return _context6.abrupt('break', 37);

                        case 20:
                            _ref7 = _iterator[_i++];
                            _context6.next = 27;
                            break;

                        case 23:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context6.next = 26;
                                break;
                            }

                            return _context6.abrupt('break', 37);

                        case 26:
                            _ref7 = _i.value;

                        case 27:
                            v = _ref7;

                            if (!(v.extend == 0)) {
                                _context6.next = 34;
                                break;
                            }

                            _context6.next = 31;
                            return this.model("model").get_model(v.mod, "name");

                        case 31:
                            v.table = _context6.sent;
                            _context6.next = 35;
                            break;

                        case 34:
                            v.table = "document";

                        case 35:
                            _context6.next = 17;
                            break;

                        case 37:
                            _context6.next = 39;
                            return this.session('createindex_tables', tables);

                        case 39:
                            _context6.next = 41;
                            return this.model("search").where("1=1").delete();

                        case 41:
                            page = { 'id': 0, 'page': 1, 'pagesize': this.post("pagesize") };
                            return _context6.abrupt('return', this.json({
                                'msg': { progress: 0, info: "开始索引更新" },
                                'page': page,
                                'status': 1
                            }));

                        case 45:
                            if (!(this.isAjax("get") && !think.isEmpty(this.get()))) {
                                _context6.next = 127;
                                break;
                            }

                            _context6.next = 48;
                            return this.session('createindex_tables');

                        case 48:
                            _tables = _context6.sent;

                            console.log(_tables);
                            id = this.get("id");
                            start = this.get("start");
                            _page = this.get("page");
                            pagesize = this.get("pagesize");
                            //console.log(this.get());

                            map = {};

                            if (_tables[id].extend == 1) {
                                map.model_id = _tables[id].mod;
                                map.status = 1;
                            }
                            field = _tables[id].data.split(",");

                            field.push(_tables[id].pk);
                            field.push(_tables[id].addtime);
                            _context6.next = 61;
                            return this.model(_tables[id].table).page(_page, pagesize).where(map).field(field).countSelect();

                        case 61:
                            olist = _context6.sent;

                            if (!olist.count) {
                                _context6.next = 120;
                                break;
                            }

                            narr = [];
                            _iterator2 = olist.data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 65:
                            if (!_isArray2) {
                                _context6.next = 71;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context6.next = 68;
                                break;
                            }

                            return _context6.abrupt('break', 100);

                        case 68:
                            _ref8 = _iterator2[_i2++];
                            _context6.next = 75;
                            break;

                        case 71:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context6.next = 74;
                                break;
                            }

                            return _context6.abrupt('break', 100);

                        case 74:
                            _ref8 = _i2.value;

                        case 75:
                            _v = _ref8;
                            obj = {};

                            obj.m_id = _tables[id].mod;
                            obj.d_id = _v[_tables[id].pk];
                            obj.add_time = _v[_tables[id].addtime];
                            arr = [];
                            _iterator3 = _tables[id].data.split(","), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 82:
                            if (!_isArray3) {
                                _context6.next = 88;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context6.next = 85;
                                break;
                            }

                            return _context6.abrupt('break', 96);

                        case 85:
                            _ref9 = _iterator3[_i3++];
                            _context6.next = 92;
                            break;

                        case 88:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context6.next = 91;
                                break;
                            }

                            return _context6.abrupt('break', 96);

                        case 91:
                            _ref9 = _i3.value;

                        case 92:
                            d = _ref9;

                            arr.push(_v[d]);

                        case 94:
                            _context6.next = 82;
                            break;

                        case 96:
                            if (ft_min_word_len == 1) {
                                segment = new _segment2.default();
                                // 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可

                                segment.useDefault();
                                // 开始分词
                                segment_q = segment.doSegment(arr.join(" "), {
                                    simple: true,
                                    stripPunctuation: true
                                });

                                obj.data = arr.join(" ") + " " + segment_q.join(" ");
                            } else {
                                obj.data = arr.join(" ").replace(/<[^>]+>/g, "");
                            }
                            narr.push(obj);

                        case 98:
                            _context6.next = 65;
                            break;

                        case 100:
                            console.log("wwww" + narr);
                            _context6.next = 103;
                            return this.model("search").addMany(narr);

                        case 103:
                            if (!(olist.totalPages > olist.currentPage)) {
                                _context6.next = 109;
                                break;
                            }

                            _page2 = { 'id': id, 'page': olist.currentPage + 1, 'pagesize': olist.numsPerPage };
                            rate = Math.floor(100 * ((olist.currentPage + 1) / olist.totalPages));
                            return _context6.abrupt('return', this.json({
                                'msg': { progress: rate, info: '\u6B63\u5728\u66F4\u65B0\uFF1A <span style=\'color:#ff0000;font-size:14px;text-decoration:underline;\' >' + _tables[id].name + '</span> - \u603B\u6570\uFF1A' + olist.count + ' - \u5F53\u524D\u7B2C <font color=\'red\'>' + olist.currentPage + '</font> \u9875 ' },
                                'page': _page2,
                                'status': 1
                            }));

                        case 109:
                            if (!_tables[++id]) {
                                _context6.next = 114;
                                break;
                            }

                            _page3 = { 'id': id, 'page': 1, "pagesize": pagesize };
                            return _context6.abrupt('return', this.json({
                                'msg': '<span style=\'color:#ff0000;font-size:14px;text-decoration:underline;\' >' + _tables[id - 1].name + '</span>\u7D22\u5F15\u66F4\u65B0\u5B8C\u6210',
                                'page': _page3,
                                'status': 1
                            }));

                        case 114:
                            if (think.isFile(lock)) {
                                _fs2.default.unlinkSync(lock);
                            }
                            _context6.next = 117;
                            return this.session('createindex_tables', null);

                        case 117:
                            return _context6.abrupt('return', this.json({
                                'msg': { progress: 100, info: "<span style='color:#ff0000;font-size:14px;text-decoration:underline;' >全站</span>索引更新完成" },
                                'status': 1
                            }));

                        case 118:
                            _context6.next = 123;
                            break;

                        case 120:
                            if (!_tables[id]) {
                                _context6.next = 123;
                                break;
                            }

                            _page4 = { 'id': ++id, 'page': 1, "pagesize": 1 };
                            return _context6.abrupt('return', this.json({
                                'msg': '<span style=\'color:#ff0000;font-size:14px;text-decoration:underline;\' >' + _tables[id - 1].name + '</span>\u7D22\u5F15\u66F4\u65B0\u5B8C\u6210',
                                'page': _page4,
                                'status': 1
                            }));

                        case 123:
                            if (think.isFile(lock)) {
                                _fs2.default.unlinkSync(lock);
                            }
                            return _context6.abrupt('return', this.json({
                                'msg': { progress: 100, info: "<span style='color:#ff0000;font-size:14px;text-decoration:underline;' >全站</span>索引更新完成" },
                                'status': 1
                            }));

                        case 127:
                            _context6.next = 129;
                            return this.model("mysql").query('show variables');

                        case 129:
                            _variables = _context6.sent;
                            _ft_min_word_len = think._.find(_variables, ['Variable_name', 'ft_min_word_len']).Value;

                            this.assign("ft_min_word_len", _ft_min_word_len);
                            this.meta_title = "重建索引";
                            this.active = "admin/search/index";
                            return _context6.abrupt('return', this.display());

                        case 135:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function createindexAction() {
            return _ref6.apply(this, arguments);
        }

        return createindexAction;
    }();
    /**
     * 解锁
     */


    _class.prototype.unlockAction = function unlockAction() {
        var paths = think.RESOURCE_PATH + "/backup/";
        var lock = paths + "createindex.lock";
        //检查是否有正在执行的任务
        if (think.isFile(lock)) {
            _fs2.default.unlinkSync(lock);
            return this.success({ name: "解锁成功!" });
        } else {
            //创建锁文件
            return this.success({ name: "无需解锁!" });
        }
    };

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=search.js.map