import './App.css';
import HeaderMenu from "./components/HeaderMenu";
// import Form from "./components/Form";
// import Counter from "./components/Counter";
// import {useState} from "react";
import Box from "./components/Box";
import List from "./components/List";
import Events from "./components/Events";
// import {Routes, Route} from "react-router-dom";
// import Home from "./pages/Home";
// import Contacts from "./pages/Contacts";
// import PageNotFound from "./pages/PageNotFound";

function App() {
  // const [isShow, setIsShow] = useState(true);
  return (
    <div className="App">
      <div>
        <Box/>
        <h1>Hello World!</h1>
        <HeaderMenu/>
        <List />
        <Events />
      </div>
    </div>
    //   <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path='/contacts' element={<Contacts />} />
    //   <Route path='*' element={<PageNotFound/>} />
    //   <Route />
    //   </Routes>
  );
}

export default App;
