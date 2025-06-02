import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container.ts";
import {MainLeftSide} from "./mainLeftSide/MainLeftSide.tsx";
import {MainRightSide} from "./mainRightSide/MainRightSide.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap-reverse"}>
                    <MainLeftSide/>
                    <MainRightSide/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 495px;
    margin-top: 100px;
    border: 1px solid green;
`