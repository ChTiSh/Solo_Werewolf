const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    
    module:{
        rules:[
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: 
                    [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                      ],
                
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
        title: 'Development',
        template: 'src/index.html'
        })
    ],
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.join(__dirname, 'build'),
        },
        proxy: {
            '/api': 'http://localhost:3000', 
            
        },
        hot: true,
        open: true
    },
}