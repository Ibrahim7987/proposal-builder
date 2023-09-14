const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/Index.tsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,    // add |ts
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require.resolve("sass"),
                        },
                    },
                ],
            },
            // {
            //     "test": /\.module\.s(a|c)ss$/,
            //     "use": [
            //         {
            //             "loader": MiniCssExtractPlugin.loader
            //         },
            //         {
            //             "loader": 'css-loader',

            //             /*
            //              * As of css-loader 3, the options have changed
            //              * https://github.com/webpack-contrib/css-loader
            //              */
            //             "options": {
            //                 "modules": {
            //                     "localIdentName": '[folder]__[local]__[hash:base64:5]',
            //                     "exportLocalsConvention": 'camelCase'
            //                 }
            //             }
            //         },
            //         { "loader": "sass-loader" }
            //     ]
            // },
            // {
            //     "test": /\.scss$/,
            //     "exclude": /\.module.(s(a|c)ss)$/,
            //     "use": [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'sass-loader'
            //     ]
            // }
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
        // modulesDirectories: [...],
        extensions: ['.tsx', '.ts', '.jsx', '.js'], // add .tsx, .ts
    },


}