import React, {Component} from 'react';
//import Person from './Person.jsx'
// import Movies from './Movies.jsx';

import BoxContainer from './BoxContainer.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <BoxContainer />
    );
  }
}
////#######EXAMPLE WITH Updater function on setState
// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       counter: 1
//     };

//     setInterval(() => {
//       this.setState((prevState, props) => {
//         return {counter: prevState.counter + 1};
//       }, console.log(this.state.counter));
//     }, 500);
//   }

//   render(){
//     return <div> Counter {this.state.counter}</div>;
//   }

// export default class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       people: [
//                 {name: "time"},
//                 {name: "janey"},
//                 {name: "Angelina"}
//               ]
//     };

//     var addName = function() {
//       var newPeople = this.state.people.slice();
//       newPeople.push({name: "Rum"});
//       this.setState({people: newPeople});
//     };

//     setTimeout(addName.bind(this), 5000);
//   }

//   render(){
//     var peeps = this.state.people.map(function(p){
//       return <Person key={p.name} name={p.name} />
//     });
//     return(
//       <div>
//         {peeps}
//       </div>
//     );
//   }
// }
