"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const { width: screenWidth, height: screenHeight } = react_native_1.Dimensions.get('window');
const ModalDS = ({ visible, onClose, title, content, showCloseButton = true, buttonLabel, onButtonPress, }) => {
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, { transparent: true, visible: visible, animationType: "fade", onRequestClose: onClose, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.overlay, children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.modalContainer, children: [showCloseButton && ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: onClose, style: styles.closeButton, activeOpacity: 0.8, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.closeButtonText, children: "\u00D7" }) })), title && (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.title, children: title }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.content, children: content }), buttonLabel && onButtonPress && ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, { onPress: onButtonPress, style: styles.actionButton, activeOpacity: 0.8, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.actionButtonText, children: buttonLabel }) }))] }) }) }));
};
const styles = react_native_1.StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: screenWidth * 0.8,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#f5f5f5',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        textAlign: 'center',
    },
    content: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    actionButton: {
        backgroundColor: '#F45622',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
exports.default = ModalDS;
