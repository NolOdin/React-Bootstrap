import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from "./logo1.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Itemss from "./pages/items.js";
import Books from "./pages/books.js";
import ContactUs from "./pages/contactus.js";

export default class Header extends Component {
	render() {
		return (
			<>
				<Navbar collapseOnSelect expand="md" bg="light" variant="light">
					<Container>
						<Navbar.Brand href="/">
							<img src={logo}
								height="50"
								width="115"
								className="d-inline-block align-top"
								alt=""
							/>

						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto font-weight-bold">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/books">Books</Nav.Link>
								<Nav.Link href="/itemss">Items</Nav.Link>
								<Nav.Link href="/contactus">Contact Us</Nav.Link>
								<Nav.Link href="/about">About US</Nav.Link>


							</Nav>
							<Form inline>
								<FormControl
									type="text"
									placeholder="Type to search"
									className="mr-sm-2"
								/>
								<Button variant="outline-info">Search</Button>
							</Form>



						</Navbar.Collapse>

					</Container>

				</Navbar>

				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/itemss" component={Itemss} />
						<Route exact path="/about" component={About} />
						<Route exact path="/books" component={Books} />
						<Route exact path="/contactus" component={ContactUs} />
					</Switch>
				</Router>

			</>
		)
	}
};