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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$base) {
    (0, _inherits3.default)(_class, _think$model$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
    }

    /**
     * 获取行为数据
     * @param string id 行为id
     * @param string field 需要获取的字段
     * @author arterli <arterli@qq.com>
     */
    _class.prototype.get_action = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id, field) {
            var list, map;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            id = id || null, field = field || null;

                            if (!(think.isEmpty(id) && !think.isNumberString(id))) {
                                _context.next = 3;
                                break;
                            }

                            return _context.abrupt('return', false);

                        case 3:
                            list = {};
                            map = { 'status': ['>', -1], 'id': id };
                            _context.next = 7;
                            return this.where(map).field(true).find();

                        case 7:
                            list[id] = _context.sent;
                            return _context.abrupt('return', think.isEmpty(field) ? list[id] : list[id][field]);

                        case 9:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function get_action(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return get_action;
    }();

    /**
     * 记录行为日志，并执行该行为的规则
     * await this.model("action").log("action","model","record_id","user_id",this.ip(),this.http.url)
     * @param string action 行为标识
     * @param string model 触发行为的模型名
     * @param int record_id 触发行为的记录id
     * @param int user_id 执行行为的用户id
     * @return boolean
     * @author arterli <arterli@qq.com>
     */


    _class.prototype.log = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(action, model, record_id, user_id, ip, url) {
            var user, id, action_info, data, match, _log, replace, _iterator, _isArray, _i, _ref3, val, param, rules, res;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (!(think.isEmpty(action) || think.isEmpty(model) || think.isEmpty(record_id))) {
                                _context2.next = 2;
                                break;
                            }

                            return _context2.abrupt('return', '参数不能为空');

                        case 2:
                            if (!think.isEmpty(user_id)) {
                                _context2.next = 8;
                                break;
                            }

                            _context2.next = 5;
                            return this.session('userInfo');

                        case 5:
                            user = _context2.sent;
                            id = user.id;

                            user_id = id;

                        case 8:
                            _context2.next = 10;
                            return this.where({ name: action }).find();

                        case 10:
                            action_info = _context2.sent;

                            if (!(action_info.status != 1)) {
                                _context2.next = 13;
                                break;
                            }

                            return _context2.abrupt('return', '该行为被禁用');

                        case 13:

                            //插入行为日志

                            data = {
                                action_id: action_info.id,
                                user_id: user_id,
                                action_ip: _ip2int(ip),
                                model: model,
                                record_id: record_id,
                                create_time: new Date().valueOf()
                            };

                            data.remark = '';
                            //解析日志规则，生成日志备注；

                            if (think.isEmpty(action_info.log)) {
                                _context2.next = 55;
                                break;
                            }

                            match = action_info.log.match(/\[(\S+?)\]/g);

                            if (think.isEmpty(match)) {
                                _context2.next = 52;
                                break;
                            }

                            _log = {
                                user: user_id,
                                record: record_id,
                                model: model,
                                time: new Date().valueOf(),
                                data: {
                                    user: user_id,
                                    record: record_id,
                                    model: model,
                                    time: new Date().valueOf()
                                }
                            };
                            replace = [];
                            _iterator = match, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 21:
                            if (!_isArray) {
                                _context2.next = 27;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context2.next = 24;
                                break;
                            }

                            return _context2.abrupt('break', 49);

                        case 24:
                            _ref3 = _iterator[_i++];
                            _context2.next = 31;
                            break;

                        case 27:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context2.next = 30;
                                break;
                            }

                            return _context2.abrupt('break', 49);

                        case 30:
                            _ref3 = _i.value;

                        case 31:
                            val = _ref3;

                            val = val.replace(/(^\[)|(\]$)/g, "");
                            param = val.split('|');
                            //console.log(param);

                            if (think.isEmpty(param[1])) {
                                _context2.next = 46;
                                break;
                            }

                            if (!(param[0] == 'user')) {
                                _context2.next = 43;
                                break;
                            }

                            _context2.t0 = replace;
                            _context2.next = 39;
                            return call_user_func(param[1], _log[param[0]]);

                        case 39:
                            _context2.t1 = _context2.sent;

                            _context2.t0.push.call(_context2.t0, _context2.t1);

                            _context2.next = 44;
                            break;

                        case 43:
                            replace.push(call_user_func(param[1], _log[param[0]]));

                        case 44:
                            _context2.next = 47;
                            break;

                        case 46:
                            replace.push(_log[param[0]]);

                        case 47:
                            _context2.next = 21;
                            break;

                        case 49:

                            data.remark = str_replace(match, replace, action_info.log);
                            //console.log(data.remark)

                            _context2.next = 53;
                            break;

                        case 52:
                            data.remark = action_info.log;

                        case 53:
                            _context2.next = 56;
                            break;

                        case 55:
                            //未定义日志规则,记录操作URL
                            data.remark = '操作url:' + url;

                        case 56:
                            _context2.next = 58;
                            return this.model("action_log").add(data);

                        case 58:
                            if (think.isEmpty(action_info.rule)) {
                                _context2.next = 65;
                                break;
                            }

                            _context2.next = 61;
                            return this.parse_action(action, user_id);

                        case 61:
                            rules = _context2.sent;
                            _context2.next = 64;
                            return this.execute_action(rules, action_info.id, user_id);

                        case 64:
                            res = _context2.sent;

                        case 65:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function log(_x3, _x4, _x5, _x6, _x7, _x8) {
            return _ref2.apply(this, arguments);
        }

        return log;
    }();

    /**
     * 解析行为规则
     * 规则定义  table:table|field:field|condition:condition|rule:rule[|cycle:cycle|max:max][;......]
     * 规则字段解释：table->要操作的数据表，不需要加表前缀；
     *              field->要操作的字段；
     *              condition->操作的条件，目前支持字符串，默认变量 ${self} 为执行行为的用户
     *              rule->对字段进行的具体操作，目前支持加或者减，如：10，-10
     *              cycle->执行周期，单位（小时），表示cycle小时内最多执行max次
     *              max->单个周期内的最大执行次数（cycle和max必须同时定义，否则无效）
     * 单个行为后可加 ； 连接其他规则
     * @param string action 行为id或者name
     * @param int self 替换规则里的变量为执行用户的id
     * @return boolean|array: false解析出错 ， 成功返回规则数组
     * @author arterli <arterli@qq.com>
     */

    _class.prototype.parse_action = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(action, self) {
            var map, info, rules, ret, _iterator2, _isArray2, _i2, _ref5, val, obj, rule, _iterator3, _isArray3, _i3, _ref6, v, field;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!think.isEmpty(action)) {
                                _context3.next = 2;
                                break;
                            }

                            return _context3.abrupt('return', false);

                        case 2:
                            //参数支持id或者name
                            map = void 0;

                            if (think.isNumberString(action)) {
                                map = { "id": action };
                            } else {
                                map = { "name": action };
                            }
                            //查询行为信息
                            _context3.next = 6;
                            return this.where(map).find();

                        case 6:
                            info = _context3.sent;

                            if (!(!info || info.status != 1)) {
                                _context3.next = 9;
                                break;
                            }

                            return _context3.abrupt('return', false);

                        case 9:

                            //解析规则:table:table|field:field|condition:condition|rule:rule[|cycle:cycle|max:max][;......]

                            rules = info.rule;

                            rules = str_replace('${self}', self, rules);
                            rules = rules.split(";");
                            //console.log(rules);
                            ret = [];
                            _iterator2 = rules, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 14:
                            if (!_isArray2) {
                                _context3.next = 20;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context3.next = 17;
                                break;
                            }

                            return _context3.abrupt('break', 48);

                        case 17:
                            _ref5 = _iterator2[_i2++];
                            _context3.next = 24;
                            break;

                        case 20:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context3.next = 23;
                                break;
                            }

                            return _context3.abrupt('break', 48);

                        case 23:
                            _ref5 = _i2.value;

                        case 24:
                            val = _ref5;

                            if (!val) {
                                _context3.next = 46;
                                break;
                            }

                            obj = {};
                            rule = val.split("|");
                            _iterator3 = rule, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 29:
                            if (!_isArray3) {
                                _context3.next = 35;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context3.next = 32;
                                break;
                            }

                            return _context3.abrupt('break', 45);

                        case 32:
                            _ref6 = _iterator3[_i3++];
                            _context3.next = 39;
                            break;

                        case 35:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context3.next = 38;
                                break;
                            }

                            return _context3.abrupt('break', 45);

                        case 38:
                            _ref6 = _i3.value;

                        case 39:
                            v = _ref6;
                            field = think.isEmpty(v) ? [] : v.split(":");

                            console.log(field);
                            if (!think.isEmpty(field)) {
                                obj[field[0]] = field[1];
                            }

                        case 43:
                            _context3.next = 29;
                            break;

                        case 45:
                            ret.push(obj);

                        case 46:
                            _context3.next = 14;
                            break;

                        case 48:
                            return _context3.abrupt('return', ret);

                        case 49:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function parse_action(_x9, _x10) {
            return _ref4.apply(this, arguments);
        }

        return parse_action;
    }();

    /**
     * 执行行为
     * @param array $rules 解析后的规则数组
     * @param int $action_id 行为id
     * @param array $user_id 执行的用户id
     * @return boolean false 失败 ， true 成功
     * @author arterli <arterli@qq.com>
     */


    _class.prototype.execute_action = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(rules, action_id, user_id) {
            var ret, _iterator4, _isArray4, _i4, _ref8, rule, map, exec_count, model, field, step, res;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            if (!(!rules || think.isEmpty(action_id) || think.isEmpty(user_id))) {
                                _context4.next = 2;
                                break;
                            }

                            return _context4.abrupt('return', false);

                        case 2:
                            ret = true;
                            _iterator4 = rules, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 4:
                            if (!_isArray4) {
                                _context4.next = 10;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context4.next = 7;
                                break;
                            }

                            return _context4.abrupt('break', 40);

                        case 7:
                            _ref8 = _iterator4[_i4++];
                            _context4.next = 14;
                            break;

                        case 10:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context4.next = 13;
                                break;
                            }

                            return _context4.abrupt('break', 40);

                        case 13:
                            _ref8 = _i4.value;

                        case 14:
                            rule = _ref8;

                            //检查执行周期
                            map = {
                                action_id: action_id,
                                user_id: user_id
                            };

                            if (!(!think.isEmpty(rule.cycle) && !think.isEmpty(rule.max))) {
                                _context4.next = 23;
                                break;
                            }

                            map.create_time = [">", new Date().valueOf() - rule.cycle * 3600 * 1000];
                            // console.log(map);
                            _context4.next = 20;
                            return this.model("action_log").where(map).count();

                        case 20:
                            exec_count = _context4.sent;

                            if (!(exec_count > rule.max)) {
                                _context4.next = 23;
                                break;
                            }

                            return _context4.abrupt('continue', 38);

                        case 23:
                            //执行数据库操作
                            model = this.model(rule.table);
                            field = rule.field;
                            step = parseInt(rule.rule);
                            res = void 0;

                            if (!(step >= 0)) {
                                _context4.next = 33;
                                break;
                            }

                            _context4.next = 30;
                            return model.where(rule.condition).increment(field, step);

                        case 30:
                            res = _context4.sent;
                            _context4.next = 37;
                            break;

                        case 33:
                            step = Math.abs(step);
                            _context4.next = 36;
                            return model.where(rule.condition).decrement(field, step);

                        case 36:
                            res = _context4.sent;

                        case 37:
                            //console.log(Math.abs(step));
                            if (!res) {
                                ret = false;
                            }

                        case 38:
                            _context4.next = 4;
                            break;

                        case 40:
                            return _context4.abrupt('return', ret);

                        case 41:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function execute_action(_x11, _x12, _x13) {
            return _ref7.apply(this, arguments);
        }

        return execute_action;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=action.js.map