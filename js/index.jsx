import React from "react";
import Router, {DefaultRoute, Link, Route, RouteHandler} from "react-router";

import Home from "./Pages/Home.jsx"; //react-router-proxy!
import Projects from "./Pages/Projects.jsx"; //react-router-proxy!
import About from "./Pages/About.jsx"; //react-router-proxy!
import Toolbar from "./Toolbar";

class Index extends React.Component {
	render() {
		return (
			<div>
				<Toolbar />
				<RouteHandler />
			</div>
		)
	}
}

let routes = (
	<Route name="index" path="/" handler={ Index }>
		<Route name="projects" path="/projects" handler={ Projects } />
		<Route name="about" path="/about" handler={ About } />
		<DefaultRoute handler={ Home }/>
	</Route>
)

let Root = Router.create({routes :routes});

if (typeof document != "undefined") {
	Root.run(function(Handler) {
		React.render(<Handler />, document.body);
	})
}
// console.log(React.renderToStaticMarkup(<Root/>));

export default Root;