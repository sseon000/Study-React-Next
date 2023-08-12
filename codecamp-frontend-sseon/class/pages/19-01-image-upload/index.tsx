import { gql, useMutation } from "@apollo/client";
import { Modal } from 'antd';
import { IMutation } from "../../src/commons/types/generated/types";
import { useState } from 'react'

const UPLOAD_FILE = gql`
    mutaion uploadFile($file: Upload!){
        uploadFile(file: $file){
            url
        }
    }
`

export default function ImageUploadPage(){
    const [imageUrl, setImageUrl] = useState("");

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);

    const onChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] // multiple 속성으로 여러개 파일이 선택가능하기 때문에 배열[0]
        console.log(file);

        try {
            const result = await uploadFile({ variables: { file } })
            console.log(result.data?.uploadFile.url);
            setImageUrl(result.data?.uploadFile.url ?? "");
        } catch(error) {
            if(error instanceof Error) Modal.error({content: error.message});
        }
    }

    // 파일을 여러개 선택하고 싶을 때는 multiple 속성 사용
    return (
        <>
            <input type="file" onChange={onChangeFile} />
            <img src={imageUrl} />
        </>
    )
}