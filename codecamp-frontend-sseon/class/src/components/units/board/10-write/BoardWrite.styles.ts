import styled from "@emotion/styled";

export const RedInput = styled.input`
    border-color: red;
`

interface IProps {
    myColor: boolean
}
export const BlueButton = styled.button`
    background-color: ${((props: IProps) => props.myColor ? "yellow" : "default")};
`