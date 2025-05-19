import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container.ts";
import {Button} from "../../../components/Button.tsx";
import {TextField} from "../../../components/text-field/TextField.tsx";
import {TextArea} from "../../../components/text-area/TextArea.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import paperplane from "../../../assets/images/paperplane.png"

export const Contacts = () => {
    return (
        <StyledContacts id="Contacts">
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <SectionTitle color={"#e84949"}>Contact me</SectionTitle>
                </FlexWrapper>

                <FlexWrapper justify={"space-between"}>
                    <LeftSide>
                        <Icon iconId={"man2"} width={"563px"} height={"412px"} viewBox={"0 0 563 412"}/>
                    </LeftSide>

                    <RightSide>
                        <StyledForm>
                            <TextField id="email" type={"email"} labelText={"Enter email address"}/>
                            <TextArea id="message" labelText={"Enter message"}></TextArea>
                            <Button type={"submit"} color={"#343d68"} width={"213px"} height={"50px"}>Send Message<img
                                src={paperplane} alt=""/>
                            </Button>
                        </StyledForm>
                    </RightSide>
                </FlexWrapper>

            </Container>
        </StyledContacts>
    );

};

const StyledContacts = styled.section`
    /*width: 1241px;*/
    height: 412px;
    margin-top: 74px;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 613px;
    height: 347px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 20px;
`

const LeftSide = styled.div`

`

const RightSide = styled.div`

`

