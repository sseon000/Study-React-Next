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
  type Query {
    hello: String
  }
`;

// API 만들기
const resolvers = {
  Query: {
    hello: () => "world",
  },
};

// 아래 ts 무시하기
// @ts-ignore
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// 정보는 비밀!
const AppDataSource = new DataSource({
  type: "postgres",
  host: "",
  port: 1521,
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
