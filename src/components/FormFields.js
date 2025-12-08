function FormField({
  label,
  type,
  name,
  value,
  onChange,
  options = [],
  placeholder
}) {
  const inputStyle = {
    padding: "15px 10px",
    background: "var(--formFields)",
    borderRadius: "10px",
    outline: "none",
    border: "none",
    fontSize: "14px",
    boxShadow: "none",
    color: "var(--formFieldsColor)",
  };

  return (
    <div className="form-group" style={{ marginBottom: "15px" }}>
      {label && (
        <label
          htmlFor={name}
          style={{ marginBottom: "6px", display: "block", fontWeight: "500" }}
        >
          {label}
        </label>
      )}

      {/* SELECT FIELD */}
      {type === "select" && (
        <select
          id={name}
          name={name}
          className="form-control"
          style={inputStyle}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>
            Select {label}
          </option>

          {options.map((opt, index) => (
            <option
              key={index}
              value={opt.value}
              style={{ color: "var(--formFieldsColor)" }}
            >
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {/* TEXTAREA FIELD */}
      {type === "textarea" && (
        <textarea
          id={name}
          name={name}
          className="form-control"
          style={{ ...inputStyle, resize: "none" }}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="4"
        />
      )}

      {/* INPUT FIELD */}
      {type !== "select" && type !== "textarea" && (
        <input
          id={name}
          type={type}
          name={name}
          className="form-control"
          style={inputStyle}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}

      {/* LOCAL PLACEHOLDER STYLE */}
      <style>
        {`
          .form-group input::placeholder,
          .form-group textarea::placeholder {
            color: var(--formFieldsColor);
            opacity: 0.8;
            font-size: 14px;
            font-weight: 500;
          }
        `}
      </style>
    </div>
  );
}

export default FormField;
