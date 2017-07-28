import React, { Component } from "react";
import CardList from "./CardList";
import {SearchCards} from "./SearchApi";
import Rx from 'rxjs/Rx';
import Pager from "./Pager";

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: this.props.name,
			cards: [],
			error: {},
			page: 1,
			pageSize: 50
		};
	}
	
	SetCards(error, cards){
		if(error){
			console.log(error);
			this.setState({error});
		}
		this.setState({cards});
	}
	
	onNextHandler(e){
		e.preventDefault();
		
		let page = this.state.page;
		
		if( this.state.cards.length >= this.state.pageSize)
			page++;
		
		SearchCards({
			name: this.state.name,
			page,
			pageSize: this.state.pageSize
		}, this.SetCards.bind(this));
		
		this.setState({page})
	}
	
	onPreviousHandler(e){
		e.preventDefault();
		let page = this.state.page;
		
		if(page >= 1)
			page--;
		
		SearchCards({
			name: this.state.name,
			page,
			pageSize: this.state.pageSize
		}, this.SetCards.bind(this));
		
		this.setState({page})
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.cards !== nextState.cards) {
			return true;
		}
		if (this.props.cards !== nextProps.cards) {
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
					this.setState({name: value, page: 1});
					SearchCards({
						name: value,
						page: 1,
						pageSize: this.state.pageSize
					}, this.SetCards.bind(this));
				}
			});
	}
	
	componentWillUnmount(){
	
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
					       id="name"/>
					</div>
				<br/><br/>
				<Pager next={this.onNextHandler.bind(this)} previous={this.onPreviousHandler.bind(this)} />
				<CardList cards={this.state.cards}/>
			</div>
		);
	}
}

export default Search;