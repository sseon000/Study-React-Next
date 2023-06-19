import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.present";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    const onClickMoveToEdit = () => {
        router.push(`/boards/${router.query.boardId}/edit`)
    }

    return(
        <BoardDetailUI 
            data={data}
            onClickMoveToEdit={onClickMoveToEdit}
        />
    )
}



