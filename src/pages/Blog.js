import PageTitle from "../components/PageTitle";
import SectionHeading from "../components/SectionHeading";
import teamimg1 from "../images/blog.png";
import teamimg2 from "../images/blog2.png";
import teamimg3 from "../images/blog3.png";
import profile1 from "../images/team1.png";
import profile2 from "../images/team2.png";
import profile3 from "../images/team3.png";
import BlogCard from "../components/BlogCard";



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

function Blog() {
  return (
    <>
      <PageTitle
        title="Blog"
        breadcrumb="Home / Blog"
      />
    <div className="blogsection" style={{backgroundColor: "var(--blogpagebg)", padding:"70px 0"}}>
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

export default Blog;
