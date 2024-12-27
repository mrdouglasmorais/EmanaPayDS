export type ButtonProps = {
    onPress: () => void;
    text: string;
    type: 'primary' | 'secondary' | 'tertiary';
    size?: 'large' | 'medium' | 'small';
    marginVertical?: number;
};
export declare const Button: ({ text, onPress, type, size, marginVertical }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
