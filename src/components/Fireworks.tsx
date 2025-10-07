import React, { useEffect, useRef } from 'react';
import '../animations/fireworks.css';

interface Props {
  x: number;
  y: number;
  onComplete: () => void;
}

const Fireworks: React.FC<Props> = ({ x, y, onComplete }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1000); // Animation duration is 1s

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      ref={ref}
      className="fireworks"
      style={{ top: y, left: x }}
    />
  );
};

export default Fireworks;
