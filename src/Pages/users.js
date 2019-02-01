import React from 'react';

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      values : {}
    }
  }

  buttonClick = () => {
    console.log('saving... ', this.state.values)
  }

  handler = (name, e) => {
    this.setState({
      values: {
        ...this.state.values,
        [name]: e.target.value,
      }
    })
  }

  render() {
    if (!this.props.schema) {
      return <div> NO SCHEMA PROVIDED </div>
    }
    return (
      <div>
        {
          this.props.schema.form && 
          this.props.schema.form.map(({name, label, type, placeholder}) => (
            <div key={name} className="input-fields">
              <label htmlFor={`id-${name}`}>{label}</label>
              <input 
                id={`id-${name}`} 
                type={type} 
                placeholder={placeholder}
                onChange={(e) => this.handler(name, e)}
              />
            </div>
          ))
        }
        <button onClick={this.buttonClick}> Save </button>
      </div>
    )
  }
}