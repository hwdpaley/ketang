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

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path3 = require('path');

var _path4 = _interopRequireDefault(_path3);

var _tar2 = require('tar.gz');

var _tar3 = _interopRequireDefault(_tar2);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

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
        this.tactive = "setup";
    };
    /**
     * 数据库列表
     * @returns {*}
     */


    _class.prototype.indexAction = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
            var list;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.model().query('SHOW TABLE STATUS');

                        case 2:
                            list = _context.sent;

                            // console.log(list)
                            this.meta_title = '备份数据库';
                            this.assign("list", list);

                            return _context.abrupt('return', this.display());

                        case 6:
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

    /**
     * 优化表
     */


    _class.prototype.optimizeAction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
            var list, tables;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            list = void 0;

                            if (!this.isPost()) {
                                _context2.next = 13;
                                break;
                            }

                            tables = this.post('tables');

                            if (!tables) {
                                _context2.next = 10;
                                break;
                            }

                            _context2.next = 6;
                            return this.model().query("OPTIMIZE TABLE " + tables);

                        case 6:
                            list = _context2.sent;
                            return _context2.abrupt('return', this.json(list));

                        case 10:
                            return _context2.abrupt('return', this.fail(88, "请指定要修复的表！"));

                        case 11:
                            _context2.next = 14;
                            break;

                        case 13:
                            return _context2.abrupt('return', this.fail(88, "错误请求"));

                        case 14:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function optimizeAction() {
            return _ref2.apply(this, arguments);
        }

        return optimizeAction;
    }();

    /**
     * 修复表
     * @returns {*}
     */


    _class.prototype.repairAction = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            var list, tables;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            list = void 0;

                            if (!this.isPost()) {
                                _context3.next = 13;
                                break;
                            }

                            tables = this.post("tables");

                            if (!tables) {
                                _context3.next = 10;
                                break;
                            }

                            _context3.next = 6;
                            return this.model().query('REPAIR TABLE ' + tables);

                        case 6:
                            list = _context3.sent;
                            return _context3.abrupt('return', this.json(list));

                        case 10:
                            return _context3.abrupt('return', this.fail(88, "请指定要修复的表！"));

                        case 11:
                            _context3.next = 14;
                            break;

                        case 13:
                            return _context3.abrupt('return', this.fail(88, "请求错误"));

                        case 14:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function repairAction() {
            return _ref3.apply(this, arguments);
        }

        return repairAction;
    }();

    /**
     * 备份数据库
     * @param  String  tables 表名
     * @param  Integer id     表ID
     * @param  Integer start  起始行数
     * @author
     */


    _class.prototype.exportAction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var tables, id, start, paths, config, lock, file, Database, db, tab, table, backup_file, backup_config, _Database, _db, _tab, _lock, _tab2, rate;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            tables = this.param('tables').split(',');
                            id = Number(this.param('id'));
                            start = Number(this.param('start'));

                            if (!(this.isPost() && !think.isEmpty(tables) && think.isArray(tables))) {
                                _context4.next = 31;
                                break;
                            }

                            //console.log(tables)
                            paths = think.RESOURCE_PATH + "/backup/";

                            think.mkdir(paths);
                            //备份配置
                            config = {
                                'path': paths,
                                'part': 20 * 1024 * 1024,
                                'compress': 1,
                                'level': 9

                                //检查是否有正在执行的任务
                            };
                            lock = config.path + "backup.lock";

                            if (!think.isFile(lock)) {
                                _context4.next = 12;
                                break;
                            }

                            return _context4.abrupt('return', this.fail(20, '检测到有一个备份任务正在执行，请稍后再试！'));

                        case 12:
                            //创建锁文件
                            _fs2.default.writeFileSync(lock, new Date());

                        case 13:
                            //检查备份目录是否可写
                            think.isWritable(config.path) || this.fail('备份目录不存在或不可写，请检查后重试！');
                            _context4.next = 16;
                            return this.session('backup_config', config);

                        case 16:

                            //生成备份文件信息
                            file = {
                                'name': new Date().valueOf(),
                                'part': 1
                            };
                            _context4.next = 19;
                            return this.session('backup_file', file);

                        case 19:
                            _context4.next = 21;
                            return this.session('backup_tables', tables);

                        case 21:

                            //创建备份文件
                            Database = think.adapter("database", "mysql");
                            db = new Database(file, config, "export");

                            if (!(false !== db.create())) {
                                _context4.next = 28;
                                break;
                            }

                            tab = { 'id': 0, 'start': 0 };
                            return _context4.abrupt('return', this.json({
                                'info': '初始化成功！',
                                'tables': tables,
                                'tab': tab,
                                'status': 1
                            }));

                        case 28:
                            return _context4.abrupt('return', this.json({
                                'info': "初始化失败，备份文件创建失败！",
                                'status': 0
                            }));

                        case 29:
                            _context4.next = 75;
                            break;

                        case 31:
                            if (!(this.isGet() && think.isNumber(id) && think.isNumber(start))) {
                                _context4.next = 74;
                                break;
                            }

                            _context4.next = 34;
                            return this.session('backup_tables');

                        case 34:
                            table = _context4.sent;
                            _context4.next = 37;
                            return this.session('backup_file');

                        case 37:
                            backup_file = _context4.sent;
                            _context4.next = 40;
                            return this.session('backup_config');

                        case 40:
                            backup_config = _context4.sent;
                            _Database = think.adapter("database", "mysql");
                            _db = new _Database(backup_file, backup_config, 'export');
                            _context4.next = 45;
                            return _db.backup(table[id], start);

                        case 45:
                            start = _context4.sent;

                            if (!(false === start)) {
                                _context4.next = 50;
                                break;
                            }

                            return _context4.abrupt('return', this.fail("备份出错！"));

                        case 50:
                            if (!(0 === start)) {
                                _context4.next = 69;
                                break;
                            }

                            if (!table[++id]) {
                                _context4.next = 56;
                                break;
                            }

                            _tab = { 'id': id, 'start': 0 };
                            return _context4.abrupt('return', this.json({
                                'info': '备份完成！',
                                'tab': _tab,
                                'status': 1
                            }));

                        case 56:
                            _context4.next = 58;
                            return this.session('backup_config');

                        case 58:
                            _lock = _context4.sent;


                            if (think.isFile(_lock.path + 'backup.lock')) {
                                _fs2.default.unlinkSync(_lock.path + 'backup.lock');
                            }
                            _context4.next = 62;
                            return this.session('backup_tables', null);

                        case 62:
                            _context4.next = 64;
                            return this.session('backup_file', null);

                        case 64:
                            _context4.next = 66;
                            return this.session('backup_config', null);

                        case 66:
                            return _context4.abrupt('return', this.json({
                                'info': '备份完成！',
                                'status': 1
                            }));

                        case 67:
                            _context4.next = 72;
                            break;

                        case 69:
                            _tab2 = { 'id': id, 'start': start[0] };
                            rate = Math.floor(100 * (start[0] / start[1]));
                            return _context4.abrupt('return', this.json({
                                'info': "正在备份..." + rate + "%",
                                'tab': _tab2,
                                'status': 1
                            }));

                        case 72:
                            _context4.next = 75;
                            break;

                        case 74:
                            return _context4.abrupt('return', this.fail("参数错误！"));

                        case 75:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function exportAction() {
            return _ref4.apply(this, arguments);
        }

        return exportAction;
    }();

    _class.prototype.importsAction = function importsAction() {

        /**
         * 遍历文件夹，获取所有文件夹里面的文件信息
         * @param path
         * @returns {Array}
         */

        function geFileList(path) {
            var filesList = [];
            readFile(path, filesList);
            return filesList;
        }

        /**
         * 遍历读取文件
         * @param path
         * @param filesList
         */
        function readFile(path, filesList) {
            var files = _fs2.default.readdirSync(path); //需要用到同步读取
            //console.log(files);
            files.forEach(walk);
            function walk(file) {
                var states = _fs2.default.statSync(path + '/' + file);
                if (states.isDirectory()) {
                    var dir = {};
                    dir.dir = file;

                    var _files = _fs2.default.readdirSync(path + '/' + file);
                    var size = 0;
                    _files.forEach(function (v) {
                        var states = _fs2.default.statSync(path + '/' + file + '/' + v);
                        size = size + states.size;
                    });
                    dir.size = size;
                    dir.part = _files.length;
                    dir.ctime = states.ctime;
                    filesList.push(dir);
                }
            }
        }

        var paths = think.RESOURCE_PATH + "/backup/";
        var filesList = geFileList(paths);
        this.assign({
            "fileslist": filesList
        });
        this.active = "admin/database/index";
        this.meta_title = '还原数据库';
        this.display();
    };

    /**
     *删除备份
     * @returns {Promise.<void>}
     */


    _class.prototype.rmdirAction = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            var dir, paths;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            dir = this.get("path");
                            paths = think.RESOURCE_PATH + "/backup/" + dir;
                            //删除目录

                            _context5.next = 4;
                            return think.rmdir(paths);

                        case 4:
                            //删除对应压缩包
                            if (think.isFile(paths + ".tar.gz")) {
                                _fs2.default.unlinkSync(paths + ".tar.gz");
                            }
                            return _context5.abrupt('return', this.json({
                                'info': "删除成功",
                                'dir': dir,
                                'status': 1
                            }));

                        case 6:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function rmdirAction() {
            return _ref5.apply(this, arguments);
        }

        return rmdirAction;
    }();

    _class.prototype.aabbAction = function () {
        var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
            var Database, db;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            Database = think.adapter("database", "mysql");
                            db = new Database("1", "2", "3");
                            _context6.next = 4;
                            return db.backup("vkj_member", 0);

                        case 4:
                            //let dbs = new Database("111","222","333");
                            //dbs.backup("aaa","bbb");
                            this.end();

                        case 5:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        function aabbAction() {
            return _ref6.apply(this, arguments);
        }

        return aabbAction;
    }();

    _class.prototype.targzAction = function targzAction() {
        // Streams
        if (this.isGet()) {
            var paths = think.RESOURCE_PATH;
            var _path = "/backup/";
            var dir = paths + _path + this.get("dir");
            var tar = paths + _path + this.get("dir") + ".tar.gz";
            if (!think.isFile(tar)) {
                //var read = targz().createReadStream(dir);
                //var parse = fs.createWriteStream(tar);
                //read.pipe(parse);
                var self = this;
                (0, _tar3.default)().compress(dir, tar).then(function () {
                    self.success({ 'name': "tar", 'url': self.get("dir") });
                }).catch(function (err) {
                    console.log('Something is wrong ', err.stack);
                });
            } else {
                this.success({ 'name': "download", 'url': this.get("dir") });
            }
        } else if (this.isPost()) {
            var _paths = think.RESOURCE_PATH;
            var _path2 = "/backup/";
            var _tar = _paths + _path2 + this.post("name") + ".tar.gz";
            this.download(_tar);
        }
    };

    _class.prototype.httpedAction = function httpedAction() {

        _http2.default.get("http://www.kancloud.cn/tag/JavaScript", function (res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + (0, _stringify2.default)(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
            });
            res.on('end', function () {
                console.log('No more data in response.');
            });
        }).on('error', function (e) {
            console.log("Got error: " + e.message);
        });
    };
    /**
    * 解锁
    */


    _class.prototype.unlockAction = function unlockAction() {
        var paths = think.RESOURCE_PATH + "/backup/";
        var lock = paths + "backup.lock";
        //检查是否有正在执行的任务
        if (think.isFile(lock)) {
            _fs2.default.unlinkSync(lock);
            return this.success({ name: "解锁成功!" });
        } else {
            //创建锁文件
            return this.success({ name: "无需解锁!" });
        }
    };

    return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=database.js.map