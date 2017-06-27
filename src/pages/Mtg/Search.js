import React, { Component } from "react";
import CardList from "./CardList";
import {SearchCards} from "./SearchApi";

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: this.props.name,
			cards: [],
			error: {}
		};
		
		console.log("Props: ", JSON.stringify(this.props));
	}
	
	OnChangeHandler(e){
		let target = e.target;
		
		let name = target.name;
		let value = target.value;
		
		this.setState( {[name]: value} );
	}
	GetCards(e){
		e.preventDefault();
		// search with api
		// save results to state "cards"
	
		SearchCards(this.state.name, this.SetCards.bind(this));
	}
	SetCards(error, cards){
		if(error){
			console.log(error);
			this.setState({error});
		}
		this.setState({cards});
	}
	Clear(e){
		this.setState({name: ""});
	}
	
	render() {
		return (
		<div>
			{this.props.children}
			<form>
				<label>Name: </label> <input type="text" name="name" onChange={this.OnChangeHandler.bind(this)} value={this.state.name}/>
				<br/><br/>
				<button onClick={this.GetCards.bind(this)}><span className="glyphicon glyphicon-search"/> Search</button>
				<button onClick={this.Clear.bind(this)}><span className="glyphicon glyphicon-refresh"/> Reset</button>
			</form>
			<br/><br/>
			<CardList cards={this.state.cards}/>
		</div>
		);
	}
}

export default Search;