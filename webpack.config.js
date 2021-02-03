/*
 * @Author: wufan
 * @Date: 2021-01-24 22:51:28
 * @LastEditors: wufan
 * @LastEditTime: 2021-01-25 22:06:23
 * @Description: Description
 */
 'use strict'

 const path = require('path');

 module.exports = {
     entry: {
        index: './src/index.js',
        search: './src/search.js'
     },
     output: {
         path: path.join(__dirname,'dist'),
         filename: '[name].js'
     },
     mode: 'production',
     module: {
         rules:[
             {
                 test:/.js$/,
                 use: 'babel-loader'
             }
         ]
     }
 }
