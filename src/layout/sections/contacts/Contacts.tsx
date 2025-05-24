import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container.ts";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {ContactsForm} from "./contactsForm/ContactsForm.tsx";
import {ContactsLeftSide} from "./contactsLeftSide/ContactsLeftSide.tsx";
import {ContactsLeftSideMobile} from "./contactsLeftSideMobile/ContactsLeftSideMobile.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Contacts = () => {
    return (
        <StyledContacts id="Contacts">
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <SectionTitle color={"#e84949"}>Contact me</SectionTitle>
                </FlexWrapper>

                <ContactsWrapper>

                    <ContactsLeftSide/>
                    <ContactsLeftSideMobile/>
                    <ContactsForm/>

                </ContactsWrapper>

            </Container>
        </StyledContacts>
    );

};

const StyledContacts = styled.section`
    min-height: 412px;
    padding-bottom: 74px;
`

const ContactsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    
    @media ${theme.media.large} {
        flex-direction: column;
        align-items: center;
    }
`