import { useEffect, useRef } from "react";
import Typography from "../components/Text";

function SectionHeading({ titleSmall, titleLarge, titleLargeDark, style = {} }) {
  const headingRef = useRef(null);

  /* ------------------------------------------------------
    SCROLL ANIMATION
  ------------------------------------------------------ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // run once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12 scroll-reveal"
          ref={headingRef}
          style={{
            ...style,
            textAlign: "center",
            marginBottom: "20px",
            padding: "20px 0",
          }}
        >
          <Typography
            variant="h4"
            color="var(--secondary-color)"
            fontFamily="var(--font-oswald)"
            style={{ marginBottom: "10px", fontWeight: "400" }}
          >
            {titleSmall}
          </Typography>

          <Typography
            variant="h2"
            color="var(--white-color)"
            fontFamily="var(--font-poppins)"
            style={{ marginBottom: "10px", fontWeight: "600" }}
          >
            {titleLarge}
          </Typography>

          <Typography
            variant="h2"
            color="var(--primary-color)"
            fontFamily="var(--font-poppins)"
            style={{ marginBottom: "10px", fontWeight: "600" }}
          >
            {titleLargeDark}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default SectionHeading;
