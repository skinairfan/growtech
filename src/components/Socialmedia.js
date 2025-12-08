// SocialMedia.jsx

function SocialMedia({ Icon, link, size = 24, color = "#000", style = {} }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        borderRadius: "10px",
        background: "var(--socialBg)",
        color:"var(--socialColor)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "0.3s ease",
        ...style,
      }}
    >
      {Icon && <Icon size={size} color={color} />}
    </a>
  );
}

export default SocialMedia;
