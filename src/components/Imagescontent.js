import { useState, useEffect, useRef } from "react";
import Typography from "./Text";
import Image from "./Images";
import Button from "./Button";
import IconContent from "./Iconcontent";

function LeftImage({
  titleSmall,
  titleLarge,
  discription,
  highlightText,
  buttonText,
  imageSrc,
  showButton = true,
  iconList = [],
}) {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  /* ------------------------------------------------------
    DARK MODE DETECTION (LIVE)
  ------------------------------------------------------ */
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  /* ------------------------------------------------------
    SCROLL ANIMATION (Intersection Observer)
  ------------------------------------------------------ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate once
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
    <div className="about-section" style={styles.section}>
      <div className="container">
        <div className="row gy-4">

          {/* LEFT SIDE IMAGE */}
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="leftimage scroll-reveal-img" ref={imageRef}>
              <div style={styles.imageWrap}>
                <Image
                  src={imageSrc}
                  alt="Banner"
                  style={{ width: "100%", maxWidth: "600px" }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div
            className="col-md-6 col-sm-12 col-xs-12 scroll-reveal"
            ref={contentRef}
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
              color="var(--text-color)"
              fontFamily="var(--font-poppins)"
              style={{ fontWeight: "600", }}
            >
              {titleLarge}{" "}
              {highlightText && <span style={styles.span}>{highlightText}</span>}
            </Typography>

            <Typography
              variant="p"
              color="var(--text-color)"
              fontFamily="var(--font-raleway)"
              style={{
                fontWeight: "500",
                lineHeight: "27px",
                margin: "20px 0",
              }}
            >
              {discription}
            </Typography>

            {/* ICON CONTENT LIST */}
            <div className="d-flex flex-column flex-md-row" style={{ gap: "20px", }}>
              {iconList.map((item, index) => (
                <IconContent
                  key={index}
                  Icon={item.icon}
                  titleSmall={item.title}
                  titleLarge={item.titleLarge}
                  description={item.description}
                  highlightText={item.highlight}
                  iconSize={item.iconSize || 41}
                  iconColor={item.iconColor || "var(--primary-color)"}
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    background: "var(--secondary-bg)",
                  }}
                />
              ))}
            </div>

            {/* OPTIONAL BUTTON */}
            {showButton && buttonText && (
              <Button
                variant="primaryg"
                title={buttonText}
                style={{
                  marginTop: "20px",
                  fontFamily: "var(--font-raleway)",
                }}
              />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftImage;

/* ------------------------------------------------------
   INLINE STYLES
------------------------------------------------------ */
const styles = {
  section: {
    padding: "70px 0",
    backgroundColor: "var(--about-bg)",
  },
  imageWrap: {
    maxWidth: "100%",
  },
  span: {
    color: "var(--secondary-color)",
  },
};
