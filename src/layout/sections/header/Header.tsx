import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../../components/logo/Logo';
import { Menu } from '../../../components/menu/Menu';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import{ ToggleSwitch } from '../../../components/ToggleSwitch';

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader id="Home">
            
                <Logo />
                <Menu menuItems={items} />
                <FlexWrapper>
                    <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"github"} />
                    <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"twitter"} />
                    <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"linkedin"} />
                </FlexWrapper>
                <ToggleSwitch />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
display:flex;
justify-content:space-between;
`

