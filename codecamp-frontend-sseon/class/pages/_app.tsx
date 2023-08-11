import { AppProps } from 'next/app'
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import 'antd/dist/antd.css';
import Layout from '../src/components/commons/layout';
import ApolloSetting from '../src/components/commons/apollo';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';

// /////////////////////////// 파이어베이스 //////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxjgYfQoBXZ03s-GgiyEKQQG2qVI5RJv0",
  authDomain: "sseon000-804ac.firebaseapp.com",
  projectId: "sseon000-804ac",
  storageBucket: "sseon000-804ac.appspot.com",
  messagingSenderId: "319950907913",
  appId: "1:319950907913:web:24fef1f71fba5449ab66d8"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// /////////////////////////// 파이어베이스 //////////////////////////////

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
