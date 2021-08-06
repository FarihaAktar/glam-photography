import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './Components/Screens/Homepage/Homepage';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute';
import AdminPage from './Components/Screens/AdminPage/AdminPage'
import AddServices from './Components/Screens/AdminPage/AddServices';
import ManageService from './Components/Screens/AdminPage/ManageService'
import SingleServicePage from './Components/Screens/Singlepage/SingleServicePage';
import Checkout from './Components/Screens/CheckoutPage/Checkout';
import BookingList from './Components/Screens/AdminPage/BookingList';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/login' component={Login} />
          <Route path='/singleService/:id'>
            <SingleServicePage/>
          </Route>
          <PrivateRoute path='/adminPage'>
            <AdminPage />
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddServices/>
          </PrivateRoute>
          <PrivateRoute path='/manageService'>
            <ManageService/>
          </PrivateRoute>
          <PrivateRoute path='/bookingList'>
            <BookingList/>
          </PrivateRoute>
          <PrivateRoute path='/checkout/:key'>
            <Checkout/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
