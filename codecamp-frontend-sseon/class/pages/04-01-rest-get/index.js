import axios from "axios"
import { useState } from "react";

export default function restGetPage() {

    const [ title, setTitle ] = useState("");

    const onClickAsync = () => {
        const result = axios.get("https://koreanjson.com/posts/1");
        console.log(result);
    }
    
    // async function onClickSync() { 기존 방식
    // var 키워드와 동일한 이슈(중복선언가능)로 -> arrow function으로 사용 권고
    const onClickSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1");
        console.log(result);
        console.log(result.data);
        setTitle(result.data.title);
    }

    return (
        <>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
            <div>{title}</div>
        </>
    )

}