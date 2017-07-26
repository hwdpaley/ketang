// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';
/**
 * base adapter
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

var TopClient = require('./topclient').TopClient;

var _class = function (_think$adapter$base) {
  (0, _inherits3.default)(_class, _think$adapter$base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _think$adapter$base.apply(this, arguments));
  }

  /**
   * init
   * @return {[]}         []
   */
  _class.prototype.init = function init() {
    var _think$adapter$base$p;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_think$adapter$base$p = _think$adapter$base.prototype.init).call.apply(_think$adapter$base$p, [this].concat(args));
  };

  _class.prototype.send = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(info) {
      var setup, key, client, execute;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return think.model("setup", think.config("db"), "admin").getset();

            case 2:
              setup = _context.sent;
              key = void 0;

              if (think.isEmpty(setup.SMS_Key)) {
                _context.next = 12;
                break;
              }

              key = setup.SMS_Key.split("|");
              console.log(key);

              if (!(think.isEmpty(key[0]) || think.isEmpty(key[1]))) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return', { result: { errno: '1000', errmsg: '请在后台配合正确的凭着' } });

            case 9:
              ;

              _context.next = 13;
              break;

            case 12:
              return _context.abrupt('return', { result: { errno: '1000', errmsg: '请在后台配合正确的凭着' } });

            case 13:
              client = new TopClient({
                'appkey': key[0],
                'appsecret': key[1],
                'REST_URL': 'http://gw.api.taobao.com/router/rest'
              });

              execute = function execute() {
                var deferred = think.defer();
                client.execute('alibaba.aliqin.fc.sms.num.send', info, function (error, response) {
                  if (!error) {
                    deferred.resolve(response);
                  } else {
                    deferred.resolve(error);
                  }
                });
                return deferred.promise;
              };

              _context.next = 17;
              return execute();

            case 17:
              return _context.abrupt('return', _context.sent);

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function send(_x) {
      return _ref.apply(this, arguments);
    }

    return send;
  }();

  return _class;
}(think.adapter.base);

exports.default = _class;
//# sourceMappingURL=client.js.map