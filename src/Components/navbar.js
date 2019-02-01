import React from 'react';
import {Link} from 'react-router-dom';
import MainContent from './main-content';
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    let index = 0;
    if (props.items) {
      let path = '/';
      if (typeof window !== "undefined") {
        path = window.location.pathname;
      }
      props.items.some((config, i) => {
        if (config.path === path ) {
          index = i;
          return true;
        }
        return false;
      })
    }
    this.state = {
      index,
    }

  }

  onItemClicked = (index) => {
    this.setState({
      index,
    });
  }
  render() {
    if (!this.props.items) {
      return <div />
    }
    return (
    <div>
      <div className="navbar"> 
      {
        this.props.items.map((item, index) => (
          <Link 
            to={item.path}
            key={item.name}
            className={`${index===this.state.index ? 'selected ' : ''}navbar-items`}
            onClick={() => this.onItemClicked(index)}
          > {item.name} </Link>
        ))
      } 
      </div>
    </div>
  )}
}