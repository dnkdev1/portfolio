import styled from 'styled-components';
import {Container} from "../../../components/Container";
import {FootersWrapper} from "./footersWrapper/FootersWrapper.tsx";
import {footersWave} from "../../../components/FootersWave.ts";
import {footerWaveMobile} from "../../../components/FooterWaveMobile.ts";
import {theme} from "../../../styles/Theme.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FootersWrapper/>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-image: url('data:image/svg+xml;utf8,${footersWave}');
    min-height: 550px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding-top: 200px;

    @media ${theme.media.mobile} {
        background-image: url('data:image/svg+xml;utf8,${footerWaveMobile}');
    }
`

