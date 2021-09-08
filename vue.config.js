const fs = require("fs");

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync("./certs/private.key"),
      cert: fs.readFileSync("./certs/cert.crt")
    },
    public: 'https://localhost:80/'
  },
  transpileDependencies: [
    'vuetify'
  ]
}
