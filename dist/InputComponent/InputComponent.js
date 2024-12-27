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
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const Icons_1 = __importDefault(require("../Icons/Icons"));
const react_native_mask_input_1 = __importStar(require("react-native-mask-input"));
const { width } = react_native_1.Dimensions.get('window');
const MaskedInput = ({ label, placeholder = '', type, value, onChangeText, widthType = '80%', }) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const getMask = () => {
        switch (type) {
            case 'phone':
                return react_native_mask_input_1.Masks.BRL_PHONE;
            case 'cpf':
                return react_native_mask_input_1.Masks.BRL_CPF;
            case 'cnpj':
                return react_native_mask_input_1.Masks.BRL_CNPJ;
            default:
                return undefined;
        }
    };
    const renderInput = () => {
        if (type === 'password') {
            return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.passwordContainer, children: [(0, jsx_runtime_1.jsx)(react_native_1.TextInput, { style: styles.input, placeholder: placeholder, placeholderTextColor: "#666666", secureTextEntry: !isPasswordVisible, value: value, onChangeText: onChangeText }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: () => setIsPasswordVisible(!isPasswordVisible), children: (0, jsx_runtime_1.jsx)(Icons_1.default, { name: "eye", size: 32 }) })] }));
        }
        return ((0, jsx_runtime_1.jsx)(react_native_mask_input_1.default, { style: styles.input, placeholder: placeholder, placeholderTextColor: "#666666", mask: getMask(), value: value, onChangeText: onChangeText, keyboardType: type === 'email' ? 'email-address' : 'default' }));
    };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [
            styles.container,
            { width: widthType === '80%' ? width * 0.8 : width * 0.6 },
        ], children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.label, children: label }), renderInput()] }));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    label: {
        fontSize: 14,
        color: '#000',
        marginBottom: 4,
        textAlign: 'left',
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#666666',
        fontSize: 16,
        color: '#000',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#666666',
    },
});
exports.default = MaskedInput;
