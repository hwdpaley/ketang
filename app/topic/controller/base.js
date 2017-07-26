// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------

'use strict';

exports.__esModule = true;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _wechatApi = require('wechat-api');

var _wechatApi2 = _interopRequireDefault(_wechatApi);

var _jssdk = require('../../uc/controller/jssdk.js');

var _jssdk2 = _interopRequireDefault(_jssdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$controller$bas) {
    (0, _inherits3.default)(_class, _think$controller$bas);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));
    }

    _class.prototype.init = function init(http) {
        _think$controller$bas.prototype.init.call(this, http);
    };

    _class.prototype.__before = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var uurl, weixin, signPackage, isshow, cartList, cartInfo, total, num, _iterator, _isArray, _i, _ref2, val, stock;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.model("setup").getset();

                        case 2:
                            this.setup = _context.sent;

                            this.api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);
                            this.jssdk = _jssdk2.default;
                            //网站配置
                            // console.log(this.setup);
                            //当前登录状态
                            _context.next = 7;
                            return this.islogin();

                        case 7:
                            this.is_login = _context.sent;


                            // let userInfo = await this.model("member").find(this.is_login);
                            // console.log(userInfo);
                            //判断公众账号类型?
                            // if (is_weixin(this.userAgent())) {
                            //     await this.oauthAction();
                            //     let aa = function(jssdk, url) {
                            //         let deferred = think.defer();
                            //         jssdk.getSignPackage(url, (err, signPackage) => {
                            //             if (!think.isEmpty(signPackage)) {
                            //                 deferred.resolve(signPackage);
                            //             } else {
                            //                 console.error(err);
                            //             }
                            //         });
                            //         return deferred.promise;
                            //     }
                            //     let signPackage = await aa(this.jssdk, uurl);
                            //     console.log(signPackage);
                            //     this.assign("signPackage", signPackage);
                            // }
                            this.assign("wxhttp", this.setup.wx_url);

                            if (!is_weixin(this.userAgent())) {
                                _context.next = 19;
                                break;
                            }

                            uurl = this.setup.wx_url + this.http.url;
                            _context.next = 13;
                            return this.action("uc/weixin", "oauth");

                        case 13:
                            weixin = function weixin(jssdk, url) {
                                var deferred = think.defer();
                                jssdk.getSignPackage(url, function (err, signPackage) {
                                    if (!think.isEmpty(signPackage)) {
                                        deferred.resolve(signPackage);
                                    } else {
                                        console.error(err);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context.next = 16;
                            return weixin(this.jssdk, uurl);

                        case 16:
                            signPackage = _context.sent;

                            console.log(signPackage);
                            this.assign("signPackage", signPackage);

                        case 19:
                            if (!(this.setup.WEB_SITE_CLOSE == 0)) {
                                _context.next = 26;
                                break;
                            }

                            _context.next = 22;
                            return this.session('userInfo');

                        case 22:
                            isshow = _context.sent;

                            if (!think.isEmpty(isshow)) {
                                _context.next = 26;
                                break;
                            }

                            this.http.error = new Error('该网站已关闭，只有管理员可以正常访问');
                            return _context.abrupt('return', think.statusAction(404, this.http));

                        case 26:
                            // let csrf = await this.session('__CSRF__');
                            //  // console.log("__CSRF__-------------," + csrf);
                            // await this.cookie('__CSRF__', csrf);
                            // this.assign('csrf', csrf);
                            //用户信息
                            this.user = {};
                            this.user.roleid = 8; //游客
                            this.user.uid = 0;
                            //访问控制

                            if (!this.is_login) {
                                _context.next = 33;
                                break;
                            }

                            _context.next = 32;
                            return this.model("member").where({ id: this.is_login }).getField('groupid', true);

                        case 32:
                            this.user.roleid = _context.sent;

                        case 33:
                            _context.t0 = think;
                            _context.t1 = this.user;
                            _context.next = 37;
                            return this.session('webuser');

                        case 37:
                            _context.t2 = _context.sent;
                            this.user = _context.t0.extend.call(_context.t0, _context.t1, _context.t2);

                            // console.log("__before----------," + JSON.stringify(this.user));
                            this.assign("userInfo", this.user);
                            //获取当前分类信息
                            //console.log(action);
                            // this.meta_title = cate.meta_title?cate.meta_title:cate.title;
                            //设置主题
                            //this.http.theme("default);
                            //购物车
                            //关闭商品模型时同时关闭购物车
                            _context.t4 = think;
                            _context.next = 43;
                            return this.model('model').get_model(4);

                        case 43:
                            _context.t5 = _context.sent;
                            _context.t3 = !_context.t4.isEmpty.call(_context.t4, _context.t5);

                            if (!_context.t3) {
                                _context.next = 47;
                                break;
                            }

                            _context.t3 = this.http.action != "avatar";

                        case 47:
                            if (!_context.t3) {
                                _context.next = 80;
                                break;
                            }

                            _context.next = 50;
                            return this.shopCart();

                        case 50:
                            cartList = _context.sent;
                            cartInfo = void 0;

                            if (!think.isEmpty(cartList)) {
                                _context.next = 56;
                                break;
                            }

                            cartInfo = {
                                total: 0,
                                num: 0,
                                data: null
                            };

                            _context.next = 79;
                            break;

                        case 56:
                            total = [];
                            num = [];
                            _iterator = cartList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 59:
                            if (!_isArray) {
                                _context.next = 65;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 62;
                                break;
                            }

                            return _context.abrupt('break', 78);

                        case 62:
                            _ref2 = _iterator[_i++];
                            _context.next = 69;
                            break;

                        case 65:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 68;
                                break;
                            }

                            return _context.abrupt('break', 78);

                        case 68:
                            _ref2 = _i.value;

                        case 69:
                            val = _ref2;

                            total.push(val.price);
                            num.push(val.qty);
                            //判断是否有库存
                            _context.next = 74;
                            return this.model("order").getstock(val.product_id, val.type);

                        case 74:
                            stock = _context.sent;


                            if (val.qty > stock) {
                                val.stock = 0;
                            } else {
                                val.stock = stock;
                            }

                        case 76:
                            _context.next = 59;
                            break;

                        case 78:
                            cartInfo = {
                                total: eval(total.join('+')),
                                num: eval(num.join('+')),
                                data: cartList
                            };

                        case 79:
                            this.cart = cartInfo;

                        case 80:
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
     * 判断是否登录
     * @returns {boolean}
     */


    _class.prototype.islogin = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var user, res;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.session('webuser');

                        case 2:
                            user = _context2.sent;
                            res = think.isEmpty(user) ? false : user.uid;
                            return _context2.abrupt('return', res);

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function islogin() {
            return _ref3.apply(this, arguments);
        }

        return islogin;
    }();

    _class.prototype.weblogin = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var islogin;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return this.islogin();

                        case 2:
                            islogin = _context3.sent;

                            console.log('weblogin--------');

                            if (islogin) {
                                _context3.next = 10;
                                break;
                            }

                            if (!checkMobile(this.userAgent())) {
                                _context3.next = 9;
                                break;
                            }

                            return _context3.abrupt('return', this.redirect('/uc/public/login'));

                        case 9:
                            return _context3.abrupt('return', this.redirect('/uc/public/login'));

                        case 10:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function weblogin() {
            return _ref4.apply(this, arguments);
        }

        return weblogin;
    }();

    //获取分类信息


    _class.prototype.category = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(id, field) {
            var cate;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            id = id || 0;
                            field = field || "";

                            if (!think.isEmpty(id)) {
                                _context4.next = 5;
                                break;
                            }

                            //this.fail('没有指定数据分类！');
                            this.http.error = new Error('没有指定数据分类！');
                            return _context4.abrupt('return', think.statusAction(702, this.http));

                        case 5:
                            console.log("category-----------" + id + "," + field);
                            _context4.next = 8;
                            return this.model("category").info(id, field);

                        case 8:
                            cate = _context4.sent;

                            if (!(cate && 1 == cate.status)) {
                                _context4.next = 19;
                                break;
                            }

                            _context4.t0 = cate.display;
                            _context4.next = _context4.t0 === 0 ? 13 : 16;
                            break;

                        case 13:
                            //this.fail('该分类禁止显示')
                            this.http.error = new Error('该分类禁止显示！');
                            return _context4.abrupt('return', think.statusAction(702, this.http));

                        case 16:
                            return _context4.abrupt('return', cate);

                        case 17:
                            _context4.next = 21;
                            break;

                        case 19:

                            //this.fail("分类不存在或者被禁用！");
                            this.http.error = new Error('分类不存在或者被禁用！');
                            return _context4.abrupt('return', think.statusAction(702, this.http));

                        case 21:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function category(_x, _x2) {
            return _ref5.apply(this, arguments);
        }

        return category;
    }();
    //购物车


    _class.prototype.shopCart = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var cartdata, loadata, _iterator2, _isArray2, _i2, _ref7, val, res;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            cartdata = null;

                            if (!this.is_login) {
                                _context5.next = 45;
                                break;
                            }

                            _context5.next = 4;
                            return this.session("cart_goods_item");

                        case 4:
                            loadata = _context5.sent;

                            if (!think.isEmpty(loadata)) {
                                _context5.next = 11;
                                break;
                            }

                            _context5.next = 8;
                            return this.model('cart').where({ uid: this.user.uid }).select();

                        case 8:
                            cartdata = _context5.sent;
                            _context5.next = 43;
                            break;

                        case 11:
                            _iterator2 = loadata, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 12:
                            if (!_isArray2) {
                                _context5.next = 18;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context5.next = 15;
                                break;
                            }

                            return _context5.abrupt('break', 38);

                        case 15:
                            _ref7 = _iterator2[_i2++];
                            _context5.next = 22;
                            break;

                        case 18:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context5.next = 21;
                                break;
                            }

                            return _context5.abrupt('break', 38);

                        case 21:
                            _ref7 = _i2.value;

                        case 22:
                            val = _ref7;

                            val.uid = this.user.uid;
                            //验证原有的数据是否已经存在
                            _context5.next = 26;
                            return this.model('cart').where({ product_id: val.product_id, type: val.type, uid: this.user.uid }).select();

                        case 26:
                            res = _context5.sent;

                            if (think.isEmpty(res)) {
                                _context5.next = 34;
                                break;
                            }

                            val.qty = Number(val.qty) + Number(res[0].qty);
                            val.id = res[0].id;
                            _context5.next = 32;
                            return this.model('cart').update(val);

                        case 32:
                            _context5.next = 36;
                            break;

                        case 34:
                            _context5.next = 36;
                            return this.model('cart').add(val);

                        case 36:
                            _context5.next = 12;
                            break;

                        case 38:
                            _context5.next = 40;
                            return this.session("cart_goods_item", null);

                        case 40:
                            _context5.next = 42;
                            return this.model('cart').where({ uid: this.user.uid }).select();

                        case 42:
                            cartdata = _context5.sent;

                        case 43:
                            _context5.next = 48;
                            break;

                        case 45:
                            _context5.next = 47;
                            return this.session("cart_goods_item");

                        case 47:
                            cartdata = _context5.sent;

                        case 48:
                            return _context5.abrupt('return', cartdata);

                        case 49:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function shopCart() {
            return _ref6.apply(this, arguments);
        }

        return shopCart;
    }();

    /**
     * 处理文档列表显示
     * @param {array} list 列表数据
     * @param {integer} model_id 模型id
     */


    _class.prototype.parseDocumentList = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(list, model_id) {
            var attrList;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            model_id = model_id || 1;
                            _context6.next = 3;
                            return this.model('attribute').get_model_attribute(model_id, false, 'id,name,type,extra');

                        case 3:
                            attrList = _context6.sent;

                            if (!think.isArray(list)) {
                                _context6.next = 7;
                                break;
                            }

                            list.forEach(function (data, k) {
                                //console.log(data);
                                for (var key in data) {
                                    //console.log(key)
                                    if (!think.isEmpty(attrList[key])) {
                                        var extra = attrList[key]['extra'];
                                        var type = attrList[key]['type'];
                                        //console.log(extra);
                                        if ('select' == type || 'checkbox' == type || 'radio' == type || 'bool' == type) {
                                            // 枚举/多选/单选/布尔型
                                            var options = parse_config_attr(extra);
                                            var oparr = (0, _keys2.default)(options);
                                            if (options && in_array(data[key], oparr)) {
                                                data[key] = options[data[key]];
                                            }
                                        } else if ('date' == type) {
                                            // 日期型
                                            data[key] = dateformat('Y-m-d', data[key]);
                                        } else if ('datetime' == type) {
                                            // 时间型
                                            data[key] = dateformat('Y-m-d H:i', data[key]);
                                        } else if ('pics' === type) {
                                            data[key] = '<span class="thumb-sm"><img alt="..." src="' + data[key] + '" class="img-responsive img-thumbnail"></span>';
                                        }
                                    }
                                }
                                data.model_id = model_id;
                                list[k] = data;
                            });
                            //console.log(222)
                            return _context6.abrupt('return', list);

                        case 7:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function parseDocumentList(_x3, _x4) {
            return _ref8.apply(this, arguments);
        }

        return parseDocumentList;
    }();
    //跨域设置


    _class.prototype.setCorsHeader = function setCorsHeader() {
        this.header("Access-Control-Allow-Origin", this.header("origin") || "*");
        this.header("Access-Control-Allow-Headers", "x-requested-with");
        this.header("Access-Control-Request-Method", "GET,POST,PUT,DELETE");
        this.header("Access-Control-Allow-Credentials", "true");
    };

    return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=base.js.map