import styled from "styled-components";
import {TextField} from "../../../../components/text-field/TextField.tsx";
import {TextArea} from "../../../../components/text-area/TextArea.tsx";
import {Button} from "../../../../components/Button.tsx";
import paperplane from "../../../../assets/images/contacts/paperplane.png";
import {theme} from "../../../../styles/Theme.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

export const ContactsForm = () => {
    return (
        <StyledContactsForm>
            <TextField id="email" type={"email"} labelText={"Enter email address"}/>
            <TextArea id="message" labelText={"Enter message"}></TextArea>
            <FlexWrapper align={"center"}>
            <Button type={"submit"} textColor={"#fffdfd"} borderColorHover={"#343d68"} textColorHover={"#343d68"} backgroundColor={"#343d68"} width={"213px"} height={"50px"}>
                Send Message
                <img src={paperplane} alt=""/>
            </Button>
            </FlexWrapper>
        </StyledContactsForm>
    );
}

const StyledContactsForm = styled.form`
    display: flex;
    flex-direction: column;
    
    border: 1px solid red;
    width: 350px;
    height: 340px;
    flex-grow: 1;
    gap: 50px;

    @media ${theme.media.large}{
        width: 500px;
    }
    
    @media ${theme.media.mobile}{
        width: 100%;
    }
`

