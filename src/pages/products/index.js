import React from "react";
import { Row } from "react-bootstrap";
import Header from "../../components/Header";
import Items from "../../components/items";

/**
* @author Prajwal H
* @function Products

**/

const Products = (props) => {
	return (
		<>
			<Header />
			<Row className="mt-5">
				<Items />
			</Row>
		</>
	);
};

export default Products;
