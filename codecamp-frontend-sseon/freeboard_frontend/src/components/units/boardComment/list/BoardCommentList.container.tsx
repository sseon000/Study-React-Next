import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)

  const { data } = useQuery<
  Pick<IQuery, "fetchBoardComments">,
  IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, { 
    variables: { boardId: String(router.query.boardId) }
  });

  const onClickDelete = async (ev: React.MouseEvent<HTMLDivElement>) => {
    const myPassword = prompt("비밀번호를 입력하세요.")
    try {
      const event = ev.target as HTMLDivElement    
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error: any) {
      alert(error.message)
    }
  };

  return <BoardCommentListUI data={data} onClickDelete={onClickDelete} />;
}
