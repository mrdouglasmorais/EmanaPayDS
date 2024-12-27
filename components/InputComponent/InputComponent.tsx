import * as React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from '../Icons/Icons';
import MaskInput, { Masks } from 'react-native-mask-input';

export type MaskedInputProps = {
  label: string;
  placeholder?: string;
  type: 'email' | 'phone' | 'cpf' | 'cnpj' | 'password';
  value: string;
  onChangeText: (text: string) => void;
  widthType?: '80%' | '60%';
};

const { width } = Dimensions.get('window');

const MaskedInput: React.FC<MaskedInputProps> = ({
  label,
  placeholder = '',
  type,
  value,
  onChangeText,
  widthType = '80%',
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const getMask = () => {
    switch (type) {
      case 'phone':
        return Masks.BRL_PHONE;
      case 'cpf':
        return Masks.BRL_CPF;
      case 'cnpj':
        return Masks.BRL_CNPJ;
      default:
        return undefined;
    }
  };

  const renderInput = () => {
    if (type === 'password') {
      return (
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#666666"
            secureTextEntry={!isPasswordVisible}
            value={value}
            onChangeText={onChangeText}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Icon name="eye" size={32} />
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <MaskInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#666666"
        mask={getMask()}
        value={value}
        onChangeText={onChangeText}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
      />
    );
  };

  return (
    <View
      style={[
        styles.container,
        { width: widthType === '80%' ? width * 0.8 : width * 0.6 },
      ]}
    >
      <Text style={styles.label}>{label}</Text>
      {renderInput()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
    textAlign: 'left',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#666666',
    fontSize: 16,
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#666666',
  },
});

export default MaskedInput;
