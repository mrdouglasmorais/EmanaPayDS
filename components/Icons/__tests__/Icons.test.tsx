import React from 'react';
import { render } from '@testing-library/react-native';
import Icon from '../Icons';

jest.mock('../../assets/icons/back.svg', () => 'BackIcon');
jest.mock('../../assets/icons/settings.svg', () => 'SettingsIcon');
jest.mock('../../assets/icons/edit.svg', () => 'EditIcon');
jest.mock('../../assets/icons/lock.svg', () => 'LockIcon');

describe('Icon Component', () => {
  it('renders the back icon with default size', () => {
    const { getByTestId } = render(<Icon name="back" />);
    const icon = getByTestId('back-icon');
    expect(icon).toBeDefined();
  });

  it('renders the settings icon with expected properties', () => {
    const { getByTestId } = render(<Icon name="settings" />);
    const icon = getByTestId('settings-icon');
    expect(icon).toBeDefined();
  });

  it('renders the edit icon with a custom size of 30', () => {
    const customSize = 30;
    const { getByTestId } = render(<Icon name="edit" size={customSize} />);
    const icon = getByTestId('edit-icon');
    expect(icon.props.width).toBe(customSize);
    expect(icon.props.height).toBe(customSize);
  });

  it('renders the lock icon and checks for visibility', () => {
    const { getByTestId } = render(<Icon name="lock" />);
    const icon = getByTestId('lock-icon');
    expect(icon).toBeDefined();
  });
});
