// https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/

import {useEffect, useRef} from 'react';

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};