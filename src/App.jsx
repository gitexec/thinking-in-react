import React, {Component} from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';
//import Person from './Person.jsx'
// import Movies from './Movies.jsx';
// import BoxContainer from './BoxContainer.jsx';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		};

		this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
		this.handleInStockInput = this.handleInStockInput.bind(this);
	}

	handleFilterTextInput(filterText){
		this.setState({
			filterText: filterText
		});
	}

	handleInStockInput(inStockOnly){
		this.setState({
			inStockOnly: inStockOnly
		});
	}

	render(){
		return(
			<div>
				<SearchBar 
					filterText={this.state.filterText} 
					inStockOnly={this.state.inStockOnly}
					onFilterTextInput={this.handleFilterTextInput}
					onInStockInputChange={this.handleInStockInput}
				/>
				<ProductTable 
					products = {this.props.products}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
				/>
			</div>
		);
	}
}

App.defaultProps = {
	products: [
		  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
	]
}


// export default class App extends Component {
//   constructor(props){
//     super(props);
//   }

//   render(){
//     return (
//       <BoxContainer />
//     );
//   }
// }
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
