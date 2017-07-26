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
     * 获取用户组并进行缓存
     * @returns {Promise}
     */
    _class.prototype.getgroup = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var _this2 = this;

            var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var list;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return think.cache("all_member_group", function () {
                                return _this2.select();
                            }, { timeout: 365 * 24 * 3600 });

                        case 2:
                            list = _context.sent;

                            if (!think.isEmpty(map)) {
                                _context.next = 7;
                                break;
                            }

                            return _context.abrupt("return", list);

                        case 7:
                            return _context.abrupt("return", think._.filter(list, map));

                        case 8:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getgroup() {
            return _ref.apply(this, arguments);
        }

        return getgroup;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=member_group.js.map