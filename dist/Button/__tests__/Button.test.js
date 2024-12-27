"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("@testing-library/react-native");
const Button_1 = require("../Button");
describe('Button Component', () => {
    it('renders correctly with primary type and default size', () => {
        const { getByText } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Button_1.Button, { text: "Primary Button", type: "primary", onPress: () => { } }));
        const buttonText = getByText('Primary Button');
        expect(buttonText).toBeTruthy();
    });
    it('calls onPress callback when clicked', () => {
        const onPressMock = jest.fn();
        const { getByText } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Button_1.Button, { text: "Clickable Button", type: "primary", onPress: onPressMock }));
        const buttonText = getByText('Clickable Button');
        react_native_1.fireEvent.press(buttonText);
        expect(onPressMock).toHaveBeenCalledTimes(1);
    });
    it('applies the correct styles for large size', () => {
        const { getByTestId } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Button_1.Button, { text: "Large Button", type: "primary", size: "large", onPress: () => { } }));
        const button = getByTestId('button-touchable');
        const buttonStyles = Array.isArray(button.props.style)
            ? Object.assign({}, ...button.props.style)
            : button.props.style;
        expect(buttonStyles).toHaveProperty('width', expect.any(Number));
        expect(buttonStyles.width).toBeGreaterThan(0);
    });
    it('applies the correct styles for secondary type', () => {
        const { getByTestId } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Button_1.Button, { text: "Secondary Button", type: "secondary", onPress: () => { } }));
        const button = getByTestId('button-touchable');
        const buttonStyles = Array.isArray(button.props.style)
            ? Object.assign({}, ...button.props.style)
            : button.props.style;
        expect(buttonStyles).toHaveProperty('backgroundColor', '#033826');
    });
});
