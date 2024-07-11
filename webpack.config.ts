import * as nodeExternals from 'webpack-node-externals';
import { RunScriptWebpackPlugin } from 'run-script-webpack-plugin';
import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import { join } from 'node:path';

type Env = Record<string, unknown>;
type Argv = {
  mode?: 'production' | 'development' | 'none';
  [key: string]: string;
};

export default (env: Env, argv: Argv): Configuration => ({
  entry: ['webpack/hot/poll?100', './src/main.ts'],
  target: 'node',
  externals: [
    nodeExternals({
      allowlist: ['webpack/hot/poll?100'],
    }),
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new RunScriptWebpackPlugin({ name: 'server.js', autoRestart: false }),
  ],
  mode: argv.mode,
  devtool: argv.mode === 'production' ? 'source-map' : 'eval-source-map',
  output: {
    clean: true,
    path: join(__dirname, 'dist'),
    filename: 'server.js',
  },
});
