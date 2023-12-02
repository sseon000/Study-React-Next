// prettier-ignore
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql", // section19-01-image-upload
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
