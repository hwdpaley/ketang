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

var _class = function (_think$model$base) {
    (0, _inherits3.default)(_class, _think$model$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
    }

    /**
     * 检查当前表是否存在
     * @param Number typeid 分类信息id
     * @return Number 是否存在
     * @author
     */
    _class.prototype.checkTableExist = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(typeid) {
            var res;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            this.table_name = think.parseConfig(true, think.config("db")).prefix + 'type_optionvalue' + typeid;
                            //console.log(this.table_name);
                            _context.next = 3;
                            return think.model('mysql', think.config("db")).query('SHOW TABLES LIKE \'' + this.table_name + '\'');

                        case 3:
                            res = _context.sent;
                            return _context.abrupt('return', res.length);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function checkTableExist(_x) {
            return _ref.apply(this, arguments);
        }

        return checkTableExist;
    }();

    /**
     * 新建表字段
     * @param Array field 需要新建的字段属性
     * @return Boolean  true 成功 ， false 失败
     * @author
     */


    _class.prototype.addField = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_filed) {
            var sql, table_exist, _iterator, _isArray, _i, _ref3, v, res, fieldinfo, result, _res;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            sql = void 0;
                            //检查表是否存在

                            _context2.next = 3;
                            return this.checkTableExist(_filed.id);

                        case 3:
                            table_exist = _context2.sent;
                            _iterator = _filed.datarr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 5:
                            if (!_isArray) {
                                _context2.next = 11;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context2.next = 8;
                                break;
                            }

                            return _context2.abrupt('break', 38);

                        case 8:
                            _ref3 = _iterator[_i++];
                            _context2.next = 15;
                            break;

                        case 11:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context2.next = 14;
                                break;
                            }

                            return _context2.abrupt('break', 38);

                        case 14:
                            _ref3 = _i.value;

                        case 15:
                            v = _ref3;

                            if (table_exist) {
                                _context2.next = 21;
                                break;
                            }

                            sql = 'CREATE TABLE IF NOT EXISTS `' + this.table_name + '`(\n                 `tid` int(10) UNSIGNED NOT NULL DEFAULT \'0\',\n                 `fid` int(10) UNSIGNED NOT NULL DEFAULT \'0\',\n                 `dateline` int(10) UNSIGNED NOT NULL DEFAULT \'0\',\n                 `expiration` int(10) UNSIGNED NOT NULL DEFAULT \'0\',\n                 KEY `fid` (`fid`),\n                 KEY `dateline` (`dateline`)\n                 )\n                 ENGINE=InnoDB DEFAULT CHARSET=utf8';
                            //console.log(sql);
                            _context2.next = 20;
                            return think.model('mysql', think.config("db")).execute(sql);

                        case 20:
                            res = _context2.sent;

                        case 21:
                            _context2.next = 23;
                            return this.getfieldsinfo(v.optionid);

                        case 23:
                            fieldinfo = _context2.sent;
                            _context2.next = 26;
                            return think.model('mysql', think.config("db")).query('show columns from `' + this.table_name + '` like \'' + fieldinfo.name + '\'');

                        case 26:
                            result = _context2.sent;

                            if (!think.isEmpty(result)) {
                                _context2.next = 35;
                                break;
                            }

                            //添加字段
                            sql = 'ALTER TABLE `' + this.table_name + '` ' + fieldinfo.sql + ';';
                            _context2.next = 31;
                            return think.model('mysql', think.config("db")).execute(sql);

                        case 31:
                            _res = _context2.sent;

                            console.log(sql);
                            _context2.next = 35;
                            break;

                        case 35:

                            console.log(result);

                        case 36:
                            _context2.next = 5;
                            break;

                        case 38:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function addField(_x2) {
            return _ref2.apply(this, arguments);
        }

        return addField;
    }();

    _class.prototype.getfieldsinfo = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(id) {
            var filed, data;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return this.model("typeoption").find(id);

                        case 2:
                            filed = _context3.sent;

                            console.log(filed);
                            data = {};
                            _context3.t0 = filed.type;
                            _context3.next = _context3.t0 === "number" ? 8 : _context3.t0 === "range" ? 8 : _context3.t0 === "text" ? 10 : _context3.t0 === "textarea" ? 10 : _context3.t0 === "checkbox" ? 10 : _context3.t0 === "calendar" ? 10 : _context3.t0 === "email" ? 10 : _context3.t0 === "image" ? 10 : _context3.t0 === "url" ? 10 : _context3.t0 === "radio" ? 12 : _context3.t0 === "select" ? 14 : 16;
                            break;

                        case 8:
                            data.sql = 'ADD COLUMN `' + filed.identifier + '` int(10) UNSIGNED NOT NULL DEFAULT \'0\'';

                            return _context3.abrupt('break', 16);

                        case 10:

                            data.sql = 'ADD COLUMN `' + filed.identifier + '` mediumtext ';
                            return _context3.abrupt('break', 16);

                        case 12:
                            data.sql = 'ADD COLUMN `' + filed.identifier + '` smallint(6) UNSIGNED NOT NULL DEFAULT \'0\',ADD KEY `' + filed.identifier + '` (`' + filed.identifier + '`)';

                            return _context3.abrupt('break', 16);

                        case 14:
                            data.sql = 'ADD COLUMN `' + filed.identifier + '` varchar(50) NOT NULL DEFAULT \'0\',ADD KEY `' + filed.identifier + '` (`' + filed.identifier + '`)';

                            return _context3.abrupt('break', 16);

                        case 16:
                            data.name = filed.identifier;
                            return _context3.abrupt('return', data);

                        case 18:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function getfieldsinfo(_x3) {
            return _ref4.apply(this, arguments);
        }

        return getfieldsinfo;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=type.js.map