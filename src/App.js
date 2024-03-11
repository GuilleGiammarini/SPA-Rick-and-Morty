import './App.css';
import { Switch, Route, BrowserRouter, Routes } from "react-router-dom";
import Footer  from './components/public/Footer';
import Main from './components/public/Main';
import Navbar from './components/public/Navbar';
import Detail from './components/public/Detail';
import UserFrom from './components/public/UserFrom';
import MainLocation from './components/public/MainLocation';
import MainEpisode from './components/public/MainEpisode';
import MainAbout from './components/public/MainAbout';

function App() {
  return (
    <div>
        
        <Navbar />

  {/*-------------------------------------------------------------------------------------------------------------------*/}
        {/*<BrowserRouter>*/}
          {/*<Switch>*/}
            <Routes>
              <Route exact path={"/"} Component={Main} />
              <Route exact path={"/locations"} Component={MainLocation} />
              <Route exact path={"/episodes"} Component={MainEpisode} />
              <Route exact path={"/about"} Component={MainAbout} />
              <Route path={"/details/:id"} Component= {Detail} />
              <Route path={"/user-from"} Component= {UserFrom} />
            </Routes>
          {/*</Switch>*/}
        {/*</BrowserRouter>*/}
        {/*<Main />*/}

  {/*----------------------------------------------------------------------------------------------------------*/}
        
        <Footer />


    </div>
  );
}
export default App;
