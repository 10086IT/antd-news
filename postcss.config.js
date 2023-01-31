module.exports = {
  plugins: {
    'autoprefixer': {
      'overrideBrowserslist': [
        "defaults",
        "Android 4.1",
        "iOS 7.1",
        "ie>=8",
      ]
    },
    // "postcss-px-to-viewport": {
    //   unitToConvert: "px", // 需要转换的单位，默认为"px"
    //   unitPrecision: 4, // 单位转换后保留的精度
    //   propList: ["*"], //(Array) 能转化为vw的属性列表
    //   viewportUnit: "vw", // 希望使用的视口单位
    //   fontViewportUnit: "vw", //  字体使用的视口单位
    //   selectorBlackList: [], //  需要忽略的CSS选择器
    //   minPixelValue: 1,//最小的转换数值
    //   viewportWidth: 1024,
    //   // viewportHeight: 678,
    //   mediaQuery: true,
    //   exclude: [],
    //   landscape: false
    // }

    "postcss-plugin-px2rem": {
      rootValue: 30,
      unitPrecision: 5,
      propList:["*"],
      // propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      // exclude: ['antd'],
    }
  },
};
