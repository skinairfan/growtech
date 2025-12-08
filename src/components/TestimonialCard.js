import Typography from "../components/Text";
import Image from "../components/Images";
import teamimg1 from "../images/team.png";
import { Testimonials as TestimonialsIcon } from "../components/svgIcon";

function TestimonialCard({
  img = teamimg1,
  titleSmall,
  titleLarge,
  titleLargeDark,
  style = {}
}) {
  return (
    <div
      className="testimonial-card"
      style={{
        padding: "30px",
        backgroundColor: "var(--testimonial-bg)",
        borderRadius: "10px",
        border: "1px solid var(--testimonialborder)",
        maxWidth:"750px",
        position:"relative",
        margin:"0 auto",
        display:"flex",
        flexDirection:"column",
        gap:"40px",
        ...style,
      }}
    >
      <div className="tetsicon" style={{position:"absolute",top:"30px", right:"30px", width:"60px", height:"60px", display:"inline-flex"}}>
         <TestimonialsIcon />
      </div>
    

      <Image src={img} alt="Client" style={{width:"80px", height:"80px"}} />

      <Typography
        variant="p"
        color="var(--text-color)"
        fontFamily="var(--font-raleway)"
        style={{ marginBottom: "0px", fontWeight: "500" }}
      >
        {titleSmall}
      </Typography>
        <div className="silderinfo">
          <Typography
            variant="p"
            color="var(--secondary-color)"
            fontFamily="var(--font-poppins)"
            style={{ marginBottom: "0px", fontWeight: "600" }}
          >
            {titleLarge}
          </Typography>

          <Typography
            variant="p"
            color="var(--primary-color)"
            fontFamily="var(--font-raleway)"
           style={{ marginBottom: "0", fontWeight: "500", fontSize: "14px" }}

          >
            {titleLargeDark}
          </Typography>
      </div>
    </div>
  );
}

export default TestimonialCard;
