// const qqq: string = "안녕하세요";
// console.log("ts", qqq);

/**
 *  타입스크립트 실행시키려면?
 * 1. 타입스크립트 설치
 * 2. tsconfig.json 설정만들기
 */

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// API-DOCS 만들기
const typeDefs = `#graphql
  # args는 input!
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  # return은 type!
  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoard: [MyBoard]
  }

  type Mutation {
    # 연습용
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용
    createBoard(createBoardInput: CreateBoardInput): String
  }
`;

// API 만들기
const resolvers = {
  Query: {
    fetchBoard: async () => {
      // 1. 모두 꺼내기
      const result = await Board.find();
      console.log(result);

      // 2. 한개만 꺼내기
      // const result = await Board.findOne( { where: { number: 3 } });
      console.log(result);

      return result;
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      // 연습용
      // await Board.insert({
      //   writer: args.writer,
      //   title: args.title,
      //   contents: args.contents,
      // });

      await Board.insert({
        ...args.createBoardInput,

        // 하나 하나 모두 입력하는 비효율적인 방식
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      return "게시글 등록에 성공했어요!!";
    },

    /*
    updateBoard: async () => {
      // 3번 게시글을 영희로 바꿔줘!
      await Board.update({ number: 3 }, { writer: "영희" });
    },

    deleteBoard: async () => {
      // 3번 게시글 삭제해줘!
      await Board.delete({ number: 3 });
      // 3번 게시글 삭제했다고 치자!! (소프트삭제) => fetchBoard시 isDeleted: false
      await Board.update({ number: 3 }, { isDeleted: true });
      // 3번 게시글 삭제했다고 치자!! (소프트삭제) => fetchBoard시 deletedAt: null
      await Board.update({ number: 3 }, { deletedAt: new Date() });
    },
    */
  },
};

// 아래 ts 무시하기
// @ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,

  // 선택한 사이트만 풀어주고 싶을때
  // cors: {
  //   origin: ["http//naver.com", "http://coupang.com"],
  // }
});

// 정보는 비밀!
const AppDataSource = new DataSource({
  type: "postgres",
  host: "",
  port: 1234,
  username: "",
  password: "",
  database: "",
  entities: [Board],
  synchronize: true,
  logging: true,
});

// 1. 데이터베이스 연결
AppDataSource.initialize()
  .then(() => {
    console.log("데이터베이스 연결 성공!!!");

    // 2. 데이터베이스 연결 성공시 그래프큐엘 서버 실행
    startStandaloneServer(server).then(() => {
      console.log("그래프큐엘 서버 시작!!!"); // 포트: 4000
    });
  })
  .catch((error) => {
    console.log("데이터베이스 연결 실패!!!");
    console.log("원인: ", error);
  });
