const path = require('path')

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/client/svg/'),
  // require.resolve('antd').replace(/index\.js$/, ''),
]

export default {
  "entry": 'src/client/index.js',
  "svgSpriteLoaderDirs": svgSpriteDirs,
  "disableCSSModules": false,
  "publicPath": "/",
  "autoprefixer": {
    "browsers": [
      "iOS >= 8", "Android >= 4"
    ]
  },
  // "proxy": {
    // "/api": {
      // "target": "http://localhost:6000",
      // "changeOrigin": true
    // }
  // },
  "extraBabelPlugins": [
    "transform-runtime",
    // ["import", { "libraryName": "antd", "style": true }]
  ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  }
}
