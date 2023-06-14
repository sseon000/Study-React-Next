import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CREATE_BOARD } from './BoardWrite.queries';
import BoardWriteUI from './BoardWrite.present';

export default function BoardWrite() {
    const router = useRouter()

    const [ writer, setWriter ] = useState("");
    const [ pw, setPw ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    const [ post, setPost ] = useState("");
    const [ mainAddr, setMainAddr ] = useState("");
    const [ detailAddr, setDetailAddr ] = useState("");

    const [ errWriter, setErrWriter ] = useState("");
    const [ errPw, setErrPw ] = useState("");
    const [ errTitle, setErrTitle ] = useState("");
    const [ errContent, setErrContent ] = useState("");
    const [ errPost, setErrPost ] = useState("");
    const [ errMainAddr, setErrMainAddr ] = useState("");
    const [ errDetailAddr, setErrDetailAddr ] = useState("");

    const [ createBoard ] = useMutation(CREATE_BOARD);

    function onChangeWriter(event) { setWriter(event.target.value); }
    function onChangePw(event) { setPw(event.target.value); }
    function onChangeTitle(event) { setTitle(event.target.value); }
    function onChangeContent(event) { setContent(event.target.value); }
    function onChangePost(event) { setPost(event.target.value); }
    function onChangeMainAddr(event) { setMainAddr(event.target.value); }
    function onChangeDetailAddr(event) { setDetailAddr(event.target.value); }
    
    async function onClickSignup() {
        setErrWriter("");
        setErrPw("");
        setErrTitle("");
        setErrContent("");
        setErrPost("");
        setErrMainAddr("");
        setErrDetailAddr("");

        // validationCheck
        if(writer.length === 0) {
            setErrWriter("작성자를 입력해주세요!!");
        } else if(pw.length === 0) {
            setErrPw("비밀번호를 입력해주세요!!");
        } else if(title.length === 0) {
            setErrTitle("제목을 입력해주세요!!");
        } else if(content.length === 0) {
            setErrContent("내용을 입력해주세요!!");
        } else if(post.length === 0) {
            setErrPost("우편번호를 입력해주세요!!");
        } else if(mainAddr.length === 0) {
            setErrMainAddr("주소를 입력해주세요!!");
        } else if(detailAddr.length === 0) {
            setErrDetailAddr("상세주소를 입력해주세요!!");
        } else {
            // 메시지 알림 이후, Backend 컴퓨터에있는 API(함수) 요청하기
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            //writer: writer, js object key = value -> shorthand-property
                            writer: writer,
                            pw: pw,
                            title: title,
                            content: content
                        }
                    }
                })
                router.push(`/boards/${result.data.createBoard_id}`)
                //alert("게시글이 등록됐습니다!!")
            } catch(error) {
                alert(error.message)
            }
        }
    }

    return (
        <BoardWriteUI
            onChangeWriter={onChangeWriter}
            onChangePw={onChangePw}
            onChangeTitle={onChangeTitle}
            onChangeContent={onChangeContent}
            onChangePost={onChangePost}
            onChangeMainAddr={onChangeMainAddr}
            onChangeDetailAddr={onChangeDetailAddr}
            onClickSignup={onClickSignup}
            errWriter={errWriter}
            errPw={errPw}
            errTitle={errTitle}
            errContent={errContent}
            errPost={errPost}
            errMainAddr={errMainAddr}
            errDetailAddr={errDetailAddr}
        />
    )
}