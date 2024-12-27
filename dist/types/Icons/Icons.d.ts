import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export type IconName = 'back' | 'settings' | 'edit' | 'lock' | 'eye';
interface IconProps {
    name: IconName;
    size?: number;
    style?: StyleProp<ViewStyle>;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
