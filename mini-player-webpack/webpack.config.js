module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./app.js",
    html: "./index.html"
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
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
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.json$/,
        loaders: ["file?name=[name].[ext]", "json"]
      },
    ],
  },
}
