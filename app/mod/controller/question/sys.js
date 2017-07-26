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

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

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
     * 封面入口
     */
    _class.prototype.indexAction = function indexAction() {
        //console.log(this);
        //auto render template file index_index.html

        return this.display();
    };

    _class.prototype.addAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var cid, breadcrumb;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.weblogin();

                        case 2:
                            cid = this.get("cid");
                            //验证用户权限

                            _context.next = 5;
                            return this.c_verify("add", cid, "您所在的用户组，没有发布权限！");

                        case 5:
                            _context.next = 7;
                            return this.model('category').get_parent_category(cid, true);

                        case 7:
                            breadcrumb = _context.sent;

                            this.assign('breadcrumb', breadcrumb);
                            console.log(breadcrumb);
                            this.assign('category', this.m_cate);
                            this.meta_title = "发布";

                            if (!checkMobile(this.userAgent())) {
                                _context.next = 16;
                                break;
                            }

                            return _context.abrupt('return', this.modtemp("question", "mobile"));

                        case 16:
                            return _context.abrupt('return', this.modtemp());

                        case 17:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function addAction() {
            return _ref.apply(this, arguments);
        }

        return addAction;
    }();

    _class.prototype.testAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            return _context2.abrupt('return', this.display());

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function testAction() {
            return _ref2.apply(this, arguments);
        }

        return testAction;
    }();
    //编辑主题


    _class.prototype.editAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var info, breadcrumb, cate, group, where, keyword, topicid;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return this.weblogin();

                        case 2:
                            _context3.next = 4;
                            return this.model("question").find(this.get("id"));

                        case 4:
                            info = _context3.sent;

                            //console.log(info);
                            this.assign("info", info);
                            //后台管理员跳过验证

                            if (in_array(parseInt(this.user.uid), this.config('user_administrator'))) {
                                _context3.next = 10;
                                break;
                            }

                            if (!(info.uid != this.user.uid)) {
                                _context3.next = 10;
                                break;
                            }

                            this.http.error = new Error('你不能编辑，不属于自己的东西！');
                            return _context3.abrupt('return', think.statusAction(702, this.http));

                        case 10:
                            _context3.next = 12;
                            return this.model('category').get_parent_category(info.category_id, true);

                        case 12:
                            breadcrumb = _context3.sent;

                            this.assign('breadcrumb', breadcrumb);
                            //获取栏目信息
                            _context3.next = 16;
                            return this.category(info.category_id);

                        case 16:
                            cate = _context3.sent;

                            // console.log(cate);
                            this.assign('category', cate);
                            //获取分组
                            _context3.next = 20;
                            return this.model("category").get_groups(cate.id);

                        case 20:
                            group = _context3.sent;

                            // console.log(group);
                            if (!think.isEmpty(group)) {
                                this.assign('group', think._.filter(group, { 'id': info.group_id }));
                            }
                            //获取相关话题;
                            where = {};

                            where.docid = info.id;
                            where.mod_type = 1;
                            where.mod_id = cate.model;
                            keyword = void 0;
                            _context3.next = 29;
                            return think.model("keyword_data", think.config("db")).where(where).getField("tagid");

                        case 29:
                            topicid = _context3.sent;

                            if (think.isEmpty(topicid)) {
                                _context3.next = 35;
                                break;
                            }

                            _context3.next = 33;
                            return think.model("keyword", think.config("db")).where({ id: ["IN", topicid] }).getField("keyname");

                        case 33:
                            keyword = _context3.sent;

                            if (!think.isEmpty(keyword)) {
                                this.assign("keyword", keyword.join(","));
                            }

                        case 35:
                            //seo
                            this.meta_title = "编辑"; //标题
                            return _context3.abrupt('return', this.display());

                        case 37:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function editAction() {
            return _ref3.apply(this, arguments);
        }

        return editAction;
    }();
    //添加或编辑主题


    _class.prototype.updateAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var data, roleid, addexa, addp, res;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return this.weblogin();

                        case 2:
                            data = this.post();

                            if (!think.isEmpty(data.id)) {
                                _context4.next = 23;
                                break;
                            }

                            //发布
                            data.uid = this.user.uid;
                            data.ip = _ip2int(this.ip());
                            //检查本栏目发布是否需要审核
                            _context4.next = 8;
                            return this.model("member").where({ id: this.is_login }).getField('groupid', true);

                        case 8:
                            roleid = _context4.sent;
                            _context4.next = 11;
                            return this.model("category_priv").priv(data.category_id, roleid, 'addexa');

                        case 11:
                            addexa = _context4.sent;

                            if (!addexa) {
                                _context4.next = 21;
                                break;
                            }

                            _context4.next = 15;
                            return this.model("approval").adds(data.mod_id, this.user.uid, data.title, data);

                        case 15:
                            addp = _context4.sent;

                            if (!addp) {
                                _context4.next = 20;
                                break;
                            }

                            return _context4.abrupt('return', this.success({ name: "发布成功, 请等待管理员审核...", url: '/' + data.category_id }));

                        case 20:
                            return _context4.abrupt('return', this.fail("操作失败！"));

                        case 21:
                            _context4.next = 24;
                            break;

                        case 23:
                            //修改
                            data.userid = this.user.uid;

                        case 24:
                            data.anonymous = data.anonymous || 1;
                            //console.log(data);
                            // return this.fail(data);
                            _context4.next = 27;
                            return this.model('question').updates(data);

                        case 27:
                            res = _context4.sent;

                            if (!res) {
                                _context4.next = 38;
                                break;
                            }

                            if (res.data.id) {
                                _context4.next = 35;
                                break;
                            }

                            _context4.next = 32;
                            return this.model("action").log("addquestion", "question", res.id, this.user.uid, this.ip(), this.http.url);

                        case 32:
                            return _context4.abrupt('return', this.success({ name: "添加成功", url: '/mod/question/' + res.id }));

                        case 35:
                            return _context4.abrupt('return', this.success({ name: "更新成功", url: '/mod/question/' + res.data.id }));

                        case 36:
                            _context4.next = 39;
                            break;

                        case 38:
                            return _context4.abrupt('return', this.fail("操作失败！"));

                        case 39:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function updateAction() {
            return _ref4.apply(this, arguments);
        }

        return updateAction;
    }();
    //添加或编辑回复


    _class.prototype.updateanswerAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var data, res;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return this.weblogin();

                        case 2:
                            data = this.post();

                            if (think.isEmpty(data.answer_id)) {
                                data.uid = this.user.uid;
                                data.ip = _ip2int(this.ip());
                                data.anonymous = data.anonymous || 1;
                            }
                            //console.log(data);
                            _context5.next = 6;
                            return this.model('question_answer').updates(data);

                        case 6:
                            res = _context5.sent;

                            if (res) {
                                //行为记录
                                if (!res.data.answer_id) {
                                    //添加操作日志，可根据需求后台设置日志类型。
                                    //await this.model("action").log("add_document", "document", res.id, this.user.uid, this.ip(), this.http.url);
                                    this.success({ name: "添加成功", data: res });
                                } else {
                                    this.success({ name: "更新成功", data: res });
                                }
                            } else {
                                this.fail("操作失败！");
                            }

                        case 8:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function updateanswerAction() {
            return _ref5.apply(this, arguments);
        }

        return updateanswerAction;
    }();

    return _class;
}(_index2.default);

exports.default = _class;
//# sourceMappingURL=sys.js.map