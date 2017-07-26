"use strict";

exports.__esModule = true;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _segment = require("segment");

var _segment2 = _interopRequireDefault(_segment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$base) {
    (0, _inherits3.default)(_class, _think$model$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
    }

    /**
     * 添加搜索
     * await this.model("search").addsearch(m_id,d_id,data);
     * @param m_id
     * @param d_id
     * @param data
     * @returns {Promise.<void>}
     */
    _class.prototype.addsearch = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(m_id, d_id, data) {
            var search_model, obj, dataarr, _iterator, _isArray, _i, _ref2, v, segment, segment_q;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.model("search_model").where({ mod: m_id }).find();

                        case 2:
                            search_model = _context.sent;

                            if (think.isEmpty(search_model)) {
                                _context.next = 30;
                                break;
                            }

                            obj = {};

                            obj.m_id = m_id;
                            obj.d_id = d_id;
                            obj.add_time = data[search_model.addtime] || new Date().getTime();
                            dataarr = [];
                            _iterator = search_model.data.split(","), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 10:
                            if (!_isArray) {
                                _context.next = 16;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 13;
                                break;
                            }

                            return _context.abrupt("break", 24);

                        case 13:
                            _ref2 = _iterator[_i++];
                            _context.next = 20;
                            break;

                        case 16:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 19;
                                break;
                            }

                            return _context.abrupt("break", 24);

                        case 19:
                            _ref2 = _i.value;

                        case 20:
                            v = _ref2;

                            dataarr.push(data[v]);

                        case 22:
                            _context.next = 10;
                            break;

                        case 24:
                            //obj.data = dataarr.join(" ");
                            segment = new _segment2.default();
                            // 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可

                            segment.useDefault();
                            // 开始分词
                            segment_q = segment.doSegment(dataarr.join(" "), {
                                simple: true,
                                stripPunctuation: true
                            });

                            obj.data = dataarr.join(" ") + " " + segment_q.join(" ");
                            _context.next = 30;
                            return this.add(obj);

                        case 30:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function addsearch(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        }

        return addsearch;
    }();

    /**
     * 更新搜索
     * await this.model("search").updatesearch(m_id,data);
     * @param m_id
     * @param data
     * @returns {Promise.<void>}
     */


    _class.prototype.updatesearch = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(m_id, data) {
            var search_model, obj, dataarr, _iterator2, _isArray2, _i2, _ref4, v, segment, segment_q;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.model("search_model").where({ mod: m_id }).find();

                        case 2:
                            search_model = _context2.sent;

                            if (think.isEmpty(search_model)) {
                                _context2.next = 29;
                                break;
                            }

                            obj = {};

                            obj.m_id = m_id;
                            obj.d_id = data[search_model.pk];
                            dataarr = [];
                            _iterator2 = search_model.data.split(","), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 9:
                            if (!_isArray2) {
                                _context2.next = 15;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context2.next = 12;
                                break;
                            }

                            return _context2.abrupt("break", 23);

                        case 12:
                            _ref4 = _iterator2[_i2++];
                            _context2.next = 19;
                            break;

                        case 15:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context2.next = 18;
                                break;
                            }

                            return _context2.abrupt("break", 23);

                        case 18:
                            _ref4 = _i2.value;

                        case 19:
                            v = _ref4;

                            dataarr.push(data[v]);

                        case 21:
                            _context2.next = 9;
                            break;

                        case 23:
                            //obj.data = dataarr.join(" ");
                            segment = new _segment2.default();
                            // 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可

                            segment.useDefault();
                            // 开始分词
                            segment_q = segment.doSegment(dataarr.join(" "), {
                                simple: true,
                                stripPunctuation: true
                            });

                            obj.data = dataarr.join(" ") + " " + segment_q.join(" ");
                            _context2.next = 29;
                            return this.where({ d_id: obj.d_id, m_id: m_id }).update(obj);

                        case 29:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function updatesearch(_x4, _x5) {
            return _ref3.apply(this, arguments);
        }

        return updatesearch;
    }();

    /**
     * 删除搜索
     * await this.model('search').delsearch(m_id,d_id)
     * @param d_id
     * @param m_id
     * @returns {Promise.<void>}
     */


    _class.prototype.delsearch = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(m_id, d_id) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (think.isEmpty(d_id)) {
                                _context3.next = 3;
                                break;
                            }

                            _context3.next = 3;
                            return this.where({ d_id: d_id, m_id: m_id }).delete();

                        case 3:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function delsearch(_x6, _x7) {
            return _ref5.apply(this, arguments);
        }

        return delsearch;
    }();

    return _class;
}(think.model.base); // +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------

/**
 * model
 */


exports.default = _class;
//# sourceMappingURL=search.js.map