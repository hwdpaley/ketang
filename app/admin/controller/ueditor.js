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

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

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

  _class.prototype.init = function init(http) {
    _think$controller$bas.prototype.init.call(this, http);
  };
  /**
   * index action
   * @return {Promise} []
   */


  _class.prototype.indexAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var action, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              //auto render template file index_index.html
              this.config = this.config("ueditor");
              action = this.get("action");
              //think.log(action);

              result = void 0;
              _context3.t0 = action;
              _context3.next = _context3.t0 === 'config' ? 6 : _context3.t0 === 'uploadimage' ? 8 : _context3.t0 === 'uploadscrawl' ? 8 : _context3.t0 === 'uploadvideo' ? 8 : _context3.t0 === 'uploadfile' ? 8 : _context3.t0 === 'listimage' ? 12 : _context3.t0 === 'listfile' ? 14 : _context3.t0 === 'catchimage' ? 16 : 20;
              break;

            case 6:
              result = this.config;

              return _context3.abrupt('break', 22);

            case 8:
              _context3.next = 10;
              return this.uploads();

            case 10:
              result = _context3.sent;
              return _context3.abrupt('break', 22);

            case 12:
              result = this.uploadlist();
              return _context3.abrupt('break', 22);

            case 14:
              result = this.uploadlist();
              return _context3.abrupt('break', 22);

            case 16:
              _context3.next = 18;
              return this.crawler();

            case 18:
              result = _context3.sent;
              return _context3.abrupt('break', 22);

            case 20:
              result = {
                state: '请求地址出错'
              };

              return _context3.abrupt('break', 22);

            case 22:
              //返回结果
              this.jsonp(result);

            case 23:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function indexAction() {
      return _ref3.apply(this, arguments);
    }

    return indexAction;
  }();

  _class.prototype.uploads = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var action, base64, config, fieldName, file, filepath, basename, qiniu, instance, uppic, up, upload;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              /**
               * 得到上传文件所对应的各个参数,数组结构
               * obj={
               *     "state" : "",          //上传状态，上传成功时必须返回"SUCCESS"
               *     "url" : "",            //返回的地址
               *     "title" : "",          //新文件名
               *     "original" : "",       //原始文件名
               *     "type" : "" ,           //文件类型
               *     "size" : "",           //文件大小
               * }
               */
              action = this.get("action");
              base64 = "upload";
              config = {};
              fieldName = void 0;
              //console.log(setup);

              _context4.t0 = action;
              _context4.next = _context4.t0 === 'uploadimage' ? 7 : _context4.t0 === 'uploadscrawl' ? 10 : _context4.t0 === 'uploadvideo' ? 14 : _context4.t0 === 'uploadfile' ? 17 : 17;
              break;

            case 7:
              config = {
                pathFormat: this.config['imagePathFormat'],
                maxSize: this.config['imageMaxSize'],
                allowFiles: this.config['imageAllowFiles']
              };
              fieldName = this.config['imageFieldName'];
              return _context4.abrupt('break', 20);

            case 10:
              config = {
                "pathFormat": this.config['scrawlPathFormat'],
                "maxSize": this.config['scrawlMaxSize'],
                "allowFiles": this.config['scrawlAllowFiles'],
                "oriName": "scrawl.png"
              };
              fieldName = this.config['scrawlFieldName'];
              base64 = "base64";
              return _context4.abrupt('break', 20);

            case 14:
              config = {
                "pathFormat": this.config['videoPathFormat'],
                "maxSize": this.config['videoMaxSize'],
                "allowFiles": this.config['videoAllowFiles']
              };
              fieldName = this.config['videoFieldName'];
              return _context4.abrupt('break', 20);

            case 17:
              config = {
                "pathFormat": this.config['filePathFormat'],
                "maxSize": this.config['fileMaxSize'],
                "allowFiles": this.config['fileAllowFiles']
              };
              fieldName = this.config['fileFieldName'];
              return _context4.abrupt('break', 20);

            case 20:
              if (!(this.setup.IS_QINIU == 1 && base64 == "upload")) {
                _context4.next = 33;
                break;
              }

              file = think.extend({}, this.file(fieldName));
              // console.log(file);

              filepath = file.path;
              basename = _path2.default.basename(filepath);
              qiniu = think.service("qiniu");
              instance = new qiniu();
              _context4.next = 28;
              return instance.uploadpic(filepath, basename);

            case 28:
              uppic = _context4.sent;

              if (think.isEmpty(uppic)) {
                _context4.next = 31;
                break;
              }

              return _context4.abrupt('return', {
                "state": "SUCCESS",
                "url": '//' + this.setup.QINIU_DOMAIN_NAME + '/' + uppic.key,
                "title": uppic.hash,
                "original": file.originalFilename,
                "type": ".jpg",
                "size": 0
              });

            case 31:
              _context4.next = 36;
              break;

            case 33:
              //return self.uploader(fieldName, config, oriName, size, path, base64);
              up = think.adapter("editor", "ueditor"); //加载名为 ueditor 的 editor Adapter

              upload = new up(fieldName, config, base64, this.http); //实例化 Adapter

              return _context4.abrupt('return', upload.getFileInfo());

            case 36:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function uploads() {
      return _ref4.apply(this, arguments);
    }

    return uploads;
  }();

  //抓取远程图片


  _class.prototype.crawler = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      var config, fieldName, source, list, _iterator, _isArray, _i, _ref6, imgUrl, up, upload, info;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              /* 上传配置 */
              config = {
                "pathFormat": this.config['catcherPathFormat'],
                "maxSize": this.config['catcherMaxSize'],
                "allowFiles": this.config['catcherAllowFiles'],
                "oriName": "remote.png"
              };
              fieldName = this.config['catcherFieldName'];
              source = this.post(fieldName + "[]");

              if (think.isArray(source)) {
                source = source;
              } else {
                source = [source];
              }
              list = [];
              _iterator = source, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

            case 6:
              if (!_isArray) {
                _context5.next = 12;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context5.next = 9;
                break;
              }

              return _context5.abrupt('break', 25);

            case 9:
              _ref6 = _iterator[_i++];
              _context5.next = 16;
              break;

            case 12:
              _i = _iterator.next();

              if (!_i.done) {
                _context5.next = 15;
                break;
              }

              return _context5.abrupt('break', 25);

            case 15:
              _ref6 = _i.value;

            case 16:
              imgUrl = _ref6;
              up = think.adapter("editor", "ueditor"); //加载名为 ueditor 的 editor Adapter

              upload = new up(imgUrl, config, "remote"); //实例化 Adapter

              _context5.next = 21;
              return upload.saveRemote();

            case 21:
              info = _context5.sent;

              //console.log(info);
              list.push({ "state": "SUCCESS", "url": info.url, "size": 431521, "title": info.title, "original": info.original, "source": imgUrl });

            case 23:
              _context5.next = 6;
              break;

            case 25:
              return _context5.abrupt('return', {
                state: !think.isEmpty(list) ? 'SUCCESS' : 'ERROR',
                list: list
              });

            case 26:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function crawler() {
      return _ref5.apply(this, arguments);
    }

    return crawler;
  }();

  /**
   * 获取已上传的文件列表
   */


  _class.prototype.uploadlist = function uploadlist() {
    var allowFiles, listSize, path;
    //判断类型
    switch (this.get("action")) {
      //列出文件
      case 'listfile':
        allowFiles = this.config['fileManagerAllowFiles'];
        listSize = this.config['fileManagerListSize'];
        path = this.config['fileManagerListPath'];
        break;
      //列出图片
      case 'listimage':
      default:
        allowFiles = this.config['imageManagerAllowFiles'];
        listSize = this.config['imageManagerListSize'];
        path = this.config['imageManagerListPath'];
    }
    //allowFiles = allowFiles.join("").replace(/[.]/g,"|").substr(1);
    /* 获取参数 */
    var size = this.get('size') ? this.get('size') : listSize;
    var start = this.get('start') ? this.get('start') : 0;
    var end = parseInt(size) + parseInt(start);
    /* 获取文件列表 */
    path = path.substr(0, path.lastIndexOf("/"));
    var files = this.scanFolder(path).files;
    if (files.length == 0) {
      return {
        "state": "no match file",
        "list": [],
        "start": start,
        "total": files.length
      };
    }
    /* 获取指定范围的列表 */
    var len = files.length;
    var files_n = [];
    for (var i = 0; i < len; i++) {
      var t = files[i].substr(files[i].lastIndexOf(".")).toLocaleLowerCase();
      if (in_array(t, allowFiles)) {
        files_n.push(files[i]);
      }
    }

    var lenn = files_n.length;
    for (var i = Math.min(end, lenn) - 1, list = []; i < lenn && i >= 0 && i >= start; i--) {
      var f = files_n[i];
      list.push({ url: f });
    }

    return {
      "state": "SUCCESS",
      "list": list,
      "start": start,
      "total": files.length
    };
  };
  /**
   * 遍历获取目录下的指定类型的文件
   */


  _class.prototype.scanFolder = function scanFolder(path) {
    var fileList = [],
        folderList = [],
        walk = function walk(path, fileList, folderList) {
      var files = _fs2.default.readdirSync(think.RESOURCE_PATH + "/" + path);
      files.forEach(function (item) {
        var tmpPath = path + '/' + item,
            stats = _fs2.default.statSync(think.RESOURCE_PATH + "/" + tmpPath);

        if (stats.isDirectory()) {
          walk(tmpPath, fileList, folderList);
          folderList.push(tmpPath);
        } else {
          fileList.push(tmpPath);
        }
      });
    };

    walk(path, fileList, folderList);

    console.log('扫描' + path + '成功');

    return {
      'files': fileList,
      'folders': folderList
    };
  };

  return _class;
}(think.controller.base);

exports.default = _class;
//# sourceMappingURL=ueditor.js.map