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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$controller$bas) {
    (0, _inherits3.default)(_class, _think$controller$bas);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));
    }

    _class.prototype.__before = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var csrf;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.model("setup").getset();

                        case 2:
                            this.setup = _context.sent;
                            _context.next = 5;
                            return this.session('__CSRF__');

                        case 5:
                            csrf = _context.sent;
                            _context.next = 8;
                            return this.cookie('__CSRF__', csrf);

                        case 8:
                            this.assign('csrf', csrf);

                        case 9:
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
     * public action
     * @return {Promise} []
     */


    _class.prototype.signinAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var is_login, Geetest, _geetest, _res, username, password, res, fail;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.islogin();

                        case 2:
                            is_login = _context2.sent;

                            if (!this.isPost()) {
                                _context2.next = 42;
                                break;
                            }

                            if (!(1 == this.setup.GEETEST_IS_ADMLOGIN)) {
                                _context2.next = 13;
                                break;
                            }

                            Geetest = think.service("geetest"); //加载 commoon 模块下的 geetset service

                            _geetest = new Geetest();
                            _context2.next = 9;
                            return _geetest.validate(this.post());

                        case 9:
                            _res = _context2.sent;

                            if (!("success" != _res.status)) {
                                _context2.next = 13;
                                break;
                            }

                            this.http.error = new Error("验证码不正确");
                            return _context2.abrupt('return', think.statusAction(702, this.http));

                        case 13:
                            username = this.post('username');
                            password = this.post('password');

                            password = encryptPassword(password);
                            _context2.next = 18;
                            return this.model("member").signin(username, password, this.ip(), 5, 1);

                        case 18:
                            res = _context2.sent;

                            if (!(0 < res.uid)) {
                                _context2.next = 27;
                                break;
                            }

                            _context2.next = 22;
                            return this.model("action").log("user_login", "member", res.uid, res.uid, this.ip(), this.http.url);

                        case 22:
                            _context2.next = 24;
                            return this.session('userInfo', res);

                        case 24:
                            //TODO 用户密钥
                            this.redirect('/admin/index');
                            _context2.next = 40;
                            break;

                        case 27:
                            //登录失败
                            fail = void 0;
                            _context2.t0 = res;
                            _context2.next = _context2.t0 === -1 ? 31 : _context2.t0 === -2 ? 33 : _context2.t0 === -3 ? 35 : 37;
                            break;

                        case 31:
                            fail = '用户不存在或被禁用';
                            return _context2.abrupt('break', 38);

                        case 33:
                            fail = '密码错误';
                            return _context2.abrupt('break', 38);

                        case 35:
                            fail = '您无权登陆后台！';
                            return _context2.abrupt('break', 38);

                        case 37:
                            fail = '未知错误';

                        case 38:

                            this.http.error = new Error(fail);
                            return _context2.abrupt('return', think.statusAction(702, this.http));

                        case 40:
                            _context2.next = 49;
                            break;

                        case 42:
                            if (!is_login) {
                                _context2.next = 46;
                                break;
                            }

                            this.redirect('/admin/index');
                            _context2.next = 49;
                            break;

                        case 46:
                            _context2.next = 48;
                            return this.session('userInfo', null);

                        case 48:
                            return _context2.abrupt('return', this.display());

                        case 49:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function signinAction() {
            return _ref2.apply(this, arguments);
        }

        return signinAction;
    }();

    _class.prototype.logoutAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var is_login;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return this.islogin();

                        case 2:
                            is_login = _context3.sent;

                            if (!is_login) {
                                _context3.next = 9;
                                break;
                            }

                            _context3.next = 6;
                            return this.session('userInfo', null);

                        case 6:
                            this.redirect('/admin/public/signin');
                            _context3.next = 10;
                            break;

                        case 9:
                            this.redirect('/admin/public/signin');

                        case 10:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function logoutAction() {
            return _ref3.apply(this, arguments);
        }

        return logoutAction;
    }();

    _class.prototype.islogin = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var user, res;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return this.session('userInfo');

                        case 2:
                            user = _context4.sent;
                            res = think.isEmpty(user) ? false : true;
                            return _context4.abrupt('return', res);

                        case 5:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function islogin() {
            return _ref4.apply(this, arguments);
        }

        return islogin;
    }();

    _class.prototype.verAction = function verAction() {
        this.end("df11df");
    };
    //验证菜单标示是否重复


    _class.prototype.categorynameAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var name, pid, res;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            name = this.get('name');
                            pid = this.get('pid');
                            _context5.next = 4;
                            return this.model("category").where({ name: name, pid: pid }).find();

                        case 4:
                            res = _context5.sent;

                            if (think.isEmpty(res)) {
                                _context5.next = 9;
                                break;
                            }

                            return _context5.abrupt('return', this.json({ "message": "your custom message" }));

                        case 9:
                            return _context5.abrupt('return', this.json(1));

                        case 10:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function categorynameAction() {
            return _ref5.apply(this, arguments);
        }

        return categorynameAction;
    }();
    //选择分离


    _class.prototype.selectcateAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            this.meta_title = "选择分类";
                            return _context6.abrupt('return', this.display());

                        case 2:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function selectcateAction() {
            return _ref6.apply(this, arguments);
        }

        return selectcateAction;
    }();
    //获取分类


    _class.prototype.getmenuAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var cate, _iterator, _isArray, _i, _ref8, val, id;

            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return this.model("category").get_all_category();

                        case 2:
                            cate = _context7.sent;
                            _iterator = cate, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 4:
                            if (!_isArray) {
                                _context7.next = 10;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context7.next = 7;
                                break;
                            }

                            return _context7.abrupt('break', 19);

                        case 7:
                            _ref8 = _iterator[_i++];
                            _context7.next = 14;
                            break;

                        case 10:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context7.next = 13;
                                break;
                            }

                            return _context7.abrupt('break', 19);

                        case 13:
                            _ref8 = _i.value;

                        case 14:
                            val = _ref8;
                            id = think.isEmpty(val.title) ? val.id : val.title;

                            val.url = '/' + id;

                        case 17:
                            _context7.next = 4;
                            break;

                        case 19:
                            return _context7.abrupt('return', this.json(arr_to_tree(cate, 0)));

                        case 20:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function getmenuAction() {
            return _ref7.apply(this, arguments);
        }

        return getmenuAction;
    }();

    //验证码


    _class.prototype.geetestAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var Geetest, geetest, post, res, _res2;

            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            Geetest = think.service("geetest"); //加载 commoon 模块下的 geetset service

                            geetest = new Geetest();

                            if (!this.isPost()) {
                                _context8.next = 10;
                                break;
                            }

                            post = this.post();
                            //console.log(post);

                            _context8.next = 6;
                            return geetest.validate(post);

                        case 6:
                            res = _context8.sent;
                            return _context8.abrupt('return', this.json(res));

                        case 10:
                            _context8.next = 12;
                            return geetest.register(this.get('type'));

                        case 12:
                            _res2 = _context8.sent;
                            return _context8.abrupt('return', this.json(_res2));

                        case 14:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function geetestAction() {
            return _ref9.apply(this, arguments);
        }

        return geetestAction;
    }();

    _class.prototype.validate = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(data) {
            var deferred;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            deferred = think.defer();

                            geetest.validate({

                                challenge: data.geetest_challenge,
                                validate: data.geetest_validate,
                                seccode: data.geetest_seccode

                            }, function (err, result) {

                                var data = { status: "success" };

                                // if (err || !result) {
                                //     console.log(err);
                                //     data.status = "fail";
                                // }
                                console.log(result);
                                deferred.resolve(data);
                            });
                            return _context9.abrupt('return', deferred.promise);

                        case 3:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function validate(_x) {
            return _ref10.apply(this, arguments);
        }

        return validate;
    }();

    /**
     * 关键词自动完成
     */


    _class.prototype.getkeywordAction = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var term, data;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            term = this.get("term");
                            _context10.next = 3;
                            return this.model("keyword").where({ keyname: ["LIKE", '%' + term + '%'] }).field("id,keyname as label,keyname as value").select();

                        case 3:
                            data = _context10.sent;
                            return _context10.abrupt('return', this.json(data));

                        case 5:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function getkeywordAction() {
            return _ref11.apply(this, arguments);
        }

        return getkeywordAction;
    }();

    /**
     * 关联字段
     * @returns {Promise<PreventPromise>}
     */


    _class.prototype.getrelationAction = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
            var model, id, val, key, map, data;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            model = this.get("model");
                            id = this.get("id");
                            val = this.get("val");
                            key = this.get("key");
                            map = {};

                            map[val] = ["like", "%" + key + "%"];
                            _context11.next = 8;
                            return this.model(model).where(map).field(id + ' as id, ' + val + ' as data').select();

                        case 8:
                            data = _context11.sent;
                            return _context11.abrupt('return', this.end(data));

                        case 10:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function getrelationAction() {
            return _ref12.apply(this, arguments);
        }

        return getrelationAction;
    }();

    /**
     * 验证表内字段是否重复
     * /public/remote/table/要验证的表名
     * @returns {Promise<PreventPromise>}
     */


    _class.prototype.remoteAction = function () {
        var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
            var data, table, v, res;
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            data = this.get();
                            table = this.get('table');

                            for (v in data) {
                                data[v] = think._.trim(data[v]);
                            }
                            delete data.table;
                            _context12.next = 6;
                            return this.model(table).where(data).find();

                        case 6:
                            res = _context12.sent;

                            if (!think.isEmpty(res)) {
                                _context12.next = 11;
                                break;
                            }

                            return _context12.abrupt('return', this.json(1));

                        case 11:
                            return _context12.abrupt('return', this.json(0));

                        case 12:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        function remoteAction() {
            return _ref13.apply(this, arguments);
        }

        return remoteAction;
    }();

    return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=public.js.map