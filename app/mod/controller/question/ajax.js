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

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

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

        return this.display();
    };

    /**
     * ajax获取栏目分组
     * @param cid 栏目id
     * @returns {*}
     */


    _class.prototype.getgroupsAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var cid, groups;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            cid = this.get("cid");
                            _context.next = 3;
                            return this.model('category').get_groups(cid);

                        case 3:
                            groups = _context.sent;

                            if (think.isEmpty(groups)) {
                                groups = false;
                            }
                            return _context.abrupt('return', this.json(groups));

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getgroupsAction() {
            return _ref.apply(this, arguments);
        }

        return getgroupsAction;
    }();
    //关注


    _class.prototype.ajaxquestionfocusAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var type, id, res;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.weblogin();

                        case 2:
                            //获取关注的类型，1关注，2取消关注
                            type = this.get("type");
                            //获取要关注的id;

                            id = this.get("id");
                            res = void 0;
                            _context2.t0 = Number(type);
                            _context2.next = _context2.t0 === 1 ? 8 : _context2.t0 === 2 ? 14 : 20;
                            break;

                        case 8:
                            _context2.next = 10;
                            return this.model("question_focus").add({ question_id: id, uid: this.user.uid, add_time: new Date().getTime() });

                        case 10:
                            _context2.next = 12;
                            return this.model("question").where({ id: id }).increment("focus_count");

                        case 12:
                            this.success({ name: "关注成功!" });
                            return _context2.abrupt('break', 21);

                        case 14:
                            _context2.next = 16;
                            return this.model("question_focus").where({ question_id: id, uid: this.user.uid }).delete();

                        case 16:
                            _context2.next = 18;
                            return this.model("question").where({ id: id }).decrement("focus_count");

                        case 18:
                            this.success({ name: "取消关注成功!" });
                            return _context2.abrupt('break', 21);

                        case 20:
                            return _context2.abrupt('return', this.fail("缺少参数!"));

                        case 21:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function ajaxquestionfocusAction() {
            return _ref2.apply(this, arguments);
        }

        return ajaxquestionfocusAction;
    }();
    //获取评论


    _class.prototype.ajaxanswercommentsAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var answer_id, comments, _iterator, _isArray, _i, _ref4, c, is_admin;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            answer_id = this.get("answer_id");
                            //let comments =

                            _context3.next = 3;
                            return this.model("question_answer_comments").where({ answer_id: answer_id }).select();

                        case 3:
                            comments = _context3.sent;
                            _iterator = comments, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 5:
                            if (!_isArray) {
                                _context3.next = 11;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context3.next = 8;
                                break;
                            }

                            return _context3.abrupt('break', 22);

                        case 8:
                            _ref4 = _iterator[_i++];
                            _context3.next = 15;
                            break;

                        case 11:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context3.next = 14;
                                break;
                            }

                            return _context3.abrupt('break', 22);

                        case 14:
                            _ref4 = _i.value;

                        case 15:
                            c = _ref4;
                            _context3.next = 18;
                            return get_nickname(c.uid);

                        case 18:
                            c.username = _context3.sent;

                            c.time = (0, _moment2.default)(c.time).fromNow();

                        case 20:
                            _context3.next = 5;
                            break;

                        case 22:
                            //判断是不是超级管理员
                            is_admin = false;

                            if (this.is_login) {
                                is_admin = in_array(parseInt(this.user.uid), this.config('user_administrator'));
                            }
                            this.json({ data: comments, is_login: this.is_login, is_admin: is_admin });

                        case 25:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function ajaxanswercommentsAction() {
            return _ref3.apply(this, arguments);
        }

        return ajaxanswercommentsAction;
    }();

    _class.prototype.ajaxanswercommentspostAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var data, add;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return this.weblogin();

                        case 2:
                            data = this.post();

                            data.uid = this.user.uid;
                            data.time = new Date().getTime();
                            _context4.next = 7;
                            return this.model("question_answer_comments").add(data);

                        case 7:
                            add = _context4.sent;

                            if (!add) {
                                _context4.next = 12;
                                break;
                            }

                            return _context4.abrupt('return', this.success({ name: "评论成功!" }));

                        case 12:
                            return _context4.abrupt('return', this.fail("评论失败！"));

                        case 13:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function ajaxanswercommentspostAction() {
            return _ref5.apply(this, arguments);
        }

        return ajaxanswercommentspostAction;
    }();
    //编辑回复


    _class.prototype.editanswerAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var answer_id, answer;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return this.weblogin();

                        case 2:
                            answer_id = this.get("id");
                            _context5.next = 5;
                            return this.model("question_answer").where({ answer_id: answer_id }).find();

                        case 5:
                            answer = _context5.sent;

                            if (in_array(parseInt(this.user.uid), this.config('user_administrator'))) {
                                _context5.next = 10;
                                break;
                            }

                            if (!(answer.uid != this.user.uid)) {
                                _context5.next = 10;
                                break;
                            }

                            this.http.error = new Error('你不能编辑，不属于自己的东西！');
                            return _context5.abrupt('return', think.statusAction(702, this.http));

                        case 10:
                            this.assign("answer", answer);
                            //pc
                            return _context5.abrupt('return', this.modtemp());

                        case 12:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function editanswerAction() {
            return _ref6.apply(this, arguments);
        }

        return editanswerAction;
    }();

    _class.prototype.delanswerAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var answer_id, answer;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return this.weblogin();

                        case 2:
                            answer_id = this.get("id");
                            _context6.next = 5;
                            return this.model("question_answer").where({ answer_id: answer_id }).find();

                        case 5:
                            answer = _context6.sent;

                            if (in_array(parseInt(this.user.uid), this.config('user_administrator'))) {
                                _context6.next = 10;
                                break;
                            }

                            if (!(answer.uid != this.user.uid)) {
                                _context6.next = 10;
                                break;
                            }

                            this.http.error = new Error('你不能编辑，不属于自己的东西！');
                            return _context6.abrupt('return', think.statusAction(702, this.http));

                        case 10:
                            _context6.next = 12;
                            return this.model("question_answer").where({ answer_id: answer_id }).delete();

                        case 12:
                            _context6.next = 14;
                            return this.model("question_answer_comments").where({ answer_id: answer_id }).delete();

                        case 14:
                            _context6.next = 16;
                            return this.model("question").where({ id: this.get("qid") }).decrement("answer_count", 1);

                        case 16:
                            return _context6.abrupt('return', this.success({ name: "删除成功!" }));

                        case 17:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function delanswerAction() {
            return _ref7.apply(this, arguments);
        }

        return delanswerAction;
    }();

    _class.prototype.delcommentsAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var id, comments;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return this.weblogin();

                        case 2:
                            id = this.get("id");
                            _context7.next = 5;
                            return this.model("question_answer_comments").where({ id: id }).find();

                        case 5:
                            comments = _context7.sent;

                            if (in_array(parseInt(this.user.uid), this.config('user_administrator'))) {
                                _context7.next = 10;
                                break;
                            }

                            if (!(comments.uid != this.user.uid)) {
                                _context7.next = 10;
                                break;
                            }

                            this.http.error = new Error('你不能编辑，不属于自己的东西！');
                            return _context7.abrupt('return', think.statusAction(702, this.http));

                        case 10:
                            _context7.next = 12;
                            return this.model("question_answer_comments").where({ id: id }).delete();

                        case 12:
                            return _context7.abrupt('return', this.success({ name: "删除成功!" }));

                        case 13:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function delcommentsAction() {
            return _ref8.apply(this, arguments);
        }

        return delcommentsAction;
    }();

    return _class;
}(_index2.default);

exports.default = _class;
//# sourceMappingURL=ajax.js.map