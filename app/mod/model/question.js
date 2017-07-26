// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------

'use strict';
/**
 * model
 */

exports.__esModule = true;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$base) {
    (0, _inherits3.default)(_class, _think$model$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
    }

    //更新主题
    _class.prototype.updates = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getTime();
            var id, userup, status;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //添加或者新增基础内容
                            id = null;

                            data.update_time = time;

                            if (!think.isEmpty(data.id)) {
                                _context.next = 23;
                                break;
                            }

                            //新增主题
                            data.create_time = new Date().getTime();
                            data.focus_count = 1;
                            _context.next = 7;
                            return this.add(data);

                        case 7:
                            id = _context.sent;

                            if (!id) {
                                _context.next = 21;
                                break;
                            }

                            _context.next = 11;
                            return this.model("question_focus").add({ question_id: id, uid: data.uid, add_time: new Date().getTime() });

                        case 11:
                            _context.next = 13;
                            return this.model("keyword").addkey(data.keyname, id, data.uid, data.mod_id, 1);

                        case 13:
                            _context.next = 15;
                            return this.model("question_user").thenAdd({ question_count: 1, uid: data.uid }, { uid: data.uid });

                        case 15:
                            userup = _context.sent;

                            if (!(userup.type == "exist")) {
                                _context.next = 19;
                                break;
                            }

                            _context.next = 19;
                            return this.model("question_user").where({ id: userup.id }).increment("question_count", 1);

                        case 19:
                            _context.next = 21;
                            return this.model("search").addsearch(data.mod_id, id, data);

                        case 21:
                            _context.next = 29;
                            break;

                        case 23:
                            //更新主题
                            status = this.update(data);

                            console.log(data);
                            //更新关键词
                            //获取相关话题;
                            _context.next = 27;
                            return this.model("keyword").updatekey(data.keyname, data.id, data.userid, data.mod_id, 1);

                        case 27:
                            _context.next = 29;
                            return this.model("search").updatesearch(data.mod_id, data);

                        case 29:
                            return _context.abrupt("return", { data: data, id: id });

                        case 30:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function updates() {
            return _ref.apply(this, arguments);
        }

        return updates;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=question.js.map