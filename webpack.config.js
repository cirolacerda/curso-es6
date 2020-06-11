module.exports = {
    entry: './main.js',
    output: {
        path: __dirname, 
        filename: 'bunble.js',
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }

            }
        ],
    },
};