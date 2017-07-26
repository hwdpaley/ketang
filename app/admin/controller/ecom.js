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

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    //支付与配送控制区
    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.tactive = "ecom";
    };
    /**
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function indexAction() {
        //auto render template file index_index.html
        return this.display();
    };

    /**
     * ping++支付
      */


    _class.prototype.pingxxAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var app_id, livesecretkey, channel;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //获取app_id
                            app_id = this.setup.PINGXX_APP_ID;
                            livesecretkey = this.setup.PINGXX_LIVE_SECRET_KEY;

                            this.assign("app_id", app_id);
                            this.assign("livesecretkey", livesecretkey);
                            //获取支付渠道
                            _context.next = 6;
                            return this.model('pingxx').order('sort ASC').select();

                        case 6:
                            channel = _context.sent;

                            //console.log(channel);
                            this.assign("channel", channel);
                            this.meta_title = "ping++支付设置";
                            return _context.abrupt('return', this.display());

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function pingxxAction() {
            return _ref.apply(this, arguments);
        }

        return pingxxAction;
    }();
    // 添加appid


    _class.prototype.addappidAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var appid, res;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (!this.isAjax("POST")) {
                                _context2.next = 13;
                                break;
                            }

                            appid = this.post('appid');
                            _context2.next = 4;
                            return this.model("setup").where({ name: 'PINGXX_APP_ID' }).update({ value: appid });

                        case 4:
                            res = _context2.sent;

                            if (!res) {
                                _context2.next = 10;
                                break;
                            }

                            think.cache("setup", null); //清除设置缓存
                            return _context2.abrupt('return', this.success({ name: "设置成功！" }));

                        case 10:
                            return _context2.abrupt('return', this.fail("设置失败！"));

                        case 11:
                            _context2.next = 15;
                            break;

                        case 13:
                            this.meta_title = "添加App_ID";
                            return _context2.abrupt('return', this.display());

                        case 15:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function addappidAction() {
            return _ref2.apply(this, arguments);
        }

        return addappidAction;
    }();

    _class.prototype.addlivesecretkeyAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var appid, res;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!this.isAjax("POST")) {
                                _context3.next = 13;
                                break;
                            }

                            appid = this.post('livesecretkey');
                            _context3.next = 4;
                            return this.model("setup").where({ name: 'PINGXX_LIVE_SECRET_KEY' }).update({ value: appid });

                        case 4:
                            res = _context3.sent;

                            if (!res) {
                                _context3.next = 10;
                                break;
                            }

                            think.cache("setup", null); //清除设置缓存
                            return _context3.abrupt('return', this.success({ name: "设置成功！" }));

                        case 10:
                            return _context3.abrupt('return', this.fail("设置失败！"));

                        case 11:
                            _context3.next = 15;
                            break;

                        case 13:
                            this.meta_title = "添加Live Secret Key";
                            return _context3.abrupt('return', this.display());

                        case 15:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function addlivesecretkeyAction() {
            return _ref3.apply(this, arguments);
        }

        return addlivesecretkeyAction;
    }();
    //配置商户私钥


    _class.prototype.rsaAction = function rsaAction() {
        var type = this.param("type");
        console.log(type);
        var path = void 0;
        switch (type) {
            case "private":
                path = think.RESOURCE_PATH + "/upload/pingpp/bieber_rsa_private_key.pem";
                break;
            default:
                path = think.RESOURCE_PATH + "/upload/pingpp/pingpp_rsa_public_key.pem";

        }

        if (this.isAjax("POST")) {
            var rsa = this.post("rsa");
            console.log(path);
            //return false;
            if (type == "private") {
                //console.log(rsa);
                _fs2.default.writeFileSync(path, rsa, 'utf8');
                return this.success({ name: "设置成功！" });
            } else {
                _fs2.default.writeFileSync(path, rsa, 'utf8');
                return this.success({ name: "设置成功！" });
            }
        } else {
            if (type == "private") {
                var _rsa = _fs2.default.readFileSync(path, null);
                this.assign("rsa", _rsa);
                this.meta_title = "配置商户私钥";
            } else {
                var _rsa2 = _fs2.default.readFileSync(path, null);
                this.assign("rsa", _rsa2);
                this.meta_title = "Ping++ 公钥";
            }
            this.assign("type", type);
            return this.display();
        }
    };
    //Webhooks


    _class.prototype.webhokksAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var config;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            config = [{ name: "支付成功", url: this.http.host + '/uc/pay/webhooks' }];

                            this.assign("list", config);
                            this.meta_title = "Webhooks";
                            return _context4.abrupt('return', this.display());

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function webhokksAction() {
            return _ref4.apply(this, arguments);
        }

        return webhokksAction;
    }();
    /**
     * 正在使用的支付方式
     */


    _class.prototype.paymentAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var data, Pages, pages, page, _iterator, _isArray, _i, _ref6, val;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            this.meta_title = "正在使用的支付方式";
                            _context5.next = 3;
                            return this.model("payment").page(this.get('page')).countSelect();

                        case 3:
                            data = _context5.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);
                            _iterator = data.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 8:
                            if (!_isArray) {
                                _context5.next = 14;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context5.next = 11;
                                break;
                            }

                            return _context5.abrupt('break', 24);

                        case 11:
                            _ref6 = _iterator[_i++];
                            _context5.next = 18;
                            break;

                        case 14:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context5.next = 17;
                                break;
                            }

                            return _context5.abrupt('break', 24);

                        case 17:
                            _ref6 = _i.value;

                        case 18:
                            val = _ref6;
                            _context5.next = 21;
                            return this.model("pay_plugin").where({ id: val.plugin_id }).getField("logo", true);

                        case 21:
                            val.logo = _context5.sent;

                        case 22:
                            _context5.next = 8;
                            break;

                        case 24:
                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);
                            return _context5.abrupt('return', this.display());

                        case 27:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function paymentAction() {
            return _ref5.apply(this, arguments);
        }

        return paymentAction;
    }();
    /**编辑支付方式 */


    _class.prototype.editpayAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var data, res, id, info;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            if (!this.isAjax("POST")) {
                                _context6.next = 12;
                                break;
                            }

                            data = this.post();
                            _context6.next = 4;
                            return this.model("payment").update(data);

                        case 4:
                            res = _context6.sent;

                            if (!res) {
                                _context6.next = 9;
                                break;
                            }

                            return _context6.abrupt('return', this.success({ name: '编辑支付方式成功！', url: "/admin/ecom/payment" }));

                        case 9:
                            return _context6.abrupt('return', this.fail('编辑支付方式失败！'));

                        case 10:
                            _context6.next = 19;
                            break;

                        case 12:
                            id = this.get("id");
                            _context6.next = 15;
                            return this.model("payment").find(id);

                        case 15:
                            info = _context6.sent;

                            this.assign("info", info);
                            this.meta_title = "配置支付方式";
                            return _context6.abrupt('return', this.display());

                        case 19:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function editpayAction() {
            return _ref7.apply(this, arguments);
        }

        return editpayAction;
    }();
    /**添加支付方式 */


    _class.prototype.addpayAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var data, res, id, info;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            if (!this.isAjax("POST")) {
                                _context7.next = 12;
                                break;
                            }

                            data = this.post();
                            _context7.next = 4;
                            return this.model("payment").add(data);

                        case 4:
                            res = _context7.sent;

                            if (!res) {
                                _context7.next = 9;
                                break;
                            }

                            return _context7.abrupt('return', this.success({ name: '添加支付方式成功！', url: "/admin/ecom/payment" }));

                        case 9:
                            return _context7.abrupt('return', this.fail('添加支付方式失败！'));

                        case 10:
                            _context7.next = 19;
                            break;

                        case 12:
                            id = this.get("id");
                            _context7.next = 15;
                            return this.model("pay_plugin").find(id);

                        case 15:
                            info = _context7.sent;

                            this.assign("info", info);
                            this.meta_title = "添加支付方式";
                            return _context7.abrupt('return', this.display());

                        case 19:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function addpayAction() {
            return _ref8.apply(this, arguments);
        }

        return addpayAction;
    }();
    /**删除正在使用的支付方式 */


    _class.prototype.delpayAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var id, res;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            id = this.get("id");
                            _context8.next = 3;
                            return this.model("payment").where({ id: id }).delete();

                        case 3:
                            res = _context8.sent;

                            if (think.isEmpty(res)) {
                                _context8.next = 8;
                                break;
                            }

                            return _context8.abrupt('return', this.success({ name: '删除成功！' }));

                        case 8:
                            return _context8.abrupt('return', this.fail('删除失败！'));

                        case 9:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function delpayAction() {
            return _ref9.apply(this, arguments);
        }

        return delpayAction;
    }();

    /**支付插件 */

    _class.prototype.paypluginAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var data, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            this.meta_title = "全部支付方式";
                            // this.end(11);
                            this.active = "admin/ecom/payment";
                            _context9.next = 4;
                            return this.model("pay_plugin").page(this.get('page')).countSelect();

                        case 4:
                            data = _context9.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);
                            return _context9.abrupt('return', this.display());

                        case 11:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function paypluginAction() {
            return _ref10.apply(this, arguments);
        }

        return paypluginAction;
    }();
    /**运费模板 */


    _class.prototype.fareAction = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var list, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            this.meta_title = "运费模板";
                            _context10.next = 3;
                            return this.model("fare").page(this.get('page')).order("is_default DESC").countSelect();

                        case 3:
                            list = _context10.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(list);
                            //console.log(list);

                            this.assign('pagerData', list); //分页展示使用
                            this.assign('list', list.data);
                            return _context10.abrupt('return', this.display());

                        case 10:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function fareAction() {
            return _ref11.apply(this, arguments);
        }

        return fareAction;
    }();

    /**
     * 添加运费模板
     */

    _class.prototype.addfareAction = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
            var data, res;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            if (!this.isAjax("POST")) {
                                _context11.next = 12;
                                break;
                            }

                            data = this.post();
                            _context11.next = 4;
                            return this.model('fare').add(data);

                        case 4:
                            res = _context11.sent;

                            if (!res) {
                                _context11.next = 9;
                                break;
                            }

                            return _context11.abrupt('return', this.success({ name: "添加运费模板成功！", url: "/admin/ecom/fare" }));

                        case 9:
                            return _context11.abrupt('return', this.fail("添加运费模板失败！"));

                        case 10:
                            _context11.next = 15;
                            break;

                        case 12:
                            this.meta_title = "添加运费模板";
                            this.active = "admin/ecom/fare";
                            return _context11.abrupt('return', this.display());

                        case 15:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function addfareAction() {
            return _ref12.apply(this, arguments);
        }

        return addfareAction;
    }();
    //编辑运费模板


    _class.prototype.editfareAction = function () {
        var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
            var data, res, id, _res;

            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            if (!this.isAjax("POST")) {
                                _context12.next = 12;
                                break;
                            }

                            data = this.post();
                            _context12.next = 4;
                            return this.model("fare").update(data);

                        case 4:
                            res = _context12.sent;

                            if (!res) {
                                _context12.next = 9;
                                break;
                            }

                            return _context12.abrupt('return', this.success({ name: "编辑运费模板成功！", url: "/admin/ecom/fare" }));

                        case 9:
                            return _context12.abrupt('return', this.fail("编辑运费模板失败！"));

                        case 10:
                            _context12.next = 26;
                            break;

                        case 12:
                            id = this.get('id');

                            if (think.isNumberString(id)) {
                                _context12.next = 15;
                                break;
                            }

                            return _context12.abrupt('return', this.fail("哦也！"));

                        case 15:
                            _context12.next = 17;
                            return this.model("fare").find(id);

                        case 17:
                            _res = _context12.sent;

                            if (!_res) {
                                _context12.next = 22;
                                break;
                            }

                            this.assign("info", _res);
                            _context12.next = 23;
                            break;

                        case 22:
                            return _context12.abrupt('return', this.fail("您选择的运费模板已经被删除！"));

                        case 23:
                            this.meta_title = "编辑运费模板";
                            this.active = "admin/ecom/fare";
                            return _context12.abrupt('return', this.display());

                        case 26:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        function editfareAction() {
            return _ref13.apply(this, arguments);
        }

        return editfareAction;
    }();
    //设置默认使用的模板


    _class.prototype.defaulffareAction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13() {
            var id, update;
            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            id = this.get("id");
                            _context13.next = 3;
                            return this.model('fare').where("1=1").update({ is_default: 0 });

                        case 3:
                            _context13.next = 5;
                            return this.model("fare").where({ id: id }).update({ is_default: 1 });

                        case 5:
                            update = _context13.sent;

                            if (!update) {
                                _context13.next = 10;
                                break;
                            }

                            return _context13.abrupt('return', this.success({ name: "设置成功！" }));

                        case 10:
                            return _context13.abrupt('return', this.fail("设置失败！"));

                        case 11:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        function defaulffareAction() {
            return _ref14.apply(this, arguments);
        }

        return defaulffareAction;
    }();
    //删除运费模板


    _class.prototype.delfareAction = function () {
        var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14() {
            var id, res;
            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            id = this.get("id");
                            _context14.next = 3;
                            return this.model("fare").where({ id: id }).delete();

                        case 3:
                            res = _context14.sent;

                            if (!res) {
                                _context14.next = 8;
                                break;
                            }

                            return _context14.abrupt('return', this.success({ name: "删除模板成功！" }));

                        case 8:
                            return _context14.abrupt('return', this.fail("删除模板失败！"));

                        case 9:
                        case 'end':
                            return _context14.stop();
                    }
                }
            }, _callee14, this);
        }));

        function delfareAction() {
            return _ref15.apply(this, arguments);
        }

        return delfareAction;
    }();
    /**
     * 选择配送地区
     */


    _class.prototype.fareareaAction = function () {
        var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15() {
            var data;
            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            if (!this.isAjax("POST")) {
                                _context15.next = 8;
                                break;
                            }

                            _context15.next = 3;
                            return this.model("area").field("id,name,parent_id as pid,sort").select();

                        case 3:
                            data = _context15.sent;

                            data = arr_to_tree(data, 0);
                            //for(let val of data){
                            //    val.pId =val.pid;
                            //}
                            return _context15.abrupt('return', this.json(data));

                        case 8:
                            this.assign('id', this.get("id"));
                            this.meta_title = "选择配送地区";
                            return _context15.abrupt('return', this.display());

                        case 11:
                        case 'end':
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        function fareareaAction() {
            return _ref16.apply(this, arguments);
        }

        return fareareaAction;
    }();
    /**快递公司管理 */


    _class.prototype.expressAction = function () {
        var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee16() {
            var data, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee16$(_context16) {
                while (1) {
                    switch (_context16.prev = _context16.next) {
                        case 0:
                            _context16.next = 2;
                            return this.model("express_company").page(this.get('page'), 20).countSelect();

                        case 2:
                            data = _context16.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);
                            this.meta_title = "快递公司管理";
                            this.active = "admin/ecom/express";
                            return _context16.abrupt('return', this.display());

                        case 11:
                        case 'end':
                            return _context16.stop();
                    }
                }
            }, _callee16, this);
        }));

        function expressAction() {
            return _ref17.apply(this, arguments);
        }

        return expressAction;
    }();

    /**
     * 新增快递公司
     */


    _class.prototype.addexpressAction = function () {
        var _ref18 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee17() {
            var data, res;
            return _regenerator2.default.wrap(function _callee17$(_context17) {
                while (1) {
                    switch (_context17.prev = _context17.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context17.next = 12;
                                break;
                            }

                            data = this.post();
                            _context17.next = 4;
                            return this.model('express_company').add(data);

                        case 4:
                            res = _context17.sent;

                            if (!res) {
                                _context17.next = 9;
                                break;
                            }

                            return _context17.abrupt('return', this.success({ name: "添加成功!" }));

                        case 9:
                            return _context17.abrupt('return', this.fail("添加失败!"));

                        case 10:
                            _context17.next = 14;
                            break;

                        case 12:
                            this.meta_title = "添加快递公司";
                            return _context17.abrupt('return', this.display());

                        case 14:
                        case 'end':
                            return _context17.stop();
                    }
                }
            }, _callee17, this);
        }));

        function addexpressAction() {
            return _ref18.apply(this, arguments);
        }

        return addexpressAction;
    }();

    /**
     * 编辑快递公司
     * @returns {Promise.<void>}
     */


    _class.prototype.editexpressAction = function () {
        var _ref19 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee18() {
            var data, res, id, info;
            return _regenerator2.default.wrap(function _callee18$(_context18) {
                while (1) {
                    switch (_context18.prev = _context18.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context18.next = 12;
                                break;
                            }

                            data = this.post();
                            _context18.next = 4;
                            return this.model("express_company").update(data);

                        case 4:
                            res = _context18.sent;

                            if (!res) {
                                _context18.next = 9;
                                break;
                            }

                            return _context18.abrupt('return', this.success({ name: "更新成功!" }));

                        case 9:
                            return _context18.abrupt('return', this.fail("更新失败!"));

                        case 10:
                            _context18.next = 19;
                            break;

                        case 12:
                            id = this.get("id");
                            _context18.next = 15;
                            return this.model("express_company").find(id);

                        case 15:
                            info = _context18.sent;

                            this.assign("info", info);
                            this.meta_title = "编辑快递公司";
                            return _context18.abrupt('return', this.display());

                        case 19:
                        case 'end':
                            return _context18.stop();
                    }
                }
            }, _callee18, this);
        }));

        function editexpressAction() {
            return _ref19.apply(this, arguments);
        }

        return editexpressAction;
    }();

    /**
     * 删除快递公司
     * @returns {Promise.<void>}
     */


    _class.prototype.delexpressAction = function () {
        var _ref20 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee19() {
            var ids, res;
            return _regenerator2.default.wrap(function _callee19$(_context19) {
                while (1) {
                    switch (_context19.prev = _context19.next) {
                        case 0:
                            ids = this.param("ids");
                            _context19.next = 3;
                            return this.model("express_company").where({ id: ['IN', ids] }).delete();

                        case 3:
                            res = _context19.sent;

                            if (!res) {
                                _context19.next = 8;
                                break;
                            }

                            return _context19.abrupt('return', this.success({ name: "删除成功!" }));

                        case 8:
                            return _context19.abrupt('return', this.fail("删除失败!"));

                        case 9:
                        case 'end':
                            return _context19.stop();
                    }
                }
            }, _callee19, this);
        }));

        function delexpressAction() {
            return _ref20.apply(this, arguments);
        }

        return delexpressAction;
    }();
    /**
       * 设置一条或者多条数据的状态
       */


    _class.prototype.setstatusAction = function () {
        var _ref21 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee20() {
            var table;
            return _regenerator2.default.wrap(function _callee20$(_context20) {
                while (1) {
                    switch (_context20.prev = _context20.next) {
                        case 0:
                            table = this.get("table");
                            _context20.next = 3;
                            return _Base.prototype.setstatusAction.call(this, this, table);

                        case 3:
                        case 'end':
                            return _context20.stop();
                    }
                }
            }, _callee20, this);
        }));

        function setstatusAction() {
            return _ref21.apply(this, arguments);
        }

        return setstatusAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=ecom.js.map