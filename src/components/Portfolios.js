import SectionHeading from "../components/SectionHeading";
import { useState } from "react";

import P1 from "../images/portfolio1.png";
import P2 from "../images/portfolio2.png";
import P3 from "../images/portfolio3.png";
import P4 from "../images/portfolio4.png";
import P5 from "../images/portfolio5.png";

const portfolioData = {
  All: [
    { image: P1 },
    { image: P2 },
    { image: P3 },
    { image: P4 },
    { image: P5 },
  ],
  Website: [
    { image: P1 },
    { image: P2 },
  ],
  Mobile: [{ image: P4 }],
  Branding: [{image: P3 }],
};

function Portfolio() {
  const tabs = Object.keys(portfolioData);
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      <div className="portfolio-section" style={{ padding: "70px 0", background: "var(--team-bg)"}}>
          <SectionHeading 
                titleSmall="Portfolio"
                titleLargeDark="Our Work"
              />
        <div className="container">

          {/* Tabs */}
          <div className="portfolio-tabs" style={{ textAlign: "center", marginBottom: "30px" }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "10px 20px",
                  margin: "5px",
                  cursor: "pointer",
                  borderRadius: "6px",
                  border: "1px solid var(--secondary-color)",
                  background: activeTab === tab ? "var(--secondary-color)" : "transparent",
                  color: activeTab === tab ? "#fff" : "var(--secondary-color)",
                  transition: "0.3s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Masonry Layout */}
      <div className="masonry">
        {portfolioData[activeTab].map((item, index) => (
          <div className="masonry-item" key={index}>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>

        </div>
      </div>
    </>
  );
}

export default Portfolio;
