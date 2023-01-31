module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["plugin:react/recommended", "eslint:recommended",],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",

    ],
    "rules": {
        "no-var": "error", // 不允许使用var
        "global-require": ["off"], // 允许使用require
        "react/display-name": "off", // 允许匿名导出组件
        "react/prop-types": ["off"], // 类型检测
        "no-unused-vars": ["warn"] // 未定义的变量检测
    },
    settings: {
        react: {
            version: "detect" // 自动检测react版本号
        }
    }
}
