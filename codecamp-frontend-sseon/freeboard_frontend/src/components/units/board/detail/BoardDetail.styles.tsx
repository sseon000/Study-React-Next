import styled from "@emotion/styled";
import { LikeTwoTone, DislikeTwoTone } from "@ant-design/icons";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 100px;
`;

export const CardWrapper = styled.div`
    border: 1px solid black;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Avatar = styled.img`
    margin-right: 10px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Writer = styled.div`
color: black;
`;

export const CreatedAt = styled.div`
    color: black;
`;

export const Body = styled.div`
    width: 100%;
    min-height: 800px;
`;

export const Title = styled.h1`
    padding-top: 80px;
`;

export const LikeWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 400px;
`

export const MyLikeTwoTone = styled(LikeTwoTone)`
    font-size: 36px;
`

export const MyDislikeTwoTone = styled(DislikeTwoTone)`
    font-size: 36px;
`

export const Contents = styled.div`
    padding-top: 40px;
    padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
`;

export const Button = styled.button`
    width: 179px;
    height: 45px;
    background-color: white;
    border: 1px solid gray;
    margin: 0px 12px;
    cursor: pointer;

    :hover {
    background-color: gold;
    border-color: white;
    }
`;