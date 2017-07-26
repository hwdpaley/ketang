'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crypto = require('crypto');
var request = require('request');
var fs = require('fs');
var debug = require('debug')('jswechat:jssdk');

function JSSDK(appId, appSecret) {
    this.appId = appId;
    this.appSecret = appSecret;
}

JSSDK.prototype = {
    setAppid: function setAppid(appId, appSecret) {
        this.appId = appId;
        this.appSecret = appSecret;
    },
    getSignPackage: function getSignPackage(url, done) {
        var instance = this;
        console.log("jssdk----url-------------" + url);
        this.getJsApiTicket(function (err, jsApiTicket) {
            if (err) {
                return done(err);
            }

            var nonceStr = instance.createNonceStr();
            var timestamp = Math.round(Date.now() / 1000);

            // 生成签名
            var rawString = 'jsapi_ticket=' + jsApiTicket + '&noncestr=' + nonceStr + '&timestamp=' + timestamp + '&url=' + url;
            var hash = crypto.createHash('sha1');
            var signature = hash.update(rawString).digest('hex');

            done(null, {
                timestamp: timestamp,
                url: url,
                signature: signature,
                rawString: rawString,
                nonceStr: nonceStr,
                appId: instance.appId
            });
        });
    },

    getJsApiTicket: function getJsApiTicket(done) {
        var cacheFile = '.jsapiticket.json';
        var intance = this;
        var data = intance.readCacheFile(cacheFile);
        var time = Math.round(Date.now() / 1000);

        if (typeof data.expireTime === 'undefined' || data.expireTime < time) {
            debug('getJsApiTicket: from server');
            intance.getAccessToken(function (error, accessToken) {
                if (error) {
                    debug('getJsApiTicket.token.error:', error);
                    return done(error, null);
                }

                var url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=' + accessToken;
                request.get(url, function (err, res, body) {
                    if (err) {
                        debug('getJsApiTicket.request.error:', err, url);
                        return done(err, null);
                    }

                    debug('getJsApiTicket.request.body:', body);

                    try {
                        var _data = JSON.parse(body);

                        intance.writeCacheFile(cacheFile, {
                            expireTime: Math.round(Date.now() / 1000) + 7200,
                            jsApiTicket: _data.ticket
                        });

                        done(null, _data.ticket);
                    } catch (e) {
                        debug('getJsApiTicket.parse.error:', e, url);
                        done(e, null);
                    }
                });
            });
        } else {
            debug('getJsApiTicket: from cache');
            done(null, data.jsApiTicket);
        }
    },

    getAccessToken: function getAccessToken(done) {
        var cacheFile = '.accesstoken.json';
        var intance = this;
        var data = intance.readCacheFile(cacheFile);
        var time = Math.round(Date.now() / 1000);

        if (typeof data.expireTime === 'undefined' || data.expireTime < time) {
            debug('getAccessToken: from server');
            var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + this.appId + '&secret=' + this.appSecret;
            request.get(url, function (err, res, body) {
                if (err) {
                    debug('getAccessToken.request.error:', err, url);
                    return done(err, null);
                }

                debug('getAccessToken.request.body:', body);

                try {
                    var _data2 = JSON.parse(body);

                    intance.writeCacheFile(cacheFile, {
                        expireTime: Math.round(Date.now() / 1000) + 7200,
                        accessToken: _data2.access_token
                    });

                    done(null, _data2.access_token);
                } catch (e) {
                    debug('getAccessToken.parse.error:', e, url);
                    done(e, null);
                }
            });
        } else {
            debug('getAccessToken: from cache');
            done(null, data.accessToken);
        }
    },

    createNonceStr: function createNonceStr() {
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var length = chars.length;
        var str = '';
        for (var i = 0; i < length; i++) {
            str += chars.substr(Math.round(Math.random() * length), 1);
        }
        return str;
    },

    // 从文件里面读取缓存
    readCacheFile: function readCacheFile(filename) {
        try {
            return JSON.parse(fs.readFileSync(filename));
        } catch (e) {
            debug('read file %s failed: %s', filename, e);
        }

        return {};
    },

    // 往文件里面写缓存
    writeCacheFile: function writeCacheFile(filename, data) {
        return fs.writeFileSync(filename, (0, _stringify2.default)(data));
    }
};

var jssdk = new JSSDK('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
module.exports = jssdk;

// debug(jssdk.createNonceStr());
// debug(jssdk.createNonceStr());
//
// jssdk.getAccessToken(function (err, accessToken) {
//     console.log(arguments);
// });
//
// jssdk.getJsApiTicket(function (err, accessToken) {
//     console.log(arguments);
// });
//
// jssdk.getSignPackage('http://120.27.106.168/wechat/hello', function (err, accessToken) {
//     console.log(arguments);
// });
//
//# sourceMappingURL=jssdk.js.map