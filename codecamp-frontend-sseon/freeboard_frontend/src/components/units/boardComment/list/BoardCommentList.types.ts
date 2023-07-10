import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
    data?: Pick<IQuery, "fetchBoardComments">
    onClickDelete: (ev: React.MouseEvent<HTMLDivElement>) => void;    
}