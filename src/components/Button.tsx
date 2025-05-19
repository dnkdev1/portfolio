import styled from 'styled-components'

type ButtonType = {
    color?: string
    borderRadius?: string
    boxShadow?: string
    borderStyle?: string
    width?: string
    height?: string
    padding?: string
}


export const Button = styled.button<ButtonType>`
    background-color: ${props => props.color || "#E84949"};
    border-radius: ${props => props.borderRadius || "4px"};
    box-shadow: ${props => props.boxShadow || "0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14);"};
    border-style: ${props => props.borderStyle || "none"};
    width: ${props => props.width || "98px"};
    height: ${props => props.height || "42px"};
    padding: ${props => props.padding || "0 0 0 0"};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
`


