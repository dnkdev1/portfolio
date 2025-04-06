import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import {Button} from "../../../components/Button.tsx";
import {TextField} from "../../../components/text-field/TextField.tsx";
import {TextArea} from "../../../components/text-area/TextArea.tsx";

export const Contacts = () => {
    return (
        <StyledContacts id="Contact">
            <Container>
                <StyledForm>
                    <TextField id="name" type={"name"} labelText={"Name"}/>
                    <TextField id="email" type={"email"} labelText={"Email"}/>

                    <TextArea id="message" labelText={"Message"}></TextArea>
                    <Button type={"submit"}>Submit</Button>
                </StyledForm>

                <FlexWrapper align={"center"} justify={"space-around"}>
                    <ContactsTitle>For any questions please mail me:</ContactsTitle>
                </FlexWrapper>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <ContactsMail>hi@pavanmg.in</ContactsMail>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );

};

const StyledContacts = styled.section`
    min-height: 50vh;
`

const ContactsTitle = styled.p`
    font-family: "Poppins";
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
    color: ${Theme.colors.thirdLightModeText};
`

const ContactsMail = styled.h2`
    font-family: "DM Sans";
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
    color: ${Theme.colors.contactText};
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 20px;
`