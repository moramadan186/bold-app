import styled from "styled-components";
export const CardContainer = styled.div`
    padding: 40px 0;
    flex-basis:calc(50% - 3rem);
    height: fit-content;
    position: relative;

    @media only screen and (max-width: 65em) {
        padding: 20px 0;
        flex-basis:100%;
    }

    &:first-child{
        flex-basis:100%;
    }

    & h3{transition: all 0.3s ease;}

    &:hover h3{
        color: rgb(244, 51, 51);
    }

    &:hover img{
        transform: scale(1.1);
    }
`

export const ImageWrapper = styled.div.attrs({ className: "image_wrapper" })`
    overflow :hidden;
    width: 100%;
    height: fit-content;
    transform: scaleX(0);
    margin-left: 40px;
    position: relative;
    transform-origin: center;

    @media only screen and (max-width: 65em) {
        margin-left: 20px;
    }
`
export const ImageCover = styled.div.attrs({ className: "image_cover" })`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    opacity: 1;
    background-color: rgb(244, 51, 51);
`

export const CardImage = styled.img`
    z-index: 2;
    width: 100%;
    transition: all 1s ease;

`
export const CardInfo = styled.div.attrs({ className: "card_info" })`
    padding: 35px 40px 0;

    @media only screen and (max-width: 65em) {
        padding: 35px 20px 0;
    }
    
    & > *{
        opacity: 0;
    }
`
export const CardTitle = styled.h3`
    font-size: 42px;
    margin-bottom:1.7rem;
    @media only screen and (max-width: 65em) {
        font-size: 2rem;
    }

`
export const CardDate = styled.p`
    font-size: 16px;
    color: #9CA3AF; 
`
export const CardLink = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    & > span{
        line-height: 1;
        font-size: 0.86rem;
        font-weight: 600;
        margin-right: 8px;
        transition: all 0.3s ease;
    }
    & > span:hover{
        color: rgb(244, 51, 51);
        transform: translateX(8px);
    }
`