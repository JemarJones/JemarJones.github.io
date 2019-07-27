import React, { ReactElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import Home from './pages/Home';
import { setupFontAwesome, resetFontAwesome } from './utils/fontAwesome';

const App: React.FC = (): ReactElement | null => {
  const [ready, setReady] = useState<boolean>(false);

  useEffect((): (() => void) => {
    setupFontAwesome();
    setReady(true);

    return (): void => {
      resetFontAwesome();
      setReady(false);
    };
  }, []);

  return ready ? <Home /> : null;
};

ReactDOM.render(<App />, document.getElementById('root'));
