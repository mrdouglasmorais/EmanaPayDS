"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllSizes = exports.Tertiary = exports.Secondary = exports.Primary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const addon_actions_1 = require("@storybook/addon-actions");
const Button_1 = require("./Button");
const meta = {
    title: 'components/Button',
    component: Button_1.Button,
    args: {
        text: 'Hello World',
        onPress: (0, addon_actions_1.action)('onPress'),
        size: 'medium',
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
        },
        size: {
            control: 'select',
            options: ['large', 'medium', 'small'],
        },
    },
};
exports.default = meta;
exports.Primary = {
    args: {
        text: 'Primary Button',
        type: 'primary',
        size: 'large',
    },
};
exports.Secondary = {
    args: {
        text: 'Secondary Button',
        type: 'secondary',
        size: 'medium',
    },
};
exports.Tertiary = {
    args: {
        text: 'Tertiary Button',
        type: 'tertiary',
        size: 'small',
    },
};
exports.AllSizes = {
    args: {
        text: 'Button with all sizes',
        type: 'primary',
    },
    render: (args) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({}, args, { size: "large", text: "Large Button" })), (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({}, args, { size: "medium", text: "Medium Button" })), (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({}, args, { size: "small", text: "Small Button" }))] })),
};
