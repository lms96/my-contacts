module.exports = (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', process.env.APP_URL)
  next();
}
