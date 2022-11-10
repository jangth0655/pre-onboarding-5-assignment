import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  targetKey?: string;
}

const useKeyPress = ({ targetKey }: Props) => {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler(event: KeyboardEvent) {
    const { key } = event;
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = (event: KeyboardEvent) => {
    const { key } = event;
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
};

export default useKeyPress;
