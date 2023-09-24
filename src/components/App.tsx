import { StrictMode, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Test from "./Test";
import Navbar from "./Navbar";
import { AppGlobalStyle, colorsDark, colorsLight } from "../styles/App.style";
import { ThemeProvider } from "styled-components";
import { DarkModeStore } from "../stores/DarkMode.store";
import { useStore } from "@nanostores/react";
import Page30 from "./Page30";



export default function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme !== "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };
    // -----------------------------------------------------------------------
  const { isDark } = useStore(DarkModeStore);
  return (
    <StrictMode>
      <BrowserRouter>
      {/* <ThemeProvider theme= {colorsDark}> */}
      <ThemeProvider theme= {isDark ? colorsDark :colorsLight}>
      
        <AppGlobalStyle  />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page30" element={<Page30 />} />
          <Route path="/About" element={<About />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
