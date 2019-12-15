import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

const useMedia = (
  queryString: string,
  throttleTimeout: number = 300
): boolean => {
  const [queryMatches, setQueryMatches] = useState<boolean>(
    window.matchMedia(queryString).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(queryString);
    const runMediaQuery = throttle((): void => {
      setQueryMatches(mediaQuery.matches);
    }, throttleTimeout);

    runMediaQuery();
    window.addEventListener('resize', runMediaQuery);
    return (): void => {
      runMediaQuery.cancel();
      window.removeEventListener('resize', runMediaQuery);
    };
  }, [queryString, throttleTimeout]);

  return queryMatches;
};

export default useMedia;
