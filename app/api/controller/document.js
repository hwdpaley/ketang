// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';
/**
 * rest controller
 * @type {Class}
 */

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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');
var _class = function (_think$controller$res) {
    (0, _inherits3.default)(_class, _think$controller$res);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$controller$res.apply(this, arguments));
    }

    /**
     * init
     * @param  {Object} http []
     * @return {}      []
     */
    _class.prototype.init = function init(http) {
        _think$controller$res.prototype.init.call(this, http);
    };
    /**
     * before magic method
     * @return {Promise} []
     */


    _class.prototype.__before = function __before() {

        if (this.http.method.toLowerCase() != "get") {
            return this.fail("method err");
        };
    };

    /**
     * 默认最新列表
     * "/api/document"
     * cid:栏目id
     * order: new:默认最新，hot:热点,
     * @returns {Promise<PreventPromise>}
     */

    _class.prototype.getAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var data, map, o, cid, order, subcate, http_, http__, _iterator, _isArray, _i, _ref2, v, imgarr, pic, pics, _iterator2, _isArray2, _i2, _ref3, i, _pic;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            data = void 0;

                            if (!this.id) {
                                _context.next = 13;
                                break;
                            }

                            _context.next = 4;
                            return this.modelInstance.detail(this.id);

                        case 4:
                            data = _context.sent;
                            _context.next = 7;
                            return this.model("category").get_category(data.category_id, "title");

                        case 7:
                            data.catename = _context.sent;
                            _context.next = 10;
                            return get_nickname(data.uid);

                        case 10:
                            data.uid = _context.sent;

                            data.update_time = (0, _moment2.default)(data.update_time).fromNow();
                            return _context.abrupt('return', this.success(data));

                        case 13:
                            map = { 'pid': 0, 'status': 1 };
                            o = {};
                            cid = this.get('cid') || 0;
                            order = this.get('order');

                            if (!(cid != 0 && think.isNumberString(cid))) {
                                _context.next = 25;
                                break;
                            }

                            _context.next = 20;
                            return this.model('category').get_sub_category(cid);

                        case 20:
                            subcate = _context.sent;

                            // console.log(subcate);
                            subcate.push(cid);
                            map.category_id = ['IN', subcate];
                            _context.next = 26;
                            break;

                        case 25:
                            if (cid == "hot") {
                                o.view = 'DESC';
                            } else {
                                o.update_time = 'DESC';
                            }

                        case 26:
                            if (order == "hot") {
                                o.view = 'DESC';
                            } else {
                                o.update_time = 'DESC';
                            }
                            _context.next = 29;
                            return this.modelInstance.where(map).page(this.get('page')).order(o).countSelect();

                        case 29:
                            data = _context.sent;
                            http_ = this.config("http_") == 1 ? "http" : "https";
                            http__ = void 0;
                            _iterator = data.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 33:
                            if (!_isArray) {
                                _context.next = 39;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 36;
                                break;
                            }

                            return _context.abrupt('break', 82);

                        case 36:
                            _ref2 = _iterator[_i++];
                            _context.next = 43;
                            break;

                        case 39:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 42;
                                break;
                            }

                            return _context.abrupt('break', 82);

                        case 42:
                            _ref2 = _i.value;

                        case 43:
                            v = _ref2;
                            imgarr = [];

                            if (!(v.cover_id != 0)) {
                                _context.next = 51;
                                break;
                            }

                            _context.next = 48;
                            return get_pic(v.cover_id, 1, 360, 240);

                        case 48:
                            pic = _context.sent;

                            if (pic.indexOf("//") == 0) {
                                http__ = http_ + ':';
                            } else {
                                http__ = http_ + '://' + this.http.host;
                            }
                            imgarr.push(http__ + pic);

                        case 51:
                            if (think.isEmpty(v.pics)) {
                                _context.next = 72;
                                break;
                            }

                            pics = v.pics.split(",");
                            _iterator2 = pics, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 54:
                            if (!_isArray2) {
                                _context.next = 60;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context.next = 57;
                                break;
                            }

                            return _context.abrupt('break', 72);

                        case 57:
                            _ref3 = _iterator2[_i2++];
                            _context.next = 64;
                            break;

                        case 60:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context.next = 63;
                                break;
                            }

                            return _context.abrupt('break', 72);

                        case 63:
                            _ref3 = _i2.value;

                        case 64:
                            i = _ref3;
                            _context.next = 67;
                            return get_pic(i, 1, 360, 240);

                        case 67:
                            _pic = _context.sent;

                            if (_pic.indexOf("//") == 0) {
                                http__ = http_ + ':';
                            } else {
                                http__ = http_ + '://' + this.http.host;
                            }
                            imgarr.push(http__ + _pic);

                        case 70:
                            _context.next = 54;
                            break;

                        case 72:
                            v.imgurl = imgarr;
                            _context.next = 75;
                            return this.model("category").get_category(v.category_id, "title");

                        case 75:
                            v.catename = _context.sent;
                            _context.next = 78;
                            return get_nickname(v.uid);

                        case 78:
                            v.uid = _context.sent;

                            v.update_time = (0, _moment2.default)(v.update_time).fromNow();

                        case 80:
                            _context.next = 33;
                            break;

                        case 82:
                            return _context.abrupt('return', this.success(data));

                        case 83:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function getAction() {
            return _ref.apply(this, arguments);
        }

        return getAction;
    }();

    return _class;
}(think.controller.rest);

exports.default = _class;
//# sourceMappingURL=document.js.map