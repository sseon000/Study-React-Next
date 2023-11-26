// const qqq: string = "안녕하세요";
// console.log("ts", qqq);

/**
 *  타입스크립트 실행시키려면?
 * 1. 타입스크립트 설치
 * 2. tsconfig.json 설정만들기
 */

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

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

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다!!!");
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다!!!");
    console.log("원인: ", error);
  });
