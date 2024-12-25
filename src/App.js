import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import BarChartViewer from "./components/BarChartViewer";
import Header from "./components/Header";
import PieChartViewer from "./components/PieChartViewer";
import TileMapViewer from "./components/TileMapViewer";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import TitlePage from "./pages/TitlePage";

function App() {
  return (
    <div className="font-thin bg-zinc-50 text-xs md:text-sm dark:bg-black dark:text-white">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/tracker" />} />
          <Route path="/tracker" element={<TitlePage />} />
          <Route path="tracker" element={<HomePage />}>
            <Route path="tileMap" element={<TileMapViewer />} />
            <Route path="barChart" element={<BarChartViewer />} />
            <Route path="pieChart" element={<PieChartViewer />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
