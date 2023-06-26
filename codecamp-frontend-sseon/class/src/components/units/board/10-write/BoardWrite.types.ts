import { ChangeEvent } from "react";

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any
}

export interface IBoardWriteUIProps {
    onClickUpdate: () => void
    onClickSubmit: () => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContent: (event: ChangeEvent<HTMLInputElement>) => void
    myColor: boolean
    isEdit: boolean
    data: any
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