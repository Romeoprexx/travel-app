import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainHome from './Components/MainHome';
import NewYork from './Components/NewYork';
import AppStore from './Components/AppStore';
import London from './Components/London';
import Paris from './Components/Paris';
import LasVegas from './Components/LasVegas';
import Rome from './Components/Rome';
import Naples from './Components/Naples';
import Barcelona from './Barcelona';
import Rmadrid from './Rmadrid';
import Dubai from './Components/Dubai';
import Milan from './Components/Milan';
import Florence from './Components/Florence';
import Venice from './Components/Venice';
import Edinburgh from './Components/Edinburg';
import Singapore from './Components/Singapore';
import Budapest from './Components/Budapest';
import Sydney from './Components/Sydney';
import Manila from './Components/Manila';
import Bermuda from './Components/Bermuda';
import Toronto from './Components/Toronto';




const CityRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainHome} />
      <Route exact path="/cities/new-york" component={NewYork} />
      <Route exact path="/cities/las-vegas" component={LasVegas} />
      <Route exact path="/cities/rome" component={Rome} />
      <Route exact path="/cities/paris" component={Paris} />
      <Route exact path="/cities/london" component={London} />
      <Route exact path="/cities/dubai" component={Dubai} />
      <Route exact path="/cities/barcelona" component={Barcelona} />
      <Route exact path="/cities/madrid" component={Rmadrid} />
      <Route exact path="/cities/singapore" component={Singapore} />
      <Route exact path="/cities/venice" component={Venice} />
      <Route exact path="/cities/milan" component={Milan} />
      <Route exact path="/cities/naples" component={Naples} />
      <Route exact path="/cities/budapest" component={Budapest} />
      <Route exact path="/cities/edinburg" component={Edinburgh} />
      <Route exact path="/cities/sydney" component={Sydney} />
      <Route exact path="/cities/manila" component={Manila} />
      <Route exact path="/cities/bermuda" component={Bermuda} />
      <Route exact path="/cities/toronto" component={Toronto} />
      <Route exact path="/cities/florence" component={Florence} />
      <Route exact path="/app" component={AppStore} />
    </Switch>
  </BrowserRouter>
);

export default CityRoutes;
