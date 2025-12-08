import { useEffect } from "react";
import Typography from "../components/Text";
import BannerImg from "../images/blogbanner.png";
import BannerImg1 from "../images/blogimg.png";
import Image from "./Images";

function BlogBanner() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // FIXED: Added .reveal-up
    document
      .querySelectorAll(".reveal-left, .reveal-right, .reveal-up")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="blogbanner" style={{ background: "var(--team-bg)", padding: "40px 0" }}>
      <div className="container">

        {/* Banner Box */}
        <div
          className="reveal-up"
          style={{
            background: "var(--about-bg)",
            padding: "45px",
            borderRadius: "16px",
            maxWidth: "1000px",
            margin: "0 auto",
            border: "2px solid var(--secondary-bg)",
          }}
        >
          <div className="row gy-3" style={{ alignItems: "center" }}>
            
            {/* LEFT */}
            <div className="col-md-6 col-sm-12">
              <a
                href="#"
                style={{
                  display: "inline-block",
                  color: "var(--secondary-color)",
                  background: "var(--primary-color)",
                  textDecoration: "none",
                  borderRadius: "100px",
                  padding: "5px 20px",
                  marginBottom: "20px",
                  fontWeight: 400,
                }}
              >
                Feb 24, 2023
              </a>

              <Typography
                variant="h3"
                color="var(--primary-color)"
                fontFamily="var(--font-raleway)"
              >
                It is a long established fact that a reader will be distracted by the readable.
              </Typography>
            </div>

            {/* RIGHT */}
            <div className="col-md-6 col-sm-12">
              <Image src={BannerImg} width="100%" alt="Blog Banner" />
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-lg-8 col-xs-12 mx-auto text-center">

            <Typography
              variant="h6"
              className="reveal-up"
              color="var(--primary-color)"
              fontFamily="var(--font-raleway)"
              style={{ textAlign: "left", marginBottom: "15px", fontWeight: "600" }}
            >
              Maximizing Product Success: Key Strategies for Product Managers
            </Typography>

            <Typography
              variant="p"
               className="reveal-up"
              color="#7A7D9C"
              fontFamily="var(--font-raleway)"
              style={{ textAlign: "left", fontWeight: "400" }}
            >
              In this blog post, we will explore essential strategies and best practices that product managers can implement to drive product success. Discover how to excel in the dynamic role of a product manager and achieve your goals with these actionable tips.
            </Typography>

            <Typography  className="reveal-up" variant="p" color="#7A7D9C" fontFamily="var(--font-raleway)" style={{ textAlign: "left", fontWeight: "400" }}>
              Heading: Understand Customer Needs: The Foundation of Product Success
            </Typography>

            <Typography  className="reveal-up" variant="p" color="#7A7D9C" fontFamily="var(--font-raleway)" style={{ textAlign: "left", fontWeight: "400" }}>
              Description: To create a successful product, it is crucial to understand and address the needs of your target customers.
            </Typography>

            <Typography  className="reveal-up" variant="p" color="#7A7D9C" fontFamily="var(--font-raleway)" style={{ textAlign: "left", fontWeight: "400" }}>
              Conduct comprehensive market research and user interviews to identify pain points and preferences.
              Analyze customer feedback and data to uncover insights.
              Use tools like surveys, analytics, and user testing to gather actionable data.
            </Typography>

            {/* Image */}
            <Image  className="reveal-up" src={BannerImg1} width="100%" alt="Blog Banner" style={{ margin: "15px 0" }} />

            {/* More Headings */}
            <Typography
              variant="h6"
               className="reveal-up"
              color="var(--primary-color)"
              fontFamily="var(--font-raleway)"
              style={{ textAlign: "left", marginBottom: "15px", marginTop: "15px", fontWeight: "600" }}
            >
              Maximizing Product Success: Key Strategies for Product Managers
            </Typography>

            <Typography  className="reveal-up" variant="p" color="#7A7D9C" fontFamily="var(--font-raleway)" style={{ textAlign: "left", fontWeight: "400" }}>
              Conduct comprehensive market research and user interviews to identify pain points and preferences.
              Analyze customer feedback and data to uncover insights.
              Use tools like surveys, analytics, and user testing to gather actionable data.
               Conduct comprehensive market research and user interviews to identify pain points and preferences.
              Analyze customer feedback and data to uncover insights.
              Use tools like surveys, analytics, and user testing to gather actionable data.
               Conduct comprehensive market research and user interviews to identify pain points and preferences.
              Analyze customer feedback and data to uncover insights.
              Use tools like surveys, analytics, and user testing to gather actionable data.
            </Typography>
            <Typography  className="reveal-up" variant="p" color="#7A7D9C" fontFamily="var(--font-raleway)" style={{ textAlign: "left", fontWeight: "400" }}>
              Conduct comprehensive market research and user interviews to identify pain points and preferences.
              Analyze customer feedback and data to uncover insights.
              Use tools like surveys, analytics, and user testing to gather actionable data.
            </Typography>

          </div>
        </div>

      </div>
    </div>
  );
}

export default BlogBanner;
