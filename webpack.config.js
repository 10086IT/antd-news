const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const isPrd = 'production' === process.env.NODE_ENV;
// const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const os = require('os');
const currentCpuLength = os.cpus().length;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    target: ['web', 'es5'],
    entry: ['./src/index.js'],
    output: {
        filename: "js/[name]-[contenthash:4].js",// 输出文件名
        path: path.resolve(__dirname, './bundle'),// 输出路径
        clean: true, // 清除上次输出目录
        chunkFilename: "js/[name]-chunk-[chunkhash:8].js",
        publicPath: isPrd ? './' : 'auto'
        // 静态html 目录 ’/‘ // 支持
        // nigix代理 './' 支持
        // prd './' 错误
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    isPrd ? false : {
                        loader: "thread-loader",
                        // 有同样配置的 loader 会共享一个 worker 池
                        options: {
                            // 产生的 worker 的数量，默认是 (cpu 核心数 - 1)，或者，
                            // 在 require('os').cpus() 是 undefined 时回退至 1
                            workers: currentCpuLength,
                        },
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                        }
                    },
                    isPrd ? false : 'eslint-loader'
                ].filter(Boolean)
            },
            {
                test: /\.(png|jp(e)?g|gif|svg|webp)$/,
                type: 'asset/resource',
                exclude: /node_modules/,
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
            {
                test: /\.(md|MD)$/,
                use: ['raw-loader']
            },
            {
                test: /\.(mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'video',
                            name: '[name].[ext]',
                        }
                    },
                ],
            },
            {
                test: /\.(css|less)$/,
                use: [
                    isPrd ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    },
                    'postcss-loader',
                    'less-loader',
                ]
            }
        ]
    },
    plugins: [
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, './public/favicon.ico'),
        //             to: path.resolve(__dirname, './bundle/favicon.ico')
        //         }
        //     ],
        // }),
        new HtmlWebpackPlugin({
            template: './public/index.html', // 源html
            filename: 'index.html', // 输出名
            inject: 'body', // script位置
            scriptLoading: 'defer', // 异步加载js
        }),
        isPrd && new BundleAnalyzerPlugin(),
        isPrd && new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/chunk[name][hash:4].css'
            // chunkFilename: autoCss,
        })
    ].filter(Boolean),
    mode: isPrd ? 'production' : 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@pages': path.resolve(__dirname, './src/pages'),
            '@components': path.resolve(__dirname, './src/components'),
            '@mock': path.resolve(__dirname, './src/mock'),
            '@common': path.resolve(__dirname, './src/common'),
        }
    },
    devServer: {
        // host: '0.0.0.0',
        host: '127.0.0.1',
        hot: true,
        port: 8080,
        open: true,
        historyApiFallback: true,
        // https: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://127.0.0.1:443', // Server
        //         changeOrigin: true,
        //         pathRewrite: { '^/api': '' }
        //     },
        // }
    },
    devtool: isPrd ? false : 'inline-source-map',
    performance: false,
    optimization: {
        minimize: isPrd,
        minimizer: [new TerserPlugin({
            test: /\.(js|jsx)$/i,
            parallel: true, //多进程
            terserOptions: {
                output: { comments: false, },
                compress: {
                    // drop_console: true //console删除
                }
            },
            extractComments: false, // 剥离注释
        }), new CssMinimizerPlugin(), // 压缩css
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                libs: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 20,
                    name: 'chunk-libs',
                },
                react: {
                    test: /[\\/]node_modules[\\/]react(.*)?[\\/]/,
                    name: 'chunk-react',
                    priority: 50,
                },
                echarts: {
                    test: /[\\/]node_modules[\\/]echarts[\\/]/,
                    name: 'chunk-echarts',
                    priority: 40,
                },
                antd: {
                    test: /[\\/]node_modules[\\/]antd[\\/]/,
                    name: 'chunk-antd',
                    priority: 30,
                },
            },
        },
        runtimeChunk: {
            name: entryPort => `runtime~${entryPort.name}`
        }
    },
};
