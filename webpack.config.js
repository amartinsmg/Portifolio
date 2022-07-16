const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  path = require("path"),
  TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "assets/bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "production",
  devServer: {
    static: path.resolve(__dirname, "build"),
    hot: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ejs$/,
        use: ['html-loader', 'template-ejs-loader'],
      },
      {
        test: /\.s(c|a)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".ejs", ".scss", ".sass", ".css"],
  },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/bundle.css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
    })
  ],
};
