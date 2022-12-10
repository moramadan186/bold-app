import styled from "styled-components"
export const LoaderContanienr = styled.div.attrs({ className: "loader_container" })`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 30;
`
export const LoaderCover = styled.div.attrs({ className: "loader_cover" })`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(244, 51, 51);
    z-index: 31;
    transform-origin:"50% 50%";

`

export const LoaderImg = styled.img.attrs({ className: "loader_img" })`
    position: absolute;
    top:20%;
    display: inline-block;
    width: 200px;
    z-index: 32;
`
export const LoaderCounter = styled.div.attrs({ className: "loader_counter" })`
    position: absolute;
    position: absolute;
    top:60%;
    font-size: 7rem;
    font-weight: bold;
    z-index: 32;
    font-family: 'Magnita',serif;
    color:rgb(244, 51, 51);
`