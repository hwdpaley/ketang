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

var _thinkPagination = require('think-pagination');

var _thinkPagination2 = _interopRequireDefault(_thinkPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  /**
   * 收货地址管理
   * @returns {PreventPromise}
   */
  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var data, html, _iterator, _isArray, _i, _ref2, val;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.weblogin();

            case 2:
              _context.next = 4;
              return this.model("address").where({ user_id: this.user.uid }).page(this.get('page')).order("is_default DESC,id DESC").countSelect();

            case 4:
              data = _context.sent;
              html = (0, _thinkPagination2.default)(data, this.http, {
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
              //think.log(data);

              this.assign('pagination', html);

              if (think.isEmpty(data.data)) {
                _context.next = 34;
                break;
              }

              _iterator = data.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 9:
              if (!_isArray) {
                _context.next = 15;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context.next = 12;
                break;
              }

              return _context.abrupt('break', 34);

            case 12:
              _ref2 = _iterator[_i++];
              _context.next = 19;
              break;

            case 15:
              _i = _iterator.next();

              if (!_i.done) {
                _context.next = 18;
                break;
              }

              return _context.abrupt('break', 34);

            case 18:
              _ref2 = _i.value;

            case 19:
              val = _ref2;

              val.province_num = val.province;
              val.city_num = val.city;
              val.county_num = val.county;
              _context.next = 25;
              return this.model("area").where({ id: val.province }).getField("name", true);

            case 25:
              val.province = _context.sent;
              _context.next = 28;
              return this.model("area").where({ id: val.city }).getField("name", true);

            case 28:
              val.city = _context.sent;
              _context.next = 31;
              return this.model("area").where({ id: val.county }).getField("name", true);

            case 31:
              val.county = _context.sent;

            case 32:
              _context.next = 9;
              break;

            case 34:
              this.assign("list", data.data);
              this.meta_title = "收货地址";
              //判断浏览客户端

              if (!checkMobile(this.userAgent())) {
                _context.next = 41;
                break;
              }

              this.active = "user/index";
              return _context.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 41:
              return _context.abrupt('return', this.display());

            case 42:
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

  //获取省市三级联动


  _class.prototype.getareaAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var pid, area;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pid = this.get("pid");
              _context2.next = 3;
              return this.model('area').where({ parent_id: pid }).select();

            case 3:
              area = _context2.sent;
              return _context2.abrupt('return', this.json(area));

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getareaAction() {
      return _ref3.apply(this, arguments);
    }

    return getareaAction;
  }();
  //选择收货地址（仅手机端用）


  _class.prototype.selectaddrAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var get, data, _iterator2, _isArray2, _i2, _ref5, val;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.weblogin();

            case 2:
              get = this.get();
              _context3.next = 5;
              return this.model("address").where({ user_id: this.user.uid }).order("is_default DESC,id DESC").select();

            case 5:
              data = _context3.sent;

              if (think.isEmpty(data)) {
                _context3.next = 33;
                break;
              }

              _iterator2 = data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

            case 8:
              if (!_isArray2) {
                _context3.next = 14;
                break;
              }

              if (!(_i2 >= _iterator2.length)) {
                _context3.next = 11;
                break;
              }

              return _context3.abrupt('break', 33);

            case 11:
              _ref5 = _iterator2[_i2++];
              _context3.next = 18;
              break;

            case 14:
              _i2 = _iterator2.next();

              if (!_i2.done) {
                _context3.next = 17;
                break;
              }

              return _context3.abrupt('break', 33);

            case 17:
              _ref5 = _i2.value;

            case 18:
              val = _ref5;

              val.province_num = val.province;
              val.city_num = val.city;
              val.county_num = val.county;
              _context3.next = 24;
              return this.model("area").where({ id: val.province }).getField("name", true);

            case 24:
              val.province = _context3.sent;
              _context3.next = 27;
              return this.model("area").where({ id: val.city }).getField("name", true);

            case 27:
              val.city = _context3.sent;
              _context3.next = 30;
              return this.model("area").where({ id: val.county }).getField("name", true);

            case 30:
              val.county = _context3.sent;

            case 31:
              _context3.next = 8;
              break;

            case 33:
              this.assign("list", data);
              this.assign("goodsget", get.goodslist);
              this.assign("id", get.id);
              this.meta_title = "选择收货地址";

              if (!checkMobile(this.userAgent())) {
                _context3.next = 41;
                break;
              }

              return _context3.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 41:
              return _context3.abrupt('return', this.display());

            case 42:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function selectaddrAction() {
      return _ref4.apply(this, arguments);
    }

    return selectaddrAction;
  }();
  //添加或者更新联系人地址


  _class.prototype.addaddrAction = function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var data, find, _iterator3, _isArray3, _i3, _ref7, val, city_picke, res, addrlist, _iterator4, _isArray4, _i4, _ref8, _val;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.weblogin();

            case 2:
              data = this.post();

              data.user_id = this.user.uid;

              if (!(data.is_default == 1)) {
                _context4.next = 25;
                break;
              }

              _context4.next = 7;
              return this.model("address").where({ user_id: this.user.uid, is_default: 1 }).select();

            case 7:
              find = _context4.sent;
              _iterator3 = find, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

            case 9:
              if (!_isArray3) {
                _context4.next = 15;
                break;
              }

              if (!(_i3 >= _iterator3.length)) {
                _context4.next = 12;
                break;
              }

              return _context4.abrupt('break', 25);

            case 12:
              _ref7 = _iterator3[_i3++];
              _context4.next = 19;
              break;

            case 15:
              _i3 = _iterator3.next();

              if (!_i3.done) {
                _context4.next = 18;
                break;
              }

              return _context4.abrupt('break', 25);

            case 18:
              _ref7 = _i3.value;

            case 19:
              val = _ref7;

              val.is_default = 0;
              _context4.next = 23;
              return this.model("address").update(val);

            case 23:
              _context4.next = 9;
              break;

            case 25:
              if (!checkMobile(this.userAgent())) {
                _context4.next = 37;
                break;
              }

              if (think.isEmpty(data.city_picke)) {
                _context4.next = 37;
                break;
              }

              city_picke = data.city_picke.split(" ");
              _context4.next = 30;
              return this.model("area").where({
                name: ["like", '%' + city_picke[0] + '%'],
                parent_id: 0
              }).getField("id", true);

            case 30:
              data.province = _context4.sent;
              _context4.next = 33;
              return this.model("area").where({
                name: ["like", '%' + city_picke[1] + '%'],
                parent_id: data.province
              }).getField("id", true);

            case 33:
              data.city = _context4.sent;
              _context4.next = 36;
              return this.model("area").where({
                name: ["like", '%' + city_picke[2] + '%'],
                parent_id: data.city
              }).getField("id", true);

            case 36:
              data.county = _context4.sent;

            case 37:
              res = void 0;

              if (!think.isEmpty(data.id)) {
                _context4.next = 44;
                break;
              }

              _context4.next = 41;
              return this.model("address").add(data);

            case 41:
              res = _context4.sent;
              _context4.next = 47;
              break;

            case 44:
              _context4.next = 46;
              return this.model("address").update(data);

            case 46:
              res = _context4.sent;

            case 47:
              if (!res) {
                _context4.next = 81;
                break;
              }

              if (!checkMobile(this.userAgent())) {
                _context4.next = 52;
                break;
              }

              return _context4.abrupt('return', this.success({ name: '操作成功', url: data.resurl }));

            case 52:
              _context4.next = 54;
              return this.model("address").where({ user_id: this.user.uid }).order("is_default DESC,id DESC").select();

            case 54:
              addrlist = _context4.sent;
              _iterator4 = addrlist, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

            case 56:
              if (!_isArray4) {
                _context4.next = 62;
                break;
              }

              if (!(_i4 >= _iterator4.length)) {
                _context4.next = 59;
                break;
              }

              return _context4.abrupt('break', 78);

            case 59:
              _ref8 = _iterator4[_i4++];
              _context4.next = 66;
              break;

            case 62:
              _i4 = _iterator4.next();

              if (!_i4.done) {
                _context4.next = 65;
                break;
              }

              return _context4.abrupt('break', 78);

            case 65:
              _ref8 = _i4.value;

            case 66:
              _val = _ref8;
              _context4.next = 69;
              return this.model("area").where({ id: _val.province }).getField("name", true);

            case 69:
              _val.province = _context4.sent;
              _context4.next = 72;
              return this.model("area").where({ id: _val.city }).getField("name", true);

            case 72:
              _val.city = _context4.sent;
              _context4.next = 75;
              return this.model("area").where({ id: _val.county }).getField("name", true);

            case 75:
              _val.county = _context4.sent;

            case 76:
              _context4.next = 56;
              break;

            case 78:
              return _context4.abrupt('return', this.success({ name: '操作成功', data: addrlist, type: data.type }));

            case 79:
              _context4.next = 82;
              break;

            case 81:
              return _context4.abrupt('return', this.fail('操作失败！'));

            case 82:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function addaddrAction() {
      return _ref6.apply(this, arguments);
    }

    return addaddrAction;
  }();

  //联系人设置为默认


  _class.prototype.addrisdefaultAction = function () {
    var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      var id, find, _iterator5, _isArray5, _i5, _ref10, val;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.weblogin();

            case 2:
              id = this.get("id");
              _context5.next = 5;
              return this.model("address").where({ user_id: this.user.uid }).order("is_default ASC").select();

            case 5:
              find = _context5.sent;
              _iterator5 = find, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

            case 7:
              if (!_isArray5) {
                _context5.next = 13;
                break;
              }

              if (!(_i5 >= _iterator5.length)) {
                _context5.next = 10;
                break;
              }

              return _context5.abrupt('break', 32);

            case 10:
              _ref10 = _iterator5[_i5++];
              _context5.next = 17;
              break;

            case 13:
              _i5 = _iterator5.next();

              if (!_i5.done) {
                _context5.next = 16;
                break;
              }

              return _context5.abrupt('break', 32);

            case 16:
              _ref10 = _i5.value;

            case 17:
              val = _ref10;

              if (val.id == id) {
                val.is_default = 1;
              } else {
                val.is_default = 0;
              }
              _context5.next = 21;
              return this.model("address").update(val);

            case 21:
              _context5.next = 23;
              return this.model("area").where({ id: val.province }).getField("name", true);

            case 23:
              val.province = _context5.sent;
              _context5.next = 26;
              return this.model("area").where({ id: val.city }).getField("name", true);

            case 26:
              val.city = _context5.sent;
              _context5.next = 29;
              return this.model("area").where({ id: val.county }).getField("name", true);

            case 29:
              val.county = _context5.sent;

            case 30:
              _context5.next = 7;
              break;

            case 32:
              return _context5.abrupt('return', this.success({ name: '设置成功！', data: find }));

            case 33:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function addrisdefaultAction() {
      return _ref9.apply(this, arguments);
    }

    return addrisdefaultAction;
  }();
  //获取当前选择的地址


  _class.prototype.getaddrAction = function () {
    var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
      var id, addr;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.weblogin();

            case 2:
              id = this.get("id");
              _context6.next = 5;
              return this.model("address").where({ user_id: this.user.uid }).find(id);

            case 5:
              addr = _context6.sent;
              _context6.next = 8;
              return this.model("area").where({ id: addr.province }).getField("name", true);

            case 8:
              addr.province = _context6.sent;
              _context6.next = 11;
              return this.model("area").where({ id: addr.city }).getField("name", true);

            case 11:
              addr.city = _context6.sent;
              _context6.next = 14;
              return this.model("area").where({ id: addr.county }).getField("name", true);

            case 14:
              addr.county = _context6.sent;
              return _context6.abrupt('return', this.success({ name: "选择地址！", data: addr }));

            case 16:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function getaddrAction() {
      return _ref11.apply(this, arguments);
    }

    return getaddrAction;
  }();
  //删除地址


  _class.prototype.deladdrAction = function () {
    var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
      var id, res, addrlist, _iterator6, _isArray6, _i6, _ref13, val;

      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.weblogin();

            case 2:
              id = this.param("id");
              _context7.next = 5;
              return this.model("address").where({ user_id: this.user.uid, id: id }).delete();

            case 5:
              res = _context7.sent;

              if (!res) {
                _context7.next = 40;
                break;
              }

              _context7.next = 9;
              return this.model("address").where({ user_id: this.user.uid }).order("is_default DESC").select();

            case 9:
              addrlist = _context7.sent;
              _iterator6 = addrlist, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

            case 11:
              if (!_isArray6) {
                _context7.next = 17;
                break;
              }

              if (!(_i6 >= _iterator6.length)) {
                _context7.next = 14;
                break;
              }

              return _context7.abrupt('break', 33);

            case 14:
              _ref13 = _iterator6[_i6++];
              _context7.next = 21;
              break;

            case 17:
              _i6 = _iterator6.next();

              if (!_i6.done) {
                _context7.next = 20;
                break;
              }

              return _context7.abrupt('break', 33);

            case 20:
              _ref13 = _i6.value;

            case 21:
              val = _ref13;
              _context7.next = 24;
              return this.model("area").where({ id: val.province }).getField("name", true);

            case 24:
              val.province = _context7.sent;
              _context7.next = 27;
              return this.model("area").where({ id: val.city }).getField("name", true);

            case 27:
              val.city = _context7.sent;
              _context7.next = 30;
              return this.model("area").where({ id: val.county }).getField("name", true);

            case 30:
              val.county = _context7.sent;

            case 31:
              _context7.next = 11;
              break;

            case 33:
              if (!checkMobile(this.userAgent())) {
                _context7.next = 37;
                break;
              }

              return _context7.abrupt('return', this.success({ name: '删除成功', url: this.post("resurl") }));

            case 37:
              return _context7.abrupt('return', this.success({ name: '删除成功！', data: addrlist }));

            case 38:
              _context7.next = 41;
              break;

            case 40:
              return _context7.abrupt('return', this.fail('删除失败！'));

            case 41:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function deladdrAction() {
      return _ref12.apply(this, arguments);
    }

    return deladdrAction;
  }();
  //编辑地址


  _class.prototype.editaddrmodalAction = function () {
    var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
      var id, address, province, city, county;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.weblogin();

            case 2:
              id = this.get("id");

              if (think.isEmpty(id)) {
                _context8.next = 37;
                break;
              }

              _context8.next = 6;
              return this.model("address").where({ user_id: this.user.uid }).find(id);

            case 6:
              address = _context8.sent;
              province = void 0, city = void 0, county = void 0;
              //获取省份

              if (!checkMobile(this.userAgent())) {
                _context8.next = 20;
                break;
              }

              _context8.next = 11;
              return this.model('area').where({ id: address.province }).getField("name", true);

            case 11:
              province = _context8.sent;
              _context8.next = 14;
              return this.model('area').where({ id: address.city }).getField("name", true);

            case 14:
              city = _context8.sent;
              _context8.next = 17;
              return this.model('area').where({ id: address.county }).getField("name", true);

            case 17:
              county = _context8.sent;
              _context8.next = 29;
              break;

            case 20:
              _context8.next = 22;
              return this.model('area').where({ parent_id: 0 }).select();

            case 22:
              province = _context8.sent;
              _context8.next = 25;
              return this.model('area').where({ parent_id: address.province }).select();

            case 25:
              city = _context8.sent;
              _context8.next = 28;
              return this.model('area').where({ parent_id: address.city }).select();

            case 28:
              county = _context8.sent;

            case 29:
              this.assign("province", province);
              this.assign("city", city);
              this.assign("county", county);
              this.assign("info", address);
              this.assign("type", this.get("type"));
              this.meta_title = "编辑地址";
              _context8.next = 38;
              break;

            case 37:
              this.meta_title = "添加地址";

            case 38:
              if (!checkMobile(this.userAgent())) {
                _context8.next = 43;
                break;
              }

              this.active = "user/index";
              return _context8.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 43:
              return _context8.abrupt('return', this.display());

            case 44:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function editaddrmodalAction() {
      return _ref14.apply(this, arguments);
    }

    return editaddrmodalAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=address.js.map