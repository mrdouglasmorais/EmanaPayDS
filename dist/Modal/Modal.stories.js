"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyContent = exports.WithoutCloseButton = exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const Modal_1 = __importDefault(require("./Modal"));
exports.default = {
    title: 'Components/DSModal',
    component: Modal_1.default,
    argTypes: {
        visible: { control: 'boolean' },
        title: { control: 'text' },
        content: { control: 'text' },
        showCloseButton: { control: 'boolean' },
        buttonLabel: { control: 'text' },
        onClose: { action: 'closed' },
        onButtonPress: { action: 'button pressed' },
    },
};
const Template = (args) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' }, children: [(0, jsx_runtime_1.jsx)(react_native_1.Button, { title: "Open Modal", onPress: () => setModalVisible(true) }), (0, jsx_runtime_1.jsx)(Modal_1.default, Object.assign({}, args, { visible: modalVisible, onClose: () => {
                    var _a;
                    (_a = args.onClose) === null || _a === void 0 ? void 0 : _a.call(args);
                    setModalVisible(false);
                } }))] }));
};
exports.Default = Template.bind({});
exports.Default.args = {
    visible: false,
    title: 'Default Modal Title',
    content: 'This is the default content of the modal.',
    showCloseButton: true,
    buttonLabel: 'Confirm',
    onButtonPress: () => console.log('Button Pressed'),
};
exports.WithoutCloseButton = Template.bind({});
exports.WithoutCloseButton.args = {
    visible: false,
    title: 'No Close Button',
    content: 'This modal does not have a close button.',
    showCloseButton: false,
    buttonLabel: 'Proceed',
};
exports.OnlyContent = Template.bind({});
exports.OnlyContent.args = {
    visible: false,
    content: 'This modal only contains text without additional buttons.',
    showCloseButton: false,
};
