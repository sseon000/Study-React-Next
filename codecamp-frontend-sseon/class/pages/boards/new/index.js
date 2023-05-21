import { 
    Container, 
    Wrapper, 
    Header, 
    Content, 
    UserInfo, 
    ContentWrapper, 
    ContentLabel, 
    UserInput, 
    ContentInputTitle,  
    ContentInputArea,
    AddressWrapper,
    Address,
    PostNumber,
    ImgWrapper,
    Img,
    MainRadioWrapper,
    MainInputRadio,
    Button} from '../../../styles/boardNew';

export default function NewPage() {
    return (
        <>
            <Container>
                <Wrapper>
                    <Header>
                        게시물 등록
                    </Header>
                    <Content>
                        <UserInfo>
                            <ContentWrapper>
                                <ContentLabel>작성자</ContentLabel>
                                <UserInput type="text" placeholder='이름을 적어주세요.'/>
                            </ContentWrapper>
                            <ContentWrapper>
                                <ContentLabel>비밀번호</ContentLabel>
                                <UserInput type="password" placeholder='비밀번호를 입력해주세요.'/>
                            </ContentWrapper>
                        </UserInfo>
                        <ContentWrapper>
                            <ContentLabel>제목</ContentLabel>
                            <ContentInputTitle type='text' placeholder='제목을 작성해주세요.'></ContentInputTitle>
                        </ContentWrapper>
                        <ContentWrapper>
                            <ContentLabel>내용</ContentLabel>
                            <ContentInputArea type='textarea' placeholder='제목을 작성해주세요.'></ContentInputArea>
                        </ContentWrapper>
                        <ContentWrapper>
                            <ContentLabel>주소</ContentLabel>
                            <AddressWrapper>
                                <Address type='text' placeholder='07250'></Address>
                                <PostNumber>우편번호 검색</PostNumber>
                            </AddressWrapper>
                            <ContentInputTitle type='text' placeholder='메인 주소'></ContentInputTitle>
                            <ContentInputTitle type='text' placeholder='상세 주소'></ContentInputTitle>
                        </ContentWrapper>
                        <ContentWrapper>
                            <ContentLabel>유튜브</ContentLabel>
                            <ContentInputTitle type='text' placeholder='링크를 복사해주세요.'></ContentInputTitle>
                        </ContentWrapper>
                        <ContentWrapper>
                            <ContentLabel>사진 첨부</ContentLabel>
                            <ImgWrapper>
                                <Img>
                                    <span>+</span>
                                    <span>Upload</span>
                                </Img>
                                <Img>
                                    <span>+</span>
                                    <span>Upload</span>
                                </Img>
                                <Img>
                                    <span>+</span>
                                    <span>Upload</span>
                                </Img>
                            </ImgWrapper>
                        </ContentWrapper>
                        <ContentWrapper>
                            <ContentLabel>메인 설정</ContentLabel>
                            <MainRadioWrapper>
                                <MainInputRadio type='radio' />유튜브
                                <MainInputRadio type='radio' />사진
                            </MainRadioWrapper>
                        </ContentWrapper>
                    </Content>
                    <Button>등록하기</Button>
                </Wrapper>    
            </Container>
        </>
    )
}