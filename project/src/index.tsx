import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fecthOffersAction } from './store/api-actions';
// import { ToastContainer } from 'react-toastify';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(checkAuthAction());
store.dispatch(fecthOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      {/* <ToastContainer /> */}
      {/* <App offers={offers} /> */}
      <App />
    </Provider>
  </React.StrictMode>,
);
