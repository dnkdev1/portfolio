import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container.ts";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {ContactsForm} from "./contactsForm/ContactsForm.tsx";
import {ContactsLeftSide} from "./contactsLeftSide/ContactsLeftSide.tsx";
import {ContactsLeftSideMobile} from "./contactsLeftSideMobile/ContactsLeftSideMobile.tsx";

export const Contacts = () => {
    return (
        <StyledContacts id="Contacts">
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <SectionTitle color={"#e84949"}>Contact me</SectionTitle>
                </FlexWrapper>
                <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
                    <ContactsLeftSide/>
                    <ContactsLeftSideMobile/>
                    <ContactsForm/>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );

};

const StyledContacts = styled.section`
    min-height: 412px;
    margin-top: 74px;
`