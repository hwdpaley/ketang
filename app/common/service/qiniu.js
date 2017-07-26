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

var _qiniu = require('qiniu');

var _qiniu2 = _interopRequireDefault(_qiniu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$service$base) {
    (0, _inherits3.default)(_class, _think$service$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$service$base.apply(this, arguments));
    }

    /**
     * init
     * @return {}         []
     */
    _class.prototype.init = function init() {
        _think$service$base.prototype.init.call(this);
    };

    /**
     * 七牛上传
     * @param filePath 要上传文件的本地路径
     * @param key 上传到七牛后保存的文件名
     * @returns {*}
     */


    _class.prototype.uploadpic = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(filePath, key) {
            var istoken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var setup, bucket, putPolicy, uptoken, token, uploadFile;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            uploadFile = function uploadFile(uptoken, key, localFile) {
                                var deferred = think.defer();
                                var extra = new _qiniu2.default.io.PutExtra();
                                _qiniu2.default.io.putFile(uptoken, key, localFile, extra, function (err, ret) {
                                    if (!err) {
                                        // 上传成功， 处理返回值
                                        console.log(ret.hash, ret.key, ret.persistentId);
                                        deferred.resolve(ret);
                                    } else {
                                        // 上传失败， 处理返回代码
                                        console.log(err);
                                        deferred.resolve(false);
                                    }
                                });
                                return deferred.promise;
                            };

                            uptoken = function uptoken(bucket, key) {
                                var putPolicy = new _qiniu2.default.rs.PutPolicy(bucket + ":" + key);
                                // let putPolicy = new qiniu.rs.PutPolicy2(new policy(bucket+":"+key));
                                return putPolicy.token();
                            };

                            _context.next = 4;
                            return think.cache("setup");

                        case 4:
                            setup = _context.sent;

                            _qiniu2.default.conf.ACCESS_KEY = setup.QINIU_AK;
                            _qiniu2.default.conf.SECRET_KEY = setup.QINIU_SK;
                            bucket = setup.QINIU_BUCKET;
                            //用于前端直传直接返回 token

                            if (!(istoken && filePath == null)) {
                                _context.next = 11;
                                break;
                            }

                            putPolicy = new _qiniu2.default.rs.PutPolicy(bucket);
                            //let putPolicy = new qiniu.rs.PutPolicy2(new policy(bucket));

                            return _context.abrupt('return', putPolicy.token());

                        case 11:
                            token = uptoken(bucket, key);

                            //构造上传函数
                            //noinspection JSAnnotator

                            _context.next = 14;
                            return uploadFile(token, key, filePath);

                        case 14:
                            return _context.abrupt('return', _context.sent);

                        case 15:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function uploadpic(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return uploadpic;
    }();
    //删除资源


    _class.prototype.remove = function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(key) {
            var setup, bucket, delfile;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            delfile = function delfile() {
                                var deferred = think.defer();
                                //构建bucketmanager对象
                                var client = new _qiniu2.default.rs.Client();
                                //删除资源
                                client.remove(bucket, key, function (err, ret) {
                                    if (!err) {
                                        // ok
                                        deferred.resolve(true);
                                    } else {
                                        console.log(err);
                                        deferred.resolve(false);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context2.next = 3;
                            return think.cache("setup");

                        case 3:
                            setup = _context2.sent;

                            _qiniu2.default.conf.ACCESS_KEY = setup.QINIU_AK;
                            _qiniu2.default.conf.SECRET_KEY = setup.QINIU_SK;
                            bucket = setup.QINIU_BUCKET;
                            _context2.next = 9;
                            return delfile();

                        case 9:
                            return _context2.abrupt('return', _context2.sent);

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function remove(_x4) {
            return _ref2.apply(this, arguments);
        }

        return remove;
    }();
    //获取文件信息


    _class.prototype.stat = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(key) {
            var setup, bucket, stat;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            stat = function stat() {
                                var deferred = think.defer();
                                //构建bucketmanager对象
                                var client = new _qiniu2.default.rs.Client();
                                //获取文件信息
                                client.stat(bucket, key, function (err, ret) {
                                    if (!err) {
                                        console.log(ret.hash, ret.fsize, ret.putTime, ret.mimeType);
                                        deferred.resolve(ret);
                                    } else {
                                        console.log(err);
                                        deferred.resolve(err);
                                    }
                                });
                                return deferred.promise;
                            };

                            _context3.next = 3;
                            return think.cache("setup");

                        case 3:
                            setup = _context3.sent;

                            _qiniu2.default.conf.ACCESS_KEY = setup.QINIU_AK;
                            _qiniu2.default.conf.SECRET_KEY = setup.QINIU_SK;
                            bucket = setup.QINIU_BUCKET;
                            _context3.next = 9;
                            return stat();

                        case 9:
                            return _context3.abrupt('return', _context3.sent);

                        case 10:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function stat(_x5) {
            return _ref3.apply(this, arguments);
        }

        return stat;
    }();
    //音视频转码


    _class.prototype.pfop = function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
            var setup, bucket, key, pipeline, fops, saveas_key, opts, PFOP;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return think.cache("setup");

                        case 2:
                            setup = _context4.sent;

                            _qiniu2.default.conf.ACCESS_KEY = setup.QINIU_AK;
                            _qiniu2.default.conf.SECRET_KEY = setup.QINIU_SK;

                            //要转码的文件所在的空间和文件名
                            bucket = setup.QINIU_BUCKET;
                            key = 'thinkjs-create-project.mp4';

                            //转码所使用的队列名称。

                            pipeline = 'abc';

                            //要进行转码的转码操作。

                            fops = "avthumb/mp4/s/640x360/vb/1.25m";

                            //可以对转码后的文件进行使用saveas参数自定义命名，当然也可以不指定文件会默认命名并保存在当前空间

                            saveas_key = _qiniu2.default.util.urlsafeBase64Encode(saved_bucket + ':' + saved_key);

                            fops = fops + '|saveas/' + saveas_key;
                            // console.log(saveas_key);
                            opts = {
                                pipeline: pipleline
                            };
                            PFOP = _qiniu2.default.fop.pfop(bucket, key, fops, opts, function (err, ret) {
                                if (!err) {
                                    console.log(ret);
                                    // 上传成功， 处理返回值
                                    console.log('curl ' + 'http://api.qiniu.com/status/get/prefop?id=' + ret.persistentId);
                                } else {
                                    // 上传失败， 处理返回代码
                                    console.log(err);
                                }
                            });

                        case 13:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function pfop() {
            return _ref4.apply(this, arguments);
        }

        return pfop;
    }();

    _class.prototype.download = function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(key) {
            var setup, url, policy, downloadUrl;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return think.cache("setup");

                        case 2:
                            setup = _context5.sent;

                            _qiniu2.default.conf.ACCESS_KEY = setup.QINIU_AK;
                            _qiniu2.default.conf.SECRET_KEY = setup.QINIU_SK;
                            //构建私有空间的链接
                            url = 'http://' + setup.QINIU_DOMAIN_NAME + '/' + key;
                            policy = new _qiniu2.default.rs.GetPolicy();

                            //生成下载链接url

                            downloadUrl = policy.makeRequest(url);

                            //打印下载的url

                            console.log(downloadUrl);
                            return _context5.abrupt('return', downloadUrl);

                        case 10:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function download(_x6) {
            return _ref5.apply(this, arguments);
        }

        return download;
    }();

    return _class;
}(think.service.base);

exports.default = _class;
//# sourceMappingURL=qiniu.js.map