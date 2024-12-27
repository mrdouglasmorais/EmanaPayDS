"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfiniteLoop = exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const SplashScreen_1 = __importDefault(require("./SplashScreen"));
const { width, height } = react_native_1.Dimensions.get('window');
exports.default = {
    title: 'Components/DSSplashScreen',
    component: SplashScreen_1.default,
    argTypes: {
        videoDuration: {
            control: { type: 'number' },
            description: 'Duration of the video in milliseconds',
            defaultValue: 8000,
        },
        onSplashEnd: { action: 'onSplashEnd', description: 'Callback when the splash ends' },
    },
};
const Template = (args) => {
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.container, children: (0, jsx_runtime_1.jsx)(SplashScreen_1.default, Object.assign({}, args)) }));
};
exports.Default = Template.bind({});
exports.Default.args = {
    videoDuration: 8000,
    onSplashEnd: () => console.log('Splash Ended'),
};
exports.InfiniteLoop = Template.bind({});
exports.InfiniteLoop.args = {
    videoDuration: Infinity,
    onSplashEnd: undefined,
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        width,
        height,
        backgroundColor: 'white',
    },
});
