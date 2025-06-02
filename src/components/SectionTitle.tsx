import styled from "styled-components"

type SectionTitleType = {
    color?: string
}

export const SectionTitle = styled.h1<SectionTitleType>`
    font-family: "Be Vietnam", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.color || "black"};
    text-align: center;
    padding-top:30px;
    padding-bottom: 30px;
`