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

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$service$base) {
    (0, _inherits3.default)(_class, _think$service$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$service$base.apply(this, arguments));
    }

    /**
     * init
     * @return {}         []
     */
    _class.prototype.init = function init(code, redirect_uri) {
        //super.init(...args);
        this.code = code;
        this.baseUrl = "https://api.weibo.com";
        this.redirect_uri = redirect_uri;
    };
    //获取


    _class.prototype.gettoken = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var setup, client_id, client_secret, grant_type, code, redirect_uri, URL_GET_USERINFO, gettoken;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return think.cache("setup");

                        case 2:
                            setup = _context.sent;
                            client_id = setup.SINA_APPKEY;
                            client_secret = setup.SINA_APPSECRET;
                            grant_type = 'authorization_code';
                            code = this.code;
                            redirect_uri = this.redirect_uri;
                            URL_GET_USERINFO = this.baseUrl + '/oauth2/access_token';

                            gettoken = function gettoken(URL_GET_USERINFO) {
                                var deferred = think.defer();
                                _superagent2.default.post(URL_GET_USERINFO + '?client_id=' + client_id + '&client_secret=' + client_secret + '&grant_type=authorization_code&code=' + code + '&redirect_uri=' + redirect_uri).send({}).end(function (err, res) {
                                    // console.log(res);
                                    if (res.ok) {
                                        if (think.isEmpty(res.body)) {
                                            deferred.resolve(JSON.parse(res.text));
                                        } else {
                                            deferred.resolve(res.body);
                                        }
                                    } else {
                                        console.log('Oh no! error ' + res.text);
                                        deferred.resolve(res.text);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context.next = 12;
                            return gettoken(URL_GET_USERINFO);

                        case 12:
                            return _context.abrupt('return', _context.sent);

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function gettoken() {
            return _ref.apply(this, arguments);
        }

        return gettoken;
    }();

    _class.prototype.getuserinfo = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(token, uid) {
            var _this2 = this;

            var getuserinfo;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            getuserinfo = function getuserinfo() {
                                var deferred = think.defer();
                                _superagent2.default.get(_this2.baseUrl + '/2/users/show.json?access_token=' + token + '&uid=' + uid).end(function (err, res) {
                                    deferred.resolve(JSON.parse(res.text));
                                });
                                return deferred.promise;
                            };

                            _context2.next = 3;
                            return getuserinfo();

                        case 3:
                            return _context2.abrupt('return', _context2.sent);

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function getuserinfo(_x, _x2) {
            return _ref2.apply(this, arguments);
        }

        return getuserinfo;
    }();

    return _class;
}(think.service.base);

exports.default = _class;
//# sourceMappingURL=sina.js.map