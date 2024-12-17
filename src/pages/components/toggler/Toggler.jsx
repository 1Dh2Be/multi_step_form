import { useState } from "react"
import "./Toggler.css"
import { useForm } from "../../FormContext"

const Toggler = () => {

    const {isChecked, setIsChecked} = useForm();

    const handleToggle = () => {
        setIsChecked(!isChecked)
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