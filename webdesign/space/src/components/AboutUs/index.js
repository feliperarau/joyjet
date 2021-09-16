import aboutImage from '../../assets/img/satellite-2.jpg';

const AboutUs = () => {
  return (
    <div className="_about-us row">
      <div className="col-md-3 about-image">
        <img src={aboutImage} alt="About us"></img>
      </div>
      <div className="col-md-9 about-text">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu.
        </p>
        <p>
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
          dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
          Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
