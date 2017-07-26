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

var _base = require('../../topic/controller/base.js');

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
    };

    /**
     * 模型公共参数
     * @private
     */


    _class.prototype.__before = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _Base.prototype.__before.call(this);

                        case 2:
                            if (!(this.get('category').split("-")[0] || this.get("cid"))) {
                                _context.next = 12;
                                break;
                            }

                            _context.next = 5;
                            return this.category(this.get('category').split("-")[0] || this.get("cid"));

                        case 5:
                            this.m_cate = _context.sent;
                            _context.next = 8;
                            return this.model("model").get_model(this.m_cate.model);

                        case 8:
                            this.mod = _context.sent;


                            //seo
                            this.meta_title = this.m_cate.meta_title ? this.m_cate.meta_title : this.m_cate.title; //标题
                            this.keywords = this.m_cate.keywords ? this.m_cate.keywords : ''; //seo关键词
                            this.description = this.m_cate.description ? this.m_cate.description : ""; //seo描述

                        case 12:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function __before() {
            return _ref.apply(this, arguments);
        }

        return __before;
    }();
    /**
     * index action
     * @return {Promise} []
     * 封面入口
     */


    _class.prototype.indexAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return this.action(this.mod.name + '/index', "index");

                        case 3:
                            _context2.next = 10;
                            break;

                        case 5:
                            _context2.prev = 5;
                            _context2.t0 = _context2['catch'](0);

                            //console.log(err);
                            think.log(_context2.t0.message, 'ERROR');
                            this.assign("err", _context2.t0);
                            return _context2.abrupt('return', this.action("index", "moderror"));

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[0, 5]]);
        }));

        function indexAction() {
            return _ref2.apply(this, arguments);
        }

        return indexAction;
    }();

    /**
     * 列表入口
     * @returns {*}
     */


    _class.prototype.listAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return this.action(this.mod.name + '/index', "list");

                        case 3:
                            _context3.next = 10;
                            break;

                        case 5:
                            _context3.prev = 5;
                            _context3.t0 = _context3['catch'](0);

                            think.log(_context3.t0.message, 'ERROR');
                            //console.log(err);
                            this.assign("err", _context3.t0);
                            return _context3.abrupt('return', this.action("index", "moderror"));

                        case 10:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this, [[0, 5]]);
        }));

        function listAction() {
            return _ref3.apply(this, arguments);
        }

        return listAction;
    }();

    /**
     * 详情入口
     * @returns {*}
     */


    _class.prototype.detailAction = function detailAction() {
        this.end(11);
        return this.display();
    };
    //创建独立模型时错误提示


    _class.prototype.moderrorAction = function moderrorAction() {

        return this.display(this.config("view.root_path") + think.sep + this.http.module + think.sep + this.http.controller + "_" + this.http.action + this.config("view.file_ext"));
    };
    //独立模型display方法封装


    _class.prototype.modtemp = function modtemp(mod) {
        var moblie = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var ctr = this.http.controller.split("/");
        if (!moblie) {
            if (ctr[1]) {
                return this.display();
            } else {
                return this.display(think.ROOT_PATH + think.sep + "view" + think.sep + "mod" + think.sep + mod + think.sep + this.http.controller + "_" + this.http.action + this.config("view.file_ext"));
            }
        } else {
            if (ctr[1]) {
                return this.display(think.ROOT_PATH + think.sep + "view" + think.sep + "mod" + think.sep + ctr[0] + think.sep + moblie + think.sep + ctr[1] + "_" + this.http.action + this.config("view.file_ext"));
            } else {
                return this.display(think.ROOT_PATH + think.sep + "view" + think.sep + "mod" + think.sep + mod + think.sep + moblie + think.sep + this.http.controller + "_" + this.http.action + this.config("view.file_ext"));
            }
        }
    };
    //独立模型get方法封装,只针对index入口action,其他的请用 this.get()方法。


    _class.prototype.modget = function modget(n) {
        var get = this.get('category') || 0;
        var query = get.split("-");
        return query[n];
    };

    /**
     * 前台用户组栏目权限验证方法
     * await this.c_verify("visit") 访问验证
     * await this.c_verify("add") 投稿验证
     * await this.c_verify("edit") 前台编辑控制
     * @returns {PreventPromise}
     */


    _class.prototype.c_verify = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(ac) {
            var cid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.m_cate.id;
            var info = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '您所在的用户组,禁止访问本栏目！';
            var roleid, priv;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            roleid = 8; //游客
                            //访问控制

                            if (!this.is_login) {
                                _context4.next = 5;
                                break;
                            }

                            _context4.next = 4;
                            return this.model("member").where({ id: this.is_login }).getField('groupid', true);

                        case 4:
                            roleid = _context4.sent;

                        case 5:
                            _context4.next = 7;
                            return this.model("category_priv").priv(cid, roleid, ac);

                        case 7:
                            priv = _context4.sent;

                            if (priv) {
                                _context4.next = 11;
                                break;
                            }

                            this.http.error = new Error(info);
                            return _context4.abrupt('return', think.statusAction(702, this.http));

                        case 11:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function c_verify(_x2) {
            return _ref4.apply(this, arguments);
        }

        return c_verify;
    }();

    /**
     * 当前栏目列表每页行数
     * @returns {*}
     */


    _class.prototype.page_num = function page_num() {
        var num = void 0;
        if (this.m_cate.list_row > 0) {
            num = this.m_cate.list_row;
        } else if (this.m_cate.model.split(",").length == 1) {
            var pagenum = this.mod.list_row;
            if (pagenum != 0) {
                num = pagenum;
            }
        } else {
            num = this.config("db.nums_per_page");
        }
        if (checkMobile(this.userAgent())) {
            num = 10;
        }
        return num;
    };

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=index.js.map