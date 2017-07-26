'use strict';
/**
 * 插件后台控制器
 * 如果插件有后台管理业务写在这个控制器里面
 */

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

var _admin = require('../admin.js');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    /**
     * index action
     * 插件管理入口
     * 友情链接管理列表
     * @return {Promise} []
     */
    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var typeid, map, data, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //auto render template file index_index.html
                            typeid = this.get("typeid") || 0;

                            this.assign("typeid", typeid);
                            map = {};

                            if (typeid > 0) {
                                map.typeid = typeid;
                            }
                            //获取友情链接
                            _context.next = 6;
                            return this.model("ext_link").where(map).page(this.get('page')).countSelect();

                        case 6:
                            data = _context.sent;

                            //console.log(data);
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);
                            //获取当前插件的分类
                            _context.t0 = this;
                            _context.next = 15;
                            return this.gettype();

                        case 15:
                            _context.t1 = _context.sent;

                            _context.t0.assign.call(_context.t0, "type", _context.t1);

                            return _context.abrupt('return', this.display());

                        case 18:
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
     * 添加友情链接
     * @returns {*}
     */


    _class.prototype.ajaxaddAction = function () {
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

                            if (!(data.linktype == 1)) {
                                _context2.next = 5;
                                break;
                            }

                            if (!think.isEmpty(data.logo)) {
                                _context2.next = 5;
                                break;
                            }

                            return _context2.abrupt('return', this.fail("logo链接类型，请填写logo地址！"));

                        case 5:
                            _context2.next = 7;
                            return this.model("ext_link").add(data);

                        case 7:
                            res = _context2.sent;

                            if (!res) {
                                _context2.next = 12;
                                break;
                            }

                            return _context2.abrupt('return', this.success({ name: "添加成功!" }));

                        case 12:
                            return _context2.abrupt('return', this.fail("添加失败！"));

                        case 13:
                            _context2.next = 22;
                            break;

                        case 15:
                            _context2.t0 = this;
                            _context2.next = 18;
                            return this.gettype();

                        case 18:
                            _context2.t1 = _context2.sent;

                            _context2.t0.assign.call(_context2.t0, "type", _context2.t1);

                            this.meta_title = "添加友情链接";
                            return _context2.abrupt('return', this.display());

                        case 22:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function ajaxaddAction() {
            return _ref2.apply(this, arguments);
        }

        return ajaxaddAction;
    }();

    /**
     * 修改友情链接
     */


    _class.prototype.ajaxeditAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var data, res, id, link;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context3.next = 15;
                                break;
                            }

                            data = this.post();

                            if (!(data.linktype == 1)) {
                                _context3.next = 5;
                                break;
                            }

                            if (!think.isEmpty(data.logo)) {
                                _context3.next = 5;
                                break;
                            }

                            return _context3.abrupt('return', this.fail("logo链接类型，请填写logo地址！"));

                        case 5:
                            _context3.next = 7;
                            return this.model("ext_link").where({ id: data.id }).update(data);

                        case 7:
                            res = _context3.sent;

                            if (!res) {
                                _context3.next = 12;
                                break;
                            }

                            return _context3.abrupt('return', this.success({ name: "修改成功!" }));

                        case 12:
                            return _context3.abrupt('return', this.fail("修改失败！"));

                        case 13:
                            _context3.next = 28;
                            break;

                        case 15:
                            id = this.get("id");
                            _context3.next = 18;
                            return this.model("ext_link").find(id);

                        case 18:
                            link = _context3.sent;

                            console.log(link);
                            this.assign("link", link);
                            //获取当前插件的分类
                            _context3.t0 = this;
                            _context3.next = 24;
                            return this.gettype();

                        case 24:
                            _context3.t1 = _context3.sent;

                            _context3.t0.assign.call(_context3.t0, "type", _context3.t1);

                            this.meta_title = "添加友情链接";
                            return _context3.abrupt('return', this.display());

                        case 28:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function ajaxeditAction() {
            return _ref3.apply(this, arguments);
        }

        return ajaxeditAction;
    }();

    _class.prototype.delAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var ids, res;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            ids = this.param("ids");
                            //console.log(ids);

                            _context4.next = 3;
                            return this.model("ext_link").where({ id: ["IN", ids] }).delete();

                        case 3:
                            res = _context4.sent;

                            if (!res) {
                                _context4.next = 8;
                                break;
                            }

                            return _context4.abrupt('return', this.success({ name: "删除成功!" }));

                        case 8:
                            return _context4.abrupt('return', this.fail("删除失败！"));

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

    /**
     *  友情链接审核申请
     * @returns {*}
     */


    _class.prototype.applyAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var ids, res, data, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context5.next = 12;
                                break;
                            }

                            ids = this.post("ids");
                            _context5.next = 4;
                            return this.model("ext_link").where({ id: ["IN", ids] }).update({ passed: 1 });

                        case 4:
                            res = _context5.sent;

                            if (!res) {
                                _context5.next = 9;
                                break;
                            }

                            return _context5.abrupt('return', this.success({ name: "审核成功!" }));

                        case 9:
                            return _context5.abrupt('return', this.fail("审核失败！"));

                        case 10:
                            _context5.next = 21;
                            break;

                        case 12:
                            _context5.next = 14;
                            return this.model("ext_link").where({ passed: 0 }).page(this.get('page')).countSelect();

                        case 14:
                            data = _context5.sent;

                            //console.log(data);
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);
                            return _context5.abrupt('return', this.display());

                        case 21:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function applyAction() {
            return _ref5.apply(this, arguments);
        }

        return applyAction;
    }();

    return _class;
}(_admin2.default);

exports.default = _class;
//# sourceMappingURL=admin.js.map