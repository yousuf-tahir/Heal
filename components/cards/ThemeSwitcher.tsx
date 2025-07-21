// components/cards/ThemeSwitcher.tsx
import React from 'react';

type ThemeSwitcherProps = {
  setThemeColor: (color: string) => void;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ setThemeColor }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <button onClick={() => setThemeColor('#2196F3')}>Blue Theme 💙</button>
      <button onClick={() => setThemeColor('#4CAF50')} style={{ marginLeft: '10px' }}>
        Green Theme 💚
      </button>
    </div>
  );
};

export default ThemeSwitcher;
