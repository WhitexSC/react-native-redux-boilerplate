import React from 'react';
import AuthScreen from './src/screens/AuthScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/utils/store';
import Drawers from './src/navigation/Drawers';
import MyDrawer from './src/navigation/MyDrawer';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        // loading={<LoadingScreen />}
        persistor={persistor}>
        {/* <AuthScreen /> */}
        <MyDrawer />
      </PersistGate>
    </Provider>
  );
};


export default App;
