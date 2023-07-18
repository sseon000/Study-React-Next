import styled from "@emotion/styled"
import { useRouter } from "next/router";

const Wrapper = styled.div`
    height: 70px;
`

export default function HeaderPage() {
    const router = useRouter();

    const onClickLogo = () => {
        void router.push("/boards");
    };

    const onClickMoveToLogin = () => {
        void router.push("/login");
    };

    return (
        <>
            <Wrapper
                onClickLogo={onClickLogo}
                onClickMoveToLogin={onClickMoveToLogin}
            />
        </>    
    )
}