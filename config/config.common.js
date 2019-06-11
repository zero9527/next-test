/* 公共配置 */
let configCommon = {
  distDir: '.next', // 构建输出目录，默认 '.next'
  generateEtags: true, // 控制缓存的 etag，默认 true
  pageExtensions: ['jsx', 'js'], // pages文件夹下的文件后缀
  plugins: {
    // postcss，使用 css 变量
    'postcss-css-variables': {}
  }
};

module.exports = configCommon;