// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';
/**
 * use global.xxx to define global functions
 *
 * global.fn1 = function(){
 *
 * }
 */

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.mytags = function () {

    this.tags = ['tagtest'];
    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args);
    };
    this.run = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(context, args, callback) {
            var arg, map, maps, _iterator, _isArray, _i, _ref2, val, model_id, model, offset, length, where, order, data;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.t0 = _regenerator2.default.keys(args);

                        case 1:
                            if ((_context.t1 = _context.t0()).done) {
                                _context.next = 40;
                                break;
                            }

                            arg = _context.t1.value;

                            if (!(arg !== '__keywords')) {
                                _context.next = 38;
                                break;
                            }

                            map = args[arg].split(",");
                            maps = {};
                            _iterator = map, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 7:
                            if (!_isArray) {
                                _context.next = 13;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 10;
                                break;
                            }

                            return _context.abrupt('break', 23);

                        case 10:
                            _ref2 = _iterator[_i++];
                            _context.next = 17;
                            break;

                        case 13:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 16;
                                break;
                            }

                            return _context.abrupt('break', 23);

                        case 16:
                            _ref2 = _i.value;

                        case 17:
                            val = _ref2;

                            val = val.split("=");
                            //console.log(val[1].indexOf("["));
                            if (val[1].indexOf("[") === 0) {
                                val[1] = val[1].replace("[", "").replace("]", "").split("-");
                                console.log(val[1]);
                            }
                            maps[val[0]] = val[1];

                        case 21:
                            _context.next = 7;
                            break;

                        case 23:
                            //console.log(maps);
                            model_id = void 0;
                            //model

                            if (think.isEmpty(maps.mid)) {
                                model_id = 1;
                            } else {
                                model_id = maps.mid;
                                delete maps.mid;
                            }
                            _context.next = 27;
                            return think.model("model", think.config("db")).get_table_name(model_id);

                        case 27:
                            model = _context.sent;

                            //console.log(model);
                            //limit
                            offset = void 0, length = void 0;

                            if (think.isEmpty(maps.limit)) {
                                offset = 10;
                            } else {
                                if (think.isArray(maps.limit)) {
                                    offset = parseInt(maps.limit[0]);
                                    length = parseInt(maps.limit[1]);
                                } else {
                                    offset = parseInt(maps.limit);
                                }
                                delete maps.limit;
                            }
                            //where
                            where = {};

                            if (!think.isEmpty(maps.cid) && think.isNumberString(maps.cid)) {
                                where.category_id = maps.cid;
                            }
                            order = void 0;

                            if (!think.isEmpty(maps.order)) {
                                order = maps.order;
                            }
                            //console.log(maps);
                            //console.log(offset);
                            _context.next = 36;
                            return think.model(model, think.config("db")).where(where).limit(offset, length).order(order).select();

                        case 36:
                            data = _context.sent;

                            //console.log(data);
                            context.ctx[arg] = data;

                        case 38:
                            _context.next = 1;
                            break;

                        case 40:
                            return _context.abrupt('return', callback(null, ''));

                        case 41:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};
/**
 * 获取同一级栏目标签
 *{%column data = "list"%}
 * @param data:接受返回数据的变量名称，例: data = "list"
 *  {% column data="list",pid=1 %}
 * @param pid: 获取同级栏目
 * {% column data="list",cid=1 %}
 * @param cid: 获取里栏目
 * {% column data="list",tree=1 %}
 * @param tree:获取栏目的树结构 tree="0",从pid为0开始获取
 * @param isapp: 是否在在移动端调用 iaapp="all" 调用全部栏目 isapp="1" pid为0的栏目,isindex="1",除去封面。
 * @parpm isnum = "1" ,1-获取栏目条数,默认不获取
 */
global.column = function () {

    this.tags = ['column'];
    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args);
    };
    this.run = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(context, args, callback) {
            var data, pid, cid, tree, isapp, limit, isindex, column, _iterator2, _isArray2, _i2, _ref4, v, arr, map, trees, _iterator3, _isArray3, _i3, _ref5, _v;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            //console.log(args);
                            data = think.isEmpty(args.data) ? "data" : args.data;
                            pid = !think.isEmpty(args.pid) ? args.pid : false;
                            cid = !think.isEmpty(args.cid) ? args.cid : false;
                            tree = !think.isEmpty(args.tree) ? args.tree : false;
                            isapp = !think.isEmpty(args.isapp) ? args.isapp : false;
                            limit = !think.isEmpty(args.limit) ? "10" : args.limit;
                            isindex = !think.isEmpty(args.isindex) ? args.isindex : false;
                            _context2.next = 9;
                            return think.model('category', think.config("db")).get_all_category();

                        case 9:
                            column = _context2.sent;

                            if (!(args.isnum == 1)) {
                                _context2.next = 28;
                                break;
                            }

                            _iterator2 = column, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 12:
                            if (!_isArray2) {
                                _context2.next = 18;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context2.next = 15;
                                break;
                            }

                            return _context2.abrupt('break', 28);

                        case 15:
                            _ref4 = _iterator2[_i2++];
                            _context2.next = 22;
                            break;

                        case 18:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context2.next = 21;
                                break;
                            }

                            return _context2.abrupt('break', 28);

                        case 21:
                            _ref4 = _i2.value;

                        case 22:
                            v = _ref4;
                            _context2.next = 25;
                            return think.model('document', think.config("db")).cache(1000).where({ category_id: v.id, status: [">", 0] }).count("id");

                        case 25:
                            v.doc_num = _context2.sent;

                        case 26:
                            _context2.next = 12;
                            break;

                        case 28:
                            //console.log(column);
                            arr = void 0;
                            //获取同级栏目

                            map = {};

                            if (!pid) {
                                _context2.next = 35;
                                break;
                            }

                            map.pid = think._.toInteger(pid);
                            arr = think._.filter(column, map);
                            _context2.next = 65;
                            break;

                        case 35:
                            if (!cid) {
                                _context2.next = 40;
                                break;
                            }

                            map.pid = think._.toInteger(cid);
                            arr = think._.filter(column, map);
                            // console.log(arr);
                            _context2.next = 65;
                            break;

                        case 40:
                            if (!tree) {
                                _context2.next = 45;
                                break;
                            }

                            trees = arr_to_tree(column, tree);
                            //console.log(trees)

                            arr = !think.isEmpty(trees) ? trees : false;
                            _context2.next = 65;
                            break;

                        case 45:
                            if (!(isapp || isapp == 0)) {
                                _context2.next = 65;
                                break;
                            }

                            map.isapp = 1;
                            if (think.isNumberString(isapp) || think.isNumber(isapp)) {
                                map.pid = think._.toInteger(isapp);
                            }
                            arr = think._.filter(column, map);

                            if (!isindex) {
                                _context2.next = 65;
                                break;
                            }

                            _iterator3 = arr, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 51:
                            if (!_isArray3) {
                                _context2.next = 57;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context2.next = 54;
                                break;
                            }

                            return _context2.abrupt('break', 65);

                        case 54:
                            _ref5 = _iterator3[_i3++];
                            _context2.next = 61;
                            break;

                        case 57:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context2.next = 60;
                                break;
                            }

                            return _context2.abrupt('break', 65);

                        case 60:
                            _ref5 = _i3.value;

                        case 61:
                            _v = _ref5;

                            _v.url = _v.url.replace(/channel/, 'column');

                        case 63:
                            _context2.next = 51;
                            break;

                        case 65:
                            context.ctx[data] = arr;
                            // console.log(arr);
                            return _context2.abrupt('return', callback(null, ''));

                        case 67:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function (_x4, _x5, _x6) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/**
 *获取导航标签
 * {chan}
 */

global.channel = function () {
    this.tags = ['channel'];
    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args);
    };
    this.run = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(context, args, callback) {
            var data, channel;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            data = think.isEmpty(args.data) ? "data" : args.data;
                            _context3.next = 3;
                            return think.model('channel', think.config("db")).get_channel_cache();

                        case 3:
                            channel = _context3.sent;

                            channel = arr_to_tree(channel, 0);
                            // console.log(channel);
                            context.ctx[data] = channel;
                            return _context3.abrupt('return', callback(null, ''));

                        case 7:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function (_x7, _x8, _x9) {
            return _ref6.apply(this, arguments);
        };
    }();
};
/**
 *获取分类分组标签
 *  {% groups data="groups",cid="1"%}
 */

global.groups = function () {
    this.tags = ['groups'];
    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args);
    };
    this.run = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(context, args, callback) {
            var data;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            data = think.isEmpty(args.data) ? "data" : args.data;
                            _context4.next = 3;
                            return think.model('category', think.config("db")).get_groups(args.cid);

                        case 3:
                            context.ctx[data] = _context4.sent;
                            return _context4.abrupt('return', callback(null, ''));

                        case 5:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function (_x10, _x11, _x12) {
            return _ref7.apply(this, arguments);
        };
    }();
};

/**
 * 获取数据标签
 * {% topic data = "data"%}
 * topic:标签名称
 * data:接受返回数据的变量名称，例: data = "data"
 * limit: 设置查询结果的条数，例: limit="10",limit="3,10"
 * cid: 栏目id ,单个栏目 cid="1",多个栏目 cid = "1,2,3,4" , 不写调取全部栏目
 * {{name|get_url(id)}}文章链接
 * type: 标签类型,hot-安装浏览量从高到底,level-安装优先级从高到低排序,默认安装更新时间排序
 * //{% topic data = "data",limit= "5",cid=category.id,type="hot"%}
 * position:1:列表推荐,2:频道推荐,4:首页推荐
 * ispic:是否包涵缩略图,1:包含缩略图的内容,2:不包含缩略图,默认所有
 * issub:1:包含自栏目,2:不包含自栏目,默认包含自栏目
 * isstu:1:获取副表内容,2:只从主表拿数据,默认只从主表拿
 * group:分组id，单个分组：group="1",多个分组 :group="1,2,3,4",不写调取全部分组。
 * where:查询条件''
 * tid ;分类信息id
 * tval;分类信息条件
 */
global.topic = function () {
    this.tags = ['topic'];
    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args);
    };
    this.run = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(context, args, callback) {
            var where, data, limit, cids, cidarr, _iterator4, _isArray4, _i4, _ref9, v, subcate, uid, cid, type, puid, topic, _v2, topicarr, stuwhere, _iterator5, _isArray5, _i5, _ref10, _v3, table, details;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            // console.log(args);
                            where = { 'status': 1, 'pid': 0 };
                            //'uid':['IN',[1,461]]

                            data = think.isEmpty(args.data) ? "data" : args.data;
                            limit = think.isEmpty(args.limit) ? "10" : args.limit;
                            //获取当前分类的所有子栏目

                            if (!(args.issub != 2)) {
                                _context5.next = 27;
                                break;
                            }

                            if (think.isEmpty(args.cid)) {
                                _context5.next = 27;
                                break;
                            }

                            cids = '' + args.cid;
                            cidarr = [];
                            _iterator4 = cids.split(","), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 8:
                            if (!_isArray4) {
                                _context5.next = 14;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context5.next = 11;
                                break;
                            }

                            return _context5.abrupt('break', 26);

                        case 11:
                            _ref9 = _iterator4[_i4++];
                            _context5.next = 18;
                            break;

                        case 14:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context5.next = 17;
                                break;
                            }

                            return _context5.abrupt('break', 26);

                        case 17:
                            _ref9 = _i4.value;

                        case 18:
                            v = _ref9;
                            _context5.next = 21;
                            return think.model('category', think.config("db")).get_sub_category(v);

                        case 21:
                            subcate = _context5.sent;

                            cidarr = cidarr.concat(subcate);
                            cidarr.push(Number(v));

                        case 24:
                            _context5.next = 8;
                            break;

                        case 26:

                            args.cid = unique(cidarr).sort();

                        case 27:
                            //admin
                            uid = think.isEmpty(args.uid) ? false : { 'uid': ['IN', [1, args.uid]] };

                            if (uid) {
                                where = think.extend({}, where, uid);
                            } else {
                                where = think.extend({}, where, { 'uid': 1 });
                            }
                            //subcate.push(cate.id);
                            cid = think.isEmpty(args.cid) ? false : { 'category_id': ['IN', args.cid] };

                            if (cid) {
                                where = think.extend({}, where, cid);
                            }
                            //分组
                            if (!think.isEmpty(args.group)) {
                                where = think.extend(where, { 'group_id': ['IN', args.group] });
                            }
                            type = 'update_time DESC';

                            if (!think.isEmpty(args.type)) {
                                if (args.type == "hot") {
                                    type = "view DESC";
                                } else if (args.type == "level") {
                                    type = "level DESC";
                                } else if (args.type == "today") {
                                    console.log("test ----" + time_start(new Date()) + "," + time_end(new Date()));
                                    where = think.extend(where, { 'update_time': ['between', time_start(new Date()) + ',' + time_end(new Date())] });
                                    // type="update_time"
                                } else if (args.type == "picture") {
                                    puid = args.uid;

                                    if (puid == 0) {
                                        puid = 1;
                                    }
                                    where = think.extend({}, where, { 'uid': puid });
                                } else if (args.type == "online") {

                                    where = think.extend({}, where, { 'online': 1 });
                                }
                            }
                            //推荐
                            if (!think.isEmpty(args.position)) {
                                where = think.extend(where, { position: args.position });
                            }
                            //是否缩略图
                            if (!think.isEmpty(args.ispic)) {
                                if (args.ispic == 1) {
                                    where = think.extend(where, { cover_id: ['>', 0] });
                                } else if (args.ispic == 2) {
                                    where = think.extend(where, { cover_id: 0 });
                                }
                            }

                            // console.log(where);
                            topic = void 0;

                            if (!(args.tid && !think.isEmpty(args.tval))) {
                                _context5.next = 44;
                                break;
                            }

                            for (_v2 in JSON.parse(args.tval)) {
                                where["t." + _v2] = JSON.parse(args.tval)[_v2];
                            }
                            // console.log(where);
                            _context5.next = 41;
                            return think.model('document', think.config("db")).join({
                                table: "type_optionvalue" + args.tid,
                                join: "left", // 有 left,right,inner 3 个值
                                as: "t",
                                on: ["id", "tid"]

                            }).where(where).limit(limit).order(type).select();

                        case 41:
                            topic = _context5.sent;
                            _context5.next = 47;
                            break;

                        case 44:
                            _context5.next = 46;
                            return think.model('document', think.config("db")).where(where).limit(limit).order(type).select();

                        case 46:
                            topic = _context5.sent;

                        case 47:
                            if (!(args.isstu == 1)) {
                                _context5.next = 73;
                                break;
                            }

                            topicarr = [];
                            stuwhere = {};
                            _iterator5 = topic, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

                        case 51:
                            if (!_isArray5) {
                                _context5.next = 57;
                                break;
                            }

                            if (!(_i5 >= _iterator5.length)) {
                                _context5.next = 54;
                                break;
                            }

                            return _context5.abrupt('break', 71);

                        case 54:
                            _ref10 = _iterator5[_i5++];
                            _context5.next = 61;
                            break;

                        case 57:
                            _i5 = _iterator5.next();

                            if (!_i5.done) {
                                _context5.next = 60;
                                break;
                            }

                            return _context5.abrupt('break', 71);

                        case 60:
                            _ref10 = _i5.value;

                        case 61:
                            _v3 = _ref10;
                            _context5.next = 64;
                            return think.model("model", think.config("db")).get_table_name(_v3.model_id);

                        case 64:
                            table = _context5.sent;
                            _context5.next = 67;
                            return think.model(table, think.config("db")).find(_v3.id);

                        case 67:
                            details = _context5.sent;

                            topicarr.push(think.extend({}, _v3, details));

                        case 69:
                            _context5.next = 51;
                            break;

                        case 71:
                            if (!think.isEmpty(args.stuwhere)) {
                                stuwhere = JSON.parse(args.stuwhere);
                                topicarr = think._.filter(topicarr, stuwhere);
                            }
                            topic = topicarr;

                        case 73:
                            // console.log(topic)
                            context.ctx[data] = topic;
                            return _context5.abrupt('return', callback(null, ''));

                        case 75:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function (_x13, _x14, _x15) {
            return _ref8.apply(this, arguments);
        };
    }();
};

/**
 *获取话题标签
 * {% keywords data ="kws"%}
 *
 * data:接受返回数据的变量名称，例: data = "data"
 * limit: 设置查询结果的条数，例: limit="10",limit="3,10"
 * type: hot
 */

global.keywords = function () {
    this.tags = ['keywords'];
    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args);
    };
    this.run = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(context, args, callback) {
            var data, where, limit, mod, type, keywrod, _iterator6, _isArray6, _i6, _ref12, k;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            data = think.isEmpty(args.data) ? "data" : args.data;
                            where = {};
                            limit = think.isEmpty(args.limit) ? "10" : args.limit;
                            mod = think.isEmpty(args.mod) ? "" : "," + args.mod;
                            type = 'discuss_count_update DESC';

                            if (!think.isEmpty(args.type)) {
                                if (args.type == "hot") {
                                    type = "videonum DESC";
                                }
                            }
                            _context6.next = 8;
                            return think.model('keyword', think.config("db")).where(where).limit(limit).order(type).select();

                        case 8:
                            keywrod = _context6.sent;
                            _iterator6 = keywrod, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

                        case 10:
                            if (!_isArray6) {
                                _context6.next = 16;
                                break;
                            }

                            if (!(_i6 >= _iterator6.length)) {
                                _context6.next = 13;
                                break;
                            }

                            return _context6.abrupt('break', 24);

                        case 13:
                            _ref12 = _iterator6[_i6++];
                            _context6.next = 20;
                            break;

                        case 16:
                            _i6 = _iterator6.next();

                            if (!_i6.done) {
                                _context6.next = 19;
                                break;
                            }

                            return _context6.abrupt('break', 24);

                        case 19:
                            _ref12 = _i6.value;

                        case 20:
                            k = _ref12;

                            k.url = '/t/' + k.keyname + mod;

                        case 22:
                            _context6.next = 10;
                            break;

                        case 24:
                            context.ctx[data] = keywrod;
                            return _context6.abrupt('return', callback(null, ''));

                        case 26:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function (_x16, _x17, _x18) {
            return _ref11.apply(this, arguments);
        };
    }();
};
/**
 *获取相关话题
 * {% rkeywords data ="topic",type="0",mod_id="8",id="1"%}
 *
 * data:接受返回数据的变量名称，例: data = "data"
 * limit: 设置查询结果的条数，例: limit="10",limit="3,10"
 * type: 0系统模型，1,独立模型
 * mod_id:模型id,
 * id:文章的的id,
 */
global.rkeywords = function () {
    this.tags = ['rkeywords'];
    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args);
    };
    this.run = function () {
        var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(context, args, callback) {
            var data, where, limit, type, mod_id, id, keyword, topicid, _iterator7, _isArray7, _i7, _ref14, k;

            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            console.log(args);
                            data = think.isEmpty(args.data) ? "data" : args.data;
                            where = {};
                            limit = think.isEmpty(args.limit) ? "5" : args.limit;
                            type = think.isEmpty(args.type) ? "0" : args.type;
                            mod_id = think.isEmpty(args.mod_id) ? "1" : args.mod_id;
                            id = think.isEmpty(args.id) ? "0" : args.id;

                            where.docid = id;
                            where.mod_type = type;
                            where.mod_id = mod_id;
                            keyword = void 0;
                            _context7.next = 13;
                            return think.model("keyword_data", think.config("db")).where(where).getField("tagid");

                        case 13:
                            topicid = _context7.sent;

                            if (think.isEmpty(topicid)) {
                                _context7.next = 33;
                                break;
                            }

                            _context7.next = 17;
                            return think.model("keyword", think.config("db")).where({ id: ["IN", topicid] }).limit(limit).select();

                        case 17:
                            keyword = _context7.sent;
                            _iterator7 = keyword, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);

                        case 19:
                            if (!_isArray7) {
                                _context7.next = 25;
                                break;
                            }

                            if (!(_i7 >= _iterator7.length)) {
                                _context7.next = 22;
                                break;
                            }

                            return _context7.abrupt('break', 33);

                        case 22:
                            _ref14 = _iterator7[_i7++];
                            _context7.next = 29;
                            break;

                        case 25:
                            _i7 = _iterator7.next();

                            if (!_i7.done) {
                                _context7.next = 28;
                                break;
                            }

                            return _context7.abrupt('break', 33);

                        case 28:
                            _ref14 = _i7.value;

                        case 29:
                            k = _ref14;

                            k.url = '/t/' + k.keyname + ',' + mod_id;

                        case 31:
                            _context7.next = 19;
                            break;

                        case 33:
                            //console.log(keyword);
                            context.ctx[data] = keyword;
                            return _context7.abrupt('return', callback(null, ''));

                        case 35:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        return function (_x19, _x20, _x21) {
            return _ref13.apply(this, arguments);
        };
    }();
};

/**
 * thinkjs model 万能数据调用标签
 * {% model data ="data"%}
 *
 * data:接受返回数据的变量名称，例: data = "data"
 * table:要查询的主表比如 table = "user"
 * join :{Object} 要组合的查询语句，默认为 LEFT JOIN
 * field {String} 设置要查询的字段，必须是字符串
 * fieldReverse:{String} 反选字段，即查询的时候不包含这些字段
 * alias:{String} 表别名
 * limit(offset, length) :offset {Number} 设置查询的起始位置 length {Number} 设置查询的数据长度
 * where(where):where {Object} where 条件
 * order {String} 排序方式
 * cache {Number} 缓存有效时间，单位为秒,建议1000秒
 */
global.model = function () {
    this.tags = ['model'];
    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args);
    };
    this.run = function () {
        var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(context, args, callback) {
            var data, table, join, fieldReverse, alias, limit, where, order, cache, field, model, ret;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            console.log(args);
                            data = think.isEmpty(args.data) ? "data" : args.data;
                            table = think.isEmpty(args.table) ? "5" : args.table;
                            join = think.isEmpty(args.join) ? false : JSON.parse(args.join);
                            fieldReverse = think.isEmpty(args.fieldReverse) ? false : args.fieldReverse;
                            alias = think.isEmpty(args.alias) ? false : args.alias;
                            limit = think.isEmpty(args.limit) ? false : args.limit;
                            where = think.isEmpty(args.where) ? false : JSON.parse(args.where);
                            order = think.isEmpty(args.order) ? false : args.order;
                            cache = think.isEmpty(args.cache) ? false : args.cache;
                            field = think.isEmpty(args.field) ? false : args.field;
                            model = think.model(table, think.config("db"));
                            //表别名

                            if (cache) {
                                model.cache(cache);
                            }
                            //表别名
                            if (alias) {
                                model.alias(alias);
                            }
                            //where
                            if (where) {
                                model.where(where);
                            }
                            //order
                            if (order) {
                                model.order(order);
                            }
                            //查询的字段
                            if (field) {
                                model.field(field);
                            }
                            //排除字段
                            if (fieldReverse) {
                                model.fieldReverse(fieldReverse);
                            }
                            //查询条数
                            if (limit) {
                                model.limit(limit);
                            }
                            //join查询c
                            if (join) {
                                model.join(join);
                            }

                            _context8.next = 22;
                            return model.select();

                        case 22:
                            ret = _context8.sent;


                            //console.log(ret);
                            context.ctx[data] = ret;
                            return _context8.abrupt('return', callback(null, ''));

                        case 25:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        return function (_x22, _x23, _x24) {
            return _ref15.apply(this, arguments);
        };
    }();
};
//# sourceMappingURL=tags.js.map