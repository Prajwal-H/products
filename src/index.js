import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./router";

window.store = store;

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Routes />;
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
