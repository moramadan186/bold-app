import React from "react";
import Stories from "../../components/Stories/Stories";

import { StoriesPgContainer, MainHead, SubHead } from "./StoriesPage.styled";

const StoriesPage = () => {
  return (
    <>
      <StoriesPgContainer>
        <MainHead>Stories</MainHead>
        <SubHead>from Riangle Team</SubHead>
        <Stories />
      </StoriesPgContainer>
    </>
  );
};

export default StoriesPage;
