import React, {Component} from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";

import './static/css/index.css';
import NavBar from './src/Components/navbar';
import Home from './src/Pages/home';
import About from './src/Pages/about';
import Contacts from './src/Pages/contacts';

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
    name: 'Docs',
    path: '/docs'
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

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar items={items} />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={Contacts} />
        </div>
      </BrowserRouter>
    )
  }
}
render(<Root />, document.getElementById('react-root'))
