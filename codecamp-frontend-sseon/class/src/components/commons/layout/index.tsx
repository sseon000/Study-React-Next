import { useRouter } from "next/router"
import LayoutBanner from "./banner"
import LayoutFooter from "./footer"
import LayoutHeader from "./header"
import LayoutNavigation from "./navigation"

/** router를 이용해 조건부 렌더링!!
 * 헤더를 숨기고 싶은 페이지를 배열에 담고
 * router path 값이 배열에 있는지 boolean 변수로 조건부 렌더링
 */
const HIDDEN_HEADERS = [
    "/12-02-library-star",
    // ...
    // ...
    // ...
]

interface IProps {
    children: JSX.Element
}
export default function Layout(props: IProps) {
    const router = useRouter();
    console.log(router.asPath);

    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

    return (
        <>
            {!isHiddenHeader && <LayoutHeader />}
            <LayoutBanner />
            <LayoutNavigation />
            <div style={{height: "500px", display: "flex"}}>
                <div style={{width: "30%", backgroundColor: "orange"}}>사이드바</div>
                <div style={{width: "70%"}}>{props.children}</div>
            </div>
            <LayoutFooter />
        </>
    )
}