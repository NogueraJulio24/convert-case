import React from 'react';
/* import pages */
import Home from './pages/Home';

/* import components */
import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Home />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
