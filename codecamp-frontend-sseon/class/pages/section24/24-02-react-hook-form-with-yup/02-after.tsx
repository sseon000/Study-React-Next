import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  // boardAddress: {
  //   addressDetail: string;
  // };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  console.log("리렌더링 되나요??");

  // 한 줄일때는 괄호() 필요 없음
  return (
    // handleSubmit fuc 안에서 promise void 사용
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자 : <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목 : <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용 : <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* 주소 : <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button
        style={{ backgroundColor: formState.isValid ? "yellow" : "" }}
        type="submit"
      >
        GRAPHQL-API 요청하기
      </button>
    </form>
  );
}

/**
 * <button type="reset">지우자!!</button>
 * <button type="submit">등록하자!!</button>
 * <button type="button" onClick={onClickBasket}>form태그 안에서 submit실행하지 않고 onClick이벤트 실행</button>
 */
