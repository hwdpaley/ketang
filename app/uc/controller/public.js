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
  _class.prototype.indexAction = function indexAction() {
    //auto render template file index_index.html
    return this.display();
  };
  /**
   * 注册页面
   */


  _class.prototype.registerAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var data, res, reg, userInfo;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.isPost()) {
                _context.next = 54;
                break;
              }

              data = this.post();

              console.log(data);
              //验证
              res = void 0;

              if (!think.isEmpty(data.username)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt('return', this.fail("用户昵称不能为空！"));

            case 8:
              _context.next = 10;
              return this.model("member").where({ username: ltrim(data.username) }).find();

            case 10:
              res = _context.sent;

              if (think.isEmpty(res)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt('return', this.fail("用户昵称已存在，请重新填写！"));

            case 13:
              if (!think.isEmpty(data.mobile)) {
                _context.next = 17;
                break;
              }

              return _context.abrupt('return', this.fail("手机号码不能为空！"));

            case 17:
              _context.next = 19;
              return this.model("member").where({ mobile: data.mobile }).find();

            case 19:
              res = _context.sent;

              if (think.isEmpty(res)) {
                _context.next = 22;
                break;
              }

              return _context.abrupt('return', this.fail("手机号码已存在，请重新填写！"));

            case 22:
              if (!think.isEmpty(data.email)) {
                _context.next = 26;
                break;
              }

              return _context.abrupt('return', this.fail("电子邮箱不能为空！"));

            case 26:
              _context.next = 28;
              return this.model("member").where({ email: data.email }).find();

            case 28:
              res = _context.sent;

              if (think.isEmpty(res)) {
                _context.next = 31;
                break;
              }

              return _context.abrupt('return', this.fail("电子邮箱已存在，请重新填写！"));

            case 31:
              if (!(think.isEmpty(data.password) && think.isEmpty(data.password2))) {
                _context.next = 35;
                break;
              }

              return _context.abrupt('return', this.fail("密码不能为空！"));

            case 35:
              if (!(data.password != data.password2)) {
                _context.next = 37;
                break;
              }

              return _context.abrupt('return', this.fail("两次输入的密码不一致，请重新填写！"));

            case 37:
              if (!(data.clause != "on")) {
                _context.next = 39;
                break;
              }

              return _context.abrupt('return', this.fail("必须要同意,网站服务条款"));

            case 39:

              data.status = 1;
              data.reg_time = new Date().valueOf();
              data.reg_ip = _ip2int(this.ip());
              data.password = encryptPassword(data.password);
              _context.next = 45;
              return this.model("member").add(data);

            case 45:
              reg = _context.sent;
              _context.next = 48;
              return this.model("member").autoLogin({ id: reg }, this.ip());

            case 48:
              //更新用户登录信息，自动登陆
              userInfo = {
                'uid': reg,
                'username': data.username,
                'last_login_time': data.reg_time
              };
              _context.next = 51;
              return this.session('webuser', userInfo);

            case 51:
              return _context.abrupt('return', this.success({ name: "注册成功,登录中!", url: "/uc/index" }));

            case 54:
              this.meta_title = "用户注册";
              return _context.abrupt('return', this.display());

            case 56:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function registerAction() {
      return _ref.apply(this, arguments);
    }

    return registerAction;
  }();
  //   登陆页面


  _class.prototype.loginAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var Geetest, geetest, _res, username, password, res, fail;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("is post?============" + this.isAjax("post"));

              if (!this.isAjax("post")) {
                _context2.next = 36;
                break;
              }

              if (!(1 == this.setup.GEETEST_IS_LOGIN)) {
                _context2.next = 11;
                break;
              }

              Geetest = think.service("geetest"); //加载 commoon 模块下的 geetset service

              geetest = new Geetest();
              _context2.next = 7;
              return geetest.validate(this.post(), this.get('type'));

            case 7:
              _res = _context2.sent;

              console.log(_res);

              if (!("success" != _res.status)) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt('return', this.fail(-3, "验证码不正确!"));

            case 11:
              //用户账号密码验证
              username = this.post('username');
              password = this.post('password');

              password = encryptPassword(password);
              _context2.next = 16;
              return this.model("member").signin(username, password, this.ip(), 5, 0);

            case 16:
              res = _context2.sent;

              if (!(0 < res.uid)) {
                _context2.next = 23;
                break;
              }

              _context2.next = 20;
              return this.session('webuser', res);

            case 20:
              return _context2.abrupt('return', this.success({ name: '登录成功！' }));

            case 23:
              //登录失败
              fail = void 0;
              _context2.t0 = res;
              _context2.next = _context2.t0 === -1 ? 27 : _context2.t0 === -2 ? 29 : 31;
              break;

            case 27:
              fail = '用户不存在或被禁用';
              return _context2.abrupt('break', 33);

            case 29:
              fail = '密码错误';
              return _context2.abrupt('break', 33);

            case 31:
              fail = '未知错误';
              return _context2.abrupt('break', 33);

            case 33:
              return _context2.abrupt('return', this.fail(res, fail));

            case 34:
              _context2.next = 45;
              break;

            case 36:
              //如果已经登陆直接跳转到用户中心
              if (this.is_login) {
                this.redirect("/uc/index");
              }
              this.meta_title = "用户登录";
              //判断浏览客户端

              if (!checkMobile(this.userAgent())) {
                _context2.next = 43;
                break;
              }

              this.active = "user/index";
              return _context2.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 43:
              console.log("uc-public-login");
              return _context2.abrupt('return', this.display());

            case 45:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function loginAction() {
      return _ref2.apply(this, arguments);
    }

    return loginAction;
  }();
  //获取短信验证码


  _class.prototype.verifycodesendAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var data, code, res, map, exec_count, dayu, instance, qianming, temp_code, info, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (this.isPost()) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt('return', this.fail("请求错误！"));

            case 2:
              data = this.post();
              code = MathRand();

              if (!(data.check == 1)) {
                _context3.next = 10;
                break;
              }

              _context3.next = 7;
              return this.model("member").where({ mobile: data.mobile }).find();

            case 7:
              res = _context3.sent;

              if (think.isEmpty(res)) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt('return', this.fail("该手机号已存在！"));

            case 10:
              //检查执行周期
              map = {
                mobile: data.mobile,
                type: data.type
              };

              map.create_time = [">", new Date().valueOf() - 24 * 3600 * 1000];
              // console.log(map);
              _context3.next = 14;
              return this.model("sms_log").where(map).count();

            case 14:
              exec_count = _context3.sent;

              if (!(exec_count >= 3)) {
                _context3.next = 17;
                break;
              }

              return _context3.abrupt('return', this.fail("发送过于频发请24小时后，再尝试。"));

            case 17:
              dayu = think.adapter("alidayu", "client");
              instance = new dayu();
              qianming = this.setup.SMS_qianming;
              temp_code = void 0;

              if (data.type == 1) {
                temp_code = this.setup.SMS_zhuce;
              }
              info = {
                'extend': data.mobile,
                'sms_type': 'normal',
                'sms_free_sign_name': qianming,
                'sms_param': '{"code":"' + code + '","product":"' + this.setup.SMS_product + '"}',
                'rec_num': data.mobile,
                'sms_template_code': temp_code
              };
              _context3.next = 25;
              return instance.send(info);

            case 25:
              result = _context3.sent;

              // let result ={ err_code: '0',
              //     model: '102201717069^1102848633337',
              //     success: true }
              console.log(result);
              //发送成功记录到数据库

              if (!(0 == result.result.err_code)) {
                _context3.next = 30;
                break;
              }

              _context3.next = 30;
              return this.model("sms_log").add({
                mobile: data.mobile,
                type: data.type,
                code: code,
                create_time: new Date().valueOf()
              });

            case 30:
              return _context3.abrupt('return', this.json(result.result));

            case 31:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function verifycodesendAction() {
      return _ref3.apply(this, arguments);
    }

    return verifycodesendAction;
  }();
  //短信注册


  _class.prototype.smsregAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var data, map, code, patrn, reg, userInfo;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              data = this.post();
              //对比验证码

              map = {
                mobile: data.mobile,
                type: data.sms_type
              };

              map.create_time = [">", new Date().valueOf() - 1 * 3600 * 1000];
              // console.log(map);
              _context4.next = 5;
              return this.model("sms_log").where(map).order("id DESC").getField("code", true);

            case 5:
              code = _context4.sent;

              if (!(think.isEmpty(code) || code != data.verifycode)) {
                _context4.next = 8;
                break;
              }

              return _context4.abrupt('return', this.fail("验证码不正确!"));

            case 8:
              patrn = /^(\w){6,20}$/;

              if (patrn.test(data.password)) {
                _context4.next = 11;
                break;
              }

              return _context4.abrupt('return', this.fail("密码：只能输入6-20个字母、数字、下划线"));

            case 11:
              data.email = 0;
              data.username = data.mobile;
              data.status = 1;
              data.reg_time = new Date().valueOf();
              data.reg_ip = _ip2int(this.ip());
              data.password = encryptPassword(data.password);
              _context4.next = 19;
              return this.model("member").add(data);

            case 19:
              reg = _context4.sent;

              if (!reg) {
                _context4.next = 23;
                break;
              }

              _context4.next = 23;
              return this.model("customer").add({ user_id: reg });

            case 23:
              _context4.next = 25;
              return this.model("member").autoLogin({ id: reg }, this.ip());

            case 25:
              //更新用户登录信息，自动登陆
              userInfo = {
                'uid': reg,
                'username': data.username,
                'last_login_time': data.reg_time
              };
              _context4.next = 28;
              return this.session('webuser', userInfo);

            case 28:
              return _context4.abrupt('return', this.success({ name: "注册成功,登录中!", url: "/uc/index" }));

            case 29:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function smsregAction() {
      return _ref4.apply(this, arguments);
    }

    return smsregAction;
  }();

  _class.prototype.verifymemberAction = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      var v, f, map, res;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              v = this.get("v");
              f = this.get("f");
              map = {};

              map[f] = v;
              _context5.next = 6;
              return this.model("member").where(map).find();

            case 6:
              res = _context5.sent;

              if (think.isEmpty(res)) {
                _context5.next = 11;
                break;
              }

              return _context5.abrupt('return', this.fail("已存在"));

            case 11:
              return _context5.abrupt('return', this.success("不存在"));

            case 12:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function verifymemberAction() {
      return _ref5.apply(this, arguments);
    }

    return verifymemberAction;
  }();

  //退出登录


  _class.prototype.logoutAction = function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!this.is_login) {
                _context6.next = 5;
                break;
              }

              _context6.next = 3;
              return this.session('webuser', null);

            case 3:
              _context6.next = 6;
              break;

            case 5:
              this.redirect("/index");

            case 6:
              this.redirect("/index");

            case 7:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function logoutAction() {
      return _ref6.apply(this, arguments);
    }

    return logoutAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=public.js.map