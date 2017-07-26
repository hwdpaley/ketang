// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------

'use strict';
/**
 * 插件后台控制器
 * 如果插件有后台管理业务写在这个控制器里面
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

var _admin = require('../admin.js');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    /**
     * index action
     * 插件管理入口
     * 广告管理列表
     * @return {Promise} []
     */
    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var data, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.model("ext_ad_space").page(this.get('page')).order("spaceid DESC").countSelect();

                        case 2:
                            data = _context.sent;

                            //console.log(data);
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);
                            return _context.abrupt('return', this.display());

                        case 9:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function indexAction() {
            return _ref.apply(this, arguments);
        }

        return indexAction;
    }();

    /**
     * 添加广告位
     */


    _class.prototype.addspaceAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var data, res, temp;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context2.next = 12;
                                break;
                            }

                            data = this.post();
                            _context2.next = 4;
                            return this.model('ext_ad_space').add(data);

                        case 4:
                            res = _context2.sent;

                            if (!res) {
                                _context2.next = 9;
                                break;
                            }

                            return _context2.abrupt('return', this.success({ name: "添加成功!" }));

                        case 9:
                            return _context2.abrupt('return', this.fail("添加失败!"));

                        case 10:
                            _context2.next = 18;
                            break;

                        case 12:
                            _context2.next = 14;
                            return this.model('ext_ad_temp').field("tempid,title,name").select();

                        case 14:
                            temp = _context2.sent;

                            //console.log(temp);
                            this.assign("temp", temp);
                            this.meta_title = "添加广告位";
                            return _context2.abrupt('return', this.display());

                        case 18:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function addspaceAction() {
            return _ref2.apply(this, arguments);
        }

        return addspaceAction;
    }();

    /**
     * 编辑广告位
     * @returns {Promise.<void>}
     */


    _class.prototype.editspaceAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var data, res, spaceid, temp, space;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context3.next = 12;
                                break;
                            }

                            data = this.post();
                            _context3.next = 4;
                            return this.model('ext_ad_space').where({ spaceid: data.spaceid }).update(data);

                        case 4:
                            res = _context3.sent;

                            if (!res) {
                                _context3.next = 9;
                                break;
                            }

                            return _context3.abrupt('return', this.success({ name: "更新成功!" }));

                        case 9:
                            return _context3.abrupt('return', this.fail("更新失败!"));

                        case 10:
                            _context3.next = 23;
                            break;

                        case 12:
                            spaceid = this.get("spaceid");
                            _context3.next = 15;
                            return this.model('ext_ad_temp').select();

                        case 15:
                            temp = _context3.sent;

                            //console.log(temp);
                            this.assign("temp", temp);
                            _context3.next = 19;
                            return this.model('ext_ad_space').find({ where: { spaceid: spaceid } });

                        case 19:
                            space = _context3.sent;

                            this.assign("space", space);
                            this.meta_title = "添加广告位";
                            return _context3.abrupt('return', this.display());

                        case 23:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function editspaceAction() {
            return _ref3.apply(this, arguments);
        }

        return editspaceAction;
    }();
    /**
     * 调用代码
     * @returns {Promise.<void>}
     */


    _class.prototype.codeAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var spaceid, space;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            spaceid = this.get("spaceid");
                            _context4.next = 3;
                            return this.model("ext_ad_space").find({ where: { spaceid: spaceid } });

                        case 3:
                            space = _context4.sent;

                            this.assign("space", space);
                            return _context4.abrupt('return', this.display());

                        case 6:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function codeAction() {
            return _ref4.apply(this, arguments);
        }

        return codeAction;
    }();

    /**
     * 预览广告
     * @returns {Promise.<void>}
     */


    _class.prototype.showadAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var spaceid, ad;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            spaceid = this.get("spaceid");
                            _context5.next = 3;
                            return this.model("ext_ad_space").find({ where: { spaceid: spaceid } });

                        case 3:
                            ad = _context5.sent;

                            this.assign("ad", ad);
                            return _context5.abrupt('return', this.display());

                        case 6:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function showadAction() {
            return _ref5.apply(this, arguments);
        }

        return showadAction;
    }();
    /**
     * 删除广告
     * @returns {Promise.<void>}
     */


    _class.prototype.delspaceAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var ids, res;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            ids = this.param('ids');
                            //return this.fail(ids);

                            if (!think.isEmpty(ids)) {
                                _context6.next = 3;
                                break;
                            }

                            return _context6.abrupt('return', this.fail("缺少参数!"));

                        case 3:
                            _context6.next = 5;
                            return this.model('ext_ad_space').where({ spaceid: ['IN', ids] }).delete();

                        case 5:
                            res = _context6.sent;
                            _context6.next = 8;
                            return this.model("ext_ad").where({ spaceid: ['IN', ids] }).delete();

                        case 8:
                            if (!res) {
                                _context6.next = 12;
                                break;
                            }

                            return _context6.abrupt('return', this.success({ name: "删除成功!" }));

                        case 12:
                            return _context6.abrupt('return', this.fail("删除成功!"));

                        case 13:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function delspaceAction() {
            return _ref6.apply(this, arguments);
        }

        return delspaceAction;
    }();
    /**
     * 更新广告缓存
     * @returns {Promise.<void>}
     */


    _class.prototype.adcacheAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var space, _iterator, _isArray, _i, _ref8, v;

            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return this.model("ext_ad_space").order("spaceid DESC").select();

                        case 2:
                            space = _context7.sent;
                            _iterator = space, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 4:
                            if (!_isArray) {
                                _context7.next = 10;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context7.next = 7;
                                break;
                            }

                            return _context7.abrupt('break', 19);

                        case 7:
                            _ref8 = _iterator[_i++];
                            _context7.next = 14;
                            break;

                        case 10:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context7.next = 13;
                                break;
                            }

                            return _context7.abrupt('break', 19);

                        case 13:
                            _ref8 = _i.value;

                        case 14:
                            v = _ref8;
                            _context7.next = 17;
                            return this.model("ext_ad_space").upad(v.spaceid);

                        case 17:
                            _context7.next = 4;
                            break;

                        case 19:
                            return _context7.abrupt('return', this.success({ name: "更新广告缓存成功!" }));

                        case 20:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function adcacheAction() {
            return _ref7.apply(this, arguments);
        }

        return adcacheAction;
    }();
    /**
     * 获取广告模板
     * @returns {Promise.<void>}
     */


    _class.prototype.gettempAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var name, res;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            name = this.get('name');
                            _context8.next = 3;
                            return this.model('ext_ad_temp').fieldReverse("temp").where({ name: name }).find();

                        case 3:
                            res = _context8.sent;
                            return _context8.abrupt('return', this.json(res));

                        case 5:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function gettempAction() {
            return _ref9.apply(this, arguments);
        }

        return gettempAction;
    }();

    /**
     * 广告列表
     * @returns {Promise.<void>}
     */


    _class.prototype.adlistAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var spaceid, space, map, data, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            spaceid = this.get('spaceid');
                            _context9.next = 3;
                            return this.model('ext_ad_space').find({ where: { spaceid: spaceid } });

                        case 3:
                            space = _context9.sent;

                            this.assign('space', space);
                            map = {};

                            map.spaceid = spaceid;
                            //map.status = 1;
                            //获取广告位置列表
                            _context9.next = 9;
                            return this.model("ext_ad").page(this.get('page')).where(map).order("sort ASC,addtime DESC").countSelect();

                        case 9:
                            data = _context9.sent;

                            //console.log(data);
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);
                            return _context9.abrupt('return', this.display());

                        case 16:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function adlistAction() {
            return _ref10.apply(this, arguments);
        }

        return adlistAction;
    }();

    /**
     * 添加广告
     * @returns {Promise.<void>}
     */


    _class.prototype.addadAction = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var data, arr, obj, res, spaceid, space, temp;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context10.next = 18;
                                break;
                            }

                            data = this.post();

                            data.addtime = new Date().getTime();
                            data.startdate = think.isEmpty(data.startdate) ? new Date().getTime() : new Date(data.startdate).valueOf();
                            data.enddate = think.isEmpty(data.enddate) ? new Date(data.startdate).getTime() + 86400000 * 30 : new Date(data.enddate).valueOf();
                            if (!think.isEmpty(data.code)) {
                                arr = [];
                                obj = {};

                                obj.code = data.code;
                                arr.push(obj);
                                data.setting = (0, _stringify2.default)(arr);
                            }
                            // console.log(data);
                            // return this.fail(1);
                            _context10.next = 8;
                            return this.model("ext_ad").add(data);

                        case 8:
                            res = _context10.sent;

                            if (!res) {
                                _context10.next = 15;
                                break;
                            }

                            _context10.next = 12;
                            return this.model('ext_ad_space').upad(data.spaceid);

                        case 12:
                            return _context10.abrupt('return', this.success({ name: "添加成功!", url: "/ext/ad/admin/adlist/spaceid/" + data.spaceid }));

                        case 15:
                            return _context10.abrupt('return', this.success("添加失败!"));

                        case 16:
                            _context10.next = 29;
                            break;

                        case 18:
                            //获取广告位
                            spaceid = this.get('spaceid');
                            _context10.next = 21;
                            return this.model('ext_ad_space').find({ where: { spaceid: spaceid } });

                        case 21:
                            space = _context10.sent;
                            _context10.next = 24;
                            return this.model('ext_ad_temp').find({ where: { name: space.type } });

                        case 24:
                            temp = _context10.sent;

                            this.assign('space', space);
                            this.assign('temp', temp);
                            this.meta_title = "添加广告";
                            return _context10.abrupt('return', this.display());

                        case 29:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function addadAction() {
            return _ref11.apply(this, arguments);
        }

        return addadAction;
    }();
    /**
     * 编辑广告
     * @returns {Promise.<void>}
     */


    _class.prototype.editadAction = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
            var data, res, id, ad, spaceid, space, temp;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context11.next = 16;
                                break;
                            }

                            data = this.post();

                            data.startdate = think.isEmpty(data.startdate) ? new Date().getTime() : new Date(data.startdate).valueOf();
                            data.enddate = think.isEmpty(data.enddate) ? new Date(data.startdate).getTime() + 86400000 * 30 : new Date(data.enddate).valueOf();

                            // console.log(data);
                            // return this.fail(1);
                            _context11.next = 6;
                            return this.model("ext_ad").where({ id: data.id }).update(data);

                        case 6:
                            res = _context11.sent;

                            if (!res) {
                                _context11.next = 13;
                                break;
                            }

                            _context11.next = 10;
                            return this.model('ext_ad_space').upad(data.spaceid);

                        case 10:
                            return _context11.abrupt('return', this.success({ name: "编辑成功!", url: "/ext/ad/admin/adlist/spaceid/" + data.spaceid }));

                        case 13:
                            return _context11.abrupt('return', this.success("编辑失败!"));

                        case 14:
                            _context11.next = 32;
                            break;

                        case 16:
                            id = this.get("id");
                            _context11.next = 19;
                            return this.model("ext_ad").find(id);

                        case 19:
                            ad = _context11.sent;

                            this.assign("ad", ad);
                            //获取广告位
                            spaceid = ad.spaceid;
                            _context11.next = 24;
                            return this.model('ext_ad_space').find({ where: { spaceid: spaceid } });

                        case 24:
                            space = _context11.sent;
                            _context11.next = 27;
                            return this.model('ext_ad_temp').find({ where: { name: space.type } });

                        case 27:
                            temp = _context11.sent;

                            this.assign('space', space);
                            this.assign('temp', temp);
                            this.meta_title = "编辑广告";
                            return _context11.abrupt('return', this.display());

                        case 32:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function editadAction() {
            return _ref12.apply(this, arguments);
        }

        return editadAction;
    }();
    /**
     * 删除广告
     * @returns {Promise.<void>}
     */


    _class.prototype.deladAction = function () {
        var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
            var ids, res;
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            ids = this.param('ids');

                            if (!think.isEmpty(ids)) {
                                _context12.next = 3;
                                break;
                            }

                            return _context12.abrupt('return', this.fail("缺少参数!"));

                        case 3:
                            _context12.next = 5;
                            return this.model('ext_ad').where({ id: ['IN', ids] }).delete();

                        case 5:
                            res = _context12.sent;

                            if (!res) {
                                _context12.next = 10;
                                break;
                            }

                            return _context12.abrupt('return', this.success({ name: "删除成功!" }));

                        case 10:
                            return _context12.abrupt('return', this.fail("删除成功!"));

                        case 11:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        function deladAction() {
            return _ref13.apply(this, arguments);
        }

        return deladAction;
    }();
    /**
     * 广告模板
     * @returns {Promise.<void>}
     */


    _class.prototype.tempAction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13() {
            var data, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            _context13.next = 2;
                            return this.model("ext_ad_temp").page(this.get('page')).countSelect();

                        case 2:
                            data = _context13.sent;

                            //console.log(data);
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);
                            return _context13.abrupt('return', this.display());

                        case 9:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        function tempAction() {
            return _ref14.apply(this, arguments);
        }

        return tempAction;
    }();

    /**
     * 添加广告模板
     *
     */


    _class.prototype.addtempAction = function () {
        var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14() {
            var data, type, v, res;
            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context14.next = 19;
                                break;
                            }

                            data = this.post();

                            data.type_images = data.type_images || 0;
                            data.type_flash = data.type_flash || 0;
                            data.type_text = data.type_text || 0;
                            data.type_code = data.type_code || 0;
                            //console.log(data);
                            type = {};

                            for (v in data) {
                                if (v.split("_")[0] == "type") {
                                    type[v.split("_")[1]] = data[v];
                                }
                            }
                            data.type = (0, _stringify2.default)(type);
                            _context14.next = 11;
                            return this.model('ext_ad_temp').add(data);

                        case 11:
                            res = _context14.sent;

                            if (!res) {
                                _context14.next = 16;
                                break;
                            }

                            return _context14.abrupt('return', this.success({ name: "添加成功！", url: "/ext/ad/admin/temp" }));

                        case 16:
                            return _context14.abrupt('return', this.fail("添加失败!"));

                        case 17:
                            _context14.next = 21;
                            break;

                        case 19:
                            this.meta_title = "添加广告模板";
                            return _context14.abrupt('return', this.display());

                        case 21:
                        case 'end':
                            return _context14.stop();
                    }
                }
            }, _callee14, this);
        }));

        function addtempAction() {
            return _ref15.apply(this, arguments);
        }

        return addtempAction;
    }();

    /**
     * 编辑模板
     * @returns {Promise.<void>}
     */


    _class.prototype.edittempAction = function () {
        var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15() {
            var data, type, v, res, tempid, temp;
            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context15.next = 19;
                                break;
                            }

                            data = this.post();

                            data.type_images = data.type_images || 0;
                            data.type_flash = data.type_flash || 0;
                            data.type_text = data.type_text || 0;
                            data.type_code = data.type_code || 0;
                            //console.log(data);
                            type = {};

                            for (v in data) {
                                if (v.split("_")[0] == "type") {
                                    type[v.split("_")[1]] = data[v];
                                }
                            }
                            data.type = (0, _stringify2.default)(type);
                            _context15.next = 11;
                            return this.model('ext_ad_temp').where({ tempid: data.tempid }).update(data);

                        case 11:
                            res = _context15.sent;

                            if (!res) {
                                _context15.next = 16;
                                break;
                            }

                            return _context15.abrupt('return', this.success({ name: "编辑成功！", url: "/ext/ad/admin/temp" }));

                        case 16:
                            return _context15.abrupt('return', this.fail("编辑失败!"));

                        case 17:
                            _context15.next = 26;
                            break;

                        case 19:
                            tempid = this.get("tempid");
                            _context15.next = 22;
                            return this.model("ext_ad_temp").find({ where: { tempid: tempid } });

                        case 22:
                            temp = _context15.sent;

                            this.assign("temp", temp);
                            this.meta_title = "添加广告模板";
                            return _context15.abrupt('return', this.display());

                        case 26:
                        case 'end':
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        function edittempAction() {
            return _ref16.apply(this, arguments);
        }

        return edittempAction;
    }();

    return _class;
}(_admin2.default);

exports.default = _class;
//# sourceMappingURL=admin.js.map