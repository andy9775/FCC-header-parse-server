/**
 * Parse out the operating system from the User-Agent string.
 *
 * Regex based on data from:
 * http://www.useragentstring.com/pages/useragentstring.php
 * and should cover most modern browsers.
 *
 * @param  {String} userAgent - User agent request header
 * @return {String} - users operating system
 */
function parseOs(userAgent) {
  var regex = /(Mozilla\/5.0|Opera\/9.80|Mozilla\/4.0|Opera\/12.02)\s(\(.*?\))/;
  return userAgent.match(regex)[2].replace('(', '').replace(')', '');
}

/**
 * Parse out the user's prevered language
 *
 * Regex from: http://stackoverflow.com/a/9943330/2605221
 *
 * @param  {[type]} lang [description]
 * @return {[type]}      [description]
 */
function parseLanguage(lang) {
  var regex = /([A-z]{1,8}(-[A-z]{1,8})?)\s*(;\s*q\s*=\s*(1|0\.[0-9]+))?/;
  return lang.match(regex)[0];
}

/**
 * Handle the request
 *
 * @param  {Request} req - request object
 * @param  {Response} res - response object
 */
function whoami(req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var userAgent = parseOs(req.headers['user-agent']);
  var lang = parseLanguage(req.headers['accept-language']);

  res.send({
    ipaddress: ip,
    language: lang,
    software: userAgent
  });
}

/**
 * Redirect requests to the github project directory
 *
 * @param  {Request} req - request object
 * @param  {Response} res - response object
 */
function redirect(req, res){
  res.redirect('https://github.com/andy9775/FCC-header-parse-server');
}

module.exports = {whoami, redirect};
