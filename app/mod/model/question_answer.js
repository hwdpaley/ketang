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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$base) {
    (0, _inherits3.default)(_class, _think$model$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
    }

    //更新回复
    _class.prototype.updates = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var id, userup;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //添加或者新增基础内容
                            id = null;

                            if (!think.isEmpty(data.answer_id)) {
                                _context.next = 19;
                                break;
                            }

                            //新增主题
                            data.add_time = new Date().getTime();
                            _context.next = 5;
                            return this.add(data);

                        case 5:
                            id = _context.sent;

                            if (!id) {
                                _context.next = 17;
                                break;
                            }

                            _context.next = 9;
                            return this.model("question").where({ id: data.question_id }).increment('answer_count');

                        case 9:
                            _context.next = 11;
                            return this.model("question").where({ id: data.question_id }).update({ answer_users: data.uid, last_answer: id, update_time: data.add_time });

                        case 11:
                            _context.next = 13;
                            return this.model("question_user").thenAdd({ answer_count: 1, uid: data.uid }, { uid: data.uid });

                        case 13:
                            userup = _context.sent;

                            if (!(userup.type == "exist")) {
                                _context.next = 17;
                                break;
                            }

                            _context.next = 17;
                            return this.model("question_user").where({ uid: userup.id }).increment("answer_count", 1);

                        case 17:
                            _context.next = 21;
                            break;

                        case 19:
                            _context.next = 21;
                            return this.where({ answer_id: data.answer_id }).update(data);

                        case 21:
                            return _context.abrupt('return', { data: data, id: id });

                        case 22:
                        case 'end':
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
//# sourceMappingURL=question_answer.js.map