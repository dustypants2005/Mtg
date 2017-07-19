import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

// pages
import Home from "./pages/Home/Home";
import Mtg from "./pages/Mtg/Mtg";
import Dnd from "./pages/Dnd/DndPage";
import Footer from "./components/common/footer/Footer";

import createHistory from "history/createBrowserHistory";

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
	      <div className="container">
		      <nav className="navbar navbar-default">
			      <div className="navbar-header">
				      <div className="navbar-brand">
					      <Link to="/">Dustin Waldroup</Link>
				      </div>
			      </div>
			      <ul className="nav navbar-nav">
				      <li><Link to="/">Home</Link></li>
				      <li><Link to="/mtg">Magic the Gathering</Link></li>
				      <li><Link to="/dnd">Drag-n-Drop</Link></li>
			      </ul>
		      </nav>
		      {this.props.children}
		      <Route exact path={"/"} component={Home}/>
		      <Route path={"/mtg"} component={Mtg}/>
		      <Route path={"/dnd"} component={Dnd}/>
		      <Footer/>
	      </div>
      </Router>
    );
  }
}

export default App;
