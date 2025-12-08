import { useEffect, useRef } from "react";
import Typography from "../components/Text";
import Image from "../components/Images";
import teamimg1 from "../images/team.png";

function BlogCard({
  img = teamimg1,
  titleSmall,
  titleLarge,
  titleLargeDark,
  profileImg,
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
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="teamcard reveal-up"
      style={{
        padding: "20px",
        background: "var(--secondary-bg)",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        ...style,
      }}
    >
      <Image src={img} alt="blog" width="100%" />

      <Typography
        variant="h6"
        color="var(--secondary-color)"
        fontFamily="var(--font-poppins)"
        style={{ marginBottom: "0px", fontWeight: "600" }}
      >
        {titleLarge}
      </Typography>

      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Image
            src={profileImg}
            alt="profile"
            width="40px"
            height="40px"
            style={{ borderRadius: "50%" }}
          />

          <Typography
            variant="p"
            color="var(--text-color)"
            fontFamily="var(--font-raleway)"
            style={{
              marginBottom: "0px",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {titleSmall}
          </Typography>
        </div>

        <Typography
          variant="p"
          color="var(--text-color)"
          fontFamily="var(--font-raleway)"
          style={{
            marginBottom: "0",
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          {titleLargeDark}
        </Typography>
      </div>
    </div>
  );
}

export default BlogCard;
