import { useRouter } from "next/router";
import BannerPage from "./banner";
import HeaderPage from "./header";
import NavigationPage from "./navigation";
import styled from "@emotion/styled";

const HIDDEN_BANNERS = [
    "boards/new",
    // ...추가
]

const Body = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

interface IChildrenProps {
    children: JSX.Element
}
export default function Layout(props: IChildrenProps) {
    const router = useRouter();

    const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);

    return (
        <>
            <HeaderPage />
            {!isHiddenBanner && <BannerPage />}
            <NavigationPage />
            <Body>{props.children}</Body>
        </>    
    )
}