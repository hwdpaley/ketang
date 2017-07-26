"use strict";

exports.__esModule = true;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------

/**
 * model
 */
var _class = function (_think$model$base) {
    (0, _inherits3.default)(_class, _think$model$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
    }

    _class.prototype.adminmenu = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var _this2 = this;

            var menu;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return think.cache("adminenu", function () {
                                return _this2.getallmenu();
                            }, { timeout: 365 * 24 * 3600 });

                        case 2:
                            menu = _context.sent;
                            return _context.abrupt("return", menu);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function adminmenu() {
            return _ref.apply(this, arguments);
        }

        return adminmenu;
    }();
    //获取后台全部菜单


    _class.prototype.getallmenu = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(uid, is_admin) {
            var where, setup, groups, arr, _iterator, _isArray, _i, _ref3, v, menu, nmenu, _iterator2, _isArray2, _i2, _ref4, m, Auth, auth, res;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            where = {};

                            where.hide = 0;
                            _context2.next = 4;
                            return this.model("setup").getset();

                        case 4:
                            setup = _context2.sent;

                            if (!setup.DEVELOP_MODE) {
                                // 是否开发者模式
                                where.is_dev = 0;
                            }
                            groups = setup.MENU_GROUP;
                            //think.log(group)
                            //let pid = await this.topmenu();

                            arr = {};
                            _iterator = (0, _keys2.default)(groups), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 9:
                            if (!_isArray) {
                                _context2.next = 15;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context2.next = 12;
                                break;
                            }

                            return _context2.abrupt("break", 55);

                        case 12:
                            _ref3 = _iterator[_i++];
                            _context2.next = 19;
                            break;

                        case 15:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context2.next = 18;
                                break;
                            }

                            return _context2.abrupt("break", 55);

                        case 18:
                            _ref3 = _i.value;

                        case 19:
                            v = _ref3;

                            //let obj = {}

                            where.group = v;
                            menu = [];

                            if (!(where.group != 0)) {
                                _context2.next = 26;
                                break;
                            }

                            _context2.next = 25;
                            return this.where(where).order('sort asc').select();

                        case 25:
                            menu = _context2.sent;

                        case 26:
                            if (think.isEmpty(menu)) {
                                _context2.next = 53;
                                break;
                            }

                            //arr.push(obj[v.id]=menu)
                            nmenu = [];
                            //验证权限，根据权限进行显示控制

                            if (is_admin) {
                                _context2.next = 51;
                                break;
                            }

                            _iterator2 = menu, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 30:
                            if (!_isArray2) {
                                _context2.next = 36;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context2.next = 33;
                                break;
                            }

                            return _context2.abrupt("break", 49);

                        case 33:
                            _ref4 = _iterator2[_i2++];
                            _context2.next = 40;
                            break;

                        case 36:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context2.next = 39;
                                break;
                            }

                            return _context2.abrupt("break", 49);

                        case 39:
                            _ref4 = _i2.value;

                        case 40:
                            m = _ref4;
                            Auth = think.adapter("auth", "rbac");
                            auth = new Auth(uid);
                            _context2.next = 45;
                            return auth.check(m.url);

                        case 45:
                            res = _context2.sent;

                            //console.log(res);
                            if (res) {
                                nmenu.push(m);
                            }

                        case 47:
                            _context2.next = 30;
                            break;

                        case 49:
                            _context2.next = 52;
                            break;

                        case 51:
                            nmenu = menu;

                        case 52:
                            arr[v] = arr_to_tree(nmenu, 0);

                        case 53:
                            _context2.next = 9;
                            break;

                        case 55:
                            return _context2.abrupt("return", arr);

                        case 56:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function getallmenu(_x, _x2) {
            return _ref2.apply(this, arguments);
        }

        return getallmenu;
    }();
    //获取顶级菜单


    _class.prototype.topmenu = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var where, setup, menu;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            where = {};

                            where.hide = 0;
                            where.pid = 0;
                            _context3.next = 5;
                            return this.model("setup").getset();

                        case 5:
                            setup = _context3.sent;

                            if (!setup.DEVELOP_MODE) {
                                // 是否开发者模式
                                where.is_dev = 0;
                            }
                            _context3.next = 9;
                            return this.where(where).order('sort asc').select();

                        case 9:
                            menu = _context3.sent;
                            return _context3.abrupt("return", menu);

                        case 11:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function topmenu() {
            return _ref5.apply(this, arguments);
        }

        return topmenu;
    }();

    //获取顶级菜单分组


    _class.prototype.group = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(id) {
            var where, setup, groups;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            where = {};

                            where.hide = 0;
                            where.pid = id;
                            _context4.next = 5;
                            return this.model("setup").getset();

                        case 5:
                            setup = _context4.sent;

                            if (!setup.DEVELOP_MODE) {
                                // 是否开发者模式
                                where.is_dev = 0;
                            }
                            _context4.next = 9;
                            return this.where(where).field("group").order('sort asc').select();

                        case 9:
                            groups = _context4.sent;
                            return _context4.abrupt("return", groups);

                        case 11:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function group(_x3) {
            return _ref6.apply(this, arguments);
        }

        return group;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=menu.js.map