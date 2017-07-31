import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import { createBrowserHistory } from 'history';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

if (typeof window !== 'undefined') {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  , document.getElementById('app'));
} else {
  global.MyApp = ({ location }) => (
    <StaticRouter location={location} context={{}}>
      <App />
    </StaticRouter>
  );

  global.renderToString = renderToString;
}

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
