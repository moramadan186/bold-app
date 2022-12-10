import { NavLink } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";

import { Navbar, ThemeButton } from "./Header.styled";

let activeStyle = {
  color: "rgb(244, 51, 51)",
};

const HeaderNav = ({
  navItems,
  drawerRef,
  openDrawer,
  selectedTheme,
  HandleThemeChange,
}) => {
  return (
    <>
      <Navbar.Items ref={drawerRef} open={openDrawer} className="nav_item">
        {navItems.map((item) => (
          <Navbar.Item key={item.id} ref={item.ref}>
            <NavLink
              to={item.slug}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {item.name}
            </NavLink>
          </Navbar.Item>
        ))}
        <Navbar.Item onClick={HandleThemeChange}>
          <ThemeButton
            className={
              selectedTheme.name === "light-theme" ? "isLight" : "isDark"
            }
          >
            <BsMoon />
            <BsSun />
          </ThemeButton>
        </Navbar.Item>
      </Navbar.Items>
    </>
  );
};

export default HeaderNav;
