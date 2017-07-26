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

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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
     * 获取分类详细信息
     * @param  {milit} id 分类ID或者标识
     * @param  {string} field 查询字段
     * @return {array} 分类信息
     */
    _class.prototype.info = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id, field) {
            var map;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            field = think.isEmpty(field) || '';
                            map = {};

                            if (think.isNumberString(id)) {
                                map.id = id;
                            } else {
                                map.name = id;
                            }
                            _context.next = 5;
                            return this.field(field).where(map).find();

                        case 5:
                            return _context.abrupt('return', _context.sent);

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function info(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return info;
    }();
    /**
     * 获取分类树，指定分类则返回指定分类及其子分类，不指定则返回所有分类树
     *
     */


    _class.prototype.gettree = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(id, field) {
            var where = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var map, list, _iterator, _isArray, _i, _ref3, v, info;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            id = id || 0, field = field || true;
                            /*获取当前分类信息*/

                            //if(id){
                            //    console.log(id);
                            //    let ids = id;
                            //    let info = await this.info(ids);
                            //    console.log(info);
                            //    let id   = info.id;
                            //}

                            //获取所有分类
                            map = think.extend({ "status": { ">": -1 } }, where);

                            console.log(map);
                            _context2.next = 5;
                            return this.field(field).where(map).order('sort ASC').select();

                        case 5:
                            list = _context2.sent;
                            _iterator = list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 7:
                            if (!_isArray) {
                                _context2.next = 13;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context2.next = 10;
                                break;
                            }

                            return _context2.abrupt('break', 21);

                        case 10:
                            _ref3 = _iterator[_i++];
                            _context2.next = 17;
                            break;

                        case 13:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context2.next = 16;
                                break;
                            }

                            return _context2.abrupt('break', 21);

                        case 16:
                            _ref3 = _i.value;

                        case 17:
                            v = _ref3;

                            if (!think.isEmpty(v.name)) {
                                v.url = '/' + v.name;
                            } else {
                                v.url = '/' + v.id;
                            }

                        case 19:
                            _context2.next = 7;
                            break;

                        case 21:
                            //console.log(list);
                            list = get_children(list, id);
                            info = list;
                            return _context2.abrupt('return', info);

                        case 24:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function gettree(_x3, _x4) {
            return _ref2.apply(this, arguments);
        }

        return gettree;
    }();
    /**
     * 获取分类信息并缓存分类
     * @param  integer id    分类ID
     * @param  string  field 要获取的字段名
     * @return string         分类信息
     */


    _class.prototype.get_category = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(id, field) {
            var _this2 = this;

            var list;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            field = field || null;

                            _context3.next = 3;
                            return think.cache("sys_category_list", function () {
                                return _this2.getallcate();
                            }, { timeout: 365 * 24 * 3600 });

                        case 3:
                            list = _context3.sent;

                            if (!(think.isEmpty(id) || !think.isNumberString(id))) {
                                _context3.next = 8;
                                break;
                            }

                            return _context3.abrupt('return', list);

                        case 8:
                            if (!list[id]) {
                                _context3.next = 14;
                                break;
                            }

                            if (!(think.isEmpty(list) || 1 != list[id].status)) {
                                _context3.next = 11;
                                break;
                            }

                            return _context3.abrupt('return', '');

                        case 11:
                            return _context3.abrupt('return', think.isEmpty(field) ? list[id] : list[id][field]);

                        case 14:
                            return _context3.abrupt('return', '');

                        case 15:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function get_category(_x6, _x7) {
            return _ref4.apply(this, arguments);
        }

        return get_category;
    }();

    _class.prototype.getallcate = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var lists, cate, _iterator2, _isArray2, _i2, _ref6, v;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            lists = {};
                            _context4.next = 3;
                            return this.select();

                        case 3:
                            cate = _context4.sent;
                            _iterator2 = cate, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 5:
                            if (!_isArray2) {
                                _context4.next = 11;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context4.next = 8;
                                break;
                            }

                            return _context4.abrupt('break', 20);

                        case 8:
                            _ref6 = _iterator2[_i2++];
                            _context4.next = 15;
                            break;

                        case 11:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context4.next = 14;
                                break;
                            }

                            return _context4.abrupt('break', 20);

                        case 14:
                            _ref6 = _i2.value;

                        case 15:
                            v = _ref6;

                            if (!think.isEmpty(v.name)) {
                                v.url = '/' + v.name;
                            } else {
                                v.url = '/' + v.id;
                            }
                            lists[v.id] = v;

                        case 18:
                            _context4.next = 5;
                            break;

                        case 20:
                            return _context4.abrupt('return', lists);

                        case 21:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function getallcate() {
            return _ref5.apply(this, arguments);
        }

        return getallcate;
    }();
    /**
     * 获取参数的所有父级分类
     * @param int id 分类id
     * @param true true 带url
     * @return array 参数分类和父类的信息集合
     * @author
     */


    _class.prototype.get_parent_category = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(id, url) {
            var breadcrumb, nav;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            breadcrumb = [];

                        case 1:
                            if (!(id != 0 && id != undefined)) {
                                _context5.next = 12;
                                break;
                            }

                            console.log("id=========" + id);
                            _context5.next = 5;
                            return this.where({ 'id': id, 'status': 1 }).field("id,title,pid,allow_publish,name,mold").find();

                        case 5:
                            nav = _context5.sent;

                            console.log("nav=========" + (0, _stringify2.default)(nav));
                            if (url) {
                                if (!think.isEmpty(nav.name)) {
                                    nav.url = '/' + nav.name;
                                } else {
                                    nav.url = '/' + nav.id;
                                }
                            }
                            breadcrumb.push(nav);
                            id = nav.pid;

                            _context5.next = 1;
                            break;

                        case 12:
                            return _context5.abrupt('return', breadcrumb.reverse());

                        case 13:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function get_parent_category(_x8, _x9) {
            return _ref7.apply(this, arguments);
        }

        return get_parent_category;
    }();

    _class.prototype.get_sub_category = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(id) {
            var cat, data, arr, _iterator3, _isArray3, _i3, _ref9, v, _iterator4, _isArray4, _i4, _ref10, val;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return this.select();

                        case 2:
                            cat = _context6.sent;
                            data = sub_cate(cat, id);

                            console.log("get_sub_category=========" + (0, _stringify2.default)(data));
                            //console.log(data);
                            arr = [];
                            _iterator3 = data, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 7:
                            if (!_isArray3) {
                                _context6.next = 13;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context6.next = 10;
                                break;
                            }

                            return _context6.abrupt('break', 40);

                        case 10:
                            _ref9 = _iterator3[_i3++];
                            _context6.next = 17;
                            break;

                        case 13:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context6.next = 16;
                                break;
                            }

                            return _context6.abrupt('break', 40);

                        case 16:
                            _ref9 = _i3.value;

                        case 17:
                            v = _ref9;

                            if (!think.isString(v)) {
                                _context6.next = 37;
                                break;
                            }

                            _iterator4 = v.split(","), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 20:
                            if (!_isArray4) {
                                _context6.next = 26;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context6.next = 23;
                                break;
                            }

                            return _context6.abrupt('break', 34);

                        case 23:
                            _ref10 = _iterator4[_i4++];
                            _context6.next = 30;
                            break;

                        case 26:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context6.next = 29;
                                break;
                            }

                            return _context6.abrupt('break', 34);

                        case 29:
                            _ref10 = _i4.value;

                        case 30:
                            val = _ref10;

                            arr.push(Number(val));

                        case 32:
                            _context6.next = 20;
                            break;

                        case 34:
                            ;
                            _context6.next = 38;
                            break;

                        case 37:
                            arr.push(v);

                        case 38:
                            _context6.next = 7;
                            break;

                        case 40:
                            return _context6.abrupt('return', arr);

                        case 41:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function get_sub_category(_x10) {
            return _ref8.apply(this, arguments);
        }

        return get_sub_category;
    }();
    /**
     * 验证分类是否允许发布内容
     * @param id 分类id
     * @returns {boolean} true-允许发布内容，false-不允许发布内容
     */


    _class.prototype.check_category = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(id) {
            var type, publish;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            if (!think.isObject(id)) {
                                _context7.next = 9;
                                break;
                            }

                            id.type = !think.isEmpty(id.type) ? id.type : 2;
                            _context7.next = 4;
                            return this.get_category(id.category_id, 'type');

                        case 4:
                            type = _context7.sent;

                            type = type.split(",");
                            return _context7.abrupt('return', in_array(id.type, type));

                        case 9:
                            _context7.next = 11;
                            return this.get_category(id, 'allow_publish');

                        case 11:
                            publish = _context7.sent;
                            return _context7.abrupt('return', publish ? true : false);

                        case 13:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function check_category(_x11) {
            return _ref11.apply(this, arguments);
        }

        return check_category;
    }();

    /**
     * 获取当前分类的文档类型
     * @param id
     * @returns {*}文档类型对象
     */


    _class.prototype.get_type_bycate = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(id) {
            var type_list, model_type, key;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            id = id || null;

                            if (!think.isEmpty(id)) {
                                _context8.next = 3;
                                break;
                            }

                            return _context8.abrupt('return', false);

                        case 3:
                            type_list = think.config("document_model_type");
                            _context8.next = 6;
                            return this.where({ id: id }).getField("type", 1);

                        case 6:
                            model_type = _context8.sent;


                            model_type = model_type[0].split(",");

                            for (key in type_list) {
                                if (!in_array(key, model_type)) {
                                    delete type_list[key];
                                }
                            }
                            return _context8.abrupt('return', type_list);

                        case 10:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function get_type_bycate(_x12) {
            return _ref12.apply(this, arguments);
        }

        return get_type_bycate;
    }();

    /**
     *
     * @param data
     * @returns {*}
     */


    _class.prototype.updates = function () {
        var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(data) {
            var res, priv, _iterator5, _isArray5, _i5, _ref14, v, arr, obj, _arr, _iterator6, _isArray6, _i6, _ref15, _v, _arr2, _obj, _arr3, _priv, _iterator7, _isArray7, _i7, _ref16, _v2, _arr4, _obj2, _arr5, _iterator8, _isArray8, _i8, _ref17, _v3, _arr6, _obj3, _arr7;

            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            if (!think.isEmpty(data)) {
                                _context9.next = 2;
                                break;
                            }

                            return _context9.abrupt('return', false);

                        case 2:
                            res = void 0;
                            /* 添加或更新数据 */

                            if (!think.isEmpty(data.id)) {
                                _context9.next = 74;
                                break;
                            }

                            data.create_time = new Date().getTime();
                            data.model = think.isArray(data.model) ? data.model.join(",") : data.model;
                            data.model_sub = think.isArray(data.model_sub) ? data.model_sub.join(",") : data.model_sub;
                            data.type = think.isArray(data.type) ? data.type.join(",") : data.model;
                            //console.log(data);
                            _context9.next = 10;
                            return this.add(data);

                        case 10:
                            res = _context9.sent;

                            if (!res) {
                                _context9.next = 72;
                                break;
                            }

                            //构造权限
                            priv = [];

                            if (think.isEmpty(data.priv_roleid)) {
                                _context9.next = 41;
                                break;
                            }

                            if (!think.isArray(data.priv_roleid)) {
                                _context9.next = 39;
                                break;
                            }

                            _iterator5 = data.priv_roleid, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

                        case 16:
                            if (!_isArray5) {
                                _context9.next = 22;
                                break;
                            }

                            if (!(_i5 >= _iterator5.length)) {
                                _context9.next = 19;
                                break;
                            }

                            return _context9.abrupt('break', 37);

                        case 19:
                            _ref14 = _iterator5[_i5++];
                            _context9.next = 26;
                            break;

                        case 22:
                            _i5 = _iterator5.next();

                            if (!_i5.done) {
                                _context9.next = 25;
                                break;
                            }

                            return _context9.abrupt('break', 37);

                        case 25:
                            _ref14 = _i5.value;

                        case 26:
                            v = _ref14;
                            arr = v.split(",");
                            obj = {};

                            obj.catid = res;
                            obj.siteid = 1;
                            obj.roleid = arr[1];
                            obj.action = arr[0];
                            obj.is_admin = 1;
                            priv.push(obj);

                        case 35:
                            _context9.next = 16;
                            break;

                        case 37:
                            _context9.next = 41;
                            break;

                        case 39:
                            _arr = data.priv_roleid.split(",");

                            priv.push({ catid: res, siteid: 1, roleid: _arr[1], action: _arr[0], is_admin: 1 });

                        case 41:
                            if (think.isEmpty(data.priv_groupid)) {
                                _context9.next = 69;
                                break;
                            }

                            if (!think.isArray(data.priv_groupid)) {
                                _context9.next = 67;
                                break;
                            }

                            _iterator6 = data.priv_groupid, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

                        case 44:
                            if (!_isArray6) {
                                _context9.next = 50;
                                break;
                            }

                            if (!(_i6 >= _iterator6.length)) {
                                _context9.next = 47;
                                break;
                            }

                            return _context9.abrupt('break', 65);

                        case 47:
                            _ref15 = _iterator6[_i6++];
                            _context9.next = 54;
                            break;

                        case 50:
                            _i6 = _iterator6.next();

                            if (!_i6.done) {
                                _context9.next = 53;
                                break;
                            }

                            return _context9.abrupt('break', 65);

                        case 53:
                            _ref15 = _i6.value;

                        case 54:
                            _v = _ref15;
                            _arr2 = _v.split(",");
                            _obj = {};

                            _obj.catid = res;
                            _obj.siteid = 1;
                            _obj.roleid = _arr2[1];
                            _obj.action = _arr2[0];
                            _obj.is_admin = 0;
                            priv.push(_obj);

                        case 63:
                            _context9.next = 44;
                            break;

                        case 65:
                            _context9.next = 69;
                            break;

                        case 67:
                            _arr3 = data.priv_groupid.split(",");

                            priv.push({ catid: res, siteid: 1, roleid: _arr3[1], action: _arr3[0], is_admin: 0 });

                        case 69:
                            if (think.isEmpty(priv)) {
                                _context9.next = 72;
                                break;
                            }

                            _context9.next = 72;
                            return this.model("category_priv").addMany(priv);

                        case 72:
                            _context9.next = 144;
                            break;

                        case 74:
                            data.update_time = new Date().getTime();
                            data.model = think.isArray(data.model) ? data.model.join(",") : data.model;
                            data.model_sub = think.isArray(data.model_sub) ? data.model_sub.join(",") : data.model_sub;
                            data.type = think.isArray(data.type) ? data.type.join(",") : "";
                            _context9.next = 80;
                            return this.update(data);

                        case 80:
                            res = _context9.sent;

                            if (!res) {
                                _context9.next = 144;
                                break;
                            }

                            //构造权限
                            _priv = [];

                            if (think.isEmpty(data.priv_roleid)) {
                                _context9.next = 111;
                                break;
                            }

                            if (!think.isArray(data.priv_roleid)) {
                                _context9.next = 109;
                                break;
                            }

                            _iterator7 = data.priv_roleid, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);

                        case 86:
                            if (!_isArray7) {
                                _context9.next = 92;
                                break;
                            }

                            if (!(_i7 >= _iterator7.length)) {
                                _context9.next = 89;
                                break;
                            }

                            return _context9.abrupt('break', 107);

                        case 89:
                            _ref16 = _iterator7[_i7++];
                            _context9.next = 96;
                            break;

                        case 92:
                            _i7 = _iterator7.next();

                            if (!_i7.done) {
                                _context9.next = 95;
                                break;
                            }

                            return _context9.abrupt('break', 107);

                        case 95:
                            _ref16 = _i7.value;

                        case 96:
                            _v2 = _ref16;
                            _arr4 = _v2.split(",");
                            _obj2 = {};

                            _obj2.catid = data.id;
                            _obj2.siteid = 1;
                            _obj2.roleid = _arr4[1];
                            _obj2.action = _arr4[0];
                            _obj2.is_admin = 1;
                            _priv.push(_obj2);

                        case 105:
                            _context9.next = 86;
                            break;

                        case 107:
                            _context9.next = 111;
                            break;

                        case 109:
                            _arr5 = data.priv_roleid.split(",");

                            _priv.push({ catid: data.id, siteid: 1, roleid: _arr5[1], action: _arr5[0], is_admin: 1 });

                        case 111:
                            if (think.isEmpty(data.priv_groupid)) {
                                _context9.next = 139;
                                break;
                            }

                            if (!think.isArray(data.priv_groupid)) {
                                _context9.next = 137;
                                break;
                            }

                            _iterator8 = data.priv_groupid, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);

                        case 114:
                            if (!_isArray8) {
                                _context9.next = 120;
                                break;
                            }

                            if (!(_i8 >= _iterator8.length)) {
                                _context9.next = 117;
                                break;
                            }

                            return _context9.abrupt('break', 135);

                        case 117:
                            _ref17 = _iterator8[_i8++];
                            _context9.next = 124;
                            break;

                        case 120:
                            _i8 = _iterator8.next();

                            if (!_i8.done) {
                                _context9.next = 123;
                                break;
                            }

                            return _context9.abrupt('break', 135);

                        case 123:
                            _ref17 = _i8.value;

                        case 124:
                            _v3 = _ref17;
                            _arr6 = _v3.split(",");
                            _obj3 = {};

                            _obj3.catid = data.id;
                            _obj3.siteid = 1;
                            _obj3.roleid = _arr6[1];
                            _obj3.action = _arr6[0];
                            _obj3.is_admin = 0;
                            _priv.push(_obj3);

                        case 133:
                            _context9.next = 114;
                            break;

                        case 135:
                            _context9.next = 139;
                            break;

                        case 137:
                            _arr7 = data.priv_groupid.split(",");

                            _priv.push({ catid: data.id, siteid: 1, roleid: _arr7[1], action: _arr7[0], is_admin: 0 });

                        case 139:
                            _context9.next = 141;
                            return this.model("category_priv").delete({ where: { catid: data.id } });

                        case 141:
                            if (think.isEmpty(_priv)) {
                                _context9.next = 144;
                                break;
                            }

                            _context9.next = 144;
                            return this.model("category_priv").addMany(_priv);

                        case 144:
                            //清除缓存
                            think.cache("sys_category_list", null); //栏目缓存
                            think.cache("all_category", null); //栏目缓存
                            think.cache("all_priv", null); //栏目权限缓存
                            return _context9.abrupt('return', res);

                        case 148:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function updates(_x13) {
            return _ref13.apply(this, arguments);
        }

        return updates;
    }();

    // async get_category_byid(cid){
    //     //let list ="22";

    //     let list = await think.cache("category_byid", () => {
    //         return this.get_colunm_id();
    //     }, {timeout: 365 * 24 * 3600});
    //     if(think.isEmpty(map)){
    //         return list;
    //     }else {
    //         return think._.filter(list, map);
    //     }

    // }
    // async get_colunm_id(){
    //     let lists= await this.where({status: 1,pid:145}).field('id,title as name,name as title,pid,allow_publish,isapp,mold,description,icon').order('pid,sort').select();
    //     for(let v of lists) {
    //         if (!think.isEmpty(v.title)) {
    //             v.url = `/${v.title}`
    //         } else {
    //             v.url = `/${v.id}`
    //         }
    //     }
    //     // console.log(lists);
    //     return lists;
    // }
    /**
     *
     */


    _class.prototype.get_all_category = function () {
        var _ref18 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var _this3 = this;

            var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var list;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            _context10.next = 2;
                            return think.cache("all_category", function () {
                                return _this3.get_colunm();
                            }, { timeout: 365 * 24 * 3600 });

                        case 2:
                            list = _context10.sent;

                            if (!think.isEmpty(map)) {
                                _context10.next = 7;
                                break;
                            }

                            return _context10.abrupt('return', list);

                        case 7:
                            return _context10.abrupt('return', think._.filter(list, map));

                        case 8:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function get_all_category() {
            return _ref18.apply(this, arguments);
        }

        return get_all_category;
    }();

    _class.prototype.get_colunm = function () {
        var _ref19 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
            var lists, _iterator9, _isArray9, _i9, _ref20, v;

            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            _context11.next = 2;
                            return this.where({ status: 1 }).field('id,title as name,name as title,pid,allow_publish,isapp,mold,description,icon').order('pid,sort').select();

                        case 2:
                            lists = _context11.sent;
                            _iterator9 = lists, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);

                        case 4:
                            if (!_isArray9) {
                                _context11.next = 10;
                                break;
                            }

                            if (!(_i9 >= _iterator9.length)) {
                                _context11.next = 7;
                                break;
                            }

                            return _context11.abrupt('break', 18);

                        case 7:
                            _ref20 = _iterator9[_i9++];
                            _context11.next = 14;
                            break;

                        case 10:
                            _i9 = _iterator9.next();

                            if (!_i9.done) {
                                _context11.next = 13;
                                break;
                            }

                            return _context11.abrupt('break', 18);

                        case 13:
                            _ref20 = _i9.value;

                        case 14:
                            v = _ref20;

                            if (!think.isEmpty(v.title)) {
                                v.url = '/' + v.title;
                            } else {
                                v.url = '/' + v.id;
                            }

                        case 16:
                            _context11.next = 4;
                            break;

                        case 18:
                            return _context11.abrupt('return', lists);

                        case 19:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function get_colunm() {
            return _ref19.apply(this, arguments);
        }

        return get_colunm;
    }();
    //获取栏目分组


    _class.prototype.get_groups = function () {
        var _ref21 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12(cid) {
            var group, groups, cate, arr;
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            group = void 0;
                            _context12.next = 3;
                            return this.where({ id: cid }).getField("groups", true);

                        case 3:
                            groups = _context12.sent;

                            if (think.isEmpty(groups)) {
                                _context12.next = 9;
                                break;
                            }

                            _context12.next = 7;
                            return get_cate(cid);

                        case 7:
                            cate = _context12.sent;

                            if (groups.search(/\r\n/ig) > -1) {
                                groups = groups.split("\r\n");
                                arr = [];

                                groups.forEach(function (n) {
                                    var obj = {};
                                    n = n.split(":");
                                    obj.url = cate.url + "/" + n[0];
                                    obj.name = n[1];
                                    obj.id = Number(n[0]);
                                    arr.push(obj);
                                });

                                group = arr;
                            }

                        case 9:
                            return _context12.abrupt('return', group);

                        case 10:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        function get_groups(_x15) {
            return _ref21.apply(this, arguments);
        }

        return get_groups;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=category.js.map