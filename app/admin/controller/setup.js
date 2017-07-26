// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

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

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    /**
     * index action
     * @return {Promise} []
     */
    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.db = this.model('setup');
        this.tactive = "setup";
    };
    //加载配置


    _class.prototype.loadsetup = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var fs, setup, path1, data, data1;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            fs = require('fs');
                            _context.next = 3;
                            return this.model("setup").lists();

                        case 3:
                            setup = _context.sent;
                            path1 = think.getPath("common", "config");

                            if (think.isDir(think.ROOT_PATH + '/src')) {
                                data = "export default" + (0, _stringify2.default)(setup);

                                fs.writeFileSync(think.ROOT_PATH + '/src/common/config/setup.js', data);
                            }
                            data1 = "exports.__esModule = true;exports.default =" + (0, _stringify2.default)(setup);

                            fs.writeFileSync(path1 + '/setup.js', data1);

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function loadsetup() {
            return _ref.apply(this, arguments);
        }

        return loadsetup;
    }();

    _class.prototype.indexAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var id, type, list;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.loadsetup();

                        case 2:
                            //auto render template file index_index.html
                            id = this.get('id') || 1;
                            type = this.setup.CONFIG_GROUP_LIST;
                            _context2.next = 6;
                            return this.model("setup").where({ 'status': 1, 'group': id }).field('id,name,title,extra,value,remark,type').order('sort').select();

                        case 6:
                            list = _context2.sent;

                            if (list) {
                                this.assign('list', list);
                            }
                            this.assign({
                                "meta_title": type[id] + "设置",
                                "id": id
                            });
                            this.meta_title = '网站配置';
                            return _context2.abrupt('return', this.display());

                        case 11:
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

    _class.prototype.groupAction = function groupAction() {
        this.meta_title = "配置管理";
        return this.display();
    };

    _class.prototype.groupdataAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var _this2 = this;

            var map, gets, start, length, draw, key, lists, data;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!this.isGet()) {
                                _context3.next = 16;
                                break;
                            }

                            map = {};

                            map.status = 1;
                            gets = this.get();
                            start = parseInt(gets.start);
                            length = parseInt(gets.length);
                            draw = gets.draw;
                            key = gets['search[value]'];

                            map["name|title"] = ["like", "%" + key + "%"];
                            if (gets.group) {
                                map.group = gets.group || 0;
                            }
                            //如果缓存 userList 不存在，则查询数据库，并将值设置到缓存中
                            _context3.next = 12;
                            return this.db.limit(start, length).where(map).order("sort ASC").countSelect();

                        case 12:
                            lists = _context3.sent;

                            lists.data.forEach(function (v) {
                                if (v.group) {
                                    v.group = _this2.setup.CONFIG_GROUP_LIST[v.group];
                                } else {
                                    v.group = "未分组";
                                }
                                v.type = _this2.setup.CONFIG_TYPE_LIST[v.type];
                            });

                            data = {
                                "draw": draw,
                                "recordsTotal": lists.count,
                                "recordsFiltered": lists.count,
                                "data": lists.data
                            };
                            return _context3.abrupt('return', this.json(data));

                        case 16:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function groupdataAction() {
            return _ref3.apply(this, arguments);
        }

        return groupdataAction;
    }();

    /**
     * 新增配置
     *
     */


    _class.prototype.addAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var data, addres;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context4.next = 17;
                                break;
                            }

                            data = this.post();

                            data.status = 1;
                            data.update_time = new Date().valueOf();
                            _context4.next = 6;
                            return this.db.add(data);

                        case 6:
                            addres = _context4.sent;

                            if (!addres) {
                                _context4.next = 14;
                                break;
                            }

                            think.cache("setup", null);
                            _context4.next = 11;
                            return this.loadsetup();

                        case 11:
                            return _context4.abrupt('return', this.json(1));

                        case 14:
                            return _context4.abrupt('return', this.json(0));

                        case 15:
                            _context4.next = 21;
                            break;

                        case 17:
                            this.assign({
                                "action": "/admin/setup/add"
                            });
                            this.active = "admin/model/index";
                            this.meta_title = "新增配置";
                            this.display();

                        case 21:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function addAction() {
            return _ref4.apply(this, arguments);
        }

        return addAction;
    }();
    //编辑配置


    _class.prototype.editAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var data, upres, map, info;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context5.next = 17;
                                break;
                            }

                            data = this.post();

                            data.status = 1;
                            data.create_time = new Date().valueOf();
                            _context5.next = 6;
                            return this.db.update(data);

                        case 6:
                            upres = _context5.sent;

                            if (!upres) {
                                _context5.next = 14;
                                break;
                            }

                            think.cache("setup", null);
                            _context5.next = 11;
                            return this.loadsetup();

                        case 11:
                            return _context5.abrupt('return', this.json(1));

                        case 14:
                            return _context5.abrupt('return', this.json(0));

                        case 15:
                            _context5.next = 27;
                            break;

                        case 17:
                            map = {};

                            map.id = this.get("id");
                            _context5.next = 21;
                            return this.db.where(map).find();

                        case 21:
                            info = _context5.sent;

                            this.assign("info", info);
                            this.assign({
                                "action": "/admin/setup/edit"
                            });
                            this.active = "admin/model/index";
                            this.meta_title = "编辑新增";
                            this.display();

                        case 27:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function editAction() {
            return _ref5.apply(this, arguments);
        }

        return editAction;
    }();

    _class.prototype.saveAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var post, v;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            post = this.post();
                            //console.log(post);

                            for (v in post) {
                                this.db.where({ name: v }).update({ value: post[v] });
                            }
                            think.cache("setup", null);
                            _context6.next = 5;
                            return this.loadsetup();

                        case 5:
                            this.json(1);

                        case 6:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function saveAction() {
            return _ref6.apply(this, arguments);
        }

        return saveAction;
    }();

    //删除配置


    _class.prototype.delAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var id, res;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            id = this.get("id");
                            _context7.next = 3;
                            return this.db.where({ id: id }).delete();

                        case 3:
                            res = _context7.sent;

                            if (!res) {
                                _context7.next = 11;
                                break;
                            }

                            think.cache("setup", null);
                            _context7.next = 8;
                            return this.loadsetup();

                        case 8:
                            return _context7.abrupt('return', this.json(1));

                        case 11:
                            return _context7.abrupt('return', this.json(0));

                        case 12:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function delAction() {
            return _ref7.apply(this, arguments);
        }

        return delAction;
    }();
    /**
     * 添加配置异步验证数据
     * @returns {Promise|*}
     */


    _class.prototype.parsleyAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var data, res;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            //验证
                            data = this.get();
                            // console.log(data);

                            _context8.next = 3;
                            return this.db.where(data).find();

                        case 3:
                            res = _context8.sent;

                            if (!think.isEmpty(res)) {
                                _context8.next = 8;
                                break;
                            }

                            return _context8.abrupt('return', this.json(1));

                        case 8:
                            return _context8.abrupt('return', this.json(0));

                        case 9:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function parsleyAction() {
            return _ref8.apply(this, arguments);
        }

        return parsleyAction;
    }();

    _class.prototype.aabbAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var value;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            _context9.next = 2;
                            return this.model("menu").getallmenu();

                        case 2:
                            value = _context9.sent;

                            this.end(value);
                            //fs.writeFileSync(filename, obj, [options])

                        case 4:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function aabbAction() {
            return _ref9.apply(this, arguments);
        }

        return aabbAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=setup.js.map