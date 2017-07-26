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

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$base) {
    (0, _inherits3.default)(_class, _think$model$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
    }

    /**
     * 获取模版
     * @param type
     * @returns {{template_lists: Array, template_detail: Array, template_index: Array}}
     */
    _class.prototype.gettemp = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            var temp, template_index, _iterator, _isArray, _i, _ref2, v, obj, template_lists, _iterator2, _isArray2, _i2, _ref3, _v, _obj, action, template_detail, _iterator3, _isArray3, _i3, _ref4, _v2, _obj2, _action, sp, _iterator4, _isArray4, _i4, _ref5, _v3;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.where({ type: type }).select();

                        case 2:
                            temp = _context.sent;

                            //封面模版
                            template_index = [];
                            _iterator = temp, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 5:
                            if (!_isArray) {
                                _context.next = 11;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 8;
                                break;
                            }

                            return _context.abrupt('break', 20);

                        case 8:
                            _ref2 = _iterator[_i++];
                            _context.next = 15;
                            break;

                        case 11:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 14;
                                break;
                            }

                            return _context.abrupt('break', 20);

                        case 14:
                            _ref2 = _i.value;

                        case 15:
                            v = _ref2;
                            obj = {};
                            //let action = v.action.split("_")
                            //console.log(action[1]);

                            if (v.module == 'topic' && v.controller == 'cover') {
                                obj.name = v.name;
                                obj.action = v.action + think.config("view.file_ext");
                                template_index.push(obj);
                            }

                        case 18:
                            _context.next = 5;
                            break;

                        case 20:
                            //列表模版
                            template_lists = [];
                            _iterator2 = temp, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 22:
                            if (!_isArray2) {
                                _context.next = 28;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 25;
                                break;
                            }

                            return _context.abrupt('break', 38);

                        case 25:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 32;
                            break;

                        case 28:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 31;
                                break;
                            }

                            return _context.abrupt('break', 38);

                        case 31:
                            _ref3 = _i2.value;

                        case 32:
                            _v = _ref3;
                            _obj = {};
                            action = _v.action.split("_");
                            //console.log(action[1]);

                            if (_v.module == 'topic' && _v.controller == 'list') {
                                _obj.name = _v.name;
                                _obj.action = _v.action + think.config("view.file_ext");
                                template_lists.push(_obj);
                            }

                        case 36:
                            _context.next = 22;
                            break;

                        case 38:
                            //详情页模版
                            template_detail = [];
                            _iterator3 = temp, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 40:
                            if (!_isArray3) {
                                _context.next = 46;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context.next = 43;
                                break;
                            }

                            return _context.abrupt('break', 56);

                        case 43:
                            _ref4 = _iterator3[_i3++];
                            _context.next = 50;
                            break;

                        case 46:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context.next = 49;
                                break;
                            }

                            return _context.abrupt('break', 56);

                        case 49:
                            _ref4 = _i3.value;

                        case 50:
                            _v2 = _ref4;
                            _obj2 = {};
                            _action = _v2.action.split("_");

                            if (_v2.module == 'topic' && _v2.controller == 'detail') {
                                _obj2.name = _v2.name;
                                _obj2.action = _v2.action + think.config("view.file_ext");
                                template_detail.push(_obj2);
                            }

                        case 54:
                            _context.next = 40;
                            break;

                        case 56:
                            ;
                            //单页模版
                            _context.next = 59;
                            return this.where({ type: type, module: "topic", controller: "sp" }).field("name,action").select();

                        case 59:
                            sp = _context.sent;
                            _iterator4 = sp, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 61:
                            if (!_isArray4) {
                                _context.next = 67;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context.next = 64;
                                break;
                            }

                            return _context.abrupt('break', 75);

                        case 64:
                            _ref5 = _iterator4[_i4++];
                            _context.next = 71;
                            break;

                        case 67:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context.next = 70;
                                break;
                            }

                            return _context.abrupt('break', 75);

                        case 70:
                            _ref5 = _i4.value;

                        case 71:
                            _v3 = _ref5;

                            _v3.action = _v3.action + think.config("view.file_ext");

                        case 73:
                            _context.next = 61;
                            break;

                        case 75:
                            return _context.abrupt('return', {
                                template_lists: template_lists,
                                template_detail: template_detail,
                                template_index: template_index,
                                template_sp: sp
                            });

                        case 76:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function gettemp() {
            return _ref.apply(this, arguments);
        }

        return gettemp;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=temp.js.map