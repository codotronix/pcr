import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Header } from './components/common'
import './App.css';
import { headerbarRoutes } from './utils/routes'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            {
              headerbarRoutes.map(r => (
                <Route key={r.name} exact={true} path={r.path} component={r.component}>
                </Route>
              ))
            }
            <Route path="**" render={() => <span>No Match</span>} />
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
