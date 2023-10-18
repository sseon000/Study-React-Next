import styled from '@emotion/styled';

export const RedInput = styled.input`
    border-color: red;
`

export const BlueInput = styled.input`
    background-color: blue;
`

export const YelloButton = styled.button`
    background-color: ${(props) => props.isActive ? 'yellow' : 'blue'};
`

/**
 * props 생성
 * ${} : `` 리터럴 안에서 js사용
 * ${} + () => ${() => logic} : 그 안에서 함수선언하고 파라미터로 props
 * ex : ${(props) => props.key}
 */