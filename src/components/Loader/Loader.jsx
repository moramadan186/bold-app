import { useEffect, useState } from "react";
import {
  LoaderContanienr,
  LoaderCounter,
  LoaderCover,
  LoaderImg,
} from "./Loader.styled.";
import { getLoaderTimelines } from "../../animation/loader-timeline";
import logo from "../../assets/logo.svg";

const Loader = () => {
  let [counter, setCounter] = useState(0);
  useEffect(() => {
    getLoaderTimelines(setCounter);
  }, []);

  return (
    <LoaderContanienr>
      <LoaderCover />
      <LoaderImg src={logo} />
      <LoaderCounter>{counter.toFixed()}</LoaderCounter>
    </LoaderContanienr>
  );
};

export default Loader;
