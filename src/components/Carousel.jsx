import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
	<button
		{...props}
		className={"slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
		aria-hidden="true"
		aria-disabled={currentSlide === 0 ? true : false}
		type="button"
	>
		<AiOutlineLeft />
	</button>
)
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
	<button
		{...props}
		className={"slick-next slick-arrow" + (currentSlide === slideCount - 1 ? " slick-disabled" : "")}
		aria-hidden="true"
		aria-disabled={currentSlide === slideCount - 1 ? true : false}
		type="button"
	>
		<AiOutlineRight />
	</button>
)

export const Carousel = ({slidesToShow, slidesToScroll, arrows, children, className}) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: arrows, 
		slidesToShow: slidesToShow,
		slidesToScroll: slidesToScroll,
		customPaging: (slider, i) => {
			return <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
		},
		prevArrow: <SlickArrowLeft/>,
		nextArrow: <SlickArrowRight/>,
		className: className
	}
	return (
		<div className="container mx-auto">
			<Slider {...settings} >
				{children}
			</Slider>
		</div>
	)
}
