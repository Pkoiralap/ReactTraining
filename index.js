import React, {Component} from 'react';
import {render} from 'react-dom';
import './static/css/index.css';

import NavBar from './src/Components/navbar';

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
        <NavBar items={items} />
      </div>
    )
  }
}
render(<Root />, document.getElementById('react-root'))
