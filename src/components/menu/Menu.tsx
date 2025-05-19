import styled from "styled-components";

function GetUrl(sectionId: string): string {
    return "#" + sectionId
}


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <StyledLi key={index}>
                        <a href={GetUrl(item)}>{item}</a>
                    </StyledLi>
                })}
            </ul>
        </StyledMenu>

    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`

const StyledLi = styled.li`
    list-style-type: none;
    font-family: "Be Vietnam";
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0px;
`

