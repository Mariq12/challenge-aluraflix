import { styled } from 'styled-components';
import { BsInstagram, BsTwitterX, BsLinkedin } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";

import './Footer.css';
import logo from '../../assets/logo.png';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: var(--color-black);
    padding: 22px;
    box-sizing: border-box;
`;

const IconContainer = styled.ul`
    background-color: transparent;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        background-color: var(--color-black);
        display: inline-block;
        margin-right: 1.5rem;
        padding: 0.5rem;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: clamp(30%, 100%, 10.528rem); 
        height: auto;
        background-color: var(--color-black);
    }
`;

const FooterText = styled.p`
    background-color: transparent;
    font-size: 13px;
    color: var(--color-white-smoke);
    margin: 0;
    line-height: 1.4;
`;

function Footer() {
    return (
        <StyledFooter className='container'>
            <IconContainer>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100084487023873">
                    <FaSquareFacebook className='icons'/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Flor_Maria_LP">
                    <BsTwitterX className='icons'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/flormarialabandapuchaicela">
                    <BsInstagram className='icons' />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/flor-mar%C3%ADa-labanda-puchaicela-ing-ti//">
                    <BsLinkedin className='icons' />
                    </a>
                </li>
            </IconContainer>
            <LogoContainer className='logo'>
                <img src={logo} alt="Logo" />
            </LogoContainer>
            <FooterText className='text'>
                Diseñado por Alura.<br />
                Desarrollado por Flor María Labanda P.<br />
                18 de Junio de 20024
            </FooterText>
        </StyledFooter>
    );
}

export default Footer