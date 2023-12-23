import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md

  // esm: { output: 'dist' },
  // cjs: {
  //   platform: 'browser',
  // },
  esm: {
    transformer: 'babel',
    alias: { 'antd/lib': 'antd/es' },
    output: 'es',
  },
  umd: {
    output: 'dist',
  },
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
  ],
});
