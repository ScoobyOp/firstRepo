import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import PubgPage from "./page/PubgPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pubg" element={<PubgPage />} />
        <Route path="/about" element={<AboutPage></AboutPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
