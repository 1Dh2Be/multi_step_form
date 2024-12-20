import { useForm } from "../../FormContext"
import "./CheckBox.css"

const CheckBox = ({name, value}) => {

    const {formData, updateFormData} = useForm();

    const handleCheckBoxChange = (e) => {
        updateFormData("step3", e.target.value, e.target.checked ? 1 : 0)
    }

    // console.log(formData)
    console.log(formData.step3)

    return (
        <div className="checkbox-wrapper">
            <input type="checkbox" name={name} value={value} onChange={handleCheckBoxChange} checked={formData.step3[value]}/>
            <span className="add__on--checkbox"></span>
        </div>
    )
}

export default CheckBox