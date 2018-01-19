module.exports = {
  entry: {
    components: "./src/index.js"
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]",
    sourcePrefix: "\n"
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "@likethemammal/react-primitives": {
      commonjs: "@likethemammal/react-primitives",
      commonjs2: "@likethemammal/react-primitives",
      amd: "ReactPrimitives",
      root: "ReactPrimitives"
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
