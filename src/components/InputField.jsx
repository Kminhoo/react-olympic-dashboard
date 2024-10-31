import "./InputFiled.css";

const InputField = ({ type, value, onChange, name, label, placeholder }) => {
  return (
    <div className="input-filed">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder ? placeholder : null}
        className="input"
        min={type === "number" ? 0 : null}
        max={type === "number" ? 100 : null}
        maxLength={type === "text" ? 10 : null}
        required={type === "text" ? true : false}
      />
    </div>
  );
};

export default InputField;
