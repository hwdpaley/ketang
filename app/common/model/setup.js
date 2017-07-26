// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------

'use strict';
/**
 * model
 */

exports.__esModule = true;

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

var _class = function (_think$model$base) {
    (0, _inherits3.default)(_class, _think$model$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
    }

    /**
     * 缓存网站配置
     * @returns {*}
     */
    _class.prototype.getset = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var _this2 = this;

            var value;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return think.cache("setup", function () {
                                return _this2.lists();
                            }, { timeout: 365 * 24 * 3600 });

                        case 2:
                            value = _context.sent;
                            return _context.abrupt("return", value);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getset() {
            return _ref.apply(this, arguments);
        }

        return getset;
    }();

    /**
     * 获取网站配置
     * @returns {{}}
     */


    _class.prototype.lists = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var map, list, obj;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            map = {};

                            map.status = 1;
                            _context2.next = 4;
                            return this.where(map).order("sort ASC").field(["name", "value", "type"]).select();

                        case 4:
                            list = _context2.sent;
                            obj = {};
                            // console.log(list);

                            list.forEach(function (v) {
                                if (v.value.search(/\r\n/ig) > -1 && v.type != 2) {
                                    v.value = v.value.split("\r\n");
                                    var _obj = {};
                                    v.value.forEach(function (n) {
                                        n = n.split(":");
                                        _obj[n[0]] = n[1];
                                        // console.log("获取网站配置"+n[1]);
                                    });

                                    v.value = _obj;
                                }
                                obj[v.name] = v.value;
                            });
                            // console.log("获取网站配置"+obj);
                            return _context2.abrupt("return", obj);

                        case 8:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function lists() {
            return _ref2.apply(this, arguments);
        }

        return lists;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=setup.js.map