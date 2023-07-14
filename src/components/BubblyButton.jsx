import React, { useState } from 'react';

const BubblyButton = ({ children, onClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
    if(onClick) onClick();
  };

  const buttonClass = isAnimating ? 'bubbly-button animate' : 'bubbly-button';

  return <button className={buttonClass} onClick={handleClick}>{children}</button>;
};

export default BubblyButton;
