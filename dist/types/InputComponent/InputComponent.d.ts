import * as React from 'react';
export type MaskedInputProps = {
    label: string;
    placeholder?: string;
    type: 'email' | 'phone' | 'cpf' | 'cnpj' | 'password';
    value: string;
    onChangeText: (text: string) => void;
    widthType?: '80%' | '60%';
};
declare const MaskedInput: React.FC<MaskedInputProps>;
export default MaskedInput;
