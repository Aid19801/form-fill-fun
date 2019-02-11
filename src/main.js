import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, ActivityScreen, VenueScreen } from './Containers/index';

const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/activity' component={ActivityScreen} />
        <Route path='/venue' component={VenueScreen} />
    </Switch>
)

export default MainRouter;
