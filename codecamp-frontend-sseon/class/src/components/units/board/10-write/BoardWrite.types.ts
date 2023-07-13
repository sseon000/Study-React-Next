import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
    isEdit: boolean
    data?: Pick<IQuery,"fetchBoard">
}

export interface IBoardWriteUIProps {
    onClickUpdate: () => void
    onClickSubmit: () => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContent: (event: ChangeEvent<HTMLInputElement>) => void
    myColor: boolean
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface IBlueButtonProps {
    myColor: boolean
}

export interface IMyvariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}