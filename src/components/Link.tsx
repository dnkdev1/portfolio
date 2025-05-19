import {Icon} from "./icon/Icon.tsx";
import styled from "styled-components";

type LinkPropsType  = {
    href: string
    text: string
    withLeftIcon?: boolean
    withRightIcon?: boolean
}

export const Link = ({href, text, withLeftIcon, withRightIcon}: LinkPropsType) => {
    return (
        <StyledLink href={href}>
            {withLeftIcon && <Icon iconId={"gears"} width={"24px"} height={"21.82px"} viewBox={"0 0 24 21.82"}/>}
            {text}
            {withRightIcon && <Icon iconId={"gears"} width={"24px"} height={"21.82px"} viewBox={"0 0 24 21.82"}/>}
        </StyledLink>
    )
}

const StyledLink = styled.a`
color: black;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 4px;
    
    
    
    &:hover {
        color: red;
    }
`


//можно ли IconId сделать required если withLeftIcon=true ?

