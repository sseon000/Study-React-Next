import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
    data?: Pick<IQuery, "fetchBoardComments">
    isOpentDeleteModal: boolean
    onClickDelete: (event: React.MouseEvent<HTMLDivElement>) => void;
    onClickOpenDeleteModal: (event: React.MouseEvent<HTMLImageElement>) => void;
    onChangeDeletePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
}