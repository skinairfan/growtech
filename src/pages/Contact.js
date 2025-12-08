import { useEffect } from "react";
import PageTitle from "../components/PageTitle";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { Call, Mail, Location, FaFacebook, FaInstagram, FaLinkedin, FaTwitter,} from "../components/svgIcon";
import IconContent from "../components/Iconcontent";
import Typography from "../components/Text";
import SocialMedia from "../components/Socialmedia";



const socialLinks = [
  { Icon: FaFacebook, link: "https://facebook.com", color: "#1877F2" },
  { Icon: FaInstagram, link: "https://instagram.com", color: "#E1306C" },
  { Icon: FaTwitter, link: "https://twitter.com", color: "#1DA1F2" },
  { Icon: FaLinkedin, link: "https://linkedin.com", color: "#0A66C2" },
];

const homeFields = [
  { type: "text", name: "name", placeholder: "Your name…" },
  { type: "email", name: "email", placeholder: "Your email…" },
  { type: "tel", name: "phone", placeholder: "Enter your phone number..." }, 
  { type: "textarea", name: "message", placeholder: "Write your message..." },
];

const data = [
  {
    Icon: Call,
    titleLarge: "Call Anytime",
    description: "+91 23678 27867",
    description2: "+91 67678 92878",
    iconColor: "#00D79B",
  },
  {
    Icon: Mail,
    titleLarge: "Send Email",
    description: "connect@itfirms.com",
    description2: "connect@itfirms.com",
    iconColor: "#00D79B",
  },
  {
    Icon: Location,
    titleLarge: "Visit Us",
    description: "20 Island Park Road,",
    description2: "20 Island Park Road,",
    iconColor: "#00D79B",
  }
];

function Contact() {
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
    <>
      <PageTitle
        title="Contact"
        breadcrumb="Home / Contact"
      />
      <div className="contact-setion" style={{backgroundColor: "var(--contactpagebg)"
, padding:"70px 0"}}>
          <SectionHeading  
                titleSmall="Get In Touch "
                titleLargeDark="Hey! Let’s Talk"
          />
        <div className="container">
             <div className="row gy-4">
              <div className="col-md-6 col-lg-8 col-sm-12 col-xs-12 reveal-left">
                <div style={{padding:"30px", borderRadius:"10px",background:"var(--secondary-bg)"}}>
                   <ContactForm fields={homeFields} />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 reveal-right">
                   <div style={{padding:"30px", borderRadius:"10px", height:"100%", background:"var(--secondary-bg)", display:"flex", FlexDirection:"row", flexWrap:"wrap", gap:"10px", width:"100%", alignItems:"center", justifyContent:"center"}}>
                        {data.map((item, index) => (
                          <IconContent
                            key={index}
                            Icon={item.Icon}
                            titleLarge={item.titleLarge}
                            description={item.description}
                            description2={item.description2}
                            iconColor={item.iconColor}
                            style={{
                                gap:"20px"
                              }}
                              textStyle={{ 
                                gap: "5px",
                              }}
                          />
                        ))}
                      <div className="socialicon" style={{margin:"10px 0", display:"block", width:"100%"}}>
                        <Typography variant="h4" style={{textAlign:"center", fontWeight:"600", color:"var(--text-color)"}}>
                          Follow us
                        </Typography>
                      </div>
                        <div style={{ display: "flex", gap: "15px", alignItems:"center", justifyContent:"center", }}>
                          {socialLinks.map((item, index) => (
                            <SocialMedia
                              key={index}
                              Icon={item.Icon}
                              link={item.link}
                              color={item.color}
                              size={26}
                            />
                          ))}
                        </div>
                    </div>
              </div>
             </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
