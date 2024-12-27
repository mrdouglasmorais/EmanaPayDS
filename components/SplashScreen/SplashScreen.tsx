import * as React from 'react';
import { StyleSheet, View, Dimensions, Animated, Image } from 'react-native';
import Video from 'react-native-video';

export type DSSplashScreenProps = {
  onSplashEnd?: () => void;
  videoDuration?: number;
};

const { width, height } = Dimensions.get('window');

const DEFAULT_VIDEO = require('../assets/videos/splash.mp4');
const DEFAULT_IMAGE = require('../assets/images/splash.png');

const DSSplashScreen: React.FC<DSSplashScreenProps> = ({
  onSplashEnd,
  videoDuration = 8000,
}) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const [videoLoaded, setVideoLoaded] = React.useState(false);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      if (onSplashEnd) {
        onSplashEnd();
      }
    }, videoDuration);

    return () => clearTimeout(timeout);
  }, [onSplashEnd, videoDuration, fadeAnim]);

  const handleVideoLoad = () => {
    setVideoLoaded(true); // Exibe o vídeo assim que for carregado
  };

  return (
    <View style={styles.container}>
      {!videoLoaded && (
        <Animated.View style={[styles.imageContainer, { opacity: fadeAnim }]}>
          <Image source={DEFAULT_IMAGE} style={styles.image} resizeMode="cover" />
        </Animated.View>
      )}
      <Animated.View style={[styles.videoContainer, { opacity: videoLoaded ? 1 : 0 }]}>
        <Video
          source={DEFAULT_VIDEO}
          style={styles.video}
          resizeMode="cover"
          repeat
          muted={false}
          controls={false}
          onLoad={handleVideoLoad}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    height,
  },
  videoContainer: {
    flex: 1,
    width,
    height,
  },
  video: {
    width,
    height,
  },
});

export default DSSplashScreen;
