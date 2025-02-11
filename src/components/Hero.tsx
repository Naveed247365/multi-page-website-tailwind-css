import Link from 'next/link'

const Hero = () => {
  return (
    <div className="hero-content">
      <Link href="/EirBuds">
        <button className="shop-now">Shop Now</button>
      </Link>
    </div>
  );
};

export default Hero; 