// prettier-ignore
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const client = new ApolloClient({
    // uri: "http://backend-example.codebootcamp.co.kr/graphql", section15 - pagination에서 아래 url로 교체
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  });

  // prettier-ignore
  return (
        <ApolloProvider client={client}> 
            {props.children}
        </ApolloProvider>
    )
}
