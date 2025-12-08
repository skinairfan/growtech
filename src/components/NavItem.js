import { useState } from "react";
import { Link } from "react-router-dom";

function NavItem({
  label,
  to,
  variant = "nav",
  style = {},
}) {
  const [hover, setHover] = useState(false);

  // FONT FAMILY
  const textFont =
    variant === "footer"
      ? "var(--font-raleway)"
      : "var(--font-oswald)";

  // TEXT COLOR BASED ON VARIANT
  const textColor =
    variant === "footer" ? "#ffffff" : "var(--primary-color)";

    const padding =
    variant === "footer" ? "5px 0px" : "8px 8px";


  // HOVER COLOR BASED ON VARIANT
  const hoverColor =
    variant === "footer" ? "#00D79B" : "#00D79B";

    const fontSize =
    variant === "footer" ? "14px" : "16px";

  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        padding: padding,
        fontSize: fontSize,
        fontFamily: textFont,
        fontWeight: "500",
        color: hover ? hoverColor : textColor,
        textDecoration: "none",
        display: "inline-block",
        ...style,
      }}
    >
      {/* Underline */}
      <span
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          height: "3px",
          width: hover ? "100%" : "0%",
          background: hoverColor,
          transition: "width 0.35s ease",
        }}
      ></span>

      {/* Text */}
      <span
        style={{
          display: "inline-block",
          transform: hover ? "translateY(-3px)" : "translateY(0)",
          transition: "0.35s ease",
        }}
      >
        {label}
      </span>
    </Link>
  );
}

export default NavItem;
