const path = require("path");

module.exports = {
    pwa: {
      name: '님 앱이름',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      workboxOptions: {
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    },
    outputDir: path.resolve(__dirname, "./dist"),
  }
  