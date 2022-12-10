import styled from "styled-components";

export const ArticlesContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5rem;
    margin-top: 6rem;
    margin-bottom: 9rem;
    padding: 0 7rem 0 2rem;
    @media only screen and (max-width: 65em) {
        gap: 1.2rem;
        padding: 0 1.4rem 0 0.5rem;
        margin-bottom: 7rem;
  }
`

export const LoadMore = styled.div.attrs({className:"load_more"})`
    text-align: center;
`
export const LoadMoreBtn = styled.button`
    font-size: 52px;
    font-family: 'Magnita',serif;
    display: inline-block;
    outline: none;
    position: relative;
    padding: 9px 0;
    margin-bottom: 12rem;
    transition: color 0.3s ease;
    
    color: ${({ theme }) => theme.colors.text};
    &:hover{
        color: rgb(244, 51, 51);
    }

    &::after{
        content: "";
        border-bottom: 2px solid rgb(244, 51, 51);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

    @media only screen and (max-width: 65em) {
        font-size: 42px;
    }
`