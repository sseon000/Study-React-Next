import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)

  const { data } = useQuery(FETCH_BOARD_COMMENTS, { 
    variables: { boardId: router.query.boardId }
  });

  const onClickDelete = async (event) => {
    const myPassword = prompt("비밀번호를 입력하세요.")
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      alert(error.message)
    }
  };

  return <BoardCommentListUI data={data} onClickDelete={onClickDelete} />;
}
