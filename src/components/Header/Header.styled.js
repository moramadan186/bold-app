import styled from "styled-components";

export const Navbar = {
  Fixed: styled.div`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;
      background-color: ${({ theme }) => theme.colors.navBackground};
      backdrop-filter: blur(10px);
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
      z-index: 10;
    `,

  Wrapper: styled.nav`
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      margin: auto;
    `,

  Logo: styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-grow: 1;
      height: 100%;
      width: 200px;
      border-right: 1px solid ${({ theme }) => theme.colors.border};
      & > div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
      }
      & > :first-child {
        border-inline: 1px solid ${({ theme }) => theme.colors.border};
      }
    `,

  Items: styled.ul`
      display: flex;
      list-style: none;
      align-items: center;
      height: 100%;
  
      @media only screen and (max-width: 65em) {
        position: fixed;
        right: 0;
        top: 60px;
        font-family: "Magnita", serif;
        background-color: ${({ theme }) => theme.colors.background};
        text-align: center;
  
        height: calc(100vh - 60px);
        width: 100%;
  
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: ${({ open }) => (open ? `translateX(0)` : `translateX(100%)`)};
      }
    `,

  Item: styled.li`
      height: 100%;
      min-width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      cursor: pointer;
      &,
      & * {
        transition: color 0.3s ease,color 0.3s ease;
        color: ${({ theme }) => theme.colors.text};
      }
      border-right: 1px solid ${({ theme }) => theme.colors.border};
      & a {
        padding: 1.2rem 1.4rem;
      }
      &:hover {
        background-color: rgba(244, 51, 51, 0.1);
      }
      &:hover * {
        color: rgb(244, 51, 51);
      }
  
      @media only screen and (max-width: 65em) {
        width: 100%;
        font-size: 32px;
        line-height: 1.55;
        font-family: Magnita, serif;
        font-weight: 500;
        padding: 0.7rem 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
        border-left: 0;
      }
    `,
};

export const MenuBurger = styled.div`
    display: none;
    @media only screen and (max-width: 65em) {
      display: flex;
    }
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 20px;
    cursor: pointer;
    &:hover {
      background-color: rgba(244, 51, 51, 0.1);
      color: rgb(244, 51, 51);
    }
`;

export const StyledBurger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.3rem;
    height: 1.2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
  
    &:focus {
      outline: none;
    }
  
    div {
      width: 100%;
      height: 0.15rem;
      background: ${({ theme }) => theme.colors.text};
      border-radius: 10px;
      transition: all 0.3s ease;
      position: relative;
      transform-origin: 1px;
  
      :first-child,
      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        transition-delay: ${({ open }) => (open ? "0.3s" : "0s")};
      }
  
      :nth-child(2) {
        transform: ${({ open }) => (open ? "scaleX(0)" : "scaleX(1)")};
        transform-origin: center;
        transition-delay: ${({ open }) => (open ? "0s" : "0.3s")};
      }
  
      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
`;

export const ThemeButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    &.isLight > :nth-child(2), &.isDark > :nth-child(1){
      display: none;
    }
`;

