import SolidButton from '../SolidButton';
import TrendingBar from '../TrendingBar';
import './index.scss';

const Hero = ({
  title,
  description,
  background,
  actionText,
  actionHref,
  trending,
}) => {
  return (
    <div
      className="_hero"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-inner text-white">
        <div className="container">
          <div className="col-md-6 py-4">
            <h1 className="display-4 fw-normal">
              {title}
              <span className="dot text-primary">.</span>
            </h1>
            <p className="hero-text">{description}</p>
            <SolidButton href={actionHref} label={actionText} />
          </div>
        </div>

        <TrendingBar {...trending} />
      </div>
    </div>
  );
};

export default Hero;
