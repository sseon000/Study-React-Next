console.log('반갑습니다');

const aaa: number = 2;

import { DataSource } from 'typeorm'

const AppDataSource = new DataSource ({
    type : "postgres",
    host : "34.64.124.242",
    port: 5432,
    username : "postgres",
    password : "postgres2022",
    database : "postgres",
    //entities 들어간 것들을 데이터베이스와 동기화 해줍니다.
    synchronize : true,
    logging : true,
    // 어떤 테이블이 들어갈 것 인가
    entities : ["*.postgres.ts"],
});

AppDataSource.initialize().then(() => {
    console.log("DB접속에 성공했습니다!!!");
}).catch((error) => {
    console.log("DB접속에 실패했습니다.");
    console.log("원인: " + error);
})