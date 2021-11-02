import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

export function useLayout() {
  const [width, setWidth] = useState<number>(0);

  const onResizeWidth = useCallback((w: number) => {
    setWidth(w);
  }, []);

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const debounceResize = () => debounce(() => onResizeWidth(window.innerWidth), 500);

    window.addEventListener('resize', debounceResize());

    return () => {
      window.removeEventListener('resize', debounceResize());
    };
  }, [onResizeWidth]);

  return { width };
}
