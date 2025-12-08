import NavItem from "../components/NavItem"


const navLinks = [
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blog" },
  { path: "/course", label: "Course" },
  { path: "/contact", label: "Contact" },
];

const footerLinks = [
  { path: "/services", label: "Web Design/Development" },
  { path: "/services", label: "App Development" },
  { path: "/services", label: "UI/UX Design" },
  { path: "/services", label: "UI/UX Design" },
  { path: "/services", label: "Email Marketing" },
  { path: "/services", label: "Website Migration" },

];

function NavBar({ variant = "nav", style = {}, className = "" }) {
  const links = variant === "footer" ? footerLinks : navLinks;

  return (
    <nav  className={className} style={{ display: "flex", gap: "15px", flexWrap: "wrap", ...style }}>
      {links.map((link, index) => (
        <NavItem key={index} label={link.label} to={link.path} variant={variant} />
      ))}
    </nav>
  );
}


export default NavBar;
