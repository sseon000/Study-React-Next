// console.log('반갑습니다');
// const aaa: number = 2;

import { DataSource } from 'typeorm'
import { Board } from './Board.postgres';


// import { startStandaloneServer } from '@apollo/server/standalone';
 const { ApolloServer, gql } = require('apollo-server');// => 옛날방식(commonjs)
// import { ApolloServer, gql } from 'apollo/server'; //      => 요즘방식(module)

// DOCS
const typeDefs = gql`
  input CreateBoardInput {
    writer: String,
    title: String,
    contents: String
  }

  type UpdateBoardInput {
    writer: String,
    title: String,
    contents: String
  }

  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }


  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용(example 방식)
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용(backend 방식)                         !가 있으면 필수
    createBoard(createBoardInput: CreateBoardInput!): String

    updateBoard(id: String, updateBoardInput: UpdateBoardInput): String

    deleteBoard(id: String): String
  }
`;

// API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 모두 꺼내기
      const result = await Board.find();
      // 한개만 골라서 꺼내기
      // Board.findOne({ where: { number: 3 } })
      return result; // [{ number: 1, writer: "철수", title: "안녕하세요", contents: "반갑습니다" }, {}, {}, ...]
    },
  },

  Mutation: {
    // parent에는 프론트(브라우저)에서 api요청할때 인자는 args에 정보가 들어감,  백에서 백으로 api요청할때 인자는 parent에 정보
    // context에는 request, header 정보
    // info에는 graphql api 기타 정보
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput

        // 하나 하나 모두 입력하는 방식
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      })

      return "게시글 등록에 성공하였습니다.";
    },

    // updateBoard: async (parent: any, args: any, context: any, info: any) => {
    //   await Board.update({ number: 3 }, { writer: "영희" }); // => 3번 게시글의 작성자를 영희로 바꿔줘
    //   await Board.update({ args.number: 3 }, { writer: args.updateBoardInput.writer }); // => 3번 게시글의 작성자를 영희로 바꿔줘

    //   return "게시글 수정에 성공하였습니다.";
    // },

    // deleteBoard: async () => {
    //   await Board.delete({ number: 3 }); // => 3번 게시글을 삭제해줘
    //   await Board.update({ nubmer: 3 }, { isDeleted: true }); // => 실무에서는 실제로 삭제하지 않고, isDeleted라는 컬럼이 true이면 삭제되었다고 가정
    //   await Board.update({ number: 3 }, { deletedAt: new Date() }); // => 언제 deletedAt이 null이면 삭제 안된 게시글, new Date() 시간이들어가 있으면? 그 시간에 삭제된 게시글
    //
    //   return "게시글 삭제에 성공하였습니다.";
    // },

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