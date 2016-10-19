module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
