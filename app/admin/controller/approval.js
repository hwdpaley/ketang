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

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.db = this.model("approval");
        this.tactive = "approval";
    };
    /**
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var map, list, Pages, pages, page, modlist, _iterator, _isArray, _i, _ref2, val;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //auto render template file index_index.html
                            map = {};

                            if (!think.isEmpty(this.get("model"))) {
                                map.model = this.get("model");
                            }
                            _context.next = 4;
                            return this.db.where(map).page(this.get('page'), 20).order('time DESC').countSelect();

                        case 4:
                            list = _context.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(list);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', list);
                            _context.next = 12;
                            return this.model("model").get_model(null, null, { is_approval: 1 });

                        case 12:
                            modlist = _context.sent;
                            _iterator = modlist, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 14:
                            if (!_isArray) {
                                _context.next = 20;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 17;
                                break;
                            }

                            return _context.abrupt('break', 30);

                        case 17:
                            _ref2 = _iterator[_i++];
                            _context.next = 24;
                            break;

                        case 20:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 23;
                                break;
                            }

                            return _context.abrupt('break', 30);

                        case 23:
                            _ref2 = _i.value;

                        case 24:
                            val = _ref2;
                            _context.next = 27;
                            return this.db.where({ model: val.id }).count();

                        case 27:
                            val.count = _context.sent;

                        case 28:
                            _context.next = 14;
                            break;

                        case 30:
                            console.log(modlist);
                            this.assign("model", modlist);
                            _context.t0 = this;
                            _context.next = 35;
                            return this.db.count();

                        case 35:
                            _context.t1 = _context.sent;

                            _context.t0.assign.call(_context.t0, "count", _context.t1);

                            this.meta_title = "内容审核";
                            return _context.abrupt('return', this.display());

                        case 39:
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
     * 查看详情
     */


    _class.prototype.detailsAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var id, details, info;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            id = this.get("id");
                            _context2.next = 3;
                            return this.db.find(id);

                        case 3:
                            details = _context2.sent;
                            info = JSON.parse(details.data);

                            console.log(info);
                            this.assign("info", info);
                            this.meta_title = "查看详情";
                            return _context2.abrupt('return', this.display());

                        case 9:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function detailsAction() {
            return _ref3.apply(this, arguments);
        }

        return detailsAction;
    }();

    /**
     * 通过审核
     */


    _class.prototype.adoptaAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var ids, datalist, _iterator2, _isArray2, _i2, _ref5, v, table, res;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            ids = this.param("ids");

                            if (!think.isEmpty(ids)) {
                                _context3.next = 3;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("参数错误！"));

                        case 3:
                            _context3.next = 5;
                            return this.db.where({ id: ["IN", ids] }).select();

                        case 5:
                            datalist = _context3.sent;

                            console.log(datalist);
                            _iterator2 = datalist, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 8:
                            if (!_isArray2) {
                                _context3.next = 14;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context3.next = 11;
                                break;
                            }

                            return _context3.abrupt('break', 53);

                        case 11:
                            _ref5 = _iterator2[_i2++];
                            _context3.next = 18;
                            break;

                        case 14:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context3.next = 17;
                                break;
                            }

                            return _context3.abrupt('break', 53);

                        case 17:
                            _ref5 = _i2.value;

                        case 18:
                            v = _ref5;
                            _context3.next = 21;
                            return this.model("model").get_table_name(v.model, true);

                        case 21:
                            table = _context3.sent;
                            res = null;
                            _context3.t0 = table.extend;
                            _context3.next = _context3.t0 === 0 ? 26 : _context3.t0 === 1 ? 40 : 51;
                            break;

                        case 26:
                            console.log(table);
                            _context3.next = 29;
                            return this.model("mod/" + table.table).updates(JSON.parse(v.data), v.time);

                        case 29:
                            res = _context3.sent;

                            if (!res) {
                                _context3.next = 38;
                                break;
                            }

                            _context3.next = 33;
                            return this.model("action").log("addquestion", "question", res.id, res.data.uid, this.ip(), this.http.url);

                        case 33:
                            _context3.next = 35;
                            return this.db.where({ id: v.id }).delete();

                        case 35:
                            return _context3.abrupt('return', this.success({ name: "审核成功" }));

                        case 38:
                            return _context3.abrupt('return', this.fail("操作失败！"));

                        case 39:
                            return _context3.abrupt('break', 51);

                        case 40:
                            _context3.next = 42;
                            return this.model("document").updates(JSON.parse(v.data), v.time);

                        case 42:
                            res = _context3.sent;

                            if (!res) {
                                _context3.next = 49;
                                break;
                            }

                            _context3.next = 46;
                            return this.db.where({ id: v.id }).delete();

                        case 46:
                            return _context3.abrupt('return', this.success({ name: "审核成功" }));

                        case 49:
                            return _context3.abrupt('return', this.fail("操作失败！"));

                        case 50:
                            return _context3.abrupt('break', 51);

                        case 51:
                            _context3.next = 8;
                            break;

                        case 53:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function adoptaAction() {
            return _ref4.apply(this, arguments);
        }

        return adoptaAction;
    }();

    /**
     * 拒绝审核
     */


    _class.prototype.refuseAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var ids, res;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            ids = this.param("ids");

                            if (!think.isEmpty(ids)) {
                                _context4.next = 3;
                                break;
                            }

                            return _context4.abrupt('return', this.fail("参数错误！"));

                        case 3:
                            _context4.next = 5;
                            return this.db.where({ id: ["IN", ids] }).delete();

                        case 5:
                            res = _context4.sent;

                            if (!res) {
                                _context4.next = 10;
                                break;
                            }

                            return _context4.abrupt('return', this.success({ name: "操作成功！" }));

                        case 10:
                            return _context4.abrupt('return', this.fail("操作失败！"));

                        case 11:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function refuseAction() {
            return _ref6.apply(this, arguments);
        }

        return refuseAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=approval.js.map