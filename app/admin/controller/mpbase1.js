// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

exports.__esModule = true;

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

var _wechatApi = require('wechat-api');

var _wechatApi2 = _interopRequireDefault(_wechatApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    //var a = 1;

    /**
    * index action
    * @return {Promise} []
    */
    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
    };
    /**
     * index action
     * @return {Promise} []
     */

    _class.prototype.indexAction = function indexAction() {
        //auto render template file index_index.html
        this.meta_title = '微信管理';
        this.assign({ "navxs": true, "bg": "bg-dark" });
        return this.display();
    };
    /**
     * 公众账号管理
     */


    _class.prototype.setingAction = _regenerator2.default.mark(function setingAction() {
        var map, data, Pages, pages, page, _iterator, _isArray, _i, _ref, val;

        return _regenerator2.default.wrap(function setingAction$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        map = { 'status': ['>', -1] };

                        if (!this.is_admin()) {
                            //管理员可以管理全部公共账号
                            map.uid = this.user.uid;
                        }

                        _context.next = 4;
                        return this.model('member_public').where(map).page(this.get('page')).countSelect();

                    case 4:
                        data = _context.sent;
                        Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                        pages = new Pages(); //实例化 Adapter

                        page = pages.pages(data);

                        this.assign('pagerData', page); //分页展示使用
                        this.assign('list', data.data);
                        console.log(data.data);
                        _iterator = data.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                    case 12:
                        if (!_isArray) {
                            _context.next = 18;
                            break;
                        }

                        if (!(_i >= _iterator.length)) {
                            _context.next = 15;
                            break;
                        }

                        return _context.abrupt('break', 28);

                    case 15:
                        _ref = _iterator[_i++];
                        _context.next = 22;
                        break;

                    case 18:
                        _i = _iterator.next();

                        if (!_i.done) {
                            _context.next = 21;
                            break;
                        }

                        return _context.abrupt('break', 28);

                    case 21:
                        _ref = _i.value;

                    case 22:
                        val = _ref;
                        _context.next = 25;
                        return this.model('member').get_nickname(val.uid);

                    case 25:
                        val.uid = _context.sent;

                    case 26:
                        _context.next = 12;
                        break;

                    case 28:
                        this.assign({ "navxs": true, "bg": "bg-dark" });
                        this.meta_title = "公共账号管理";
                        return _context.abrupt('return', this.display());

                    case 31:
                    case 'end':
                        return _context.stop();
                }
            }
        }, setingAction, this);
    });
    _class.prototype.huifuAction = _regenerator2.default.mark(function huifuAction() {
        var post, api, self;
        return _regenerator2.default.wrap(function huifuAction$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        if (!this.isPost()) {
                            _context2.next = 5;
                            break;
                        }

                        post = this.post();

                        if (!think.isEmpty(post)) {
                            post = (0, _stringify2.default)(post);
                            api = new _wechatApi2.default('wxf417a542a02aa8fc', '564033623a2ea9b19119f0164289ba45');
                            /*api.sendText('oJMTsw7cOcQRr32Cze3nDQ9mJKCU', 'Hello world', (err, result)=>{
                                console.log("hehe");
                            });*/

                            self = this;

                            api.getUser("oJMTsw7cOcQRr32Cze3nDQ9mJKCU", function (err, result) {
                                if (think.isEmpty(err)) {
                                    think.log(result, "fds");
                                    self.success({ name: result, url: "/admin/mpbase1/huifu" });
                                } else {
                                    console.error(err);
                                }
                            });
                            //this.success({name:post,url:"/admin/mpbase1"});
                        } else {
                            this.fail("信息不能为空");
                        }
                        _context2.next = 8;
                        break;

                    case 5:
                        this.meta_title = "自动回复";
                        this.assign({ "navxs": true, "bg": "bg-dark" });
                        return _context2.abrupt('return', this.display());

                    case 8:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, huifuAction, this);
    });

    /**
    * 素材管理
    * */

    _class.prototype.materialAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var subcat, cate;
            return _regenerator2.default.wrap(function _callee$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            //conosle.log(this.a);
                            this.meta_title = "素材管理";
                            this.assign({ "navxs": true, "bg": "bg-dark" });
                            //let cat=await this.model('category').get_category(1,"url");
                            //获取某个栏目的所有子栏目
                            _context3.next = 4;
                            return this.model('category').get_sub_category(1);

                        case 4:
                            subcat = _context3.sent;
                            _context3.next = 7;
                            return this.model('category').select();

                        case 7:
                            cate = _context3.sent;

                            //let treecat = arr_to_tree(cate,42)
                            //console.log(treecat)
                            this.display();

                        case 9:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee, this);
        }));

        function materialAction() {
            return _ref2.apply(this, arguments);
        }

        return materialAction;
    }();

    /**
     *测试
     */


    _class.prototype.testAction = function testAction() {
        var wapi = new _wechatApi2.default("wxf417a542a02aa8fc", "564033623a2ea9b19119f0164289ba45");
        var self = this;
        wapi.uploadMaterial('F:\\nodejs-www\\CmsWing\\www\\static\\admin\\img\\m0.jpg', "image", function (err, res) {
            think.log(res);
            console.log("err= " + err);
            self.end(res);
        });
        //this.end();
    };

    /**
     *新建图文
     */


    _class.prototype.createlocalAction = function createlocalAction() {
        this.meta_title = "新建高级图文";
        this.assign({ "navxs": true, "bg": "bg-dark" });
        this.display();
    };

    /**
     * 设置一条或者多条数据的状态
     */


    _class.prototype.setstatusAction = _regenerator2.default.mark(function setstatusAction() {
        return _regenerator2.default.wrap(function setstatusAction$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return _Base.prototype.setstatusAction.call(this, this, 'member_public');

                    case 2:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, setstatusAction, this);
    });
    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=mpbase1.js.map