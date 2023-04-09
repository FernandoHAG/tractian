import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import { ConfigProvider, theme as antTheme } from "antd";
import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((state) => state.config);
  const { darkAlgorithm, defaultAlgorithm } = antTheme;
  const [isLightMode, setIsLightMode] = useState(theme === "light");

  useEffect(() => {
    setIsLightMode(theme === "light");
  }, [theme]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isLightMode ? defaultAlgorithm : darkAlgorithm,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} exact>
            <Route index element={<LandingPage />} />
            <Route path="*" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
