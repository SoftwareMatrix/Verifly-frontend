import "../styles/BusinessCategories.css";

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
    description: "Artisan sourdough and small-batch preserves, baked with intention.",
    location: "Atlanta, GA",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=780&q=80",
  },
  {
    name: "Luminary Tutors",
    description: "One-on-one academic coaching for students who want to think, not just pass.",
    location: "Remote",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=780&q=80",
  },
  {
    name: "Fold & Form",
    description: "Considered clothing for people who dress with purpose.",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=780&q=80",
  },
  {
    name: "Sable Studio",
    description: "Clean beauty rituals rooted in botanical science.",
    location: "Greece SA",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=780&q=80",
  },
  {
    name: "Circuitly",
    description: "Custom hardware and embedded systems for makers and micro-businesses.",
    location: "Nairobi, KE",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=780&q=80",
  },
  {
    name: "Hearth & Hold",
    description: "Handcrafted home goods that make everyday spaces feel considered.",
    location: "Bangalore, IN",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=780&q=80",
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
