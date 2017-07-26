// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------

'use strict';

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

var _class = function (_think$controller$bas) {
    (0, _inherits3.default)(_class, _think$controller$bas);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));
    }

    _class.prototype.init = function init(http) {
        _think$controller$bas.prototype.init.call(this, http);
    };

    _class.prototype.checkAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var map, c;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            map = this.get();
                            _context.next = 3;
                            return this.model("author").where(map).find();

                        case 3:
                            c = _context.sent;

                            if (!think.isEmpty(c)) {
                                _context.next = 8;
                                break;
                            }

                            return _context.abrupt("return", this.json(1));

                        case 8:
                            return _context.abrupt("return", this.json(0));

                        case 9:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function checkAction() {
            return _ref.apply(this, arguments);
        }

        return checkAction;
    }();

    return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=public.js.map