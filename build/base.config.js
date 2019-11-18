const path = require('path')

module.exports = {
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'../dist'),//所有输出文件的目标路径
    filename:'bundle.js',
    // publicPath:'dist/', // 输出解析文件的目录
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit时，会将图片编译成base64字符串形式；大于limit时使用file-loader进行加载
              limit:8192,
              name:'img/[name].[hash:8].[ext]' 
              // img：文件要打包到的文件夹
              // name：获取图片原来的名字，放在该位置
              // hash:8：为了防止图片名称冲突，依然使用hash，但是我们只保留8位
              // ext：使用图片原来的扩展名
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env']
            presets: ['es2015']
          }
        }
      }
    ]
  },
  resolve:{
    extensions:['.js', '.css', '.vue'],
    alias:{
      'vue$':'vue/dist/vue.esm.js' // runtime-compiler依赖
    }
  }

}