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

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');

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
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var method, map, o, order, data, _iterator, _isArray, _i, _ref2, v, arr, _iterator2, _isArray2, _i2, _ref3, i;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //auto render template file index_index.html


                            this.meta_title = "首页"; //标题1
                            this.keywords = this.setup.WEB_SITE_KEYWORD ? this.setup.WEB_SITE_KEYWORD : ''; //seo关键词
                            this.description = this.setup.WEB_SITE_DESCRIPTION ? this.setup.WEB_SITE_DESCRIPTION : ""; //seo描述

                            this.active = ['/', '/index', '/index.html'];
                            if (this.is_login) {
                                this.assign('userid', this.is_login);
                            } else {
                                this.assign('userid', 1);
                            }
                            //debugger;
                            //判断浏览客户端
                            this.assign("qiniu_dm", 'https://' + this.setup.QINIU_DOMAIN_NAME);

                            if (!checkMobile(this.userAgent())) {
                                _context.next = 84;
                                break;
                            }

                            //跨域
                            method = this.http.method.toLowerCase();

                            if (!(method === "options")) {
                                _context.next = 12;
                                break;
                            }

                            this.setCorsHeader();
                            this.end();
                            return _context.abrupt('return');

                        case 12:
                            this.setCorsHeader();
                            map = {
                                'pid': 0,
                                'status': 1
                            };
                            //排序

                            o = {};
                            order = this.get('order') || 100;
                            //console.log(order);

                            order = Number(order);
                            _context.t0 = order;
                            _context.next = _context.t0 === 1 ? 20 : _context.t0 === 2 ? 22 : _context.t0 === 3 ? 24 : 26;
                            break;

                        case 20:
                            o.update_time = 'ASC';
                            return _context.abrupt('break', 27);

                        case 22:
                            o.view = 'DESC';
                            return _context.abrupt('break', 27);

                        case 24:
                            o.view = 'ASC';
                            return _context.abrupt('break', 27);

                        case 26:
                            o.update_time = 'DESC';

                        case 27:

                            this.assign('order', order);
                            console.log("map-------" + (0, _stringify2.default)(map));
                            _context.next = 31;
                            return this.model('document').where(map).page(this.param('page'), 10).order(o).countSelect();

                        case 31:
                            data = _context.sent;

                            this.assign("list", data);
                            //console.log("sy list" + JSON.stringify(data) );

                            if (!this.isAjax("get")) {
                                _context.next = 80;
                                break;
                            }

                            _iterator = data.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 35:
                            if (!_isArray) {
                                _context.next = 41;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 38;
                                break;
                            }

                            return _context.abrupt('break', 79);

                        case 38:
                            _ref2 = _iterator[_i++];
                            _context.next = 45;
                            break;

                        case 41:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 44;
                                break;
                            }

                            return _context.abrupt('break', 79);

                        case 44:
                            _ref2 = _i.value;

                        case 45:
                            v = _ref2;

                            if (think.isEmpty(v.pics)) {
                                _context.next = 68;
                                break;
                            }

                            arr = [];
                            _iterator2 = v.pics.split(","), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 49:
                            if (!_isArray2) {
                                _context.next = 55;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 52;
                                break;
                            }

                            return _context.abrupt('break', 67);

                        case 52:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 59;
                            break;

                        case 55:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 58;
                                break;
                            }

                            return _context.abrupt('break', 67);

                        case 58:
                            _ref3 = _i2.value;

                        case 59:
                            i = _ref3;
                            _context.t1 = arr;
                            _context.next = 63;
                            return get_pic(i, 1, 300, 169);

                        case 63:
                            _context.t2 = _context.sent;

                            _context.t1.push.call(_context.t1, _context.t2);

                        case 65:
                            _context.next = 49;
                            break;

                        case 67:
                            v.pics = arr;

                        case 68:
                            if (think.isEmpty(v.cover_id)) {
                                _context.next = 72;
                                break;
                            }

                            _context.next = 71;
                            return get_pic(v.cover_id, 1, 300, 169);

                        case 71:
                            v.cover_id = _context.sent;

                        case 72:
                            _context.next = 74;
                            return get_realname(v.uid);

                        case 74:
                            v.uid = _context.sent;

                            v.url = get_url(v.name, v.id);
                            v.update_time = (0, _moment2.default)(v.update_time).fromNow();
                            //console.log("v list" + JSON.stringify(v) );

                        case 77:
                            _context.next = 35;
                            break;

                        case 79:
                            return _context.abrupt('return', this.json(data));

                        case 80:
                            console.log("index-index------" + ('mobile/' + this.http.controller + '/' + this.http.action));
                            return _context.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 84:
                            return _context.abrupt('return', this.display());

                        case 85:
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
     * 解析路由，判断是频道页面还是列表页面
     */


    _class.prototype.routeAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var cate, type;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            console.log('routeAction--------222');

                            if (!('/.well-known/pki-validation/fileauth.txt' == this.http.url)) {
                                _context2.next = 5;
                                break;
                            }

                            console.log('routeAction--------well-known---' + this.http.url);
                            _context2.next = 5;
                            return this.action("topic/weike", "pkivalidation");

                        case 5:
                            console.log("rout url----------," + this.http.url + "," + this.get('category').split("-")[0]);
                            _context2.next = 8;
                            return this.category(this.get('category').split("-")[0]);

                        case 8:
                            cate = _context2.sent;

                            console.log("route cate_model-------" + cate.mold);
                            type = cate.allow_publish;

                            if (cate.mold == 2) {
                                type = 'sp';
                            }
                            console.log("type-------,cate.mold-----" + type + "," + cate.mold);
                            _context2.t0 = type;
                            _context2.next = _context2.t0 === 0 ? 16 : _context2.t0 === 1 ? 24 : _context2.t0 === 2 ? 24 : _context2.t0 === 'sp' ? 32 : 35;
                            break;

                        case 16:
                            if (!(cate.mold == 1)) {
                                _context2.next = 21;
                                break;
                            }

                            _context2.next = 19;
                            return this.action("mod/index", "index");

                        case 19:
                            _context2.next = 23;
                            break;

                        case 21:
                            _context2.next = 23;
                            return this.action("cover", "index");

                        case 23:
                            return _context2.abrupt('break', 36);

                        case 24:
                            if (!(cate.mold == 1)) {
                                _context2.next = 29;
                                break;
                            }

                            _context2.next = 27;
                            return this.action("mod/index", "list");

                        case 27:
                            _context2.next = 31;
                            break;

                        case 29:
                            _context2.next = 31;
                            return this.action("list", "index");

                        case 31:
                            return _context2.abrupt('break', 36);

                        case 32:
                            _context2.next = 34;
                            return this.action("sp", "index");

                        case 34:
                            return _context2.abrupt('break', 36);

                        case 35:
                            this.end(111);

                        case 36:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function routeAction() {
            return _ref4.apply(this, arguments);
        }

        return routeAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=index.js.map