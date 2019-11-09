const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/api/v1",
    proxy({
      target: "https://wangda.andedu.net",
      changeOrigin: true,
      secure: true
    })
  );
};
