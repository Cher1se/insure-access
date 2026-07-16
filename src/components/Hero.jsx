import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <h1>
          Insurance Made <span>Simple.</span>
        </h1>

        <p>
          Access your policies, monitor claims, receive important notifications,
          and manage your insurance services through one secure customer portal.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>

      </div>

      <div className="hero-image">
        <img
          src="/hero-illustration.png"
          alt="Insurance Illustration"
        />
      </div>

    </section>
  );
}

export default Hero;