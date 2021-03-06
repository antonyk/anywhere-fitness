import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
// Custom Routes
import InstructorRoute from './routes/InstructorRoute';
import PrivateRoute from './routes/PrivateRoute'
// Components
import Header from './components/Header';
import Signup from './components/auth/Signup'
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

import Home from './components/Home';

// Student
import ClassesList from './components/student/ClassesList';
import Dashboard from './components/student/Dashboard';
// Instructor
import AddClass from "./components/instructor/AddClass"
import InstrClass from "./components/instructor/InstrClass"


// import * as act from './store/actions'
// import newAxios from './utils/axiosUtils';

function App() {
  // app state, account state
  // const [authToken, setAuthToken] = useState();
  // const authToken = useSelector(state => state.app.authToken);
  const api = useSelector(state => state.app.axios);

  const dispatch = useDispatch();

  useEffect(() => {
    // load token from localstorage
    const token = localStorage.getItem('authToken')
    if (token) {
      dispatch({type: "APP_LOGIN", payload: JSON.parse(token)})
      // ping api with token to verify
      // if it fails, call logout, delete localstorage item, do not redirect
      // call get/user to populate state with always-visible/needed app data (username, name, email, role)
      // api.post('/auth/login')
    }
    else {
      dispatch({type: "APP_LOGOUT"})
    }
  }, [])

  return (
    <div className="App">
      <Header />

      <section>
        <Switch>
          <Route path='/login' component={Login} >
          </Route>
          <Route path='/signup' component={Signup}>
          </Route>


          <InstructorRoute path='/instructor/classes/edit/:id'>
          </InstructorRoute>
          <InstructorRoute path='/instructor/classes/new' component={AddClass}>
          </InstructorRoute>
          <InstructorRoute path='/instructor/classes' component={InstrClass}>
          </InstructorRoute>


          <PrivateRoute path='/profile/edit'>
          </PrivateRoute>
          <PrivateRoute path='/profile'>
          </PrivateRoute>
          <PrivateRoute path='/dashboard' component={Dashboard}>
          </PrivateRoute>

          {/* <PrivateRoute path='/classes' component={ClassesList}>
          </PrivateRoute> */}
          <Route path='/logout' component={Logout} >
          </Route>
          <Route exact path='/' component={Home}>
          </Route>

        </Switch>
      </section>
    </div>
  );
}

export default App;
