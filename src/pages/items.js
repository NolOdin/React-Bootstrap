import React, {Component} from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default class Itemss extends Component {
	render() {
		return(
			<Container>
				<Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
					<Row>
						<Col sm="3">
							<Nav variant="pills" className="flex-column mt=2">
								<Nav.Item>
									<Nav.Link eventKey="first" >Design</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second" >Progs</Nav.Link>
								</Nav.Item><Nav.Item>
									<Nav.Link eventKey="third" >Pennals</Nav.Link>
								</Nav.Item><Nav.Item>
									<Nav.Link eventKey="fourth" >Pens</Nav.Link>
								</Nav.Item><Nav.Item>
									<Nav.Link eventKey="fifth" >Note Books</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm="9">
							<Tab.Content >
								<Tab.Pane eventKey="first">
									<img width = "800px" src="https://images.pexels.com/photos/2881370/pexels-photo-2881370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="1" />
										<p>
									MAAD ITS GOOD MATKET PLACE OF BOOKS
										</p>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<img width = "800px" src="https://images.pexels.com/photos/3747498/pexels-photo-3747498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="2" />
										<p>
									MAAD ITS GOOD MATKET PLACE OF BOOKS
										</p>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<img width = "800px" src="https://images.pexels.com/photos/3775009/pexels-photo-3775009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="3" />
										<p>
									MAAD ITS GOOD MATKET PLACE OF BOOKS
										</p>
								</Tab.Pane>
								<Tab.Pane eventKey="fourth">
									<img width = "800px" src="https://images.pexels.com/photos/757855/pexels-photo-757855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="4" />
										<p>
									MAAD ITS GOOD MARKET PLACE OF BOOKS
										</p>
								</Tab.Pane>
								<Tab.Pane eventKey="fifth">
									<img width = "800px" src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="5"/>
										<p>
									MAAD ITS GOOD MATKET PLACE OF BOOKS
										</p>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</Container>
			
			)
	}
}