import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactGa from 'react-ga';

/* import pages */
import Home from './pages/Home';
import Privacity from './pages/Privacity';

/* import components */
import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useEffect(() =>{
    ReactGa.initialize('UA-180445945-1')

    //to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header></Header>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/privacity-policy" exact component={Privacity}></Route>
            </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
