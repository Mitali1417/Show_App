// import logo from './logo.svg';
import {Routes, Route} from "react-router-dom"
import Cards from "./components/Cards";
import Details from "./components/Details";
import './index.css'

const App = () => {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Cards/>} />
    <Route path="/shows/:id" element={<Details/>} />
      </Routes>
    </>
  );
};

export default App;
