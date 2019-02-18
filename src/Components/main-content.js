import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class MainContent extends Component {
  render() {
    // this.setState() ---> wrong x
    return (
      <div className="main-content" style={{left: this.props.collapsed ? '110px' : '210px'}}>
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

const mapStateToProps = state => ({
  collapsed: state.collapsed,
});

export default connect(mapStateToProps, {})(MainContent)