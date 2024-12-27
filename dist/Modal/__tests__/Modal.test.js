"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("@testing-library/react-native");
const Modal_1 = __importDefault(require("../Modal"));
describe('ModalDS Component', () => {
    const defaultProps = {
        visible: true,
        onClose: jest.fn(),
        content: 'This is a test content',
    };
    it('renders correctly with content', () => {
        const { getByText } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Modal_1.default, Object.assign({}, defaultProps)));
        expect(getByText('This is a test content')).toBeTruthy();
    });
    it('renders the title if provided', () => {
        const { getByText } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Modal_1.default, Object.assign({}, defaultProps, { title: "Test Title" })));
        expect(getByText('Test Title')).toBeTruthy();
    });
    it('renders the close button if `showCloseButton` is true', () => {
        const { getByText } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Modal_1.default, Object.assign({}, defaultProps, { showCloseButton: true })));
        expect(getByText('×')).toBeTruthy();
    });
    it('does not render the close button if `showCloseButton` is false', () => {
        const { queryByText } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Modal_1.default, Object.assign({}, defaultProps, { showCloseButton: false })));
        expect(queryByText('×')).toBeNull();
    });
    it('calls `onClose` when the close button is pressed', () => {
        const { getByText } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Modal_1.default, Object.assign({}, defaultProps)));
        react_native_1.fireEvent.press(getByText('×'));
        expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });
    it('renders the action button if `buttonLabel` and `onButtonPress` are provided', () => {
        const { getByText } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Modal_1.default, Object.assign({}, defaultProps, { buttonLabel: "Confirm", onButtonPress: jest.fn() })));
        expect(getByText('Confirm')).toBeTruthy();
    });
    it('calls `onButtonPress` when the action button is pressed', () => {
        const onButtonPress = jest.fn();
        const { getByText } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Modal_1.default, Object.assign({}, defaultProps, { buttonLabel: "Confirm", onButtonPress: onButtonPress })));
        react_native_1.fireEvent.press(getByText('Confirm'));
        expect(onButtonPress).toHaveBeenCalledTimes(1);
    });
    it('does not render the modal when `visible` is false', () => {
        const { queryByText } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Modal_1.default, Object.assign({}, defaultProps, { visible: false })));
        expect(queryByText('This is a test content')).toBeNull();
    });
});
