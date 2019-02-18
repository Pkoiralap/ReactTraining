import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const toggleCollapsedState = () => ({
  type: 'TOGGLE_COLLAPSED_STATE',
})

class NavBar extends React.Component {
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
      
      <div className="navbar" style={{width: this.props.collapsed ? '100px' : '200px'}}> 
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
        <div style={{position: "absolute", bottom: '10px'}}>
          <div>{this.props.collapsed}</div>
          <button onClick={ () => { this.props.toggleCollapsedState() } }> Toggle </button>
        </div>
      </div>
    </div>
  )}
}


const mapStateToProps = state => ({
  collapsed: state.collapsed,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleCollapsedState,
} , dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)