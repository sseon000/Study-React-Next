import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import Layout from '../src/components/commons/layout';
import ApolloSetting from '../src/components/commons/apollot';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </>
    </ApolloSetting>
  );
}