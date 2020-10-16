import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import landing from './pages/landing';
import orphanagesMap from './pages/orphanagesMap';
import orphanage from './pages/orphanage';
import createOrphanage from './pages/createOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={landing} />
                <Route path="/app" component={orphanagesMap} />

                <Route path="/orphanages/create" component={createOrphanage} />
                <Route path="/orphanages/:id" component={orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
