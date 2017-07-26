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

var _thinkPagination = require('think-pagination');

var _thinkPagination2 = _interopRequireDefault(_thinkPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.active = "/topic";
    };
    /**
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var q, map, list, html;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            q = this.get('key');
                            map = {};

                            if (think.isEmpty(q)) {
                                _context.next = 10;
                                break;
                            }

                            _context.t0 = q;
                            _context.next = _context.t0 === 'week' ? 6 : _context.t0 === 'month' ? 8 : 10;
                            break;

                        case 6:
                            //todo
                            map.discuss_count_update = [">", new Date().valueOf() - 7 * 3600 * 3600 * 1000];
                            return _context.abrupt('break', 10);

                        case 8:
                            //todo
                            map.discuss_count_update = [">", new Date().valueOf() - 30 * 3600 * 3600 * 1000];
                            return _context.abrupt('break', 10);

                        case 10:
                            _context.next = 12;
                            return this.model('keyword').page(this.get('page'), 15).where(map).order("videonum DESC,focus_count DESC").countSelect();

                        case 12:
                            list = _context.sent;
                            html = (0, _thinkPagination2.default)(list, this.http, {
                                desc: false, //show description
                                pageNum: 2,
                                url: '', //page url, when not set, it will auto generated
                                class: 'nomargin', //pagenation extra class
                                text: {
                                    next: '下一页',
                                    prev: '上一页',
                                    total: 'count: ${count} , pages: ${pages}'
                                }
                            });

                            this.assign('pagination', html);
                            //console.log(list);
                            this.assign("list", list);
                            //seo
                            this.meta_title = "话题"; //标题
                            this.keywords = "话题"; //seo关键词
                            this.description = "话题"; //seo描述
                            //auto render template file index_index.html
                            return _context.abrupt('return', this.display());

                        case 20:
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

    _class.prototype.listAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var q, models, mod, topic, list, _iterator, _isArray, _i, _ref3, v, html, focus;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            q = this.get("key").split(",");

                            console.log(q);

                            //获取所有的模型
                            _context2.next = 4;
                            return this.model("model").get_model(null, null, { key_show: 1 });

                        case 4:
                            models = _context2.sent;

                            this.assign("models", models);
                            //获取当前模型
                            _context2.next = 8;
                            return this.model("model").get_model(q[1]);

                        case 8:
                            mod = _context2.sent;

                            console.log(mod);
                            this.assign("mod", mod);

                            //获取当前话题
                            _context2.next = 13;
                            return this.model("keyword").where({ keyname: q[0] }).find();

                        case 13:
                            topic = _context2.sent;

                            this.assign("topic", topic);
                            console.log(topic);

                            list = [];

                            if (think.isEmpty(q[1])) {
                                _context2.next = 45;
                                break;
                            }

                            if (!(mod.extend == 0)) {
                                _context2.next = 40;
                                break;
                            }

                            _context2.next = 21;
                            return this.model('keyword_data').where({ tagid: topic.id, mod_id: q[1] }).page(this.get('page'), 10).join({
                                table: mod.name,
                                join: "left", //join 方式，有 left, right, inner 3 种方式
                                as: "c", // 表别名
                                on: ["docid", "id"] //ON 条件
                            }).order("c.id DESC").countSelect();

                        case 21:
                            list = _context2.sent;

                            if (!(mod.id == 8)) {
                                _context2.next = 38;
                                break;
                            }

                            _iterator = list.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 24:
                            if (!_isArray) {
                                _context2.next = 30;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context2.next = 27;
                                break;
                            }

                            return _context2.abrupt('break', 38);

                        case 27:
                            _ref3 = _iterator[_i++];
                            _context2.next = 34;
                            break;

                        case 30:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context2.next = 33;
                                break;
                            }

                            return _context2.abrupt('break', 38);

                        case 33:
                            _ref3 = _i.value;

                        case 34:
                            v = _ref3;

                            v.imgs = img_text_view(v.detail, 200, 120);

                        case 36:
                            _context2.next = 24;
                            break;

                        case 38:
                            _context2.next = 43;
                            break;

                        case 40:
                            _context2.next = 42;
                            return this.model('keyword_data').where({ tagid: topic.id, mod_id: q[1] }).page(this.param('page'), 10).join({
                                table: "document",
                                join: "left", //join 方式，有 left, right, inner 3 种方式
                                as: "c", // 表别名
                                on: ["docid", "id"] //ON 条件
                            }).order("c.id DESC").countSelect();

                        case 42:
                            list = _context2.sent;

                        case 43:
                            _context2.next = 48;
                            break;

                        case 45:
                            _context2.next = 47;
                            return this.model('keyword_data').where({ tagid: topic.id, mod_type: 0 }).page(this.param('page'), 10).join({
                                table: "document",
                                join: "left", //join 方式，有 left, right, inner 3 种方式
                                as: "c", // 表别名
                                on: ["docid", "id"] //ON 条件
                            }).order("c.id DESC").countSelect();

                        case 47:
                            list = _context2.sent;

                        case 48:
                            html = (0, _thinkPagination2.default)(list, this.http, {
                                desc: false, //show description
                                pageNum: 2,
                                url: '', //page url, when not set, it will auto generated
                                class: 'nomargin', //pagenation extra class
                                text: {
                                    next: '下一页',
                                    prev: '上一页',
                                    total: 'count: ${count} , pages: ${pages}'
                                }
                            });

                            this.assign('pagination', html);
                            console.log(list);
                            this.assign("list", list);
                            //该主题是否被关注。

                            if (!this.is_login) {
                                _context2.next = 57;
                                break;
                            }

                            _context2.next = 55;
                            return this.model("keyword_focus").where({ key_id: topic.id, uid: this.user.uid }).find();

                        case 55:
                            focus = _context2.sent;

                            this.assign("focus", focus);

                        case 57:
                            //seo
                            this.meta_title = topic.keyname; //标题
                            this.keywords = topic.keyname; //seo关键词
                            this.description = topic.description; //seo描述

                            this.assign("key", q[0]);
                            return _context2.abrupt('return', this.display());

                        case 62:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function listAction() {
            return _ref2.apply(this, arguments);
        }

        return listAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=keyword.js.map