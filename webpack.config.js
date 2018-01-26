const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry:{
        home:'./src/assets/js/home.js',
        // contact:'./src/assets/js/contact.js'
    },
    output:{
        path:__dirname+'/dist',
        filename:'[name].bundle.js'
    },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?sourceMap', 'postcss-loader?sourceMap','sass-loader?sourceMap']
        })
      },
      {
        test:/\.css$/,
        use:[{loader:'style-loader'},{loader:'css-loader'}],
      },
        {
            test:/\.js$/,
            exclude:/(node_modules|bower_components)/,
            use:[{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }}]
            },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    // new webpack.optimize.CommonsChunkPlugin({name:'shared',filename:'shared.js'})
  ],
  watch:true,
  devtool:'source-map'
}

