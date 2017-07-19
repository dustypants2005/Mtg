import React, {Component} from "react";

export default class Footer extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: [],
			isSelecting: false
		}
	};
	
	componentWillReceiveProps(nextProps) {
		this.setState({selected: nextProps.selected})
	}
	
	clickHandler(e){
		if(this.state.isSelecting){
			this.setSelected(e);
		}
		this.setState({isSelecting: !this.state.isSelecting});
	}
	
	setSelected(e){
		console.log(e.currentTarget);
		this.state.selected.push(e.currentTarget);
	}
	
	
	render() {
		return (
		<div>
			<div className="input-group">
				<span className="input-group-addon" onClick={this.clickHandler.bind(this)}>
					<i className={ this.state.isSelecting ? 'fa fa-unlink' : 'fa fa-link'}></i></span>
				<span className="label label-default">Selected : {this.state.selected}</span>
			</div>
			
		</div>
		);
	}
}
