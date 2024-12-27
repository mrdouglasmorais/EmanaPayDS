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
const react_native_video_1 = __importDefault(require("react-native-video"));
const { width, height } = react_native_1.Dimensions.get('window');
const DEFAULT_VIDEO = require('../assets/videos/splash.mp4');
const DEFAULT_IMAGE = require('../assets/images/splash.png');
const DSSplashScreen = ({ onSplashEnd, videoDuration = 8000, }) => {
    const fadeAnim = React.useRef(new react_native_1.Animated.Value(0)).current;
    const [videoLoaded, setVideoLoaded] = React.useState(false);
    React.useEffect(() => {
        react_native_1.Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
        const timeout = setTimeout(() => {
            if (onSplashEnd) {
                onSplashEnd();
            }
        }, videoDuration);
        return () => clearTimeout(timeout);
    }, [onSplashEnd, videoDuration, fadeAnim]);
    const handleVideoLoad = () => {
        setVideoLoaded(true); // Exibe o vídeo assim que for carregado
    };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.container, children: [!videoLoaded && ((0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: [styles.imageContainer, { opacity: fadeAnim }], children: (0, jsx_runtime_1.jsx)(react_native_1.Image, { source: DEFAULT_IMAGE, style: styles.image, resizeMode: "cover" }) })), (0, jsx_runtime_1.jsx)(react_native_1.Animated.View, { style: [styles.videoContainer, { opacity: videoLoaded ? 1 : 0 }], children: (0, jsx_runtime_1.jsx)(react_native_video_1.default, { source: DEFAULT_VIDEO, style: styles.video, resizeMode: "cover", repeat: true, muted: false, controls: false, onLoad: handleVideoLoad }) })] }));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width,
        height,
    },
    videoContainer: {
        flex: 1,
        width,
        height,
    },
    video: {
        width,
        height,
    },
});
exports.default = DSSplashScreen;
