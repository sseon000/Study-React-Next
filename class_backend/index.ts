// console.log('반갑습니다');
// const aaa: number = 2;

import { DataSource } from 'typeorm'
import { Board } from './Board.postgres';


// import { startStandaloneServer } from '@apollo/server/standalone';
 const { ApolloServer, gql } = require('apollo-server');// => 옛날방식(commonjs)
// import { ApolloServer, gql } from 'apollo/server'; //      => 요즘방식(module)

// DOCS
const typeDefs = gql`
  type Query {
    fetchBoards: String
  }

  type Mutation {
    CreateBoard: String
  }
`;

// API
const resolvers = {
  Query: {
    fetchBoards: () => {
        return "게시글 조회에 성공하였습니다.";
    },
  },

  Mutation: {
    CreateBoard: () => {
        return "게시글 등록에 성공하였습니다.";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  // 선택한 사이트만 풀어주고 싶을때
//   cors: {
//     origin: [ "http//naver.com", "http//qqq.com" ]
//   }
});

// const { url } = await startStandaloneServer(server);
// 포트번호를 바꾸고 싶으면 listen 함수에 바꿀 포트번호 인자로!
// 원래는 DB 연결까지 모두 끝나고, 가장 마지막에 실행(다른 사람들의 접속을 기다리기 위해서) 하지만 DB접속 불가 환경이므로 DB접속 생략함
server.listen(4000).then(({ url }: any) => {
    console.log(`🚀 Server ready at ${url}`);
    // http://localhost:4000/graphql
    // 포트번호가 dafault일 경우에 생략가능 ex) http:80 / https: 443
})

/*
const AppDataSource = new DataSource ({
    type : "postgres",
    host : "**.**.***.***",
    port: 1111,
    username : "postgres",
    password : "*********",
    database : "*********",
    //entities 들어간 것들을 데이터베이스와 동기화 해줍니다.
    synchronize : true,
    logging : true,
    // 어떤 테이블이 들어갈 것 인가
    entities : ["*.postgres.ts"],
});

AppDataSource.initialize().then(() => {
    console.log("DB접속에 성공했습니다!!!");

    server.listen(4000).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
        // http://localhost:4000/graphql
        // 포트번호가 dafault일 경우에 생략가능 ex) http:80 / https: 443
    })
}).catch((error) => {
    console.log("DB접속에 실패했습니다.");
    console.log("원인: " + error);
})
*/