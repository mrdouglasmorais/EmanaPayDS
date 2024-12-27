import * as Font from 'react-native-fs-font'; // Utilizando uma abordagem com react-native-fs

export const FontLoader = {
  loadFonts: async () => {
    await Font.loadAsync({
      'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    });
  },
};
