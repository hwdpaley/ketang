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

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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
     * 更新或者新增一个文档
     * @param data 手动传入的数据
     * @returns boolean fasle 失败 ， int  成功 返回完整的数据
     */
    _class.prototype.updates = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
            var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getTime();

            var id, sortarr, sortdata, k, arr, obj, status, _sortdata, _sortarr, _k, _arr, _obj, cou;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //console.log(data);
                            data = data || null;
                            //添加或者新增基础内容

                            if (!think.isEmpty(data.id)) {
                                _context.next = 42;
                                break;
                            }

                            //新增数据
                            if (think.isEmpty(data.create_time)) {
                                data.create_time = time;
                            } else {
                                data.create_time = data.create_time != 0 ? new Date(data.create_time).valueOf() : time;
                            }
                            data.update_time = new Date().getTime();
                            data.status = 1;
                            console.log(data);
                            //return false;
                            _context.next = 8;
                            return this.add(data);

                        case 8:
                            id = _context.sent;

                            if (id) {
                                _context.next = 14;
                                break;
                            }

                            this.error = '新增基础内容出错！';
                            return _context.abrupt('return', false);

                        case 14:
                            if (!(data.sort_id != 0 && !think.isEmpty(data.sort_id))) {
                                _context.next = 38;
                                break;
                            }

                            sortarr = [];
                            sortdata = {};
                            _context.t0 = _regenerator2.default.keys(data);

                        case 18:
                            if ((_context.t1 = _context.t0()).done) {
                                _context.next = 36;
                                break;
                            }

                            k = _context.t1.value;
                            arr = k.split("_");

                            if (!(arr[0] == "sortid" && !think.isEmpty(arr[1]))) {
                                _context.next = 34;
                                break;
                            }

                            obj = {};

                            obj.value = think.isArray(data[k]) ? (0, _stringify2.default)(data[k]) : data[k];
                            _context.next = 26;
                            return this.model("typeoption").where({ identifier: arr[1] }).getField("optionid", true);

                        case 26:
                            obj.optionid = _context.sent;

                            obj.sortid = data.sort_id;
                            obj.fid = data.category_id;
                            obj.tid = id;
                            sortarr.push(obj);
                            sortdata[arr[1]] = think.isArray(data[k]) ? (0, _stringify2.default)(data[k]) : data[k];
                            sortdata.tid = id;
                            sortdata.fid = data.category_id;

                        case 34:
                            _context.next = 18;
                            break;

                        case 36:
                            //console.log(sortarr);
                            //console.log(sortdata);
                            //return false;
                            //添加分类
                            this.model("typeoptionvar").addMany(sortarr);
                            this.model("type_optionvalue" + data.sort_id).add(sortdata);

                        case 38:
                            _context.next = 40;
                            return this.model("search").addsearch(data.model_id, id, data);

                        case 40:
                            _context.next = 86;
                            break;

                        case 42:
                            //更新内容
                            data.update_time = new Date().getTime();
                            if (!think.isEmpty(data.create_time)) {
                                data.create_time = data.create_time != 0 ? new Date(data.create_time).valueOf() : new Date().getTime();
                            }
                            // //更新关键词
                            // await this.model("keyword").updatekey(data.keyname,data.id,data.userid,data.model_id,0);
                            status = this.update(data);

                            if (status) {
                                _context.next = 50;
                                break;
                            }

                            this.error = '更新基础内容出错！';
                            return _context.abrupt('return', false);

                        case 50:
                            _context.next = 52;
                            return this.model("search").updatesearch(data.model_id, data);

                        case 52:
                            if (!(data.sort_id != 0 && !think.isEmpty(data.sort_id))) {
                                _context.next = 86;
                                break;
                            }

                            _sortdata = {};
                            _sortarr = [];
                            _context.t2 = _regenerator2.default.keys(data);

                        case 56:
                            if ((_context.t3 = _context.t2()).done) {
                                _context.next = 74;
                                break;
                            }

                            _k = _context.t3.value;
                            _arr = _k.split("_");

                            if (!(_arr[0] == "sortid" && !think.isEmpty(_arr[1]))) {
                                _context.next = 72;
                                break;
                            }

                            _obj = {};

                            _obj.value = think.isArray(data[_k]) ? (0, _stringify2.default)(data[_k]) : data[_k];
                            _context.next = 64;
                            return this.model("typeoption").where({ identifier: _arr[1] }).getField("optionid", true);

                        case 64:
                            _obj.optionid = _context.sent;

                            _obj.sortid = data.sort_id;
                            _obj.fid = data.category_id;
                            _obj.tid = data.id;
                            _sortarr.push(_obj);
                            _sortdata[_arr[1]] = think.isArray(data[_k]) ? (0, _stringify2.default)(data[_k]) : data[_k];
                            _sortdata.tid = data.id;
                            _sortdata.fid = data.category_id;

                        case 72:
                            _context.next = 56;
                            break;

                        case 74:
                            _context.next = 76;
                            return this.model("type_optionvalue" + data.sort_id).where({ tid: data.id }).count("tid");

                        case 76:
                            cou = _context.sent;

                            if (!(cou > 0)) {
                                _context.next = 82;
                                break;
                            }

                            _context.next = 80;
                            return this.model("type_optionvalue" + data.sort_id).where({ tid: data.id }).update(_sortdata);

                        case 80:
                            _context.next = 84;
                            break;

                        case 82:
                            _context.next = 84;
                            return this.model("type_optionvalue" + data.sort_id).add(_sortdata);

                        case 84:
                            this.model("typeoptionvar").where({ tid: data.id }).delete();
                            //添加分类
                            this.model("typeoptionvar").addMany(_sortarr);

                        case 86:
                            return _context.abrupt('return', { data: data, id: id });

                        case 87:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function updates(_x) {
            return _ref.apply(this, arguments);
        }

        return updates;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=author.js.map