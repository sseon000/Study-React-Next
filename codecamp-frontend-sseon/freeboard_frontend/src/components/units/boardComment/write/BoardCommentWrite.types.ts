import { Dispatch, SetStateAction } from 'react';

export interface IBoardCommentWriteUIProps {
    onChangeWriter: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onClickWrite: () => void;
    contents: string;
    writer: string;
    password: string;
    setStar: Dispatch<SetStateAction<number>>
}