import React, {Component} from 'react';
import {render} from 'react-dom';
import './static/css/index.css';

import NavBar from './src/NavBar';

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
      <div>
        <button onCick={() => items[0].name = "changed"}> click me </button>
        <NavBar items={items} />
      </div>
    )
  }
}
render(<Root />, document.getElementById('react-root'))
