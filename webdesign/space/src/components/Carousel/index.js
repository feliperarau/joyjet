import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';

import image1 from '../../assets/img/satellite-1.jpg';
import image2 from '../../assets/img/satellite-2.jpg';
import image3 from '../../assets/img/moon.jpg';

import Entry from '../Entry';

const Carousel = () => {
  const posts = [
    {
      title: 'International Space Station',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….',
      link: '',
      image: image1,
    },
    {
      title: 'My capsule',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….',
      link: '/satellite',
      image: image2,
    },
    {
      title: 'My moon',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….',
      link: '/moon',
      image: image3,
    },

    {
      title: 'My capsule',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien….',
      link: '/satellite',
      image: image2,
    },
  ];
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
      {posts.map((post, i) => {
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
