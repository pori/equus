const path = require('path');

module.exports = {
    entry: './lib/index.js',
    output: {
	path: path.join(__dirname, 'dist'),
	filename: 'equus.js'
    },
    module: {
	loaders: [
	    {
		test: path.join(__dirname, 'lib'),
		loader: 'babel-loader',
		query: {
		    presets: 'es2015'
		}
	    }
	]
    }
};
