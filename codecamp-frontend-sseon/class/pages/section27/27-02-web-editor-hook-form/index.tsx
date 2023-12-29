// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
// import { Modal } from "antd";

// dynamic import!!
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  // 다른 라이브러리와 연동을 위해 값을 저장할 수 있게 setValue를 만들어뒀음
  // event handler를 위해 trigger를 만들어뒀음
  const { register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // ReactQuill 만든 사람들이 만든 onChange 이므로 event 안들어옴
  const onChangeContents = (value: string): void => {
    console.log(value);

    // input tag에 {...register{"contents"}} 넣는것과 같음
    // register를 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐으니까 에러검증 같은것들 해달라고 react-hook-form에 알려주는 기능!!
    void trigger("contents");
  };

  //   useEffect(() => {
  //     async function aaa(): Promise<void> {
  //       const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
  //       Modal.success({ content: "게시글 등록에 성공하였습니다!!" });
  //     }
  //     void aaa();
  //   }, []);

  const onClickSubmit = async (): Promise<void> => {
    // event.preventDefault();
    // alert("게시글 등록에 성공하였습니다!!");
    const { Modal } = await import("antd"); // code-splitting(코드스플릿팅)
    Modal.success({ content: "게시글 등록에 성공하였습니다!!" });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      {/* {process.browser ? <ReactQuill onChange={onChangeContents} /> : <div />} */}
      <button>등록하기</button>
    </form>
  );
}
