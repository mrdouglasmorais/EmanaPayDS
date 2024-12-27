"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplashScreenDS = exports.IconDS = exports.ModalDS = exports.InputDS = exports.ButtonDS = void 0;
const Button_1 = require("./Button/Button");
Object.defineProperty(exports, "ButtonDS", { enumerable: true, get: function () { return Button_1.Button; } });
const InputComponent_1 = __importDefault(require("./InputComponent/InputComponent"));
exports.InputDS = InputComponent_1.default;
const Modal_1 = __importDefault(require("./Modal/Modal"));
exports.ModalDS = Modal_1.default;
const Icons_1 = __importDefault(require("./Icons/Icons"));
exports.IconDS = Icons_1.default;
const SplashScreen_1 = __importDefault(require("./SplashScreen/SplashScreen"));
exports.SplashScreenDS = SplashScreen_1.default;
