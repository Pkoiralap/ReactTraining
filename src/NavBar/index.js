import React from 'react';
import MainContent from '../MainContent';

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      index: -1,
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
          <div 
            key={item.name}
            className={`${index===this.state.index ? 'selected' : ''} navbar-items`}
            onClick={() => this.onItemClicked(index)}
          >
            {item.name}
          </div>
        ))
      } 
      </div>
      {
        this.state.index !== 4 && 
        <MainContent selectedComponent={
          this.props.items[this.state.index] &&
          this.props.items[this.state.index].name
        } />
      }
    </div>
  )}
}