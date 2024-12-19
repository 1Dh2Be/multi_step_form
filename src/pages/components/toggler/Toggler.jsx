import { useState } from "react"
import "./Toggler.css"
import { useForm } from "../../FormContext"

const Toggler = () => {

    const {isChecked, setIsChecked, updateFormData} = useForm();

    const handleToggle = () => {
        setIsChecked(!isChecked)
        isChecked? updateFormData("step2", "billingCycle", "monthly"): updateFormData("step2", "billingCycle", "yearly")
    }

    return (
        <>
            <input
                onChange={handleToggle}
                type="checkbox"
                id="billing__toggler"
                className="billing__input"
            />
            <span className="toggle__slider"></span>
        </>
    )
}

export default Toggler