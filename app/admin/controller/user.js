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

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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
    _class.prototype.init = function init(http) {
        _Base.prototype.init.call(this, http);
        this.db = this.model("member");
        this.tactive = "user";
    };
    /**
     * 用户首页
     * @returns {*}
     */

    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var map, user, groups, grs, _iterator, _isArray, _i, _ref2, val, data, Pages, pages, page, role;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            map = { 'status': ['>', -1] };

                            if (!think.isEmpty(this.get("username"))) {
                                map.username = ["like", "%" + this.get("username") + "%"];
                            }
                            _context.next = 4;
                            return this.session('userInfo');

                        case 4:
                            user = _context.sent;
                            _context.next = 7;
                            return this.model("member_group").where({ pid: user.groupid }).select();

                        case 7:
                            groups = _context.sent;

                            // console.log("groups---------"+JSON.stringify(groups));
                            grs = [user.groupid];
                            _iterator = groups, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 10:
                            if (!_isArray) {
                                _context.next = 16;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context.next = 13;
                                break;
                            }

                            return _context.abrupt('break', 24);

                        case 13:
                            _ref2 = _iterator[_i++];
                            _context.next = 20;
                            break;

                        case 16:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context.next = 19;
                                break;
                            }

                            return _context.abrupt('break', 24);

                        case 19:
                            _ref2 = _i.value;

                        case 20:
                            val = _ref2;

                            grs.push(val.groupid);

                        case 22:
                            _context.next = 10;
                            break;

                        case 24:
                            console.log("groups---------" + (0, _stringify2.default)(grs));
                            map.groupid = ["IN", grs];
                            // if(user.uid!=1){
                            //     map.groupid=user.groupid;
                            // }
                            console.log("user---------" + (0, _stringify2.default)(user));
                            console.log("map---------" + (0, _stringify2.default)(map));
                            _context.next = 30;
                            return this.db.where(map).page(this.get('page'), 20).order('groupid DESC').countSelect();

                        case 30:
                            data = _context.sent;
                            Pages = think.adapter("pages", "page"); //加载名为 dot 的 Template Adapter

                            pages = new Pages(this.http); //实例化 Adapter

                            page = pages.pages(data);
                            // for(let v of data.data){
                            //     console.log(await this.model("member_group").getgroup({groupid:v.groupid}));
                            // }

                            this.assign('pagerData', page); //分页展示使用
                            this.assign('list', data.data);
                            this.meta_title = "用户列表";
                            //获取管理组
                            _context.next = 39;
                            return this.model("auth_role").where({ status: 1 }).select();

                        case 39:
                            role = _context.sent;

                            this.assign("role", role);
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

    _class.prototype.userlistAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var gets, start, length, draw, key, userList, data;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            //用户列表
                            gets = this.get();
                            start = parseInt(gets.start);
                            length = parseInt(gets.length);
                            draw = gets.draw;
                            key = gets['search[value]'];
                            _context2.next = 7;
                            return this.db.join({
                                table: "customer",
                                join: "left",
                                as: "u",
                                on: ['id', 'user_id']
                            }).field("id,username,score,login,last_login_ip,last_login_time,status,u.real_name,u.group_id,u.balance").limit(start, length).where({ username: ["like", "%" + key + "%"], status: [">", -1] }).order("id DESC").countSelect();

                        case 7:
                            userList = _context2.sent;

                            userList.data.forEach(function (v) {
                                v.last_login_time = times(v.last_login_time);
                                v.last_login_ip = _int2iP(v.last_login_ip);
                            });
                            //console.log(userList)
                            data = {
                                "draw": draw,
                                "recordsTotal": userList.count,
                                "recordsFiltered": userList.count,
                                "data": userList.data
                            };
                            return _context2.abrupt('return', this.json(data));

                        case 11:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function userlistAction() {
            return _ref3.apply(this, arguments);
        }

        return userlistAction;
    }();

    /**
     * 会员充值
     */


    _class.prototype.rechargeAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var data, res, amount_log, log, id, name;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!this.isAjax("POST")) {
                                _context3.next = 33;
                                break;
                            }

                            data = this.post();
                            _context3.next = 4;
                            return this.model("member").where({ id: data.id }).increment("amount", data.balance);

                        case 4:
                            res = _context3.sent;

                            console.log(res);

                            if (!res) {
                                _context3.next = 30;
                                break;
                            }

                            _context3.next = 9;
                            return this.model("member").where({ id: data.id }).getField("amount", true);

                        case 9:
                            amount_log = _context3.sent;

                            console.log(amount_log);
                            //充值成功后插入日志
                            _context3.t0 = this.user.uid;
                            _context3.t1 = data.id;
                            _context3.t2 = new Date().valueOf();
                            _context3.t3 = data.balance;
                            _context3.t4 = amount_log;
                            _context3.next = 18;
                            return get_nickname(this.user.uid);

                        case 18:
                            _context3.t5 = _context3.sent;
                            _context3.t6 = '\u7BA1\u7406\u5458\uFF08' + _context3.t5;
                            _context3.t7 = _context3.t6 + '\uFF09\u4E3A\u60A8\u5145\u503C\uFF0C\u5145\u503C\u7684\u91D1\u989D\u4E3A\uFF1A';
                            _context3.t8 = data.balance;
                            _context3.t9 = _context3.t7 + _context3.t8;
                            _context3.t10 = _context3.t9 + ' \u5143';
                            log = {
                                admin_id: _context3.t0,
                                user_id: _context3.t1,
                                type: 2,
                                time: _context3.t2,
                                amount: _context3.t3,
                                amount_log: _context3.t4,
                                note: _context3.t10
                            };
                            _context3.next = 27;
                            return this.model('balance_log').add(log);

                        case 27:
                            return _context3.abrupt('return', this.success({ name: "充值成功！" }));

                        case 30:
                            return _context3.abrupt('return', this.fail("充值失败！"));

                        case 31:
                            _context3.next = 39;
                            break;

                        case 33:
                            id = this.get("ids");
                            name = get_nickname(id);

                            this.assign("name", name);
                            this.assign("id", id);
                            this.meta_title = "会员充值";
                            return _context3.abrupt('return', this.display());

                        case 39:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function rechargeAction() {
            return _ref4.apply(this, arguments);
        }

        return rechargeAction;
    }();
    /**
     * adduser
     * 添加用户
     * @returns {Promise|*}
     */


    _class.prototype.adduserAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var data, res, usergroup, role;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context4.next = 21;
                                break;
                            }

                            data = this.post();

                            if (!(data.password != data.repassword)) {
                                _context4.next = 4;
                                break;
                            }

                            return _context4.abrupt('return', this.fail("两次填入的密码不一致"));

                        case 4:
                            data.password = encryptPassword(data.password);
                            data.reg_time = new Date().getTime();
                            if (data.vip == 1) {
                                data.overduedate = new Date(data.overduedate).getTime();
                            } else {
                                data.overduedate = think.isEmpty(data.overduedate) ? 0 : data.overduedate;
                            }
                            //  console.log(data);
                            // return this.fail("ddd")
                            data.status = 1;
                            _context4.next = 10;
                            return this.db.add(data);

                        case 10:
                            res = _context4.sent;

                            if (!res) {
                                _context4.next = 18;
                                break;
                            }

                            if (!(data.is_admin == 1)) {
                                _context4.next = 15;
                                break;
                            }

                            _context4.next = 15;
                            return this.model("auth_user_role").add({ user_id: res, role_id: data.role_id });

                        case 15:
                            return _context4.abrupt('return', this.success({ name: "添加成功！" }));

                        case 18:
                            return _context4.abrupt('return', this.fail("添加失败!"));

                        case 19:
                            _context4.next = 29;
                            break;

                        case 21:
                            _context4.next = 23;
                            return this.model("member_group").select();

                        case 23:
                            usergroup = _context4.sent;

                            this.assign("usergroup", usergroup);
                            //获取管理组
                            role = this.model("auth_role").where({ status: 1 }).select();

                            this.assign("role", role);
                            this.meta_title = "添加用户";
                            return _context4.abrupt('return', this.display());

                        case 29:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function adduserAction() {
            return _ref5.apply(this, arguments);
        }

        return adduserAction;
    }();

    _class.prototype.sendmessageAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var data, message, res, openid, result, id, user, roleid, usergroup, role;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context5.next = 19;
                                break;
                            }

                            data = this.post();
                            message = data.message;
                            _context5.next = 5;
                            return this.model("wx_user").where({ uid: data.id }).find();

                        case 5:
                            res = _context5.sent;

                            console.log("res----------" + (0, _stringify2.default)(res));
                            openid = res.openid;

                            if (!think.isEmpty(openid)) {
                                _context5.next = 10;
                                break;
                            }

                            return _context5.abrupt('return', this.fail("用户信息不全！"));

                        case 10:
                            _context5.next = 12;
                            return this.cache('getuserinfo', openid);

                        case 12:
                            _context5.next = 14;
                            return this.action("uc/wechat", "masssendtext");

                        case 14:
                            result = _context5.sent;

                            // let result=await this.action("uc/wechat", "getuserinfo");
                            // let controllerInstance = this.controller("uc/wechat");
                            // let result=await controllerInstance.getuserinfoAction(openid);
                            console.log("result----------" + (0, _stringify2.default)(result));
                            return _context5.abrupt('return', this.success({ name: "消息发送成功！" + openid }));

                        case 19:
                            id = this.get("id");
                            _context5.next = 22;
                            return this.model("member").find(id);

                        case 22:
                            user = _context5.sent;

                            if (this.is_admin) {
                                _context5.next = 27;
                                break;
                            }

                            if (!in_array(id, this.config("user_administrator"))) {
                                _context5.next = 27;
                                break;
                            }

                            this.http.error = new Error('您无权操作！');
                            return _context5.abrupt('return', think.statusAction(702, this.http));

                        case 27:
                            this.assign("user", user);
                            console.log(user);
                            //所属管理组

                            if (!(user.is_admin == 1)) {
                                _context5.next = 34;
                                break;
                            }

                            _context5.next = 32;
                            return this.model("auth_user_role").where({ user_id: user.id }).getField("role_id", true);

                        case 32:
                            roleid = _context5.sent;

                            this.assign("roleid", roleid);

                        case 34:
                            _context5.next = 36;
                            return this.model("member_group").select();

                        case 36:
                            usergroup = _context5.sent;

                            this.assign("usergroup", usergroup);
                            //获取管理组
                            role = this.model("auth_role").where({ status: 1 }).select();

                            this.assign("role", role);
                            this.meta_title = "发送消息";
                            return _context5.abrupt('return', this.display());

                        case 42:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function sendmessageAction() {
            return _ref6.apply(this, arguments);
        }

        return sendmessageAction;
    }();
    /**
     * 编辑头像
     * @returns {PreventPromise}
     */


    _class.prototype.edituserAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var data, uploadPath, path, addrole, res, id, user, roleid, usergroup, role;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context6.next = 31;
                                break;
                            }

                            data = this.post();
                            //删除头像

                            if (data.delavatar == 1) {
                                uploadPath = think.RESOURCE_PATH + '/upload/avatar/' + data.id;
                                path = think.isFile(uploadPath + "/avatar.png");

                                if (path) {
                                    think.rmdir(uploadPath, false);
                                }
                            }

                            if (!(think.isEmpty(data.password) && think.isEmpty(data.repassword))) {
                                _context6.next = 7;
                                break;
                            }

                            delete data.password;
                            _context6.next = 10;
                            break;

                        case 7:
                            if (!(data.password != data.repassword)) {
                                _context6.next = 9;
                                break;
                            }

                            return _context6.abrupt('return', this.fail("两次填入的密码不一致"));

                        case 9:
                            data.password = encryptPassword(data.password);

                        case 10:
                            if (data.vip == 1) {
                                data.overduedate = new Date(data.overduedate).getTime();
                            } else {
                                data.overduedate = 0;
                            }
                            //添加角色
                            console.log("data-------" + (0, _stringify2.default)(data));

                            if (!(data.is_admin == 1)) {
                                _context6.next = 21;
                                break;
                            }

                            _context6.next = 15;
                            return this.model("auth_user_role").where({ user_id: data.id }).thenAdd({ user_id: data.id, role_id: data.role_id });

                        case 15:
                            addrole = _context6.sent;

                            console.log("addrole-------" + (0, _stringify2.default)(addrole));

                            if (!(addrole.type == "exist")) {
                                _context6.next = 21;
                                break;
                            }

                            console.log("auth_user_role update-------");
                            _context6.next = 21;
                            return this.model("auth_user_role").update({ id: addrole.id, role_id: data.role_id });

                        case 21:
                            _context6.next = 23;
                            return this.db.update(data);

                        case 23:
                            res = _context6.sent;

                            if (!res) {
                                _context6.next = 28;
                                break;
                            }

                            return _context6.abrupt('return', this.success({ name: "编辑成功！" }));

                        case 28:
                            return _context6.abrupt('return', this.fail("编辑失败!"));

                        case 29:
                            _context6.next = 54;
                            break;

                        case 31:
                            id = this.get("id");
                            _context6.next = 34;
                            return this.model("member").find(id);

                        case 34:
                            user = _context6.sent;

                            if (this.is_admin) {
                                _context6.next = 39;
                                break;
                            }

                            if (!in_array(id, this.config("user_administrator"))) {
                                _context6.next = 39;
                                break;
                            }

                            this.http.error = new Error('您无权操作！');
                            return _context6.abrupt('return', think.statusAction(702, this.http));

                        case 39:
                            this.assign("user", user);
                            console.log("user------------" + (0, _stringify2.default)(user));
                            //所属管理组

                            if (!(user.is_admin == 1)) {
                                _context6.next = 46;
                                break;
                            }

                            _context6.next = 44;
                            return this.model("auth_user_role").where({ user_id: user.id }).getField("role_id", true);

                        case 44:
                            roleid = _context6.sent;

                            this.assign("roleid", roleid);

                        case 46:
                            _context6.next = 48;
                            return this.model("member_group").select();

                        case 48:
                            usergroup = _context6.sent;

                            this.assign("usergroup", usergroup);
                            //获取管理组
                            role = this.model("auth_role").where({ status: 1 }).select();

                            this.assign("role", role);
                            this.meta_title = "编辑用户";
                            return _context6.abrupt('return', this.display());

                        case 54:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function edituserAction() {
            return _ref7.apply(this, arguments);
        }

        return edituserAction;
    }();

    /**
     * 显示用户信息
     * @returns {PreventPromise}
     */


    _class.prototype.showuserAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var id, user, roleid, usergroup, role;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            id = this.get("id");
                            _context7.next = 3;
                            return this.model("member").find(id);

                        case 3:
                            user = _context7.sent;

                            //非超级管理员只能修改自己的用户信息
                            // if(!this.is_admin){
                            //     if(this.user.uid!=id){
                            //         this.http.error = new Error('您无权操作！');
                            //         return think.statusAction(702, this.http);
                            //     }
                            //
                            // }
                            this.assign("user", user);
                            console.log(user);
                            //所属管理组

                            if (!(user.is_admin == 1)) {
                                _context7.next = 11;
                                break;
                            }

                            _context7.next = 9;
                            return this.model("auth_user_role").where({ user_id: user.id }).getField("role_id", true);

                        case 9:
                            roleid = _context7.sent;

                            this.assign("roleid", roleid);

                        case 11:
                            _context7.next = 13;
                            return this.model("member_group").select();

                        case 13:
                            usergroup = _context7.sent;

                            this.assign("usergroup", usergroup);
                            //获取管理组
                            role = this.model("auth_role").where({ status: 1 }).select();

                            this.assign("role", role);
                            this.meta_title = "个人信息";
                            return _context7.abrupt('return', this.display());

                        case 19:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function showuserAction() {
            return _ref8.apply(this, arguments);
        }

        return showuserAction;
    }();
    /**
     * userdel
     * 用户删除
     * @returns {Promise|*}
     */


    _class.prototype.userdelAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var id, res;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            id = this.param("ids");
                            //console.log(id);

                            res = void 0;
                            // 判断是否是管理员，如果是不能删除;

                            _context8.next = 4;
                            return this.isadmin(id);

                        case 4:
                            if (!_context8.sent) {
                                _context8.next = 8;
                                break;
                            }

                            return _context8.abrupt('return', this.fail("不能删除管理员!"));

                        case 8:
                            _context8.next = 10;
                            return this.db.where({ id: ["IN", id] }).update({ status: -1 });

                        case 10:
                            res = _context8.sent;

                            if (!res) {
                                _context8.next = 15;
                                break;
                            }

                            return _context8.abrupt('return', this.success({ name: "删除成功！" }));

                        case 15:
                            return _context8.abrupt('return', this.fail("删除失败！"));

                        case 16:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function userdelAction() {
            return _ref9.apply(this, arguments);
        }

        return userdelAction;
    }();
    /**
     * 改变角色状态
     * @returns {Promise|*}
     */


    _class.prototype.chstaAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var res;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            _context9.next = 2;
                            return this.db.update(this.get());

                        case 2:
                            res = _context9.sent;

                            if (!res) {
                                _context9.next = 5;
                                break;
                            }

                            return _context9.abrupt('return', this.json(res));

                        case 5:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function chstaAction() {
            return _ref10.apply(this, arguments);
        }

        return chstaAction;
    }();

    /**
     * 注册异步验证用户数据
     * @returns {Promise|*}
     */


    _class.prototype.parsleyAction = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var data, res;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            //验证
                            data = this.get();
                            // console.log(data);

                            _context10.next = 3;
                            return this.db.where(data).find();

                        case 3:
                            res = _context10.sent;

                            if (!think.isEmpty(res)) {
                                _context10.next = 8;
                                break;
                            }

                            return _context10.abrupt('return', this.json(1));

                        case 8:
                            return _context10.abrupt('return', this.json(0));

                        case 9:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function parsleyAction() {
            return _ref11.apply(this, arguments);
        }

        return parsleyAction;
    }();

    /**
     * 获取用户头像
     */


    _class.prototype.avatarAction = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
            var uploadPath, path, pic;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            uploadPath = think.RESOURCE_PATH + '/upload/avatar/' + this.user.uid;
                            path = think.isFile(uploadPath + "/" + "/avatar.png");

                            this.type("image/png");
                            pic = void 0;

                            if (path) {
                                // this.download(uploadPath + "/" + "/avatar.png");
                                pic = _fs2.default.readFileSync(uploadPath + "/" + "/avatar.png");
                            } else {
                                //this.download(think.RESOURCE_PATH + '/upload/avatar/avatar.jpg')
                                pic = _fs2.default.readFileSync(think.RESOURCE_PATH + '/upload/avatar/avatar.jpg');
                            }
                            this.end(pic);

                        case 6:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function avatarAction() {
            return _ref12.apply(this, arguments);
        }

        return avatarAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=user.js.map