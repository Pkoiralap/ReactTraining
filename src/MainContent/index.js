import React, {Component} from 'react';

export default class MainContent extends Component {
  // life cycle events
  constructor() {
    super();
    this.state = {
      name: 'hello'
    }
  }

  componentDidMount() {
    // runs just after the component has mounted into the virutal dom
    this.timeinterval = setInterval(() => {
      alert('I run')
    }, 2000) // 5 sec
    window.addEventListener('resize', this.onResize);
  }
  componentDidUpdate(prevProps, prevState) {
    // run just after the component has updated
    // when does a component update ?
    // if the state changes -> setState()
    // if the props change -> parent
    // this.setState() ---> wrong x
  }

  
  componentWillUnmount() {
    // runs just before the component unmounts from the dom
    alert('MainContent componet is being unmounted');
    clearInterval(this.timeinterval);
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    // this.setState() ---> wrong x
    return (
      <div className="MainContent">
        {this.props.selectedComponent}
      </div>
    )
  }
};