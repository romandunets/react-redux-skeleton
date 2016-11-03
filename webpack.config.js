const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      host: '0.0.0.0'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'API_HOST': JSON.stringify('http://0.0.0.0:9000')
        }
      })
    ]
};
