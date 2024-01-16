const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin()],
	mode: 'development',
	entry: './src/index.ts',
	output: {
		library: {
			name: 'library-name',
			type: 'umd',
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},

			{test: /\.scss$/, use: [
				{loader: 'style-loader'}, // To inject the result into the DOM as a style block
				{loader: 'css-modules-typescript-loader'}, // To generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
				{loader: 'css-loader', options: {modules: true}}, // To convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
				{loader: 'sass-loader'}, // To convert SASS to CSS
				// NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
			]},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
	},
};
