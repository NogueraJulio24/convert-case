import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactGa from 'react-ga';

/* import pages */
import Home from './pages/Home';
import Privacity from './pages/Privacity';
import NotFoundPage from './pages/NotFoundPage';
import About from './pages/About';
import TermsOfUse from './pages/TermsOfUse';


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
              <Route exact path="/" component={Home}></Route>
              <Route exac path="/about" component={About}></Route>
              <Route exact path="/privacity-policy" component={Privacity}></Route>
              <Route exact path="/terms-of-use" component={TermsOfUse}></Route>
              <Route path="*" component={NotFoundPage} />
            </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
