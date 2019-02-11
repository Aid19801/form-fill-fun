import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, ActivityScreen, VenueScreen } from './containers/index';

const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/activity' component={ActivityScreen} />
        <Route path='/venue' component={VenueScreen} />
    </Switch>
)

export default MainRouter;
