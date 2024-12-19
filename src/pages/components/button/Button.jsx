import "./Button.css"

const Button = ({ onClick, variant, disabled, children }) => {
    return (
        <button 
            className={`next__step--btn ${variant === "secondary" ? "secondary" : "primary"} ${disabled? "disabled" : ""}` } 
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button