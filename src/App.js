import React from 'react';
import logo from './logo.svg';
import './css/style.css';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home'
import Attractions from './components/attractions/Attractions'
import Concessions from './components/misc/Concessions'
import AttractionsModal from './components/attractions/AttractionsModal'
import Footer from './components/Footer'
import RoundAbout from './components/attractions/RoundAbout';
import {BrowserRouter as Router} from 'react-router-dom'
import FerrisWheel from './components/attractions/FerrisWheel';
import RollaCosta from './components/attractions/RollaCosta';
import Purge from './components/attractions/Purge';
import Leo from './components/attractions/Leo';
import Carousel from './components/attractions/Carousel';
import ElDiablo from './components/attractions/ElDiablo';
import TopDrop from './components/attractions/TopDrop';
import Tickets from './components/misc/Tickets';
import Lineup from './components/misc/Lineup';




function App() {
  return (
    <div className="App">

    
        <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/attractions" component={Attractions} />
          <Route path="/lineup" component={Lineup} />
          <Route path="/concessions" component={Concessions} />
          <Route path="/ferriswheel" component={FerrisWheel} />
          <Route path="/rollacosta" component={RollaCosta} />
          <Route path="/purgemaze" component={Purge} />
          <Route path="/leomagician" component={Leo} />
          <Route path="/carousel" component={Carousel} />
          <Route path="/eldiablo" component={ElDiablo} />
          <Route path="/topdrop" component={TopDrop} />
          <Route path="/roundabout" component={RoundAbout} />
          <Route path="/tickets" component={Tickets} />
        </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
