import PageTitle from "../components/PageTitle";
import SectionHeading from "../components/SectionHeading";
import courseImg1 from "../images/course1.png";
import courseImg2 from "../images/course2.png";
import courseImg3 from "../images/course3.png";
import courseImg4 from "../images/course4.png";
import profile1 from "../images/team1.png";
import profile2 from "../images/team2.png";
import profile3 from "../images/team3.png";
import profile4 from "../images/team4.png";
import CourseCard from "../components/CourseCard";


const courseData = [
  {
    img: courseImg1,
    titleLarge: "Beginner",
    titleLarge1: "Beginner’s Guide to becoming a professional frontend developer",
    titleSmall: "John Carter",
    titleLargeDark: "5 min read",
    profileImg: profile1,
  },
  {
    img: courseImg2,
     titleLarge: "Beginner",
      titleLarge1: "Beginner’s Guide to becoming a professional frontend developer",
    titleSmall: "Sarah Johnson",
    titleLargeDark: "10 min read",
    profileImg: profile2,
  },
  {
    img: courseImg3,
     titleLarge: "Beginner",
      titleLarge1: "Beginner’s Guide to becoming a professional frontend developer",
    titleSmall: "Sarah Johnson",
    titleLargeDark: "10 min read",
    profileImg: profile3,
  },
  {
    img: courseImg4,
     titleLarge: "Beginner",
      titleLarge1: "Beginner’s Guide to becoming a professional frontend developer",
    titleSmall: "Sarah Johnson",
    titleLargeDark: "10 min read",
    profileImg: profile4,
  },
];


function Course() {
  return (
    <>
      
      <PageTitle
        title="Course"
        breadcrumb="Home / Course"
      />
    <div className="course" style={{backgroundColor:"var(--team-bg)", padding:"80px 0"}}>

       <SectionHeading  
            titleSmall="Our Course"
            titleLargeDark="All Courses"
        />
        <div className="container">
            <div className="row">
                <div className="row gy-4">
                {courseData.map((item, index) => (
                    <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12" key={index}>
                    <CourseCard
                        img={item.img}
                        titleLarge={item.titleLarge}
                        titleLarge1={item.titleLarge1}
                        titleSmall={item.titleSmall}
                        titleLargeDark={item.titleLargeDark}
                        profileImg={item.profileImg}
                    />
                    </div>
                ))}
                </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default Course;
