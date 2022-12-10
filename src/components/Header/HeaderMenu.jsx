import { useEffect, useRef } from "react";
import { MenuBurger, StyledBurger } from "./Header.styled";

const HeaderMenu = ({ openDrawer, setOpenDrawer, drawerRef }) => {
  const StyledBurgerRef = useRef(null);
  useEffect(() => {
    setOpenDrawer(false);
    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  const closeDrawer = (event) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target) &&
      StyledBurgerRef.current &&
      !StyledBurgerRef.current.contains(event.target) &&
      StyledBurgerRef.current.parent &&
      !StyledBurgerRef.current.parent.contains(event.target)
    )
      setOpenDrawer(false);
  };

  return (
    <MenuBurger onClick={() => setOpenDrawer(!openDrawer)}>
      <StyledBurger ref={StyledBurgerRef} open={openDrawer}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </StyledBurger>
    </MenuBurger>
  );
};

export default HeaderMenu;
