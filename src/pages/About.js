import PageTitle from "../components/PageTitle";
import LeftImage from "../components/Imagescontent";
import RightImage from "../components/RightImage";
import { CallPersion, VisionIocn, Goal } from "../components/svgIcon";
import AboutImg from "../images/about.png";
import WhatImg from "../images/Whatdo.png";
import SectionHeading from "../components/SectionHeading";
import Teamcard from "../components/Teamcard";
import img1 from "../images/team1.png";
import img2 from "../images/team2.png";
import img3 from "../images/team3.png";
import img4 from "../images/team4.png";
import img5 from "../images/team5.png";


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

function About() {
  return (
    <>
      <PageTitle
        title="About Us"
        breadcrumb="Home / About Us"
      />

      <LeftImage
        titleSmall="About Us"
        titleLarge="One of the Fastest Way to Business Growth"
        discription="It is a long established fact that a reader will be distracted by the 
readable content of a page when looking at its layout. The point of 
using Lorem Ipsum is that it has a more-or-less normal distribution 
of letters, as opposed"
        imageSrc={AboutImg}
        // buttonText="Learn More"
        showButton={false}
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
       <RightImage
        titleSmall="What We Do"
        titleLarge="We Develope Product That People Love to Use."
        discription="It is a long established fact that a reader will be distracted by the 
readable content of a page when looking at its layout. The point of 
using Lorem Ipsum is that it has a more-or-less normal distribution 
of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
        imageSrc={WhatImg}
        buttonText="Learn More"
        // showButton={false}
        iconList={[
          {
            icon: VisionIocn,
            titleLarge:"Our Vision",
            description: "It is a long established fact that",
            iconColor: "var(--primary-color)",
            style: {
              background: "red",
            }
          },
          {
            icon: Goal,
            titleLarge:"Our Goal",
            description: "It is a long established fact that",
            iconColor: "var(--primary-color)",
          },
        ]}
      />
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
    </>
  );
}

export default About;
