// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

exports.__esModule = true;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _wechatApi = require('wechat-api');

var _wechatApi2 = _interopRequireDefault(_wechatApi);

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

    _class.prototype.init = function init(http) {
        this.api = new _wechatApi2.default('wxe8c1b5ac7db990b6', 'ebcd685e93715b3470444cf6b7e763e6');
        //this.api = new API('wxec8fffd0880eefbe', 'a084f19ebb6cc5dddd2988106e739a07');
        _Base.prototype.init.call(this, http);
    };

    /**
     * 新建素材默认首页
     */


    _class.prototype.fodderAction = function fodderAction() {
        this.assign({ "navxs": true, "bg": "bg-dark" });
        return this.display();
    };

    //远程拿图片


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

    /**
     * 给微信上传临时素材 /图片 更新本地库
     */


    _class.prototype.wxuploadtmpAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var thumb_id, model, pic, paths, filePath, name, longpic, wx, api, img_result;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            //上传图片
                            // this.end("暂不开发");
                            thumb_id = this.get('thumb_id');
                            model = this.model('picture');
                            // let data = await model.where({id:thumb_id}).find();
                            //获取图片

                            _context.next = 4;
                            return get_pic(thumb_id, 1, 900, 500);

                        case 4:
                            pic = _context.sent;

                            //判断是本地还是外地,如果是外地就抓回来
                            paths = void 0;
                            filePath = think.RESOURCE_PATH + '/upload/long/';

                            if (!(pic.indexOf("http://") == 0)) {
                                _context.next = 18;
                                break;
                            }

                            think.mkdir(filePath);
                            _context.next = 11;
                            return get_cover(thumb_id, "path");

                        case 11:
                            name = _context.sent;
                            _context.next = 14;
                            return this.spiderImage(pic, filePath + name);

                        case 14:
                            longpic = _context.sent;

                            paths = longpic;
                            _context.next = 19;
                            break;

                        case 18:
                            paths = think.ROOT_PATH + '/www/' + pic;

                        case 19:
                            //console.log(pic);
                            //return false;
                            wx = function wx(api, data) {
                                var deferred = think.defer();
                                api.uploadMaterial(data, 'thumb', function (err, result) {
                                    if (!think.isEmpty(result)) {
                                        deferred.resolve(result);
                                    } else {
                                        console.error(err);
                                    }
                                });
                                return deferred.promise;
                            };

                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);
                            _context.next = 23;
                            return wx(api, paths);

                        case 23:
                            img_result = _context.sent;

                            if (!img_result) {
                                _context.next = 32;
                                break;
                            }

                            //删除远程文件
                            _fs2.default.unlinkSync(paths);
                            _context.next = 28;
                            return model.where({ id: thumb_id }).update({ url: img_result.url, source_id: img_result.media_id });

                        case 28:
                            img_result.hs_image_src = pic;
                            return _context.abrupt('return', this.json(img_result));

                        case 32:
                            return _context.abrupt('return', this.json(""));

                        case 33:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function wxuploadtmpAction() {
            return _ref.apply(this, arguments);
        }

        return wxuploadtmpAction;
    }();

    /**
     * 上传保存永久素材
     */


    _class.prototype.savefodderAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var self, params, edit_id, model, api, olddata, wxr, wxrres, delrow, anews, wx, wxres, wxg, wx_news, time, data, effect;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            self = this;
                            params = self.post("params");
                            edit_id = self.get("edit_id");
                            model = self.model('wx_material');
                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);

                            if (!edit_id) {
                                _context2.next = 16;
                                break;
                            }

                            _context2.next = 8;
                            return model.where({ id: edit_id }).find();

                        case 8:
                            olddata = _context2.sent;

                            wxr = function wxr(api, data) {
                                var deferred = think.defer();
                                api.removeMaterial(data, function (err, result) {
                                    if (err) {
                                        deferred.reject(err);
                                    } else {
                                        deferred.resolve(result);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context2.next = 12;
                            return wxr(api, olddata.media_id);

                        case 12:
                            wxrres = _context2.sent;
                            _context2.next = 15;
                            return model.where({ id: edit_id }).delete();

                        case 15:
                            delrow = _context2.sent;

                        case 16:
                            _context2.prev = 16;
                            anews = JSON.parse(params);

                            wx = function wx(api, data) {
                                var deferred = think.defer();
                                api.uploadNewsMaterial(data, function (err, result) {
                                    if (err) {
                                        deferred.reject(err);
                                    } else {
                                        deferred.resolve(result);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context2.next = 21;
                            return wx(api, anews);

                        case 21:
                            wxres = _context2.sent;

                            if (!wxres) {
                                _context2.next = 33;
                                break;
                            }

                            wxg = function wxg(api, data) {
                                var deferred = think.defer();
                                api.getMaterial(data, function (err, result) {
                                    if (err) {
                                        deferred.reject(err);
                                    } else {
                                        deferred.resolve(result);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context2.next = 26;
                            return wxg(api, wxres.media_id);

                        case 26:
                            wx_news = _context2.sent;

                            // let wx_news_str = JSON.stringify(wx_news);
                            time = new Date().getTime();
                            data = {
                                "media_id": wxres.media_id,
                                "material_content": params,
                                "material_wx_content": wx_news + '',
                                "web_token": 0,
                                "add_time": time
                            };
                            _context2.next = 31;
                            return model.add(data);

                        case 31:
                            effect = _context2.sent;

                            if (effect) {
                                self.success({ "name": "上传成功！", url: "" });
                            }

                        case 33:
                            self.fail("上传失败！");
                            _context2.next = 39;
                            break;

                        case 36:
                            _context2.prev = 36;
                            _context2.t0 = _context2['catch'](16);

                            self.fail("上传失败！");

                        case 39:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[16, 36]]);
        }));

        function savefodderAction() {
            return _ref2.apply(this, arguments);
        }

        return savefodderAction;
    }();

    /**
     * 素材列表
     */


    _class.prototype.fodderlistAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var self, model, data, Pages, pages, page;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            self = this;

                            self.meta_title = "微信素材列表";
                            self.assign({ "navxs": true, "bg": "bg-dark" });
                            model = self.model("wx_material");
                            _context3.next = 6;
                            return model.page(this.get('page')).order('add_time DESC').countSelect();

                        case 6:
                            data = _context3.sent;
                            Pages = think.adapter("pages", "page");
                            pages = new Pages();
                            page = pages.pages(data);

                            self.assign('pagerData', page);
                            self.assign('fodder_list', data.data);
                            return _context3.abrupt('return', this.display());

                        case 13:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function fodderlistAction() {
            return _ref3.apply(this, arguments);
        }

        return fodderlistAction;
    }();

    /**
     * 删除素材
     */


    _class.prototype.deletefodderAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var self, id, model, olddata, wxremove, wxres, res;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            self = this;
                            id = self.get('id');
                            //let ids = self.get('ids')
                            //return self.end(ids);

                            model = self.model('wx_material');
                            _context4.next = 5;
                            return model.where({ id: ['IN', id] }).getField('media_id', false);

                        case 5:
                            olddata = _context4.sent;

                            // return self.end(olddata);
                            wxremove = function wxremove(api, data) {
                                var deferred = think.defer();
                                api.removeMaterial(data, function (err, result) {
                                    if (err) {
                                        deferred.reject(err);
                                    } else {
                                        deferred.resolve(result);
                                    }
                                });
                                return deferred.promise;
                            };

                            if (think.isEmpty(olddata)) {
                                _context4.next = 17;
                                break;
                            }

                            _context4.next = 10;
                            return wxremove(self.api, olddata[0]);

                        case 10:
                            wxres = _context4.sent;

                            if (!(wxres.errcode == 0)) {
                                _context4.next = 17;
                                break;
                            }

                            _context4.next = 14;
                            return model.where({ id: ['IN', id] }).delete();

                        case 14:
                            res = _context4.sent;

                            if (!res) {
                                _context4.next = 17;
                                break;
                            }

                            return _context4.abrupt('return', self.success({ name: '删除成功' }));

                        case 17:
                            return _context4.abrupt('return', self.fail('删除失败'));

                        case 18:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function deletefodderAction() {
            return _ref4.apply(this, arguments);
        }

        return deletefodderAction;
    }();

    _class.prototype.asyncfodderlistAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var self, model, data;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            self = this;
                            model = self.model("wx_material");
                            _context5.next = 4;
                            return model.page(this.get('page'), 20).order("add_time DESC").countSelect();

                        case 4:
                            data = _context5.sent;
                            return _context5.abrupt('return', this.json(data));

                        case 6:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function asyncfodderlistAction() {
            return _ref5.apply(this, arguments);
        }

        return asyncfodderlistAction;
    }();

    /**
     * 编辑
     */


    _class.prototype.foddereditAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var id, model, data;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            id = this.get('id');
                            //this.end(id)

                            model = this.model("wx_material");
                            _context6.next = 4;
                            return model.where({ 'id': id }).find();

                        case 4:
                            data = _context6.sent;

                            this.assign('data', (0, _stringify2.default)(data));
                            //this.end(data);
                            return _context6.abrupt('return', this.display('fodder'));

                        case 7:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function foddereditAction() {
            return _ref6.apply(this, arguments);
        }

        return foddereditAction;
    }();

    //-----------------------------------
    //自动回复


    _class.prototype.autoreplyAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var rule, i, current, ks, rs;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return this.model('wx_keywords_rule').where({}).select();

                        case 2:
                            rule = _context7.sent;
                            i = 0;

                        case 4:
                            if (!(i < rule.length)) {
                                _context7.next = 17;
                                break;
                            }

                            current = rule[i];
                            _context7.next = 8;
                            return this.model('wx_keywords').where({ id: ['IN', current.keywords_id] }).select();

                        case 8:
                            ks = _context7.sent;
                            _context7.next = 11;
                            return this.model('wx_replylist').where({ id: ['IN', current.reply_id] }).select();

                        case 11:
                            rs = _context7.sent;

                            rule[i].ks = ks;
                            rule[i].rs = rs;

                        case 14:
                            i++;
                            _context7.next = 4;
                            break;

                        case 17:
                            this.assign('rulelist', rule);
                            this.assign({ "navxs": true, "bg": "bg-dark" });
                            return _context7.abrupt('return', this.display());

                        case 20:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function autoreplyAction() {
            return _ref7.apply(this, arguments);
        }

        return autoreplyAction;
    }();

    /**
     * 新建规则
     */


    _class.prototype.createkruleAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var rule_name, model, id;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            //let id = 1;
                            rule_name = this.get('rule_name');
                            model = this.model('wx_keywords_rule');
                            _context8.next = 4;
                            return model.add({ 'rule_name': rule_name, 'create_time': new Date().getTime() });

                        case 4:
                            id = _context8.sent;

                            if (!id) {
                                _context8.next = 9;
                                break;
                            }

                            return _context8.abrupt('return', this.success({ name: "规则添加成功", ruleid: id }));

                        case 9:
                            return _context8.abrupt('return', this.fail('添加规则失败'));

                        case 10:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function createkruleAction() {
            return _ref8.apply(this, arguments);
        }

        return createkruleAction;
    }();

    /**
     * 新建回复
     */


    _class.prototype.createrAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var self, type, ruleid, model, currtime, currwebtoken, result, content, rulemodel, ruledata, rs, r;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            self = this;
                            type = self.post('type');
                            ruleid = self.post('ruleid');

                            if (ruleid) {
                                _context9.next = 5;
                                break;
                            }

                            return _context9.abrupt('return', self.fail('规则不存在'));

                        case 5:
                            model = self.model('wx_replylist');
                            currtime = new Date().getTime();
                            currwebtoken = 0;
                            result = 0;
                            _context9.next = 11;
                            return model.startTrans();

                        case 11:
                            _context9.t0 = type;
                            _context9.next = _context9.t0 === 'text' ? 14 : _context9.t0 === 'image' ? 19 : _context9.t0 === 'audio' ? 20 : _context9.t0 === 'video' ? 21 : _context9.t0 === 'news' ? 22 : 23;
                            break;

                        case 14:
                            content = self.post('content');
                            _context9.next = 17;
                            return model.add({
                                'type': 'text',
                                'content': content,
                                'create_time': currtime,
                                'web_token': currwebtoken
                            });

                        case 17:
                            result = _context9.sent;
                            return _context9.abrupt('break', 23);

                        case 19:
                            return _context9.abrupt('break', 23);

                        case 20:
                            return _context9.abrupt('break', 23);

                        case 21:
                            return _context9.abrupt('break', 23);

                        case 22:
                            return _context9.abrupt('break', 23);

                        case 23:
                            if (!result) {
                                _context9.next = 45;
                                break;
                            }

                            rulemodel = self.model('wx_keywords_rule');
                            _context9.next = 27;
                            return rulemodel.where({ id: ruleid }).find();

                        case 27:
                            ruledata = _context9.sent;

                            console.log(ruledata);
                            rs = ruledata.reply_id.split(',');

                            rs.push(result);
                            _context9.next = 33;
                            return rulemodel.where({ id: ruleid }).update({ 'reply_id': rs.join(','), 'create_time': currtime });

                        case 33:
                            r = _context9.sent;

                            if (!r) {
                                _context9.next = 40;
                                break;
                            }

                            _context9.next = 37;
                            return model.commit();

                        case 37:
                            return _context9.abrupt('return', self.success({ name: '添加回复成功', rid: result }));

                        case 40:
                            _context9.next = 42;
                            return model.rollback();

                        case 42:
                            return _context9.abrupt('return', self.fail('回复添加失败'));

                        case 43:
                            _context9.next = 48;
                            break;

                        case 45:
                            _context9.next = 47;
                            return model.rollback();

                        case 47:
                            return _context9.abrupt('return', self.fail('回复添加失败'));

                        case 48:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function createrAction() {
            return _ref9.apply(this, arguments);
        }

        return createrAction;
    }();

    /**
     * 删除回复
     */


    _class.prototype.deleterAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var self, ruleid, rid, currtime, model, rr, rulemodel, ruledata, tmp, rs, i, r;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            self = this;
                            ruleid = self.post('ruleid');
                            rid = self.post('rid');
                            currtime = new Date().getTime();

                            if (!(ruleid && rid)) {
                                _context10.next = 38;
                                break;
                            }

                            model = self.model('wx_replylist');
                            _context10.next = 8;
                            return model.startTrans();

                        case 8:
                            _context10.next = 10;
                            return model.where({ id: rid }).delete();

                        case 10:
                            rr = _context10.sent;

                            if (!rr) {
                                _context10.next = 33;
                                break;
                            }

                            rulemodel = self.model('wx_keywords_rule');
                            _context10.next = 15;
                            return rulemodel.where({ id: ruleid }).find();

                        case 15:
                            ruledata = _context10.sent;
                            tmp = [];
                            rs = ruledata.reply_id.split(',');

                            for (i in rs) {
                                if (rs[i] != rid) {
                                    tmp.push(rs[i]);
                                }
                            }
                            _context10.next = 21;
                            return rulemodel.where({ id: ruleid }).update({
                                'reply_id': tmp.join(','),
                                'create_time': currtime
                            });

                        case 21:
                            r = _context10.sent;

                            if (!r) {
                                _context10.next = 28;
                                break;
                            }

                            _context10.next = 25;
                            return model.commit();

                        case 25:
                            return _context10.abrupt('return', self.success({ name: '回复删除成功' }));

                        case 28:
                            _context10.next = 30;
                            return model.rollback();

                        case 30:
                            return _context10.abrupt('return', self.fail('回复删除失败'));

                        case 31:
                            _context10.next = 36;
                            break;

                        case 33:
                            _context10.next = 35;
                            return model.rollback();

                        case 35:
                            return _context10.abrupt('return', self.fail('删除失败'));

                        case 36:
                            _context10.next = 39;
                            break;

                        case 38:
                            return _context10.abrupt('return', self.fail('提交参数错误'));

                        case 39:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function deleterAction() {
            return _ref10.apply(this, arguments);
        }

        return deleterAction;
    }();

    /**
     *  编辑回复
     */


    _class.prototype.editreplyAction = function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
            var self, type, rid, model, currtime, currwebtoken, result, content;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            self = this;
                            type = self.post('type');
                            rid = self.post('ruleid');
                            model = self.model('wx_replylist');
                            currtime = new Date().getTime();
                            currwebtoken = 0;
                            result = 0;
                            _context11.t0 = type;
                            _context11.next = _context11.t0 === 'text' ? 10 : _context11.t0 === 'image' ? 15 : _context11.t0 === 'audio' ? 16 : _context11.t0 === 'video' ? 17 : _context11.t0 === 'news' ? 18 : 19;
                            break;

                        case 10:
                            content = self.post('content');
                            _context11.next = 13;
                            return model.where({ id: rid }).update({
                                'content': content,
                                'create_time': currtime,
                                'web_token': currwebtoken
                            });

                        case 13:
                            result = _context11.sent;
                            return _context11.abrupt('break', 19);

                        case 15:
                            return _context11.abrupt('break', 19);

                        case 16:
                            return _context11.abrupt('break', 19);

                        case 17:
                            return _context11.abrupt('break', 19);

                        case 18:
                            return _context11.abrupt('break', 19);

                        case 19:
                            if (!result) {
                                _context11.next = 23;
                                break;
                            }

                            return _context11.abrupt('return', self.success({ name: '编辑成功' }));

                        case 23:
                            return _context11.abrupt('return', self.fail('编辑失败'));

                        case 24:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        function editreplyAction() {
            return _ref11.apply(this, arguments);
        }

        return editreplyAction;
    }();

    /**
     * 规则编辑 （关键字的添加和删除）
     */


    _class.prototype.ruleeditAction = function () {
        var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
            var self, ruleid, rulemodel, ruledata, currtime, currwebtoken, edittype, kmodel, kid, r, tmp, ks, v, kname, ktype, _r, _ks;

            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            self = this;
                            ruleid = self.post('ruleid');
                            rulemodel = self.model('wx_keywords_rule');
                            _context12.next = 5;
                            return rulemodel.where({ id: ruleid }).find();

                        case 5:
                            ruledata = _context12.sent;
                            currtime = new Date().getTime();
                            currwebtoken = 0;
                            edittype = self.post('edittype'); //判断是编辑关键字 1，还是回复内容 2

                            if (!(edittype == 1 && ruleid)) {
                                _context12.next = 45;
                                break;
                            }

                            //关键字操作
                            kmodel = self.model('wx_keywords');
                            kid = self.post('kid'); //如果带有kid表示该操作为删除，否则为添加

                            if (!kid) {
                                _context12.next = 25;
                                break;
                            }

                            _context12.next = 15;
                            return kmodel.where({ id: kid }).delete();

                        case 15:
                            r = _context12.sent;

                            if (!r) {
                                _context12.next = 22;
                                break;
                            }

                            tmp = [];
                            ks = ruledata.keywords_id.split(',');

                            for (v in ks) {
                                if (ks[v] != kid) {
                                    tmp.push(ks[v]);
                                }
                            }
                            _context12.next = 22;
                            return rulemodel.where({ id: ruleid }).update({ 'keywords_id': tmp.join(','), 'create_time': currtime });

                        case 22:
                            return _context12.abrupt('return', self.json(r));

                        case 25:
                            //新建关键字
                            kname = self.post('name');
                            ktype = self.post('type');
                            _r = 0;
                            _context12.prev = 28;
                            _context12.next = 31;
                            return kmodel.add({
                                'keyword_name': kname,
                                'match_type': ktype,
                                'rule_id': ruleid,
                                'create_time': currtime,
                                'web_token': currwebtoken
                            });

                        case 31:
                            _r = _context12.sent;
                            _context12.next = 37;
                            break;

                        case 34:
                            _context12.prev = 34;
                            _context12.t0 = _context12['catch'](28);
                            return _context12.abrupt('return', self.json(-1));

                        case 37:
                            if (!_r) {
                                _context12.next = 42;
                                break;
                            }

                            _ks = ruledata.keywords_id.split(',');

                            _ks.push(_r);
                            _context12.next = 42;
                            return rulemodel.where({ id: ruleid }).update({ 'keywords_id': _ks.join(','), 'create_time': currtime });

                        case 42:
                            return _context12.abrupt('return', self.json(_r));

                        case 43:
                            _context12.next = 46;
                            break;

                        case 45:
                            if (edittype == 2 && ruleid) {
                                //回复操作
                            } else {}

                        case 46:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this, [[28, 34]]);
        }));

        function ruleeditAction() {
            return _ref12.apply(this, arguments);
        }

        return ruleeditAction;
    }();

    /**
     * 删除规则
     */


    _class.prototype.ruledeleteAction = function () {
        var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13() {
            var self, ruleid, rulemodel, currentrule, kids, rids, kmodel, rmodel, kres, rres, rulres;
            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            self = this;
                            ruleid = self.post('ruleid');
                            rulemodel = self.model('wx_keywords_rule');
                            _context13.next = 5;
                            return rulemodel.startTrans();

                        case 5:
                            _context13.next = 7;
                            return rulemodel.where({ id: ruleid }).find();

                        case 7:
                            currentrule = _context13.sent;
                            kids = currentrule.keywords_id;
                            rids = currentrule.reply_id;
                            kmodel = self.model('wx_keywords');
                            rmodel = self.model('wx_replylist');
                            _context13.next = 14;
                            return kmodel.where({ id: ['IN', kids] }).delete();

                        case 14:
                            kres = _context13.sent;
                            _context13.next = 17;
                            return rmodel.where({ id: ['IN', rids] }).delete();

                        case 17:
                            rres = _context13.sent;
                            _context13.next = 20;
                            return rulemodel.where({ id: ruleid }).delete();

                        case 20:
                            rulres = _context13.sent;

                            if (!rulres) {
                                _context13.next = 27;
                                break;
                            }

                            _context13.next = 24;
                            return rulemodel.commit();

                        case 24:
                            return _context13.abrupt('return', self.success({ name: '规则删除成功' }));

                        case 27:
                            _context13.next = 29;
                            return rulemodel.rollback();

                        case 29:
                            return _context13.abrupt('return', self.fail('规则删除失败'));

                        case 30:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        function ruledeleteAction() {
            return _ref13.apply(this, arguments);
        }

        return ruledeleteAction;
    }();

    /**
     * 编辑规则名称
     */


    _class.prototype.ruleeditnameAction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14() {
            var self, ruleid, rulename, rulemodel, res;
            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            self = this;
                            ruleid = self.post('ruleid');
                            rulename = self.post('rulename');
                            rulemodel = self.model('wx_keywords_rule');
                            _context14.next = 6;
                            return rulemodel.where({ id: ruleid }).update({ rule_name: rulename });

                        case 6:
                            res = _context14.sent;

                            if (!res) {
                                _context14.next = 9;
                                break;
                            }

                            return _context14.abrupt('return', self.success({ name: '编辑成功' }));

                        case 9:
                            return _context14.abrupt('return', self.fail('编辑失败'));

                        case 10:
                        case 'end':
                            return _context14.stop();
                    }
                }
            }, _callee14, this);
        }));

        function ruleeditnameAction() {
            return _ref14.apply(this, arguments);
        }

        return ruleeditnameAction;
    }();

    /**
     * 关注自动回复
     */


    _class.prototype.followAction = function () {
        var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15() {
            var model, data, _iterator, _isArray, _i, _ref16, v, info, initinfo;

            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            model = this.model('wx_replylist');
                            //首次访问检查数据库有没有数据,如果没有就添加
                            // 'news','music','video','voice','image','text'

                            data = [{ type: "text", reply_type: 1 }, { type: "news", reply_type: 1 }, {
                                type: "image",
                                reply_type: 1
                            }, { type: "music", reply_type: 1 }, { type: "video", reply_type: 1 }, { type: "voice", reply_type: 1 }];
                            _iterator = data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

                        case 3:
                            if (!_isArray) {
                                _context15.next = 9;
                                break;
                            }

                            if (!(_i >= _iterator.length)) {
                                _context15.next = 6;
                                break;
                            }

                            return _context15.abrupt('break', 18);

                        case 6:
                            _ref16 = _iterator[_i++];
                            _context15.next = 13;
                            break;

                        case 9:
                            _i = _iterator.next();

                            if (!_i.done) {
                                _context15.next = 12;
                                break;
                            }

                            return _context15.abrupt('break', 18);

                        case 12:
                            _ref16 = _i.value;

                        case 13:
                            v = _ref16;
                            _context15.next = 16;
                            return model.where(v).thenAdd(v);

                        case 16:
                            _context15.next = 3;
                            break;

                        case 18:
                            _context15.next = 20;
                            return model.where({ reply_type: 1 }).order("create_time DESC").select();

                        case 20:
                            info = _context15.sent;

                            this.assign('list', info);
                            //初始化
                            initinfo = info[0];

                            this.assign({ "initinfo": initinfo });
                            this.assign({ "navxs": true, "bg": "bg-dark" });
                            this.meta_title = "关注自动回复";
                            this.active = "admin/mpbase2/autoreply";
                            return _context15.abrupt('return', this.display());

                        case 28:
                        case 'end':
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        function followAction() {
            return _ref15.apply(this, arguments);
        }

        return followAction;
    }();

    /**
     * 消息自动回复
     */


    _class.prototype.messageAction = function () {
        var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee16() {
            var model, data, _iterator2, _isArray2, _i2, _ref18, v, info, initinfo;

            return _regenerator2.default.wrap(function _callee16$(_context16) {
                while (1) {
                    switch (_context16.prev = _context16.next) {
                        case 0:
                            model = this.model('wx_replylist');
                            //初始化数据

                            data = [{ type: "text", reply_type: 2 }, { type: "news", reply_type: 2 }, { type: "image", reply_type: 2 }, { type: "music", reply_type: 2 }, { type: "video", reply_type: 2 }, { type: "voice", reply_type: 2 }];
                            _iterator2 = data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

                        case 3:
                            if (!_isArray2) {
                                _context16.next = 9;
                                break;
                            }

                            if (!(_i2 >= _iterator2.length)) {
                                _context16.next = 6;
                                break;
                            }

                            return _context16.abrupt('break', 18);

                        case 6:
                            _ref18 = _iterator2[_i2++];
                            _context16.next = 13;
                            break;

                        case 9:
                            _i2 = _iterator2.next();

                            if (!_i2.done) {
                                _context16.next = 12;
                                break;
                            }

                            return _context16.abrupt('break', 18);

                        case 12:
                            _ref18 = _i2.value;

                        case 13:
                            v = _ref18;
                            _context16.next = 16;
                            return model.where(v).thenAdd(v);

                        case 16:
                            _context16.next = 3;
                            break;

                        case 18:
                            _context16.next = 20;
                            return model.where({ reply_type: 2 }).order("create_time DESC").select();

                        case 20:
                            info = _context16.sent;

                            this.assign('list', info);
                            //初始化
                            initinfo = info[0];

                            this.assign("initinfo", initinfo);
                            this.assign({ "navxs": true, "bg": "bg-dark" });
                            this.meta_title = "消息自动回复";
                            this.active = "admin/mpbase2/autoreply";
                            return _context16.abrupt('return', this.display());

                        case 28:
                        case 'end':
                            return _context16.stop();
                    }
                }
            }, _callee16, this);
        }));

        function messageAction() {
            return _ref17.apply(this, arguments);
        }

        return messageAction;
    }();

    /**
     * 保存回复数据
     */


    _class.prototype.saveinfoAction = function () {
        var _ref19 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee17() {
            var model, media_model, reply_type, send_type, editor_content, me_id, data, wx_content, material_content, targetArr, articles, host, key, tmpobj, isAdd;
            return _regenerator2.default.wrap(function _callee17$(_context17) {
                while (1) {
                    switch (_context17.prev = _context17.next) {
                        case 0:
                            model = this.model('wx_replylist');
                            media_model = this.model('wx_material');
                            reply_type = this.post('reply_type');
                            send_type = this.post('send_type');
                            editor_content = this.post('editor_content');
                            me_id = this.post('me_id') == "" ? null : this.post('me_id');
                            //this.end(reply_type+send_type+editor_content);

                            data = {};
                            //消息回复
                            /*if(reply_type == 2){
                             data.content = editor_content;
                             }else if(reply_type == 1){
                             //关注回复
                              }*/
                            //this.end(send_type);

                            if (!(send_type == 'textArea')) {
                                _context17.next = 12;
                                break;
                            }

                            data.type = 'text';
                            data.content = editor_content;
                            _context17.next = 30;
                            break;

                        case 12:
                            if (!(send_type == 'newsArea')) {
                                _context17.next = 30;
                                break;
                            }

                            console.log(!think.isEmpty(me_id));

                            if (think.isEmpty(me_id)) {
                                _context17.next = 27;
                                break;
                            }

                            _context17.next = 17;
                            return media_model.where({ 'id': me_id }).find();

                        case 17:
                            wx_content = _context17.sent;

                            //this.end('aaa'+wx_content['material_content']);
                            material_content = wx_content['material_content'];

                            material_content = JSON.parse(material_content);
                            targetArr = [];
                            articles = material_content.articles;
                            host = 'http://' + this.http.host;

                            for (key in articles) {
                                tmpobj = {};

                                tmpobj.title = articles[key]['title'];
                                tmpobj.description = articles[key]['digest'];
                                if (articles[key]['hs_image_src'].indexOf("http://") == 0) {
                                    tmpobj.picurl = articles[key]['hs_image_src'];
                                } else {
                                    tmpobj.picurl = host + articles[key]['hs_image_src'];
                                }

                                tmpobj.url = articles[key]['content_source_url'];
                                targetArr.push(tmpobj);
                            }
                            data.content = (0, _stringify2.default)(targetArr);
                            _context17.next = 28;
                            break;

                        case 27:
                            data.content = null;

                        case 28:
                            data.type = 'news';
                            data.media_id = me_id;

                        case 30:
                            data.reply_type = reply_type;
                            data.create_time = new Date().getTime();
                            data.id = this.post("id");
                            //this.end(data);
                            console.log(data);
                            // return false;
                            //查询该类型下是否有保存的回复信息
                            isAdd = '';
                            _context17.next = 37;
                            return model.update(data);

                        case 37:
                            isAdd = _context17.sent;

                            if (!isAdd) {
                                _context17.next = 45;
                                break;
                            }

                            if (!(reply_type == 2)) {
                                _context17.next = 43;
                                break;
                            }

                            return _context17.abrupt('return', this.success({ name: "修改成功!", url: "/admin/mpbase2/message" }));

                        case 43:
                            if (!(reply_type == 1)) {
                                _context17.next = 45;
                                break;
                            }

                            return _context17.abrupt('return', this.success({ name: "修改成功!", url: "/admin/mpbase2/follow" }));

                        case 45:
                        case 'end':
                            return _context17.stop();
                    }
                }
            }, _callee17, this);
        }));

        function saveinfoAction() {
            return _ref19.apply(this, arguments);
        }

        return saveinfoAction;
    }();

    /**
     * 打开自定义菜单
     */


    _class.prototype.custommenuAction = function () {
        var _ref20 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee18() {
            var data, self, model, ddata;
            return _regenerator2.default.wrap(function _callee18$(_context18) {
                while (1) {
                    switch (_context18.prev = _context18.next) {
                        case 0:
                            data = {
                                version: 20120000,
                                button: [{
                                    name: '1个福彩蛋',
                                    type: 1,
                                    act_list: [],
                                    sub_button: [{
                                        name: '投资赚钱吧',
                                        type: 1,
                                        act_list: [{ type: 2, value: 'http://www.baidu.com' }],
                                        sub_button: []
                                    }]
                                }]
                            };
                            self = this;
                            model = self.model('wx_custom_menu');
                            _context18.next = 5;
                            return model.where({ personality: null }).find();

                        case 5:
                            ddata = _context18.sent;

                            self.assign('data', ddata.custom_menu);
                            self.assign('menuid', ddata.id);
                            self.meta_title = "微信自定义菜单";
                            self.assign({ "navxs": true, "bg": "bg-dark" });
                            return _context18.abrupt('return', this.display());

                        case 11:
                        case 'end':
                            return _context18.stop();
                    }
                }
            }, _callee18, this);
        }));

        function custommenuAction() {
            return _ref20.apply(this, arguments);
        }

        return custommenuAction;
    }();

    /**
     * 保存自定义菜单
     */


    _class.prototype.savecustommenuAction = function () {
        var _ref21 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee19() {
            var self, newv, menuid, currwebtoken, currtime, model, res;
            return _regenerator2.default.wrap(function _callee19$(_context19) {
                while (1) {
                    switch (_context19.prev = _context19.next) {
                        case 0:
                            self = this;
                            newv = self.post('newv');
                            menuid = self.post('menuid'); //菜单ID

                            currwebtoken = 0;

                            console.log(newv);
                            //return false;
                            _context19.prev = 5;

                            if (newv) {
                                _context19.next = 8;
                                break;
                            }

                            return _context19.abrupt('return', self.fail('参数错误'));

                        case 8:
                            //newv = JSON.parse(newv);
                            currtime = new Date().getTime();
                            model = self.model('wx_custom_menu');
                            res = void 0;

                            if (!think.isEmpty(menuid)) {
                                _context19.next = 17;
                                break;
                            }

                            _context19.next = 14;
                            return model.add({
                                create_time: currtime,
                                custom_menu: newv,
                                web_token: currwebtoken
                            });

                        case 14:
                            res = _context19.sent;
                            _context19.next = 20;
                            break;

                        case 17:
                            _context19.next = 19;
                            return model.update({
                                id: menuid,
                                create_time: currtime,
                                custom_menu: newv,
                                web_token: currwebtoken
                            });

                        case 19:
                            res = _context19.sent;

                        case 20:
                            if (!res) {
                                _context19.next = 24;
                                break;
                            }

                            return _context19.abrupt('return', self.success({ name: '菜单保存成功' }));

                        case 24:
                            return _context19.abrupt('return', self.fail('菜单保存失败'));

                        case 25:
                            _context19.next = 30;
                            break;

                        case 27:
                            _context19.prev = 27;
                            _context19.t0 = _context19['catch'](5);
                            return _context19.abrupt('return', self.fail('参数错误'));

                        case 30:
                        case 'end':
                            return _context19.stop();
                    }
                }
            }, _callee19, this, [[5, 27]]);
        }));

        function savecustommenuAction() {
            return _ref21.apply(this, arguments);
        }

        return savecustommenuAction;
    }();

    /**
     * 生成微信菜单
     */


    _class.prototype.asyncwxmenuAction = function () {
        var _ref22 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee20() {
            var self, model, data, wxsubmit, dataObj, final, _iterator3, _isArray3, _i3, _ref23, a, tmpbtn, _iterator4, _isArray4, _i4, _ref24, b, tmpsub, api, res;

            return _regenerator2.default.wrap(function _callee20$(_context20) {
                while (1) {
                    switch (_context20.prev = _context20.next) {
                        case 0:
                            self = this;
                            model = self.model('wx_custom_menu');
                            _context20.next = 4;
                            return model.where({}).find();

                        case 4:
                            data = _context20.sent;

                            wxsubmit = function wxsubmit(api, data) {
                                var deferred = think.defer();
                                api.createMenu(data, function (err, result) {
                                    if (err) {
                                        deferred.reject(false);
                                    } else {
                                        deferred.resolve(result);
                                    }
                                });
                                return deferred.promise;
                            };

                            console.log(data);

                            dataObj = JSON.parse(data.custom_menu);
                            final = { button: [] };
                            // for(let i = 0; i < dataObj.button.length; i++){
                            //     let btn = dataObj.button[i];
                            //     let tmpbtn = { /*name:'', type:'', key:'', sub_button:''*/ };
                            //
                            //     tmpbtn.name = btn.name;
                            //     if(btn.sub_button.length > 0){
                            //         tmpbtn.sub_button = [];
                            //         for(let j = 0; j < btn.sub_button.length; j++){
                            //             let sub = btn.sub_button[i];
                            //             let tmpsub = { /*name:'', type:'', key:'', sub_button:''*/ };
                            //             tmpsub.name = sub.name;
                            //             tmpsub.type = 'view';
                            //             tmpsub.url = sub.act_list[i].value;
                            //
                            //             tmpbtn.sub_button.push(tmpsub);
                            //         }
                            //     }else if(!btn.hasOwnProperty('key')){
                            //         btn.key = (new Date().getTime())+"KEY";
                            //     }else{
                            //     }
                            //
                            //     final.button.push( tmpbtn );
                            // }

                            _iterator3 = dataObj.button, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

                        case 10:
                            if (!_isArray3) {
                                _context20.next = 16;
                                break;
                            }

                            if (!(_i3 >= _iterator3.length)) {
                                _context20.next = 13;
                                break;
                            }

                            return _context20.abrupt('break', 66);

                        case 13:
                            _ref23 = _iterator3[_i3++];
                            _context20.next = 20;
                            break;

                        case 16:
                            _i3 = _iterator3.next();

                            if (!_i3.done) {
                                _context20.next = 19;
                                break;
                            }

                            return _context20.abrupt('break', 66);

                        case 19:
                            _ref23 = _i3.value;

                        case 20:
                            a = _ref23;
                            tmpbtn = {};

                            tmpbtn.name = a.name;
                            //console.log(a);

                            if (!think.isEmpty(a.sub_button)) {
                                _context20.next = 35;
                                break;
                            }

                            _context20.t0 = a.type;
                            _context20.next = _context20.t0 === '1' ? 27 : _context20.t0 === '2' ? 30 : 33;
                            break;

                        case 27:
                            tmpbtn.type = "click";
                            tmpbtn.key = a.act_list[0].value;
                            return _context20.abrupt('break', 33);

                        case 30:
                            tmpbtn.type = "view";
                            tmpbtn.url = a.act_list[0].value;
                            return _context20.abrupt('break', 33);

                        case 33:
                            _context20.next = 62;
                            break;

                        case 35:
                            tmpbtn.sub_button = [];
                            _iterator4 = a.sub_button, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

                        case 37:
                            if (!_isArray4) {
                                _context20.next = 43;
                                break;
                            }

                            if (!(_i4 >= _iterator4.length)) {
                                _context20.next = 40;
                                break;
                            }

                            return _context20.abrupt('break', 62);

                        case 40:
                            _ref24 = _iterator4[_i4++];
                            _context20.next = 47;
                            break;

                        case 43:
                            _i4 = _iterator4.next();

                            if (!_i4.done) {
                                _context20.next = 46;
                                break;
                            }

                            return _context20.abrupt('break', 62);

                        case 46:
                            _ref24 = _i4.value;

                        case 47:
                            b = _ref24;
                            tmpsub = {};

                            tmpsub.name = b.name;
                            //console.log(b.type);
                            _context20.t1 = b.type;
                            _context20.next = _context20.t1 === '1' ? 53 : _context20.t1 === '2' ? 56 : 59;
                            break;

                        case 53:
                            tmpsub.type = "click";
                            tmpsub.key = b.act_list[0].value;
                            return _context20.abrupt('break', 59);

                        case 56:
                            tmpsub.type = "view";
                            tmpsub.url = b.act_list[0].value;
                            return _context20.abrupt('break', 59);

                        case 59:
                            tmpbtn.sub_button.push(tmpsub);

                        case 60:
                            _context20.next = 37;
                            break;

                        case 62:
                            final.button.push(tmpbtn);
                            console.log(tmpbtn);

                        case 64:
                            _context20.next = 10;
                            break;

                        case 66:
                            think.log(final);
                            //return false;
                            api = new _wechatApi2.default(this.setup.wx_AppID, this.setup.wx_AppSecret);
                            _context20.next = 70;
                            return wxsubmit(api, final);

                        case 70:
                            res = _context20.sent;

                            // let res = true;
                            console.log(res);

                            if (!res) {
                                _context20.next = 76;
                                break;
                            }

                            return _context20.abrupt('return', self.success({ name: '微信菜单生成成功' }));

                        case 76:
                            return _context20.abrupt('return', self.fail('微信菜单生成失败'));

                        case 77:
                        case 'end':
                            return _context20.stop();
                    }
                }
            }, _callee20, this);
        }));

        function asyncwxmenuAction() {
            return _ref22.apply(this, arguments);
        }

        return asyncwxmenuAction;
    }();

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=mpbase2.js.map