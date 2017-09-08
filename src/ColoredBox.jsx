import React, {Component} from 'react';

export default class ColoredBox extends Component {
  constructor(props){
    super(props);
    this.intervalId = undefined;
    this.state = {
      backgroundColor: 'yellow',
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState, props) => {
        const backgroundColor = prevState.backgroundColor === 'yellow' ? 'red' : 'yellow';
        return {backgroundColor};
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log(`Interval ${this.intervalId} has been cleared`);
  }

  render(){
    const style = {
      width: "100px",
      height: "100px",
      backgroundColor: this.state.backgroundColor
    };

    return (
      <div style={style}>
      </div>
    );
  }
}
