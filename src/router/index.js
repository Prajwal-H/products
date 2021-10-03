import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/products";
import Corousel from "../components/corousel";

const Routes = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Products} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route path="/corousel" exact component={Corousel} />
				<Route component={PageNotFound}></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
