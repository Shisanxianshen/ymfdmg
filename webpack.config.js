const path = require("path")
const webpack = require("webpack")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = (env) => {
  return {
    devtool: env.NODE_ENV === "dev" ? "source-map" : "eval",
    entry: "./src/main.js",
    output: {
      filename: "[chunkhash].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath:'/'
    },
    // 配置
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".js", ".json", ".vue"],
    },
    module: {
      rules: [
        // 解析.vue文件
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: (file) =>
            /node_modules/.test(file) && !/\.vue\.js/.test(file),
        },
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"],
        },
        {
          test: /\.less$/,
          use: ["vue-style-loader", "css-loader", "less-loader"],
        },
        // 加载图片
        {
          test: /\.(png|jpg|svg|gif)$/,
          use: [
            {
              loader: "url-loader",
              loader: "file-loader",
              options: {
                limit: 8192,
                esModule: false,
              },
            },
          ],
        },
        // 加载字体
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"],
        },
      ],
    },
    // devServe
    devServer: {
      contentBase: "public",
      compress: true,
      port: 3999,
      disableHostCheck: true,
      stats: "errors-only", //打印日志取消
      historyApiFallback: {
        index: "/index.html", //配置路由history模式
      },
      proxy: {
        "/api": {
          target: "http://192.168.22.39:3011",
          pathRewrite: {"^/api" : ""},
          changeOrigin:true,
        },
      },
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        env: JSON.stringify(env),
      }),
      new HtmlWebpackPlugin({
        title: "dmg的个人网站",
        template: "public/index.html",
        favicon: "public/favicon.ico",
      }),
    ],
  }
}
