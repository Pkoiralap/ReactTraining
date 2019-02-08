import React from 'react';
import axios from 'axios';

export default class API extends React.Component{
  constructor() {
    super();
    this.state = {
      error : false,
      data: {}
    }
  }

  handler = (name) => (e) => {
    let value = e.target.value;
    const newData = {
      ...this.state.data,
      [name]: value,
    }

    this.setState({data : newData});
  }

  hitapi = () => {
    let value = this.state.data.document;
    try {
      value = JSON.parse(value) 
    } catch(err) {
      this.setState({error: true})
      return;
    }
    axios.post('/post_in_api', {
      collection: this.state.data.name,
      data: value,
    })
    .then(() => {
      console.log('got response')
    })
  }
  render() {
    return (
      <div>
        <div> Hi I am api page </div>
        {this.state.error && <div style={{color: 'red'}}> Not a valid json </div>}
        <label htmlFor="collection_name"> Enter Collection Name </label>
        <input id="collection_name" onChange={this.handler('name')} />

        <br />
        <br />
        <label> Enter document json here </label>
        <textarea id="document" onChange={this.handler('document')}></textarea>
        <br />
        <br />
        <button onClick={this.hitapi}> Click Me </button>
      </div>
    )
  }
}