// components/cards/Card.tsx
import React, { useEffect, useState } from 'react';

type CardProps = {
  themeColor: string;
};

const getRandomColor = () => {
  const colors = ['#FFC107', '#8BC34A', '#03A9F4', '#FF5722', '#9C27B0'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Card: React.FC<CardProps> = ({ themeColor }) => {
  const [liked, setLiked] = useState(false);
  const [bgColor, setBgColor] = useState(getRandomColor());

  useEffect(() => {
    setBgColor(getRandomColor());
  }, []); // Random color on first render

  return (
    <div
      style={{
        backgroundColor: liked ? 'pink' : themeColor || bgColor,
        padding: '16px',
        borderRadius: '12px',
        color: '#fff',
        marginBottom: '12px',
      }}
    >
      <h3>Card Title</h3>
      <p>Random colorful card.</p>
      <button
        onClick={() => setLiked(!liked)}
        style={{
          marginTop: '8px',
          padding: '8px 12px',
          border: 'none',
          backgroundColor: liked ? '#fff' : '#000',
          color: liked ? '#000' : '#fff',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        {liked ? 'Unlike ' : 'Like '}
      </button>
    </div>
  );
};

export default Card;
