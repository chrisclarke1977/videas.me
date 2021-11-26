import { AppProps } from 'next/app';
import { Provider } from "react-redux";
import AuthContextProvider from '../context/authContext';
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/main.css';

import { store, persistor } from '../store/configureStore';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </PersistGate>
  </Provider>
);

export default MyApp;
