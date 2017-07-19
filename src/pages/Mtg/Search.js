import React, { Component } from "react";
import CardList from "./CardList";
import {SearchCards} from "./SearchApi";
import Rx from 'rxjs/Rx';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: this.props.name,
			cards: [],
			error: {},
			cardList: {}
		};
		
		
	}
	
	OnSearchHandler(e){
		e.preventDefault();
		this.setState({name: e.target.value});
		SearchCards(this.state.name, this.SetCards.bind(this));
	}
	
	
	OnChangeHandler(e){
		e.preventDefault();
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
	
	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.cards !== nextState.cards) {
			console.log('Search State Cards Changed');
			return true;
		}
		if (this.props.cards !== nextProps.cards) {
			console.log('Search Props Cards Changed');
			return true;
		}
		return false;
	}
	
	componentDidMount(){
		let searchInput = document.querySelector('input');
		this.search = Rx.Observable.fromEvent(searchInput, 'input');
		
		this.search
			.pluck('target', 'value')
			.distinctUntilChanged()
			.debounceTime(500)
			.subscribe({
				next: (value) =>{
					console.log(value);
					SearchCards(value, this.SetCards.bind(this));
				}
			});
	}
	
	componentWillUnmount(){
		this.search.unsubscribe();
	}
	
	render() {
		return (
			<div>
				{this.props.children}
					<div className="input-group">
					<span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
					<input className="form-control"
					       placeholder="Search Card Name"
					       type="text"
					       name="name"
					       id="name"
					       value={this.state.name}/>
					</div>
				<br/><br/>
				<CardList cards={this.state.cards}/>
			</div>
		);
	}
	// render() {
	// 	return (
	// 	<div>
	// 		{this.props.children}
	// 		<form>
	// 			<label>Search Card Name : </label> <input type="text" name="name" onChange={this.OnChangeHandler.bind(this)} value={this.state.name}/>
	// 			<br/><br/>
	// 			<button onClick={this.GetCards.bind(this)}><span className="glyphicon glyphicon-search"/> Search</button>
	// 			<button onClick={this.Clear.bind(this)}><span className="glyphicon glyphicon-refresh"/> Reset</button>
	// 		</form>
	// 		<br/><br/>
	// 		<CardList cards={this.state.cards}/>
	// 	</div>
	// 	);
	// }
}

export default Search;