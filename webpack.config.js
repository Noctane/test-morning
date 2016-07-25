module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  } 
}
