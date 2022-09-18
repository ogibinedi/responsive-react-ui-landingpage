import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

const FooterContainer = styled.div`
    background-color: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 24px;
    margin-bottom: 24px;
`;

const FooterSubHeading = styled.p`
    color: #F7F8FA;
    font-size: 24px;
    font-weight: 300;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 24px;
`;

const FooterSubText = styled.p`
    color: #F7F8FA;
    font-size: 20px;
    margin-bottom: 24px;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`;

const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 4px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;

    &::placeholder{
        color: #242424;
    }

    &:focus {
        transition: all 0.30s ease-in-out;
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        border: 1px solid rgba(81, 203, 238, 1);
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`;

const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

const FooterLinksWrapper = styled.div`
    display: flex;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

const FooterLinkItems = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

const FooterLinkTitle = styled.h2`
    color: whitesmoke;
    margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
    color: whitesmoke;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: teal;
        transition: 0.3s ease-out;
    }
`;

const SocialMedia = styled.section`
    width: 100%;
    max-width: 1000px;
`;

const SocialMediaWrap = styled.div`
    display: flex;
    width: 90%;
    max-width: 1000px;
    align-items: center;
    justify-content: space-between;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

const SocialLogo = styled(Link)`
    color: whitesmoke;
    justify-self: start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    text-decoration: none;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

const SocialIcon = styled(FaReact)`
    margin-right: 10px;
`;

const WebsiteCopyRight = styled.small`
    color: whitesmoke;
    margin-bottom: 16px;
`;


const SocialIconLink = styled.a`
    color: whitesmoke;
    font-size: 24px;
`;

export {
    FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteCopyRight,
    SocialIcons,
    SocialIconLink
}