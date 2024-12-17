import "./CheckBox.css"

const CheckBox = ({name, value}) => {
    return (
        <div className="checkbox-wrapper">
            <input type="checkbox" name={name} value={value} />
            <span className="add__on--checkbox"></span>
        </div>
    )
}

export default CheckBox