import { useEffect, useRef } from 'react';

const useValueUpdate = (func, value) => {
  const prevValue = useRef(value);

  useEffect(() => {
    let prevFunc = null;

    if (prevValue.current !== value) {
      prevFunc = func(value);
      prevValue.current = value;
    }

    return () => {
      if (prevFunc) prevFunc();
    };
  }, [value]); // eslint-disable-line
};

export default useValueUpdate;
