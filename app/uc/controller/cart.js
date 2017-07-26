// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

exports.__esModule = true;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

  _class.prototype.init = function init(http) {
    _Base.prototype.init.call(this, http);
  };
  /**
   * index action
   * @return {Promise} []
   */
  //购物车展示


  _class.prototype.indexAction = function indexAction() {
    //auto render template file index_index.html
    this.meta_title = "购物车"; //标题1
    this.keywords = this.setup.WEB_SITE_KEYWORD ? this.setup.WEB_SITE_KEYWORD : ''; //seo关键词
    this.description = this.setup.WEB_SITE_DESCRIPTION ? this.setup.WEB_SITE_DESCRIPTION : ""; //seo描述
    this.active = this.http.controller + "/" + this.http.action;
    //console.log(checkMobile(this.userAgent()));
    //编辑购物车// todou
    //判断浏览客户端
    if (checkMobile(this.userAgent())) {
      return this.display('mobile/' + this.http.controller + '/' + this.http.action);
    } else {
      return this.display();
    }
  };
  //编辑购物车数量


  _class.prototype.stepperAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var data, ids, stock, goods, datas, res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.is_login) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', this.fail("请先登录"));

            case 2:
              data = this.post();

              console.log(data);
              ids = data.ids.split("||");
              //检查库存

              _context.next = 7;
              return this.model("order").getstock(ids[0], ids[1]);

            case 7:
              stock = _context.sent;

              if (!(data.qty > stock)) {
                _context.next = 12;
                break;
              }

              return _context.abrupt('return', this.fail("无货"));

            case 12:
              _context.next = 14;
              return this.model("cart").where({ product_id: ids[0], type: ids[1] || "", uid: this.user.uid }).find();

            case 14:
              goods = _context.sent;
              datas = {
                id: goods.id,
                qty: data.qty,
                price: Number(data.qty) * goods.unit_price
              };
              _context.next = 18;
              return this.model("cart").update(datas);

            case 18:
              _context.next = 20;
              return this.model("cart").find(goods.id);

            case 20:
              res = _context.sent;
              return _context.abrupt('return', this.success({ name: "有货", data: res }));

            case 22:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function stepperAction() {
      return _ref.apply(this, arguments);
    }

    return stepperAction;
  }();
  //删除购物车


  _class.prototype.delcartAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var ids, _iterator, _isArray, _i, _ref3, val, id, _ids;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (this.is_login) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt('return', this.fail("请先登录"));

            case 2:
              if (!this.isAjax("post")) {
                _context2.next = 28;
                break;
              }

              ids = this.post("ids");
              _iterator = ids.split("<>"), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 5:
              if (!_isArray) {
                _context2.next = 11;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt('break', 21);

            case 8:
              _ref3 = _iterator[_i++];
              _context2.next = 15;
              break;

            case 11:
              _i = _iterator.next();

              if (!_i.done) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt('break', 21);

            case 14:
              _ref3 = _i.value;

            case 15:
              val = _ref3;
              _context2.next = 18;
              return this.model("cart").where({ product_id: val.split("||")[0], type: val.split("||")[1] || "", uid: this.user.uid }).delete();

            case 18:
              id = _context2.sent;

            case 19:
              _context2.next = 5;
              break;

            case 21:
              if (!checkMobile(this.userAgent())) {
                _context2.next = 25;
                break;
              }

              return _context2.abrupt('return', this.success({ name: "删除成功！", url: "/uc/cart/index" }));

            case 25:
              return _context2.abrupt('return', this.success({ name: "删除成功！" }));

            case 26:
              _context2.next = 39;
              break;

            case 28:
              _ids = this.get("ids");

              if (!think.isEmpty(_ids)) {
                _context2.next = 31;
                break;
              }

              return _context2.abrupt('return', this.fail("选择要删除的商品"));

            case 31:

              this.assign("ids", _ids);
              this.meta_title = "删除";
              this.active = "/uc/cart/index";
              //判断浏览客户端

              if (!checkMobile(this.userAgent())) {
                _context2.next = 38;
                break;
              }

              return _context2.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 38:
              return _context2.abrupt('return', this.display());

            case 39:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function delcartAction() {
      return _ref2.apply(this, arguments);
    }

    return delcartAction;
  }();
  //添加购物车


  _class.prototype.addcartAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var data, stock, arr, cart, typearr, idarr, _iterator2, _isArray2, _i2, _ref5, item, dataarr, total, num, _iterator3, _isArray3, _i3, _ref6, _val, dataobj, goods, table, info, suk, arr_, getpr, _iterator4, _isArray4, _i4, _ref7, val, cartinfo;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              data = this.post();

              data = think.extend({}, data);
              // 添加购物车前判断是否有库存
              _context3.next = 4;
              return this.model("order").getstock(data.product_id, data.type);

            case 4:
              stock = _context3.sent;

              if (!(data.qty > stock)) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt('return', this.json(false));

            case 7:
              console.log(data);
              //return false;
              arr = [];
              cart = this.cart.data;

              if (!think.isEmpty(cart)) {
                _context3.next = 14;
                break;
              }

              arr.push(data);
              _context3.next = 36;
              break;

            case 14:
              //cart = JSON.parse(cart);
              console.log(cart);
              typearr = [];
              idarr = [];
              //已有购物车数量相加

              _iterator2 = cart, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

            case 18:
              if (!_isArray2) {
                _context3.next = 24;
                break;
              }

              if (!(_i2 >= _iterator2.length)) {
                _context3.next = 21;
                break;
              }

              return _context3.abrupt('break', 35);

            case 21:
              _ref5 = _iterator2[_i2++];
              _context3.next = 28;
              break;

            case 24:
              _i2 = _iterator2.next();

              if (!_i2.done) {
                _context3.next = 27;
                break;
              }

              return _context3.abrupt('break', 35);

            case 27:
              _ref5 = _i2.value;

            case 28:
              item = _ref5;

              if (item.type == data.type && item.product_id == data.product_id) {
                item.qty = Number(item.qty) + Number(data.qty);
              }
              arr.push(item);
              idarr.push(item.product_id);
              typearr.push(item.type);

            case 33:
              _context3.next = 18;
              break;

            case 35:
              //没有直接添加商品
              if (!think.isEmpty(data.type)) {
                if (!in_array(data.type, typearr)) {
                  arr.splice(0, 0, data);
                };
              } else {
                if (!in_array(data.product_id, idarr)) {
                  arr.splice(0, 0, data);
                };
              }

            case 36:
              //console.log(arr);

              //获取商品详细信息
              //{total:222,data:[{title:"dfd",price:34,pic:2,}]}
              //arr.push(data);
              dataarr = [];
              total = [];
              num = [];
              _iterator3 = arr, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

            case 40:
              if (!_isArray3) {
                _context3.next = 46;
                break;
              }

              if (!(_i3 >= _iterator3.length)) {
                _context3.next = 43;
                break;
              }

              return _context3.abrupt('break', 96);

            case 43:
              _ref6 = _iterator3[_i3++];
              _context3.next = 50;
              break;

            case 46:
              _i3 = _iterator3.next();

              if (!_i3.done) {
                _context3.next = 49;
                break;
              }

              return _context3.abrupt('break', 96);

            case 49:
              _ref6 = _i3.value;

            case 50:
              _val = _ref6;
              dataobj = {};
              _context3.next = 54;
              return this.model('document').find(_val.product_id);

            case 54:
              goods = _context3.sent;
              _context3.next = 57;
              return this.model('model').get_table_name(goods.model_id);

            case 57:
              table = _context3.sent;
              _context3.next = 60;
              return this.model(table).find(_val.product_id);

            case 60:
              info = _context3.sent;

              goods = think.extend(goods, info);
              dataobj.title = goods.title;
              //console.log(goods);

              if (!think.isEmpty(goods.suk)) {
                _context3.next = 72;
                break;
              }

              dataobj.price = get_price(goods.price, 1) * Number(_val.qty);
              dataobj.unit_price = get_price(goods.price, 1);
              dataobj.weight = goods.weight;
              _context3.next = 69;
              return get_pic(goods.pics.split(",")[0], 1, 100, 100);

            case 69:
              dataobj.pic = _context3.sent;
              _context3.next = 87;
              break;

            case 72:
              suk = JSON.parse(goods.suk);
              arr_ = _val.type.split(",");
              getpr = getsuk(suk.data, arr_);
              //console.log(getpr);

              if (!(suk.is_pic == 1)) {
                _context3.next = 81;
                break;
              }

              _context3.next = 78;
              return get_pic(getpr.pic, 1, 100, 100);

            case 78:
              dataobj.pic = _context3.sent;
              _context3.next = 84;
              break;

            case 81:
              _context3.next = 83;
              return get_pic(goods.pics.split(",")[0], 1, 100, 100);

            case 83:
              dataobj.pic = _context3.sent;

            case 84:
              dataobj.price = Number(getpr.sku_price) * Number(_val.qty);
              dataobj.unit_price = Number(getpr.sku_price);
              dataobj.weight = getpr.sku_weight;
              //console.log(dataobj.price);

            case 87:

              dataobj.url = get_url(goods.name, goods.id);
              dataobj.product_id = _val.product_id;
              dataobj.type = _val.type;
              dataobj.qty = Number(_val.qty);
              dataarr.push(dataobj);
              total.push(dataobj.price);
              num.push(dataobj.qty);

            case 94:
              _context3.next = 40;
              break;

            case 96:
              if (!this.is_login) {
                _context3.next = 117;
                break;
              }

              _context3.next = 99;
              return this.model('cart').where({ uid: this.user.uid }).delete();

            case 99:
              _iterator4 = dataarr, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

            case 100:
              if (!_isArray4) {
                _context3.next = 106;
                break;
              }

              if (!(_i4 >= _iterator4.length)) {
                _context3.next = 103;
                break;
              }

              return _context3.abrupt('break', 115);

            case 103:
              _ref7 = _iterator4[_i4++];
              _context3.next = 110;
              break;

            case 106:
              _i4 = _iterator4.next();

              if (!_i4.done) {
                _context3.next = 109;
                break;
              }

              return _context3.abrupt('break', 115);

            case 109:
              _ref7 = _i4.value;

            case 110:
              val = _ref7;

              val.uid = this.user.uid;
              this.model('cart').add(val);

            case 113:
              _context3.next = 100;
              break;

            case 115:
              _context3.next = 119;
              break;

            case 117:
              _context3.next = 119;
              return this.session("cart_goods_item", dataarr);

            case 119:
              cartinfo = {
                total: eval(total.join('+')),
                num: eval(num.join('+')),
                data: dataarr
              };
              return _context3.abrupt('return', this.json(cartinfo));

            case 121:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function addcartAction() {
      return _ref4.apply(this, arguments);
    }

    return addcartAction;
  }();

  //获取订单信息


  _class.prototype.getorderinfoAction = function () {
    var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var post, addrid, ids, _iterator5, _isArray5, _i5, _ref9, v, order_amount, payable_amount, real_amount, payable_freight, real_freight, cart_goods, check_goods, _iterator6, _isArray6, _i6, _ref10, _val2, _iterator9, _isArray9, _i9, _ref13, _v, parr, nums, _iterator7, _isArray7, _i7, _ref11, _val3, map, addrlist, _iterator8, _isArray8, _i8, _ref12, val, type, paylist;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.weblogin();

            case 2:
              post = this.param("ids");
              addrid = this.get("addrid");

              if (!think.isEmpty(post)) {
                _context4.next = 7;
                break;
              }

              this.http.error = new Error('木有选项要结算的宝贝');
              return _context4.abrupt('return', think.statusAction(702, this.http));

            case 7:
              if (!think.isEmpty(this.cart.data)) {
                _context4.next = 10;
                break;
              }

              this.http.error = new Error('木有宝贝提交啥订单呢？');
              return _context4.abrupt('return', think.statusAction(702, this.http));

            case 10:

              //手机端接收
              if (!think.isEmpty(addrid) && checkMobile(this.userAgent())) {
                post = JSON.parse(post);
              }
              this.assign("goodsget", post);
              this.assign("goodsget", post);
              //构造购物车要结算的宝贝
              ids = [];

              if (!think.isArray(post)) {
                _context4.next = 32;
                break;
              }

              _iterator5 = post, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

            case 16:
              if (!_isArray5) {
                _context4.next = 22;
                break;
              }

              if (!(_i5 >= _iterator5.length)) {
                _context4.next = 19;
                break;
              }

              return _context4.abrupt('break', 30);

            case 19:
              _ref9 = _iterator5[_i5++];
              _context4.next = 26;
              break;

            case 22:
              _i5 = _iterator5.next();

              if (!_i5.done) {
                _context4.next = 25;
                break;
              }

              return _context4.abrupt('break', 30);

            case 25:
              _ref9 = _i5.value;

            case 26:
              v = _ref9;

              ids.push(v.split("||"));

            case 28:
              _context4.next = 16;
              break;

            case 30:
              _context4.next = 33;
              break;

            case 32:
              ids.push(post.split("||"));

            case 33:
              order_amount = void 0; //订单金额

              payable_amount = void 0; //应付金额，商品的原价

              real_amount = void 0; //商品参与获得的价格

              payable_freight = void 0; //应付运费

              real_freight = void 0; //实际运费

              //TODO购物清单 todo
              //购物车Post过来的商品id;暂时去购物车内所有的商品
              //购物车内的宝贝
              //let cart_goods = await this.model("cart").where({uid:this.user.uid}).select();

              cart_goods = this.cart.data;
              //筛选要结算的商品

              check_goods = [];
              _iterator6 = cart_goods, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

            case 41:
              if (!_isArray6) {
                _context4.next = 47;
                break;
              }

              if (!(_i6 >= _iterator6.length)) {
                _context4.next = 44;
                break;
              }

              return _context4.abrupt('break', 69);

            case 44:
              _ref10 = _iterator6[_i6++];
              _context4.next = 51;
              break;

            case 47:
              _i6 = _iterator6.next();

              if (!_i6.done) {
                _context4.next = 50;
                break;
              }

              return _context4.abrupt('break', 69);

            case 50:
              _ref10 = _i6.value;

            case 51:
              _val2 = _ref10;
              _iterator9 = ids, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);

            case 53:
              if (!_isArray9) {
                _context4.next = 59;
                break;
              }

              if (!(_i9 >= _iterator9.length)) {
                _context4.next = 56;
                break;
              }

              return _context4.abrupt('break', 67);

            case 56:
              _ref13 = _iterator9[_i9++];
              _context4.next = 63;
              break;

            case 59:
              _i9 = _iterator9.next();

              if (!_i9.done) {
                _context4.next = 62;
                break;
              }

              return _context4.abrupt('break', 67);

            case 62:
              _ref13 = _i9.value;

            case 63:
              _v = _ref13;

              if (think.isEmpty(_v[1]) && think.isEmpty(_val2.type)) {
                if (_v[0] == _val2.product_id) {
                  check_goods.push(_val2);
                }
              } else {
                if (_v[0] == _val2.product_id && _v[1] == _val2.type) {
                  check_goods.push(_val2);
                }
              }

            case 65:
              _context4.next = 53;
              break;

            case 67:
              _context4.next = 41;
              break;

            case 69:
              this.assign("check_goods", check_goods);
              //   console.log(cart_goods);
              console.log(check_goods);
              //应付金额
              parr = [];
              nums = [];
              _iterator7 = check_goods, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);

            case 74:
              if (!_isArray7) {
                _context4.next = 80;
                break;
              }

              if (!(_i7 >= _iterator7.length)) {
                _context4.next = 77;
                break;
              }

              return _context4.abrupt('break', 89);

            case 77:
              _ref11 = _iterator7[_i7++];
              _context4.next = 84;
              break;

            case 80:
              _i7 = _iterator7.next();

              if (!_i7.done) {
                _context4.next = 83;
                break;
              }

              return _context4.abrupt('break', 89);

            case 83:
              _ref11 = _i7.value;

            case 84:
              _val3 = _ref11;

              parr.push(_val3.price);
              nums.push(_val3.qty);

            case 87:
              _context4.next = 74;
              break;

            case 89:
              //console.log(parr);
              real_amount = eval(parr.join('+'));
              this.assign("real_amount", real_amount);
              //商品总数量
              this.assign("nums", eval(nums.join('+')));
              //手机端接收
              map = void 0;

              if (checkMobile(this.userAgent())) {
                if (think.isEmpty(addrid)) {
                  map = { user_id: this.user.uid, is_default: 1 };
                } else {
                  map = { user_id: this.user.uid, id: addrid };
                }
              } else {
                map = { user_id: this.user.uid };
              }
              //联系人
              _context4.next = 96;
              return this.model("address").where(map).order("is_default DESC,id DESC").select();

            case 96:
              addrlist = _context4.sent;

              if (think.isEmpty(addrlist)) {
                _context4.next = 124;
                break;
              }

              _iterator8 = addrlist, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);

            case 99:
              if (!_isArray8) {
                _context4.next = 105;
                break;
              }

              if (!(_i8 >= _iterator8.length)) {
                _context4.next = 102;
                break;
              }

              return _context4.abrupt('break', 124);

            case 102:
              _ref12 = _iterator8[_i8++];
              _context4.next = 109;
              break;

            case 105:
              _i8 = _iterator8.next();

              if (!_i8.done) {
                _context4.next = 108;
                break;
              }

              return _context4.abrupt('break', 124);

            case 108:
              _ref12 = _i8.value;

            case 109:
              val = _ref12;

              val.province_num = val.province;
              val.city_num = val.city;
              val.county_num = val.county;
              _context4.next = 115;
              return this.model("area").where({ id: val.province }).getField("name", true);

            case 115:
              val.province = _context4.sent;
              _context4.next = 118;
              return this.model("area").where({ id: val.city }).getField("name", true);

            case 118:
              val.city = _context4.sent;
              _context4.next = 121;
              return this.model("area").where({ id: val.county }).getField("name", true);

            case 121:
              val.county = _context4.sent;

            case 122:
              _context4.next = 99;
              break;

            case 124:
              this.assign("addrlist", addrlist);

              /** 现在用ping++集成直接，但接入暂时屏蔽
               //支付方式
               let paylist = await this.model("payment").where({status:1}).order("sort ASC").select();
               for(let val of paylist){
                     val.logo =  await this.model("pay_plugin").where({id:val.plugin_id}).getField("logo",true);
                  }
               this.assign("paylist",paylist);
               **/
              //ping++ 支付渠道 pc网页
              //根据不同的客户端调用不同的支付方式
              type = void 0;

              if (checkMobile(this.userAgent())) {
                type = 2;
              } else {
                type = 1;
              }
              _context4.next = 129;
              return this.model("pingxx").where({ type: type, status: 1 }).order("sort ASC").select();

            case 129:
              paylist = _context4.sent;

              this.assign("paylist", paylist);

              //运费计算
              //    1、如果店铺只使用统一运费，那么顾客下单计算时按最低运费收取。
              //    2、如果店铺只使用一种运费模板规则，那么顾客下单计算时均按此规则收取运费。
              //    3、如果店铺使用了不同的运费模板规则，那么顾客下单时各运费模板规则先单独计算运费再叠加。
              //    4、如果店铺同时使用统一运费和不同的运费模板规则，那么顾客下单时统一运费单独计算运费，不同的运费模板
              //TODO
              //计算商品的总重量
              _context4.next = 133;
              return this.model("fare").getfare(check_goods, null, this.user.uid);

            case 133:
              real_freight = _context4.sent;

              this.assign("real_freight", real_freight);
              //订单促销优惠信息
              //TODO


              //订单金融 实付金额+邮费-订单优惠金额
              //TODO
              // console.log(real_amount);
              order_amount = Number(real_amount) + Number(real_freight);
              this.assign("order_amount", order_amount);

              //this.end(cart_goods);
              this.meta_title = "确认订单信息"; //标题1
              this.keywords = this.setup.WEB_SITE_KEYWORD ? this.setup.WEB_SITE_KEYWORD : ''; //seo关键词
              this.description = this.setup.WEB_SITE_DESCRIPTION ? this.setup.WEB_SITE_DESCRIPTION : ""; //seo描述

              if (!checkMobile(this.userAgent())) {
                _context4.next = 144;
                break;
              }

              return _context4.abrupt('return', this.display('mobile/' + this.http.controller + '/' + this.http.action));

            case 144:
              return _context4.abrupt('return', this.display());

            case 145:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getorderinfoAction() {
      return _ref8.apply(this, arguments);
    }

    return getorderinfoAction;
  }();

  //计算运费


  _class.prototype.getfareAction = function () {
    var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      var cart_goods, parr, _iterator10, _isArray10, _i10, _ref15, val, real_amount, real_freight, order_amount, res;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (this.is_login) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt('return', this.fail("你木有登录！"));

            case 2:
              cart_goods = this.cart.data;
              //应付金额

              parr = [];
              _iterator10 = cart_goods, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);

            case 5:
              if (!_isArray10) {
                _context5.next = 11;
                break;
              }

              if (!(_i10 >= _iterator10.length)) {
                _context5.next = 8;
                break;
              }

              return _context5.abrupt('break', 19);

            case 8:
              _ref15 = _iterator10[_i10++];
              _context5.next = 15;
              break;

            case 11:
              _i10 = _iterator10.next();

              if (!_i10.done) {
                _context5.next = 14;
                break;
              }

              return _context5.abrupt('break', 19);

            case 14:
              _ref15 = _i10.value;

            case 15:
              val = _ref15;

              parr.push(val.price);

            case 17:
              _context5.next = 5;
              break;

            case 19:
              //console.log(parr);
              real_amount = eval(parr.join('+'));
              _context5.next = 22;
              return this.model("fare").getfare(cart_goods, this.get("id"), this.user.uid);

            case 22:
              real_freight = _context5.sent;
              order_amount = Number(real_amount) + Number(real_freight);
              res = {
                real_freight: real_freight,
                order_amount: order_amount
              };
              return _context5.abrupt('return', this.json(res));

            case 26:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getfareAction() {
      return _ref14.apply(this, arguments);
    }

    return getfareAction;
  }();
  //订单总额


  //创建订单


  _class.prototype.createorderAction = function () {
    var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
      var data, order_amount, payable_amount, real_amount, payable_freight, real_freight, goodsids, goodslist, goodsarr, _iterator11, _isArray11, _i11, _ref17, goods, stock, isgoods, address, parr, _iterator12, _isArray12, _i12, _ref18, val, order_id, ngoods, _iterator13, _isArray13, _i13, _ref19, _goods, newgoods;

      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.weblogin();

            case 2:
              data = this.post();
              // console.log(data);
              // return false;

              order_amount = void 0; //订单金额

              payable_amount = void 0; //应付金额，商品的原价

              real_amount = void 0; //商品参与获得的价格

              payable_freight = void 0; //应付运费

              real_freight = void 0; //实际运费
              //判断购物车内是否有商品如果没有停止执行，如果有则删除

              goodsids = void 0;
              goodslist = JSON.parse(data.goodslist);
              goodsarr = [];
              _iterator11 = goodslist, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : (0, _getIterator3.default)(_iterator11);

            case 12:
              if (!_isArray11) {
                _context6.next = 18;
                break;
              }

              if (!(_i11 >= _iterator11.length)) {
                _context6.next = 15;
                break;
              }

              return _context6.abrupt('break', 31);

            case 15:
              _ref17 = _iterator11[_i11++];
              _context6.next = 22;
              break;

            case 18:
              _i11 = _iterator11.next();

              if (!_i11.done) {
                _context6.next = 21;
                break;
              }

              return _context6.abrupt('break', 31);

            case 21:
              _ref17 = _i11.value;

            case 22:
              goods = _ref17;
              _context6.next = 25;
              return this.model("order").getstock(goods.product_id, goods.type);

            case 25:
              stock = _context6.sent;

              if (!(goods.qty > stock)) {
                _context6.next = 28;
                break;
              }

              return _context6.abrupt('return', this.fail("购物车内有已经售罄的商品，请返回购物车重新编辑！"));

            case 28:
              goodsarr.push(goods.id);

            case 29:
              _context6.next = 12;
              break;

            case 31:
              _context6.next = 33;
              return this.model("cart").where({ id: ['IN', goodsarr] }).select();

            case 33:
              isgoods = _context6.sent;

              delete data.goodslist;
              //isgoods = [];

              if (!think.isEmpty(isgoods)) {
                _context6.next = 39;
                break;
              }

              return _context6.abrupt('return', this.fail('请不要重复创建表单！'));

            case 39:
              _context6.next = 41;
              return this.model("cart").where({ id: ['IN', goodsarr] }).delete();

            case 41:

              //用户
              data.user_id = this.user.uid;
              //生成订单编号//todo
              // let nowtime = new Date().valueOf();
              // let oid =["d",this.user.uid,nowtime]
              // data.order_no = oid.join("");
              _context6.next = 44;
              return this.model("order").orderid();

            case 44:
              data.order_no = _context6.sent;
              _context6.next = 47;
              return this.model("address").fieldReverse("id,user_id,is_default").find(data.address);

            case 47:
              address = _context6.sent;

              console.log(address);
              data = think.extend(data, address);

              //应付金额
              parr = [];
              _iterator12 = isgoods, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : (0, _getIterator3.default)(_iterator12);

            case 52:
              if (!_isArray12) {
                _context6.next = 58;
                break;
              }

              if (!(_i12 >= _iterator12.length)) {
                _context6.next = 55;
                break;
              }

              return _context6.abrupt('break', 66);

            case 55:
              _ref18 = _iterator12[_i12++];
              _context6.next = 62;
              break;

            case 58:
              _i12 = _iterator12.next();

              if (!_i12.done) {
                _context6.next = 61;
                break;
              }

              return _context6.abrupt('break', 66);

            case 61:
              _ref18 = _i12.value;

            case 62:
              val = _ref18;

              parr.push(val.price);

            case 64:
              _context6.next = 52;
              break;

            case 66:
              console.log(parr);
              real_amount = eval(parr.join('+'));
              data.real_amount = real_amount;

              //运费计算
              //    1、如果店铺只使用统一运费，那么顾客下单计算时按最低运费收取。
              //    2、如果店铺只使用一种运费模板规则，那么顾客下单计算时均按此规则收取运费。
              //    3、如果店铺使用了不同的运费模板规则，那么顾客下单时各运费模板规则先单独计算运费再叠加。
              //    4、如果店铺同时使用统一运费和不同的运费模板规则，那么顾客下单时统一运费单独计算运费，不同的运费模板
              //TODO
              //计算商品的总重量

              _context6.next = 71;
              return this.model("fare").getfare(isgoods, data.address, this.user.uid);

            case 71:
              data.real_freight = _context6.sent;
              ;

              //支付状态 pay_stayus 0:未付款 ,1:已付款
              data.pay_status = 0;
              //订单状态 status 2:等待审核，3:已审核
              data.status = 2;
              //发货状态 delivery_status 0:未发货，1:已发货
              data.delivery_status = 0;
              //订单创建时间 create_time
              data.create_time = new Date().valueOf();
              //客户订单备注
              //TODO
              //console.log(real_amount);
              order_amount = Number(data.real_amount) + Number(data.real_freight);
              data.order_amount = order_amount;
              //生成订单
              _context6.next = 81;
              return this.model("order").add(data);

            case 81:
              order_id = _context6.sent;


              //储存宝贝
              //let order_id = 22;
              console.log(isgoods);
              ngoods = [];
              _iterator13 = isgoods, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : (0, _getIterator3.default)(_iterator13);

            case 85:
              if (!_isArray13) {
                _context6.next = 91;
                break;
              }

              if (!(_i13 >= _iterator13.length)) {
                _context6.next = 88;
                break;
              }

              return _context6.abrupt('break', 106);

            case 88:
              _ref19 = _iterator13[_i13++];
              _context6.next = 95;
              break;

            case 91:
              _i13 = _iterator13.next();

              if (!_i13.done) {
                _context6.next = 94;
                break;
              }

              return _context6.abrupt('break', 106);

            case 94:
              _ref19 = _i13.value;

            case 95:
              _goods = _ref19;
              newgoods = {};

              newgoods.order_id = order_id;
              newgoods.goods_id = _goods.product_id;
              newgoods.goods_price = _goods.unit_price;
              newgoods.goods_real_price = _goods.unit_price;
              newgoods.goods_nums = _goods.qty;
              newgoods.prom_goods = (0, _stringify2.default)(_goods);
              ngoods.push(newgoods);

            case 104:
              _context6.next = 85;
              break;

            case 106:
              console.log(ngoods);
              _context6.next = 109;
              return this.model("order_goods").addMany(ngoods);

            case 109:
              console.log(data);
              //减少订单中商品的库存
              _context6.next = 112;
              return this.model("order").stock(order_id, true);

            case 112:
              return _context6.abrupt('return', this.success({ name: '订单创建成功，正在跳转支付页面！', url: '/uc/pay/pay?order=' + order_id + '&setp=3' }));

            case 113:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function createorderAction() {
      return _ref16.apply(this, arguments);
    }

    return createorderAction;
  }();
  //实时查询商品库存


  _class.prototype.getstockAction = function () {
    var _ref20 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
      var data, stock;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              data = this.get();
              _context7.next = 3;
              return this.model("order").getstock(data.id, data.type);

            case 3:
              stock = _context7.sent;
              return _context7.abrupt('return', this.json(stock));

            case 5:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function getstockAction() {
      return _ref20.apply(this, arguments);
    }

    return getstockAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=cart.js.map