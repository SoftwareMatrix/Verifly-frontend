import "../styles/HowItWorks.css";
import howImageOne from "../assets/Rectangle 918.png";
import howImageTwo from "../assets/Rectangle 928.png";
import howImageThree from "../assets/Rectangle 923.png";
import howImageFour from "../assets/Rectangle 929.png";

const ownerSteps = [
  {
    title: "Create your profile",
    description:
      "Sign up and fill in your brand story, category, location, and contact details. Takes under 10 minutes.",
    image: howImageOne,
  },
  {
    title: "Add your offerings",
    description:
      "List your services or products with descriptions and pricing. Upload photos to bring your brand to life.",
    image: howImageThree,
  },
  {
    title: "Get discovered",
    description:
      "Your profile is live in the right category. Visitors browsing Verifly find you and reach out directly.",
    image: howImageTwo,
  },
];

const explorerSteps = [
  {
    title: "Browse by category",
    description:
      "Choose from seven curated categories - food, education, beauty, clothing, technology, household, or local services.",
    image: howImageTwo,
  },
  {
    title: "Explore profiles",
    description:
      "Each profile shows the brand story, full service list with pricing, photos, and direct contact options.",
    image: howImageFour,
  },
  {
    title: "Connect directly",
    description:
      "Reach out to the business owner through their profile. No intermediary, no platform fees.",
    image: howImageThree,
  },
];

const TimelineColumn = ({ title, steps }) => {
  return (
    <div className="how-column">
      <h3>{title}</h3>

      <div className="timeline">
        {steps.map((step, index) => (
          <article className="timeline-step" key={step.title}>
            <div className="timeline-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="timeline-content">
              <h4>{step.title}</h4>
              <p>{step.description}</p>
              <img src={step.image} alt="" aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works-inner">
        <div className="how-kicker">How It Works</div>
        <h2>
          Simple for owners.
          <br />
          Effortless for explorers.
        </h2>

        <div className="how-columns">
          <TimelineColumn title="For Business Owners" steps={ownerSteps} />
          <TimelineColumn title="For Explorers" steps={explorerSteps} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
