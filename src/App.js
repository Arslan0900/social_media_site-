import { Box, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Pages from "./Components/NavSideBar/Pages";
import Friends from "./Components/NavSideBar/Friends";
import Groups from "./Components/NavSideBar/Groups";
import Home from "./Components/Home";
import MarketPlace from "./Components/NavSideBar/MarketPlace";
import Settings from "./Components/NavSideBar/Settings";
import Profile from "./Components/NavSideBar/Profile";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setMode={setMode} mode={mode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Groups" element={<Groups />} />
          <Route path="/MarketPlace" element={<MarketPlace />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
