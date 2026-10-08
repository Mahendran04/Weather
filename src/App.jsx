 import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Hourly from "./pages/Hourly";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <div className="dashboard">

        <Sidebar />

        <main className="main-content">

          <Navbar />

          <Routes>

            <Route path="/" element={<Home />} />

            <Route
              path="/forecast"
              element={<Forecast />}
            />

            <Route
              path="/hourly"
              element={<Hourly />}
            />

            <Route
              path="/favorites"
              element={<Favorites />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

            <Route
              path="/about"
              element={<About />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;