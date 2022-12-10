import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import StoryCard from "../StoryCard/StoryCard";
import { ArticlesContainer, LoadMoreBtn, LoadMore } from "./Stories.styled";
import { getCardTimelines } from "../../animation/card-timeline";

gsap.registerPlugin(ScrollTrigger);

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(5);
  const intialStories = stories.slice(0, index);

  useEffect(() => {
    // fetch list of articles
    fetch("articles.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setStories(data);
      });
  }, []);

  useEffect(() => {
    if (index >= stories.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [index, stories.length]);

  const loadMore = () => {
    setIndex(index + 5);
  };

  useEffect(() => {
    var cards = gsap.utils.toArray(".card");
    for (let i = index - 5; i < cards.length; i++) {
      getCardTimelines(cards, i);
    }
  }, [index, intialStories]);

  return (
    <div>
      <ArticlesContainer>
        {intialStories.map((story) => (
          <StoryCard
            key={story.name}
            name={story.name}
            imgLink={story.img}
            date={story.date}
            link={story.link}
          />
        ))}
      </ArticlesContainer>
      {!isCompleted ? (
        <LoadMore>
          <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>
        </LoadMore>
      ) : (
        ""
      )}
    </div>
  );
};

export default Stories;
