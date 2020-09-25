import React from "react";
import ReactDOM from "react-dom";
import DashboardPage from "./DashboardPage";
import AddExpensePage from "./AddExpensePage";
import EditExpensePage from "./EditExpensePage";
import HelpPage from "./HelpPage";
import Header from "./Header";
import UhOh from "./404";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRoutes = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={DashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={UhOh} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRoutes;
