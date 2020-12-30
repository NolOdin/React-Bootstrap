import React, { Component } from 'react';
import { Container, CardDeck, Card, Button } from "react-bootstrap";
import LogoM from "../assets/logom.svg"

export default class About extends Component {
	render() {
		return (
			<Container className=" w-50">
				<h2 className="text-center m-4">ABOUT US</h2>
				<CardDeck>
					<Card>
						<Card.Img
							variant="top"
							src={LogoM}
						/>
						<Card.Body>
							<Card.Title>Developer</Card.Title>
							<Card.Text>
								Reference site about Lorem Ipsum, giving information on its origins,
								as well as a random Lipsum generator
								</Card.Text>
							<Button variant="primary">About team</Button>
						</Card.Body>
					</Card>
				</CardDeck>
			</Container>
		)
	}
}