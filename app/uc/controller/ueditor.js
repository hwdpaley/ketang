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

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

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


  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var action, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //auto render template file index_index.html
              this.config = this.config("ueditor");
              action = this.get("action");

              think.log(action);
              result = void 0;
              _context.t0 = action;
              _context.next = _context.t0 === 'config' ? 7 : _context.t0 === 'uploadimage' ? 9 : _context.t0 === 'uploadscrawl' ? 9 : _context.t0 === 'uploadvideo' ? 9 : _context.t0 === 'uploadfile' ? 9 : _context.t0 === 'listimage' ? 13 : _context.t0 === 'listfile' ? 15 : _context.t0 === 'catchimage' ? 17 : 21;
              break;

            case 7:
              result = this.config;

              return _context.abrupt('break', 23);

            case 9:
              _context.next = 11;
              return this.uploads();

            case 11:
              result = _context.sent;
              return _context.abrupt('break', 23);

            case 13:
              result = this.uploadlist();
              return _context.abrupt('break', 23);

            case 15:
              result = this.uploadlist();
              return _context.abrupt('break', 23);

            case 17:
              _context.next = 19;
              return this.crawler();

            case 19:
              result = _context.sent;
              return _context.abrupt('break', 23);

            case 21:
              result = {
                state: '请求地址出错'
              };

              return _context.abrupt('break', 23);

            case 23:
              //返回结果
              this.jsonp(result);

            case 24:
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

  _class.prototype.uploads = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var action, base64, config, fieldName, file, filepath, basename, qiniu, instance, uppic, up, upload;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
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

              _context2.t0 = action;
              _context2.next = _context2.t0 === 'uploadimage' ? 7 : _context2.t0 === 'uploadscrawl' ? 10 : _context2.t0 === 'uploadvideo' ? 14 : _context2.t0 === 'uploadfile' ? 17 : 17;
              break;

            case 7:
              config = {
                pathFormat: this.config['imagePathFormat'],
                maxSize: this.config['imageMaxSize'],
                allowFiles: this.config['imageAllowFiles']
              };
              fieldName = this.config['imageFieldName'];
              return _context2.abrupt('break', 20);

            case 10:
              config = {
                "pathFormat": this.config['scrawlPathFormat'],
                "maxSize": this.config['scrawlMaxSize'],
                "allowFiles": this.config['scrawlAllowFiles'],
                "oriName": "scrawl.png"
              };
              fieldName = this.config['scrawlFieldName'];
              base64 = "base64";
              return _context2.abrupt('break', 20);

            case 14:
              config = {
                "pathFormat": this.config['videoPathFormat'],
                "maxSize": this.config['videoMaxSize'],
                "allowFiles": this.config['videoAllowFiles']
              };
              fieldName = this.config['videoFieldName'];
              return _context2.abrupt('break', 20);

            case 17:
              config = {
                "pathFormat": this.config['filePathFormat'],
                "maxSize": this.config['fileMaxSize'],
                "allowFiles": this.config['fileAllowFiles']
              };
              fieldName = this.config['fileFieldName'];
              return _context2.abrupt('break', 20);

            case 20:
              if (!(this.setup.IS_QINIU == 1 && base64 == "upload")) {
                _context2.next = 33;
                break;
              }

              file = think.extend({}, this.file(fieldName));
              // console.log(file);

              filepath = file.path;
              basename = _path2.default.basename(filepath);
              qiniu = think.service("qiniu");
              instance = new qiniu();
              _context2.next = 28;
              return instance.uploadpic(filepath, basename);

            case 28:
              uppic = _context2.sent;

              if (think.isEmpty(uppic)) {
                _context2.next = 31;
                break;
              }

              return _context2.abrupt('return', {
                "state": "SUCCESS",
                "url": '//' + this.setup.QINIU_DOMAIN_NAME + '/' + uppic.key,
                "title": uppic.hash,
                "original": file.originalFilename,
                "type": ".jpg",
                "size": 0
              });

            case 31:
              _context2.next = 36;
              break;

            case 33:
              //return self.uploader(fieldName, config, oriName, size, path, base64);
              up = think.adapter("editor", "ueditor"); //加载名为 ueditor 的 editor Adapter

              upload = new up(fieldName, config, base64, this.http); //实例化 Adapter

              return _context2.abrupt('return', upload.getFileInfo());

            case 36:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function uploads() {
      return _ref2.apply(this, arguments);
    }

    return uploads;
  }();

  //抓取远程图片


  _class.prototype.crawler = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var config, fieldName, source, list, _iterator, _isArray, _i, _ref4, imgUrl, up, upload, info;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
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
                _context3.next = 12;
                break;
              }

              if (!(_i >= _iterator.length)) {
                _context3.next = 9;
                break;
              }

              return _context3.abrupt('break', 25);

            case 9:
              _ref4 = _iterator[_i++];
              _context3.next = 16;
              break;

            case 12:
              _i = _iterator.next();

              if (!_i.done) {
                _context3.next = 15;
                break;
              }

              return _context3.abrupt('break', 25);

            case 15:
              _ref4 = _i.value;

            case 16:
              imgUrl = _ref4;
              up = think.adapter("editor", "ueditor"); //加载名为 ueditor 的 editor Adapter

              upload = new up(imgUrl, config, "remote"); //实例化 Adapter

              _context3.next = 21;
              return upload.saveRemote();

            case 21:
              info = _context3.sent;

              //console.log(info);
              list.push({ "state": "SUCCESS", "url": info.url, "size": 431521, "title": info.title, "original": info.original, "source": imgUrl });

            case 23:
              _context3.next = 6;
              break;

            case 25:
              return _context3.abrupt('return', {
                state: !think.isEmpty(list) ? 'SUCCESS' : 'ERROR',
                list: list
              });

            case 26:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function crawler() {
      return _ref3.apply(this, arguments);
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
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=ueditor.js.map