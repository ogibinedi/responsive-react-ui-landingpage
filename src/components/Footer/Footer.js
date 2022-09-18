import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, WebsiteCopyRight, SocialIcons, SocialIconLink } from './Footer.elements'

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join our exclusive to receive the latest new and trends
            </FooterSubHeading>
            <FooterSubText>
                You can unsubcribe at any time.
            </FooterSubText>
            <Form>
                <FormInput type="email" name="email" placeholder="Input Email Here..." />
                <Button fontBig>Subscribe Now</Button>
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to="/sign-up">How it works</FooterLink>
                    <FooterLink to="/">Testimonials</FooterLink>
                    <FooterLink to="/">Careers</FooterLink>
                    <FooterLink to="/">Investors</FooterLink>
                    <FooterLink to="/">Term of Service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/sign-up">How it works</FooterLink>
                    <FooterLink to="/">Testimonials</FooterLink>
                    <FooterLink to="/">Careers</FooterLink>
                    <FooterLink to="/">Investors</FooterLink>
                    <FooterLink to="/">Term of Service</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to="/sign-up">How it works</FooterLink>
                    <FooterLink to="/">Testimonials</FooterLink>
                    <FooterLink to="/">Careers</FooterLink>
                    <FooterLink to="/">Investors</FooterLink>
                    <FooterLink to="/">Term of Service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/sign-up">How it works</FooterLink>
                    <FooterLink to="/">Testimonials</FooterLink>
                    <FooterLink to="/">Careers</FooterLink>
                    <FooterLink to="/">Investors</FooterLink>
                    <FooterLink to="/">Term of Service</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/">
                    <SocialIcon />
                    REACT APP
                </SocialLogo>
                <WebsiteCopyRight>
                    &copy; { year } REACT APP 
                </WebsiteCopyRight>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer