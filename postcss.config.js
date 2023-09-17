// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 标准视口宽度，一般情况下是 375
      viewportWidth: 375
    }
  }
}
