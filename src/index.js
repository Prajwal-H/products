import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./router";
import { Container } from "react-bootstrap";

window.store = store;

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Container fluid>
				<Routes />
			</Container>
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
