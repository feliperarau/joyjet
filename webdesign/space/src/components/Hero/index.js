import SolidButton from '../SolidButton';
import TrendingBar from '../TrendingBar';
import heroBg from '../../assets/img/hero-bg.jpg';
import './index.scss';

const Hero = () => {
  return (
    <div
      className="_hero"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="hero-inner text-white">
        <div className="container">
          <div className="col-md-6 py-4">
            <h1 className="display-4 fw-normal">
              SPACE<span className="dot text-primary">.</span>
            </h1>
            <p className="hero-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie elit at lacus…
            </p>
            <SolidButton href="/sobre" label="Click" />
          </div>
        </div>

        <TrendingBar />
      </div>
    </div>
  );
};

export default Hero;
