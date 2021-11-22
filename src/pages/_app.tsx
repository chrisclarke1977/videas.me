import { AppProps } from 'next/app';
import AuthContextProvider from "../context/authContext";
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthContextProvider>
  <Component {...pageProps} />
  </AuthContextProvider>
);

export default MyApp;
