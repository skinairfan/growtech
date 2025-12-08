import { useState } from "react";

function Button({ 
  variant = "primaryg", 
  title, 
  children,
  style = {} 
}) {

  // FIXED: correct dark mode detection
  const isDark = document.body.classList.contains("dark-theme");

  // Auto-switch variant based on dark/light mode
  const finalVariant = variant === "primaryg"
    ? (isDark ? "primaryDark" : "primaryLight")
    : variant;

  

  const [hover, setHover] = useState(false);

  const lighten = (hex, percent) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const r = (num >> 16) + amt;
    const g = ((num >> 8) & 0x00FF) + amt;
    const b = (num & 0x0000FF) + amt;

    return (
      "#" +
      (
        0x1000000 +
        (r < 255 ? (r < 0 ? 0 : r) : 255) * 0x10000 +
        (g < 255 ? (g < 0 ? 0 : g) : 255) * 0x100 +
        (b < 255 ? (b < 0 ? 0 : b) : 255)
      )
        .toString(16)
        .slice(1)
    );
  };

  const baseDark = "#000B21";
  const baseGreen = "#00D79B";
  const baseLight = "#e3e1e1";

  const variants = {
    primaryLight: {
      background: baseDark,
      color: "#fff",
      border: `2px solid ${baseDark}`,
    },
    primaryDark: {
      background: baseGreen,
      color: "#fff",
      border: `2px solid ${baseGreen}`,
    },
    secondaryg: {
      background: baseGreen,
      color: "#fff",
      border: `2px solid ${baseGreen}`,
    },
    lightg: {
      background: baseLight,
      color: baseDark,
      border: `2px solid ${lighten(baseLight, -10)}`,
      borderRadius: "10px",
    },
  };

  const hoverVariants = {
  primaryLight: {
    background: lighten(baseDark, 20),
    border: `2px solid ${lighten(baseDark, 20)}`, // same color as background
  },

  primaryDark: {
    background: lighten(baseGreen, -10),
    border: `2px solid ${lighten(baseGreen, -10)}`, // same color as background
    color: "#fff",
  },

  secondaryg: {
    background: lighten(baseGreen, -15),
    border: `2px solid ${lighten(baseGreen, -15)}`,
  },

  lightg: {
    background: lighten(baseLight, 10),
    border: `2px solid ${lighten(baseLight, 10)}`,
  },
};



  const finalStyle = {
    padding: "10px 20px",
    borderRadius: "4px",
    fontFamily: "var(--font-oswald)",
    cursor: "pointer",
    transition: "0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    ...variants[finalVariant],
    ...(hover ? hoverVariants[finalVariant] : {}),
    ...style,
  };

  return (
    <button
      type="button"
      style={finalStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {title}
    </button>
  );
}

export default Button;
