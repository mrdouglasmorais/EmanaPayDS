import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Button} from '../Button';

describe('Button Component', () => {
  it('renders correctly with primary type and default size', () => {
    const {getByText} = render(
      <Button text="Primary Button" type="primary" onPress={() => {}} />
    );

    const buttonText = getByText('Primary Button');
    expect(buttonText).toBeTruthy();
  });

  it('calls onPress callback when clicked', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button text="Clickable Button" type="primary" onPress={onPressMock} />
    );

    const buttonText = getByText('Clickable Button');
    fireEvent.press(buttonText);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('applies the correct styles for large size', () => {
    const {getByTestId} = render(
      <Button text="Large Button" type="primary" size="large" onPress={() => {}} />
    );

    const button = getByTestId('button-touchable');
    const buttonStyles = Array.isArray(button.props.style)
      ? Object.assign({}, ...button.props.style)
      : button.props.style;

    expect(buttonStyles).toHaveProperty('width', expect.any(Number));
    expect(buttonStyles.width).toBeGreaterThan(0);
  });

  it('applies the correct styles for secondary type', () => {
    const {getByTestId} = render(
      <Button text="Secondary Button" type="secondary" onPress={() => {}} />
    );

    const button = getByTestId('button-touchable');
    const buttonStyles = Array.isArray(button.props.style)
      ? Object.assign({}, ...button.props.style)
      : button.props.style;

    expect(buttonStyles).toHaveProperty('backgroundColor', '#033826');
  });
});
