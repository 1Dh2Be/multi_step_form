import { useNavigate } from "react-router"
import FormTemplate from "../components/form/FormTemplate"
import "./FormStep4.css"
import { useForm } from "../FormContext"


const FormStep4 = () => {

    const {currentStep, setCurrentStep, formData, resetForm} = useForm();
    const navigate = useNavigate();

    const handleBackStep = () => {
        setCurrentStep(currentStep - 1)
        navigate("/step3");
      }

    const handleFormSubmit = () => {
        resetForm();
        navigate("/step1")
    }

    return (
        <FormTemplate
            title="Finishing up"
            description="Double-check everything looks OK before confirming."
            buttonTitle="Confirm"
            onNextStep={handleFormSubmit}
            onBackStep={handleBackStep}
            showBackButton={true}
            isFormValid={true}
        >
            <section className="plan__summary">
                    <div className="plan__summary--content">
                        <section className="current__plan">
                            <div>
                                <h3 className="current__plan--title">{`${formData.step2.plan} (${formData.step2.billingCycle})`}</h3>
                                <a href="step2" onClick={() => setCurrentStep(2)} className="change__plan" aria-label="Change plan">Change</a>
                            </div>
                            <span className="curremt__plan--price">$9/mo</span>
                        </section>

                        <span className="divider"></span>

                        <section>
                            <ul className="addons__list">
                                {Object.keys(formData.step3.addons).map(key =>
                                    formData.step3.addons[key] === 1 && (
                                        <li className="addon__list" key={key}>
                                            <h3 className="addon__name">{key.replace(/-/g, " ")}</h3>
                                            <span className="addon__price">+$1/mo</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </section>
                    </div>
            </section>

            <section className="plan__total">
                <h3 className="plan__total--title">{`Total (per ${formData.step2.billingCycle.slice(0, -2)})`}</h3>
                <span className="plan__total--price">$12/mo</span>
            </section>
        </FormTemplate>
    )
}

export default FormStep4