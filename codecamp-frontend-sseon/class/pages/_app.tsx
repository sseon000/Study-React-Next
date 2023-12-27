import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { RecoilRoot, RecoilEnv } from "recoil";

// 개발환경기준 - 넥스트에서 리코일 사용시 파일이 변경되면 다시 빌드하는 과정에서 중복키 오류 발생 해결
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <div>========= 여기는 _app.js 컴포넌트 시작부분 입니다. ===========</div>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
      <div>========= 여기는 _app.js 컴포넌트 마지막부분 입니다. =========</div>
    </div>
  );
}
