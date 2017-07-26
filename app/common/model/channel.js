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
     * 获取参数的所有父级导航
     * @param int id 导航id
     * @return array 参数导航和导航的信息集合
     * @author
     */
    _class.prototype.get_parent_channel = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id) {
            var breadcrumb, nav;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            breadcrumb = [];

                        case 1:
                            if (!(id != 0)) {
                                _context.next = 9;
                                break;
                            }

                            _context.next = 4;
                            return this.where({ 'id': id, 'status': 1 }).find();

                        case 4:
                            nav = _context.sent;

                            breadcrumb.push(nav);
                            id = nav.pid;

                            _context.next = 1;
                            break;

                        case 9:
                            return _context.abrupt('return', breadcrumb.reverse());

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function get_parent_channel(_x) {
            return _ref.apply(this, arguments);
        }

        return get_parent_channel;
    }();
    /**
     * 缓存频道信息
     * @returns {Promise}
     */


    _class.prototype.get_channel_cache = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var _this2 = this;

            var channel;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return think.cache('get_channel_cache', function () {
                                return _this2.get_channel(0);
                            }, { timeout: 365 * 24 * 3600 });

                        case 2:
                            channel = _context2.sent;
                            return _context2.abrupt('return', channel);

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function get_channel_cache() {
            return _ref2.apply(this, arguments);
        }

        return get_channel_cache;
    }();
    /**
     * 获取分类树，指定分类则返回指定分类及其子分类，不指定则返回所有分类树
     *
     */


    _class.prototype.get_channel = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(id) {
            var map, list, _iterator, _isArray, _i, _ref4, v, name, subcate, info;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            id = id || 0;
                            /*获取当前分类信息*/

                            //if(id){
                            //    console.log(id);
                            //    let ids = id;
                            //    let info = await this.info(ids);
                            //    console.log(info);
                            //    let id   = info.id;
                            //}

                            //获取所有分类

                            map = { "status": { ">": -1 } };
                            _context3.next = 4;
                            return this.where(map).order('sort ASC').select();

                        case 4:
                            list = _context3.sent;
                            _iterator = list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 6:
                            if (!_isArray) {
                                _context3.next = 12;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context3.next = 9;
                                break;
                            }

                            return _context3.abrupt('break', 33);

                        case 9:
                            _ref4 = _iterator[_i++];
                            _context3.next = 16;
                            break;

                        case 12:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context3.next = 15;
                                break;
                            }

                            return _context3.abrupt('break', 33);

                        case 15:
                            _ref4 = _i.value;

                        case 16:
                            v = _ref4;
                            name = 0;

                            if (!(v.url.indexOf("http://") == -1 || v.url.indexOf("https://") == -1)) {
                                _context3.next = 25;
                                break;
                            }

                            if (!(!think.isEmpty(v.url) && think.isString(v.url))) {
                                _context3.next = 25;
                                break;
                            }

                            name = v.url.split("/")[1];

                            if (!(!think.isNumberString(name) && !think.isEmpty(name))) {
                                _context3.next = 25;
                                break;
                            }

                            _context3.next = 24;
                            return think.model('category', think.config("db")).where({ name: name }).getField("id", true);

                        case 24:
                            name = _context3.sent;

                        case 25:
                            if (!(name != 0 && !think.isEmpty(name))) {
                                _context3.next = 31;
                                break;
                            }

                            _context3.next = 28;
                            return think.model('category', think.config("db")).get_sub_category(name);

                        case 28:
                            subcate = _context3.sent;

                            subcate.push(name);
                            v.on = subcate;

                        case 31:
                            _context3.next = 6;
                            break;

                        case 33:
                            list = get_children(list, id);
                            info = list;
                            return _context3.abrupt('return', info);

                        case 36:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function get_channel(_x2) {
            return _ref3.apply(this, arguments);
        }

        return get_channel;
    }();

    /**
     * 更新或者编辑信息
     * @param data
     * @returns {*}
     */


    _class.prototype.updates = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(data) {
            var res, obj;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            if (!think.isEmpty(data)) {
                                _context4.next = 2;
                                break;
                            }

                            return _context4.abrupt('return', false);

                        case 2:
                            res = void 0;
                            obj = void 0;
                            /* 添加或更新数据 */

                            if (think.isEmpty(data.id)) {
                                data.create_time = new Date().getTime();
                                res = this.add(data);
                                if (res) {
                                    obj = { id: res, err: 1 }; //添加成功
                                } else {
                                    obj = { err: 2 }; //新增失败
                                }
                            } else {
                                data.update_time = new Date().getTime();
                                res = this.update(data);
                                if (res) {
                                    obj = { id: res, err: 3 }; //更新成功
                                } else {
                                    obj = { err: 4 }; //更新失败
                                }
                            }
                            think.cache("get_channel_cache", null); //更新频道缓存信息
                            return _context4.abrupt('return', obj);

                        case 7:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function updates(_x3) {
            return _ref5.apply(this, arguments);
        }

        return updates;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=channel.js.map