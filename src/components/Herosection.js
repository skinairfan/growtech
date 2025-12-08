// HeroSection.jsx
import { useEffect, useRef } from "react";
import Typography from "./Text";
import Image from "./Images";
import Button from "./Button";

function HeroSection({
  titleSmall,
  titleLarge,
  highlightText,
  buttonText,
  imageSrc,
}) {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  /* ------------------------------------------------------
     SCROLL ANIMATION (Intersection Observer)
  ------------------------------------------------------ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="herosection" style={styles.hero}>
      
      {/* Decorative Circle Background */}
      <div style={styles.heroAfter}></div>

      <div className="container" style={styles.container}>
        
        {/* LEFT SIDE CONTENT */}
        <div
          style={styles.contentWrapper}
          ref={contentRef}
          className="scroll-reveal"
        >
          {/* Decorative Circle */}
          <div style={styles.afterCircle}></div>

          <div style={styles.content}>
            <Typography
              variant="h4"
              color="var(--secondary-color)"
              fontFamily="var(--font-oswald)"
              style={{ marginBottom: "10px", fontWeight: "400" }}
            >
              {titleSmall}
            </Typography>

            <Typography
              variant="h1"
              color="#0E1F51"
              fontFamily="var(--font-poppins)"
              style={{ fontWeight: "800", }}
            >
              {titleLarge}{" "}
              <span style={styles.span}>{highlightText}</span>
            </Typography>

            <Button
              title={buttonText}
              variant="primaryg"
              style={{
                marginTop: "20px",
                fontFamily: "var(--font-raleway)",
              }}
            />
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          className="images scroll-reveal-img"
          ref={imageRef}
          style={styles.imageWrap}
        >
          <Image src={imageSrc} alt="Banner" style={{width:"100%", maxWidth:"600px"}} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

/* ------------------------------------------------------
   INLINE STYLES
------------------------------------------------------ */
const styles = {
  hero: {
    padding: "50px 0",
    position: "relative",
    overflow: "hidden",
  },

  heroAfter: {
    position: "absolute",
    right: "-75px",
    bottom: "100px",
    background: "var(--primary-color)",
    width: "150px",
    height: "150px",
    borderRadius: "100px",
    opacity: 0.05,
    zIndex: 0,
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 1,
  },

  contentWrapper: {
    position: "relative",
    maxWidth: "460px",
  },

  afterCircle: {
    position: "absolute",
    left: "-75px",
    top: "-75px",
    width: "148px",
    height: "150px",
    borderRadius: "100px",
    background: "var(--primary-color)",
    opacity: 0.05,
    zIndex: 0,
  },

  content: {
    position: "relative",
    zIndex: 1,
  },

  span: {
    color: "var(--secondary-color)",
  },

  imageWrap: {
    maxWidth: "100%",
  },
};
