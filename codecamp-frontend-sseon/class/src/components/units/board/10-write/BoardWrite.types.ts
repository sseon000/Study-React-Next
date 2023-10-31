import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any // 존재 or 미존재 둘 다 가능
}

export interface IMyVariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}

export interface IBoardWriteUIProps {
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
    onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    isEdit: boolean
    data: any
}