import React, {Component} from 'react';

export default class Person extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let style={color: "red"};
    return <p style={style}>{this.props.name}</p>
  }
}
