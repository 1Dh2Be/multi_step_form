import "./Button.css"

const Button = ({ onClick, variant, children }) => {
    return (
        <button className={`next__step--btn ${variant === "secondary" ? "secondary" : "primary"}` } onClick={onClick}>
            {children}
        </button>
    )
}

export default Button