import { AppProps } from 'next/app'
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import 'antd/dist/antd.css';
import Layout from '../src/components/commons/layout';
import ApolloSetting from '../src/components/commons/apollo';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <div>qqqqqqqqq</div>
        <Layout>
            <Component />
        </Layout>
      </>
    </ApolloSetting>
  );
}
