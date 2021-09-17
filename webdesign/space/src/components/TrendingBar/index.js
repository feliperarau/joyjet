import './index.scss';

const TrendingBar = ({ first, second, third }) => {
  return (
    <div className="_trending-bar text-white">
      <div className="container py-4">
        <div className="row">
          <div className="trending-item col-md-3">
            <p>
              Trending
              <span className="text-primary highlight">Today</span>
            </p>
          </div>
          <div className="trending-item col-md-3">{first}</div>
          <div className="trending-item col-md-3">{second}</div>
          <div className="trending-item col-md-3">{third}</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingBar;
