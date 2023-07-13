import * as S from './BoardWrite.styles';

export default function BoardWriteUI({ onChangeWriter, onChangePw, onChangeTitle, onChangeContent, onChangePost, onChangeMainAddr, onChangeDetailAddr, onClickSignup, errWriter, errPw, errTitle, errContent, errPost, errMainAddr, errDetailAddr, isEdit, onClickEdit, isActive }) {
    return(
        <>
            <S.Container>
                <S.Wrapper>
                    <S.Header>
                        {isEdit ? "게시물 수정하기" : "게시물 등록하기"}
                    </S.Header>
                    <S.Content>
                        <S.UserInfo>
                            <S.ContentWrapper>
                                <S.ContentLabel>작성자</S.ContentLabel>
                                <S.UserInput type="text" placeholder='이름을 적어주세요.' onChange={onChangeWriter}/>
                                <S.Error>{errWriter}</S.Error>
                            </S.ContentWrapper>
                            <S.ContentWrapper>
                                <S.ContentLabel>비밀번호</S.ContentLabel>
                                <S.UserInput type="password" placeholder='비밀번호를 입력해주세요.' onChange={onChangePw}/>
                                <S.Error>{errPw}</S.Error>
                            </S.ContentWrapper>
                        </S.UserInfo>
                        <S.ContentWrapper>
                            <S.ContentLabel>제목</S.ContentLabel>
                            <S.ContentInputTitle type='text' placeholder='제목을 작성해주세요.' onChange={onChangeTitle}></S.ContentInputTitle>
                            <S.Error>{errTitle}</S.Error>
                        </S.ContentWrapper>
                        <S.ContentWrapper>
                            <S.ContentLabel>내용</S.ContentLabel>
                            <S.ContentInputArea type='textarea' placeholder='내용을 작성해주세요.' onChange={onChangeContent}></S.ContentInputArea>
                            <S.Error>{errContent}</S.Error>
                        </S.ContentWrapper>
                        <S.ContentWrapper>
                            <S.ContentLabel>주소</S.ContentLabel>
                            <S.AddressWrapper>
                                <S.Address type='text' placeholder='07250' onChange={onChangePost}></S.Address>
                                <S.PostNumber>우편번호 검색</S.PostNumber>
                                <S.Error>{errPost}</S.Error>
                            </S.AddressWrapper>
                            <S.ContentInputTitle type='text' placeholder='메인 주소' onChange={onChangeMainAddr}></S.ContentInputTitle>
                            <S.Error>{errMainAddr}</S.Error>
                            <S.ContentInputTitle type='text' placeholder='상세 주소' onChange={onChangeDetailAddr}></S.ContentInputTitle>
                            <S.Error>{errDetailAddr}</S.Error>
                        </S.ContentWrapper>
                        <S.ContentWrapper>
                            <S.ContentLabel>유튜브</S.ContentLabel>
                            <S.ContentInputTitle type='text' placeholder='링크를 복사해주세요.'></S.ContentInputTitle>
                        </S.ContentWrapper>
                        <S.ContentWrapper>
                            <S.ContentLabel>사진 첨부</S.ContentLabel>
                            <S.ImgWrapper>
                                <S.Img>
                                    <span>+</span>
                                    <span>Upload</span>
                                </S.Img>
                                <S.Img>
                                    <span>+</span>
                                    <span>Upload</span>
                                </S.Img>
                                <S.Img>
                                    <span>+</span>
                                    <span>Upload</span>
                                </S.Img>
                            </S.ImgWrapper>
                        </S.ContentWrapper>
                        <S.ContentWrapper>
                            <S.ContentLabel>메인 설정</S.ContentLabel>
                            <S.MainRadioWrapper>
                                <S.MainInputRadio type='radio' />
                                <S.RadioSpan>유튜브</S.RadioSpan>
                                <S.MainInputRadio type='radio' />
                                <S.RadioSpan>사진</S.RadioSpan>
                            </S.MainRadioWrapper>
                        </S.ContentWrapper>
                    </S.Content>
                    <S.Button 
                        onClick={isEdit ? onClickEdit : onClickSignup}
                        isActive={isEdit ? true : isActive}
                    >{isEdit ? "수정하기" : "등록하기"}</S.Button>
                </S.Wrapper>    
            </S.Container>
        </>
    )
}