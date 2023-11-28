import { useMutation, gql } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imgUrl, setImgUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple />
    console.log(file);

    const result = await uploadFile({ variables: { file } });
    console.log(result.data?.uploadFile.url);
    setImgUrl(result.data?.uploadFile.url ?? "");
  };

  return (
    // <input type="file" onChange={onChangeFile} multiple />
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googlepis.com/${imgUrl}`} />
    </>
  );
}
