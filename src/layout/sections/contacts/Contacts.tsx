import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Contacts = () => {
    return (
        <StyledContacts id="Contact">
            <FlexWrapper align={"center"} justify={"space-around"}>
                <ContactsTitle>For any questions please mail me:</ContactsTitle>
            </FlexWrapper>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <ContactsMail>hi@pavanmg.in</ContactsMail>
            </FlexWrapper>
        </StyledContacts>
    );

};

const StyledContacts = styled.div`
min-height: 20vh;
`

const ContactsTitle = styled.p`
font-family: "Poppins";
font-weight: 700;
font-size: 58px;
line-height: 70px;
letter-spacing: -1px;
color: #1E0E62;
`

const ContactsMail = styled.h2`
font-family: "DM Sans";
font-weight: 700;
font-size: 58px;
line-height: 70px;
letter-spacing: -1px;
color: #13B0F5
`