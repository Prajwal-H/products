import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./index.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

/**
 * @author Prajwal H
 * @function Header
 **/

const Header = (props) => {
	return (
		<Navbar className="header" expand="lg" fixed="top" collapseOnSelect={true}>
			<Container>
				<span className="searchbarContainer">
					<input placeholder="Search for products and brands" aria-label="searchbar" className="searchbar" aria-describedby="basic-addon1" />
					<FontAwesomeIcon icon={faSearch} size="lg" className="sign_in_eye_button" />
				</span>
			</Container>
		</Navbar>
	);
};

export default Header;
