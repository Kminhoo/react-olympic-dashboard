import "./Button.css";

const Button = ({ name, type, onClick }) => {
  return (
    <button
      className={name === "삭제" ? "delete-btn" : "btn"}
      onClick={onClick ? onClick : null}
      type={type}
    >
      {name}
    </button>
  );
};

export default Button;
