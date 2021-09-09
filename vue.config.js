const fs = require("fs");
const zlib = require('zlib');

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync("./certs/private.key"),
      cert: fs.readFileSync("./certs/cert.crt")
    },
    public: 'https://localhost:80/'
  },
  pluginOptions: {
    compression:{
      brotli: {
        filename: '[file].br[query]',
        algorithm: 'brotliCompress',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        },
        minRatio: 0.8,
      },
      gzip: {
        filename: '[file].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8,
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
