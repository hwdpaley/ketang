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

    /**
     * index action
     * @return {Promise} []
     */
    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.db = this.model('menu');
        this.tactive = "setup";
    };

    _class.prototype.indexAction = function indexAction() {
        //auto render template file index_index.html
        this.meta_title = '菜单管理';
        return this.display();
    };

    /**
     * getlist
     */


    _class.prototype.getlistAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var _this2 = this;

            var pid, draw, data, i, breadcrumb, nav, all_menu, obj, map, list, relist;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            pid = this.get("pid") || 0;
                            draw = this.get("draw");

                            if (!pid) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 5;
                            return this.db.where({ id: pid }).find();

                        case 5:
                            data = _context.sent;

                        case 6:
                            i = pid;
                            //

                            breadcrumb = [];

                        case 8:
                            if (!(i != 0)) {
                                _context.next = 16;
                                break;
                            }

                            _context.next = 11;
                            return this.db.where({ id: i }).field("id,title,pid").find();

                        case 11:
                            nav = _context.sent;

                            breadcrumb.push(nav);
                            i = nav.pid;

                            _context.next = 8;
                            break;

                        case 16:
                            _context.next = 18;
                            return this.db.field('id,title').select();

                        case 18:
                            all_menu = _context.sent;

                            //all_men
                            obj = {};

                            all_menu.forEach(function (v) {
                                obj[v.id] = v.title;
                            });

                            map = {};

                            map.pid = pid;
                            _context.next = 25;
                            return this.db.where(map).order("sort asc ,id asc").select();

                        case 25:
                            list = _context.sent;

                            //list
                            if (list) {
                                list.forEach(function (v, k) {
                                    if (v.pid) {
                                        v.up_title = obj[v.pid];
                                    } else {
                                        v.up_title = "一级菜单";
                                    }
                                    //console.log(this.setup.MEUN_GROUP)
                                    v.group = _this2.setup.MENU_GROUP[v.group];
                                });
                            }
                            relist = {
                                "draw": draw,
                                "data": list,
                                "breadcrumb": breadcrumb.reverse()
                                //console.log(data);
                            };
                            return _context.abrupt('return', this.json(relist));

                        case 29:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getlistAction() {
            return _ref.apply(this, arguments);
        }

        return getlistAction;
    }();
    /**
     * 改变状态
     * @returns {Promise|*}
     */


    _class.prototype.chstaAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var map, res;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            //let gets = this.get();
                            map = {};
                            //console.log(gets);

                            if (this.get("key") == 1) {
                                map.hide = this.get("status");
                            } else {
                                map.is_dev = this.get("status");
                            }
                            map.id = this.get("id");
                            _context2.next = 5;
                            return this.db.update(map);

                        case 5:
                            res = _context2.sent;

                            if (!res) {
                                _context2.next = 9;
                                break;
                            }

                            think.cache("adminenu", null); //清除菜单缓存
                            return _context2.abrupt('return', this.json(res));

                        case 9:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function chstaAction() {
            return _ref2.apply(this, arguments);
        }

        return chstaAction;
    }();
    /**
     * 编辑菜单
     * @returns {*}
     */


    _class.prototype.editAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var id, data, _id, res;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!this.isAjax("post")) {
                                _context3.next = 9;
                                break;
                            }

                            id = this.post("id");
                            _context3.next = 4;
                            return this.db.where({ id: id }).update(this.post());

                        case 4:
                            data = _context3.sent;

                            think.cache("adminenu", null); //清除菜单缓存
                            return _context3.abrupt('return', this.json(data));

                        case 9:
                            _id = this.get("id");
                            _context3.next = 12;
                            return this.db.where({ id: _id }).find();

                        case 12:
                            res = _context3.sent;

                            // console.log(res);
                            this.assign({
                                data: res
                            });
                            return _context3.abrupt('return', this.display());

                        case 15:
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
     * 添加菜单
     * @returns {*}
     */


    _class.prototype.addAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var data, add;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            if (!this.isAjax("post")) {
                                _context4.next = 10;
                                break;
                            }

                            data = this.post();

                            data.status = 1;
                            _context4.next = 5;
                            return this.db.add(data);

                        case 5:
                            add = _context4.sent;

                            think.cache("adminenu", null); //清除菜单缓存
                            return _context4.abrupt('return', this.json(add));

                        case 10:
                            return _context4.abrupt('return', this.display());

                        case 11:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function addAction() {
            return _ref4.apply(this, arguments);
        }

        return addAction;
    }();

    /**
     * 删除菜单
     * @returns {Promise|*}
     */


    _class.prototype.deleteAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var id, res;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            id = this.post("id");
                            //console.log(id);

                            _context5.next = 3;
                            return this.db.where({ id: id }).delete();

                        case 3:
                            res = _context5.sent;

                            think.cache("adminenu", null); //清除菜单缓存
                            return _context5.abrupt('return', this.json(res));

                        case 6:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function deleteAction() {
            return _ref5.apply(this, arguments);
        }

        return deleteAction;
    }();

    /**
     * 获取上级菜单
     * @returns {Promise|*}
     */


    _class.prototype.getmenuAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var menu;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return this.returnnodes();

                        case 2:
                            menu = _context6.sent;
                            return _context6.abrupt('return', this.json(menu));

                        case 4:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function getmenuAction() {
            return _ref6.apply(this, arguments);
        }

        return getmenuAction;
    }();

    _class.prototype.aabbAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var value;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return this.model("menu").getallmenu();

                        case 2:
                            value = _context7.sent;

                            this.end(value);

                        case 4:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function aabbAction() {
            return _ref7.apply(this, arguments);
        }

        return aabbAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=menu.js.map