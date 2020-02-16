import React from 'react';
import AuthScreen from './src/screens/AuthScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/utils/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        // loading={<LoadingScreen />}
        persistor={persistor}>
        <AuthScreen />
      </PersistGate>
    </Provider>
  );
};


export default App;
