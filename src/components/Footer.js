import Button from './Button';
import Typography from './Text';
import videobg from '../images/videobg.png';
import Image from './Images';
import brand from '../images/darklogo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, Cardline, Call, Mail, Location, Wix, Wordpress, React  } from "../components/svgIcon";
import SocialMedia from "../components/Socialmedia";
import NavBar from "../components/NavBar";
import IconContent from "../components/Iconcontent";
import ContactForm from "../components/ContactForm";




const footerFields = [
  { type: "email", name: "email", placeholder: "Your email…" },
];
const socialLinks = [
  { Icon: FaFacebook, link: "https://facebook.com", color: "#1877F2" },
  { Icon: FaInstagram, link: "https://instagram.com", color: "#E1306C" },
  { Icon: FaTwitter, link: "https://twitter.com", color: "#1DA1F2" },
  { Icon: FaLinkedin, link: "https://linkedin.com", color: "#0A66C2" },
];

const data = [
  {
    Icon: React,
    titleLarge: "ReactJs Dev.",
    description: "1-5 Years of Exp.",
    iconColor: "#00D79B",
  },
  {
    Icon: Wordpress,
    titleLarge: "Wordpress Dev.",
    description: "1-5 Years of Exp.",
    iconColor: "#00D79B",
  },
  {
    Icon: Wix,
    titleLarge: "Python Developer",
    description: "1-5 Years of Exp.",
    iconColor: "#00D79B",
  }
];

function Footer() {
  return (
    <div className="mainfooter" style={{ background: "var(--dark-bg)" }}>
      <div className="videosection" style={{ background: "var(--footer-bg)", padding: "70px 12px " }}>
        <div className="container">
          <div className="row">

            {/* FIXED BACKGROUND IMAGE */}
            <div
              className="videocontent"
              style={{
                background: `url(${videobg}) center/cover no-repeat`,
                padding: "60px",
                borderRadius: "20px",
                textAlign: "center",
                maxWidth:"950px",
                margin:"0 auto",
              }}
            >
              <Typography
                variant="h2"
                color="var(--white-color)"
                fontFamily="var(--font-raleway)"
                style={{ marginBottom: "0", fontWeight: "600" }}
              >
                “Some of the History of Our Company is that we are Catching up through Video”
              </Typography>

              <Button
                title="Get In Touch"
                variant="secondaryg"
                style={{ marginTop: "30px", fontFamily: "var(--font-raleway)" }}
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>

    <footer className="" style={{background:"var(--dark-bg)", padding:"70px 0 30px"}}>
      <div className="container">
        <div className="row gy-4">
            <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12">
                <div className="" style={{ display: "flex", gap: "25px", alignItems:"start", justifyContent:"start", flexDirection:"column"}}>
                <div className="brand">
                    <Image src={brand} width={153} />
                </div>
                <Typography
                    variant="p"
                    color="var(--white-color)"
                    fontFamily="var(--font-raleway)"
                    style={{ marginBottom: "0", fontWeight: "500", fontSize: "14px" }}
                >
                    It is a long established  fact that a reader will be distracted by the readable content of a page when looking at
                </Typography>
                <div className="d-none d-md-flex" style={{  gap: "15px", alignItems:"center", justifyContent:"start", }}>
                        {socialLinks.map((item, index) => (
                        <SocialMedia
                            key={index}
                            Icon={item.Icon}
                            link={item.link}
                            color={item.color}
                            size={26}
                            style={{
                                border:"2px solid var(--socialBg)",
                                color:"var(--socialColor)",
                            }}
                        />
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12">
                <div className="title">
                <Typography
                    variant="h4"
                    color="var(--white-color)"
                    fontFamily="var(--font-poppins)"
                    style={{ marginBottom: "0", fontWeight: "600" }}
                >
                   Services
                </Typography>
                <div style={{marginBottom:"20px"}}>
                    <Cardline size="60px" height="5px" color="var(--secondary-color)" />
                </div>
                    <NavBar variant="footer" style={{ flexDirection: "column", gap:"5px" }} />
                </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12">
                <div className="title">
                <Typography
                    variant="h4"
                    color="var(--white-color)"
                    fontFamily="var(--font-poppins)"
                    style={{ marginBottom: "0", fontWeight: "600" }}
                >
                   Career
                </Typography>
                <div style={{marginBottom:"20px"}}>
                    <Cardline size="60px" height="5px" color="var(--secondary-color)" />
                </div>
                    {data.map((item, index) => (
                        <IconContent
                            Icon={item.Icon}
                            titleLarge={item.titleLarge}
                            description={item.description}
                            iconColor="#00D79B"
                            iconSize={40}

                            style={{ gap: "25px", marginBottom:"20px", alignItems:"center", }}
                            iconBoxStyle={{ background: "#eee", width:"68px", height:"68px", }}
                            textStyle={{ gap: "5px" }}
                            titleStyle={{ color: "var(--secondary-color)", fontSize: "18px", fontFamily:"var(--font-poppins)", fontWeight:"400" }}
                            descriptionStyle={{ color: "#fff", fontSize: "16px" }}
                        />
                    ))}
                </div>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12">
                <div className="title">
                <Typography
                    variant="h4"
                    color="var(--white-color)"
                    fontFamily="var(--font-poppins)"
                    style={{ marginBottom: "0", fontWeight: "600" }}
                >
                   Subscribe Us
                </Typography>
                <div style={{marginBottom:"20px"}}>
                    <Cardline size="60px" height="5px" color="var(--secondary-color)" />
                </div>
                   <Typography
                    variant="p"
                    color="var(--white-color)"
                    fontFamily="var(--font-raleway)"
                    style={{ marginBottom: "0", fontWeight: "500", fontSize: "14px" }}>
                    It is a long established  fact that a reader will be distracted by the readable.
                </Typography>
                    <ContactForm
                    fields={footerFields}
                    formStyle={{
                       marginTop:"15px",
                    }}
                    buttonStyle={{
                        width: "100%",
                        color: "#fff",
                        marginTop:"0px",
                        justifyContent:"center",
                        fontFamily:"var(--font-raleway)",
                    }}
                    buttonProps={{
                        variant: "secondaryg",
                    }}
                    />
                            <div
                              className="d-flex d-md-none"
                              style={{
                                gap: "15px",
                                marginTop: "15px",
                                alignItems: "center",
                                justifyContent: "start",
                              }}
                            >                        
                            {socialLinks.map((item, index) => (
                        <SocialMedia
                            key={index}
                            Icon={item.Icon}
                            link={item.link}
                            color={item.color}
                            size={26}
                            style={{
                                border:"2px solid var(--socialBg)",
                                color:"var(--socialColor)",
                            }}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
        <div className="bottomfooter" style={{background:"#010A1D", padding:"10px 0"}}>
        <div className="container">
            <div className="row">
            <div className="col-12">
                <Typography
                variant="p"
                color="var(--white-color)"
                fontFamily="var(--font-raleway)"
                style={{
                    marginBottom: "0",
                    fontWeight: "500",
                    fontSize: "14px",
                    textAlign: "center",
                }}
                >
                © {new Date().getFullYear()}{" "}
                <a href="/home" style={{ color: "var(--secondary-color)" }}>
                    GrowIQ Tech Lab.
                </a>{" "}
                All rights reserved.
                </Typography>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Footer;
