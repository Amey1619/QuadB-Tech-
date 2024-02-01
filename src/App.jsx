import "./App.css";
import Home from "./Components/Home/Home";
import { MovieProvider } from "./Context/MovieContext";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Header from "./Components/Navbar/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <MovieProvider>
        <Router>
          <div className="app-container">
            <Header />
            <div className="content-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:name" element={<MovieDetails />} />
              </Routes>
            </div>
          </div>
        </Router>
      </MovieProvider>
    </>
  );
}

export default App;
