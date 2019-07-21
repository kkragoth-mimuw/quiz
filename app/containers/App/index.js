/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Questionnaire from 'containers/Questionnaire/Loadable';
import SummaryPage from 'containers/SummaryPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div>LOGO</div>
      <Switch>
        {/*<Route exact path="/" component={HomePage} />*/}
        <Route exact path="/" component={Questionnaire} />
        <Route exact path="/summary" component={SummaryPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
