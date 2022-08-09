import Header from "./components/Header";
import logo from "./assets/react.svg";
import "./App.css";
import Profile from "./pages/Profile";
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile userName="horizon419" />} />
          <Route path='/projects' element=
{<Projects userName='horizon419' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
