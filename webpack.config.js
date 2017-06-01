//Konfiguracja Webpack


const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports ={
   entry: "./js/app.jsx",
   output:{
      path:path.resolve("js"),
      filename:"out.js"
   },
   devServer:        {
       inline:        true,
       contentBase:        './',
       port:        3001
   },
   watch:true,
   module:{
      loaders:[
         {
            test:/\.jsx$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query:{
               presets:[
                  'es2015',
                  'stage-2',
                  'react'
               ]
            }
         },
         {
           test: /\.scss$/,
           loaders: ExtractTextPlugin.extract({
             fallback: 'style-loader',
             //resolve-url-loader may be chained before sass-loader if necessary
             use: ['css-loader', 'resolve-url-loader', 'sass-loader']
           })
         }
      ]
   },
    plugins: [new ExtractTextPlugin('css/main.css')]
}
