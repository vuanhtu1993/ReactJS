const config = {
    entry: './dist/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3000,
    },
    module: {
        rules: [{
            test: /\.(jxs|js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'react', 'stage-0'],
            }
        }]
    }
};
module.exports = config;