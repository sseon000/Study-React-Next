import { Rate } from 'antd';
import styled from "@emotion/styled";
import { useState } from 'react';

const MyStar = styled(Rate)`
    font-size: 50px;
    color: red;
`

export default function LibraryStarPage() {
    const [value,setValue] = useState(3);

    const qqq = (value: number) => setValue(value);

    return (
        <>
            <Rate />
            <MyStar onChange={qqq}/>
        </>
    )
}