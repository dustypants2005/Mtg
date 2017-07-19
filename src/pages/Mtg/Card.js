import React, {Component} from "react";
import "./Modal.css";

class Card extends Component {
	constructor(props){
		super(props);
		this.state = {
			card : {...props.card},
			key: props.key
		};
	}
	
	LoadModal(e){
		let modal = document.getElementById("modal");
		let imgModal = document.getElementById("imgModal");
		let caption = document.getElementById("caption");
		
		modal.style.display = "block";
		imgModal.src = this.state.card.imageUrl;
		caption.innerHTML = this.state.card.name;
		
	}
	
	CloseModal(e){
		// e.target.style.display = "none";
		Array.from(document.getElementsByClassName("modal")).forEach((i) => { i.style.display = "none"});
	}
	
	componentWillReceiveProps(nextProps){
		this.setState({card: nextProps.card})
	}
	
	render() {
		return (
			<div className="imgBox">
				<img id="img" src={this.state.card.imageUrl} alt={this.state.card.name}
				     onClick={this.LoadModal.bind(this)} className="img"/>
				<div id="modal" className="modal container" onClick={this.CloseModal.bind(this)}>
					<span className="close">&times;</span>
					<div className="container">
					<img className="modal-content" id="imgModal"/>
						<div id="caption" className="caption"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;