import React, {Component} from "react";
import "./Modal.css";
import CardDetails from "./CardDetails";

class Card extends Component {
	constructor(props){
		super(props);
		this.state = {
			card : {...props.card}
		};
	}
	
	LoadModal(e){
		const modal = e.target.nextElementSibling;
		const imgModal = e.target.nextElementSibling.lastElementChild.firstElementChild;
		modal.style.display = "block";
		imgModal.src = this.state.card.imageUrl;
	}
	
	CloseModal(e){
		e.target.parentElement.style.display = "none";
	}
	
	componentWillReceiveProps(nextProps){
		this.setState({card: nextProps.card})
	}
	
	GetDetails(card){
		let details = Object.entries(card);
		if (details && details.length > 0)
			return details.map((k, i) =>
				<CardDetails values={k} key={i}/>
			);
		}

	
	render() {
		return (
			<div className="imgBox">
				<img id="img" src={this.state.card.imageUrl} alt={this.state.card.name || ""}
				     onClick={this.LoadModal.bind(this)} className="img"/>
				<div id="modal" className="modal container" >
					<span className="close" onClick={this.CloseModal.bind(this)} >&times;</span>
					<div className="container">
						<img className="modal-content" id="imgModal" alt="imgModal"/>
						<div id="caption" className="caption">{this.GetDetails(this.state.card)}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;