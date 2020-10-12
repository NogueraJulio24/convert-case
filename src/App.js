import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
/* import pages */
import Home from './pages/Home';
import Privacity from './pages/Privacity';

/* import components */
import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
