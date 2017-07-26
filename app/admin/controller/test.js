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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        // http.action = http.method.toLowerCase();
        //console.log(http.method.toLowerCase())
    };

    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var Auth, auth, res, http;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //let a={};///
                            //a.s11="dfsd";
                            //let aa=[]
                            //aa.push(1)
                            //let bb=aa.join(",")
                            //let cc=!(typeof(a) == "undefined")
                            //console.log(cc)
                            //let check=await this.check("/Admin/test","1");
                            //console.log(check);
                            //console.log(JSON.stringify(this.param()));
                            //let REQUEST = JSON.stringify(this.param()).toLowerCase()
                            // console.log(Object.is(JSON.stringify(url1).toLowerCase(), JSON.stringify(this.param()).toLowerCase()));
                            //  this.end("dd");
                            Auth = think.adapter("auth", "rbac");
                            auth = new Auth(14);
                            _context.next = 4;
                            return auth.check("/admin/test1");

                        case 4:
                            res = _context.sent;

                            //let roles =this.model();
                            // console.log(roles);
                            http = this.http;

                            console.log(http.action);
                            this.end();

                        case 8:
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

    _class.prototype.nunjucksAction = function nunjucksAction() {

        this.assign("date", new Date().valueOf());
        return this.display();
    };

    _class.prototype.tesfAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var model, affectedRows;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            model = this.model('sfsfsdf');
                            _context2.next = 3;
                            return model.where({ id: ['>', 100] }).delete();

                        case 3:
                            affectedRows = _context2.sent;

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function tesfAction() {
            return _ref2.apply(this, arguments);
        }

        return tesfAction;
    }();

    _class.prototype.funAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var str, match, user_id, record_id, model, log, replace, _iterator, _isArray, _i, _ref4, val, param, data, ss, _ss;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            str = "[user|get_nickname]在[time|time_format]登录了后台[model]";
                            match = str.match(/\[(\S+?)\]/g);
                            //console.log(match);

                            if (think.isEmpty(match)) {
                                _context3.next = 38;
                                break;
                            }

                            user_id = 1;
                            record_id = 3;
                            model = "mmm";
                            log = {
                                user: user_id,
                                record: record_id,
                                model: model,
                                time: new Date().valueOf(),
                                data: {
                                    user: user_id,
                                    record: record_id,
                                    model: model,
                                    time: new Date().valueOf()
                                }
                            };
                            replace = [];
                            _iterator = match, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 9:
                            if (!_isArray) {
                                _context3.next = 15;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context3.next = 12;
                                break;
                            }

                            return _context3.abrupt('break', 33);

                        case 12:
                            _ref4 = _iterator[_i++];
                            _context3.next = 19;
                            break;

                        case 15:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context3.next = 18;
                                break;
                            }

                            return _context3.abrupt('break', 33);

                        case 18:
                            _ref4 = _i.value;

                        case 19:
                            val = _ref4;

                            val = val.replace(/(^\[)|(\]$)/g, "");
                            param = val.split('|');
                            //console.log(param);

                            if (think.isEmpty(param[1])) {
                                _context3.next = 30;
                                break;
                            }

                            _context3.t0 = replace;
                            _context3.next = 26;
                            return call_user_func(param[1], log[param[0]]);

                        case 26:
                            _context3.t1 = _context3.sent;

                            _context3.t0.push.call(_context3.t0, _context3.t1);

                            _context3.next = 31;
                            break;

                        case 30:
                            replace.push(log[param[0]]);

                        case 31:
                            _context3.next = 9;
                            break;

                        case 33:
                            data = replace;
                            ss = str_replace(match, replace, str);
                            //for (let i=0 ; i < match.length;i++ ){
                            //    let nstr = str.replace(match[i],replace[i]);
                            //    console.log(nstr);
                            //}

                            console.log(ss);
                            _context3.next = 39;
                            break;

                        case 38:
                            _ss = str;

                        case 39:
                            console.log(this.http.url);
                            //var funcs = ['test1', 'test2'];
                            //for(var i=0;i<funcs.length;i++) {
                            //    call_user_func(funcs[i], ["ddd", "cc"]);
                            //}
                            //
                            //let test1=function(a, b) {
                            //    console.log(a + b + 'is a good gay');
                            //}
                            //let test2=function(a) {
                            //    console.log(a+" is sb");
                            //}

                        case 40:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function funAction() {
            return _ref3.apply(this, arguments);
        }

        return funAction;
    }();

    _class.prototype.momentAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var set;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return this.model("setup").getset();

                        case 2:
                            set = _context4.sent;

                            //think.log(this.setup.WEIXIN_TYPE['2'],"配置输出");
                            this.end(set);

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function momentAction() {
            return _ref5.apply(this, arguments);
        }

        return momentAction;
    }();

    _class.prototype.adaAction = function adaAction() {
        var cas = think.adapter("school", "calss"); //加载名为 dot 的 Template Adapter
        var cass = new cas(); //实例化 Adapter
        var name = cass.getname(1);
        console.log(name);
    };

    _class.prototype.typeAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var tabel;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return this.model("type").checkTableExist(1);

                        case 2:
                            tabel = _context5.sent;

                            console.log(tabel);

                        case 4:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function typeAction() {
            return _ref6.apply(this, arguments);
        }

        return typeAction;
    }();

    _class.prototype.sssAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return this.model().table("user", true).select();

                        case 2:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function sssAction() {
            return _ref7.apply(this, arguments);
        }

        return sssAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=test.js.map