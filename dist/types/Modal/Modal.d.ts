type ModalProps = {
    visible: boolean;
    onClose: () => void;
    title?: string;
    content: string;
    showCloseButton?: boolean;
    buttonLabel?: string;
    onButtonPress?: () => void;
};
declare const ModalDS: ({ visible, onClose, title, content, showCloseButton, buttonLabel, onButtonPress, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default ModalDS;
