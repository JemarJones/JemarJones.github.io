import { useState, useCallback, useEffect } from 'react';
import { Location } from 'history';

import history from '../utils/history';

/**
 * Similar to `useState`, but uses a query param as the
 * source of truth for the state information. The idea
 * being that when a user copies the URL, they'll carry
 * any state with them via the query param. Meant as a lighter
 * alternative to including an entire routing library.
 *
 * @typeparam T The type of the state being stored.
 * @param paramName Param name to use for the query param
 * @param fallbackValue
 * State value to fallback on as an initial value or if the
 * query param is corrupted.
 * @param valueSerializer
 * Function to take a T and serialize it to a string in some way
 * to store as the query param value.
 * @param valueDeserializer
 * Function to take serialized value from valueSerializer
 * and produce the corresponding T.
 *
 * @returns Current state and a state setter, same as similar to useState.
 */
function useQueryParamState<T>(
  paramName: string,
  fallbackValue: T,
  valueSerializer: (value: T) => string,
  valueDeserializer: (value: string) => T
): [T, React.Dispatch<T>] {
  // Internal state variable, should be 'controlled'
  // by the query param state.
  const [state, setState] = useState<T>(fallbackValue);

  const setQueryParam = useCallback(
    (newState: T): void => {
      // Get the current query params
      const params = new URLSearchParams(history.location.search);
      // Get the string for the new state, and stick that in the query param
      const serializedValue = valueSerializer(newState);
      if (serializedValue !== '') {
        params.set(paramName, valueSerializer(newState));
      } else {
        params.delete(paramName);
      }

      // Update the query param
      history.replace(`${window.location.pathname}?${params}`);
    },
    [paramName, valueSerializer]
  );

  useEffect((): (() => void) => {
    const updateStateFromQueryParam = (location: Location): void => {
      // Read the current value from teh query param and update state to
      // track it accordingly.
      const paramValue = new URLSearchParams(location.search).get(paramName);
      const value =
        paramValue !== null ? valueDeserializer(paramValue) : fallbackValue;
      setState(value);
    };

    // Make sure initial value is correctly tracking query param value.
    updateStateFromQueryParam(history.location);

    // When location changes, make sure to update internal state accordingly.
    return history.listen(updateStateFromQueryParam);
  }, [paramName, valueDeserializer, fallbackValue]);

  return [state, setQueryParam];
}

export default useQueryParamState;
