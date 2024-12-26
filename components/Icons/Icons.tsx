import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import BackIcon from '../assets/icons/back.svg';
import SettingsIcon from '../assets/icons/settings.svg';
import EditIcon from '../assets/icons/edit.svg';
import LockIcon from '../assets/icons/lock.svg';

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

  return (
    <View style={style}>
      <SvgIcon width={size} height={size} />
    </View>
  );
};

export default Icon;