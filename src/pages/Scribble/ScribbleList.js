import React, {Component} from "react";
import Scribble from "./Scribble";

class ScribbleList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clips: props.clips || []
		}
	}
	
	GetScribbles(scribbles){
		if (scribbles && scribbles.length > 0)
			return scribbles.map((c, i) =>
				<Scribble {...c} key={i}/>
			);
	}
	
	componentWillReceiveProps(nextProps){
		this.setState({clips: nextProps.clips})
	}
	
	render() {
		return (
			<div>
				{this.GetScribbles(this.state.clips)}
			</div>
		);
	}
}

export default ScribbleList;