import { useEffect } from "react";
import { gsap } from "gsap";

import { Icon } from "./ArrowIcon.styled";

const ArrowIcon = () => {
  useEffect(() => {
    gsap.fromTo(
      ".arrow_icon > svg",
      {
        x: 0,
      },
      {
        x: 6,
        duration: 0.5,
        stagger: 0.5,
        repeat: -1,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".arrow_icon > svg:nth-child(2) , .arrow_icon > svg:nth-child(3)",
      {
        opacity: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.5,
        repeat: -1,
        ease: "none",
      }
    );
  }, []);

  return (
    <Icon className="arrow_icon">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0859 5.46875L20.1172 12.5L13.0859 19.5312M19.1406 12.5H4.88281"
          stroke="#F43333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <svg
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="1"
          d="M1.08594 1.46875L8.11719 8.5L1.08594 15.5312"
          stroke="#F43333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <svg
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="1"
          d="M1.08594 1.46875L8.11719 8.5L1.08594 15.5312"
          stroke="#F43333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </Icon>
  );
};

export default ArrowIcon;
