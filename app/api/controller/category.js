// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';
/**
 * rest controller
 * @type {Class}
 */

exports.__esModule = true;

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

var _class = function (_think$controller$res) {
    (0, _inherits3.default)(_class, _think$controller$res);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$controller$res.apply(this, arguments));
    }

    /**
     * init
     * @param  {Object} http []
     * @return {}      []
     */
    _class.prototype.init = function init(http) {
        _think$controller$res.prototype.init.call(this, http);
    };
    /**
     * before magic method
     * @return {Promise} []
     */


    _class.prototype.__before = function __before() {};

    _class.prototype.getAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var data, _modelInstance$where, pk;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            // console.log(this.get("aa"));
                            // let user = await this.model("member").select();
                            // console.log(user);
                            data = void 0;

                            if (!this.id) {
                                _context.next = 9;
                                break;
                            }

                            _context.next = 4;
                            return this.modelInstance.getPk();

                        case 4:
                            pk = _context.sent;
                            _context.next = 7;
                            return this.modelInstance.where((_modelInstance$where = {}, _modelInstance$where[pk] = this.id, _modelInstance$where)).find();

                        case 7:
                            data = _context.sent;
                            return _context.abrupt('return', this.success(data));

                        case 9:
                            _context.next = 11;
                            return this.modelInstance.get_all_category();

                        case 11:
                            data = _context.sent;
                            return _context.abrupt('return', this.success(arr_to_tree(data, 0)));

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getAction() {
            return _ref.apply(this, arguments);
        }

        return getAction;
    }();

    _class.prototype.postAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var pk, data, insertId;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            return _context2.abrupt('return', this.fail(think.locale('ACTION_INVALID', this.http.action, this.http.url)));

                        case 3:
                            pk = _context2.sent;
                            data = this.get();

                            delete data[pk];

                            if (!think.isEmpty(data)) {
                                _context2.next = 8;
                                break;
                            }

                            return _context2.abrupt('return', this.fail('data is empty'));

                        case 8:
                            _context2.next = 10;
                            return this.modelInstance.add(data);

                        case 10:
                            insertId = _context2.sent;
                            return _context2.abrupt('return', this.success({ id: insertId }));

                        case 12:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function postAction() {
            return _ref2.apply(this, arguments);
        }

        return postAction;
    }();

    _class.prototype.deleteAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var _modelInstance$where2;

            var pk, rows;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.abrupt('return', this.fail(think.locale('ACTION_INVALID', this.http.action, this.http.url)));

                        case 3:
                            _context3.next = 5;
                            return this.modelInstance.getPk();

                        case 5:
                            pk = _context3.sent;
                            _context3.next = 8;
                            return this.modelInstance.where((_modelInstance$where2 = {}, _modelInstance$where2[pk] = this.id, _modelInstance$where2)).delete();

                        case 8:
                            rows = _context3.sent;
                            return _context3.abrupt('return', this.success({ affectedRows: rows }));

                        case 10:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function deleteAction() {
            return _ref3.apply(this, arguments);
        }

        return deleteAction;
    }();

    _class.prototype.putAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var _modelInstance$where3;

            var pk, data, rows;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            return _context4.abrupt('return', this.fail(think.locale('ACTION_INVALID', this.http.action, this.http.url)));

                        case 3:
                            _context4.next = 5;
                            return this.modelInstance.getPk();

                        case 5:
                            pk = _context4.sent;
                            data = this.get();

                            delete data[pk];

                            if (!think.isEmpty(data)) {
                                _context4.next = 10;
                                break;
                            }

                            return _context4.abrupt('return', this.fail('data is empty'));

                        case 10:
                            _context4.next = 12;
                            return this.modelInstance.where((_modelInstance$where3 = {}, _modelInstance$where3[pk] = this.id, _modelInstance$where3)).update(data);

                        case 12:
                            rows = _context4.sent;
                            return _context4.abrupt('return', this.success({ affectedRows: rows }));

                        case 14:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function putAction() {
            return _ref4.apply(this, arguments);
        }

        return putAction;
    }();

    _class.prototype.__call = function __call() {
        return this.fail(think.locale('ACTION_INVALID', this.http.action, this.http.url));
    };

    return _class;
}(think.controller.rest);

exports.default = _class;
//# sourceMappingURL=category.js.map