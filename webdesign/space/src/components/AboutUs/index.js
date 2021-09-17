import './index.scss';
import HTMLReactParser from 'html-react-parser';

const AboutUs = ({ title, text, thumbnail }) => {
  return (
    <div className="_about-us row">
      <div className="col-md-4 about-image mb-5 mb-lg-0">
        <img src={thumbnail} alt="About us"></img>
      </div>
      <div className="col-md-8 about-text">
        <h2>{title}</h2>
        <div>{HTMLReactParser(text)}</div>
      </div>
    </div>
  );
};

export default AboutUs;
