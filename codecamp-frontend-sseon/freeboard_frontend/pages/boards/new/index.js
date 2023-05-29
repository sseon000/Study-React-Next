import { useState } from 'react';
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
    Button,
    RadioSpan,
    Error} from '../../../styles/boardNew';

export default function NewPage() {

    const [ writer, setWriter ] = useState("");
    const [ pw, setPw ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    const [ post, setPost ] = useState("");
    const [ mainAddr, setMainAddr ] = useState("");
    const [ detailAddr, setDetailAddr ] = useState("");

    const [ errWriter, setErrWriter ] = useState("");
    const [ errPw, setErrPw ] = useState("");
    const [ errTitle, setErrTitle ] = useState("");
    const [ errContent, setErrContent ] = useState("");
    const [ errPost, setErrPost ] = useState("");
    const [ errMainAddr, setErrMainAddr ] = useState("");
    const [ errDetailAddr, setErrDetailAddr ] = useState("");

    function onChangeWriter(event) { setWriter(event.target.value); }
    function onChangePw(event) { setPw(event.target.value); }
    function onChangeTitle(event) { setTitle(event.target.value); }
    function onChangeContent(event) { setContent(event.target.value); }
    function onChangePost(event) { setPost(event.target.value); }
    function onChangeMainAddr(event) { setMainAddr(event.target.value); }
    function onChangeDetailAddr(event) { setDetailAddr(event.target.value); }
    
    function onClickSignup() {
        setErrWriter("");
        setErrPw("");
        setErrTitle("");
        setErrContent("");
        setErrPost("");
        setErrMainAddr("");
        setErrDetailAddr("");

        // validationCheck
        if(writer.length === 0) {
            setErrWriter("작성자를 입력해주세요!!");
        } else if(pw.length === 0) {
            setErrPw("비밀번호를 입력해주세요!!");
        } else if(title.length === 0) {
            setErrTitle("제목을 입력해주세요!!");
        } else if(content.length === 0) {
            setErrContent("내용을 입력해주세요!!");
        } else if(post.length === 0) {
            setErrPost("우편번호를 입력해주세요!!");
        } else if(mainAddr.length === 0) {
            setErrMainAddr("주소를 입력해주세요!!");
        } else if(detailAddr.length === 0) {
            setErrDetailAddr("상세주소를 입력해주세요!!");
        } else {
            // 메시지 알림 이후, Backend 컴퓨터에있는 API(함수) 요청하기
            alert("게시글이 등록됐습니다!!")
        }
    }

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
                                <UserInput type="text" placeholder='이름을 적어주세요.' onChange={onChangeWriter}/>
                                <Error>{errWriter}</Error>
                            </ContentWrapper>
                            <ContentWrapper>
                                <ContentLabel>비밀번호</ContentLabel>
                                <UserInput type="password" placeholder='비밀번호를 입력해주세요.' onChange={onChangePw}/>
                                <Error>{errPw}</Error>
                            </ContentWrapper>
                        </UserInfo>
                        <ContentWrapper>
                            <ContentLabel>제목</ContentLabel>
                            <ContentInputTitle type='text' placeholder='제목을 작성해주세요.' onChange={onChangeTitle}></ContentInputTitle>
                            <Error>{errTitle}</Error>
                        </ContentWrapper>
                        <ContentWrapper>
                            <ContentLabel>내용</ContentLabel>
                            <ContentInputArea type='textarea' placeholder='내용을 작성해주세요.' onChange={onChangeContent}></ContentInputArea>
                            <Error>{errContent}</Error>
                        </ContentWrapper>
                        <ContentWrapper>
                            <ContentLabel>주소</ContentLabel>
                            <AddressWrapper>
                                <Address type='text' placeholder='07250' onChange={onChangePost}></Address>
                                <PostNumber>우편번호 검색</PostNumber>
                                <Error>{errPost}</Error>
                            </AddressWrapper>
                            <ContentInputTitle type='text' placeholder='메인 주소' onChange={onChangeMainAddr}></ContentInputTitle>
                            <Error>{errMainAddr}</Error>
                            <ContentInputTitle type='text' placeholder='상세 주소' onChange={onChangeDetailAddr}></ContentInputTitle>
                            <Error>{errDetailAddr}</Error>
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
                                <MainInputRadio type='radio' />
                                <RadioSpan>유튜브</RadioSpan>
                                <MainInputRadio type='radio' />
                                <RadioSpan>사진</RadioSpan>
                            </MainRadioWrapper>
                        </ContentWrapper>
                    </Content>
                    <Button onClick={onClickSignup}>등록하기</Button>
                </Wrapper>    
            </Container>
        </>
    )
}