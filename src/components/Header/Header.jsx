import { useState, useEffect, useRef, createRef } from "react";
import { gsap } from "gsap";

import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderMenu from "./HeaderMenu";
import { Navbar } from "./Header.styled";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const items = [
  {
    id: "work",
    name: "WORK",
    slug: "work",
  },
  {
    id: "about",
    name: "ABOUT",
    slug: "about",
  },
  {
    id: "stories",
    name: "STORIES",
    slug: "stories",
  },
  {
    id: "contact",
    name: "CONTACT",
    slug: "contact",
  },
];

const Header = ({ selectedTheme, HandleThemeChange }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerRef = useRef(null);
  const menuTimeL = useRef();
  const { width } = useWindowDimensions();
  const [navItems] = useState(
    items.map((item) => {
      return {
        ...item,
        ref: createRef(),
      };
    })
  );

  const itemsRefs = navItems.map((item) => item.ref.current);

  useEffect(() => {
    menuTimeL.current = gsap.timeline();
    if (openDrawer) {
      menuTimeL.current
        .to(".main", {
          duration: 0.2,
          y: 50,
          opacity: 0,
        })
        .from([drawerRef.current, itemsRefs], {
          duration: 0.3,
          x: 30,
          y: 30,
          opacity: 0,
          stagger: 0.1,
        })
        .from("ul li:last-child", {
          duration: 0.3,
          x: 30,
          y: 30,
          opacity: 0,
          stagger: 0.1,
        });
    }
    return () => {
      menuTimeL.current.revert();
    };
  }, [openDrawer]);

  useEffect(() => {
    menuTimeL.current.reverse().revert();
  }, [width]);

  return (
    <div className="header">
      <Navbar.Fixed>
        <Navbar.Wrapper className="container">
          <HeaderLogo selectedTheme={selectedTheme} />
          <HeaderNav
            navItems={navItems}
            openDrawer={openDrawer}
            drawerRef={drawerRef}
            selectedTheme={selectedTheme}
            HandleThemeChange={HandleThemeChange}
          />
          <HeaderMenu
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
            drawerRef={drawerRef}
          />
        </Navbar.Wrapper>
      </Navbar.Fixed>
    </div>
  );
};
export default Header;
