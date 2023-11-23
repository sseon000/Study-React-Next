import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [mutationFunc] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    const result = await mutationFunc({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  /* 위와 동일하고 prev사용 권장!!
  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  */

  return (
    <div>
      작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
      제목 : <input type="text" id="title" onChange={onChangeInputs} />
      내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
