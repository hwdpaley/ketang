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

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  /**qq登陆回掉地址 */
  _class.prototype.indexAction = function indexAction() {
    //auto render template file index_index.html
    if (this.setup.IS_QQ_LOGIN == 0) {
      this.http.error = new Error('没有开启QQ登陆，请到后台开启！');
      return think.statusAction(702, this.http);
    }
    if (this.is_login) {
      this.redirect('/uc/index');
    }
    return this.display();
  };
  /**获取qq登陆信息 */


  _class.prototype.loginresultAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var res, qqapi, qq, userinfo, qq_user, filePath, last_login_time, qq_userInfo;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(this.setup.IS_QQ_LOGIN == 0)) {
                _context.next = 3;
                break;
              }

              this.http.error = new Error('没有开启QQ登陆，请到后台开启！');
              return _context.abrupt('return', think.statusAction(702, this.http));

            case 3:
              if (this.is_login) {
                this.redirect('/uc/index');
              }
              res = this.get();
              qqapi = think.service("qqapi");
              qq = new qqapi(res.access_token, res.openid);
              _context.next = 9;
              return qq.get_user_info();

            case 9:
              userinfo = _context.sent;
              _context.next = 12;
              return this.model("qq_user").where({ openid: res.openid }).find();

            case 12:
              qq_user = _context.sent;

              if (!think.isEmpty(qq_user)) {
                _context.next = 20;
                break;
              }

              userinfo.openid = res.openid;
              //think.log(userinfo);
              _context.next = 17;
              return this.model("qq_user").add(userinfo);

            case 17:
              this.redirect('/uc/qq/qqlogin/id/' + res.openid);
              _context.next = 40;
              break;

            case 20:
              _context.next = 22;
              return this.model("qq_user").where({ openid: res.openid }).update(userinfo);

            case 22:
              if (!think.isEmpty(qq_user.uid)) {
                _context.next = 26;
                break;
              }

              //没绑定跳转绑定页面
              this.redirect('/uc/qq/qqlogin/id/' + res.openid);

              _context.next = 40;
              break;

            case 26:
              //更qq信头像
              filePath = think.RESOURCE_PATH + '/upload/avatar/' + qq_user.uid;

              think.mkdir(filePath);
              //如果没有用户没有图像，使用QQ头像

              if (think.isFile(filePath + '/avatar.png')) {
                _context.next = 31;
                break;
              }

              _context.next = 31;
              return this.spiderImage(userinfo.figureurl_qq_2 || userinfo.figureurl_qq_1, filePath + '/avatar.png');

            case 31:
              _context.next = 33;
              return this.model("member").where({ id: qq_user.uid }).getField("last_login_time", true);

            case 33:
              last_login_time = _context.sent;
              qq_userInfo = {
                'uid': qq_user.uid,
                'username': userinfo.nickname,
                'last_login_time': last_login_time
              };
              _context.next = 37;
              return this.session('webuser', qq_userInfo);

            case 37:
              _context.next = 39;
              return this.model("member").autoLogin({ id: qq_user.uid }, this.ip());

            case 39:
              //更新用户登录信息，自动登陆
              this.redirect("/uc/index");

            case 40:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function loginresultAction() {
      return _ref.apply(this, arguments);
    }

    return loginresultAction;
  }();
  //qq用户绑定页面


  _class.prototype.qqloginAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var openid, qq_user;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this.setup.IS_QQ_LOGIN == 0)) {
                _context2.next = 3;
                break;
              }

              this.http.error = new Error('没有开启QQ登陆，请到后台开启！');
              return _context2.abrupt('return', think.statusAction(702, this.http));

            case 3:
              if (this.is_login) {
                this.redirect('/uc/index');
              }
              openid = this.get("id");
              _context2.next = 7;
              return this.model("qq_user").where({ openid: openid }).find();

            case 7:
              qq_user = _context2.sent;

              this.assign("qq_user", qq_user);
              this.meta_title = "账号绑定";

              if (!checkMobile(this.userAgent())) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 14:
              return _context2.abrupt('return', this.display());

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function qqloginAction() {
      return _ref2.apply(this, arguments);
    }

    return qqloginAction;
  }();
  /**完善资料绑定 */


  _class.prototype.organizingAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var data, res, reg, filePath, wx_userInfo;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              data = this.post();
              //验证

              res = void 0;

              if (!think.isEmpty(data.username)) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt('return', this.fail("用户昵称不能为空！"));

            case 6:
              _context3.next = 8;
              return this.model("member").where({ username: ltrim(data.username) }).find();

            case 8:
              res = _context3.sent;

              if (think.isEmpty(res)) {
                _context3.next = 11;
                break;
              }

              return _context3.abrupt('return', this.fail("用户昵称已存在，请重新填写！"));

            case 11:
              if (!think.isEmpty(data.mobile)) {
                _context3.next = 15;
                break;
              }

              return _context3.abrupt('return', this.fail("手机号码不能为空！"));

            case 15:
              _context3.next = 17;
              return this.model("member").where({ mobile: data.mobile }).find();

            case 17:
              res = _context3.sent;

              if (think.isEmpty(res)) {
                _context3.next = 20;
                break;
              }

              return _context3.abrupt('return', this.fail("手机号码已存在，请重新填写！"));

            case 20:
              if (!think.isEmpty(data.email)) {
                _context3.next = 24;
                break;
              }

              return _context3.abrupt('return', this.fail("电子邮箱不能为空！"));

            case 24:
              _context3.next = 26;
              return this.model("member").where({ email: data.email }).find();

            case 26:
              res = _context3.sent;

              if (think.isEmpty(res)) {
                _context3.next = 29;
                break;
              }

              return _context3.abrupt('return', this.fail("电子邮箱已存在，请重新填写！"));

            case 29:
              if (!(think.isEmpty(data.password) && think.isEmpty(data.password2))) {
                _context3.next = 33;
                break;
              }

              return _context3.abrupt('return', this.fail("密码不能为空！"));

            case 33:
              if (!(data.password != data.password2)) {
                _context3.next = 35;
                break;
              }

              return _context3.abrupt('return', this.fail("两次输入的密码不一致，请重新填写！"));

            case 35:
              data.status = 1;
              data.reg_time = new Date().valueOf();
              data.reg_ip = _ip2int(this.ip());
              data.password = encryptPassword(data.password);
              _context3.next = 41;
              return this.model("member").add(data);

            case 41:
              reg = _context3.sent;

              if (think.isEmpty(reg)) {
                _context3.next = 50;
                break;
              }

              _context3.next = 45;
              return this.model("qq_user").where({ openid: data.openid }).update({ uid: reg });

            case 45:
              //更新微信头像
              filePath = think.RESOURCE_PATH + '/upload/avatar/' + reg;

              think.mkdir(filePath);

              if (think.isFile(filePath + '/avatar.png')) {
                _context3.next = 50;
                break;
              }

              _context3.next = 50;
              return this.spiderImage(data.headimgurl, filePath + '/avatar.png');

            case 50:
              console.log(data);
              _context3.next = 53;
              return this.model("member").autoLogin({ id: reg }, this.ip());

            case 53:
              //更新用户登录信息，自动登陆
              wx_userInfo = {
                'uid': reg,
                'username': data.username,
                'last_login_time': data.reg_time
              };
              _context3.next = 56;
              return this.session('webuser', wx_userInfo);

            case 56:
              return _context3.abrupt('return', this.success({ name: "绑定成功", url: "/uc/index" }));

            case 57:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function organizingAction() {
      return _ref3.apply(this, arguments);
    }

    return organizingAction;
  }();
  /**登录绑定 */


  _class.prototype.logonbindingAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var data, username, password, res, qq_info, filePath, fail;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              data = this.post();
              //console.log(data);

              username = this.post('username');
              password = this.post('password');

              password = encryptPassword(password);
              console.log(data);

              _context4.next = 7;
              return this.model("member").signin(username, password, this.ip(), 5, 0);

            case 7:
              res = _context4.sent;

              if (!(0 < res.uid)) {
                _context4.next = 25;
                break;
              }

              _context4.next = 11;
              return this.model("qq_user").where({ openid: data.openid }).find();

            case 11:
              qq_info = _context4.sent;
              _context4.next = 14;
              return this.model("qq_user").where({ openid: data.openid }).update({ uid: res.uid });

            case 14:
              //更新微信头像
              filePath = think.RESOURCE_PATH + '/upload/avatar/' + res.uid;

              think.mkdir(filePath);

              if (think.isFile(filePath + '/avatar.png')) {
                _context4.next = 19;
                break;
              }

              _context4.next = 19;
              return this.spiderImage(data.headimgurl, filePath + '/avatar.png');

            case 19:
              res.username = qq_info.nickname;
              _context4.next = 22;
              return this.session('webuser', res);

            case 22:
              return _context4.abrupt('return', this.success({ name: "绑定成功", url: "/uc/index" }));

            case 25:
              //登录失败
              fail = void 0;
              _context4.t0 = res;
              _context4.next = _context4.t0 === -1 ? 29 : _context4.t0 === -2 ? 31 : 33;
              break;

            case 29:
              fail = '用户不存在或被禁用';
              return _context4.abrupt('break', 35);

            case 31:
              fail = '密码错误';
              return _context4.abrupt('break', 35);

            case 33:
              fail = '未知错误';
              return _context4.abrupt('break', 35);

            case 35:
              this.fail(fail);

            case 36:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function logonbindingAction() {
      return _ref4.apply(this, arguments);
    }

    return logonbindingAction;
  }();
  /**
   * 更新微信头像
   */


  _class.prototype.spiderImage = function spiderImage(imgUrl, filePath) {
    var deferred = think.defer();
    _http2.default.get(imgUrl, function (res) {
      var imgData = "";
      res.setEncoding("binary");
      res.on("data", function (chunk) {
        imgData += chunk;
      });

      res.on("end", function () {
        _fs2.default.writeFileSync(filePath, imgData, "binary");
        deferred.resolve(filePath);
      });
    });
    return deferred.promise;
  };

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=qq.js.map