import { RightCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(RightCircleOutlined)`
    font-size: 50px;
    color: red;
`

export default function LibraryIconPage() {
    return (
        <>
            <RightCircleOutlined />
            <MyIcon />
        </>
    )
}