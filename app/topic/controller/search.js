// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
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

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

var _segment = require('segment');

var _segment2 = _interopRequireDefault(_segment);

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
     */
    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var q, time, search_time, sql_time, sql, _q, m_id, segment, segment_q, variables, ft_min_word_len, k, numsPerPage, currentPage, count, res, hs, hsq, modlist, data, _iterator, _isArray, _i, _ref2, _v, extend, table, pk, map, list, html, _iterator2, _isArray2, _i2, _ref3, v;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //auto render template file index_index.html
                            q = this.get("q");

                            this.meta_title = "搜索";

                            if (!think.isEmpty(q)) {
                                _context.next = 10;
                                break;
                            }

                            if (!checkMobile(this.userAgent())) {
                                _context.next = 7;
                                break;
                            }

                            return _context.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 7:
                            return _context.abrupt('return', this.display());

                        case 8:
                            _context.next = 122;
                            break;

                        case 10:
                            time = this.get("d");
                            search_time = void 0, sql_time = void 0, sql = void 0;
                            _q = this.get('q');
                            m_id = this.get('m') || 0;
                            //按时间搜索

                            if (time == 'day') {
                                search_time = new Date().getTime() - 86400000;
                                sql_time = ' AND add_time > ' + search_time;
                            } else if (time == 'week') {
                                search_time = new Date().getTime() - 604800000;
                                sql_time = ' AND add_time > ' + search_time;
                            } else if (time == 'month') {
                                search_time = new Date().getTime() - 2592000000;
                                sql_time = ' AND add_time > ' + search_time;
                            } else if (time == 'year') {
                                search_time = new Date().getTime() - 31536000000;
                                sql_time = ' AND add_time > ' + search_time;
                            } else {
                                search_time = 0;
                                sql_time = '';
                            }
                            segment = new _segment2.default();
                            // 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可

                            segment.useDefault();
                            // 开始分词
                            segment_q = segment.doSegment(_q, {
                                simple: true,
                                stripPunctuation: true
                            });
                            //检查全文搜索配置

                            _context.next = 20;
                            return this.model("mysql").query('show variables');

                        case 20:
                            variables = _context.sent;
                            ft_min_word_len = think._.find(variables, ['Variable_name', 'ft_min_word_len']).Value;

                            if (ft_min_word_len == 1) {
                                console.log(segment_q.join(" "));
                                sql = "";
                                sql = 'MATCH (data) AGAINST (\'' + segment_q.join(" ") + '\' IN BOOLEAN MODE)';
                                if (m_id) {
                                    sql += ' AND m_id=' + m_id;
                                }
                                if (search_time != 0) {
                                    sql += sql_time;
                                }
                            } else {
                                sql = "";
                                sql += '(';
                                for (k = 0; k < segment_q.length; k++) {
                                    sql += "`data` like '%" + segment_q[k] + "%'";
                                    if (segment_q[k + 1]) {
                                        sql += ' OR ';
                                    }
                                }
                                sql += ')';
                                if (m_id) {
                                    sql += ' AND m_id=' + m_id;
                                }
                                if (search_time != 0) {
                                    sql += sql_time;
                                }
                                console.log(_q + "dddddddddd");
                            }
                            console.log(sql);
                            numsPerPage = 10;
                            currentPage = Number(this.get("page")) || 1;
                            _context.next = 28;
                            return this.model("mysql").query('SELECT count(search_id) FROM __SEARCH__ WHERE ' + sql);

                        case 28:
                            count = _context.sent;
                            _context.next = 31;
                            return this.model("mysql").query('SELECT * FROM __SEARCH__ WHERE ' + sql + ' order by search_id DESC LIMIT ' + (currentPage - 1) * numsPerPage + ',' + numsPerPage);

                        case 31:
                            res = _context.sent;
                            hs = this.cookie("cmswing_historical_search");

                            this.assign("hs", hs.split("|").reverse());
                            //搜索记录
                            if (count[0]['count(search_id)'] > 0) {
                                hsq = void 0;

                                if (think.isEmpty(hs)) {
                                    this.cookie("cmswing_historical_search", _q);
                                } else {
                                    if (!in_array(_q, hs.split("|"))) {
                                        hsq = hs + '|' + _q;
                                        this.cookie("cmswing_historical_search", hsq);
                                    }
                                }
                            }

                            _context.next = 37;
                            return this.model("search_model").order('sort ASC').select();

                        case 37:
                            modlist = _context.sent;

                            //console.log(modlist);
                            data = [];
                            _iterator = res, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 40:
                            if (!_isArray) {
                                _context.next = 46;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 43;
                                break;
                            }

                            return _context.abrupt('break', 78);

                        case 43:
                            _ref2 = _iterator[_i++];
                            _context.next = 50;
                            break;

                        case 46:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 49;
                                break;
                            }

                            return _context.abrupt('break', 78);

                        case 49:
                            _ref2 = _i.value;

                        case 50:
                            _v = _ref2;
                            _context.next = 53;
                            return this.model("model").get_model(_v.m_id, "extend");

                        case 53:
                            extend = _context.sent;

                            _v.m_type = extend;
                            table = void 0;

                            if (!(extend == 0)) {
                                _context.next = 62;
                                break;
                            }

                            _context.next = 59;
                            return this.model("model").get_model(_v.m_id, "name");

                        case 59:
                            table = _context.sent;
                            _context.next = 63;
                            break;

                        case 62:
                            table = "document";

                        case 63:
                            _context.next = 65;
                            return this.model("search_model").where({ mod: _v.m_id }).getField('pk', true);

                        case 65:
                            pk = _context.sent;
                            map = {};

                            map[pk] = _v.d_id;
                            _context.t0 = data;
                            _context.t1 = think;
                            _context.next = 72;
                            return this.model(table).where(map).find();

                        case 72:
                            _context.t2 = _context.sent;
                            _context.t3 = _v;
                            _context.t4 = _context.t1.extend.call(_context.t1, _context.t2, _context.t3);

                            _context.t0.push.call(_context.t0, _context.t4);

                        case 76:
                            _context.next = 40;
                            break;

                        case 78:
                            //console.log(data);
                            list = {
                                numsPerPage: numsPerPage, //每页显示的条数
                                currentPage: currentPage, //当前页
                                count: count[0]['count(search_id)'], //总条数
                                totalPages: Math.ceil(count[0]['count(search_id)'] / numsPerPage), //总页数
                                data: data
                                //查询数据

                            };
                            html = (0, _thinkPagination2.default)(list, this.http, {
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
                            this.assign("modlist", modlist);
                            this.assign("list", list);

                            if (!checkMobile(this.userAgent())) {
                                _context.next = 121;
                                break;
                            }

                            if (!this.isAjax('get')) {
                                _context.next = 118;
                                break;
                            }

                            _iterator2 = list.data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 86:
                            if (!_isArray2) {
                                _context.next = 92;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 89;
                                break;
                            }

                            return _context.abrupt('break', 117);

                        case 89:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 96;
                            break;

                        case 92:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 95;
                                break;
                            }

                            return _context.abrupt('break', 117);

                        case 95:
                            _ref3 = _i2.value;

                        case 96:
                            v = _ref3;
                            _context.next = 99;
                            return this.model("model").get_model(v.m_id, "title");

                        case 99:
                            v.model = _context.sent;

                            if (!(v.m_type == 1)) {
                                _context.next = 104;
                                break;
                            }

                            v.url = get_url(v.name, v.id);
                            _context.next = 111;
                            break;

                        case 104:
                            _context.next = 106;
                            return this.model("model").get_model(v.m_id, "name");

                        case 106:
                            _context.t5 = _context.sent;
                            _context.t6 = '/mod/' + _context.t5;
                            _context.t7 = _context.t6 + '/index/detail/id/';
                            _context.t8 = v.d_id;
                            v.url = _context.t7 + _context.t8;

                        case 111:
                            _context.next = 113;
                            return this.model("category").get_category(v.category_id, "title");

                        case 113:
                            v.categoryname = _context.sent;

                            v.add_time = (0, _moment2.default)(v.add_time).format('YYYY-MM-DD HH:mm');

                        case 115:
                            _context.next = 86;
                            break;

                        case 117:
                            return _context.abrupt('return', this.json(list));

                        case 118:
                            return _context.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

                        case 121:
                            return _context.abrupt('return', this.display("result"));

                        case 122:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function indexAction() {
            return _ref.apply(this, arguments);
        }

        return indexAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=search.js.map