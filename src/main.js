import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ActivityScreen, VenueScreen, ConfirmationScreen } from './containers/index';

const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={ActivityScreen} />
        <Route path='/venue' component={VenueScreen} />
        <Route path='/confirmation' component={ConfirmationScreen} />
    </Switch>
)

export default MainRouter;
