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

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

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
  _class.prototype.init = function init(access_token, openid) {
    //super.init(...args);
    this.baseUrl = "https://graph.qq.com";
    this.access_token = access_token;
    this.openid = openid;
  };

  _class.prototype.get_user_info = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(access_token, openid) {
      var setup, oauth_consumer_key, URL_GET_USERINFO, getuserinfo;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return think.cache("setup");

            case 2:
              setup = _context.sent;
              oauth_consumer_key = setup.QQ_APPID;
              URL_GET_USERINFO = this.baseUrl + ('/user/get_user_info?access_token=' + this.access_token + '&oauth_consumer_key=' + oauth_consumer_key + '&openid=' + this.openid);

              getuserinfo = function getuserinfo(URL_GET_USERINFO) {
                var deferred = think.defer();
                _https2.default.get(URL_GET_USERINFO, function (res) {
                  //console.log('statusCode: ', res.statusCode);
                  // console.log('headers: ', res.headers);

                  var body = [];
                  res.on('data', function (d) {
                    //process.stdout.write(d);
                    body.push(d);
                  });
                  res.on("end", function (d) {
                    body = Buffer.concat(body);
                    //console.log(body) ;
                    deferred.resolve(JSON.parse(body));
                    //boday+=d;
                  });
                }).on('error', function (e) {
                  console.error(e);
                });
                return deferred.promise;
              };

              _context.next = 8;
              return getuserinfo(URL_GET_USERINFO);

            case 8:
              return _context.abrupt('return', _context.sent);

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function get_user_info(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return get_user_info;
  }();

  return _class;
}(think.service.base);

exports.default = _class;
//# sourceMappingURL=qqapi.js.map