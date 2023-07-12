import React, { useEffect } from 'react';

const BubblyButton = ({ className }) => {
  useEffect(() => {
    const animateButton = (e) => {
      e.preventDefault();
      e.currentTarget.classList.add('animate');
      setTimeout(() => {
        e.currentTarget.classList.remove('animate');
      }, 700);
    };

    const buttons = document.querySelectorAll(`.${className}`);
    buttons.forEach((button) =>
      button.addEventListener('click', animateButton)
    );

    return () => {
      buttons.forEach((button) =>
        button.removeEventListener('click', animateButton)
      );
    };
  }, [className]);

  return null;
};

export default BubblyButton;
