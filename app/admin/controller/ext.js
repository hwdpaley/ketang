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
        this.db = this.model('ext');
        this.tactive = "ext";
    };
    /**
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var data, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.db.page(this.get('page')).countSelect();

                        case 2:
                            data = _context.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);
                            this.meta_title = "插件管理";
                            return _context.abrupt('return', this.display());

                        case 10:
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
     * 添加插件
     * @returns {*}
     */


    _class.prototype.addAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var data, res;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context2.next = 15;
                                break;
                            }

                            data = this.post();

                            data.setting = "{}";
                            if (think.isEmpty(data.installtime)) {
                                data.installtime = new Date().getTime();
                            } else {
                                data.installtime = new Date(data.installtime).valueOf();
                            }
                            if (think.isEmpty(data.updatetime)) {
                                data.updatetime = new Date().getTime();
                            } else {
                                data.updatetime = new Date(data.updatetime).valueOf();
                            }
                            _context2.next = 7;
                            return this.model("ext").add(data);

                        case 7:
                            res = _context2.sent;

                            if (!res) {
                                _context2.next = 12;
                                break;
                            }

                            return _context2.abrupt('return', this.success({ name: "添加插件成功！", url: "/admin/ext/index" }));

                        case 12:
                            return _context2.abrupt('return', this.fail("添加失败！"));

                        case 13:
                            _context2.next = 18;
                            break;

                        case 15:
                            this.active = "admin/ext/index";
                            this.meta_title = "新增插件";
                            return _context2.abrupt('return', this.display());

                        case 18:
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
     * 更新插件
     * @returns {*}
     */


    _class.prototype.editAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var data, res, ids, info;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context3.next = 14;
                                break;
                            }

                            data = this.post();

                            data.setting = "{}";
                            if (think.isEmpty(data.updatetime)) {
                                data.updatetime = new Date().getTime();
                            } else {
                                data.updatetime = new Date(data.updatetime).getTime();
                            }
                            _context3.next = 6;
                            return this.model("ext").where({ ext: data.ext }).update(data);

                        case 6:
                            res = _context3.sent;

                            if (!res) {
                                _context3.next = 11;
                                break;
                            }

                            return _context3.abrupt('return', this.success({ name: "更新插件成功！" }));

                        case 11:
                            return _context3.abrupt('return', this.fail("更新失败！"));

                        case 12:
                            _context3.next = 21;
                            break;

                        case 14:
                            ids = this.get("ids");
                            _context3.next = 17;
                            return this.model("ext").where({ ext: ids }).find();

                        case 17:
                            info = _context3.sent;

                            this.assign("info", info);
                            this.meta_title = "更新插件";
                            return _context3.abrupt('return', this.display());

                        case 21:
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
    /**
     * 验证同一张表是否存在相同的子段值
     * @returns {*}
     */


    _class.prototype.checkextAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var get, res;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            get = this.get();
                            // let key = think._.keys(get)[0];
                            // let val = get[key];

                            _context4.next = 3;
                            return this.model("ext").where(get).count("ext");

                        case 3:
                            res = _context4.sent;

                            if (!res) {
                                _context4.next = 8;
                                break;
                            }

                            return _context4.abrupt('return', this.json(0));

                        case 8:
                            return _context4.abrupt('return', this.json(1));

                        case 9:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function checkextAction() {
            return _ref4.apply(this, arguments);
        }

        return checkextAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=ext.js.map