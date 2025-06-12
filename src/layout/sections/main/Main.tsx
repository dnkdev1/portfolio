import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {MainText} from "./mainText/MainText.tsx";
import {MainPhoto} from "./mainPhoto/MainPhoto.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainsWrapper>
                    <MainText/>
                    <MainPhoto/>
                </MainsWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 495px;
    margin-top: 100px;
    border: 1px solid green;
`

const MainsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1020px) {
        justify-content: center;
    }
`
