import React, {Component}from "react";

class CardDetails extends Component {
	constructor(props){
		super(props);
		this.state = {
			values: props.values
		};
	}
	
	componentWillReceiveProps(nextProps){
		this.setState({
			key: nextProps.key,
			values: nextProps.values
		})
	}
	
	GetName(){
		return this.state.values[0].toString() + " : ";
	}
	
	GetValue(){
		const value = this.state.values[1];
		if(value.length && value.length > 0)
			return JSON.stringify(value);
		
		return value.toString();
	}
	
	render() {
		return (
			<li className="input-group detail-item">
				<span className="input-group-addon detail-header" >{this.GetName()}</span>
				<span className="form-control detail-body">{this.GetValue()}</span>
			</li>
		);
	}
}

export default CardDetails;