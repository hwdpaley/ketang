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

var _jimp = require('jimp');

var _jimp2 = _interopRequireDefault(_jimp);

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
  //   用户设置
  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var userInfo, province, city, county;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.weblogin();

            case 2:
              _context.next = 4;
              return this.model("member").find(this.user.uid);

            case 4:
              userInfo = _context.sent;

              console.log(userInfo);
              //console.log(userInfo);
              this.assign("userInfo", userInfo);
              province = void 0, city = void 0, county = void 0;
              //获取省份

              if (!checkMobile(this.userAgent())) {
                _context.next = 20;
                break;
              }

              _context.next = 11;
              return this.model('area').where({ id: userInfo.province }).getField("name", true);

            case 11:
              province = _context.sent;
              _context.next = 14;
              return this.model('area').where({ id: userInfo.city }).getField("name", true);

            case 14:
              city = _context.sent;
              _context.next = 17;
              return this.model('area').where({ id: userInfo.county }).getField("name", true);

            case 17:
              county = _context.sent;
              _context.next = 29;
              break;

            case 20:
              _context.next = 22;
              return this.model('area').where({ parent_id: 0 }).select();

            case 22:
              province = _context.sent;
              _context.next = 25;
              return this.model('area').where({ parent_id: userInfo.province }).select();

            case 25:
              city = _context.sent;
              _context.next = 28;
              return this.model('area').where({ parent_id: userInfo.city }).select();

            case 28:
              county = _context.sent;

            case 29:

              this.assign("province", province);
              this.assign("city", city);
              this.assign("county", county);
              this.meta_title = "用户设置";
              //判断浏览客户端

              if (!checkMobile(this.userAgent())) {
                _context.next = 38;
                break;
              }

              this.active = "user/index";
              return _context.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 38:
              return _context.abrupt('return', this.display());

            case 39:
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

  //更新用户信息


  _class.prototype.updateinfoAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var data, member, city_picke, update;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.weblogin();

            case 2:
              data = this.post();
              // console.log("updateinfoAction-----------,"+JSON.stringify(data));

              if (!data.birthday) {
                data.birthday = new Date().getTime();
              } else {
                data.birthday = new Date(data.birthday).getTime();
              }
              member = {
                email: data.email,
                mobile: data.mobile,
                real_name: data.real_name,
                sex: data.sex,
                birthday: data.birthday,
                province: data.province,
                city: data.city,
                county: data.county,
                addr: data.addr

                //判断浏览客户端
              };

              if (!checkMobile(this.userAgent())) {
                _context2.next = 17;
                break;
              }

              if (think.isEmpty(data.city_picke)) {
                _context2.next = 17;
                break;
              }

              city_picke = data.city_picke.split(" ");
              _context2.next = 10;
              return this.model("area").where({
                name: ["like", '%' + city_picke[0] + '%'],
                parent_id: 0
              }).getField("id", true);

            case 10:
              member.province = _context2.sent;
              _context2.next = 13;
              return this.model("area").where({
                name: ["like", '%' + city_picke[1] + '%'],
                parent_id: member.province
              }).getField("id", true);

            case 13:
              member.city = _context2.sent;
              _context2.next = 16;
              return this.model("area").where({
                name: ["like", '%' + city_picke[2] + '%'],
                parent_id: member.city
              }).getField("id", true);

            case 16:
              member.county = _context2.sent;

            case 17:
              _context2.next = 19;
              return this.model("member").where({ id: this.user.uid }).update(member);

            case 19:
              update = _context2.sent;

              if (!update) {
                _context2.next = 24;
                break;
              }

              return _context2.abrupt('return', this.success({ name: "更新用户资料成功！" }));

            case 24:
              return _context2.abrupt('return', this.fail("更新失败！"));

            case 25:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function updateinfoAction() {
      return _ref2.apply(this, arguments);
    }

    return updateinfoAction;
  }();

  //修改密码


  _class.prototype.updatepasswordAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var data, password;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.weblogin();

            case 2:
              data = this.post();

              if (!think.isEmpty(data.password)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt('return', this.fail("请填写新密码！"));

            case 5:
              _context3.next = 7;
              return this.model("member").where({ id: this.user.uid }).getField("password", true);

            case 7:
              password = _context3.sent;

              if (!(password === encryptPassword(data.oldpassword))) {
                _context3.next = 14;
                break;
              }

              _context3.next = 11;
              return this.model("member").where({ id: this.user.uid }).update({ password: encryptPassword(data.password) });

            case 11:
              return _context3.abrupt('return', this.success({ name: "密码修改成功，请用新密码重新登陆！" }));

            case 14:
              return _context3.abrupt('return', this.fail("旧密码不正确，请重新输入。"));

            case 15:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function updatepasswordAction() {
      return _ref3.apply(this, arguments);
    }

    return updatepasswordAction;
  }();

  //上传头像


  _class.prototype.updateavatarAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var _this2 = this;

      var file, filepath, uploadPath, res, jimp2, post, avatar_data, jimp, data;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.weblogin();

            case 2:
              file = think.extend({}, this.file('file'));

              console.log(file);
              //think.log(avatar_data);
              filepath = file.path;
              //文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件

              uploadPath = think.RESOURCE_PATH + '/upload/avatar/' + this.user.uid;

              think.mkdir(uploadPath);
              res = void 0;

              if (!checkMobile(this.userAgent())) {
                _context4.next = 15;
                break;
              }

              jimp2 = function jimp2() {
                console.log(111);
                var deferred = think.defer();
                var self = _this2;
                _jimp2.default.read(filepath, function (err, lenna) {
                  if (err) throw err;
                  lenna.resize(200, 200) // resize
                  .quality(60) // set JPEG quality
                  .write(uploadPath + "/avatar.png", function (e, r) {
                    deferred.resolve('/upload/avatar/' + self.user.uid + "/avatar.png");
                  }); // save
                });
                return deferred.promise;
              };

              _context4.next = 12;
              return jimp2();

            case 12:
              res = _context4.sent;
              _context4.next = 21;
              break;

            case 15:
              post = this.post();
              avatar_data = JSON.parse(post.avatar_data);

              jimp = function jimp() {
                var deferred = think.defer();
                var self = _this2;
                _jimp2.default.read(filepath, function (err, lenna) {
                  //console.log(lenna)

                  if (err) throw err;
                  lenna.crop(avatar_data.x, avatar_data.y, avatar_data.width, avatar_data.height) // resize
                  .quality(60).write(uploadPath + "/avatar.png", function (e, r) {
                    deferred.resolve('/upload/avatar/' + self.user.uid + "/avatar.png");
                  }); // save
                });
                return deferred.promise;
              };

              _context4.next = 20;
              return jimp();

            case 20:
              res = _context4.sent;

            case 21:

              //think.log(res);
              data = {
                "result": res,
                "errno": 0,
                "message": "头像上传成功！"
              };
              return _context4.abrupt('return', this.end(data));

            case 23:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function updateavatarAction() {
      return _ref4.apply(this, arguments);
    }

    return updateavatarAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=seting.js.map