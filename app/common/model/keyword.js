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

    //添加话题
    /**
     * 添加话题
     * @param keyname "话题1,话题2.话题3"
     * @param id  "主题id"
     * @param uid "用户id"
     * @param mod_id "模型id"
     * @param mod_type "模型类型 0独立模型，1系统模型"
     */
    _class.prototype.addkey = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(keyname, id, uid, mod_id) {
            var mod_type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

            var keywrods, _iterator, _isArray, _i, _ref2, v, add;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (think.isEmpty(keyname)) {
                                _context.next = 27;
                                break;
                            }

                            keywrods = void 0;

                            if (!think.isArray(keyname)) {
                                keywrods = keyname.split(",");
                            } else {
                                keywrods = keyname;
                            }
                            _iterator = keywrods, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 4:
                            if (!_isArray) {
                                _context.next = 10;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 7;
                                break;
                            }

                            return _context.abrupt('break', 27);

                        case 7:
                            _ref2 = _iterator[_i++];
                            _context.next = 14;
                            break;

                        case 10:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 13;
                                break;
                            }

                            return _context.abrupt('break', 27);

                        case 13:
                            _ref2 = _i.value;

                        case 14:
                            v = _ref2;
                            _context.next = 17;
                            return this.thenAdd({ keyname: v, discuss_count_update: new Date().getTime(), videonum: 1 }, { keyname: v });

                        case 17:
                            add = _context.sent;

                            if (!(add.type == 'exist')) {
                                _context.next = 23;
                                break;
                            }

                            _context.next = 21;
                            return this.where({ id: add.id }).update({ discuss_count_update: new Date().getTime() });

                        case 21:
                            _context.next = 23;
                            return this.where({ id: add.id }).increment("videonum", 1);

                        case 23:
                            _context.next = 25;
                            return this.model("keyword_data").add({ tagid: add.id, docid: id, add_time: new Date().getTime(), uid: uid, mod_type: mod_type, mod_id: mod_id });

                        case 25:
                            _context.next = 4;
                            break;

                        case 27:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function addkey(_x, _x2, _x3, _x4) {
            return _ref.apply(this, arguments);
        }

        return addkey;
    }();

    /**
     * 删除话题
     */


    _class.prototype.delkey = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(docid, mod_id) {
            var tagid;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.model("keyword_data").where({ docid: docid, mod_id: mod_id }).getField("tagid", true);

                        case 2:
                            tagid = _context2.sent;

                            if (!tagid) {
                                _context2.next = 8;
                                break;
                            }

                            _context2.next = 6;
                            return this.model("keyword_data").where({ docid: docid, mod_id: mod_id }).delete();

                        case 6:
                            _context2.next = 8;
                            return this.where({ id: tagid }).decrement("videonum");

                        case 8:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function delkey(_x6, _x7) {
            return _ref3.apply(this, arguments);
        }

        return delkey;
    }();
    /**
     * 添加话题
     * @param keyname "话题1,话题2.话题3"
     * @param id  "主题id"
     * @param uid "用户id"
     * @param mod_id "模型id"
     * @param mod_type "模型类型 0独立模型，1系统模型"
     */


    _class.prototype.updatekey = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(keyname, id, uid, mod_id) {
            var mod_type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

            var where, keyword, topicid, newkn, okn, nkn, _iterator2, _isArray2, _i2, _ref5, k, dkn, did;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            where = {};

                            where.docid = id;
                            where.mod_type = mod_type;
                            where.mod_id = mod_id;
                            keyword = void 0;
                            _context3.next = 7;
                            return this.model("keyword_data").where(where).getField("tagid");

                        case 7:
                            topicid = _context3.sent;

                            if (think.isEmpty(topicid)) {
                                _context3.next = 12;
                                break;
                            }

                            _context3.next = 11;
                            return this.where({ id: ["IN", topicid] }).getField("keyname");

                        case 11:
                            keyword = _context3.sent;

                        case 12:
                            newkn = keyname; //新关键词

                            if (!think.isEmpty(newkn)) {
                                newkn = newkn.split(",");
                            } else {
                                newkn = [];
                            }

                            //还存在的话题
                            okn = [];
                            //新的话题

                            nkn = [];
                            _iterator2 = newkn, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 17:
                            if (!_isArray2) {
                                _context3.next = 23;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context3.next = 20;
                                break;
                            }

                            return _context3.abrupt('break', 31);

                        case 20:
                            _ref5 = _iterator2[_i2++];
                            _context3.next = 27;
                            break;

                        case 23:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context3.next = 26;
                                break;
                            }

                            return _context3.abrupt('break', 31);

                        case 26:
                            _ref5 = _i2.value;

                        case 27:
                            k = _ref5;

                            if (think._.includes(keyword, k)) {
                                okn.push(k);
                            } else {
                                nkn.push(k);
                            }

                        case 29:
                            _context3.next = 17;
                            break;

                        case 31:
                            //要删除的话题
                            dkn = think._.xor(okn, keyword);
                            // console.log("更新--"+okn);
                            // console.log("添加--"+nkn);
                            // console.log("删除--"+dkn);

                            if (think.isEmpty(dkn)) {
                                _context3.next = 41;
                                break;
                            }

                            _context3.next = 35;
                            return this.where({ keyname: ["IN", dkn] }).getField("id");

                        case 35:
                            did = _context3.sent;

                            where.tagid = ["in", did];
                            _context3.next = 39;
                            return this.model("keyword_data").where(where).delete();

                        case 39:
                            _context3.next = 41;
                            return this.where({ keyname: ["IN", dkn] }).decrement("videonum", 1);

                        case 41:
                            _context3.next = 43;
                            return this.addkey(nkn, id, uid, mod_id, mod_type);

                        case 43:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function updatekey(_x8, _x9, _x10, _x11) {
            return _ref4.apply(this, arguments);
        }

        return updatekey;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=keyword.js.map