import React, {Component} from "react";
import Search from "./Search";

class Mtg extends Component {
	render() {
		return (
		<div>
			<div>
				<h1>Magic the Gathering</h1>
			</div>
			<div className="">
				<Search/>
			</div>
		</div>
		);
	}
}


export default Mtg;