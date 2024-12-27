"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
// @ts-ignore
const back_svg_1 = __importDefault(require("../assets/icons/back.svg"));
// @ts-ignore
const settings_svg_1 = __importDefault(require("../assets/icons/settings.svg"));
// @ts-ignore
const edit_svg_1 = __importDefault(require("../assets/icons/edit.svg"));
// @ts-ignore
const lock_svg_1 = __importDefault(require("../assets/icons/lock.svg"));
// @ts-ignore
const eye_svg_1 = __importDefault(require("../assets/icons/eye.svg"));
const Icon = ({ name, size = 24, style }) => {
    const icons = {
        back: back_svg_1.default,
        settings: settings_svg_1.default,
        edit: edit_svg_1.default,
        lock: lock_svg_1.default,
        eye: eye_svg_1.default,
    };
    const SvgIcon = icons[name];
    if (!SvgIcon) {
        console.error(`Icon ${name} not found`);
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: style, children: (0, jsx_runtime_1.jsx)(SvgIcon, { width: size, height: size, testID: `${name}-icon` }) }));
};
exports.Icon = Icon;
exports.default = exports.Icon;
