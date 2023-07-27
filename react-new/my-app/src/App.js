import './App.css';
// import HeaderMenu from "./components/HeaderMenu";
// import Form from "./components/Form";
// import Counter from "./components/Counter";
// import {useState} from "react";
// import Box from "./components/Box";
// import List from "./components/List";
// import Events from "./components/Events";
import {Routes, Route, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Pages from "./pages/Pages";
import Page from "./pages/Page";
import PageNotFound from "./pages/PageNotFound";

function App() {
  // const [isShow, setIsShow] = useState(true);
  return (
    // <div className="App">
    //   <div>
    //     <Box/>
    //     <h1>Hello World!</h1>
    //     <HeaderMenu/>
    //     <List />
    //     <Events />
    //   </div>
    // </div>
      <div>
          <nav className="navigation">
              <NavLink to=''>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/pages'>Pages</NavLink>
              <NavLink to='/contacts'>Contacts</NavLink>
          </nav>

          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/pages' element={<Pages />} />
              <Route path='/contacts' element={<Contacts />} />

              <Route path='/products/:id' element={<Page />} />

              <Route path='*' element={<PageNotFound/>} />
              <Route />
          </Routes>
      </div>

  );
}

export default App;
