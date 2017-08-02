import React, {Component} from "react";

class Scribble extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name || "",

			notes: props.notes || [],
			pattern: props.pattern || "",
			repeat: props.repeat || 0,
			sizzle: props.sizzle || true,
			accentMap: props.accentMap || ""
		}
	}
	
	componentWillReceiveProps(nextProps){
		this.setState({...nextProps})
	}
	
	render() {
		return (
			<div>
			scribble
			</div>
		);
	}
}

export default Scribble;