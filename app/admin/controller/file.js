// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

//import Base from './base.js';

exports.__esModule = true;

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

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _path = require('path');

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$controller$bas) {
    (0, _inherits3.default)(_class, _think$controller$bas);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));
    }

    _class.prototype.__before = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var is_login;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.model("setup").getset();

                        case 2:
                            this.setup = _context.sent;
                            _context.next = 5;
                            return this.islogin();

                        case 5:
                            is_login = _context.sent;

                            if (is_login) {
                                _context.next = 8;
                                break;
                            }

                            return _context.abrupt('return', this.fail("非法操作!"));

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function __before() {
            return _ref.apply(this, arguments);
        }

        return __before;
    }();
    /**
     * 判断是否登录
     * @returns {boolean}
     */


    _class.prototype.islogin = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var user, res;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.session('userInfo');

                        case 2:
                            user = _context2.sent;
                            res = think.isEmpty(user) ? false : user.uid;
                            return _context2.abrupt('return', res);

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function islogin() {
            return _ref2.apply(this, arguments);
        }

        return islogin;
    }();
    /**
     * index action
     * @return {Promise} []
     */


    _class.prototype.indexAction = function indexAction() {
        //auto render template file index_index.html
        return this.display();
    };
    //上传文件


    _class.prototype.uploadAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var file, filepath, basename, data, qiniu, instance, uppic, uploadPath, res;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            file = think.extend({}, this.file('file'));

                            console.log(file);
                            filepath = file.path;
                            basename = path.basename(filepath);
                            data = void 0;
                            //强势插入七牛

                            if (!(this.setup.IS_QINIU == 1)) {
                                _context3.next = 15;
                                break;
                            }

                            qiniu = think.service("qiniu");
                            instance = new qiniu();
                            _context3.next = 10;
                            return instance.uploadpic(filepath, basename);

                        case 10:
                            uppic = _context3.sent;

                            console.log("uppic----------" + (0, _stringify2.default)(uppic));
                            // { fieldName: 'file',
                            //     originalFilename: '2015-07-06_BaiduPlayerNetSetup_100.exe',
                            //     path: '/Users/Arterli/Projects/CmsWing/runtime/upload/EPKRrpZvCsSV73J-7kuDiiEY.exe',
                            //     headers:
                            //     { 'content-disposition': 'form-data; name="file"; filename="2015-07-06_BaiduPlayerNetSetup_100.exe"',
                            //         'content-type': 'application/x-msdownload' },
                            //     size: 1292280 }
                            if (!think.isEmpty(uppic)) {
                                data = {
                                    create_time: new Date().getTime(),
                                    name: file.originalFilename,
                                    savename: basename,
                                    mime: file.headers["content-type"],
                                    size: file.size,
                                    location: 1,
                                    sha1: uppic.hash,
                                    md5: think.md5(basename),
                                    path: ''
                                };
                            }

                            //return false;
                            _context3.next = 20;
                            break;

                        case 15:
                            uploadPath = think.RESOURCE_PATH + '/upload/download/' + dateformat("Y-m-d", new Date().getTime());

                            think.mkdir(uploadPath);
                            fs.renameSync(filepath, uploadPath + '/' + basename);
                            file.path = uploadPath + '/' + basename;
                            if (think.isFile(file.path)) {
                                data = {
                                    savepath: '/upload/download/' + dateformat("Y-m-d", new Date().getTime()) + '/',
                                    create_time: new Date().getTime(),
                                    name: file.originalFilename,
                                    savename: basename,
                                    mime: file.headers["content-type"],
                                    size: file.size,
                                    md5: think.md5(basename),
                                    path: '/upload/download/' + dateformat("Y-m-d", new Date().getTime()) + '/' + basename
                                };
                            }

                        case 20:
                            console.log(data);
                            _context3.next = 23;
                            return this.model("file").data(data).add();

                        case 23:
                            res = _context3.sent;

                            this.json({ id: res, size: file.size, path: data.path });

                        case 25:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function uploadAction() {
            return _ref3.apply(this, arguments);
        }

        return uploadAction;
    }();

    //上传图片


    _class.prototype.uploadpicAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var file, filepath, basename, ret, res, qiniu, instance, uppic, data, uploadPath, _data;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            file = think.extend({}, this.file('file'));
                            filepath = file.path;
                            basename = path.basename(filepath);
                            ret = { 'status': 1, 'info': '上传成功', 'data': "" };
                            res = void 0;
                            //加入七牛接口

                            if (!(this.setup.IS_QINIU == 1)) {
                                _context4.next = 19;
                                break;
                            }

                            qiniu = think.service("qiniu");
                            instance = new qiniu();
                            _context4.next = 10;
                            return instance.uploadpic(filepath, basename);

                        case 10:
                            uppic = _context4.sent;

                            console.log("uploadpic----------" + (0, _stringify2.default)(uppic));

                            if (think.isEmpty(uppic)) {
                                _context4.next = 17;
                                break;
                            }

                            data = {
                                create_time: new Date().getTime(),
                                status: 1,
                                type: 2,
                                sha1: uppic.hash,
                                path: uppic.key

                            };
                            _context4.next = 16;
                            return this.model("picture").data(data).add();

                        case 16:
                            res = _context4.sent;

                        case 17:
                            _context4.next = 31;
                            break;

                        case 19:
                            uploadPath = think.RESOURCE_PATH + '/upload/picture/' + dateformat("Y-m-d", new Date().getTime());

                            think.mkdir(uploadPath);
                            if (think.isFile(filepath)) {
                                fs.renameSync(filepath, uploadPath + '/' + basename);
                            } else {
                                console.log("文件不存在！");
                            }
                            file.path = uploadPath + '/' + basename;

                            if (!think.isFile(file.path)) {
                                _context4.next = 30;
                                break;
                            }

                            _data = {
                                path: '/upload/picture/' + dateformat("Y-m-d", new Date().getTime()) + '/' + basename,
                                create_time: new Date().getTime(),
                                status: 1

                            };
                            _context4.next = 27;
                            return this.model("picture").data(_data).add();

                        case 27:
                            res = _context4.sent;
                            _context4.next = 31;
                            break;

                        case 30:
                            console.log('not exist');

                        case 31:
                            console.log("uploadpicAction--------------" + (0, _stringify2.default)(res));
                            this.json(res);

                        case 33:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function uploadpicAction() {
            return _ref4.apply(this, arguments);
        }

        return uploadpicAction;
    }();
    //上传多图


    _class.prototype.picsAction = function picsAction() {
        var file = think.extend({}, this.file('file'));
        console.log(file);
    };
    //图片选择


    _class.prototype.selectpicAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var pics;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return this.model("picture").limit(2, 15).select();

                        case 2:
                            pics = _context5.sent;

                            this.assign("pics", pics);
                            this.assign("field", { "name": "uploadimg" });
                            this.display();

                        case 6:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function selectpicAction() {
            return _ref5.apply(this, arguments);
        }

        return selectpicAction;
    }();

    //链接选择


    _class.prototype.selecturlAction = function selecturlAction() {
        this.assign("articles", [1, 2, 3, 4, 5, 6]);
        this.display();
    };

    _class.prototype.savenetpicAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var config, fieldName, urlstr, up, upload, info, data, res;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            //抓取远程图片
                            /* 上传配置 */
                            this.config = this.config("ueditor");
                            config = {
                                "pathFormat": this.config['catcherPathFormat'],
                                "maxSize": this.config['catcherMaxSize'],
                                "allowFiles": this.config['catcherAllowFiles'],
                                "oriName": "remote.png"
                            };
                            fieldName = this.config['catcherFieldName'];
                            urlstr = this.post("picurl");
                            up = think.adapter("editor", "ueditor"); //加载名为 ueditor 的 editor Adapter

                            upload = new up(urlstr, config, "remote"); //实例化 Adapter

                            _context6.next = 8;
                            return upload.saveRemote();

                        case 8:
                            info = _context6.sent;

                            console.log(info);
                            // let obj = {"state":"SUCCESS","url":info.url,"size":431521,"title":info.title,"original":info.original,"source":imgUrl};
                            data = {
                                path: info.url,
                                create_time: new Date().getTime(),
                                status: 1
                            };
                            _context6.next = 13;
                            return this.model("picture").data(data).add();

                        case 13:
                            res = _context6.sent;

                            if (!res) {
                                _context6.next = 19;
                                break;
                            }

                            data.id = res;
                            return _context6.abrupt('return', this.json(data));

                        case 19:
                            return _context6.abrupt('return', this.json({ "status": 0 }));

                        case 20:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function savenetpicAction() {
            return _ref6.apply(this, arguments);
        }

        return savenetpicAction;
    }();

    //根据图片id获取图片信息


    _class.prototype.getpicAction = function () {
        var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
            var id, pic;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            id = this.post("id");
                            //let pic = await this.model("picture").where({"id":parseInt(this.post("id"))}).find();

                            _context7.next = 3;
                            return get_cover(id);

                        case 3:
                            pic = _context7.sent;

                            this.end(pic);

                        case 5:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        function getpicAction() {
            return _ref7.apply(this, arguments);
        }

        return getpicAction;
    }();
    //获取七牛token


    _class.prototype.getqiniuuptokenAction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
            var qiniu, instance, key, uptoken;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            qiniu = think.service("qiniu");
                            instance = new qiniu();
                            key = think.uuid();
                            _context8.next = 5;
                            return instance.uploadpic(null, key, true);

                        case 5:
                            uptoken = _context8.sent;

                            this.json({
                                "uptoken": uptoken
                            });

                        case 7:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        function getqiniuuptokenAction() {
            return _ref8.apply(this, arguments);
        }

        return getqiniuuptokenAction;
    }();
    //添加


    _class.prototype.qiniuaddAction = function () {
        var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
            var post, data, res;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            post = this.post();
                            data = {
                                create_time: new Date().getTime(),
                                name: post.key,
                                savename: post.key,
                                mime: post.mime,
                                size: post.size,
                                location: 1,
                                sha1: post.hash,
                                md5: think.md5(post.id)
                                //console.log(data);
                            };
                            _context9.next = 4;
                            return this.model("file").data(data).add();

                        case 4:
                            res = _context9.sent;
                            return _context9.abrupt('return', this.json(res));

                        case 6:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        function qiniuaddAction() {
            return _ref9.apply(this, arguments);
        }

        return qiniuaddAction;
    }();
    //删除七牛资源


    _class.prototype.delqiniufileAction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
            var id, file, qiniu, instance, res;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            id = this.get("id");
                            _context10.next = 3;
                            return this.model("file").find(id);

                        case 3:
                            file = _context10.sent;
                            qiniu = think.service("qiniu");
                            instance = new qiniu();
                            _context10.next = 8;
                            return instance.remove(file.savename);

                        case 8:
                            res = _context10.sent;

                            if (!res) {
                                _context10.next = 14;
                                break;
                            }

                            this.model("file").where({ id: id }).delete();
                            return _context10.abrupt('return', this.success({ name: "删除文件成功!" }));

                        case 14:
                            return _context10.abrupt('return', this.fail("删除文件失败!"));

                        case 15:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        function delqiniufileAction() {
            return _ref10.apply(this, arguments);
        }

        return delqiniufileAction;
    }();

    return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=file.js.map