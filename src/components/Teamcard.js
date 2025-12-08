import { useEffect, useRef } from "react";
import Typography from "../components/Text";
import Image from "../components/Images";
import teamimg1 from "../images/team.png";

function Teamcard({
  img = teamimg1,
  titleSmall,
  titleLarge,
  titleLargeDark,
  style = {},
}) {
  const cardRef = useRef(null);

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

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="teamcard reveal"
      style={{
        padding: "30px",
        backgroundColor: "rgba(0 215 155 / 5%)",
        borderRadius: "10px",
        border: "1px solid rgb(0 215 155 / 20%)",
        transition: "all 0.4s ease",
        cursor: "pointer",
        ...style,
      }}
    >
      <Image src={img} alt="Team Member" />

      <Typography
        variant="h5"
        color="var(--secondary-text-color)"
        fontFamily="var(--font-oswald)"
        style={{ marginBottom: "10px", fontWeight: "400" }}
      >
        {titleSmall}
      </Typography>

      <Typography
        variant="h4"
        color="var(--secondary-color)"
        fontFamily="var(--font-oswald)"
        style={{ marginBottom: "10px", fontWeight: "600" }}
      >
        {titleLarge}
      </Typography>

      <Typography
        variant="p"
        color="var(--primary-color)"
        fontFamily="var(--font-raleway)"
        style={{ marginBottom: "0", fontWeight: "600" }}
      >
        {titleLargeDark}
      </Typography>
    </div>
  );
}

export default Teamcard;
