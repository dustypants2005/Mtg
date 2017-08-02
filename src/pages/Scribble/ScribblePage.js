import React, {Component} from "react";
import ScribbleList from "./ScribbleList";

class ScribblePage extends Component {
	constructor(props){
		super(props);
		this.state = {
			clips: []
		}
	}
	
	AddClip(e){
	e.preventDefault();
	let clips = this.state.clips;
		clips.push({
		name: "",
		notes: [],
		pattern:  "",
		repeat: 0,
		sizzle:  true,
		accentMap: ""
	});
	
	let newState = {...this.state.clips, clips};
	this.setState(newState);
	
	}
	
	render() {
		return (
		<div>
			<div className="input-group">
				<button className="form-control" onClick={this.AddClip.bind(this)}>
					<span className="glyphicon glyphicon-plus-sign"> Scribble</span>
				</button>
			</div>
			<ScribbleList clips={this.state.clips}/>
		</div>
		);
	}
}

export default ScribblePage;