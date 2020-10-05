import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/Movies" render={() => <Movies />} />
                <Route exact path="/" render={() => <Home />} />
            </Switch>
        </div>
    );
};

export default App;