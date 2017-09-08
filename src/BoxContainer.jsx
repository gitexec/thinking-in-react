import React, {Component} from 'react';
import ColoredBox from './ColoredBox.jsx';

export default class BoxContainer extends Component {
	
	constructor(props){
		super(props);
		this.intervalId = undefined;
		this.state = {
			showBox: true
		};
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({showBox: false});
		}, 7500);
	}

	render(){
		let markup = <div>nothing to see </div>
		if(this.state.showBox){
			markup = <ColoredBox />;
		}
		return markup;
	}
}