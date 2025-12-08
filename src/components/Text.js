function Typography({
  variant = "p",
  children,
  size,
  color,
  style = {},
  fontFamily,
  className = "",
}) {
  const Tag = variant;

  // map variant → CSS class
  const variantClass = `typo-${variant}`;

  return (
    <Tag
      className={`${variantClass} ${className}`}
      style={{
        margin: 0,
        padding: 0,
        color: color || "inherit",
        fontSize: size, // overrides responsive if provided
        fontFamily: fontFamily || "var(--font-poppins)",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export default Typography;
