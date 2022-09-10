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
    assetModuleFilename: "assets/[hash][ext]",
  },
  mode: "production",
  devServer: {
    static: path.resolve(__dirname, "build"),
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ejs$/i,
        use: ["html-loader", "template-ejs-loader"],
      },
      {
        test: /\.s(c|a)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".ejs", ".scss", ".css"],
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
    }),
  ],
};
