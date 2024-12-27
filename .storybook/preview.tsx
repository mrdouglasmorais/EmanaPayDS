import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import type {Preview} from '@storybook/react';

interface FontsLoadedState {
  fontsLoaded: boolean;
}

export const decorators = [
  (Story: React.ComponentType) => {
    const [fontsLoaded, setFontsLoaded] = React.useState<FontsLoadedState['fontsLoaded']>(false);

    React.useEffect(() => {
      (async () => {
        try {
          setFontsLoaded(true); 
        } catch (error) {
          console.error('Erro ao carregar fontes:', error);
        }
      })();
    }, []);

    if (!fontsLoaded) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Carregando fontes...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Story />
      </View>
    );
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
