import styled from 'styled-components'

type ButtonType = {
    backgroundColor?: string
    backgroundColorHover?: string

    textColor?: string
    textColorHover?: string

    width?: string
    height?: string

    padding?: string
    boxShadow?: string

    borderStyle?: string
    borderStyleHover?: string


    borderWidth?: string
    borderRadius?: string
    borderColor?: string
    borderColorHover?: string

}


export const Button = styled.button<ButtonType>`
    background-color: ${props => props.backgroundColor || "#E84949"};
    color: ${props => props.textColor || "#fff"};
    width: ${props => props.width || "98px"};
    height: ${props => props.height || "42px"};
    padding: ${props => props.padding || "0 0 0 0"};
    box-shadow: ${props => props.boxShadow || "0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14);"};
    border-style: ${props => props.borderStyle || "none"};
    border-width: ${props => props.borderWidth || "0"};
    border-radius: ${props => props.borderRadius || "4px"};
    border-color: ${props => props.borderColor || "white"};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    
    &:hover{
        background-color: ${props => props.backgroundColorHover || "#fff"};
        color: ${props => props.textColorHover || "#E84949"};

        border-style: ${props => props.borderStyleHover || "solid"};
        border-color: ${props => props.borderColorHover || "#E84949"};
        border-width: ${props => props.borderWidth || "2px"};
        
    }
`


