import "./FormStep2.css"


import { useNavigate } from "react-router";
import { useForm } from "../FormContext";
import FormTemplate from "../components/form/FormTemplate";
import Toggler from "../components/toggler/Toggler";


const FormStep2 = () => {

    const {currentStep, setCurrentStep, isChecked, updateFormData, formData} = useForm();
    const navigate = useNavigate();

    const handleNextStep = () => {
      setCurrentStep(currentStep + 1)
      navigate("/step3");
    }

    const handleBackStep = () => {
      setCurrentStep(currentStep - 1)
      navigate("/step1");
    }

    const handlePlanChange = (e) => {
      updateFormData("step2", "plan", e.target.value);
    };

  return (
      <FormTemplate
          title="Select your plan"
          description="You have the option of monthly or yearly billing."
          buttonTitle="Next Step"
          onNextStep={handleNextStep}
          onBackStep={handleBackStep}
          showBackButton={true}
          isFormValid={true}
      >
        <div className="plans">
          <label className="plan">
            <input className="plan__input" type="radio" name="plan" value="arcade" onChange={handlePlanChange} checked={formData.step2.plan === "arcade"} />
            <div className="plan__content">
              <span className="icon"><img src="src/assets/images/icon-arcade.svg" alt="Arcade plan icon" /></span>
              {isChecked? (
                <div>
                  <h3>Arcade</h3>
                  <p>$90/yr</p>
                  <h5 className="free__months--text">2 mo free</h5>
                </div>
              ) : (
              <div>
                <h3>Arcade</h3>
                <p>$9/mo</p>
              </div>
              )}
            </div>
          </label>

          <label className="plan">
            <input className="plan__input" type="radio" name="plan" value="advanced" onChange={handlePlanChange} checked={formData.step2.plan === "advanced"}/>
            <div className="plan__content">
              <span className="icon"><img src="src/assets/images/icon-advanced.svg" alt="Advanced plan icon" /></span>
              {isChecked? (
                <div>
                  <h3>Advanced</h3>
                  <p>$120/yr</p>
                  <h5 className="free__months--text">2 mo free</h5>
                </div>
              ) : (
              <div>
                <h3>Advanced</h3>
                <p>$12/mo</p>
              </div>
              )}
            </div>
          </label>

          <label className="plan">
            <input className="plan__input" type="radio" name="plan" value="pro" onChange={handlePlanChange} checked={formData.step2.plan === "pro"}/>
            <div className="plan__content">
              <span className="icon"><img src="src/assets/images/icon-pro.svg" alt="Pro plan icon" /></span>
              {isChecked? (
                <div>
                  <h3>Pro</h3>
                  <p>$150/yr</p>
                  <h5 className="free__months--text">2 mo free</h5>
                </div>
              ) : (
              <div>
                <h3>Pro</h3>
                <p>$15/mo</p>
              </div>
              )}
            </div>
          </label>
        </div>

        <div className="billing__toggler">
          <label className={`billing__label ${isChecked ? "is-checked" : "not-checked"}`}>
            <h4>Monthly</h4>
            <Toggler/>
            <h4>Yearly</h4>
          </label>
        </div>

      </FormTemplate>
    )
  }

export default FormStep2
