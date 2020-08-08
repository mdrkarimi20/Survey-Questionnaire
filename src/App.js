import React from 'react';
import './App.css';
import Start from "./Views/Start/Start";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from 'reactstrap';

function App() {
  return (
    <div className='App'>
      <Router>
        <Container fluid={true} className="survey">
          <Start />
          <Switch>
            {/*<Route exact path="/question/:id" >
              <question />
            </Route> */}
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
