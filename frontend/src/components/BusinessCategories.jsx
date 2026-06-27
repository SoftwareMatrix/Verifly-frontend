import "../styles/BusinessCategories.css";
import businessImageOne from "../assets/Rectangle 945.png";
import businessImageTwo from "../assets/Rectangle 946.png";
import businessImageThree from "../assets/Rectangle 905.png";
import businessImageFour from "../assets/Rectangle 947.png";
import businessImageFive from "../assets/Rectangle 948.png";
import businessImageSix from "../assets/Rectangle 949.png";

const categories = [
  "All",
  "Food & Beverage",
  "Education",
  "Beauty & Wellness",
  "Clothing & Fashion",
  "Technology",
  "HouseHold Products",
  "Local Services",
  "Jewelry",
  "Mobile Accessories",
  "Other Businesses",
];

const businesses = [
  {
    name: "Ember & Grain",
    description:
      "Artisan sourdough and small-batch preserves, baked with intention.",
    location: "Atlanta, GA",
    image: businessImageOne,
  },
  {
    name: "Luminary Tutors",
    description:
      "One-on-one academic coaching for students who want to think, not just pass.",
    location: "Remote",
    image: businessImageTwo,
  },
  {
    name: "Fold & Form",
    description: "Considered clothing for people who dress with purpose.",
    location: "London, UK",
    image: businessImageThree,
  },
  {
    name: "Sable Studio",
    description: "Clean beauty rituals rooted in botanical science.",
    location: "Greece SA",
    image: businessImageFour,
  },
  {
    name: "Circuitly",
    description:
      "Custom hardware and embedded systems for makers and micro-businesses.",
    location: "Nairobi, KE",
    image: businessImageFive,
  },
  {
    name: "Hearth & Hold",
    description:
      "Handcrafted home goods that make everyday spaces feel considered.",
    location: "Bangalore, IN",
    image: businessImageSix,
  },
];

const BusinessCategories = () => {
  return (
    <section className="business-categories" id="businesses">
      <div className="business-categories-inner">
        <div className="business-section-kicker">
          <span aria-hidden="true" />
          Browse By Category
        </div>

        <h2>
          Find Businesses
          <br />
          By What They Do
        </h2>

        <div className="category-filters" aria-label="Business categories">
          {categories.map((category) => (
            <button
              className={`category-chip${category === "All" ? " category-chip-active" : ""}`}
              key={category}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="business-grid">
          {businesses.map((business) => (
            <article className="business-card" key={business.name}>
              <img src={business.image} alt="" aria-hidden="true" />

              <div className="business-card-body">
                <h3>{business.name}</h3>
                <p>{business.description}</p>

                <div className="business-card-footer">
                  <span>{business.location}</span>
                  <strong>
                    <span aria-hidden="true">•</span>
                    Verified
                  </strong>
                </div>
              </div>
            </article>
          ))}
        </div>

        <a className="view-all-businesses" href="#browse">
          View All Bussiness
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </section>
  );
};

export default BusinessCategories;
