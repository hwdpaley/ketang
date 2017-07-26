// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

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

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.tactive = "article";
    };

    /**
     * __before action
     * @private
       */


    _class.prototype.__before = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var typeoption;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _Base.prototype.__before.call(this);

                        case 2:
                            _context.next = 4;
                            return this.model("typeoption").where({ classid: 0 }).select();

                        case 4:
                            typeoption = _context.sent;

                            this.assign("typeoption", typeoption);

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function __before() {
            return _ref.apply(this, arguments);
        }

        return __before;
    }();
    /**
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var type, list, cate, _iterator, _isArray, _i, _ref3, _val, types, sortarr, _iterator4, _isArray4, _i4, _ref6, _v, _iterator2, _isArray2, _i2, _ref4, val, _iterator3, _isArray3, _i3, _ref5, v, obj;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            //auto render template file index_index.html
                            type = this.model("type");
                            _context2.next = 3;
                            return type.order('displayorder ASC,typeid DESC').select();

                        case 3:
                            list = _context2.sent;
                            _context2.next = 6;
                            return this.model("category").where({ documentsorts: ['!=', ""] }).select();

                        case 6:
                            cate = _context2.sent;
                            _iterator = cate, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 8:
                            if (!_isArray) {
                                _context2.next = 14;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context2.next = 11;
                                break;
                            }

                            return _context2.abrupt('break', 39);

                        case 11:
                            _ref3 = _iterator[_i++];
                            _context2.next = 18;
                            break;

                        case 14:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context2.next = 17;
                                break;
                            }

                            return _context2.abrupt('break', 39);

                        case 17:
                            _ref3 = _i.value;

                        case 18:
                            _val = _ref3;
                            types = JSON.parse(_val.documentsorts);
                            sortarr = [];
                            _iterator4 = types.types, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 22:
                            if (!_isArray4) {
                                _context2.next = 28;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context2.next = 25;
                                break;
                            }

                            return _context2.abrupt('break', 36);

                        case 25:
                            _ref6 = _iterator4[_i4++];
                            _context2.next = 32;
                            break;

                        case 28:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context2.next = 31;
                                break;
                            }

                            return _context2.abrupt('break', 36);

                        case 31:
                            _ref6 = _i4.value;

                        case 32:
                            _v = _ref6;

                            sortarr.push(_v.enable);

                        case 34:
                            _context2.next = 22;
                            break;

                        case 36:
                            _val.sortid = sortarr;

                        case 37:
                            _context2.next = 8;
                            break;

                        case 39:
                            if (think.isEmpty(cate)) {
                                _context2.next = 70;
                                break;
                            }

                            _iterator2 = list, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 41:
                            if (!_isArray2) {
                                _context2.next = 47;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context2.next = 44;
                                break;
                            }

                            return _context2.abrupt('break', 70);

                        case 44:
                            _ref4 = _iterator2[_i2++];
                            _context2.next = 51;
                            break;

                        case 47:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context2.next = 50;
                                break;
                            }

                            return _context2.abrupt('break', 70);

                        case 50:
                            _ref4 = _i2.value;

                        case 51:
                            val = _ref4;

                            val.cate = [];
                            _iterator3 = cate, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 54:
                            if (!_isArray3) {
                                _context2.next = 60;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context2.next = 57;
                                break;
                            }

                            return _context2.abrupt('break', 68);

                        case 57:
                            _ref5 = _iterator3[_i3++];
                            _context2.next = 64;
                            break;

                        case 60:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context2.next = 63;
                                break;
                            }

                            return _context2.abrupt('break', 68);

                        case 63:
                            _ref5 = _i3.value;

                        case 64:
                            v = _ref5;

                            if (in_array(val.typeid, v.sortid)) {
                                obj = {};

                                obj.id = v.id;
                                obj.title = v.title;
                                val.cate.push(obj);
                            }

                        case 66:
                            _context2.next = 54;
                            break;

                        case 68:
                            _context2.next = 41;
                            break;

                        case 70:
                            //console.log(list);
                            this.assign("list", list);
                            this.meta_title = "分类管理";
                            return _context2.abrupt('return', this.display());

                        case 73:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function indexAction() {
            return _ref2.apply(this, arguments);
        }

        return indexAction;
    }();
    //分类信息设置


    _class.prototype.typeviewAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var id, info, typeoption, option, _iterator5, _isArray5, _i5, _ref8, val, sortid, typevar;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            id = this.get("typeid");
                            _context3.next = 3;
                            return this.model('type').find({ where: { typeid: id } });

                        case 3:
                            info = _context3.sent;
                            _context3.next = 6;
                            return this.model('typeoption').where({ classid: 0 }).select();

                        case 6:
                            typeoption = _context3.sent;
                            _context3.next = 9;
                            return this.model('typeoption').where({ classid: ['!=', 0] }).select();

                        case 9:
                            option = _context3.sent;
                            _iterator5 = option, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

                        case 11:
                            if (!_isArray5) {
                                _context3.next = 17;
                                break;
                            }

                            if (!(_i5 >= _iterator5.length)) {
                                _context3.next = 14;
                                break;
                            }

                            return _context3.abrupt('break', 28);

                        case 14:
                            _ref8 = _iterator5[_i5++];
                            _context3.next = 21;
                            break;

                        case 17:
                            _i5 = _iterator5.next();

                            if (!_i5.done) {
                                _context3.next = 20;
                                break;
                            }

                            return _context3.abrupt('break', 28);

                        case 20:
                            _ref8 = _i5.value;

                        case 21:
                            val = _ref8;
                            _context3.next = 24;
                            return this.model('typevar').where({ optionid: val.optionid }).getField('sortid');

                        case 24:
                            sortid = _context3.sent;

                            val.sortid = sortid;

                        case 26:
                            _context3.next = 11;
                            break;

                        case 28:
                            _context3.next = 30;
                            return this.model('typevar').alias("a").join({
                                table: "typeoption",
                                join: "left", //join 方式，有 left, right, inner 3 种方式
                                as: "c", // 表别名
                                on: ["optionid", "optionid"] //ON 条件
                            }).where({ 'a.sortid': id }).field("a.sortid,a.optionid,a.available,a.required,a.unchangeable,a.search,a.displayorder,a.subjectshow,c.title,c.type").order("a.displayorder ASC").select();

                        case 30:
                            typevar = _context3.sent;

                            this.active = "admin/type/index";
                            console.log(typevar);
                            this.assign({
                                info: info,
                                typeoption: typeoption,
                                option: option,
                                typevar: typevar
                            });
                            this.meta_title = info.name + '-\u5206\u7C7B\u8BBE\u7F6E';
                            return _context3.abrupt('return', this.display());

                        case 36:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function typeviewAction() {
            return _ref7.apply(this, arguments);
        }

        return typeviewAction;
    }();
    //添加字段


    _class.prototype.updatetypevarAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var data, del, datas, _iterator6, _isArray6, _i6, _ref10, v, add;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            data = this.post('data');

                            data = JSON.parse(data);
                            //console.log(data);
                            //return false;
                            _context4.next = 4;
                            return this.model('typevar').delete({
                                where: { sortid: data.id }
                            });

                        case 4:
                            del = _context4.sent;
                            datas = [];
                            _iterator6 = data.datarr, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

                        case 7:
                            if (!_isArray6) {
                                _context4.next = 13;
                                break;
                            }

                            if (!(_i6 >= _iterator6.length)) {
                                _context4.next = 10;
                                break;
                            }

                            return _context4.abrupt('break', 21);

                        case 10:
                            _ref10 = _iterator6[_i6++];
                            _context4.next = 17;
                            break;

                        case 13:
                            _i6 = _iterator6.next();

                            if (!_i6.done) {
                                _context4.next = 16;
                                break;
                            }

                            return _context4.abrupt('break', 21);

                        case 16:
                            _ref10 = _i6.value;

                        case 17:
                            v = _ref10;

                            if (v.isdel != 1) {
                                datas.push(v);
                            }

                        case 19:
                            _context4.next = 7;
                            break;

                        case 21:
                            _context4.next = 23;
                            return this.model('typevar').addMany(datas);

                        case 23:
                            add = _context4.sent;

                            if (think.isEmpty(add)) {
                                _context4.next = 27;
                                break;
                            }

                            //添加字段
                            this.model("type").addField(data);

                            return _context4.abrupt('return', this.success({ name: "操作成功" }));

                        case 27:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function updatetypevarAction() {
            return _ref9.apply(this, arguments);
        }

        return updatetypevarAction;
    }();
    /**
     * topic action
     *
     */


    _class.prototype.topicAction = function topicAction() {
        this.http.error = new Error('功能开发中,敬请期待...');
        return think.statusAction(701, this.http);
        return this.display();
    };

    /**
     * type Action
     */


    _class.prototype.typeoptionAction = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var optionid, option, optionlist;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            optionid = this.get("classid");
                            _context5.next = 3;
                            return this.model('typeoption').find({ where: { optionid: optionid } });

                        case 3:
                            option = _context5.sent;
                            _context5.next = 6;
                            return this.model('typeoption').where({ classid: optionid }).select();

                        case 6:
                            optionlist = _context5.sent;

                            console.log(option);
                            this.assign({
                                option: option,
                                optionlist: optionlist
                            });
                            this.meta_title = option.title;
                            this.active = "admin/type/index";
                            return _context5.abrupt('return', this.display());

                        case 12:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function typeoptionAction() {
            return _ref11.apply(this, arguments);
        }

        return typeoptionAction;
    }();

    _class.prototype.updatetypeoptionAction = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var data, _iterator7, _isArray7, _i7, _ref13, val;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            data = this.post("data");

                            data = JSON.parse(data);
                            console.log(data);
                            _iterator7 = data, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);

                        case 4:
                            if (!_isArray7) {
                                _context6.next = 10;
                                break;
                            }

                            if (!(_i7 >= _iterator7.length)) {
                                _context6.next = 7;
                                break;
                            }

                            return _context6.abrupt('break', 18);

                        case 7:
                            _ref13 = _iterator7[_i7++];
                            _context6.next = 14;
                            break;

                        case 10:
                            _i7 = _iterator7.next();

                            if (!_i7.done) {
                                _context6.next = 13;
                                break;
                            }

                            return _context6.abrupt('break', 18);

                        case 13:
                            _ref13 = _i7.value;

                        case 14:
                            val = _ref13;

                            //添加
                            if (val.isdel == 0 && val.title != 0 && val.optionid == 0) {
                                //添加
                                this.model('typeoption').add(val);
                            } else if (val.isdel == 0 && val.title != 0 && val.optionid != 0) {
                                //更新
                                this.model('typeoption').update(val, { optionid: val.optionid });
                            } else if (val.isdel == 1) {
                                this.model('typeoption').delete({
                                    where: { optionid: val.optionid }
                                });
                            }

                        case 16:
                            _context6.next = 4;
                            break;

                        case 18:
                            return _context6.abrupt('return', this.success({ name: "操作成功" }));

                        case 19:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function updatetypeoptionAction() {
            return _ref12.apply(this, arguments);
        }

        return updatetypeoptionAction;
    }();
    //编辑字段


    _class.prototype.edittypeAction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var data, update, id, info, clas;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context7.next = 11;
                                break;
                            }

                            data = this.post();

                            console.log(data);
                            update = this.model('typeoption').where({ optionid: data.optionid }).update(data);

                            if (!update) {
                                _context7.next = 8;
                                break;
                            }

                            return _context7.abrupt('return', this.success({ name: "操作成功" }));

                        case 8:
                            return _context7.abrupt('return', this.fail("操作失败"));

                        case 9:
                            _context7.next = 23;
                            break;

                        case 11:
                            id = this.get("optionid");
                            _context7.next = 14;
                            return this.model("typeoption").find({ where: { optionid: id } });

                        case 14:
                            info = _context7.sent;
                            _context7.next = 17;
                            return this.model('typeoption').find({ where: { optionid: info.classid } });

                        case 17:
                            clas = _context7.sent;

                            console.log(info);
                            this.assign({
                                info: info,
                                clas: clas
                            });
                            this.active = "admin/type/index";
                            this.meta_title = "编辑" + info.title;
                            return _context7.abrupt('return', this.display());

                        case 23:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function edittypeAction() {
            return _ref14.apply(this, arguments);
        }

        return edittypeAction;
    }();
    /**
     * 更新/修改数据
     */


    _class.prototype.updateAction = function () {
        var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var data, _iterator8, _isArray8, _i8, _ref16, val, table_name, sql, istable;

            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            data = this.post("data");

                            data = JSON.parse(data);
                            //console.log(data);
                            _iterator8 = data, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);

                        case 3:
                            if (!_isArray8) {
                                _context8.next = 9;
                                break;
                            }

                            if (!(_i8 >= _iterator8.length)) {
                                _context8.next = 6;
                                break;
                            }

                            return _context8.abrupt('break', 36);

                        case 6:
                            _ref16 = _iterator8[_i8++];
                            _context8.next = 13;
                            break;

                        case 9:
                            _i8 = _iterator8.next();

                            if (!_i8.done) {
                                _context8.next = 12;
                                break;
                            }

                            return _context8.abrupt('break', 36);

                        case 12:
                            _ref16 = _i8.value;

                        case 13:
                            val = _ref16;

                            if (!(val.isdel == 0 && val.name != 0 && val.typeid == 0)) {
                                _context8.next = 18;
                                break;
                            }

                            //添加
                            this.model('type').add(val);
                            _context8.next = 34;
                            break;

                        case 18:
                            if (!(val.isdel == 0 && val.name != 0 && val.typeid != 0)) {
                                _context8.next = 22;
                                break;
                            }

                            //更新
                            this.model('type').update(val, { typeid: val.typeid });
                            _context8.next = 34;
                            break;

                        case 22:
                            if (!(val.isdel == 1)) {
                                _context8.next = 34;
                                break;
                            }

                            table_name = think.parseConfig(true, think.config("db")).prefix + 'type_optionvalue' + val.typeid;
                            sql = 'SHOW TABLES LIKE \'' + table_name + '\'';
                            _context8.next = 27;
                            return this.model('mysql', this.config('db')).query(sql);

                        case 27:
                            istable = _context8.sent;

                            if (think.isEmpty(istable)) {
                                _context8.next = 32;
                                break;
                            }

                            sql = 'DROP TABLE ' + table_name;
                            _context8.next = 32;
                            return this.model('mysql', this.config('db')).execute(sql);

                        case 32:
                            _context8.next = 34;
                            return this.model('type').delete({
                                where: { typeid: val.typeid }
                            });

                        case 34:
                            _context8.next = 3;
                            break;

                        case 36:
                            return _context8.abrupt('return', this.success({ name: "操作成功" }));

                        case 37:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function updateAction() {
            return _ref15.apply(this, arguments);
        }

        return updateAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=type.js.map