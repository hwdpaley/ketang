'use strict';

exports.__esModule = true;

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

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

var _thinkPagination = require('think-pagination');

var _thinkPagination2 = _interopRequireDefault(_thinkPagination);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');

var _class = function (_Base) {
    (0, _inherits3.default)(_class, _Base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
    }

    /**
     * index action
     * @return {Promise} []
     * 封面入口
     */
    _class.prototype.indexAction = function indexAction() {
        //console.log(this);
        //auto render template file index_index.html

        this.end(2222);
        return this.display();
    };

    /**
     * 列表入口
     * @returns {*}
     */


    _class.prototype.listAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var method, cate, model, subcate, num, breadcrumb, map, o, order, group_id, data, _iterator, _isArray, _i, _ref2, _v, html, _iterator2, _isArray2, _i2, _ref3, v;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //跨域
                            method = this.http.method.toLowerCase();

                            if (!(method === "options")) {
                                _context.next = 5;
                                break;
                            }

                            this.setCorsHeader();
                            this.end();
                            return _context.abrupt('return');

                        case 5:
                            this.setCorsHeader();

                            //获取栏目信息
                            cate = this.m_cate;

                            cate = think.extend({}, cate);

                            //栏目权限验证
                            _context.next = 10;
                            return this.c_verify("visit");

                        case 10:

                            // 获取当前栏目的模型
                            model = this.mod;

                            this.assign('model', model);

                            //获取当前分类的所有子栏目
                            _context.next = 14;
                            return this.model('category').get_sub_category(cate.id);

                        case 14:
                            subcate = _context.sent;

                            subcate.push(cate.id);

                            //当前栏目列表每页行数
                            num = this.page_num();

                            //获取面包屑信息

                            _context.next = 19;
                            return this.model('category').get_parent_category(cate.id, true);

                        case 19:
                            breadcrumb = _context.sent;


                            //获取列表数据
                            //条件
                            map = {
                                'category_id': ['IN', subcate]
                            };
                            //排序

                            o = {};
                            order = this.modget(1) || 0;

                            order = Number(order);
                            _context.t0 = order;
                            _context.next = _context.t0 === 1 ? 27 : _context.t0 === 2 ? 29 : _context.t0 === 3 ? 32 : 35;
                            break;

                        case 27:
                            o.popular_value = 'DESC';
                            return _context.abrupt('break', 36);

                        case 29:
                            map.is_recommend = 1;
                            o.id = 'DESC';
                            return _context.abrupt('break', 36);

                        case 32:
                            map.answer_count = 0;
                            o.id = 'DESC';
                            return _context.abrupt('break', 36);

                        case 35:
                            o.update_time = 'DESC';

                        case 36:
                            this.assign('order', order);
                            //分组
                            group_id = 0;

                            if (!think.isEmpty(this.modget(2)) && this.modget(2) != 0) {
                                map.group_id = this.modget(2);
                                group_id = map.group_id;
                            }

                            _context.next = 41;
                            return this.model(this.mod.name).where(map).page(this.param('page'), num).order(o).countSelect();

                        case 41:
                            data = _context.sent;
                            _iterator = data.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 43:
                            if (!_isArray) {
                                _context.next = 49;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 46;
                                break;
                            }

                            return _context.abrupt('break', 57);

                        case 46:
                            _ref2 = _iterator[_i++];
                            _context.next = 53;
                            break;

                        case 49:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 52;
                                break;
                            }

                            return _context.abrupt('break', 57);

                        case 52:
                            _ref2 = _i.value;

                        case 53:
                            _v = _ref2;

                            _v.imgs = img_text_view(_v.detail, 200, 120);

                        case 55:
                            _context.next = 43;
                            break;

                        case 57:
                            //分页
                            html = (0, _thinkPagination2.default)(data, this.http, {
                                desc: false, //show description
                                pageNum: 2,
                                url: '', //page url, when not set, it will auto generated
                                class: 'nomargin', //pagenation extra class
                                text: {
                                    next: '下一页',
                                    prev: '上一页',
                                    total: 'count: ${count} , pages: ${pages}'
                                }
                            });

                            this.assign('pagination', html);
                            /* 模板赋值并渲染模板 */
                            this.assign("group_id", group_id);
                            this.assign('category', cate);
                            this.assign('list', data.data);
                            this.assign('count', data.count);
                            this.assign('breadcrumb', breadcrumb);

                            //跨屏

                            if (!checkMobile(this.userAgent())) {
                                _context.next = 96;
                                break;
                            }

                            if (!this.isAjax("get")) {
                                _context.next = 93;
                                break;
                            }

                            _iterator2 = data.data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 67:
                            if (!_isArray2) {
                                _context.next = 73;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 70;
                                break;
                            }

                            return _context.abrupt('break', 92);

                        case 70:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 77;
                            break;

                        case 73:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 76;
                                break;
                            }

                            return _context.abrupt('break', 92);

                        case 76:
                            _ref3 = _i2.value;

                        case 77:
                            v = _ref3;
                            _context.next = 80;
                            return get_nickname(v.uid);

                        case 80:
                            v.nickname = _context.sent;

                            v.create_time = (0, _moment2.default)(v.create_time).fromNow();
                            _context.next = 84;
                            return this.model("category").get_category(v.category_id, "title");

                        case 84:
                            v.catename = _context.sent;

                            v.detail = v.detail.replace(/<[^>]+>/g, "");
                            _context.next = 88;
                            return get_nickname(v.answer_users);

                        case 88:
                            v.answer_username = _context.sent;

                            v.update_time = (0, _moment2.default)(v.update_time).fromNow();

                        case 90:
                            _context.next = 67;
                            break;

                        case 92:
                            return _context.abrupt('return', this.json(data));

                        case 93:
                            return _context.abrupt('return', this.modtemp(this.mod.name, "mobile"));

                        case 96:
                            return _context.abrupt('return', this.modtemp(this.mod.name));

                        case 97:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function listAction() {
            return _ref.apply(this, arguments);
        }

        return listAction;
    }();

    /**
     * 详情入口
     * @returns {*}
     */


    _class.prototype.detailAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var id, info, breadcrumb, cate, focus, focususer, answer, _iterator3, _isArray3, _i3, _ref5, a, where, tagid, rtid, rq, str, img, _iterator4, _isArray4, _i4, _ref6, v;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            //获取详情id
                            id = this.get("id");
                            //判断请求参数是否合法。

                            if (think.isNumberString(id)) {
                                _context2.next = 4;
                                break;
                            }

                            this.http.error = new Error("请求参数不合法！");
                            return _context2.abrupt('return', think.statusAction(702, this.http));

                        case 4:
                            _context2.next = 6;
                            return this.model("question").find(id);

                        case 6:
                            info = _context2.sent;

                            if (!think.isEmpty(info)) {
                                _context2.next = 10;
                                break;
                            }

                            this.http.error = new Error("信息不存在！");
                            return _context2.abrupt('return', think.statusAction(702, this.http));

                        case 10:
                            _context2.next = 12;
                            return this.c_verify("visit", info.category_id);

                        case 12:

                            this.assign("info", info);

                            //seo
                            this.meta_title = info.title; //标题
                            this.keywords = info.keyname ? info.keyname : ''; //seo关键词
                            this.description = info.description ? info.description : ""; //seo描述

                            //获取面包屑信息
                            _context2.next = 18;
                            return this.model('category').get_parent_category(info.category_id, true);

                        case 18:
                            breadcrumb = _context2.sent;

                            this.assign('breadcrumb', breadcrumb);
                            //获取栏目信息
                            _context2.next = 22;
                            return this.category(info.category_id);

                        case 22:
                            cate = _context2.sent;

                            this.assign('category', cate);
                            //当前用户是否关注

                            if (!this.is_login) {
                                _context2.next = 29;
                                break;
                            }

                            _context2.next = 27;
                            return this.model("question_focus").where({ question_id: id, uid: this.user.uid }).find();

                        case 27:
                            focus = _context2.sent;

                            this.assign("focus", focus);

                        case 29:
                            _context2.next = 31;
                            return this.model("question_focus").where({ question_id: id }).getField("uid");

                        case 31:
                            focususer = _context2.sent;

                            this.assign("focususer", focususer);
                            //访问统计
                            _context2.next = 35;
                            return this.model("question").where({ id: info.id }).increment('view');

                        case 35:
                            _context2.next = 37;
                            return this.model("question_answer").where({ question_id: id }).select();

                        case 37:
                            answer = _context2.sent;
                            _iterator3 = answer, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 39:
                            if (!_isArray3) {
                                _context2.next = 45;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context2.next = 42;
                                break;
                            }

                            return _context2.abrupt('break', 55);

                        case 42:
                            _ref5 = _iterator3[_i3++];
                            _context2.next = 49;
                            break;

                        case 45:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context2.next = 48;
                                break;
                            }

                            return _context2.abrupt('break', 55);

                        case 48:
                            _ref5 = _i3.value;

                        case 49:
                            a = _ref5;
                            _context2.next = 52;
                            return this.model("question_answer_comments").where({ answer_id: a.answer_id }).count("id");

                        case 52:
                            a.ccount = _context2.sent;

                        case 53:
                            _context2.next = 39;
                            break;

                        case 55:
                            this.assign("answer", answer);
                            //console.log(cate);
                            //相关问题
                            where = { docid: id, mod_type: 1, mod_id: cate.model
                                //获取相关tagid
                            };
                            _context2.next = 59;
                            return this.model("keyword_data").where(where).getField("tagid");

                        case 59:
                            tagid = _context2.sent;

                            if (think.isEmpty(tagid)) {
                                _context2.next = 68;
                                break;
                            }

                            _context2.next = 63;
                            return this.model("keyword_data").where({ tagid: ["IN", tagid], mod_id: cate.model }).getField("docid");

                        case 63:
                            rtid = _context2.sent;
                            _context2.next = 66;
                            return this.model("question").where({ id: ["IN", rtid] }).limit(10).select();

                        case 66:
                            rq = _context2.sent;

                            this.assign("rq", rq);

                        case 68:

                            //不同的设备,压缩不同的图片尺寸
                            str = info.detail;

                            if (!think.isEmpty(str)) {
                                img = void 0;

                                if (checkMobile(this.userAgent())) {
                                    //手机端
                                    img = image_view(str, 640, 4);
                                } else {
                                    //pc端

                                    img = image_view(str, 847, 0);
                                }
                                info.detail = img;
                            }

                            if (!checkMobile(this.userAgent())) {
                                _context2.next = 102;
                                break;
                            }

                            if (!this.isAjax("get")) {
                                _context2.next = 99;
                                break;
                            }

                            _iterator4 = data.data, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 73:
                            if (!_isArray4) {
                                _context2.next = 79;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context2.next = 76;
                                break;
                            }

                            return _context2.abrupt('break', 98);

                        case 76:
                            _ref6 = _iterator4[_i4++];
                            _context2.next = 83;
                            break;

                        case 79:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context2.next = 82;
                                break;
                            }

                            return _context2.abrupt('break', 98);

                        case 82:
                            _ref6 = _i4.value;

                        case 83:
                            v = _ref6;
                            _context2.next = 86;
                            return get_nickname(v.uid);

                        case 86:
                            v.nickname = _context2.sent;

                            v.create_time = (0, _moment2.default)(v.create_time).fromNow();
                            _context2.next = 90;
                            return this.model("category").get_category(v.category_id, "title");

                        case 90:
                            v.catename = _context2.sent;

                            v.detail = v.detail.replace(/<[^>]+>/g, "");
                            _context2.next = 94;
                            return get_nickname(v.answer_users);

                        case 94:
                            v.answer_username = _context2.sent;

                            v.update_time = (0, _moment2.default)(v.update_time).fromNow();

                        case 96:
                            _context2.next = 73;
                            break;

                        case 98:
                            return _context2.abrupt('return', this.json(data));

                        case 99:
                            return _context2.abrupt('return', this.modtemp("question", "mobile"));

                        case 102:
                            return _context2.abrupt('return', this.modtemp());

                        case 103:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function detailAction() {
            return _ref4.apply(this, arguments);
        }

        return detailAction;
    }();

    return _class;
}(_index2.default);

exports.default = _class;
//# sourceMappingURL=index.js.map