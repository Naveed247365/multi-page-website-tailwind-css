import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-content">
      <Link to="/EirBuds">
        <button className="shop-now">Shop Now</button>
      </Link>
    </div>
  );
};

export default Hero; 