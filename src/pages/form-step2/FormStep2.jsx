import "./FormStep2.css"


import { useNavigate } from "react-router";
import { useForm } from "../FormContext";
import FormTemplate from "../components/form/FormTemplate";
import Toggler from "../components/toggler/Toggler";


const FormStep2 = () => {

    const {currentStep, setCurrentStep} = useForm();
    const navigate = useNavigate();

    const handleNextStep = () => {
      setCurrentStep(currentStep + 1)
      navigate("/step2");
    }

    const handleBackStep = () => {
      setCurrentStep(currentStep - 1)
      navigate("/step1");
    }


    return (
        <FormTemplate
            title="Select your plan"
            description="You have the option of monthly or yearly billing"
            onNextStep={handleNextStep}
            onBackStep={handleBackStep}
            showBackButton= {true}
        >
          <div className="plans">
            <label className="plan">
              <input type="radio" name="plan" value="arcade" defaultChecked />
              <div className="plan__content">
                <span className="icon"><img src="src/assets/images/icon-arcade.svg" alt="Arcade plan icon" /></span>
                <div>
                  <h3>Arcade</h3>
                  <p>$9/mo</p>
                </div>
              </div>
            </label>

            <label className="plan">
              <input type="radio" name="plan" value="advanced" />
              <div className="plan__content">
                <span className="icon"><img src="src/assets/images/icon-advanced.svg" alt="Advanced plan icon" /></span>
                <div>
                  <h3>Advanced</h3>
                  <p>$12/mo</p>
                </div>
              </div>
            </label>

            <label className="plan">
              <input type="radio" name="plan" value="pro" />
              <div className="plan__content">
                <span className="icon"><img src="src/assets/images/icon-pro.svg" alt="Pro plan icon" /></span>
                <div>
                  <h3>Pro</h3>
                  <p>$15/mo</p>
                </div>
              </div>
            </label>
          </div>

          <div className="billing__toggler">
            <label className="billing__label">
              Monthly
              <Toggler/>
              yearly
            </label>
          </div>

        </FormTemplate>
    )
  }

export default FormStep2
