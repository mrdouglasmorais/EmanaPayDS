import * as React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

// @ts-ignore
import BackIcon from '../assets/icons/back.svg';
// @ts-ignore
import SettingsIcon from '../assets/icons/settings.svg';
// @ts-ignore
import EditIcon from '../assets/icons/edit.svg';
// @ts-ignore
import LockIcon from '../assets/icons/lock.svg';
// @ts-ignore
import EyeIcon from '../assets/icons/eye.svg';

export type IconName = 'back' | 'settings' | 'edit' | 'lock' | 'eye';

interface IconProps {
  name: IconName;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, style }) => {
  const icons: Record<IconName, React.FC<SvgProps>> = {
    back: BackIcon,
    settings: SettingsIcon,
    edit: EditIcon,
    lock: LockIcon,
    eye: EyeIcon,
  };

  const SvgIcon = icons[name];

  if(!SvgIcon) {
    console.error(`Icon ${name} not found`);
    return null;
  }

  return (
    <View style={style}>
      <SvgIcon width={size} height={size} testID={`${name}-icon`} />
    </View>
  );
};

export default Icon;