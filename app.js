const webpack  = require('webpack');
const config = require('./webpack.config');

webpack(config).run((stat) => console.log(stat))