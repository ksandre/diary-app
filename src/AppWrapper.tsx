import React from 'react';
import { Provider } from 'react-redux'
import { store } from 'redux/store';
import App from './App';

function AppWrapper() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}

export default AppWrapper;