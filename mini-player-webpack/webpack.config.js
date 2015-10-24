module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./js/app.js",
    html: "./index.html"
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
    publicPath: '/'
  },

  devtool: "source-map",

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["react-hot", "babel"],
      },
      {
        test: /\.html$/,
        loaders: ["file?name=[name].[ext]"],
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.json$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["file?name=[name].[ext]", "json"]
      },
    ],
  },
}
