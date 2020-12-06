/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	entry: {
		index: './src/index.ts',
		perfiles: './src/perfiles.ts',
		swipe: './src/swipe.ts',
		perfil4: './src/perfil4.ts',
		perfilT: './src/perfilT.ts',
		plan: './src/plan.ts',
		recetas: './src/recetas.ts',
		receta: './src/receta.ts',
		reemplazo: './src/reemplazo.ts',
		acce: './src/acce.ts',
	},
	devtool: 'eval-cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: 'ts-loader',
					options: {
						transpileOnly: true,
					},
				},
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
		pathinfo: false,
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	devServer: {
		contentBase: './dist',
		compress: true,
		port: 5000,
	},
}
