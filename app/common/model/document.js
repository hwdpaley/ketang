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

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

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

    _class.prototype.detail = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id) {
            var map, info, table, details;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //获取基础数据
                            map = void 0;

                            if (think.isNumberString(id)) {
                                map = { id: id };
                            } else {
                                map = { name: id };
                            }
                            //console.log(map);
                            _context.next = 4;
                            return this.where(map).find();

                        case 4:
                            info = _context.sent;

                            if (!think.isEmpty(info)) {
                                _context.next = 9;
                                break;
                            }

                            return _context.abrupt("return", { errno: 702, errmsg: "数据不存在" });

                        case 9:
                            if (think.isObject(info) || 1 != info.status) {
                                _context.next = 11;
                                break;
                            }

                            return _context.abrupt("return", { errno: 702, errmsg: "文档被禁用或已删除" });

                        case 11:
                            _context.next = 13;
                            return this.model("model").get_table_name(info.model_id);

                        case 13:
                            table = _context.sent;
                            _context.next = 16;
                            return this.model(table).find(info.id);

                        case 16:
                            details = _context.sent;

                            info = think.extend({}, info, details);
                            return _context.abrupt("return", info);

                        case 19:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function detail(_x) {
            return _ref.apply(this, arguments);
        }

        return detail;
    }();

    /**
     * 获取详情页数据
     * @param id
     * @returns {*}
     */


    _class.prototype.details = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(id) {
            var info, table, detail;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.field(true).find(id);

                        case 2:
                            info = _context2.sent;

                            if (think.isObject(info) || 1 !== info.status) {
                                _context2.next = 6;
                                break;
                            }

                            this.fail('文档被禁用或已删除！');
                            return _context2.abrupt("return", false);

                        case 6:
                            _context2.next = 8;
                            return this.model("model").get_table_name(info.model_id);

                        case 8:
                            table = _context2.sent;
                            _context2.next = 11;
                            return this.model(table).find(id);

                        case 11:
                            detail = _context2.sent;

                            info = think.extend({}, info, detail);
                            return _context2.abrupt("return", info);

                        case 14:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function details(_x2) {
            return _ref2.apply(this, arguments);
        }

        return details;
    }();

    /**
     * 更新或者新增一个文档
     * @param data 手动传入的数据
     * @returns boolean fasle 失败 ， int  成功 返回完整的数据
     */


    _class.prototype.updates = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(data) {
            var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getTime();

            var v, vs, type, pid, res, id, sortarr, sortdata, k, arr, obj, status, _sortdata, _sortarr, _k, _arr, _obj, cou, modelinfo, model, ids, _status;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            data.position = data.position || 0;

                            for (v in data) {
                                vs = v.split("|||");


                                if (vs.length > 1) {
                                    console.log(data[v]);
                                    data[vs[1]] = think.isEmpty(data[v]) || data[v] == 0 ? 0 : new Date(data[v]).getTime();
                                };
                            }
                            //console.log(data);
                            data = data || null;
                            //检查文档类型是否符合要求
                            type = data.type || 2;
                            pid = data.pid;
                            _context3.next = 7;
                            return this.checkdoctype(type, pid);

                        case 7:
                            res = _context3.sent;

                            if (!(res.errno > 0)) {
                                _context3.next = 11;
                                break;
                            }

                            this.error = res.errmsg;
                            return _context3.abrupt("return", false);

                        case 11:
                            if (!think.isEmpty(data.id)) {
                                _context3.next = 56;
                                break;
                            }

                            //新增数据

                            if (think.isEmpty(data.create_time)) {
                                data.create_time = time;
                            } else {
                                data.create_time = data.create_time != 0 ? new Date(data.create_time).valueOf() : time;
                            }
                            data.update_time = new Date().getTime();
                            _context3.next = 16;
                            return this.getStatus(data.id, data.category_id);

                        case 16:
                            data.status = _context3.sent;
                            _context3.next = 19;
                            return this.add(data);

                        case 19:
                            id = _context3.sent;
                            //添加基础数据
                            console.log("new document-----------------  " + id);
                            //let id = 100;

                            if (id) {
                                _context3.next = 26;
                                break;
                            }

                            this.error = '新增基础内容出错！';
                            return _context3.abrupt("return", false);

                        case 26:
                            if (!(data.sort_id != 0 && !think.isEmpty(data.sort_id))) {
                                _context3.next = 50;
                                break;
                            }

                            sortarr = [];
                            sortdata = {};
                            _context3.t0 = _regenerator2.default.keys(data);

                        case 30:
                            if ((_context3.t1 = _context3.t0()).done) {
                                _context3.next = 48;
                                break;
                            }

                            k = _context3.t1.value;
                            arr = k.split("_");

                            if (!(arr[0] == "sortid" && !think.isEmpty(arr[1]))) {
                                _context3.next = 46;
                                break;
                            }

                            obj = {};

                            obj.value = think.isArray(data[k]) ? (0, _stringify2.default)(data[k]) : data[k];
                            _context3.next = 38;
                            return this.model("typeoption").where({ identifier: arr[1] }).getField("optionid", true);

                        case 38:
                            obj.optionid = _context3.sent;

                            obj.sortid = data.sort_id;
                            obj.fid = data.category_id;
                            obj.tid = id;
                            sortarr.push(obj);
                            sortdata[arr[1]] = think.isArray(data[k]) ? (0, _stringify2.default)(data[k]) : data[k];
                            sortdata.tid = id;
                            sortdata.fid = data.category_id;

                        case 46:
                            _context3.next = 30;
                            break;

                        case 48:
                            //console.log(sortarr);
                            //console.log(sortdata);
                            //return false;
                            //添加分类
                            this.model("typeoptionvar").addMany(sortarr);
                            this.model("type_optionvalue" + data.sort_id).add(sortdata);

                        case 50:
                            _context3.next = 52;
                            return this.model("keyword").addkey(data.keyname, id, data.uid, data.model_id, 0);

                        case 52:
                            _context3.next = 54;
                            return this.model("search").addsearch(data.model_id, id, data);

                        case 54:
                            _context3.next = 105;
                            break;

                        case 56:
                            //更新内容
                            data.update_time = new Date().getTime();
                            _context3.next = 59;
                            return this.getStatus(data.id, data.category_id);

                        case 59:
                            data.status = _context3.sent;

                            if (!think.isEmpty(data.create_time)) {
                                data.create_time = data.create_time != 0 ? new Date(data.create_time).valueOf() : new Date().getTime();
                            }
                            //更新关键词
                            _context3.next = 63;
                            return this.model("keyword").updatekey(data.keyname, data.id, data.userid, data.model_id, 0);

                        case 63:
                            status = this.update(data);

                            if (status) {
                                _context3.next = 69;
                                break;
                            }

                            this.error = '更新基础内容出错！';
                            return _context3.abrupt("return", false);

                        case 69:
                            _context3.next = 71;
                            return this.model("search").updatesearch(data.model_id, data);

                        case 71:
                            if (!(data.sort_id != 0 && !think.isEmpty(data.sort_id))) {
                                _context3.next = 105;
                                break;
                            }

                            _sortdata = {};
                            _sortarr = [];
                            _context3.t2 = _regenerator2.default.keys(data);

                        case 75:
                            if ((_context3.t3 = _context3.t2()).done) {
                                _context3.next = 93;
                                break;
                            }

                            _k = _context3.t3.value;
                            _arr = _k.split("_");

                            if (!(_arr[0] == "sortid" && !think.isEmpty(_arr[1]))) {
                                _context3.next = 91;
                                break;
                            }

                            _obj = {};

                            _obj.value = think.isArray(data[_k]) ? (0, _stringify2.default)(data[_k]) : data[_k];
                            _context3.next = 83;
                            return this.model("typeoption").where({ identifier: _arr[1] }).getField("optionid", true);

                        case 83:
                            _obj.optionid = _context3.sent;

                            _obj.sortid = data.sort_id;
                            _obj.fid = data.category_id;
                            _obj.tid = data.id;
                            _sortarr.push(_obj);
                            _sortdata[_arr[1]] = think.isArray(data[_k]) ? (0, _stringify2.default)(data[_k]) : data[_k];
                            _sortdata.tid = data.id;
                            _sortdata.fid = data.category_id;

                        case 91:
                            _context3.next = 75;
                            break;

                        case 93:
                            _context3.next = 95;
                            return this.model("type_optionvalue" + data.sort_id).where({ tid: data.id }).count("tid");

                        case 95:
                            cou = _context3.sent;

                            if (!(cou > 0)) {
                                _context3.next = 101;
                                break;
                            }

                            _context3.next = 99;
                            return this.model("type_optionvalue" + data.sort_id).where({ tid: data.id }).update(_sortdata);

                        case 99:
                            _context3.next = 103;
                            break;

                        case 101:
                            _context3.next = 103;
                            return this.model("type_optionvalue" + data.sort_id).add(_sortdata);

                        case 103:
                            this.model("typeoptionvar").where({ tid: data.id }).delete();
                            //添加分类
                            this.model("typeoptionvar").addMany(_sortarr);

                        case 105:
                            _context3.next = 107;
                            return this.model('model').get_document_model(data.model_id);

                        case 107:
                            modelinfo = _context3.sent;
                            model = void 0;

                            if (modelinfo.extend == 1) {
                                model = "document_" + modelinfo.name;
                            } else {
                                model = modelinfo.name;
                            }

                            if (!think.isEmpty(data.id)) {
                                _context3.next = 120;
                                break;
                            }

                            //新增数据
                            data.id = id;
                            ids = this.model(model).add(data);

                            data.id = null;

                            if (ids) {
                                _context3.next = 118;
                                break;
                            }

                            this.delete(id);
                            this.error = '新增数据失败！';
                            return _context3.abrupt("return", false);

                        case 118:
                            _context3.next = 124;
                            break;

                        case 120:
                            //更新数据
                            _status = this.model(model).update(data);

                            if (_status) {
                                _context3.next = 124;
                                break;
                            }

                            this.error = '更新数据失败！';
                            return _context3.abrupt("return", false);

                        case 124:
                            return _context3.abrupt("return", { data: data, id: id });

                        case 125:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function updates(_x3) {
            return _ref3.apply(this, arguments);
        }

        return updates;
    }();

    /**
     * 检擦指定文档下面自文档的类型
     * @param type 子文档的类型
     * @param pid  父文档类型
     * @returns {errno: 0,errmsg: "",data: {name: ""}}
     */

    _class.prototype.checkdoctype = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(type, pid) {
            var res, ptype;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            type = type || null, pid = pid || null;
                            res = {
                                errno: 0,
                                errmsg: "",
                                data: {
                                    name: ""
                                }
                            };

                            if (!think.isEmpty(type)) {
                                _context4.next = 4;
                                break;
                            }

                            return _context4.abrupt("return", {
                                errno: 100,
                                errmsg: "文档类型不能为空",
                                data: ""
                            });

                        case 4:
                            if (!(think.isEmpty(pid) || pid == 0)) {
                                _context4.next = 6;
                                break;
                            }

                            return _context4.abrupt("return", res);

                        case 6:
                            if (!think.isNumberString(pid)) {
                                _context4.next = 12;
                                break;
                            }

                            _context4.next = 9;
                            return this.where({ id: pid }).getField('type', true);

                        case 9:
                            _context4.t0 = _context4.sent;
                            _context4.next = 15;
                            break;

                        case 12:
                            _context4.next = 14;
                            return this.where({ name: pid }).getField('type', true);

                        case 14:
                            _context4.t0 = _context4.sent;

                        case 15:
                            ptype = _context4.t0;
                            _context4.t1 = ptype;
                            _context4.next = _context4.t1 === 1 ? 19 : _context4.t1 === 2 ? 19 : _context4.t1 === 3 ? 20 : 21;
                            break;

                        case 19:
                            return _context4.abrupt("break", 22);

                        case 20:
                            return _context4.abrupt("return", {
                                errno: 100,
                                errmsg: "段落下面不允许再添加子内容",
                                data: ""
                            });

                        case 21:
                            return _context4.abrupt("return", {
                                errno: 100,
                                errmsg: "父文档类型不正确",
                                data: ""
                            });

                        case 22:
                            return _context4.abrupt("return", res);

                        case 23:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function checkdoctype(_x5, _x6) {
            return _ref4.apply(this, arguments);
        }

        return checkdoctype;
    }();

    /**
     * 获取数据状态
     * @param id  文章id
     * @param cid 分类id
     * @returns {*}
     */


    _class.prototype.getStatus = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(id, cid) {
            var status, check;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            id = id || null;
                            status = void 0;

                            if (!think.isEmpty(id)) {
                                _context5.next = 9;
                                break;
                            }

                            _context5.next = 5;
                            return this.model('category').where({ id: cid }).getField('check', true);

                        case 5:
                            check = _context5.sent;

                            status = check ? 2 : 1;
                            _context5.next = 13;
                            break;

                        case 9:
                            _context5.next = 11;
                            return this.where({ id: id }).getField('status', true);

                        case 11:
                            status = _context5.sent;

                            //编辑草稿改变状态
                            if (status == 3) {
                                status = 1;
                            }

                        case 13:
                            return _context5.abrupt("return", status);

                        case 14:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function getStatus(_x7, _x8) {
            return _ref5.apply(this, arguments);
        }

        return getStatus;
    }();

    /**
     * 返回模型的错误信息
     * @access public
     * @return string
     */


    _class.prototype.getError = function getError() {
        return this.error;
    };

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=document.js.map