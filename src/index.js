import React, {Component} from 'react';
import {render} from 'react-dom';
import { BrowserRouter, StaticRouter, Route, Link } from "react-router-dom";

// import '../static/css/index.css';
import NavBar from './Components/navbar';
import MainContent from './Components/main-content';
import Home from './Pages/home';
import About from './Pages/about';
import Contacts from './Pages/contacts';
import Users from './Pages/users';

import userSchema from './schemas/user';

const items = [
  {
    name: 'Home',
    path: '/home'
  },
  {
    name: 'Details',
    path: '/details'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Users',
    path: '/users'
  },
  {
    name: 'API',
    path: '/api'
  },
  {
    name: 'Contact Us',
    path: '/contactus'
  },
]

const Root = () => {
  const app = (
    <div>
      <NavBar items={items} />
      <MainContent>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" render={() => <Users schema={userSchema} />} />
        <Route path="/contactus" component={Contacts} />
      </MainContent>
    </div>
  );
  if (typeof window !== 'undefined') {
    return (
      <BrowserRouter>
        {app}
      </BrowserRouter>
    )
  }
  return app;
}
if (typeof window !== 'undefined') {
  render(<Root />, document.getElementById('react-root'))
}
export default Root;
