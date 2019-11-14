/* 公共配置 */
let configCommon = {
  distDir: 'next-build', // 构建输出目录，默认 '.next'
  generateEtags: true, // 控制缓存的 etag，默认 true
  pageExtensions: ['tsx', 'jsx', 'js', 'scss'], // pages文件夹下的文件后缀,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
};

module.exports = configCommon;
