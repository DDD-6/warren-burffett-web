import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

const breakPoint = 768;

type FontType = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'body1' | 'body2' | 'body3';

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

  const setFontSize = useCallback(
    (monitor: FontType, mobile: FontType) => {
      return width > breakPoint ? monitor : mobile;
    },
    [width],
  );

  return { width, setFontSize };
}
