import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardWriteUI from './BoardWrite.present';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import {
    IMutation,
    IMutationCreateBoardArgs,
    IMutationUpdateBoardArgs,
  } from "../../../../commons/types/generated/types";
  import { Modal } from "antd";
import { Address } from 'react-daum-postcode';

export default function BoardWrite(props: IBoardWriteProps) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [youtubeUrl, setYoutubeUrl] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("")

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const [createBoard] = useMutation<
        Pick<IMutation, "createBoard">,
        IMutationCreateBoardArgs
    >(CREATE_BOARD);
    const [updateBoard] = useMutation<
        Pick<IMutation,"updateBoard">,
        IMutationUpdateBoardArgs
    >(UPDATE_BOARD);

    const onChangeWriter = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setWriter(event.target.value); 
        if(event.target.value !== "") {
            setWriterError("")
        }

        if(event.target.value && password && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setPassword(event.target.value); 
        if(event.target.value !== "") {
            setPasswordError("")
        }

        if(writer && event.target.value && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setTitle(event.target.value); 
        if(event.target.value !== "") {
            setTitleError("")
        }

        if(writer && password && event.target.value && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeContents = (event: React.ChangeEvent<HTMLTextAreaElement>) => { 
        setContents(event.target.value); 
        if(event.target.value !== "") {
            setContentsError("")
        }

        if(writer && password && title && event.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeYoutubeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYoutubeUrl(event.target.value);
    };
    
    const onChangeAddressDetail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddressDetail(event.target.value);
    };
    
    const onClickAddressSearch = () => {
        setIsOpen(prev => !prev);
    };
    
    const onCompleteAddressSearch = (address: Address) => {
        setAddress(address.address);
        setZipcode(address.zonecode);
        setIsOpen(prev => !prev);
    };

    const onClickSignup = async () => {
        console.log('등록클릭');
        if (!writer) setWriterError("작성자를 입력해주세요.");
        if (!password) setPasswordError("비밀번호를 입력해주세요.");
        if (!title) setTitleError("제목을 입력해주세요.");
        if (!contents) setContentsError("내용을 입력해주세요.");
        if (writer && password && title && contents) {
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer,
                            password,
                            title,
                            contents,
                            youtubeUrl,
                            boardAddress: {
                                zipcode,
                                address,
                                addressDetail,
                            },
                        },
                    },
                });
                if(typeof result.data?.createBoard._id !== "string") {
                    alert("일시적인 오류가 있습니다. 다시 시도해 주세요.");
                    return <></>;
                }
                console.log(result.data?.createBoard._id);
                void router.push(`/boards/${result.data?.createBoard._id}`)
            } catch(error) {
                if (error instanceof Error) Modal.error({ content: error.message });
            }
        }
    }

    const onClickEdit = async () => {
        console.log('수정클릭');
        if (
            !title &&
            !contents &&
            !youtubeUrl &&
            !address &&
            !addressDetail &&
            !zipcode
        ) {
            alert("수정한 내용이 없습니다.");
            return;
        }
    
        if (!password) {
            alert("비밀번호를 입력해주세요.");
            return;
        }
    
        const updateBoardInput: IUpdateBoardInput = {};
        if (title) updateBoardInput.title = title;
        if (contents) updateBoardInput.contents = contents;
        if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
        if (zipcode || address || addressDetail) {
        updateBoardInput.boardAddress = {};
        if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
        if (address) updateBoardInput.boardAddress.address = address;
        if (addressDetail)
            updateBoardInput.boardAddress.addressDetail = addressDetail;
        }

        try {
            if (typeof router.query.boardId !== "string") return;
            const result = await updateBoard({
                variables: {
                    boardId: router.query.boardId,
                    password,
                    updateBoardInput: updateBoardInput,
                },
            });
            void router.push(`/boards/${result.data?.updateBoard._id}`)
        } catch(error) {
            if (error instanceof Error) alert(error.message);
        }
    }

    return (
        <BoardWriteUI
            isActive={isActive}
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onChangeYoutubeUrl={onChangeYoutubeUrl}
            onChangeAddressDetail={onChangeAddressDetail}
            onClickAddressSearch={onClickAddressSearch}
            onCompleteAddressSearch={onCompleteAddressSearch}
            onClickSignup={onClickSignup}
            onClickEdit={onClickEdit}
            isEdit={props.isEdit}
            data={props.data}
            isOpen={isOpen}
            zipcode={zipcode}
            address={address}
            addressDetail={addressDetail}
        />
    );
}