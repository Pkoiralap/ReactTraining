import PropTypes from 'prop-types';
import React, {Component} from 'react';
import PageTitle from '../Components/pageTitle';
import Home from '../Pages/home';

export default class MainContent extends Component {
  // life cycle events
  constructor() {
    super();
    this.state = {
      name: 'hello'
    }
  }

  render() {
    // this.setState() ---> wrong x
    return (
      <div className="main-content">
        <PageTitle name={this.props.selectedComponent && this.props.selectedComponent.name } />
        <Home />
      </div>
    )
  }
};

MainContent.propTypes = {
  selectedComponent: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
}