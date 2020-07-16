import { useState, useEffect } from 'react';
import { AppState, Appearance, AppStateStatus } from 'react-native';

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const onChange = (isActive: AppStateStatus) => {
      if (isActive === 'active') {
        setDarkMode(Appearance.getColorScheme() === 'dark');
      }
    };
    AppState.addEventListener('change', onChange);
    return () => {
      AppState.removeEventListener('change', onChange);
    };
  }, []);

  return isDarkMode;
};

export default useDarkMode;
