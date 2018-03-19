import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

// page components
import App from './components/app';
import Home from './containers/landing';

// import CallUp from './containers/callup_create';
import Journal from './containers/journal';

import ActDetail from './containers/act_detail';
import Story from './components/story';
import Resources from './components/resources';
import ThankForm from './components/form_thank';
import DoForm from './components/form_do';

// auth components
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require_auth';
import Signout from './components/auth/signout';

// actions & store
import { AUTH_USER } from './actions/types';
import store from './store';

// If we have a token, consider the user to be signed in
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="signin" component={Signin} />
        <Route path="signup" component={Signup} />
        <Route path="signout" component={Signout} />
        <Route path="story" component={Story} />
        <Route path="thank" component={ThankForm} />
        <Route path="do" component={DoForm} />
        <Route path="resources" component={Resources} />
        {/* <Route path="journal" component={ RequireAuth(Journal) } /> */}
        <Route path="journal" component={ Journal } />
        <Route path="act/:id" component={ActDetail} />

      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
