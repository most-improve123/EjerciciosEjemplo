import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../components/store';
import Headers from './Headers';
import Auth from '../components/Auth';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Auth />
        <Headers />
      </div>
    </Provider>
  );
};

export default App;
