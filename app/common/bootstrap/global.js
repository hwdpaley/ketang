"use strict";

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 *
 * global.fn1 = function(){
 *
 * }
 *
 *global.xxx = async () => {
 *   let data = await Promise.resolve(111)
 *}
 */

/**
 * ip转数字
 * @param ip
 * @returns {number}
 * @private
 */
/* global _ip2int(ip)*/
global._ip2int = function (ip) {
    var num = 0;
    ip = ip.split(".");
    num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
    num = num >>> 0;
    return num;
};
/**
 * 数字转ip
 * @param num
 * @returns {string|*}
 * @private
 */
/*global _int2ip(num: number) */
global._int2iP = function (num) {
    var str;
    var tt = new Array();
    tt[0] = num >>> 24 >>> 0;
    tt[1] = num << 8 >>> 24 >>> 0;
    tt[2] = num << 16 >>> 24;
    tt[3] = num << 24 >>> 24;
    str = String(tt[0]) + "." + String(tt[1]) + "." + String(tt[2]) + "." + String(tt[3]);
    return str;
};

/**
 * 密码加密
 * @param password 加密的密码
 * @param md5encoded true-密码不加密，默认加密
 * @returns {*}
 */
/*global encryptPassword */
global.encryptPassword = function (password, md5encoded) {
    md5encoded = md5encoded || false;
    password = md5encoded ? password : think.md5(password);
    return think.md5(think.md5('www.cmswing.com') + password + think.md5('Arterli'));
};

/**
 * 数组去重
 * @param arr
 * @returns {Array}
 */
/* global unique */
global.unique = function (arr) {
    // var result = [], hash = {};
    // for (var i = 0, elem; (elem = arr[i]) != null; i++) {
    //     if (!hash[elem]) {
    //         result.push(elem);
    //         hash[elem] = true;
    //     }
    // }
    // return result;
    return (0, _from2.default)(new _set2.default(arr));
};
/**
 * in_array
 * @param stringToSearch
 * @param arrayToSearch
 * @returns {boolean}
 */
/* global in_array */
global.in_array = function (stringToSearch, arrayToSearch) {
    for (var s = 0; s < arrayToSearch.length; s++) {
        var thisEntry = arrayToSearch[s].toString();
        if (thisEntry == stringToSearch) {
            return true;
        }
    }
    return false;
};
/**
 * global times
 * 时间格式化
 * @param d
 * @returns {string}
 */
global.times = function (d, sec) {
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
};

/**
 * 排序函数
 */
function sort_node(v, w) {
    return v["sort"] - w["sort"];
}
function sort_node1(v, w) {
    return w["sort"] - v["sort"];
}
/**
 * global get_children
 * 获取子集分类 （这里是获取所有子集）
 */
global.get_children = function (nodes, parent) {
    var sn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    // console.log(11);
    var children = [];
    var last = [];
    /* 未访问的节点 */
    /*
     * 获取根分类列表。
     * 创建一个虚拟父级分类亦可
     **/
    var node = null;
    for (var i in nodes) {
        node = nodes[i];
        if (node["pid"] == parent) {
            node["deep"] = 0;
            children.push(node);
        } else {
            last.push(node);
        }
    }
    if (sn == 0) {
        children.sort(sort_node);
    } else {
        children.sort(sort_node1);
    }

    /* 同级排序 */
    var jumper = 0;
    var stack = children.slice(0);
    /* easy clone */

    while (stack.length > 0
    /* just in case */ && jumper++ < 1000) {
        var shift_node = stack.shift();
        var list = [];
        /* 当前子节点列表 */
        var last_static = last.slice(0);
        last = [];
        for (var i in last_static) {
            node = last_static[i];
            if (node["pid"] == shift_node["id"]) {
                node["deep"] = shift_node["deep"] + 1;
                list.push(node);
            } else {
                last.push(node);
            }
        }
        if (sn == 0) {
            list.sort(sort_node);
        } else {
            list.sort(sort_node1);
        }

        for (var i in list) {
            node = list[i];
            stack.push(node);
            children.push(node);
        }
    }
    /*
     * 有序树非递归前序遍历
     *
     * */
    var stack = [];
    /* 前序操作栈 - 分类编号 */
    var top = null;
    /* 操作栈顶 */
    var tree = children.slice(0);
    /* 未在前序操作栈内弹出的节点 */
    var has_child = false;
    /* 是否有子节点，如无子节点则弹出栈顶 */
    var children = [];
    /* 清空结果集 */
    var jumper = 0;
    last = [];
    /* 未遍历的节点 */
    var current = null;
    /* 当前节点 */
    stack.push(parent);
    /* 建立根节点 */

    while (stack.length > 0) {
        if (jumper++ > 1000) {
            break;
        }
        top = stack[stack.length - 1];
        has_child = false;
        last = [];

        for (var i in tree) {
            current = tree[i];
            if (current["pid"] == top) {
                top = current["id"];
                stack.push(top);
                children.push(current);
                has_child = true;
            } else {
                last.push(current);
            }
        }
        tree = last.slice(0);
        if (!has_child) {
            stack.pop();
            top = stack[stack.length - 1];
        }
    }
    return children;
};
/**
 * obj_values(obj);
 * 获取对象中的所有的值，并返回数组
 * @param obj
 * @returns {Array}
 */
/* global obj_values */
global.obj_values = function (obj) {
    var objkey = (0, _keys2.default)(obj);
    var objarr = [];
    objkey.forEach(function (key) {
        objarr.push(obj[key]);
    });
    return objarr;
};
/**
 * 判断对象是否相等
 * @param a
 * @param b
 * @returns {boolean}
 */
/* global isObjectValueEqual */
global.isObjectValueEqual = function (a, b) {
    // Of course, we can do it use for in
    // Create arrays of property names
    var aProps = (0, _getOwnPropertyNames2.default)(a);
    var bProps = (0, _getOwnPropertyNames2.default)(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
};
/**
 * trim()
 * @param str [删除左右两端的空格]
 * @returns {*|void|string|XML}
 */
/* global trim */
global.trim = function (str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
};
/**
 * 分析枚举类型配置值 格式 a:名称1,b:名称2
 * @param str
 * @returns {*}
 */
/* global parse_config_attr */
global.parse_config_attr = function (str) {
    var strs = void 0;
    if (str.search(/\r\n/ig) > -1) {
        strs = str.split("\r\n");
    } else if (str.search(/,/ig) > -1) {
        strs = str.split(",");
    } else if (str.search(/\n/ig) > -1) {
        strs = str.split("\n");
    } else {
        strs = [str];
    }
    if (think.isArray(strs)) {
        var obj = {};
        strs.forEach(function (n) {
            n = n.split(":");
            obj[n[0]] = n[1];
        });
        return obj;
    }
};
global.parse_type_attr = function (str) {
    var strs = void 0;
    if (str.search(/\r\n/ig) > -1) {
        strs = str.split("\r\n");
    } else if (str.search(/,/ig) > -1) {
        strs = str.split(",");
    } else if (str.search(/\n/ig) > -1) {
        strs = str.split("\n");
    } else {
        strs = [str];
    }
    if (think.isArray(strs)) {
        var arr = [];
        for (var _iterator = strs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var v = _ref;

            var obj = {};
            v = v.split(":");
            if (!think.isEmpty(v[0]) && !think.isEmpty(v[1])) {
                obj.id = v[0];
                obj.name = v[1];
                if (obj.id.split(".").length == 1) {
                    obj.pid = 0;
                } else {
                    obj.pid = obj.id.split(".").splice(0, obj.id.split(".").length - 1).join(".");
                }
                arr.push(obj);
            }
        }
        //console.log(arr);
        var tree = arr_to_tree(arr, 0);
        //think.log(tree);
        return tree;
    }
};
/**
 * ltrim()
 * @param str [删除左边的空格]
 * @returns {*|void|string|XML}
 */
/* global ltrim */
global.ltrim = function (str) {
    return str.replace(/(^\s*)/g, "");
};
/**
 *
 * rtrim()
 * @param str [删除右边的空格]
 * @returns {*|void|string|XML}
 */
/* global rtrim */
global.rtrim = function (str) {
    return str.replace(/(\s*$)/g, "");
};
/**
 * 把返回的数据集转换成Tree
 * @param array data 要转换的数据集
 * @param string pid parent标记字段
 * @return array
 */
/* global arr_to_tree */
global.arr_to_tree = function (data, pid) {
    var result = [],
        temp;
    var length = data.length;
    for (var i = 0; i < length; i++) {
        if (data[i].pid == pid) {
            result.push(data[i]);
            temp = arr_to_tree(data, data[i].id);
            if (temp.length > 0) {
                data[i].children = temp;
                data[i].chnum = data[i].children.length;
            }
        }
    }
    return result;
};
//计算分类信息当前状态
global.sanjiao = function (arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        result.push(result[i - 1] !== undefined ? result[i - 1] + '.' + arr[i] : arr[i]);
    }
    return result;
};
/* global arr_to_tree */
global.sub_cate = function (data, pid) {
    var result = [],
        temp;
    var length = data.length;
    for (var i = 0; i < length; i++) {
        if (data[i].pid == pid) {
            //console.log(data[i]);
            result.push(data[i].id);
            temp = sub_cate(data, data[i].id);
            if (temp.length > 0) {
                result.push(temp.join(','));
            }
        }
    }
    return result;
};
// 获取属性类型信息
/* global get_attribute_type */
global.get_attribute_type = function (type) {
    // TODO 可以加入系统配置
    var _type = {
        'num': ['数字', 'int(10) unsigned NOT NULL'],
        'string': ['字符串', 'varchar(255) NOT NULL'],
        'textarea': ['文本框', 'text NOT NULL'],
        'date': ['日期', 'bigint(13) NOT NULL'],
        'datetime': ['时间', 'bigint(13) NOT NULL'],
        'bool': ['布尔', 'tinyint(2) NOT NULL'],
        'select': ['枚举', 'char(50) NOT NULL'],
        'radio': ['单选', 'char(10) NOT NULL'],
        'checkbox': ['多选', 'varchar(100) NOT NULL'],
        'editor': ['编辑器', 'text NOT NULL'],
        'picture': ['上传图片', 'int(10) unsigned NOT NULL'],
        'file': ['上传附件', 'int(10) unsigned NOT NULL'],
        'suk': ['商品规格', 'text NOT NULL'],
        'pics': ['多图上传', 'varchar(255) NOT NULL'],
        'price': ['价格', 'varchar(255) NOT NULL'],
        'freight': ['运费', 'varchar(255) NOT NULL'],
        'keyword': ['关键词', 'varchar(255) NOT NULL'],
        'relation': ['关联', 'int(10) unsigned NOT NULL']
    };
    return type ? _type[type][0] : _type;
};
/**
 * 时间戳格式化 dateformat()
 * @param extra 'Y-m-d H:i:s'
 * @param date  时间戳
 * @return  '2015年12月17日 15:39:44'
 */
/* global dateformat */
global.dateformat = function (extra, date) {
    var D = new Date(date);
    var time = {
        "Y": D.getFullYear() + '年',
        'm': D.getMonth() + 1 + '月',
        'd': D.getDate() + '日',
        'H': D.getHours(),
        'i': D.getMinutes(),
        's': D.getSeconds()
    };
    var key = extra.split(/\W/);
    var _date = void 0;
    for (var _iterator2 = key, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
        var _ref2;

        if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
        } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
        }

        var k = _ref2;

        time[k] = time[k] < 10 ? "0" + time[k] : time[k];
        _date = extra.replace(k, time[k]);
        extra = _date;
    }
    return _date.replace('-', '').replace('-', '');
};
global.dateformat_ = function (extra, date) {
    var D = new Date(date);
    var time = {
        "Y": D.getFullYear(),
        'm': D.getMonth() + 1,
        'd': D.getDate(),
        'H': D.getHours(),
        'i': D.getMinutes(),
        's': D.getSeconds()
    };
    var key = extra.split(/\W/);
    var _date = void 0;
    for (var _iterator3 = key, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
        var _ref3;

        if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
        } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
        }

        var k = _ref3;

        time[k] = time[k] < 10 ? "0" + time[k] : time[k];
        _date = extra.replace(k, time[k]);
        extra = _date;
    }
    return _date;
};
/* global array_search */
global.array_search = function (arr, str) {
    // 如果可以的话，调用原生方法
    if (arr && arr.indexOf) {
        return arr.indexOf(str);
    }

    var len = arr.length;
    for (var i = 0; i < len; i++) {
        // 定位该元素位置
        if (arr[i] == str) {
            return i;
        }
    }

    // 数组中不存在该元素
    return false;
};
/* global array_diff */
global.array_diff = function (arr1, arr2) {
    //var arr1 = ["i", "b", "c", "d", "e", "f","x",""]; //数组A
    //var arr2 = ["a", "b", "c", "d", "e", "f", "g"];//数组B
    var temp = []; //临时数组1
    var temparray = []; //临时数组2
    for (var i = 0; i < arr2.length; i++) {
        temp[arr2[i]] = true; //巧妙地方：把数组B的值当成临时数组1的键并赋值为真
    }
    for (var i = 0; i < arr1.length; i++) {
        if (!temp[arr1[i]]) {
            temparray.push(arr1[i]); //巧妙地方：同时把数组A的值当成临时数组1的键并判断是否为真，如果不为真说明没重复，就合并到一个新数组里，这样就可以得到一个全新并无重复的数组
        }
    }
    ;
    //if(think.isEmpty(temparray)){
    //    return 
    //}
    return temparray;
};
//global.call_user_func = function (cb, params) {
//    let func = global.cb;
//    func.apply(cb, params);
//}
/* 解析列表定义规则*/
/* global get_list_field */
global.get_list_field = function (data, grid, controller, module) {
    module = module || "admin";
    //console.log(module);
    var data2 = {};
    var value = void 0;

    // 获取当前字段数据
    // console.log("data-----------"+JSON.stringify(data['groupid']));
    for (var _iterator4 = grid.field, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
        var _ref4;

        if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref4 = _iterator4[_i4++];
        } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref4 = _i4.value;
        }

        var field = _ref4;

        var temp = void 0;
        var _array = field.split('|'); //TODO
        // console.log(array[0]);
        temp = data[_array[0]];
        // console.log("temp---------"+temp);
        // 函数支持
        if (!think.isEmpty(_array[1])) {
            temp = call_user_func(_array[1], temp);
        }
        data2[_array[0]] = temp;
    }
    // console.log("data2--------"+JSON.stringify(data2));
    if (!think.isEmpty(grid.format)) {
        // value  =   preg_replace_callback('/\[([a-z_]+)\]/', function($match) use($data2){return $data2[$match[1]];}, $grid['format']);
    } else {
        value = data2[(0, _keys2.default)(data2)];
    }

    // 链接支持
    if ('title' == grid.field[0] && '目录' == data.type) {
        // 目录类型自动设置子文档列表链接
        grid.href = '[LIST]';
    } else if ('title' == grid.field[0]) {
        grid.href = '[EDIT]';
    }

    if (!think.isEmpty(grid.href)) {

        var links = grid.href.split(',');

        var val = [];
        for (var _iterator5 = links, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
            var _ref5;

            if (_isArray5) {
                if (_i5 >= _iterator5.length) break;
                _ref5 = _iterator5[_i5++];
            } else {
                _i5 = _iterator5.next();
                if (_i5.done) break;
                _ref5 = _i5.value;
            }

            var link = _ref5;

            var array = link.split('|');
            var href = array[0];

            //console.log(href);
            var matches = href.match(/^\[([a-z_]+)\]$/);
            if (matches) {
                val.push(data2[matches[1]]);
                // console.log(val);
            } else {
                var show = !think.isEmpty(array[1]) ? array[1] : value;
                // console.log(show)
                // 替换系统特殊字符串
                var hrefs = {
                    '[DELETE]': 'setstatus/status/-1/ids/[id]',
                    '[EDIT]': 'edit/id/[id]/model/[model_id]/cate_id/[category_id]',
                    '[LIST]': 'index/pid/[id]/model/[model_id]/cate_id/[category_id]'
                };
                var match = hrefs[href].match(/\[(\S+?)\]/g);
                // console.log(match);
                var u = [];
                for (var _iterator6 = match, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);;) {
                    var _ref6;

                    if (_isArray6) {
                        if (_i6 >= _iterator6.length) break;
                        _ref6 = _iterator6[_i6++];
                    } else {
                        _i6 = _iterator6.next();
                        if (_i6.done) break;
                        _ref6 = _i6.value;
                    }

                    var k = _ref6;

                    var key = k.replace(/(^\[)|(\]$)/g, "");
                    u.push(data[key]);
                }
                // console.log(u);
                var query = str_replace(match, u, hrefs[href]);
                var href1 = "/" + module + "/" + controller + "/" + query;
                //console.log(query);
                if (href == "[DELETE]") {
                    val.push('<a href="' + href1 + '" class="text-info ajax-get confirm">' + show + '</a> ');
                } else {
                    val.push('<a href="' + href1 + '" class="text-info">' + show + '</a> ');
                }
            }
        }
        value = val.join(" ");
    }
    // console.log("get_list_field------,"+value)
    return value;
};

/**
 * 获取行为类型
 * @param intger type 类型
 * @param bool all 是否返回全部类型
 * @author arterli <arterli@qq.com>
 */
/* global get_action_type */
global.get_action_type = function (type, all) {
    all = all || false;
    var list = {
        1: '系统',
        2: '用户'
    };
    if (all) {
        return list;
    }
    return list[type];
};

/**
 * 返回一个自定义用户函数给出的第一个参数
 *  call_user_func（回调 函数名， [参数]）
 * @param cb  函数名
 * @param params 数组格式传入参数
 */
/* global call_user_func */
global.call_user_func = function (cb, params) {
    var func = eval(cb);
    if (!think.isArray(params)) {
        params = [params];
    }
    return func.apply(cb, params);
};

/**
 *根据uid获取用户昵称
 * @param uid 用户id
 * @returns Promise {*}
 */
/* global get_nickname */
global.get_nickname = function () {
    var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(uid) {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return think.model('member', think.config("db")).cache({
                            timeout: 1000,
                            type: "file" //使用文件方式缓存
                        }).get_nickname(uid);

                    case 2:
                        data = _context.sent;
                        return _context.abrupt("return", data);

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x2) {
        return _ref7.apply(this, arguments);
    };
}();
global.get_realname = function () {
    var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(uid) {
        var data;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return think.model('member', think.config("db")).cache({
                            timeout: 1000,
                            type: "file" //使用文件方式缓存
                        }).get_realname(uid);

                    case 2:
                        data = _context2.sent;
                        return _context2.abrupt("return", data);

                    case 4:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x3) {
        return _ref8.apply(this, arguments);
    };
}();
global.get_rolename = function () {
    var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(uid) {
        var data;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return think.model('auth_role', think.config("db")).cache({
                            timeout: 1000,
                            type: "file" //使用文件方式缓存
                        }).get_rolename(uid);

                    case 2:
                        data = _context3.sent;
                        return _context3.abrupt("return", data);

                    case 4:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function (_x4) {
        return _ref9.apply(this, arguments);
    };
}();
//时间格式
/* global time_format */
global.time_format = function (time) {
    return dateformat('Y-m-d H:i:s', time);
};
global.time_start = function (time) {
    var a = dateformat_('Y-m-d', time);
    var b = new Date(a).getTime();
    console.log("time_start----------" + a + "," + b);
    return b;
};
global.time_end = function (time) {
    var a = dateformat_('Y-m-d', time);
    var b = new Date(a).getTime() + 24 * 60 * 60 * 1000;
    console.log("time_end----------" + a + "," + b);
    return b;
};
/* global str_replace()
 * str_replace(条件[]，替换内容[],被替换的内容)
 * @param search
 * @param replace
 * @param subject
 * @param count
 * @returns {*}
 */
/* global str_replace */
global.str_replace = function (search, replace, subject, count) {
    var i = 0,
        j = 0,
        temp = '',
        repl = '',
        sl = 0,
        fl = 0,
        f = [].concat(search),
        r = [].concat(replace),
        s = subject,
        ra = r instanceof Array,
        sa = s instanceof Array;
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }

    for (i = 0, sl = s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j = 0, fl = f.length; j < fl; j++) {
            temp = s[i] + '';
            repl = ra ? r[j] !== undefined ? r[j] : '' : r[0];
            s[i] = temp.split(f[j]).join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length - s[i].length) / f[j].length;
            }
        }
    }
    return sa ? s : s[0];
};
/**
 * 获取文档地址
 * @param name 文档表示
 * @param id   文档id
 * @returns {*}
 */
global.get_url = function (name, id) {

    if (!think.isEmpty(name)) {
        return "/p/" + name + ".html";
    } else {
        return "/p/" + id + ".html";
    }
};
/**
 * 获取文档地址,是否VIP文档，检查是否vip用户，返回地址
 * @param doc 文档info
 * @param userinfo 用户info
 * @param id   文档id
 * @param userid   用户id
 * @returns {*}
 */
global.get_url_vip = function () {
    var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(doc, userinfo) {
        var res;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        if (!(userinfo.uid == 0)) {
                            _context4.next = 2;
                            break;
                        }

                        return _context4.abrupt("return", "javascript:_show('\u8BF7\u767B\u5F55\uFF0C\u8C22\u8C22');");

                    case 2:
                        if (!(doc.vip != 1)) {
                            _context4.next = 4;
                            break;
                        }

                        return _context4.abrupt("return", "/p/" + doc.id + ".html");

                    case 4:
                        if (!(userinfo.isVip != 1)) {
                            _context4.next = 6;
                            break;
                        }

                        return _context4.abrupt("return", "javascript:_show();");

                    case 6:
                        if (!(doc.wkprice > 0)) {
                            _context4.next = 12;
                            break;
                        }

                        _context4.next = 9;
                        return think.model('doc_user', think.config("db")).where({ 'docid': doc.id, 'uid': userinfo.uid }).find();

                    case 9:
                        res = _context4.sent;

                        if (!think.isEmpty(res)) {
                            _context4.next = 12;
                            break;
                        }

                        return _context4.abrupt("return", "javascript:_show();");

                    case 12:
                        return _context4.abrupt("return", "/p/" + doc.id + ".html");

                    case 13:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function (_x5, _x6) {
        return _ref10.apply(this, arguments);
    };
}();
/**
 * 获取文档封面图片
 * @param int cover_id
 * @param string field
 * @return 完整的数据  或者  指定的field字段值
 * @author arterli <arterli@qq.com>
 */
/*global get_cover*/
global.get_cover = function () {
    var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(cover_id, field) {
        var picture;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        if (!think.isEmpty(cover_id)) {
                            _context5.next = 2;
                            break;
                        }

                        return _context5.abrupt("return", false);

                    case 2:
                        _context5.next = 4;
                        return think.model('picture', think.config("db")).where({ 'status': 1 }).find(cover_id);

                    case 4:
                        picture = _context5.sent;
                        return _context5.abrupt("return", think.isEmpty(field) ? picture : picture[field]);

                    case 6:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, undefined);
    }));

    return function (_x7, _x8) {
        return _ref11.apply(this, arguments);
    };
}();
global.get_cover2 = function () {
    var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(cover_id, qiniu) {
        var picture, path;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        if (!think.isEmpty(cover_id)) {
                            _context6.next = 2;
                            break;
                        }

                        return _context6.abrupt("return", false);

                    case 2:
                        _context6.next = 4;
                        return think.model('picture', think.config("db")).where({ 'status': 1 }).find(cover_id);

                    case 4:
                        picture = _context6.sent;
                        path = '//' + qiniu + '/' + picture.path;
                        return _context6.abrupt("return", path);

                    case 7:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, undefined);
    }));

    return function (_x9, _x10) {
        return _ref12.apply(this, arguments);
    };
}();
/**
 *
 * @param id
 * @param m
 * /0/w/<LongEdge>/h/<ShortEdge> 	限定缩略图的长边最多为<LongEdge>，短边最多为<ShortEdge>，进行等比缩放，不裁剪。如果只指定 w 参数则表示限定长边（短边自适应），只指定 h 参数则表示限定短边（长边自适应）。
 * /1/w/<Width>/h/<Height> 	限定缩略图的宽最少为<Width>，高最少为<Height>，进行等比缩放，居中裁剪。转后的缩略图通常恰好是 <Width>x<Height> 的大小（有一个边缩放的时候会因为超出矩形框而被裁剪掉多余部分）。如果只指定 w 参数或只指定 h 参数，代表限定为长宽相等的正方图。
 * /2/w/<Width>/h/<Height> 	限定缩略图的宽最多为<Width>，高最多为<Height>，进行等比缩放，不裁剪。如果只指定 w 参数则表示限定宽（长自适应），只指定 h 参数则表示限定长（宽自适应）。它和模式0类似，区别只是限定宽和高，不是限定长边和短边。从应用场景来说，模式0适合移动设备上做缩略图，模式2适合PC上做缩略图。
 * /3/w/<Width>/h/<Height> 	限定缩略图的宽最少为<Width>，高最少为<Height>，进行等比缩放，不裁剪。如果只指定 w 参数或只指定 h 参数，代表长宽限定为同样的值。你可以理解为模式1是模式3的结果再做居中裁剪得到的。
 * /4/w/<LongEdge>/h/<ShortEdge> 	限定缩略图的长边最少为<LongEdge>，短边最少为<ShortEdge>，进行等比缩放，不裁剪。如果只指定 w 参数或只指定 h 参数，表示长边短边限定为同样的值。这个模式很适合在手持设备做图片的全屏查看（把这里的长边短边分别设为手机屏幕的分辨率即可），生成的图片尺寸刚好充满整个屏幕（某一个边可能会超出屏幕）。
 * /5/w/<LongEdge>/h/<ShortEdge> 	限定缩略图的长边最少为<LongEdge>，短边最少为<ShortEdge>，进行等比缩放，居中裁剪。如果只指定 w 参数或只指定 h 参数，表示长边短边限定为同样的值。同上模式4，但超出限定的矩形部分会被裁剪。
 * @param w 宽
 * @param h 高
 */
global.get_pic = function () {
    var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(id) {
        var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var map, picture, q, name;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        if (!think.isEmpty(id)) {
                            _context7.next = 2;
                            break;
                        }

                        return _context7.abrupt("return", "/static/noimg.jpg");

                    case 2:
                        map = {};

                        map.status = 1;
                        if (think.isNumberString(id)) {
                            map.id = id;
                        } else {
                            map.path = id;
                        }
                        _context7.next = 7;
                        return think.model('picture', think.config("db")).where(map).find();

                    case 7:
                        picture = _context7.sent;

                        if (!think.isEmpty(picture)) {
                            _context7.next = 10;
                            break;
                        }

                        return _context7.abrupt("return", "/static/noimg.jpg");

                    case 10:
                        q = "";

                        if (!(picture.type > 0)) {
                            _context7.next = 22;
                            break;
                        }

                        if (m != null) {
                            m = "/" + m;
                        } else {
                            m = "";
                        }
                        if (w != null) {
                            w = "/w/" + w;
                        } else {
                            w = "";
                        }
                        if (h != null) {
                            h = "/h/" + h;
                        } else {
                            h = "";
                        }
                        if (m != "" || w != "" || h != "") {
                            q = "?imageView2" + m + w + h;
                        }
                        _context7.next = 18;
                        return think.cache("setup");

                    case 18:
                        name = _context7.sent;
                        return _context7.abrupt("return", "//" + name.QINIU_DOMAIN_NAME + "/" + picture.path + q);

                    case 22:
                        return _context7.abrupt("return", picture.path);

                    case 23:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7, undefined);
    }));

    return function (_x11) {
        return _ref13.apply(this, arguments);
    };
}();
/**
 * 获取多图封面
 * @param array arr_id
 * @param string field
 * @return 完整的数据或者 指定的field字段值
 * @author arterli <arterli@qq.com>
 */
/*global get_pics_one */
global.get_pics_one = function () {
    var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(arr_id, field) {
        var arr;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        if (!think.isEmpty(arr_id)) {
                            _context8.next = 2;
                            break;
                        }

                        return _context8.abrupt("return", false);

                    case 2:
                        arr = arr_id.split(",");
                        return _context8.abrupt("return", get_cover(arr[0], field));

                    case 4:
                    case "end":
                        return _context8.stop();
                }
            }
        }, _callee8, undefined);
    }));

    return function (_x15, _x16) {
        return _ref14.apply(this, arguments);
    };
}();
//{present_price:100,discount_price:80}
global.formatprice = function (price) {
    var pr = JSON.parse(price);
    var present_price;
    //console.log(pr);
    if (think.isNumber(pr.present_price)) {
        pr.present_price = pr.present_price.toString();
    }
    var price = pr.present_price.split("-");
    if (price.length > 1) {
        present_price = formatCurrency(price[0]) + "-" + formatCurrency(price[1]);
    } else {
        present_price = formatCurrency(price[0]);
    }
    if (pr.discount_price == 0) {
        return "<span class=\"text-xs\"><span class=\"text-danger\">\u73B0\u4EF7:\uFFE5" + present_price + "</span></span>";
    } else {
        return "<span class=\"text-xs\"><span class=\"text-danger\">\u73B0\u4EF7:\uFFE5" + present_price + "</span> <br>\u539F\u4EF7:\uFFE5" + formatCurrency(pr.discount_price) + "</span>";
    }
};
//获取价格格式化
global.get_price_format = function (price, type) {
    var pr = JSON.parse(price);

    if (1 == type) {
        if (think.isNumber(pr.present_price)) {
            pr.present_price = pr.present_price.toString();
        }
        var prices = pr.present_price.split("-");
        var present_price = void 0;
        if (prices.length > 1) {
            present_price = formatCurrency(prices[0]) + "-" + formatCurrency(prices[1]);
        } else {
            present_price = formatCurrency(prices[0]);
        }
        price = present_price;
    } else {

        if (pr.discount_price == 0) {
            price = "";
        } else {
            price = formatCurrency(pr.discount_price);
        }
    }
    return price;
};
//获取价格不格式化
global.get_price = function (price, type) {
    if (price) {
        price = JSON.parse(price);
        if (1 == type) {
            return price.present_price;
        } else {
            if (price.discount_price == 0) {
                return "";
            } else {
                return price.discount_price;
            }
        }
    }
};

/**
 * 将数值四舍五入(保留2位小数)后格式化成金额形式
 *
 * @param num 数值(Number或者String)
 * @return 金额格式的字符串,如'1,234,567.45'
 * @type String
 */
/*global formatCurrency */
global.formatCurrency = function (num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num)) num = "0";
    var sign = num == (num = Math.abs(num));
    num = Math.floor(num * 100 + 0.50000000001);
    var cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }return (sign ? '' : '-') + num + '.' + cents;
};

/**
 * 将数值四舍五入(保留1位小数)后格式化成金额形式
 *
 * @param num 数值(Number或者String)
 * @return 金额格式的字符串,如'1,234,567.4'
 * @type String
 */
/*global formatCurrencyTenThou */
global.formatCurrencyTenThou = function (num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num)) num = "0";
    var sign = num == (num = Math.abs(num));
    num = Math.floor(num * 10 + 0.50000000001);
    var cents = num % 10;
    num = Math.floor(num / 10).toString();
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }return (sign ? '' : '-') + num + '.' + cents;
};
/**
 * 获取商品suk suk, arr:类型数组
 */

/*global getsuk */
global.getsuk = function (suk, arr) {
    //console.log(suk);
    var suk_;
    suk.forEach(function (v, k) {

        if (v.name == arr[0]) {
            if (v.ch) {
                v.ch.forEach(function (v_, k_) {
                    if (v_.name == arr[1]) {
                        if (v_.ch) {
                            v_.ch.forEach(function (v__, k__) {
                                if (v__.name == arr[2]) {

                                    suk_ = think.extend(v__, v_, v);
                                }
                            });
                        } else {
                            suk_ = think.extend(v_, v);
                        }
                    }
                });
            } else {
                suk_ = v;
            }
        }
    });
    return suk_;
};

/**
 * 构建微信菜单数据结构
 * @param data
 * @returns {{menu: {button: Array}}}
 */
global.createSelfMenu = function (data) {
    var menu = {
        "menu": {
            "button": []
        }
    };
    var button = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].pid == '0') {
            var item = {
                "id": data[i].id,
                "m_id": data[i].m_id,
                "pid": data[i].pid,
                "type": data[i].type,
                "name": data[i].name,
                "sort": data[i].sort,
                "sub_button": []
            };
            menu.menu.button.push(item);
            button.push(item);
        }
    }
    for (var x = 0; x < button.length; x++) {
        for (var y = 0; y < data.length; y++) {
            if (data[y].pid == button[x].m_id) {
                var sitem = {
                    "type": data[y].type,
                    "m_id": data[y].m_id,
                    "sort": data[y].sort,
                    "name": data[y].name,
                    "url": data[y].url,
                    "media_id": data[y].media_id
                };
                button[x].sub_button.push(sitem);
            }
        }
    }
    return menu;
};

/**
 * 微信创建自定义菜单接口
 * 数据构建
 */

global.buildselfmenu = function (data) {
    var menu = {
        "button": []
    };
    var button = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].pid == '0') {
            var item = {
                "id": data[i].id,
                "m_id": data[i].m_id,
                "pid": data[i].pid,
                "type": data[i].type,
                "name": data[i].name,
                "sort": data[i].sort,
                "sub_button": []
            };
            menu.menu.button.push(item);
            button.push(item);
        }
    }
    for (var x = 0; x < button.length; x++) {
        for (var y = 0; y < data.length; y++) {
            if (data[y].pid == button[x].m_id) {
                var sitem = {
                    "type": data[y].type,
                    "sort": data[y].sort,
                    "name": data[y].name,
                    "url": data[y].url,
                    "media_id": data[y].media_id
                };
                button[x].sub_button.push(sitem);
            }
        }
    }
    return menu;
};

/**
 * 验证是否为智能手机
 * @ param {string} data :this.userAgent;
 * @ return {bool}
 */
/** global checkMobile */
global.checkMobile = function (agent) {
    var flag = false;
    agent = agent.toLowerCase();
    var keywords = ["android", "iphone", "ipod", "ipad", "windows phone", "mqqbrowser"];

    //排除 Windows 桌面系统  
    if (!(agent.indexOf("windows nt") > -1) || agent.indexOf("windows nt") > -1 && agent.indexOf("compatible; msie 9.0;") > -1) {
        //排除苹果桌面系统  
        if (!(agent.indexOf("windows nt") > -1) && !agent.indexOf("macintosh") > -1 && !(agent.indexOf("ipad") > -1)) {
            for (var _iterator7 = keywords, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);;) {
                var _ref15;

                if (_isArray7) {
                    if (_i7 >= _iterator7.length) break;
                    _ref15 = _iterator7[_i7++];
                } else {
                    _i7 = _iterator7.next();
                    if (_i7.done) break;
                    _ref15 = _i7.value;
                }

                var item = _ref15;

                if (agent.indexOf(item) > -1) {
                    flag = true;
                    break;
                }
            }
        }
    }
    return flag;
};
/**
 * 验证时否是微信
 *
 */
global.is_weixin = function (agent) {
    var flag = false;
    agent = agent.toLowerCase();
    //let key = ["mqqbrowser","micromessenger"];
    var key = ["micromessenger"];
    //排除 Windows 桌面系统
    if (!(agent.indexOf("windows nt") > -1) || agent.indexOf("windows nt") > -1 && agent.indexOf("compatible; msie 9.0;") > -1) {
        //排除苹果桌面系统
        if (!(agent.indexOf("windows nt") > -1) && !agent.indexOf("macintosh") > -1) {
            for (var _iterator8 = key, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);;) {
                var _ref16;

                if (_isArray8) {
                    if (_i8 >= _iterator8.length) break;
                    _ref16 = _iterator8[_i8++];
                } else {
                    _i8 = _iterator8.next();
                    if (_i8.done) break;
                    _ref16 = _i8.value;
                }

                var item = _ref16;

                if (agent.indexOf(item) > -1) {
                    flag = true;
                    break;
                }
            }
        }
    }
    return flag;
};
/**
 *
 * @param time
 * @returns {string}'January 31, 2018 15:03:26'
 */
global.date_from = function (time) {
    // January 31, 2018 15:03:26
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date(time);
    var month = months[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    var hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    var min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    var sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    var res = month + " " + day + ", " + year + " " + hour + ":" + min + ":" + sec;
    return res;
};

global.image_view = function (str, w, m) {
    //console.log(info);
    var imgReg = /<img.*?(?:>|\/>)/gi;
    var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
    var arr = str.match(imgReg);
    if (!think.isEmpty(arr)) {
        var narr = [];
        for (var _iterator9 = arr, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);;) {
            var _ref17;

            if (_isArray9) {
                if (_i9 >= _iterator9.length) break;
                _ref17 = _iterator9[_i9++];
            } else {
                _i9 = _iterator9.next();
                if (_i9.done) break;
                _ref17 = _i9.value;
            }

            var img = _ref17;

            var _img = img.match(srcReg);
            //console.log(_img);
            var nimg = _img[1] + '?imageView2/' + m + '/w/' + w;
            //console.log(nimg)
            var inputimg = _img['input'].replace(_img[1], nimg);
            narr.push(inputimg);
        }
        return str_replace(arr, narr, str);
    } else {
        return str;
    }
};
global.img_text_view = function (str, w, h) {
    //console.log(info);
    var imgReg = /<img.*?(?:>|\/>)/gi;
    var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
    if (think.isEmpty(str)) {
        return [];
    }
    var arr = str.match(imgReg);
    if (!think.isEmpty(arr)) {
        var narr = [];
        for (var _iterator10 = arr, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);;) {
            var _ref18;

            if (_isArray10) {
                if (_i10 >= _iterator10.length) break;
                _ref18 = _iterator10[_i10++];
            } else {
                _i10 = _iterator10.next();
                if (_i10.done) break;
                _ref18 = _i10.value;
            }

            var img = _ref18;

            var _img = img.match(srcReg);
            //console.log(_img[1]);
            var nimg = _img[1];
            if (!think.isEmpty(w) && !think.isEmpty(h)) {
                nimg = _img[1] + '?imageView2/1/w/' + w + '/h/' + h;
            }
            //console.log(nimg)
            narr.push(nimg);
        }
        //console.log(narr);
        return narr;
    } else {
        return [];
    }
};
/**
 * 获取文件信息
 * @param file_id 文件id
 * @param field 字段名,如果为空则返回整个记录集
 * @returns {*}
 */
global.get_file = function () {
    var _ref19 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(file_id, field) {
        var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var file, name;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        if (!think.isEmpty(file_id)) {
                            _context9.next = 2;
                            break;
                        }

                        return _context9.abrupt("return", false);

                    case 2:
                        _context9.next = 4;
                        return think.model('file', think.config("db")).find(file_id);

                    case 4:
                        file = _context9.sent;

                        if (!(file.location == 1 && key)) {
                            _context9.next = 10;
                            break;
                        }

                        _context9.next = 8;
                        return think.cache("setup");

                    case 8:
                        name = _context9.sent;

                        file.savename = "http://" + name.QINIU_DOMAIN_NAME + "/" + file.savename + "?download/" + file.savename;

                    case 10:
                        return _context9.abrupt("return", think.isEmpty(field) ? file : file[field]);

                    case 11:
                    case "end":
                        return _context9.stop();
                }
            }
        }, _callee9, undefined);
    }));

    return function (_x17, _x18) {
        return _ref19.apply(this, arguments);
    };
}();
/**
 *
 * 根据栏目ID获取栏目信息
 * @param cid
 * @returns {*}
 */
global.get_cate = function () {
    var _ref20 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(cid) {
        var column, _iterator11, _isArray11, _i11, _ref21, v;

        return _regenerator2.default.wrap(function _callee10$(_context10) {
            while (1) {
                switch (_context10.prev = _context10.next) {
                    case 0:
                        _context10.next = 2;
                        return think.model('category', think.config("db")).get_all_category();

                    case 2:
                        column = _context10.sent;
                        _iterator11 = column, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : (0, _getIterator3.default)(_iterator11);

                    case 4:
                        if (!_isArray11) {
                            _context10.next = 10;
                            break;
                        }

                        if (!(_i11 >= _iterator11.length)) {
                            _context10.next = 7;
                            break;
                        }

                        return _context10.abrupt("break", 19);

                    case 7:
                        _ref21 = _iterator11[_i11++];
                        _context10.next = 14;
                        break;

                    case 10:
                        _i11 = _iterator11.next();

                        if (!_i11.done) {
                            _context10.next = 13;
                            break;
                        }

                        return _context10.abrupt("break", 19);

                    case 13:
                        _ref21 = _i11.value;

                    case 14:
                        v = _ref21;

                        if (!(v.id == cid)) {
                            _context10.next = 17;
                            break;
                        }

                        return _context10.abrupt("return", v);

                    case 17:
                        _context10.next = 4;
                        break;

                    case 19:
                    case "end":
                        return _context10.stop();
                }
            }
        }, _callee10, undefined);
    }));

    return function (_x20) {
        return _ref20.apply(this, arguments);
    };
}();
/**
 * 获取分类信息url
 * @param id
 * @param val
 * @param arr
 */
global.sort_url = function (id, val, arr, http) {
    console.log(http.get(val));
    var url = void 0;
    url = val + "_" + id;
    for (var _iterator12 = arr, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : (0, _getIterator3.default)(_iterator12);;) {
        var _ref22;

        if (_isArray12) {
            if (_i12 >= _iterator12.length) break;
            _ref22 = _iterator12[_i12++];
        } else {
            _i12 = _iterator12.next();
            if (_i12.done) break;
            _ref22 = _i12.value;
        }

        var v = _ref22;

        if (v.option.identifier != val) {
            url += "|" + v.option.identifier + "_" + (http[v.option.identifier] || 0);
        }
    }
    //console.log(url);
    return url;
};
/*
 *比较数组是否完全相同
 */
global.a2a = function (a1, a2) {
    if (!(think.isArray(a1) && think.isArray(a2))) {
        return false;
    }
    if (a1.length != a2.length) {
        return false;
    }

    a1.sort();
    a2.sort();
    for (var i = 0; i < a1.length; i++) {
        if ((0, _typeof3.default)(a1[i]) != (0, _typeof3.default)(a2[i])) {
            return false;
        }
        if (think.isObject(a1[i]) && think.isObject(a2[i])) {
            var retVal = o2o(a1[i], a2[i]);
            if (!retVal) {
                return false;
            }
        } else if (think.isArray(a1[i]) && think.isArray(a2[i])) {
            //recursion
            if (!a2a(a1[i], a2[i])) {
                return false;
            }
        } else if (a1[i] !== a2[i]) {
            return false;
        }
    }
    return true;
};
//生成6位的随机数
global.MathRand = function () {
    var Num = "";
    for (var i = 0; i < 6; i++) {
        Num += Math.floor(Math.random() * 10);
    }
    return Num;
};

//更新缓存
global.update_cache = function (type) {
    switch (type) {
        case 'category':
            //更新栏目缓存
            think.cache("sys_category_list", null);
            think.cache("all_category", null);
            think.cache("all_priv", null); //栏目权限缓存
            break;
        case 'channel':
            //更新频道缓存信息
            think.cache("get_channel_cache", null);
            break;
        case 'model':
            think.cache("get_document_model", null); //清除模型缓存
            think.cache("get_model", null); //清除模型缓存
            break;
    }
};
/**
 *缓存权限列表 all_priv
 * @param catid 要验证的栏目id
 * @param roleid 用户组
 * @param action 权限类型
 * @param is_admin 谁否前台 0前台，1后台
 * @param type true
 * @returns {bool} 返回flase 或true false:没权限，true:有权限。
 */
global.priv = function () {
    var _ref23 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11(catid, roleid, action) {
        var is_admin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var priv;
        return _regenerator2.default.wrap(function _callee11$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        _context11.next = 2;
                        return think.model("category_priv", think.config("db")).priv(catid, roleid, action, is_admin, type);

                    case 2:
                        priv = _context11.sent;

                        if (priv) {
                            _context11.next = 7;
                            break;
                        }

                        return _context11.abrupt("return", false);

                    case 7:
                        return _context11.abrupt("return", true);

                    case 8:
                    case "end":
                        return _context11.stop();
                }
            }
        }, _callee11, undefined);
    }));

    return function (_x21, _x22, _x23) {
        return _ref23.apply(this, arguments);
    };
}();

global.GetDateStr = function (AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1; //获取当前月份的日期，不足10补0
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
    return y + "-" + m + "-" + d;
};
//转意符换成普通字符
global.escape2Html = function (str) {
    var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
        return arrEntities[t];
    });
};
global.html_decode = function (str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&gt;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    return s;
};

global.html_encode = function (str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&gt;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
};
//# sourceMappingURL=global.js.map