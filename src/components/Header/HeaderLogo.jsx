import { Navbar } from "./Header.styled";

import logo from "../../assets/logo.svg";
import logoBlackText from "../../assets/logo-text-black.png";
import logoWhiteText from "../../assets/logo-text-white.png";

const HeaderLogo = ({ selectedTheme }) => {
  return (
    <Navbar.Logo>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <img
          src={
            selectedTheme.name === "light-theme" ? logoBlackText : logoWhiteText
          }
          alt="logo text"
          width={100}
        />
      </div>
    </Navbar.Logo>
  );
};

export default HeaderLogo;
