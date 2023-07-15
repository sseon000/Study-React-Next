import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";
import { 
  DELETE_BOARD_COMMENT, 
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { useState,useEffect } from 'react';

export default function BoardCommentList() {
  const router = useRouter();
  useEffect((): any => {
    if(typeof router.query.boardId !== "string") {
      alert("올바르지 않은 게시글 아이디입니다.");
      void router.push("/");
      return <></>;
    } 
  },[router])
  

  const [isOpentDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myBoardCommentId, setMyBoardCommentId] = useState('');
  const [myPassword, setMyPassword] = useState('');

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT)

  const { data } = useQuery<
  Pick<IQuery, "fetchBoardComments">,
  IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, { 
    variables: { boardId: String(router.query.boardId) }
  });

  const onClickDelete = async (event: React.MouseEvent<HTMLDivElement>) => {
    if(!(event.target instanceof HTMLElement)) return;
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
      setIsOpenDeleteModal(false);
    } catch (error: any) {
      if(error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenDeleteModal = (event: React.MouseEvent<HTMLImageElement>) => {
    if(!(event.target instanceof HTMLImageElement)) return;
    setMyBoardCommentId(event.target.id);
    setIsOpenDeleteModal(true);
  }

  const onChangeDeletePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  }

  return (
    <BoardCommentListUI 
      data={data}
      isOpentDeleteModal={isOpentDeleteModal}
      onClickDelete={onClickDelete}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
    />
  );
}
