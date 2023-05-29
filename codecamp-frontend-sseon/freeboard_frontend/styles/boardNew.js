import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;

    border: 1px solid gray;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    width: 1200px;
    // height: 1800px;
    padding: 40px 20px;
    
`

export const Header = styled.div`
    width: 200px;
    height: 53px;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    color: black;
`

export const Content = styled.div`
    width: 1000px;
    margin: 60px 0;

    height: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContentLabel = styled.div`
    font-weight: 600;
    font-size: 14px;
    text-align: left;
    color: black;
`

export const UserInput = styled.input`
    width: 480px;
    height: 32px;
    border: 1px solid #BDBDBD;
    margin-top: 10px;
`

export const ContentInputTitle = styled.input`
    width: 994px;
    height: 32px;
    border: 1px solid #BDBDBD;
    margin-top: 10px;
`

export const ContentInputArea = styled.input`
    width: 994px;
    height: 380px;
    border: 1px solid #BDBDBD;
    margin-top: 10px;
`

export const AddressWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Address = styled.input`
    width: 60px;
    height: 32px;
`

export const PostNumber = styled.div`
    box-sizing: border-box;
    width: 120px;
    height: 38px;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`

export const ImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Img = styled.div`
    box-sizing: border-box;
    background-color: gray;
    width: 100px;
    height: 100px;
    margin-right: 15px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainRadioWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`

export const MainInputRadio = styled.input`
    width: 15px;
    height: 15px;
    margin-right: 5px;
`

export const Button = styled.button`
    width: 120px;
    height: 32px;
    background-color: yellow;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const RadioSpan = styled.span`
    display: flex;
    align-items: center;
    margin-left: 3px;
`

export const Error = styled.div`
    padding-top: 10px;
    font-size: 14px;
    color: red;
`;
