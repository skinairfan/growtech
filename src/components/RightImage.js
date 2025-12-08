import { useEffect } from "react";
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

  // NEW dynamic IconContent array
  iconList = [], // 👈 array of icons
}) {
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

    document.querySelectorAll(".reveal-left, .reveal-right").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="about-section" style={styles.section}>
      <div className="container">
        <div className="row gy-4">

          {/* LEFT SIDE IMAGE */}
          

          {/* RIGHT SIDE CONTENT */}
          <div className="col-md-6 col-sm-12 col-xs-12 reveal-left">

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
              style={{ fontWeight: "600",}}
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

            {/* Dynamic Multiple IconContent */}
            <div className="d-flex flex-column flex-md-row" style={{ gap: "20px" }}>
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
                  style={{padding:"10px", borderRadius:"10px", background:"var(--secondary-bg)"}}
                />
              ))}
            </div>

            {showButton && buttonText && (
              <Button
                title={buttonText}
                variant="primaryg"
                style={{ marginTop: "20px", fontFamily: "var(--font-raleway)" }}
              />
            )}
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 reveal-right">
            <div className="leftimage">
              <div style={styles.imageWrap}>
                <Image
                  src={imageSrc}
                  alt="Banner"
                  style={{ width: "100%", maxWidth: "600px" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftImage;

// STYLES
const styles = {
  section: {
    padding: "80px 0",
    background:"var(--about-bg)",
  },
  imageWrap: {
    maxWidth: "100%",
  },
  span: {
    color: "var(--secondary-color)",
  },
};
