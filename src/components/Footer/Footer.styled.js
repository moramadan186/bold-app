import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top:1px solid ${({ theme }) => theme.colors.border};
    @media only screen and (max-width: 65em) {
        flex-direction: column;
    }

`
export const FooterRights = styled.p`
    padding: 20px;
    border-right:1px solid ${({ theme }) => theme.colors.border};
    @media only screen and (max-width: 65em) {
        border-right: none;
        order:2;
    }
`

export const FooterLogo = styled.div`
    flex-grow: 1;
    text-align: center;
    padding-top: 30px;
    @media only screen and (max-width: 65em) {
        order: 1; 
    }
`
export const FooterLinks = styled.ul`
    display: flex;
    list-style-type: none;
    @media only screen and (max-width: 65em) {
        width: 100%;
        border-top:1px solid ${({ theme }) => theme.colors.border};
        justify-content: space-around;
        order: 3; 
    }
`
export const FooterLink = styled.li`
    padding: 20px;
    border:1px solid ${({ theme }) => theme.colors.border};
    border-top: none;
    border-bottom: none;
    flex-grow: 1;
    text-align: center;
`
