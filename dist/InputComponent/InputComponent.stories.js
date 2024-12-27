"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordInput = exports.CNPJInput = exports.CPFInput = exports.PhoneInput = exports.EmailInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const InputComponent_1 = __importDefault(require("./InputComponent"));
const meta = {
    title: 'Components/MaskedInput',
    component: InputComponent_1.default,
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
        type: 'email',
        value: '',
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['email', 'phone', 'cpf', 'cnpj', 'password'],
        },
        widthType: {
            control: 'select',
            options: ['80%', '60%'],
        },
    },
};
exports.default = meta;
const Template = ({ label, placeholder, type, widthType }) => {
    const [value, setValue] = (0, react_1.useState)('');
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.container, children: (0, jsx_runtime_1.jsx)(InputComponent_1.default, { label: label, placeholder: placeholder, type: type, widthType: widthType, value: value, onChangeText: setValue }) }));
};
exports.EmailInput = {
    render: Template,
    args: {
        label: 'Email',
        placeholder: 'email@email.com',
        type: 'email',
        widthType: '80%',
    },
};
exports.PhoneInput = {
    render: Template,
    args: {
        label: 'Phone',
        placeholder: '(11) 99999.9999',
        type: 'phone',
        widthType: '80%',
    },
};
exports.CPFInput = {
    render: Template,
    args: {
        label: 'CPF',
        placeholder: '999.999.999-99',
        type: 'cpf',
        widthType: '60%',
    },
};
exports.CNPJInput = {
    render: Template,
    args: {
        label: 'CNPJ',
        placeholder: '99.999.999/9999-99',
        type: 'cnpj',
        widthType: '60%',
    },
};
exports.PasswordInput = {
    render: Template,
    args: {
        label: 'Password',
        placeholder: '****',
        type: 'password',
        widthType: '80%',
    },
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
});
