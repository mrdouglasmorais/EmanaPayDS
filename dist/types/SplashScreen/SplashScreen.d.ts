import * as React from 'react';
export type DSSplashScreenProps = {
    onSplashEnd?: () => void;
    videoDuration?: number;
};
declare const DSSplashScreen: React.FC<DSSplashScreenProps>;
export default DSSplashScreen;
