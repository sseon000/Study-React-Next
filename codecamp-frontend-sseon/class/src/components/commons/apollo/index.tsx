// prettier-ignore
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 프리렌더링 예제1 - process.broswer 방법
  // if (process.browser) {
  //   console.log("지금은 브라우저다!!!");
  //   const result = localStorage.getItem("accessToken");
  //   console.log("apollo : " + result);
  //   setAccessToken(result ?? "");
  // } else {
  //   console.log(
  //     "지금은 프론테엔드 서버다!!!(즉, yarn dev로 실행시킨 프로그램 내부!!"
  //   );
  // }

  // // 프리렌더링 예제2 - typeof window 방법
  // if (typeof window === "undefined") {
  //   console.log("지금은 브라우저다!!!");
  // } else {
  //   console.log(
  //     "지금은 프론테엔드 서버다!!!(즉, yarn dev로 실행시킨 프로그램 내부!!"
  //   );
  // }

  // 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql", // section19-01-image-upload
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }, // 모든 graphql api요청에 header를 추가함
  });

  const client = new ApolloClient({
    // uri: "http://backend-example.codebootcamp.co.kr/graphql", section15 - pagination에서 아래 url로 교체
    link: ApolloLink.from([uploadLink]), // section19-01-image-upload, 나중에 에러 처리 등 새로운 옵션들 배열에 추가
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  });
  // 페이지 이동시 모든 페이지가 _app.tsx로 시작하기때무넹 new InMemoryCache()가 새로 만들어져서 캐시 저장이 안됐음
  // 해당 객체를 미리 선언하고 리렌더링시 초기화 되지 않게 변경 -> GLOBAL_STATE

  // prettier-ignore
  return (
        <ApolloProvider client={client}> 
            {props.children}
        </ApolloProvider>
    )
}
