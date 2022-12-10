import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AnimatedCursor from "react-animated-cursor";

import Header from "./components/Header/Header";
import StoriesPage from "./Pages/StoriesPage/StoriesPage";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { GlobalStyles } from "./components/Styles/Global";
import { light, dark } from "./components/Styles/Theme.styled";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(dark);
  const HandleThemeChange = () => {
    if (selectedTheme.name === "light-theme") setSelectedTheme(dark);
    else setSelectedTheme(light);
  };

  const MemoizedStoriesPage = React.useMemo(() => <StoriesPage />, []);
  return (
    <ThemeProvider theme={selectedTheme}>
      <Loader />
      <GlobalStyles />
      <AnimatedCursor
        color="244, 51, 51"
        innerSize={0}
        outerSize={40}
        outerScale={1.9}
      />
      <div className="app">
        <Header
          selectedTheme={selectedTheme}
          HandleThemeChange={HandleThemeChange}
        />
        <div className="main container">
          <Routes>
            <Route path="/" element={MemoizedStoriesPage} />
            <Route path="/work" element={MemoizedStoriesPage} />
            <Route path="/about" element={MemoizedStoriesPage} />
            <Route path="/stories" element={MemoizedStoriesPage} />
            <Route path="/contact" element={MemoizedStoriesPage} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
