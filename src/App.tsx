import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div>Address book</div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
