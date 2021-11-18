import React, { Component } from 'react';
class User extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    console.log("Constructor Called");
  }
  componentDidMount() {

    console.log("Componenet Did Mount Called");
  }
  shouldComponentUpdate()
  {
    if( this.state.counter < 5 )
    {
      return false
    }
    else
    {
    console.log("shouldComponentUpdate");
      return true;

    }
  }
  componentWillUnmount() {
    console.log("Componenet Will Umount Called");
  }
  render() {
    console.log("Render Called");
    return (
      < div >
        <h1>
          {this.state.counter}<br />
          {this.props.name}
        </h1>
      <button onClick={()=>this.setState({counter: this.state.counter+1})}>This button will Upate State</button>
      </div >
    );
  }
}
export default User;