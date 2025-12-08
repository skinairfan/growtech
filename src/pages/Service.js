import PageTitle from "../components/PageTitle";
import LeftImage from "../components/Imagescontent";
import WhatImg from "../images/Whatdo.png";
import { VisionIocn, Goal, Devlopment, Cardline, UXDesign, Migration, Appdeveplopment, integration, Email} from "../components/svgIcon";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";


function Service() {
  return (
    <>
      <PageTitle
        title="Our Services"
        breadcrumb="Home / Our Service"
      />
      <LeftImage
        data-aos="fade-up"
        data-aos-duration="5000"
        titleSmall="What We Do"
        titleLarge="We Develope Product That People Love to Use."
        discription="It is a long established fact that a reader will be distracted by the 
      readable content of a page when looking at its layout. The point of 
      using Lorem Ipsum is that it has a more-or-less normal distribution 
      of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
      The point of 
      using Lorem Ipsum is that it has a more-or-less normal distribution 
      of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
      "
        imageSrc={WhatImg}
        showButton={false}
        iconList={[
          {
            icon: VisionIocn,
            titleLarge: "Our Vision",
            description: "It is a long established fact that",
            iconColor: "var(--primary-color)",
          },
          {
            icon: Goal,
            titleLarge: "Our Goal",
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
    </>
  );
}

export default Service;
