import React from 'react'
import Slider from 'react-slick'

// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import scald from '../../assets/images/logo/scald.png'
import leftArrow from '../../assets/images/arrow-left.svg'
import rightArrow from '../../assets/images/arrow-right.svg'

function SampleNextArrow(props) {
	const { className, style, onClick } = props
	return (
		<img
			src={rightArrow}
			alt="left arrow"
			onClick={onClick}
			className={className}
		/>
	)
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props
	return (
		<img
			src={leftArrow}
			alt="right arrow"
			onClick={onClick}
			className={className}
		/>
	)
}

export default function PartnerSlider() {
	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		gap: '20px',
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	}
	return (
		<Slider {...settings} className="slider-custom">
			<div>
				<div className="glass card">
					<img src={scald} alt="Logo de la Scald" />
					<div className="bottom-card">
						<span className="name-partner">Scald eSports</span>
						<span className="status-partner">eSport team</span>
					</div>
				</div>
			</div>
			<div>
				<div className="glass card">
					<img src={scald} alt="Logo de la Scald" />
					<div className="bottom-card">
						<span className="name-partner">Scald eSports</span>
						<span className="status-partner">eSport team</span>
					</div>
				</div>
			</div>
			<div>
				<div className="glass card">
					<img src={scald} alt="Logo de la Scald" />
					<div className="bottom-card">
						<span className="name-partner">Scald eSports</span>
						<span className="status-partner">eSport team</span>
					</div>
				</div>
			</div>
			<div>
				<div className="glass card">
					<img src={scald} alt="Logo de la Scald" />
					<div className="bottom-card">
						<span className="name-partner">Scald eSports</span>
						<span className="status-partner">eSport team</span>
					</div>
				</div>
			</div>
		</Slider>
	)
}
