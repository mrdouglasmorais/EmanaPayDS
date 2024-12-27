"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const { width: screenWidth } = react_native_1.Dimensions.get('window');
const styles = react_native_1.StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 25,
        alignSelf: 'center',
        flexGrow: 0,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: '500',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: '#F45622',
    },
    secondary: {
        backgroundColor: '#033826',
    },
    tertiary: {
        backgroundColor: '#D12178',
    },
});
const Button = ({ text, onPress, type, size = 'medium', marginVertical = 8 }) => {
    let buttonStyle;
    let buttonWidth;
    switch (type) {
        case 'primary':
            buttonStyle = styles.primary;
            break;
        case 'secondary':
            buttonStyle = styles.secondary;
            break;
        case 'tertiary':
            buttonStyle = styles.tertiary;
            break;
        default:
            buttonStyle = styles.primary;
            break;
    }
    switch (size) {
        case 'large':
            buttonWidth = screenWidth * 0.8;
            break;
        case 'medium':
            buttonWidth = screenWidth * 0.6;
            break;
        case 'small':
            buttonWidth = screenWidth * 0.3;
            break;
        default:
            buttonWidth = screenWidth * 0.6;
            break;
    }
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.buttonContainer, { marginVertical }], children: (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { testID: "button-touchable", style: [styles.button, buttonStyle, { width: buttonWidth }], onPress: onPress, activeOpacity: 0.8, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.buttonText, children: text }) }) }));
};
exports.Button = Button;
