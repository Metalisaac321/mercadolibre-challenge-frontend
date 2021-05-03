import React from 'react';
import Searcher from '@components/common/Searcher';
import AppContainer from '@components/ui/objects/AppContainer';
import styles from './index.module.scss';
import '../styles/index.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { AppContextProvider } from '@services/context';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [value, setValue] = useState('');

  const handleOnSearch = () => {
    if (value !== '') {
      router.push(`/items?search=${value}`);
    }
  };

  return (
    <AppContainer>
      <Searcher
        value={value}
        onChange={(evnt) => setValue(evnt.target.value)}
        onSearch={handleOnSearch}
      />
      <main className={styles.appContainerMain}>
        <AppContextProvider initialData={{ categories: [] }}>
          <Component {...pageProps} />
        </AppContextProvider>
      </main>
    </AppContainer>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
