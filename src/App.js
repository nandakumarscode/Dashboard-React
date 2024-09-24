import "./cssreset.css";
import './App.css';
import Dahboard from './Pages/Dahboard';
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='warapper'>
      <Header/>
      <Routes>
        <Route path="/" element={<Dahboard/>}></Route>
      </Routes>
      
      </div>
    </div>
  );
}

export default App;
