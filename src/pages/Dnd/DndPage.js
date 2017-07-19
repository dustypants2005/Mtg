import React, {Component} from "react";
import {Draggable, Droppable} from "react-drag-and-drop";
import './Dnd.css';

export default class DndPage extends Component {
	render() {
		return (
		<div>
			<ul>
				<Draggable type="fruit" data="banana"> <li>Banana</li></Draggable>
				<Draggable type="fruit" data="apple"> <li>Apple</li></Draggable>
				<Draggable type="metal" data="silver"> <li>Silver</li></Draggable>
			</ul>
			<Droppable
			types={["fruit"]}
			onDrop={this.onDrop.bind(this)}>
				<ul id="fruit-droppable" className="droppable"></ul>
			</Droppable>
		</div>
		);
	}
	
	onDrop(data){
		console.log(data);
		const droppable = document.getElementById("fruit-droppable");
		console.log(droppable);
		var fruit = JSON.stringify(this.addFruit(data.fruit));
		console.log(fruit);
		droppable.append(data.fruit, this.addFruit(data.fruit));
	}
	addFruit(fruit){
		return(
			(<li>{fruit}</li>).toString()
		);
	}
}
