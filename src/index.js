import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import Home from './pages/Home';
import { setupFontAwesome } from './utils/fontAwesome';

setupFontAwesome();

const App = () => <Home />;

ReactDOM.render(<App />, document.getElementById('root'));
