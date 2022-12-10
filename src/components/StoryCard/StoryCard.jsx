import React from "react";

import {
  CardContainer,
  CardDate,
  CardImage,
  CardLink,
  CardTitle,
  ImageWrapper,
  CardInfo,
  ImageCover,
} from "./StoryCard.styled";
import CardBorder from "./CardBorder";
import ArrowIcon from "../ArrowIcon/ArrowIcon";

const StoryCard = ({ name, imgLink, date, link }) => {
  return (
    <CardContainer className="card">
      <CardBorder />
      <a href={link} target={"_blank"} rel="noreferrer">
        <ImageWrapper>
          <ImageCover />
          <CardImage src={imgLink} alt="" />
        </ImageWrapper>
        <CardInfo>
          <CardTitle>{name}</CardTitle>
          <CardDate className="date">{date}</CardDate>
          <CardLink className="link">
            <span>READ ATRTICLE</span>
            <ArrowIcon />
          </CardLink>
        </CardInfo>
      </a>
    </CardContainer>
  );
};

export default StoryCard;
