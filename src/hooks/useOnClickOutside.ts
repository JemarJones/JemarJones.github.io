import { useEffect } from 'react';

const useOnClickOutside = (
  ref: React.MutableRefObject<HTMLElement | null>,
  handler: (event: Event) => void
): void => {
  useEffect((): (() => void) => {
    const listener = (event: Event): void => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        !ref.current ||
        (event.target instanceof Node && ref.current.contains(event.target))
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return (): void => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
