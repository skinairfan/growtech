import { useEffect, useRef } from "react";
import Typography from "../components/Text";

function Card({
  icon1: Icon1 = null,
  icon2: Icon2 = null,
  icon3: Icon3 = null,
  icon4: Icon4 = null,
  icon5: Icon5 = null,
  icon6: Icon6 = null,
  titleLarge,
  discription,
  number,
  variant = "primary",
}) {
  const cardRef = useRef(null);

  /* ------------------------------------------------------
    SCROLL ANIMATION
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

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  /* ------------------------------------------------------
    CARD STYLES
  ------------------------------------------------------ */
  const styles = {
    primary: {
      cardBg: "var(--pcard-bg)",
      iconBg: "var(--p-iconBg)",
      iconColor: "var(--p-iconColor)",
      titleColor: "var(--primary-color)",
      numberColor: "var(--primary-color)",
    },
    secondary: {
      cardBg: "var(--scard-bg)",
      iconBg: "var(--p-iconBg)",
      titleColor: "var(--primary-color)",
      numberColor: "var(--primary-color)",
    },
    card1: {
      cardBg: "rgba(0, 215, 155, 0.1)",
      iconBg: "rgba(0, 215, 155, 0.1)",
      iconColor: "var(--white-color)",
      titleColor: "var(--white-color)",
      numberColor: "var(--white-color)",
      discriptionColor: "var(--white-color)",
    },
    card2: {
      cardBg: "rgba(255, 62, 84, 0.1)",
      iconBg: "rgba(255, 62, 84, 0.1)",
      iconColor: "var(--white-color)",
      titleColor: "var(--white-color)",
      numberColor: "var(--white-color)",
    },
    card3: {
      cardBg: "rgba(4, 221, 247, 0.1)",
      iconBg: "rgba(4, 221, 247, 0.1)",
      iconColor: "var(--white-color)",
      titleColor: "var(--white-color)",
      numberColor: "var(--white-color)",
    },
    card4: {
      cardBg: "rgba(255, 178, 11, 0.1)",
      iconBg: "rgba(255, 178, 11, 0.1)",
      iconColor: "var(--white-color)",
      titleColor: "var(--white-color)",
      numberColor: "var(--white-color)",
    },
  };

  const current = styles[variant] || styles.primary;
  const iconColor = current.iconColor || "currentColor";

  const lineIcons = [
    { Icon: Icon2, color: "var(--CardlineColor)" },
    { Icon: Icon3, color: "#00D79B" },
    { Icon: Icon4, color: "#FF3E54" },
    { Icon: Icon5, color: "#04DDF7" },
    { Icon: Icon6, color: "#FFB20B" },
  ];

  return (
    <div
      ref={cardRef}
      className="scroll-reveal card-hover"
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        background: current.cardBg,
        padding: "30px",
        borderRadius: "14px",
        position: "relative",
        marginBottom: "20px",
        transition: "all 0.4s ease",
      }}
    >
      {/* ICON BOX */}
      <div
        style={{
          background: current.iconBg,
          color: iconColor,
          padding: "15px",
          borderRadius: "12px",
          width: "max-content",
        }}
      >
        {Icon1 && <Icon1 size={45} color={iconColor} />}
      </div>

      {/* TITLE */}
      <Typography
        variant="h5"
        color={current.titleColor}
        fontFamily="var(--font-poppins)"
        style={{ fontWeight: "800", marginBottom: "0" }}
      >
        {titleLarge}
      </Typography>

      {/* LINES ICONS */}
      <div className="hr" style={{ width: "100%", display: "flex", gap: "6px" }}>
        {lineIcons.map(({ Icon, color }, i) =>
          Icon ? <Icon key={i} width={90} height={6} color={color} /> : null
        )}
      </div>

      {/* DESCRIPTION */}
      <Typography
        variant="p"
        color={current.discriptionColor || current.titleColor}
        fontFamily="var(--font-raleway)"
        style={{ fontWeight: "500", marginBottom: "0" }}
      >
        {discription}
      </Typography>

      {/* BACKGROUND NUMBER */}
      <Typography
        variant="h2"
        fontFamily="var(--font-raleway)"
        style={{
          fontWeight: "800",
          position: "absolute",
          top: "20px",
          right: "30px",
          fontSize: "48px",
          color: current.numberColor,
          opacity: "0.06",
        }}
      >
        {number}
      </Typography>
    </div>
  );
}

export default Card;
