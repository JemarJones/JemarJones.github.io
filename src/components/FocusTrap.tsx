import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { KeyCode } from '../utils';

interface iFocusTrapProps {
  active: boolean;
  children: ReactNode;
  className: string | undefined;
}

const FocusTrap: React.FC<iFocusTrapProps> = ({
  active,
  children,
  className,
}): ReactElement | null => {
  const trapRef = useRef<HTMLDivElement>(null);
  const [trappedFocusables, setTrappedFocusables] = useState<HTMLElement[]>([]);

  useEffect(() => {
    if (active) {
      // Find and set all children of the trap element that are
      // of types known to be focusable.
      const focusables = Array.from(
        trapRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) || []
      ).filter(el => 'focus' in el) as HTMLElement[];

      // This should make it so that when the focus trap becomes
      // active, we focus the first focusable element within the trap
      // right away.
      if (focusables.every(tf => tf !== document.activeElement)) {
        focusables[0]?.focus();
      }

      setTrappedFocusables(focusables);
    }
  }, [active, children]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>): void => {
      // Check if the event is a tab and we have focusables
      if (e.key === KeyCode.TAB && trappedFocusables?.length) {
        const firstFocusableEl = trappedFocusables[0];
        const lastFocusableEl = trappedFocusables[trappedFocusables.length - 1];
        if (e.shiftKey && document.activeElement === firstFocusableEl) {
          // If shift was pressed and we're currently focused on the
          // first focusable element, prevent the default and jump to the last element.
          lastFocusableEl.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastFocusableEl) {
          // If a normal tab was pressed and we're currently focused on the
          // last focusable element, prevent the default and jump to the last element.
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    },
    [trappedFocusables]
  );

  return active ? (
    <div className={className} ref={trapRef} onKeyDown={handleKeyDown}>
      {children}
    </div>
  ) : (
    <div className={className}>{children}</div>
  );
};

export default FocusTrap;
