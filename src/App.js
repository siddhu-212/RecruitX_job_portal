import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Landing from './components/landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Companies from "./components/companies";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/companies" element={<Companies />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
