import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ActivityScreen, VenueScreen } from './containers/index';

const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={ActivityScreen} />
        <Route path='/venue' component={VenueScreen} />
    </Switch>
)

export default MainRouter;
