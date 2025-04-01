import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../../components/logo/Logo';
import { Menu } from '../../../components/menu/Menu';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';

const items = ["Home", "About", "Technologies", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={'space-between'}>
                <Logo />
                <Text>+91 12345 09876</Text>
                <Text>info@example.com</Text>
                <FlexWrapper>
                    <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"github"} />
                    <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"twitter"} />
                    <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"linkedin"} />
                </FlexWrapper>
            </FlexWrapper>
            <Devider />
            <FlexWrapper justify={'space-between'}>
                <Menu menuItems={items} />
                <Text>Designed and built by Pavan MG with Love & Coffee</Text>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`

const Text = styled.p`
font-family: "DM Sans";
font-weight: 400;
font-size: 18px;
line-height: 26px;
letter-spacing: 0px;
color: #42446E;
`

const Devider = styled.hr`
border-top: 3px solid #bbb;
`