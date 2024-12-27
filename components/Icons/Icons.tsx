import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import BackIcon from '../assets/icons/back';
import SettingsIcon from '../assets/icons/settings';
import EditIcon from '../assets/icons/edit';
import LockIcon from '../assets/icons/lock';

export type IconName = 'back' | 'settings' | 'edit' | 'lock';

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