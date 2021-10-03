import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./index.css";
import iphone from "../../asssets/images/iphone12.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

/**
 * @author Prajwal H
 * @function Items
 **/

const Items = (props) => {
	return (
		<div className="item-container">
			{Array(10)
				.fill("")
				.map(() => {
					return (
						<Container fluid className="container2">
							<Row>
								<h2>Category-1</h2>
							</Row>
							<div className="vertical-scroll-container">
								<Row className="d-block">
									{Array(10)
										.fill("")
										.map(() => {
											return (
												<Col lg={2} className="ml-3 d-inline-block">
													<Row>
														<Image src={iphone} className="item-image" />
													</Row>
													<Row>
														<Container>
															<Row>APPLE iPhone 12</Row>
															<Row>
																<FontAwesomeIcon icon={faRupeeSign} /> 38,999
															</Row>
														</Container>
													</Row>
												</Col>
											);
										})}
								</Row>
							</div>
						</Container>
					);
				})}
		</div>
	);
};

export default Items;
