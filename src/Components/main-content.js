import PropTypes from 'prop-types';
import React, {Component} from 'react';
import PageTitle from '../Components/pageTitle';
import Home from '../Pages/home';

export default class MainContent extends Component {
  render() {
    // this.setState() ---> wrong x
    return (
      <div className="main-content">
        {this.props.children}
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