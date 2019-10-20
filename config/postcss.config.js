

// const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssPxToViewport = require('postcss-px-to-viewport');
const postcssWriteSvg = require('postcss-write-svg');
const postcssCssnext = require('postcss-cssnext');
const postcssViewportUnits = require('postcss-viewport-units');
const cssnano = require('cssnano');
const config = [
  // postcssAspectRatioMini({}), // 用来处理元素容器宽高比
  postcssWriteSvg({
  // 用来处理移动端1px的解决方案
      utf8: false,
  }),
  postcssCssnext({}), // 让项目使用CSS未来特性 并对其做兼容性处理
  postcssPxToViewport({
      viewportWidth: 375, // 视窗的宽度，对应我们设计稿的宽度，一般是750
      viewportHeight: 667, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定'px'转换为视窗单位值得小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位,建议使用vw
      selectorBlackList: [
          '.ignore',
          '.hairliness',
      ], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值。
      mediaQuery: false, // 允许在媒体查询中转换`px`
  }),
  postcssViewportUnits({}), // 给CSS的属性添加content的属性 配合viewport-units-buggyfill解决个别手机不支持vw
  cssnano({
      // 压缩和清理CSS代码
      autoprefixer: false,
      'postcss-zindex': false,
  }),
]
module.exports = config