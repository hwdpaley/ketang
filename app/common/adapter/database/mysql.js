// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';
/**
 * base adapter
 */

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

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$adapter$base) {
    (0, _inherits3.default)(_class, _think$adapter$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$adapter$base.apply(this, arguments));
    }

    /**
     * init
     *  @param {Array}  file   [备份或还原的文件信息]
     *  @param {Array}  config [备份配置信息]
     *  @param {String} type   [执行类型，export - 备份数据， import - 还原数据]
     * @return {[]}         []
     */
    _class.prototype.init = function init(file, config, type, http) {
        _think$adapter$base.prototype.init.call(this, http);
        this.file = file;
        this.config = config;
        this.type = type;
    };

    /**
     * 写入初始数据
     * @return boolean true - 写入成功，false - 写入失败
     */


    _class.prototype.create = function create() {
        var backuppath = this.config.path + this.file.name;
        var filenmae = backuppath + '/' + this.file.name + '-' + this.file.part + '.sql';
        think.mkdir(backuppath);

        if (!think.isFile(filenmae)) {
            var db = think.config('db');
            var sql = "-- -----------------------------\n";
            sql += "-- Bieber MySQL Data Transfer \n";
            sql += "-- \n";
            sql += "-- Host     : " + db.host + "\n";
            sql += "-- Port     : " + db.port + "\n";
            sql += "-- Database : " + db.name + "\n";
            sql += "-- \n";
            sql += "-- Part : #" + this['part'] + "\n";
            sql += "-- Date : " + times(new Date(), "s") + "\n";
            sql += "-- -----------------------------\n\n";
            sql += "SET FOREIGN_KEY_CHECKS = 0;\n\n";
            var filesql = _fs2.default.appendFileSync(filenmae, sql);
            if (filesql == undefined) {
                return true;
            } else {
                return false;
            }
        }
    };

    /**
     * 写入sql语句
     * @param {String} sql [要写入的SQL语句]
     */


    _class.prototype.write = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(sql) {
            var size, backuppath, filenmae, states, http, aa;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            size = sql.length;
                            //console.log(size)

                            backuppath = this.config.path + this.file.name;
                            filenmae = backuppath + '/' + this.file.name + '-' + this.file.part + '.sql';
                            // console.log(filenmae)

                            states = _fs2.default.statSync(filenmae);

                            this.size = states.size + size;
                            //console.log(this.size+"-"+this.config.part) ;

                            if (!(this.size > this.config.part)) {
                                _context.next = 11;
                                break;
                            }

                            //分卷

                            this.file.part++;
                            this.create();
                            http = this.http;
                            //think.session(http);

                            _context.next = 11;
                            return http.session('backup_file', this.file);

                        case 11:
                            aa = _fs2.default.appendFileSync(filenmae, sql);

                            //console.log(aa);
                            //TODO

                        case 12:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function write(_x) {
            return _ref.apply(this, arguments);
        }

        return write;
    }();

    /**
     * 备份表结构
     * @param  {String}  table [表名]
     * @param  {Integer} start [起始行数]
     * @return {Boolean}        false - [备份失败]
     */


    _class.prototype.backup = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(table, start) {
            var _this2 = this;

            var db, _result, sql, result, count, _sql;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            //数据库对象
                            //console.log(think.config('db'))
                            db = think.model('mysql', think.config('db'));
                            //备份表结构

                            if (!(0 == start)) {
                                _context2.next = 12;
                                break;
                            }

                            _context2.next = 4;
                            return db.query("SHOW CREATE TABLE " + table);

                        case 4:
                            _result = _context2.sent;

                            //console.log(result);
                            sql = "\n";

                            sql += "-- -----------------------------\n";
                            sql += "-- Table structure for `" + table + "`\n";
                            sql += "-- -----------------------------\n";
                            sql += "DROP TABLE IF EXISTS `" + table + "`;\n";
                            sql += trim(_result[0]['Create Table']) + ";\n\n";
                            //console.log(sql);
                            this.write(sql);
                            //if(false === this.write(sql)){
                            //  return false;
                            //}

                        case 12:
                            _context2.next = 14;
                            return db.query("SELECT COUNT(*) AS count FROM " + table);

                        case 14:
                            result = _context2.sent;
                            count = result[0].count;
                            //console.log(count);
                            //备份表数据

                            if (!count) {
                                _context2.next = 24;
                                break;
                            }

                            //写入数据注释
                            if (0 == start) {
                                _sql = "-- -----------------------------\n";

                                _sql += "-- Records of `" + table + "`\n";
                                _sql += "-- -----------------------------\n";
                                this.write(_sql);
                                //console.log(sql);
                            }

                            //备份数据记录
                            _context2.next = 20;
                            return db.query("SELECT * FROM " + table + " LIMIT " + start + " , 1000");

                        case 20:
                            result = _context2.sent;

                            result.forEach(function (row) {
                                //console.log(obj_values(row).join("', '"))
                                var sql = "INSERT INTO `" + table + "` VALUES ('" + obj_values(row).join("', '") + "');\n";
                                _this2.write(sql);
                                //console.log(sql);
                                //if(false === this.write(sql)){
                                //  return false;
                                //}
                            });
                            //还有更多数据

                            if (!(count > start + 1000)) {
                                _context2.next = 24;
                                break;
                            }

                            return _context2.abrupt('return', [start + 1000, count]);

                        case 24:
                            return _context2.abrupt('return', 0);

                        case 25:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function backup(_x2, _x3) {
            return _ref2.apply(this, arguments);
        }

        return backup;
    }();

    return _class;
}(think.adapter.base);

exports.default = _class;
//# sourceMappingURL=mysql.js.map