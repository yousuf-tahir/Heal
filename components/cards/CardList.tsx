// components/cards/CardList.tsx
import React, { useState } from 'react';
import Card from './Card';
import ThemeSwitcher from './ThemeSwitcher';

const CardList: React.FC = () => {
  const [themeColor, setThemeColor] = useState('');

  return (
    <div style={{ padding: '16px', maxHeight: '70vh', overflowY: 'scroll' }}>
      <h2>Card List 🃏</h2>
      <ThemeSwitcher setThemeColor={setThemeColor} />
      {[...Array(5)].map((_, index) => (
        <Card key={index} themeColor={themeColor} />
      ))}
    </div>
  );
};

export default CardList;
