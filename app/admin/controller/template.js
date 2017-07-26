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

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    _class.prototype.init = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(http) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _Base.prototype.init.call(this, http);
                            this.tactive = "template";
                            // 当前使用的模版组

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function init(_x) {
            return _ref.apply(this, arguments);
        }

        return init;
    }();
    //init


    _class.prototype.__before = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _Base.prototype.__before.call(this);

                        case 2:
                            _context2.next = 4;
                            return this.get_temp_group();

                        case 4:
                            this.assign({
                                "navxs": true
                            });

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function __before() {
            return _ref2.apply(this, arguments);
        }

        return __before;
    }();
    /**
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            //auto render template file index_index.html
                            this.meta_title = '模板管理';
                            return _context3.abrupt('return', this.display());

                        case 2:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function indexAction() {
            return _ref3.apply(this, arguments);
        }

        return indexAction;
    }();

    /**
     * 网站首页模版编辑
     * @returns {*}
       */


    _class.prototype.homeAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var gid, map, temp, temppath, templateFile, data, bak, res;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return this.model("temp_group").where({ isdefault: 1 }).getField("gid", true);

                        case 2:
                            gid = _context4.sent;
                            map = {
                                module: "topic",
                                controller: "index",
                                action: "index",
                                type: this.param("type") || 1,
                                gid: gid
                            };
                            _context4.next = 6;
                            return this.model("temp").where(map).find();

                        case 6:
                            temp = _context4.sent;
                            temppath = void 0;

                            if (temp.type == 2) {
                                temppath = think.ROOT_PATH + '/view/' + temp.module + '/mobile/';
                            } else {
                                temppath = think.ROOT_PATH + '/view/' + temp.module + '/';
                            }
                            templateFile = '' + temppath + temp.controller + think.config("view.file_depr", undefined, "topic") + temp.action + this.config("view.file_ext");

                            if (!this.isPost()) {
                                _context4.next = 40;
                                break;
                            }

                            data = this.post();

                            data.id = temp.id;
                            data.module = map.module;
                            data.controller = map.container;
                            data.action = map.action;
                            data.name = temp.name;
                            data.type = temp.type;
                            data.gid = temp.gid;
                            console.log(data);
                            //await this.model("temp").add(data);
                            temp.pid = temp.id;
                            delete temp.id;
                            temp.baktime = new Date().getTime();
                            temp.lastuser = this.user.uid;
                            console.log(temp);
                            // return false;
                            //修改前先备份

                            if (!(data.html != temp.html)) {
                                _context4.next = 37;
                                break;
                            }

                            _context4.next = 28;
                            return this.model("temp_bak").add(temp);

                        case 28:
                            bak = _context4.sent;
                            _context4.next = 31;
                            return this.model("temp").update(data);

                        case 31:
                            res = _context4.sent;

                            if (think.isEmpty(res)) {
                                _context4.next = 35;
                                break;
                            }

                            _fs2.default.writeFileSync(templateFile, data.html);
                            return _context4.abrupt('return', this.success({ name: "添加成功!" }));

                        case 35:
                            _context4.next = 38;
                            break;

                        case 37:
                            return _context4.abrupt('return', this.fail("请先修改模板!"));

                        case 38:
                            _context4.next = 45;
                            break;

                        case 40:
                            //首页网站编辑
                            //console.log(this.adminmenu["10"]);
                            this.meta_title = '首页模板';

                            console.log(templateFile);
                            //let tempcon = fs.readFileSync(templateFile,"utf8");

                            console.log(temp);
                            this.assign('temp', temp);
                            return _context4.abrupt('return', this.display());

                        case 45:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function homeAction() {
            return _ref4.apply(this, arguments);
        }

        return homeAction;
    }();
    //模板修改记录


    _class.prototype.tempbakAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var gid, map, list;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return this.model("temp_group").where({ isdefault: 1 }).getField("gid", true);

                        case 2:
                            gid = _context5.sent;
                            map = this.get();

                            map.gid = gid;
                            _context5.next = 7;
                            return this.model("temp_bak").where(map).limit(20).order("baktime DESC").select();

                        case 7:
                            list = _context5.sent;

                            this.assign("list", list);
                            this.assign("title", "修改记录");
                            return _context5.abrupt('return', this.display());

                        case 11:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function tempbakAction() {
            return _ref5.apply(this, arguments);
        }

        return tempbakAction;
    }();
    //还原模板


    _class.prototype.tempreplyAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var id, bak, temppath, templateFile;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            id = this.get("id");
                            _context6.next = 3;
                            return this.model("temp_bak").where({ pid: id }).find();

                        case 3:
                            bak = _context6.sent;

                            if (think.isEmpty(bak)) {
                                _context6.next = 12;
                                break;
                            }

                            delete bak.id;
                            _context6.next = 8;
                            return this.model("temp").where({ id: id }).update(bak);

                        case 8:
                            temppath = void 0;

                            if (bak.type == 2) {
                                temppath = think.ROOT_PATH + '/view/' + bak.module + '/mobile/';
                            } else {
                                temppath = think.ROOT_PATH + '/view/' + bak.module + '/';
                            }
                            templateFile = '' + temppath + bak.controller + think.config("view.file_depr", undefined, "topic") + bak.action + this.config("view.file_ext");

                            _fs2.default.writeFileSync(templateFile, bak.html);

                        case 12:
                            return _context6.abrupt('return', this.success({ name: "还原成功!" }));

                        case 13:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function tempreplyAction() {
            return _ref6.apply(this, arguments);
        }

        return tempreplyAction;
    }();
    //封面模板


    _class.prototype.channelAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var gid, map, temp, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return this.model("temp_group").where({ isdefault: 1 }).getField("gid", true);

                        case 2:
                            gid = _context7.sent;
                            map = {
                                module: "topic",
                                controller: "cover",
                                type: this.param("type") || 1,
                                gid: gid
                            };
                            _context7.next = 6;
                            return this.model("temp").where(map).page(this.get('page')).countSelect();

                        case 6:
                            temp = _context7.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(temp);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', temp.data);

                            this.meta_title = '封面模板';

                            return _context7.abrupt('return', this.display());

                        case 14:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function channelAction() {
            return _ref7.apply(this, arguments);
        }

        return channelAction;
    }();
    //栏目模版


    _class.prototype.columnAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var gid, map, temp, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            _context8.next = 2;
                            return this.model("temp_group").where({ isdefault: 1 }).getField("gid", true);

                        case 2:
                            gid = _context8.sent;
                            map = {
                                module: "topic",
                                controller: "list",
                                type: this.param("type") || 1,
                                gid: gid
                            };
                            _context8.next = 6;
                            return this.model("temp").where(map).page(this.get('page')).countSelect();

                        case 6:
                            temp = _context8.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(temp);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', temp.data);
                            this.meta_title = '列表模板';

                            return _context8.abrupt('return', this.display());

                        case 14:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function columnAction() {
            return _ref8.apply(this, arguments);
        }

        return columnAction;
    }();
    //详情模版


    _class.prototype.detailAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var gid, map, temp, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            _context9.next = 2;
                            return this.model("temp_group").where({ isdefault: 1 }).getField("gid", true);

                        case 2:
                            gid = _context9.sent;
                            map = {
                                module: "topic",
                                controller: "detail",
                                type: this.param("type") || 1,
                                gid: gid
                            };
                            _context9.next = 6;
                            return this.model("temp").where(map).page(this.get('page')).countSelect();

                        case 6:
                            temp = _context9.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(temp);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', temp.data);
                            this.meta_title = '内容模板';

                            return _context9.abrupt('return', this.display());

                        case 14:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function detailAction() {
            return _ref9.apply(this, arguments);
        }

        return detailAction;
    }();
    //单页模版


    _class.prototype.spAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var gid, map, temp, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            _context10.next = 2;
                            return this.model("temp_group").where({ isdefault: 1 }).getField("gid", true);

                        case 2:
                            gid = _context10.sent;
                            map = {
                                module: "topic",
                                controller: "sp",
                                type: this.param("type") || 1,
                                gid: gid
                            };

                            console.log(map);
                            _context10.next = 7;
                            return this.model("temp").where(map).page(this.get('page')).countSelect();

                        case 7:
                            temp = _context10.sent;

                            console.log(temp);
                            Pages = think.adapter("pages", "page");
                            pages = new Pages(this.http);
                            page = pages.pages(temp);

                            this.assign('pagerData', page);
                            this.assign('list', temp.data);
                            this.meta_title = '单页模版';
                            return _context10.abrupt('return', this.display());

                        case 16:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function spAction() {
            return _ref10.apply(this, arguments);
        }

        return spAction;
    }();
    //公共模版


    _class.prototype.incAction = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
            var gid, map, temp, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            _context11.next = 2;
                            return this.model("temp_group").where({ isdefault: 1 }).getField("gid", true);

                        case 2:
                            gid = _context11.sent;
                            map = {
                                module: "topic",
                                controller: "inc",
                                type: this.param("type") || 1,
                                gid: gid
                            };
                            _context11.next = 6;
                            return this.model("temp").where(map).page(this.get('page')).countSelect();

                        case 6:
                            temp = _context11.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(temp);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', temp.data);
                            this.meta_title = '公共模板';

                            return _context11.abrupt('return', this.display());

                        case 14:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function incAction() {
            return _ref11.apply(this, arguments);
        }

        return incAction;
    }();
    //编辑模板


    _class.prototype.editAction = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
            var id, temp, data, temppath, templateFile, bak, res;
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            id = this.param("id");
                            _context12.next = 3;
                            return this.model("temp").find(id);

                        case 3:
                            temp = _context12.sent;

                            if (!this.isPost()) {
                                _context12.next = 31;
                                break;
                            }

                            temp.pid = temp.id;
                            delete temp.id;
                            temp.baktime = new Date().getTime();
                            temp.lastuser = this.user.uid;
                            data = this.post();
                            temppath = void 0;

                            if (temp.type == 2) {
                                temppath = think.ROOT_PATH + '/view/' + temp.module + '/mobile/';
                            } else {
                                temppath = think.ROOT_PATH + '/view/' + temp.module + '/';
                            }
                            templateFile = '' + temppath + temp.controller + think.config("view.file_depr", undefined, "topic") + temp.action + this.config("view.file_ext");

                            console.log(data);
                            console.log(temp);
                            console.log(templateFile);
                            //检查是否修改内容

                            if (!(data.html == temp.html)) {
                                _context12.next = 20;
                                break;
                            }

                            return _context12.abrupt('return', this.fail("请先修改模板!"));

                        case 20:
                            _context12.next = 22;
                            return this.model("temp_bak").add(temp);

                        case 22:
                            bak = _context12.sent;
                            _context12.next = 25;
                            return this.model("temp").update(data);

                        case 25:
                            res = _context12.sent;

                            if (think.isEmpty(res)) {
                                _context12.next = 29;
                                break;
                            }

                            _fs2.default.writeFileSync(templateFile, data.html);
                            return _context12.abrupt('return', this.success({ name: "修改成功!" }));

                        case 29:
                            _context12.next = 38;
                            break;

                        case 31:

                            if (temp.action.indexOf("index") == 0 && temp.controller == 'topic') {
                                this.active = "admin/template/channel";
                            }
                            if (temp.action.indexOf("list") == 0) {
                                this.active = "admin/template/column";
                            }
                            if (temp.action.indexOf("detail") == 0) {
                                this.active = "admin/template/detail";
                            }
                            if (temp.controller == 'sp') {
                                this.active = "admin/template/sp";
                            }
                            this.meta_title = "修改模板";
                            this.assign({
                                "navxs": true,
                                "temp": temp
                            });
                            return _context12.abrupt('return', this.display());

                        case 38:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        function editAction() {
            return _ref12.apply(this, arguments);
        }

        return editAction;
    }();
    //添加模板


    _class.prototype.addAction = function () {
        var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13() {
            var gid, data, temppath, templateFile, res, type, temptype;
            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            _context13.next = 2;
                            return this.model("temp_group").where({ isdefault: 1 }).getField("gid", true);

                        case 2:
                            gid = _context13.sent;

                            if (!this.isPost()) {
                                _context13.next = 40;
                                break;
                            }

                            data = this.post();
                            _context13.t0 = data.temptype;
                            _context13.next = _context13.t0 === "channel" ? 8 : _context13.t0 === "column" ? 12 : _context13.t0 === "detail" ? 16 : _context13.t0 === "inc" ? 20 : _context13.t0 === "sp" ? 24 : 28;
                            break;

                        case 8:
                            data.module = 'topic';
                            data.controller = 'cover';
                            data.gid = gid;
                            return _context13.abrupt('break', 28);

                        case 12:
                            data.module = 'topic';
                            data.controller = 'list';
                            data.gid = gid;
                            return _context13.abrupt('break', 28);

                        case 16:
                            data.module = 'topic';
                            data.controller = 'detail';
                            data.gid = gid;
                            return _context13.abrupt('break', 28);

                        case 20:
                            data.module = 'topic';
                            data.controller = 'inc';
                            data.gid = gid;
                            return _context13.abrupt('break', 28);

                        case 24:
                            data.module = 'topic';
                            data.controller = 'sp';
                            data.gid = gid;
                            return _context13.abrupt('break', 28);

                        case 28:
                            temppath = void 0;

                            if (data.type == 2) {
                                temppath = think.ROOT_PATH + '/view/' + data.module + '/mobile/';
                            } else {
                                temppath = think.ROOT_PATH + '/view/' + data.module + '/';
                            }
                            templateFile = '' + temppath + data.controller + think.config("view", undefined, "topic").file_depr + data.action + this.config("view.file_ext");

                            console.log(templateFile);
                            _context13.next = 34;
                            return this.model("temp").add(data);

                        case 34:
                            res = _context13.sent;

                            if (think.isEmpty(res)) {
                                _context13.next = 38;
                                break;
                            }

                            _fs2.default.writeFileSync(templateFile, data.html);
                            return _context13.abrupt('return', this.success({ name: "添加成功!" }));

                        case 38:
                            _context13.next = 59;
                            break;

                        case 40:
                            type = this.get("type");
                            temptype = this.get("temptype");
                            _context13.t1 = temptype;
                            _context13.next = _context13.t1 === "channel" ? 45 : _context13.t1 === "column" ? 47 : _context13.t1 === "detail" ? 49 : _context13.t1 === "inc" ? 51 : _context13.t1 === "sp" ? 53 : 55;
                            break;

                        case 45:
                            this.assign("title", "封面模板");
                            return _context13.abrupt('break', 55);

                        case 47:
                            this.assign("title", "列表模板");
                            return _context13.abrupt('break', 55);

                        case 49:
                            this.assign("title", "内容模板");
                            return _context13.abrupt('break', 55);

                        case 51:
                            this.assign("title", "公共模板");
                            return _context13.abrupt('break', 55);

                        case 53:
                            this.assign("title", "单页模版");
                            return _context13.abrupt('break', 55);

                        case 55:
                            this.active = "admin/template/" + temptype;
                            this.meta_title = "添加模板";
                            this.assign({
                                "navxs": true,
                                "type": type,
                                "temptype": temptype
                            });
                            return _context13.abrupt('return', this.display());

                        case 59:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        function addAction() {
            return _ref13.apply(this, arguments);
        }

        return addAction;
    }();

    /**
     * 删除模版
     */


    _class.prototype.delAction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14() {
            var id, temp, temppath, templateFile, isdel;
            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            id = this.get("id");
                            _context14.next = 3;
                            return this.model("temp").find(id);

                        case 3:
                            temp = _context14.sent;

                            //console.log(temp);
                            temppath = void 0;

                            if (temp.type == 2) {
                                temppath = think.ROOT_PATH + '/view/' + temp.module + '/mobile/';
                            } else {
                                temppath = think.ROOT_PATH + '/view/' + temp.module + '/';
                            }
                            templateFile = '' + temppath + temp.controller + think.config("view", undefined, "topic").file_depr + temp.action + this.config("view.file_ext");
                            //console.log(templateFile);

                            if (think.isFile(templateFile)) {
                                _fs2.default.unlinkSync(templateFile);
                            }
                            _context14.next = 10;
                            return this.model("temp").delete(id);

                        case 10:
                            isdel = _context14.sent;

                            if (!isdel) {
                                _context14.next = 15;
                                break;
                            }

                            return _context14.abrupt('return', this.success({ name: "删除成功!" }));

                        case 15:
                            return _context14.abrupt('return', this.fail("删除失败!"));

                        case 16:
                        case 'end':
                            return _context14.stop();
                    }
                }
            }, _callee14, this);
        }));

        function delAction() {
            return _ref14.apply(this, arguments);
        }

        return delAction;
    }();
    // 获取模版组


    _class.prototype.get_temp_group = function () {
        var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15() {
            var group;
            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            group = this.model("temp_group").select();

                            this.assign("temp_group", group);

                        case 2:
                        case 'end':
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        function get_temp_group() {
            return _ref15.apply(this, arguments);
        }

        return get_temp_group;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=template.js.map