"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("@testing-library/react-native");
const Icons_1 = __importDefault(require("../Icons"));
jest.mock('../../assets/icons/back.svg', () => 'BackIcon');
jest.mock('../../assets/icons/settings.svg', () => 'SettingsIcon');
jest.mock('../../assets/icons/edit.svg', () => 'EditIcon');
jest.mock('../../assets/icons/lock.svg', () => 'LockIcon');
describe('Icon Component', () => {
    it('renders the back icon with default size', () => {
        const { getByTestId } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Icons_1.default, { name: "back" }));
        const icon = getByTestId('back-icon');
        expect(icon).toBeDefined();
    });
    it('renders the settings icon with expected properties', () => {
        const { getByTestId } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Icons_1.default, { name: "settings" }));
        const icon = getByTestId('settings-icon');
        expect(icon).toBeDefined();
    });
    it('renders the edit icon with a custom size of 30', () => {
        const customSize = 30;
        const { getByTestId } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Icons_1.default, { name: "edit", size: customSize }));
        const icon = getByTestId('edit-icon');
        expect(icon.props.width).toBe(customSize);
        expect(icon.props.height).toBe(customSize);
    });
    it('renders the lock icon and checks for visibility', () => {
        const { getByTestId } = (0, react_native_1.render)((0, jsx_runtime_1.jsx)(Icons_1.default, { name: "lock" }));
        const icon = getByTestId('lock-icon');
        expect(icon).toBeDefined();
    });
});
