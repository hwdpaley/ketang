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

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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
     * 更新广告
     *
     * @param spaceid 广告位id
     * @returns {Promise.<void>}
     */

    _class.prototype.upad = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(spaceid) {
            var json, replace, adtemp, info, setting, space, temp, match, _iterator, _isArray, _i, _ref2, val, param, loop, loopmatch, looparr, jsonarr, _iterator2, _isArray2, _i2, _ref3, v, reparr, _iterator3, _isArray3, _i3, _ref4, _val, _param, loopstr, items;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //获取广告模板
                            json = void 0, replace = [], adtemp = '', info = void 0, setting = void 0;
                            _context.next = 3;
                            return this.find({ where: { spaceid: spaceid } });

                        case 3:
                            space = _context.sent;
                            _context.next = 6;
                            return this.model('ext_ad_temp').find({ where: { name: space.type } });

                        case 6:
                            temp = _context.sent;

                            //console.log(temp);
                            match = temp.temp.match(/\[(\S+?)\]/g);

                            if (think.isEmpty(match)) {
                                _context.next = 116;
                                break;
                            }

                            if (!(temp.num == 1 && temp.option == 0)) {
                                _context.next = 52;
                                break;
                            }

                            _context.next = 12;
                            return this.model("ext_ad").where({ spaceid: space.spaceid, status: 1 }).order("sort ASC,addtime DESC").find();

                        case 12:
                            info = _context.sent;

                            if (think.isEmpty(info.setting)) {
                                _context.next = 50;
                                break;
                            }

                            setting = JSON.parse(info.setting);
                            setting[0].width = space.width;
                            setting[0].height = space.height;
                            json = (0, _stringify2.default)(setting[0]);
                            _iterator = match, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 19:
                            if (!_isArray) {
                                _context.next = 25;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 22;
                                break;
                            }

                            return _context.abrupt('break', 47);

                        case 22:
                            _ref2 = _iterator[_i++];
                            _context.next = 29;
                            break;

                        case 25:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 28;
                                break;
                            }

                            return _context.abrupt('break', 47);

                        case 28:
                            _ref2 = _i.value;

                        case 29:
                            val = _ref2;

                            val = val.replace(/(^\[)|(\]$)/g, "");
                            param = val.split('|');
                            //console.log(param);

                            if (!(param[0] === "url")) {
                                _context.next = 36;
                                break;
                            }

                            if (think.isEmpty(setting[0].url)) {
                                replace.push("javascript:void(0)");
                            } else {
                                replace.push(setting[0][param[0]]);
                            }
                            _context.next = 45;
                            break;

                        case 36:
                            if (think.isEmpty(param[1])) {
                                _context.next = 44;
                                break;
                            }

                            _context.t0 = replace;
                            _context.next = 40;
                            return call_user_func(param[1], setting[0][param[0]]);

                        case 40:
                            _context.t1 = _context.sent;

                            _context.t0.push.call(_context.t0, _context.t1);

                            _context.next = 45;
                            break;

                        case 44:
                            replace.push(setting[0][param[0]]);

                        case 45:
                            _context.next = 19;
                            break;

                        case 47:
                            adtemp = str_replace(match, replace, temp.temp);
                            _context.next = 50;
                            break;

                        case 50:
                            _context.next = 116;
                            break;

                        case 52:
                            if (!(temp.num == 1 && temp.option == 1)) {
                                _context.next = 116;
                                break;
                            }

                            _context.next = 55;
                            return this.model("ext_ad").where({ spaceid: space.spaceid, status: 1 }).order("sort ASC,addtime DESC").select();

                        case 55:
                            info = _context.sent;
                            loop = temp.temp.match(/\{loop\}([\S\s]*?){\/loop\}/);
                            //let loop = temp.temp.split("{loop}");

                            loopmatch = loop[1].match(/\[(\S+?)\]/g);
                            looparr = [];
                            jsonarr = [];
                            _iterator2 = info, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 61:
                            if (!_isArray2) {
                                _context.next = 67;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 64;
                                break;
                            }

                            return _context.abrupt('break', 115);

                        case 64:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 71;
                            break;

                        case 67:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 70;
                                break;
                            }

                            return _context.abrupt('break', 115);

                        case 70:
                            _ref3 = _i2.value;

                        case 71:
                            v = _ref3;

                            if (think.isEmpty(v.setting)) {
                                _context.next = 113;
                                break;
                            }

                            setting = JSON.parse(v.setting);
                            setting[0].width = space.width;
                            setting[0].height = space.height;
                            console.log(setting);
                            jsonarr.push(setting[0]);
                            json = (0, _stringify2.default)(jsonarr);
                            reparr = [];
                            _iterator3 = loopmatch, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 81:
                            if (!_isArray3) {
                                _context.next = 87;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context.next = 84;
                                break;
                            }

                            return _context.abrupt('break', 110);

                        case 84:
                            _ref4 = _iterator3[_i3++];
                            _context.next = 91;
                            break;

                        case 87:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context.next = 90;
                                break;
                            }

                            return _context.abrupt('break', 110);

                        case 90:
                            _ref4 = _i3.value;

                        case 91:
                            _val = _ref4;

                            _val = _val.replace(/(^\[)|(\]$)/g, "");
                            _param = _val.split('|');
                            //console.log(param);

                            if (!(_param[0] == "url")) {
                                _context.next = 99;
                                break;
                            }

                            console.log(22222222222);
                            if (think.isEmpty(setting[0].url)) {
                                reparr.push("javascript:void(0)");
                            } else {
                                reparr.push(setting[0][_param[0]]);
                            }
                            _context.next = 108;
                            break;

                        case 99:
                            if (think.isEmpty(_param[1])) {
                                _context.next = 107;
                                break;
                            }

                            _context.t2 = reparr;
                            _context.next = 103;
                            return call_user_func(_param[1], setting[0][_param[0]]);

                        case 103:
                            _context.t3 = _context.sent;

                            _context.t2.push.call(_context.t2, _context.t3);

                            _context.next = 108;
                            break;

                        case 107:
                            reparr.push(setting[0][_param[0]]);

                        case 108:
                            _context.next = 81;
                            break;

                        case 110:
                            console.log(reparr);
                            loopstr = str_replace(loopmatch, reparr, loop[1]);

                            looparr.push(loopstr);

                        case 113:
                            _context.next = 61;
                            break;

                        case 115:
                            // console.log(looparr.join(""));
                            adtemp = temp.temp.replace(loop[0], looparr.join(""));
                            // console.log(adtemp);

                        case 116:
                            _context.next = 118;
                            return this.model('ext_ad').where({ spaceid: space.spaceid }).count();

                        case 118:
                            items = _context.sent;
                            _context.next = 121;
                            return this.where({ spaceid: space.spaceid }).update({ code: adtemp, json: json, items: items });

                        case 121:
                            //清除广告缓存
                            think.cache("all_ad", null);

                        case 122:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function upad(_x) {
            return _ref.apply(this, arguments);
        }

        return upad;
    }();

    _class.prototype.showad = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(spaceid) {
            var _this2 = this;

            var list;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return think.cache("all_ad", function () {
                                return _this2.select();
                            }, { timeout: 365 * 24 * 3600 });

                        case 2:
                            list = _context2.sent;

                            if (!think.isEmpty(spaceid)) {
                                _context2.next = 7;
                                break;
                            }

                            return _context2.abrupt('return', list);

                        case 7:
                            return _context2.abrupt('return', think._.filter(list, { spaceid: Number(spaceid) }));

                        case 8:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function showad(_x2) {
            return _ref5.apply(this, arguments);
        }

        return showad;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=ext_ad_space.js.map