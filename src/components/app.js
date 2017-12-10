import React, { Component } from 'react'
import {Row, Column} from '../components/layout/layoutComponents'
import {Link, Switch, Route} from 'react-router-dom';
import {MemoryRouter} from 'react-router';
import {PageOne} from '../components/pageOne';
import {PageTwo} from '../components/pageTwo';
import {ProtectedPage} from '../components/protectedPage';
import {PageThree} from '../components/pageThree';

const ProtectedRoute = ({component: Component, isAuthenticated}) => (
  <Route render={props =>(
  isAuthenticated ? (
    <Component />
  ):(
  <ProtectedPage />
  )
  )}/>
  )
  
 export class AppLayout extends Component {
  render() {
    return (

      <div>
      <MemoryRouter>
        <Column>
          <Row>
            <Link to="/one">Link One</Link>
            <Link to="/two">Link Two</Link>
            <Link to="three">Link Three</Link>
          </Row>
          <div>
            <Switch>
            <Route path="/one" component={PageOne} />
            <Route path="/two" component={PageTwo} />
            <ProtectedRoute path="/three" component={PageThree}  />
            </Switch>
          </div>
        </Column>
      </MemoryRouter>
      </div>

    );
  }
}