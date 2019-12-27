import { useEffect, useRef } from "react";

const useAnimationFrame: (args: {
  callback: (time: number) => void;
  delay: 0;
}) => void = ({ callback, delay = 0 }) => {
  const requestRef = useRef<null | number>(null);
  const previousTimeRef = useRef<null | number>(null);
  const animate: (time: number) => void = (time) => {
    if (previousTimeRef.current !== null) {
      const deltaTime = time - previousTimeRef.current;
      if (deltaTime > delay) {
        callback(deltaTime);
        previousTimeRef.current = time;
      }
    } else {
      previousTimeRef.current = time;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current || 0);
  }, [callback]);
};

export default useAnimationFrame;
