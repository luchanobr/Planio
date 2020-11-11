const path = require('path')

module.exports = {
	entry: {
		index: './src/index.ts',
		perfiles: './src/perfiles.ts',
		swipe: './src/swipe.ts',
		perfil4: './src/perfil4.ts',
		plan: './src/plan.ts',
		recetas: './src/recetas.ts',
		receta: './src/receta.ts',
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: './dist',
		compress: true,
		port: 5000,
	},
}
