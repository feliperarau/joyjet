import './index.scss';

const TrendingBar = () => {
  return (
    <div className="_trending-bar">
      <div className="container py-4">
        <div className="row">
          <div className="trending-item col-md-3">
            <p>
              Trending
              <span className="text-primary highlight">Today</span>
            </p>
          </div>
          <div className="trending-item col-md-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget
            dolor.
          </div>
          <div className="trending-item col-md-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget
            dolor.
          </div>
          <div className="trending-item col-md-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget
            dolor.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingBar;
