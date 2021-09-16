const Entry = ({ title, excerpt, link, image }) => {
  return (
    <div className="_entry card">
      <div className="card-thumbnail">
        <a href={link}>
          <img src={image} className="card-img-top" alt={title} />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <a href={link}>{title}</a>
        </h5>
        <p className="card-text">{excerpt}</p>
      </div>
    </div>
  );
};

export default Entry;
