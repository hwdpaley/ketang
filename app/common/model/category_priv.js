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

    //前台权限验证
    /**
     *缓存权限列表 all_priv
     * @param catid 要验证的栏目id
     * @param roleid 用户组
     * @param action 权限类型
     * @param is_admin 谁否前台
     * @returns {number} 返回0 或1 0:没权限，1有权限。
     */
    _class.prototype.priv = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(catid, roleid, action) {
            var _this2 = this;

            var is_admin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

            var list, res, isadd, _priv;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return think.cache("all_priv", function () {
                                return _this2.select();
                            }, { timeout: 365 * 24 * 3600 });

                        case 2:
                            list = _context.sent;

                            //console.log(list);
                            res = 0;
                            isadd = think._.filter(list, { catid: Number(catid), is_admin: Number(is_admin), action: action });


                            if (think.isEmpty(isadd) && type) {
                                res = 1;
                            } else {
                                _priv = think._.filter(isadd, { roleid: Number(roleid) });

                                res = _priv.length;
                            }
                            return _context.abrupt("return", res);

                        case 7:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function priv(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        }

        return priv;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=category_priv.js.map