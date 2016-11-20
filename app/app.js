import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/Routes.js';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  rootElement
);


if (module.hot) {
  module.hot.accept('./config/Routes.js', () => {
    const NextRoutes = require('./config/Routes.js').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoutes />
      </AppContainer>,
      rootElement
    );
  });
}
