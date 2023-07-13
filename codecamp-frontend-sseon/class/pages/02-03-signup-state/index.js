import { useState } from "react";

export default function SignupStatePage() {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const [ emailError,setEmailError ] = useState("");

    // event가 발생하는 onChange, onClick 같은 함수 -> 이벤트 핸들러 함수
    function onChangeEmail(event) {
        // console.log(event) // 나의 행동
        // console.log(event.target) // 작동된 태그
        // console.log(event.target.value) // 작동된 태그에 입력된 값
        setEmail(event.target.value);
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    function onClickSignup() {
        console.log(email);
        console.log(password);

        // validationCheck
        if(email.includes("@") === false) {
            // alert("이메일이 올바르지 않습니다!! @가 없음!!");
            // document.getElementById("error").innerText = "이메일이 올바르지 않습니다!! @가 없음!!";
            setEmailError("이메일이 올바르지 않습니다!! @가 없음!!");
        } else {
            // 메시지 알림 이후, Backend 컴퓨터에있는 API(함수) 요청하기
            alert("회원가입을 축하합니다!!")
            
        }
    }

    return(
        <>
            이메일: <input type="text" onChange={onChangeEmail}/>
            {/* <div id="error"></div>  */}
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword}/>
            <button onClick={onClickSignup}>회원가입</button>
        </>
    )
}