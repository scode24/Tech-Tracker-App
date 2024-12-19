import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="font-thin bg-zinc-50 text-xs md:text-sm dark:bg-black dark:text-white">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/username=?" element={<HomePage />} /> */}
          <Route path="/tracker" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
