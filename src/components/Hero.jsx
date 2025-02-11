import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-content">
      <Link to="/earbuds">
        <button className="shop-now">Shop Now</button>
      </Link>
    </div>
  );
};

export default Hero; 