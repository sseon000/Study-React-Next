import { gql, useMutation } from "@apollo/client"
import { useRef, useState } from "react";
import { Modal } from 'antd';
import { IMutation } from "../../src/commons/types/generated/types";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";


const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) { # 타입 적는 곳
        createBoard(writer: $writer, title: $title,contents: $contents) {      # 실제 우리가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`;

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`;

export default function GraphqlMutationPage() {
    const fileRef = useRef<HTMLInputElement>(null);
    const [imageUrl, setImageUrl] = useState("");

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [ 나의함수 ] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        // const writer = "qqq" // 스코프 체인
        const result = await 나의함수({
            variables: {    // variables가 $역할을 해줌 : $writer -> writer
                writer,
                title,
                contents,
                images: [imageUrl],
            }
        });
        console.log(result);
        alert(result.data.createBoard.message);
    }

    const onChangeWriter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
    }

    const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const onChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value);
    }

    const onChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] // <input type='file' multiple /> 에서 multiple 속성으로 여러개 파일이 선택가능하기 때문에 배열[0]
        console.log(file);

        const isValid = checkValidationFile(file);
        if(!isValid) return;

        try {
            const result = await uploadFile({ variables: { file } })
            console.log(result.data?.uploadFile.url);
            setImageUrl(result.data?.uploadFile.url ?? "");
        } catch(error) {
            if(error instanceof Error) Modal.error({content: error.message});
        }
    }

    const onClickImage = () => {
        fileRef.current?.click();
    }

    return (
        <>
            작성자: <input type="text" onChange={onChangeWriter}/> <br />
            제목: <input type="text" onChange={onChangeTitle}/> <br />
            내용: <input type="text" onChange={onChangeContent}/> <br />
            <div style={{width: '50px', height: '50px', backgroundColor: 'gray'}} onClick={onClickImage}>
                이미지선택
            </div>
            <input style={{display: 'none'}} type="file" onChange={onChangeFile} ref={fileRef} accept="image/jpeg" />
            <img src={`https://storage.googleapis.com/${imageUrl}`} />
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )

}