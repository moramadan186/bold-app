import {
  FooterContainer,
  FooterLogo,
  FooterLinks,
  FooterLink,
  FooterRights,
} from "./Footer.styled";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterRights>© 2013 - 2022 Riangle - All rights reserved.</FooterRights>
      <FooterLogo>
        <img src={logo} alt="logo" />
      </FooterLogo>
      <FooterLinks>
        <FooterLink>
          <a href="link">TWITTER</a>
        </FooterLink>
        <FooterLink>
          <a href="link">INSTGRAM</a>
        </FooterLink>
        <FooterLink>
          <a href="#ink">DRIBBLE</a>
        </FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
