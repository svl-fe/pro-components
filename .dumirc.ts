import { defineConfig } from 'dumi';
import theme from './theme';

export default defineConfig({
  title: 'pro-components',
  // favicon:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  publicPath: '/pro-components/',
  base: '/pro-components',
  // mode: 'site',
  theme,
  svgr: {},
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
  ],
  // more config: https://d.umijs.org/config
});
