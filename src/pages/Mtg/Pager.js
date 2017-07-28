import React, {Component} from "react";

class Pager extends Component {
	constructor(props){
		super(props);
		this.state = {
		  next: props.next,
			previous: props.previous
		}
		
	}
	
	render(){
		return(
			<nav id="pager" aria-label="..." className="container">
				<ul className="pager">
					<li><a onClick={this.state.previous}>Previous</a></li>
					<li><a onClick={this.state.next}>Next</a></li>
				</ul>
			</nav>
		)
	}
}

export default Pager;