import "../styles/VeriflyDifference.css";

const VeriflyDifference = () => {
  return (
    <section className="verifly-difference" id="difference">
      <div className="verifly-difference-inner">
        <p className="difference-kicker">The Verifly Difference.</p>

        <h2>Not a marketplace. Not a directory.</h2>
        <p className="difference-platform">A presence platform.</p>

        <p className="difference-copy">
          Verifly is built around the belief that small businesses deserve a digital
          presence as considered and complete as any large brand — without the
          complexity of an e-commerce platform or the noise of a social feed.
        </p>

        <div className="difference-actions">
          <a className="difference-button difference-button-primary" href="#create-account">
            Start Your Profile
          </a>
          <a className="difference-button difference-button-secondary" href="#businesses">
            Explore Businesses
          </a>
        </div>
      </div>
    </section>
  );
};

export default VeriflyDifference;
