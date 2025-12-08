// IconContent.jsx

import Typography from "./Text";

function IconContent({
  Icon,
  titleSmall,
  titleLarge,
  description,
  description2,
  highlightText,

  iconSize = 24,
  iconColor,

  style = {},              // wrapper custom style
  iconBoxStyle = {},       // icon box custom style
  textStyle = {},          // text wrapper custom style
  titleStyle = {},         // titleLarge custom style
  descriptionStyle = {},   // description custom style
}) {
  return (
    <div className="iconcontent" style={{ ...styles.iconcontent, ...style }}>

      {/* ICON BOX */}
      <div className="icon" style={{ ...styles.iconBox, ...iconBoxStyle }}>
        {Icon && <Icon size={iconSize} color={iconColor} />}
      </div>

      {/* TEXT AREA */}
      <div className="icontext" style={{ ...styles.textWrap, ...textStyle }}>

        {/* Small Title */}
        {titleSmall && (
          <Typography
            variant="h5"
            style={{
              fontFamily: "var(--font-raleway)",
              fontWeight: "700",
              color: "var(--primary-color)",
            }}
          >
            {titleSmall}
          </Typography>
        )}

        {/* Large Title */}
        {titleLarge && (
          <Typography
            variant="h5"
            style={{
              fontFamily: "var(--font-oswald)",
              fontWeight: "700",
              color: "var(--secondary-color)",
              ...titleStyle,
            }}
          >
            {titleLarge}
          </Typography>
        )}

        {/* Description 1 */}
        {description && (
          <Typography
            variant="p"
            style={{
              fontFamily: "var(--font-raleway)",
              fontWeight: "500",
              color: "var(--primary-color)",
              ...descriptionStyle,
            }}
          >
            {description}{" "}
            {highlightText && <span style={styles.span}>{highlightText}</span>}
          </Typography>
        )}

        {/* Description 2 */}
        {description2 && (
          <Typography
            variant="p"
            style={{
              fontFamily: "var(--font-raleway)",
              fontWeight: "500",
              color: "var(--primary-color)",
              ...descriptionStyle,
            }}
          >
            {description2}{" "}
            {highlightText && <span style={styles.span}>{highlightText}</span>}
          </Typography>
        )}
      </div>
    </div>
  );
}

export default IconContent;



// INLINE DEFAULT STYLES
const styles = {
  iconcontent: {
    display: "flex",
    gap: "15px",
    alignItems: "flex-start",
    width: "100%",
  },

  iconBox: {
    minWidth: "50px",
    background: "rgba(0, 215, 155, 0.1)",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  textWrap: {
    display: "flex",
    gap: "5px",
    alignItems: "flex-start",
    flexDirection: "column",
  },

  span: {
    color: "var(--secondary-color)",
    fontWeight: "600",
  },
};
