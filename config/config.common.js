// const isProd = process.env.NODE_ENV === 'production';

/* 公共配置 */
let configCommon = {
  // assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
  crossOrigin: 'anonymous',
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  distDir: 'next-build', // 构建输出目录，默认 '.next'
  generateEtags: true, // 控制缓存的 etag，默认 true
  pageExtensions: ['tsx', 'jsx', 'js', 'scss'], // pages文件夹下的文件后缀,
};

module.exports = configCommon;
