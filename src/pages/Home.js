import { useEffect } from "react";
import HeroSection from "../components/Herosection";
import LeftImage from "../components/Imagescontent";
import BannerImg from "../images/banner.png";
import AboutImg from "../images/about.png";
import WhatImg from "../images/Whatdo.png";
import { VisionIocn, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, CallPersion, Call, Goal, Mail, Location, Devlopment, Cardline, UXDesign, Migration, Appdeveplopment, integration, Email } from "../components/svgIcon";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { Research, Design, Develope, Test } from "../components/svgIcon";
import Teamcard from "../components/Teamcard";
import img1 from "../images/team1.png";
import img2 from "../images/team2.png";
import img3 from "../images/team3.png";
import img4 from "../images/team4.png";
import img5 from "../images/team5.png";
import TestimonialsSlider from "../components/TestimonialsSlider";
import ContactForm from "../components/ContactForm";
import IconContent from "../components/Iconcontent";
import Typography from "../components/Text";
import SocialMedia from "../components/Socialmedia";
import BlogCard from "../components/BlogCard";
import teamimg1 from "../images/blog.png";
import teamimg2 from "../images/blog2.png";
import teamimg3 from "../images/blog3.png";
import profile1 from "../images/team1.png";
import profile2 from "../images/team2.png";
import profile3 from "../images/team3.png";



const homeFields = [
  { type: "text", name: "name", placeholder: "Your name…" },
  { type: "email", name: "email", placeholder: "Your email…" },
  { type: "tel", name: "phone", placeholder: "Enter your phone number..." }, 
  { type: "textarea", name: "message", placeholder: "Write your message..." },
];

const blogData = [
    {
      img: teamimg1,
      titleSmall: "Ranold Jeff",
      titleLarge: "The most Popular Business Of the Year",
      titleLargeDark: "May 4th, 2022",
       profileImg: profile1,
    },
    {
      img: teamimg2,
      titleSmall: "Web Design",
      titleLarge: "The most Popular Business Of the Year",
      titleLargeDark: "May 4th, 2022",
       profileImg: profile2,
    },
    {
      img: teamimg3,
      titleSmall: "Development",
      titleLarge: "The most Popular Business Of the Year",
      titleLargeDark: "May 4th, 2022",
      profileImg: profile3,
    },
  ];

const socialLinks = [
  { Icon: FaFacebook, link: "https://facebook.com", color: "#1877F2" },
  { Icon: FaInstagram, link: "https://instagram.com", color: "#E1306C" },
  { Icon: FaTwitter, link: "https://twitter.com", color: "#1DA1F2" },
  { Icon: FaLinkedin, link: "https://linkedin.com", color: "#0A66C2" },
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
    desColor1:"var(text-color)",
    desColor2:"var(text-color)",
  },
  {
    Icon: Location,
    titleLarge: "Visit Us",
    description: "20 Island Park Road,",
    description2: "20 Island Park Road,",
    iconColor: "#00D79B",
  }
];



const teamData = [
  {
    img: img1,
    titleLarge: "Larry F. Burnett",
    titleLargeDark: "Fronted Developer",
  },
  {
    img: img2,
    titleLarge: "Larry F. Burnett",
    titleLargeDark: "UI/UX Designer",
  },
  {
    img: img3,
    titleLarge: "Aarav",
    titleLargeDark: "React Specialist",
  },
  {
    img: img4,
    titleLarge: "Md Faisal",
    titleLargeDark: "React Backend",
  },
  {
    img: img5,
    titleLarge: "Burnett",
    titleLargeDark: "Wordpress",
  },
];

function Home() {
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
      <HeroSection
        titleSmall="We Are Here"
        titleLarge="Better Insights For"
        highlightText="Business"
        buttonText="Start Your Project"
        imageSrc={BannerImg}
      />

      <LeftImage
        titleSmall="About Us"
        titleLarge="One of the Fastest Way to Business Growth"
        discription="It is a long established fact that a reader will be distracted by the 
readable content of a page when looking at its layout. The point of 
using Lorem Ipsum is that it has a more-or-less normal distribution 
of letters, as opposed"
        imageSrc={AboutImg} 
        buttonText="Learn More"
        // showButton={false} 
        iconList={[
          {
            icon: CallPersion,
            title: "Get Instant Professional Advice",
            description: "Ready to Help:",
            highlight: "+1 234 567 890",
            iconColor: "var(--primary-color)",
          },
        ]}
      />
      <div className="process" style={{backgroundColor:"var(--dark-bg)", padding:"80px 0"}}>
       
          <SectionHeading  
            titleSmall="Planning"
            titleLarge="Our Process"
          />
          <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 col-lg-3">
                <Card
                  variant="primary"
                  icon1={Research}
                  titleLarge="Research"
                  discription="It is a long established fact that a reader will be distra by the readable content of a page."
                  icon2={Cardline}
                  number="01"
                />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 col-lg-3">
              <Card
                  variant="secondary"
                  icon1={Design}
                  titleLarge="Design"
                  discription="It is a long established fact that a reader will be distra by the readable content of a page."
                  icon2={Cardline}
                  number="02"
                />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 col-lg-3">
              <Card
                  variant="primary"
                  icon1={Develope}
                  titleLarge="Develope"
                  discription="It is a long established fact that a reader will be distra by the readable content of a page."
                  // images={[line]}
                  icon2={Cardline}
                  number="03"
                />
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 col-lg-3">
               <Card
                  variant="secondary"
                  icon1={Test}
                  titleLarge="Test"
                  discription="It is a long established fact that a reader will be distra by the readable content of a page."
                  // images={[line]}
                  icon2={Cardline}
                  number="04"
                />
            </div>
          </div>
        </div>
      </div>
      <LeftImage
        titleSmall="What We Do"
        titleLarge="We Develope Product That People Love to Use."
        discription="It is a long established fact that a reader will be distracted by the 
readable content of a page when looking at its layout. The point of 
using Lorem Ipsum is that it has a more-or-less normal distribution 
of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
        imageSrc={WhatImg} 
        buttonText="Learn More"
        // showButton={false} 
        // iconTitle="Our Vision"
        // iconDescription="It is a long established fact that"
        // iconComponent={VisionIocn}
        iconList={[
          {
            icon: VisionIocn,
            titleLarge:"Our Vision",
            description: "It is a long established fact that",
            iconColor: "var(--primary-color)",
          },
          {
            icon: Goal,
            titleLarge:"Our Goal",
            description: "It is a long established fact that",
            iconColor: "var(--primary-color)",
          },
        ]}
      />
      <div className="services" style={{backgroundColor:"var(--dark-bg)", padding:"80px 0"}}>
        
          <SectionHeading  
            titleSmall="Services"
            titleLarge="Our Expertise"
          />
          <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <Card
                  icon1={Devlopment}
                  icon3={Cardline}
                  variant="card1"
                  titleLarge="Web Design / Development"
                  discription="It is a long established fact that a reader will be distra by the readable content of a page."
                  // images={[line]}
                />
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <Card
                  variant="card2"
                  icon1={UXDesign}
                   icon4={Cardline}
                  titleLarge="UI/UX Design"
                  discription="It is a long established fact that a reader will be distra by the readable content of a page."
                  // images={[line]}
                />
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <Card
                  variant="card3"
                  icon1={Migration}
                  icon5={Cardline}
                  titleLarge="Website Migration"
                  discription="It is a long established fact that a reader will be distra by the readable content of a page."
                  // images={[line]}
                />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <Card
                  variant="card4"
                  icon1={Appdeveplopment}
                  icon6={Cardline}
                  titleLarge="Website Migration"
                  discription="It is a long established fact that a reader will be distra by the readable content of a page."
                  // images={[line]}
                />
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <Card
                  variant="card3"
                  icon1={integration}
                  icon3={Cardline}
                  titleLarge="HubSpot Integration"
                  discription="It is a long established fact that a reader will be distra by the readable content of a page."
                  // images={[line]}
                />
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <Card
                  variant="card2"
                  icon1={Email}
                  icon4={Cardline}
                  titleLarge="Email Marketing"
                  discription="It is a long established fact that a reader will be distra by the readable content of a page."
                  // images={[line]}
                />
            </div>
          </div>
        </div>
      </div>
      <div className="team text-white" style={{padding:"70px 0", backgroundColor:"var(--team-bg)"}}>
        
          <SectionHeading  
            titleSmall="Team"
            titleLargeDark="Our Leaders"
          />
          <div className="container">
          <div className="row">
            <div className="team-grid">
              {teamData.map((item, index) => (
                <Teamcard
                  style={{ textAlign: "center" }}
                  key={index}
                  img={item.img}
                  titleSmall={item.titleSmall}
                  titleLarge={item.titleLarge}
                  titleLargeDark={item.titleLargeDark}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="testimonialssection" style={{padding:"70px 0", backgroundColor:"var(--testimonial-bg)"}}>
          <SectionHeading  
            titleSmall="From our Customers"
            titleLargeDark="Testimonials"
          />
          <div className="container">
            <div className="row">
                <TestimonialsSlider />
            </div>
          </div>
      </div>
      <div className="contact-setion" style={{backgroundColor:"var(--contact-bg)", padding:"70px 0"}}>
          <SectionHeading  
                titleSmall="Get In Touch "
                titleLarge="Hey! Let’s Talk"
          />
        <div className="container">
             <div className="row gy-4">
              <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 reveal-left">
                <div style={{padding:"30px", borderRadius:"10px", background:"var(--secondary-bg)"}}>
                   <ContactForm fields={homeFields} />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12  reveal-right">
                   <div style={{padding:"30px", borderRadius:"10px", height:"100%", background:"var(--secondary-bg)", display:"flex", FlexDirection:"row", flexWrap:"wrap", gap:"10px", width:"100%", alignItems:"center", justifyContent:"center"}}>
                        {data.map((item, index) => (
                          <IconContent
                            key={index}
                            Icon={item.Icon}
                            titleLarge={item.titleLarge}
                            description={item.description}
                            description2={item.description2}
                            iconColor={item.iconColor}
                            desColor1={item.desColor1}
                            desColor2={item.desColor2}
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
      <div className="blogsection" style={{backgroundColor:"var(--blog-bg)", padding:"70px 0"}}>
        <SectionHeading  
          titleSmall="Our Blog"
          titleLargeDark="Latest Post"
          />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="blog-grid">
                  {blogData.map((item, index) => (
                    <BlogCard
                      key={index}
                      img={item.img}
                      profileImg={item.profileImg}
                      titleSmall={item.titleSmall}
                      titleLarge={item.titleLarge}
                      titleLargeDark={item.titleLargeDark}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;
