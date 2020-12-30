import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import booksImg from '../assets/books.jpg';
import dbooksImg from '../assets/books1.jpg';
import cbooksImg from '../assets/books3.jpg';
import csscarosel from './carouselbox.css';





export default class CarouselBox extends Component {
	render() {
		return(
			<Carousel>
				<Carousel.Item>
					<img width={800} height = {650}
					className="d-block w-100 "
					src={booksImg}
					alt="Books"


					/>
						<Carousel.Caption>
						<h4>
						Welcome to MAAD
						</h4>
						</Carousel.Caption>

				</Carousel.Item>
				<Carousel.Item>
					<img width ={800} height = {650}
					className="d-block w-100"
					src={dbooksImg}
					alt="Books"


					/>
						<Carousel.Caption>
						<h3>
						Welcome to MAAD
						</h3>
						</Carousel.Caption>

				</Carousel.Item>
				<Carousel.Item>
					<img width={800} height = {650}
					className="d-block w-100"
					src={cbooksImg}
					alt="Books"


					/>
						<Carousel.Caption>
						<h3>
						Welcome to MAAD
						</h3>
						</Carousel.Caption>

				</Carousel.Item>
			</Carousel>

			)
	}
}