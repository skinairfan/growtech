import Typography from "../components/Text";
import Image from "../components/Images";
import teamimg1 from "../images/team.png";

function CourseCard({
  img = teamimg1,
  titleSmall,
  titleLarge,
  titleLarge1,
  titleLargeDark,
  profileImg, // dynamic profile image
  style = {},
}) {
  return (
    <div
      className="teamcard"
      style={{
        padding: "12px",
        background:"var(--secondary-bg)",
        borderRadius: "10px",
        // boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        ...style,
      }}
    >
      {/* Card main image */}
      <Image src={img} alt="blog" width="100%" />
      <Typography
        variant="p"
        color="var(--secondary-color)"
        fontFamily="var(--font-poppins)"
        style={{ marginBottom: 0, fontWeight: "400", fontSize:"14px", backgroundColor:"rgba(0, 215, 155, 0.05)", padding:"5px 20px", borderRadius:"100px", width:"max-content" }}
      >
        {titleLarge}
      </Typography>
      {/* Title */}
      <Typography
        variant="h6"
        color="var(--primary-color)"
        fontFamily="var(--font-poppins)"
        style={{ marginBottom: 0, fontWeight: "500" }}
      >
        {titleLarge1}
      </Typography>

      {/* Profile + Right Info */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
         <Image
            src={profileImg}
            alt="profile"
            width="40px"
            height="40px"
            style={{ borderRadius: "50%" }}
          />
        {/* Profile Area */}
        <div
          style={{
            display: "flex",
            gap: "2px",
            alignItems: "start",
            flexDirection:"column",
          }}
        >
         

          <Typography
            variant="p"
            color="var(--text-color)"
            fontFamily="var(--font-raleway)"
            style={{
              marginBottom: 0,
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {titleSmall}
          </Typography>
          <Typography
          variant="p"
          fontFamily="var(--font-raleway)"
          style={{
            marginBottom: 0,
            fontWeight: "600",
            fontSize: "12px",
            color: "var(--text-color)",
          }}
        >
          {titleLargeDark}
        </Typography>
        </div>

        {/* Right Text */}
        
      </div>
    </div>
  );
}

export default CourseCard;
