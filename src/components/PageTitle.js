import { useEffect, useRef } from "react";
import Typography from "../components/Text";

function PageTitle({ title, breadcrumb }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("reveal-visible");
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
     
      className="pagetitle "
      style={{ background: "var(--dark-bg)", padding: "80px 0" }}
    >
      <div className="container">
        <div className="row reveal-up"  ref={sectionRef} style={{ textAlign: "center" }}>
          
          <Typography
            variant="h1"
            color="var(--secondary-color)"
            style={{
              fontWeight: "700",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            {title}
          </Typography>

          <div className="breadcrumb" style={{ width: "100%" }}>
            <Typography
              variant="p"
              color="var(--white-color)"
              style={{
                fontFamily: "var(--font-raleway)",
                width: "100%",
              }}
            >
              {breadcrumb}
            </Typography>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PageTitle;
