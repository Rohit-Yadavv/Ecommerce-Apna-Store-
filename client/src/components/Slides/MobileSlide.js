import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles/homePageSlide.css"

const MobileSlide = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            // slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            swipeable={true}
            draggable={false}
            autoPlay={true}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            showDots={true}
            autoPlaySpeed={1500}
        >
            <div className='carouselImageContainer'>
                <img style={{ objectFit: "contain" }} className="image" src="images/mobileSlider/1.jpg" />
            </div>
            <div className='carouselImageContainer'>
                <img style={{ objectFit: "contain" }} className="image" src="images/mobileSlider/2.jpg" />
            </div>
            <div className='carouselImageContainer'>
                <img style={{ objectFit: "contain" }} className="image" src="images/mobileSlider/3.jpg" />
            </div>
            <div className='carouselImageContainer'>
                <img style={{ objectFit: "contain" }} className="image" src="images/mobileSlider/4.jpg" />
            </div>
            <div className='carouselImageContainer'>
                <img style={{ objectFit: "contain" }} className="image" src="images/mobileSlider/5.jpg" />
            </div>


        </Carousel>
    )
}

export default MobileSlide