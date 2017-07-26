// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';
/**
 * template config
 */

exports.__esModule = true;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: 'nunjucks',
    content_type: 'text/html',
    file_ext: '.html',
    file_depr: '_',
    root_path: think.ROOT_PATH + '/view',
    adapter: {
        nunjucks: {
            prerender: function prerender(nunjucks, env) {
                /**
                 * 格式化字节大小
                 * @param  number size      字节数
                 * @param  string delimiter 数字和单位分隔符
                 * @return string            格式化后的带单位的大小
                 */
                env.addFilter("format_bytes", function (size) {
                    var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

                    var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
                    for (var i = 0; size >= 1024 && i < 5; i++) {
                        size /= 1024;
                    }return Math.round(size * 100) / 100 + delimiter + units[i];
                });

                /**
                 * 格式化时间
                 */
                env.addFilter("format_time", function (d, sec) {
                    var time;
                    var date = new Date(d);
                    var y = date.getFullYear();
                    var M = date.getMonth() + 1;
                    M = M < 10 ? "0" + M : M;
                    var d = date.getDate();
                    d = d < 10 ? "0" + d : d;
                    var h = date.getHours();
                    h = h < 10 ? "0" + h : h;
                    var m = date.getMinutes();
                    m = m < 10 ? "0" + m : m;
                    var s = date.getSeconds();
                    s = s < 10 ? "0" + s : s;
                    if (sec) {
                        time = y + "-" + M + "-" + d + " " + h + ":" + m + ":" + s;
                    } else {
                        time = y + "-" + M + "-" + d + " " + h + ":" + m;
                    }
                    return time;
                });
                /**
                 * moment
                 * YYYY-MM-DD HH:mm:ss
                 * lll
                 */
                env.addFilter("moment", function (time, config) {
                    var moment = require('moment');
                    moment.locale('zh-cn');
                    if (think.isEmpty(config)) {
                        return moment(time).fromNow();
                    } else {
                        return moment(time).format(config);
                    }
                });
                /**
                 *分析枚举类型配置值 格式 a:名称1,b:名称2
                 */
                env.addFilter("parse_config_attr", function (str) {
                    return parse_config_attr(str);
                });
                env.addFilter("show_status_op", function (status) {
                    // 获取数据的状态操作
                    switch (status) {
                        case 0:
                            return '启用';
                            break;
                        case 1:
                            return '禁用';
                            break;
                        case 2:
                            return '审核';
                            break;
                        default:
                            return false;
                            break;

                    }
                });
                /**
                 * 获取文档的类型文字
                 */
                env.addFilter("get_document_type", function () {
                    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                    if (think.isEmpty(type)) {
                        return false;
                    }
                    switch (type) {
                        case 1:
                            return '目录';
                            break;
                        case 2:
                            return '主题';
                            break;
                        case 3:
                            return '段落';
                            break;
                        default:
                            return false;
                            break;
                    }
                });
                env.addFilter("strToJson", function (str) {
                    if (!think.isEmpty(str) && str != 0) {
                        return JSON.parse(str);
                    }
                });
                env.addFilter("jsonToStr", function (json) {
                    if (!think.isEmpty(json)) {
                        return (0, _stringify2.default)(json);
                    }
                });
                env.addFilter("strToArray", function (str) {
                    var sn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ",";

                    if (!think.isEmpty(str)) {
                        var ss = str.split(sn); // 在每个逗号(,)处进行分解。
                        console.log(ss);
                        return ss;
                    } else {
                        return str;
                    }
                });

                env.addFilter("in_Array", function (str, arr) {
                    arr = arr || 0;
                    if (!think.isArray(arr)) {
                        if (think.isNumber(arr)) {
                            arr = "'" + arr + "'";
                        }
                        arr = arr.split(",");
                    }
                    //console.log(arr);
                    return in_array(str, arr);
                });

                env.addFilter("isempty", function (any) {
                    return think.isEmpty(any);
                });

                //获取字段类型信息
                env.addFilter("get_attribute_type", function (str) {
                    return get_attribute_type(str);
                });
                //格式化字段列表
                env.addFilter("get_list_field", function (data, grid, controller, module) {
                    return get_list_field(data, grid, controller, module);
                });
                //表情图标正则替换
                env.addFilter("get_bq", function (wx_bq, emoji) {
                    for (var key in emoji) {
                        var img = '<img src="https:\/\/res.wx.qq.com/mpres/htmledition/images/icon/emotion/' + key + '.gif" />';
                        var reg = new RegExp('\\[' + emoji[key] + '\\]', 'g');
                        wx_bq = wx_bq.replace(reg, img);
                    }
                    return wx_bq;
                });
                //解析分类信息url
                env.addFilter("sort_url", function (id, val, arr, http) {

                    return sort_url(id, val, arr, http);
                });
                //解析分类信息当前状态
                env.addFilter("sort_act", function (id, getid) {
                    //console.log(in_array(id, sanjiao(getid.split("."))));
                    if (!think.isEmpty(getid)) {
                        return in_array(id, sanjiao(getid.split(".")));
                    }
                });
                /**
                 * 时间戳格式化 dateformat('Y-m-d H:i:s')
                 * @param extra 'Y-m-d H:i:s'
                 * @param date  时间戳
                 * @return  '2015-12-17 15:39:44'
                 */
                env.addFilter("dateformat", function (extra, date) {
                    return dateformat(date, extra);
                });
                env.addFilter("dateformat_", function (extra, date) {
                    return dateformat(date, extra);
                });
                /**
                 * 获取行为类型
                 * @param intger type 类型
                 * @param bool all 是否返回全部类型
                 * @author arterli <arterli@qq.com>
                 */
                env.addFilter("get_action_type", function (type) {
                    var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                    return get_action_type(type, all);
                });
                /**
                 * 数字转ip
                 */
                env.addFilter("int2ip", function (int) {
                    return _int2iP(int);
                });
                /**
                 * 获取模型字段信息
                 * @param model_id 模型id 或 模型名称
                 * @param id 数据id
                 * @param field 字段
                 * @param return 整条数据或字段数据
                 * @author arterli <arterli@qq.com>
                 */
                env.addFilter("getmodelfield", function () {
                    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id, model_id, field, callback) {
                        var data;
                        return _regenerator2.default.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        _context.next = 2;
                                        return getmodelfield(model_id, id, field);

                                    case 2:
                                        data = _context.sent;

                                        callback(null, data);

                                    case 4:
                                    case 'end':
                                        return _context.stop();
                                }
                            }
                        }, _callee, undefined);
                    }));

                    return function (_x5, _x6, _x7, _x8) {
                        return _ref.apply(this, arguments);
                    };
                }(), true);
                /**
                 * 获取模型信息
                 * @param model_id 模型id 或 模型名称
                 * @param field 字段
                 * @param return 整条数据或字段数据
                 * @author arterli <arterli@qq.com>
                 */
                env.addFilter("getmode", function () {
                    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(model_id, field, callback) {
                        var data;
                        return _regenerator2.default.wrap(function _callee2$(_context2) {
                            while (1) {
                                switch (_context2.prev = _context2.next) {
                                    case 0:
                                        _context2.next = 2;
                                        return get_model(model_id, field);

                                    case 2:
                                        data = _context2.sent;

                                        callback(null, data);

                                    case 4:
                                    case 'end':
                                        return _context2.stop();
                                }
                            }
                        }, _callee2, undefined);
                    }));

                    return function (_x9, _x10, _x11) {
                        return _ref2.apply(this, arguments);
                    };
                }(), true);
                /**
                 * 获取用户名称
                 */
                env.addFilter("get_nickname", function () {
                    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(uid, callback) {
                        var data;
                        return _regenerator2.default.wrap(function _callee3$(_context3) {
                            while (1) {
                                switch (_context3.prev = _context3.next) {
                                    case 0:
                                        _context3.next = 2;
                                        return get_nickname(uid);

                                    case 2:
                                        data = _context3.sent;

                                        callback(null, data);

                                    case 4:
                                    case 'end':
                                        return _context3.stop();
                                }
                            }
                        }, _callee3, undefined);
                    }));

                    return function (_x12, _x13) {
                        return _ref3.apply(this, arguments);
                    };
                }(), true);
                env.addFilter("get_realname", function () {
                    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(uid, callback) {
                        var data;
                        return _regenerator2.default.wrap(function _callee4$(_context4) {
                            while (1) {
                                switch (_context4.prev = _context4.next) {
                                    case 0:
                                        _context4.next = 2;
                                        return get_realname(uid);

                                    case 2:
                                        data = _context4.sent;

                                        callback(null, data);

                                    case 4:
                                    case 'end':
                                        return _context4.stop();
                                }
                            }
                        }, _callee4, undefined);
                    }));

                    return function (_x14, _x15) {
                        return _ref4.apply(this, arguments);
                    };
                }(), true);
                env.addFilter("get_rolename", function () {
                    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(uid, callback) {
                        var data;
                        return _regenerator2.default.wrap(function _callee5$(_context5) {
                            while (1) {
                                switch (_context5.prev = _context5.next) {
                                    case 0:
                                        _context5.next = 2;
                                        return get_rolename(uid);

                                    case 2:
                                        data = _context5.sent;

                                        callback(null, data);

                                    case 4:
                                    case 'end':
                                        return _context5.stop();
                                }
                            }
                        }, _callee5, undefined);
                    }));

                    return function (_x16, _x17) {
                        return _ref5.apply(this, arguments);
                    };
                }(), true);
                /**
                 * 获取关联
                 */
                env.addFilter("get_relation", function () {
                    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(id, model, pk, val, callback) {
                        var map, data;
                        return _regenerator2.default.wrap(function _callee6$(_context6) {
                            while (1) {
                                switch (_context6.prev = _context6.next) {
                                    case 0:
                                        map = {};

                                        map[pk] = id;
                                        _context6.next = 4;
                                        return think.model(model, think.config("db")).where(map).getField(val, true);

                                    case 4:
                                        data = _context6.sent;

                                        callback(null, data);

                                    case 6:
                                    case 'end':
                                        return _context6.stop();
                                }
                            }
                        }, _callee6, undefined);
                    }));

                    return function (_x18, _x19, _x20, _x21, _x22) {
                        return _ref6.apply(this, arguments);
                    };
                }(), true);
                /**
                 * 获取文档url
                 */
                env.addFilter('get_url', function (name, id) {
                    return get_url(name, id);
                });
                env.addFilter('get_url_vip', function () {
                    var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(doc, userInfo, callback) {
                        var data;
                        return _regenerator2.default.wrap(function _callee7$(_context7) {
                            while (1) {
                                switch (_context7.prev = _context7.next) {
                                    case 0:
                                        _context7.next = 2;
                                        return get_url_vip(doc, userInfo);

                                    case 2:
                                        data = _context7.sent;

                                        callback(null, data);

                                    case 4:
                                    case 'end':
                                        return _context7.stop();
                                }
                            }
                        }, _callee7, undefined);
                    }));

                    return function (_x23, _x24, _x25) {
                        return _ref7.apply(this, arguments);
                    };
                }(), true);
                /**
                 * 获取文档封面图
                 */
                env.addFilter('get_cover', function () {
                    var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(cover_id, field, callback) {
                        var data;
                        return _regenerator2.default.wrap(function _callee8$(_context8) {
                            while (1) {
                                switch (_context8.prev = _context8.next) {
                                    case 0:
                                        _context8.next = 2;
                                        return get_cover(cover_id, field);

                                    case 2:
                                        data = _context8.sent;

                                        callback(null, data);

                                    case 4:
                                    case 'end':
                                        return _context8.stop();
                                }
                            }
                        }, _callee8, undefined);
                    }));

                    return function (_x26, _x27, _x28) {
                        return _ref8.apply(this, arguments);
                    };
                }(), true);
                /**
                 * {{id|get_pic("m=1,w=200,h=200")}}
                 */
                env.addFilter('get_pic', function () {
                    var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(id, type, callback) {
                        var m, w, h, obj, _iterator, _isArray, _i, _ref10, v, data;

                        return _regenerator2.default.wrap(function _callee9$(_context9) {
                            while (1) {
                                switch (_context9.prev = _context9.next) {
                                    case 0:
                                        m = void 0, w = void 0, h = void 0;
                                        //console.log(type);

                                        obj = {};
                                        _iterator = type.split(","), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                                    case 3:
                                        if (!_isArray) {
                                            _context9.next = 9;
                                            break;
                                        }

                                        if (!(_i >= _iterator.length)) {
                                            _context9.next = 6;
                                            break;
                                        }

                                        return _context9.abrupt('break', 18);

                                    case 6:
                                        _ref10 = _iterator[_i++];
                                        _context9.next = 13;
                                        break;

                                    case 9:
                                        _i = _iterator.next();

                                        if (!_i.done) {
                                            _context9.next = 12;
                                            break;
                                        }

                                        return _context9.abrupt('break', 18);

                                    case 12:
                                        _ref10 = _i.value;

                                    case 13:
                                        v = _ref10;

                                        v = v.split("=");
                                        obj[v[0]] = v[1];

                                    case 16:
                                        _context9.next = 3;
                                        break;

                                    case 18:
                                        m = obj.m;
                                        w = obj.w;
                                        h = obj.h;
                                        _context9.next = 23;
                                        return get_pic(id, m, w, h);

                                    case 23:
                                        data = _context9.sent;

                                        callback(null, data);

                                    case 25:
                                    case 'end':
                                        return _context9.stop();
                                }
                            }
                        }, _callee9, undefined);
                    }));

                    return function (_x29, _x30, _x31) {
                        return _ref9.apply(this, arguments);
                    };
                }(), true);
                /**
                 * 根据栏目id获取栏目信息
                 *
                 */
                env.addFilter('get_cate', function () {
                    var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(id, callback) {
                        var data;
                        return _regenerator2.default.wrap(function _callee10$(_context10) {
                            while (1) {
                                switch (_context10.prev = _context10.next) {
                                    case 0:
                                        _context10.next = 2;
                                        return get_cate(id);

                                    case 2:
                                        data = _context10.sent;

                                        callback(null, data);

                                    case 4:
                                    case 'end':
                                        return _context10.stop();
                                }
                            }
                        }, _callee10, undefined);
                    }));

                    return function (_x32, _x33) {
                        return _ref11.apply(this, arguments);
                    };
                }(), true);
                //价格格式化
                env.addFilter("get_price_format", function (price, type) {
                    return get_price_format(price, type);
                });
                /**
                 * is_weixin
                 * 判断是否是微信访问
                 */
                env.addFilter("is_weixin", function (agent) {
                    return is_weixin(agent);
                });
                /**
                 * 将数值四舍五入(保留1位小数)后格式化成金额形式
                 *
                 * @param num 数值(Number或者String)
                 * @return 金额格式的字符串,如'1,234,567.4'
                 * @type String
                 */
                env.addFilter("formatCurrency", function (num) {
                    if (!think.isEmpty(num)) {
                        return formatCurrency(num);
                    }
                });
                /**
                 * 获取商品价格不格式
                 */
                env.addFilter('get_price', function (price, type) {
                    return get_price(price, type);
                });
                /**
                 * 获取当前事件 时间戳
                 */
                env.addFilter('getnow', function () {
                    return new Date().getTime();
                });
                /**
                 * 字符串在指定位置插入内容
                 * str表示原字符串变量，flg表示要插入的字符串，sn表示要插入的位置
                 */
                env.addFilter('insert_flg', function (str, flg, sn) {
                    var newstr = "";
                    for (var i = 0; i < str.length; i += sn) {
                        var tmp = str.substring(i, i + sn);
                        newstr += tmp + flg;
                    }
                    return newstr;
                });
                /**
                 * 字符串在指定位截断
                 * str表示原字符串变量，flg表示要插入的字符串，sn表示要截断位置
                 */
                env.addFilter('block', function (str, sn, flg) {
                    var newstr = "";
                    if (think.isEmpty(flg)) {
                        flg = "...";
                    }
                    if (!think.isEmpty(str)) {
                        if (sn >= str.length) {
                            newstr = str;
                        } else {
                            newstr = str.substring(0, sn);
                        }
                    }
                    return newstr + flg;
                });
                /**
                 * 过滤html标签
                 *
                 */
                env.addFilter('delhtmltags', function (str) {
                    if (!think.isEmpty(str)) {
                        return str.replace(/<[^>]+>/g, ""); //去掉所有的html标记
                    } else {
                        return '';
                    }
                });
                /**
                 * 获取文件信息
                 * @param file_id 文件id
                 * @param field 字段名,如果为空则返回整个记录集
                 * @returns {*}
                 */
                env.addFilter('get_file', function () {
                    var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11(file_id, field, key, callback) {
                        var data;
                        return _regenerator2.default.wrap(function _callee11$(_context11) {
                            while (1) {
                                switch (_context11.prev = _context11.next) {
                                    case 0:
                                        _context11.next = 2;
                                        return get_file(file_id, field, key);

                                    case 2:
                                        data = _context11.sent;

                                        callback(null, data);

                                    case 4:
                                    case 'end':
                                        return _context11.stop();
                                }
                            }
                        }, _callee11, undefined);
                    }));

                    return function (_x34, _x35, _x36, _x37) {
                        return _ref12.apply(this, arguments);
                    };
                }(), true);
                /**
                 * 获取用户组
                 */
                env.addFilter('get_member_group', function () {
                    var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12(groupid, callback) {
                        var data;
                        return _regenerator2.default.wrap(function _callee12$(_context12) {
                            while (1) {
                                switch (_context12.prev = _context12.next) {
                                    case 0:
                                        _context12.next = 2;
                                        return think.model("member_group", think.config("db")).getgroup({ groupid: groupid });

                                    case 2:
                                        data = _context12.sent;

                                        // console.log("get_member_group-------"+groupid+","+JSON.stringify(data));
                                        callback(null, data[0]);

                                    case 4:
                                    case 'end':
                                        return _context12.stop();
                                }
                            }
                        }, _callee12, undefined);
                    }));

                    return function (_x38, _x39) {
                        return _ref13.apply(this, arguments);
                    };
                }(), true);
                env.addFilter('get_member_vip', function () {
                    var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13(uid, callback) {
                        var data;
                        return _regenerator2.default.wrap(function _callee13$(_context13) {
                            while (1) {
                                switch (_context13.prev = _context13.next) {
                                    case 0:
                                        _context13.next = 2;
                                        return think.model("member", think.config("db")).get_vip(uid);

                                    case 2:
                                        data = _context13.sent;

                                        // console.log("get_member_vip-------"+data);
                                        callback(null, data);

                                    case 4:
                                    case 'end':
                                        return _context13.stop();
                                }
                            }
                        }, _callee13, undefined);
                    }));

                    return function (_x40, _x41) {
                        return _ref14.apply(this, arguments);
                    };
                }(), true);
                /**
                 * 提取文本内容中的图片
                 * @param html 文本内容
                 * @param w kuan 高
                 * @returns []
                 */
                env.addFilter('img_text_view', function (html) {
                    var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
                    var h = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

                    return img_text_view(html, w, h);
                });
                /**
                 *缓存权限列表 all_priv
                 * @param catid 要验证的栏目id
                 * @param roleid 用户组
                 * @param action 权限类型
                 * @param is_admin 谁否前台 0前台，1后台
                 * @returns {bool} 返回flase 或true flase:没权限，true:有权限。
                 */
                env.addFilter('priv', function () {
                    var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14(catid, roleid, action) {
                        var is_admin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                        var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
                        var callback = arguments[5];
                        var isp;
                        return _regenerator2.default.wrap(function _callee14$(_context14) {
                            while (1) {
                                switch (_context14.prev = _context14.next) {
                                    case 0:
                                        _context14.next = 2;
                                        return priv(catid, roleid, action, is_admin, type);

                                    case 2:
                                        isp = _context14.sent;

                                        //console.log(isp);
                                        callback(null, isp);

                                    case 4:
                                    case 'end':
                                        return _context14.stop();
                                }
                            }
                        }, _callee14, undefined);
                    }));

                    return function (_x44, _x45, _x46) {
                        return _ref15.apply(this, arguments);
                    };
                }(), true);

                env.addExtension('tagtest', new mytags(), true);
                /**
                 * 获取分类标签
                 */
                env.addExtension('column', new column(), true);
                /**
                 * 获取导航标签
                 */
                env.addExtension('channel', new channel(), true);
                /**
                 * 获取数据标签
                 */
                env.addExtension('topic', new topic(), true);
                /**
                 * 获取分类分组
                 */
                env.addExtension('groups', new groups(), true);
                /**
                 * 获取话题
                 */
                env.addExtension('keywords', new keywords(), true);
                env.addExtension('rkeywords', new rkeywords(), true);
                //基于thinkjs model的万能查询
                env.addExtension('model', new model(), true);
                /**
                 * 广告位调用
                 * //返回代码
                 * {{广告位id|show_ad('code')|safe}}
                 * //json调用
                 * {% set adlist = 广告位id|show_ad('json')%}
                 * {%for ad in adlist%}
                 * ....
                 * {%endfor%}
                 */
                env.addFilter('show_ad', function () {
                    var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15(spaceid, type, callback) {
                        var data, res;
                        return _regenerator2.default.wrap(function _callee15$(_context15) {
                            while (1) {
                                switch (_context15.prev = _context15.next) {
                                    case 0:
                                        _context15.next = 2;
                                        return think.model("ext_ad_space", think.config("db"), "ext").showad(spaceid);

                                    case 2:
                                        data = _context15.sent;
                                        res = void 0;

                                        if (type == "code") {
                                            res = data[0].code;
                                        } else {
                                            res = JSON.parse(data[0].json);
                                        }
                                        callback(null, res);

                                    case 6:
                                    case 'end':
                                        return _context15.stop();
                                }
                            }
                        }, _callee15, undefined);
                    }));

                    return function (_x49, _x50, _x51) {
                        return _ref16.apply(this, arguments);
                    };
                }(), true);
            }
        }
    }
};
//# sourceMappingURL=view.js.map