
const path = require("path");
module.exports = {
  publicPath: "./",
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/comm.less')
      ],
    },
  },
  // configureWebpack: {
  //   externals: {
  //     "BMap": "BMap"
  //   }
  // },
  // devServer:{
  //   host:"http://localhost/",
  //   port:8080
  // }

}
