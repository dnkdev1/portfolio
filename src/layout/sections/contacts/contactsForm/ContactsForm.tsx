import styled from "styled-components";
import {TextField} from "../../../../components/text-field/TextField.tsx";
import {TextArea} from "../../../../components/text-area/TextArea.tsx";
import {Button} from "../../../../components/Button.tsx";
import paperplane from "../../../../assets/images/contacts/paperplane.png";

export const ContactsForm = () => {
    return (
        <StyledContactsForm>
            <TextField id="email" type={"email"} labelText={"Enter email address"}/>
            <TextArea id="message" labelText={"Enter message"}></TextArea>
            <Button type={"submit"} color={"#343d68"} width={"213px"} height={"50px"}>
                Send Message
                <img src={paperplane} alt=""/>
            </Button>
        </StyledContactsForm>
    );
}

const StyledContactsForm = styled.form`
    border: 1px solid red;
    max-width: 613px;
    width: 613px;
    height: 347px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 20px;
`