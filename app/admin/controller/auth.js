// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

exports.__esModule = true;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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
        this.tactive = "user";
    };
    /**
     * 后台节点配置的url作为规则存入auth_rule
     * 执行新节点的插入,已有节点的更新,无效规则的删除三项任务
     * @author
     */


    _class.prototype.updaterules = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var nodes, AuthRule, map, rules, data, update, ids, diff;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.returnnodes(false);

                        case 2:
                            nodes = _context.sent;

                            //think.log(nodes);
                            AuthRule = this.model('auth_rule');
                            map = { 'module': 'admin', 'type': ['in', [1, 2]] }; //status全部取出,以进行更新
                            //需要更新和删除的节点必然位于$rules

                            _context.next = 7;
                            return AuthRule.where(map).order('name').select();

                        case 7:
                            rules = _context.sent;

                            //构建insert数据
                            data = {}; //保存需要插入和更新的新节点

                            nodes.forEach(function (value) {
                                var temp = {};
                                temp.name = value.url;
                                temp.desc = value.title;
                                temp.module = 'admin';
                                if (value.pid > 0) {
                                    temp.type = 1;
                                } else {
                                    temp.type = 2;
                                }
                                temp.status = 1;
                                //$data[strtolower($temp['name'].$temp['module'].$temp['type'])] = $temp;//去除重复项
                                var url = temp.name + temp.module + temp.type;
                                url = url.toLocaleLowerCase();
                                data[url] = temp;
                            });
                            //console.log(rules);
                            update = []; //保存需要更新的节点

                            ids = []; //保存需要删除的节点的id

                            diff = {};

                            rules.forEach(function (rule, i) {
                                var key = rule.name + rule.module + rule.type;
                                key = key.toLocaleLowerCase();
                                if (!think.isEmpty(data[key])) {
                                    //如果数据库中的规则与配置的节点匹配,说明是需要更新的节点
                                    data[key].id = rule.id; //为需要更新的节点补充id值
                                    update.push(data[key]);
                                    delete data[key];
                                    // console.log(i);
                                    // rules.splice(i,1);
                                    delete rule.condition;
                                    delete rule.pid;
                                    //console.log(rule);
                                    diff[rule.id] = rule;
                                } else {
                                    if (rule.status == 1) {
                                        ids.push(rule.id);
                                    }
                                }
                            });

                            // console.log(update);
                            //console.log(rules);
                            // console.log(diff);
                            //console.log(data);
                            if (!think.isEmpty(update)) {
                                update.forEach(function (row) {
                                    //console.log(isObjectValueEqual(row, diff[row.id]))
                                    // console.log(row)
                                    //console.log(diff[row.id])
                                    if (!isObjectValueEqual(row, diff[row.id])) {

                                        AuthRule.where({ id: row.id }).update(row);
                                        //console.log(row);
                                    }
                                });
                            }
                            //console.log(ids);
                            if (!think.isEmpty(ids)) {
                                AuthRule.where({ id: ['IN', ids] }).update({ 'status': -1 });
                                //删除规则是否需要从每个用户组的访问授权表中移除该规则?
                            }
                            // console.log(data);
                            if (!think.isEmpty(data)) {
                                AuthRule.addMany(obj_values(data));
                            }
                            //if ( $AuthRule->getDbError() ) {
                            //    trace('['.__METHOD__.']:'.$AuthRule->getDbError());
                            //    return false;
                            //}else{
                            //    return true;
                            //}
                            return _context.abrupt('return', true);

                        case 18:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function updaterules() {
            return _ref.apply(this, arguments);
        }

        return updaterules;
    }();

    /**
     * 用户分组管理首页
     * @returns {*}
     */


    _class.prototype.indexAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var list, _iterator, _isArray, _i, _ref3, v;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.model("member_group").order("sort ASC").select();

                        case 2:
                            list = _context2.sent;
                            _iterator = list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 4:
                            if (!_isArray) {
                                _context2.next = 10;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context2.next = 7;
                                break;
                            }

                            return _context2.abrupt('break', 20);

                        case 7:
                            _ref3 = _iterator[_i++];
                            _context2.next = 14;
                            break;

                        case 10:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context2.next = 13;
                                break;
                            }

                            return _context2.abrupt('break', 20);

                        case 13:
                            _ref3 = _i.value;

                        case 14:
                            v = _ref3;
                            _context2.next = 17;
                            return this.model('member').where({ groupid: v.groupid, status: 1 }).count('id');

                        case 17:
                            v.count = _context2.sent;

                        case 18:
                            _context2.next = 4;
                            break;

                        case 20:
                            this.assign("list", list);
                            this.meta_title = "会员组管理";
                            return _context2.abrupt('return', this.display());

                        case 23:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function indexAction() {
            return _ref2.apply(this, arguments);
        }

        return indexAction;
    }();

    /**
     * 添加会员组
     */


    _class.prototype.adduserAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var data, add;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context3.next = 14;
                                break;
                            }

                            data = this.post();
                            _context3.next = 4;
                            return this.model("member_group").add(data);

                        case 4:
                            add = _context3.sent;

                            if (!add) {
                                _context3.next = 11;
                                break;
                            }

                            _context3.next = 8;
                            return think.cache("all_member_group", null);

                        case 8:
                            return _context3.abrupt('return', this.success({ name: "添加成功！", url: "/admin/auth/index" }));

                        case 11:
                            return _context3.abrupt('return', this.fail("添加失败！"));

                        case 12:
                            _context3.next = 17;
                            break;

                        case 14:
                            this.meta_title = "添加会员组";
                            this.active = "admin/auth/index";
                            return _context3.abrupt('return', this.display());

                        case 17:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function adduserAction() {
            return _ref4.apply(this, arguments);
        }

        return adduserAction;
    }();
    /**
     * 编辑会员组
     */


    _class.prototype.edituserAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var data, update, info;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context4.next = 21;
                                break;
                            }

                            data = this.post();

                            data.allowpost = data.allowpost || 0;
                            data.allowpostverify = data.allowpostverify || 0;
                            data.allowupgrade = data.allowupgrade || 0;
                            data.allowsendmessage = data.allowsendmessage || 0;
                            data.allowattachment = data.allowattachment || 0;
                            data.allowsearch = data.allowsearch || 0;
                            console.log(data);
                            _context4.next = 11;
                            return this.model("member_group").where({ groupid: data.groupid }).update(data);

                        case 11:
                            update = _context4.sent;

                            if (!update) {
                                _context4.next = 18;
                                break;
                            }

                            _context4.next = 15;
                            return think.cache("all_member_group", null);

                        case 15:
                            return _context4.abrupt('return', this.success({ name: "编辑成功！", url: "/admin/auth/index" }));

                        case 18:
                            return _context4.abrupt('return', this.fail("编辑失败！"));

                        case 19:
                            _context4.next = 28;
                            break;

                        case 21:
                            _context4.next = 23;
                            return this.model("member_group").where({ groupid: this.get("id") }).find();

                        case 23:
                            info = _context4.sent;

                            this.assign("info", info);
                            this.meta_title = "编辑会员组";
                            this.active = "admin/auth/index";
                            return _context4.abrupt('return', this.display());

                        case 28:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function edituserAction() {
            return _ref5.apply(this, arguments);
        }

        return edituserAction;
    }();
    /**
     * 删除会员组
     */


    _class.prototype.deluserAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var ids, dels, id, issystem, del;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context5.next = 14;
                                break;
                            }

                            ids = this.post("ids");
                            _context5.next = 4;
                            return this.model('member_group').where({ groupid: ['IN', ids] }).delete();

                        case 4:
                            dels = _context5.sent;

                            if (!dels) {
                                _context5.next = 11;
                                break;
                            }

                            _context5.next = 8;
                            return think.cache("all_member_group", null);

                        case 8:
                            return _context5.abrupt('return', this.success({ name: "删除成功！" }));

                        case 11:
                            return _context5.abrupt('return', this.fail("删除失败！"));

                        case 12:
                            _context5.next = 30;
                            break;

                        case 14:
                            id = this.get("id");
                            _context5.next = 17;
                            return this.model('member_group').where({ groupid: id }).getField("issystem", true);

                        case 17:
                            issystem = _context5.sent;

                            if (!(issystem > 0)) {
                                _context5.next = 20;
                                break;
                            }

                            return _context5.abrupt('return', this.fail("系统组，不能删除！"));

                        case 20:
                            _context5.next = 22;
                            return this.model('member_group').where({ groupid: id }).delete();

                        case 22:
                            del = _context5.sent;

                            if (!del) {
                                _context5.next = 29;
                                break;
                            }

                            _context5.next = 26;
                            return think.cache("all_member_group", null);

                        case 26:
                            return _context5.abrupt('return', this.success({ name: "删除成功！" }));

                        case 29:
                            return _context5.abrupt('return', this.fail("删除失败！"));

                        case 30:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function deluserAction() {
            return _ref6.apply(this, arguments);
        }

        return deluserAction;
    }();
    /**
     * 排序
     */


    _class.prototype.sortAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            if (!(this.param('type') == 1)) {
                                _context6.next = 5;
                                break;
                            }

                            _context6.next = 3;
                            return _Base.prototype.sortAction.call(this, this, 'member_group', 'groupid');

                        case 3:
                            _context6.next = 7;
                            break;

                        case 5:
                            _context6.next = 7;
                            return _Base.prototype.sortAction.call(this, this, 'auth_role', 'id');

                        case 7:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function sortAction() {
            return _ref7.apply(this, arguments);
        }

        return sortAction;
    }();
    /**
     * 管理角色管理首页
     * @returns {*}
     */


    _class.prototype.adminAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var list;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return this.model('auth_role').order("id ASC").select();

                        case 2:
                            list = _context7.sent;

                            this.assign({
                                "datatables": true,
                                "tactive": "/admin/user",
                                "selfjs": "auth",
                                "list": list
                            });
                            this.active = "admin/auth/index";
                            this.meta_title = "权限管理";
                            return _context7.abrupt('return', this.display());

                        case 7:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function adminAction() {
            return _ref8.apply(this, arguments);
        }

        return adminAction;
    }();
    /**
     * role
     * 权限管理首页ajax角色列表
     * @returns {Promise|*}
     */


    _class.prototype.roleAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var gets, draw, res, data;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            gets = this.get();
                            draw = gets.draw;
                            _context8.next = 4;
                            return this.model('auth_role').field("id,desc,status,description").order("id ASC").select();

                        case 4:
                            res = _context8.sent;
                            data = {
                                "draw": draw,
                                "data": res
                                //console.log(data);
                            };
                            return _context8.abrupt('return', this.json(data));

                        case 7:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function roleAction() {
            return _ref9.apply(this, arguments);
        }

        return roleAction;
    }();

    _class.prototype.roleeditAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var id, desc, description, data, _id, res;

            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            if (!this.isAjax("post")) {
                                _context9.next = 14;
                                break;
                            }

                            id = this.post("id");
                            desc = this.post("desc");
                            description = this.post("description");
                            _context9.next = 6;
                            return this.model('auth_role').where({ id: id }).update({ desc: desc, description: description });

                        case 6:
                            data = _context9.sent;

                            if (!data) {
                                _context9.next = 11;
                                break;
                            }

                            return _context9.abrupt('return', this.success({ name: "修改成功！" }));

                        case 11:
                            return _context9.abrupt('return', this.fail("修改失败！"));

                        case 12:
                            _context9.next = 20;
                            break;

                        case 14:
                            _id = this.get("id");
                            _context9.next = 17;
                            return this.model('auth_role').where({ id: _id }).find();

                        case 17:
                            res = _context9.sent;

                            this.assign({
                                data: res
                            });
                            return _context9.abrupt('return', this.display());

                        case 20:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function roleeditAction() {
            return _ref10.apply(this, arguments);
        }

        return roleeditAction;
    }();

    _class.prototype.roleaddAction = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var data, res;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context10.next = 12;
                                break;
                            }

                            data = this.post();
                            //console.log(1111111111111111)

                            _context10.next = 4;
                            return this.model('auth_role').add(data);

                        case 4:
                            res = _context10.sent;

                            if (!res) {
                                _context10.next = 9;
                                break;
                            }

                            return _context10.abrupt('return', this.success({ name: "添加成功！" }));

                        case 9:
                            return _context10.abrupt('return', this.fail("添加失败！"));

                        case 10:
                            _context10.next = 13;
                            break;

                        case 12:
                            return _context10.abrupt('return', this.display());

                        case 13:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function roleaddAction() {
            return _ref11.apply(this, arguments);
        }

        return roleaddAction;
    }();

    /**
     * roldel
     * 角色删除
     * @returns {Promise|*}
     */


    _class.prototype.roledelAction = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
            var id, res;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            id = this.param("ids");
                            //console.log(id);

                            if (!think.isEmpty(id)) {
                                _context11.next = 3;
                                break;
                            }

                            return _context11.abrupt('return', this.fail("参数不能为空！"));

                        case 3:
                            _context11.next = 5;
                            return this.model('auth_role').where({ id: ['IN', id] }).delete();

                        case 5:
                            res = _context11.sent;

                            if (!res) {
                                _context11.next = 10;
                                break;
                            }

                            return _context11.abrupt('return', this.success({ name: "删除成功！" }));

                        case 10:
                            return _context11.abrupt('return', this.fail("删除失败！"));

                        case 11:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function roledelAction() {
            return _ref12.apply(this, arguments);
        }

        return roledelAction;
    }();

    /**
     * 权限列表
     * @returns {*}
     */


    _class.prototype.accessAction = function () {
        var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
            var _this2 = this;

            var auth_role, this_role;
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            _context12.next = 2;
                            return this.updaterules();

                        case 2:
                            _context12.next = 4;
                            return this.model('auth_role').where({ status: ["!=", 0], module: "admin", 'type': 1 }).field('id,desc,rule_ids').select();

                        case 4:
                            auth_role = _context12.sent;

                            //let node_list = await this.returnnodes();
                            //let map       = {module:"admin",type:2,status:1};
                            //let main_rules= await this.model('auth_rule').where(map).field("name,id").select();
                            //let nap       = {module:"admin",type:1,status:1};
                            //let child_rules = await this.model('auth_rule').where(nap).field('name,id').select();
                            this_role = {};

                            auth_role.forEach(function (role) {
                                if (role.id == _this2.get("id")) {
                                    this_role = role;
                                }
                            });
                            //console.log(node_list);
                            this.active = "admin/auth/index";
                            this.meta_title = "权限管理";
                            this.assign({
                                "tactive": "/admin/user",
                                "selfjs": "auth",
                                "thisid": this.get("id"),
                                "auth_role": auth_role,
                                "this_role": this_role
                            });
                            return _context12.abrupt('return', this.display());

                        case 11:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        function accessAction() {
            return _ref13.apply(this, arguments);
        }

        return accessAction;
    }();

    _class.prototype.accessdataAction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13() {
            var _this3 = this;

            var auth_role, node_list, map, main_rules, this_role, m_rules, data;
            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            _context13.next = 2;
                            return this.updaterules();

                        case 2:
                            _context13.next = 4;
                            return this.model('auth_role').where({ status: ["!=", 0], module: "admin", 'type': 1 }).field('id,desc,rule_ids').select();

                        case 4:
                            auth_role = _context13.sent;
                            _context13.next = 7;
                            return this.returnnodes();

                        case 7:
                            node_list = _context13.sent;
                            map = { module: "admin", type: ['IN', [1, 2]], status: 1 };
                            _context13.next = 11;
                            return this.model('auth_rule').where(map).field("name,id").select();

                        case 11:
                            main_rules = _context13.sent;

                            //let nap       = {module:"admin",type:1,status:1};
                            //let child_rules =await this.model('auth_rule').where(nap).field('name,id').select();
                            this_role = {};

                            auth_role.forEach(function (role) {
                                if (role.id == _this3.post("id")) {
                                    this_role = role;
                                }
                            });
                            m_rules = {};

                            main_rules.forEach(function (v) {
                                var obj = {};
                                obj[v.name] = v.id;
                                (0, _assign2.default)(m_rules, obj);
                            });
                            data = {
                                "main_rules": m_rules,
                                "node_list": node_list,
                                "this_role": this_role
                            };
                            return _context13.abrupt('return', this.json(data));

                        case 18:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        function accessdataAction() {
            return _ref14.apply(this, arguments);
        }

        return accessdataAction;
    }();

    /**
     * 栏目权限
     */


    _class.prototype.cateprivAction = function () {
        var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14() {
            var data, priv, _iterator2, _isArray2, _i2, _ref16, v, arr, obj, _arr, tree;

            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            if (!this.isPost()) {
                                _context14.next = 39;
                                break;
                            }

                            data = this.post();
                            //构造权限

                            priv = [];

                            if (think.isEmpty(data.priv_roleid)) {
                                _context14.next = 30;
                                break;
                            }

                            if (!think.isArray(data.priv_roleid)) {
                                _context14.next = 28;
                                break;
                            }

                            _iterator2 = data.priv_roleid, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 6:
                            if (!_isArray2) {
                                _context14.next = 12;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context14.next = 9;
                                break;
                            }

                            return _context14.abrupt('break', 26);

                        case 9:
                            _ref16 = _iterator2[_i2++];
                            _context14.next = 16;
                            break;

                        case 12:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context14.next = 15;
                                break;
                            }

                            return _context14.abrupt('break', 26);

                        case 15:
                            _ref16 = _i2.value;

                        case 16:
                            v = _ref16;
                            arr = v.split(",");
                            obj = {};

                            obj.catid = arr[1];
                            obj.roleid = arr[2];
                            obj.action = arr[0];
                            obj.is_admin = 1;
                            priv.push(obj);

                        case 24:
                            _context14.next = 6;
                            break;

                        case 26:
                            _context14.next = 30;
                            break;

                        case 28:
                            _arr = data.priv_roleid.split(",");

                            priv.push({ catid: _arr[1], roleid: _arr[2], action: _arr[0], is_admin: 1 });

                        case 30:
                            _context14.next = 32;
                            return this.model("category_priv").delete({ where: { is_admin: 1, roleid: data.roleid } });

                        case 32:
                            if (think.isEmpty(priv)) {
                                _context14.next = 35;
                                break;
                            }

                            _context14.next = 35;
                            return this.model("category_priv").addMany(priv);

                        case 35:
                            think.cache("all_priv", null); //栏目权限缓存
                            return _context14.abrupt('return', this.success({ name: "修改成功！" }));

                        case 39:
                            _context14.next = 41;
                            return this.model('category').gettree(0, "id,name,title,sort,pid,allow_publish,status,model,mold,isapp");

                        case 41:
                            tree = _context14.sent;

                            this.assign({
                                "tactive": "/admin/user",
                                "tree": tree
                            });
                            this.active = "admin/auth/index";
                            this.meta_title = "栏目权限";
                            return _context14.abrupt('return', this.display());

                        case 46:
                        case 'end':
                            return _context14.stop();
                    }
                }
            }, _callee14, this);
        }));

        function cateprivAction() {
            return _ref15.apply(this, arguments);
        }

        return cateprivAction;
    }();

    /**
     * 成员管理
     */


    _class.prototype.userlistAction = function () {
        var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15() {
            var id, userid, userdata, _iterator3, _isArray3, _i3, _ref18, v, role_id;

            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            id = this.get("id");
                            _context15.next = 3;
                            return this.model("auth_user_role").where({ role_id: id }).getField("user_id");

                        case 3:
                            userid = _context15.sent;
                            userdata = void 0;

                            if (think.isEmpty(userid)) {
                                _context15.next = 29;
                                break;
                            }

                            _context15.next = 8;
                            return this.model("member").where({ id: ["IN", userid] }).select();

                        case 8:
                            userdata = _context15.sent;
                            _iterator3 = userdata, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 10:
                            if (!_isArray3) {
                                _context15.next = 16;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context15.next = 13;
                                break;
                            }

                            return _context15.abrupt('break', 29);

                        case 13:
                            _ref18 = _iterator3[_i3++];
                            _context15.next = 20;
                            break;

                        case 16:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context15.next = 19;
                                break;
                            }

                            return _context15.abrupt('break', 29);

                        case 19:
                            _ref18 = _i3.value;

                        case 20:
                            v = _ref18;
                            _context15.next = 23;
                            return this.model("auth_user_role").where({ user_id: v.id }).getField("role_id", true);

                        case 23:
                            role_id = _context15.sent;
                            _context15.next = 26;
                            return this.model("auth_role").where({ id: role_id }).getField("desc", true);

                        case 26:
                            v.role = _context15.sent;

                        case 27:
                            _context15.next = 10;
                            break;

                        case 29:

                            this.assign("userlist", userdata);
                            this.meta_title = "成员管理";
                            this.active = "admin/auth/index";
                            return _context15.abrupt('return', this.display());

                        case 33:
                        case 'end':
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        function userlistAction() {
            return _ref17.apply(this, arguments);
        }

        return userlistAction;
    }();

    _class.prototype.testAction = function () {
        var _ref19 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee16() {
            var ss;
            return _regenerator2.default.wrap(function _callee16$(_context16) {
                while (1) {
                    switch (_context16.prev = _context16.next) {
                        case 0:
                            _context16.next = 2;
                            return this.updaterules();

                        case 2:
                            ss = _context16.sent;

                            //console.log(ss);
                            this.end();

                        case 4:
                        case 'end':
                            return _context16.stop();
                    }
                }
            }, _callee16, this);
        }));

        function testAction() {
            return _ref19.apply(this, arguments);
        }

        return testAction;
    }();

    /**
     * 管理员用户组数据写入/更新
     *
     */


    _class.prototype.writeroleAction = function () {
        var _ref20 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee17() {
            var map, id, role;
            return _regenerator2.default.wrap(function _callee17$(_context17) {
                while (1) {
                    switch (_context17.prev = _context17.next) {
                        case 0:
                            map = {};

                            map.rule_ids = this.post("rules");
                            if (think.isArray(map.rule_ids)) {
                                map.rule_ids = map.rule_ids.sort(function (a, b) {
                                    return a - b;
                                }).join(",");
                            }
                            map.module = "admin";
                            map.type = 1;
                            id = this.post("id");
                            role = this.model("auth_role");
                            _context17.next = 9;
                            return role.where({ id: id }).update(map);

                        case 9:
                            return _context17.abrupt('return', this.success({ name: "更新成功" }));

                        case 10:
                        case 'end':
                            return _context17.stop();
                    }
                }
            }, _callee17, this);
        }));

        function writeroleAction() {
            return _ref20.apply(this, arguments);
        }

        return writeroleAction;
    }();

    /**
     * 改变角色状态
     * @returns {Promise|*}
     */


    _class.prototype.chstaAction = function () {
        var _ref21 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee18() {
            var role, res;
            return _regenerator2.default.wrap(function _callee18$(_context18) {
                while (1) {
                    switch (_context18.prev = _context18.next) {
                        case 0:
                            role = this.model("auth_role");
                            _context18.next = 3;
                            return role.update(this.get());

                        case 3:
                            res = _context18.sent;

                            if (!res) {
                                _context18.next = 6;
                                break;
                            }

                            return _context18.abrupt('return', this.json(res));

                        case 6:
                        case 'end':
                            return _context18.stop();
                    }
                }
            }, _callee18, this);
        }));

        function chstaAction() {
            return _ref21.apply(this, arguments);
        }

        return chstaAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=auth.js.map