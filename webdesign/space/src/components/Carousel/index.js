import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';
import Slider from 'react-slick';
import Entry from '../Entry';
import Posts from '../../data/Posts';

const Carousel = () => {
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="_carousel">
      {Posts.map((post, i) => {
        return (
          <div key={i} className="col">
            <Entry {...post} />
          </div>
        );
      })}
    </Slider>
  );
};
export default Carousel;
