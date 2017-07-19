import React, {Component} from "react";
import Card from "./Card";


class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: this.props.cards
		}
	}
	
	GetCards(cards) {
		if (cards && cards.length > 0)
			return cards.map((c, i) =>
					<Card card={c} key={i}/>
			);
	}
	
	componentWillReceiveProps(nextProps){
		this.setState({cards: nextProps.cards})
	}
	
	render() {
		return (
			<div>
			{this.GetCards(this.props.cards)}
			</div>
		)};
}
export default CardList;