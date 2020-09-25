import React from "react";
import ReactDOM from "react-dom";
import DashboardPage from "./App";
import AddExpensePage from "./Components/AddExpensePage";
import EditExpensePage from "./Components/EditExpensePage";
import HelpPage from "./Components/HelpPage";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./App.scss";
import * as serviceWorker from "./serviceWorker";

const routes = (
	<BrowserRouter>
		<div>
			<Route path="/" component={DashboardPage} exact={true} />
			<Route path="/create" component={AddExpensePage} />
			<Route path="/edit" component={EditExpensePage} />
			<Route path="/help" component={HelpPage} />
		</div>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
