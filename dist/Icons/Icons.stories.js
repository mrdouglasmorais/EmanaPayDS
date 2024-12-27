"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EyeIcon = exports.LockIcon = exports.EditIcon = exports.SettingsIcon = exports.BackIcon = void 0;
const Icons_1 = require("./Icons");
const meta = {
    title: 'components/Icons',
    component: Icons_1.Icon,
    args: {
        size: 32,
    },
    argTypes: {
        name: {
            control: { type: 'select' },
            options: ['back', 'settings', 'edit', 'lock', 'eye'],
        },
        size: {
            control: { type: 'number' },
        },
        style: {
            control: false,
        },
    },
};
exports.default = meta;
exports.BackIcon = {
    args: {
        name: 'back',
    },
    parameters: {
        docs: {
            source: {
                code: `<Icon name="back" size={32} />`,
            },
        },
    },
};
exports.SettingsIcon = {
    args: {
        name: 'settings',
    },
    parameters: {
        docs: {
            source: {
                code: `<Icon name="settings" size={32} />`,
            },
        },
    },
};
exports.EditIcon = {
    args: {
        name: 'edit',
    },
    parameters: {
        docs: {
            source: {
                code: `<Icon name="edit" size={32} />`,
            },
        },
    },
};
exports.LockIcon = {
    args: {
        name: 'lock',
    },
    parameters: {
        docs: {
            source: {
                code: `<Icon name="lock" size={32} />`,
            },
        },
    },
};
exports.EyeIcon = {
    args: {
        name: 'eye',
    },
    parameters: {
        docs: {
            source: {
                code: `<Icon name="eye" size={32} />`,
            },
        },
    },
};
