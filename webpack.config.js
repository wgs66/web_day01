const path = require('path');
// 引入自动生成html文件插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入自动清空插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 引入vue处理插件
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // 处理警告
  mode: 'development',
  entry: './src/main.js', // 读取入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径 绝对路径
    filename: 'bundle.js', // 输出文件名
  },

  plugins: [
    // 自动生成html文件
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    // 自动清空插件
    new CleanWebpackPlugin(),
    // 引入插件
    new VueLoaderPlugin(),
  ],

  //设置服务自动打开
  devServer: {
    open: true,
    // post: 8888,
  },

  module: {
    rules: [
      // 加载器 处理css文件
      {
        test: /\.css$/, //匹配以css结尾文件
        // 从右往左执行
        use: ['style-loader', 'css-loader'],
      },
      // 加载器 处理less文件
      {
        test: /\.less$/, //匹配以less结尾文件
        // 从右往左执行
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // 图片处理
      // webpack 4
      // {
      //   test: /\.(png|jpg|gif|jpeg)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },

      //webpack 5
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset',
        generator: {
          // 生成器
          filename: '[hash:6][ext]',
        },
      },
      // 处理高版本js文件
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // 处理font
      // webpack 5
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2)$/,
      //   type: 'asset',
      //   generator: {
      //     filename: 'font-[name].[hash:6][ext]',
      //   },
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 1 * 1024,
      //     },
      //   },
      // },

      // webpack 4

      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        generator: {
          filename: 'font-[name].[hash:6][ext]',
        },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1 * 1024,
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },

      //处理vue文件
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
};
