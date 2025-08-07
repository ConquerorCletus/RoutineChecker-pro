import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/features.css';
import '@/styles/dashboard.css';
import PrivateRoute from '@/components/PrivateRoute';

// import dashboard from "./dashboard";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RoutineChecker - Achieve more Stress less</title>
        <meta
          name='description'
          content='Task management application for individuals and businesses'
        />
      </Head>
      <ToastContainer />
      {/* <PrivateRoute> */}
      <Component {...pageProps} />
      {/* </PrivateRoute> */}
    </>
  );
}
