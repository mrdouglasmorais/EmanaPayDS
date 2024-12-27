import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ModalDS from '../Modal';

describe('ModalDS Component', () => {
  const defaultProps = {
    visible: true,
    onClose: jest.fn(),
    content: 'This is a test content',
  };

  it('renders correctly with content', () => {
    const { getByText } = render(<ModalDS {...defaultProps} />);
    expect(getByText('This is a test content')).toBeTruthy();
  });

  it('renders the title if provided', () => {
    const { getByText } = render(<ModalDS {...defaultProps} title="Test Title" />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('renders the close button if `showCloseButton` is true', () => {
    const { getByText } = render(<ModalDS {...defaultProps} showCloseButton />);
    expect(getByText('×')).toBeTruthy();
  });

  it('does not render the close button if `showCloseButton` is false', () => {
    const { queryByText } = render(<ModalDS {...defaultProps} showCloseButton={false} />);
    expect(queryByText('×')).toBeNull();
  });

  it('calls `onClose` when the close button is pressed', () => {
    const { getByText } = render(<ModalDS {...defaultProps} />);
    fireEvent.press(getByText('×'));
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('renders the action button if `buttonLabel` and `onButtonPress` are provided', () => {
    const { getByText } = render(
      <ModalDS
        {...defaultProps}
        buttonLabel="Confirm"
        onButtonPress={jest.fn()}
      />
    );
    expect(getByText('Confirm')).toBeTruthy();
  });

  it('calls `onButtonPress` when the action button is pressed', () => {
    const onButtonPress = jest.fn();
    const { getByText } = render(
      <ModalDS
        {...defaultProps}
        buttonLabel="Confirm"
        onButtonPress={onButtonPress}
      />
    );

    fireEvent.press(getByText('Confirm'));
    expect(onButtonPress).toHaveBeenCalledTimes(1);
  });

  it('does not render the modal when `visible` is false', () => {
    const { queryByText } = render(<ModalDS {...defaultProps} visible={false} />);
    expect(queryByText('This is a test content')).toBeNull();
  });
});
