import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  targetKey?: string;
}

type KeyBoard = 'ArrowDown' | 'ArrowUp';

const useKeyPress = ({ targetKey }: Props) => {
  const [keyPressed, setKeyPressed] = useState<KeyBoard>();

  const downHandler = useCallback((event: KeyboardEvent) => {
    const { key } = event;
    if (key === targetKey) {
      setKeyPressed('ArrowDown');
    }
  }, []);

  const upHandler = (event: KeyboardEvent) => {
    const { key } = event;
    if (key === targetKey) {
      setKeyPressed('ArrowUp');
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
