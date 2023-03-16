const officialPusherJSVersion = '8.0.1';

module.exports = {
  version: officialPusherJSVersion,
  cdn_http: process.env.CDN_HTTP || 'http://js.pusher.com',
  cdn_https: process.env.CDN_HTTPS || 'https://js.pusher.com',
  dependency_suffix: process.env.MINIFY ? '.min' : ''
};
