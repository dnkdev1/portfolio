import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import {Button} from "../../../components/Button.tsx";
import {TextField} from "../../../components/text-field/TextField.tsx";
import {TextArea} from "../../../components/text-area/TextArea.tsx";
import locationMap from "../../../assets/images/Map.jpg";

export const Contacts = () => {
    return (
        <StyledContacts id="Contact">
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <ContactsTitle>Contact me:</ContactsTitle>
                </FlexWrapper>

                <FlexWrapper>
                    <StyledImg id={"locationMap"} src={locationMap} alt=""/>

                    <StyledForm>
                        <TextField id="name" type={"name"} labelText={"Name"}/>
                        <TextField id="email" type={"email"} labelText={"Email"}/>
                        <TextArea id="message" labelText={"Message"}></TextArea>
                        <Button type={"submit"}>Submit</Button>
                    </StyledForm>
                </FlexWrapper>

            </Container>
        </StyledContacts>
    );

};

const StyledContacts = styled.section`
    min-height: 50vh;
    margin-top: 0px;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 20px;
`

const ContactsTitle = styled.p`
    font-family: "Be Vietnam";
    font-weight: 500;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;
    color: ${Theme.colors.thirdLightModeText};
    margin-bottom: 50px;
`

const StyledImg = styled.img`
    width: 506px;
    height: 506px;
    object-fit: cover;
    background-image: ${locationMap};
`

// const ContactsMail = styled.h2`
//     font-family: "DM Sans";
//     font-weight: 700;
//     font-size: 58px;
//     line-height: 70px;
//     letter-spacing: -1px;
//     color: ${Theme.colors.contactText};
// `

