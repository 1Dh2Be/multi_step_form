// Style import
import "./FormStep2.css";

// Components/Libraries imports
import { useForm } from "../FormContext";
import FormTemplate from "../components/form/FormTemplate";
import Toggler from "../components/toggler/Toggler";

// Icon imports
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";

const FormStep2 = () => {
  const { isChecked, updateFormData, formData } = useForm();

  const handlePlanChange = (e) => {
    updateFormData("step2", "plan", e.target.value);
  };

  return (
    <FormTemplate
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
      buttonTitle="Next Step"
      showBackButton={true}
      isFormValid={true}
    >
      <div className="plans">
        <label className="plan">
          <input
            className="plan__input"
            type="radio"
            name="plan"
            value="arcade"
            onChange={handlePlanChange}
            checked={formData.step2.plan === "arcade"}
          />
          <div className="plan__content">
            <span className="icon">
              <img src={arcadeIcon} alt="Arcade plan icon" />
            </span>
            {isChecked ? (
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
          <input
            className="plan__input"
            type="radio"
            name="plan"
            value="advanced"
            onChange={handlePlanChange}
            checked={formData.step2.plan === "advanced"}
          />
          <div className="plan__content">
            <span className="icon">
              <img src={advancedIcon} alt="Advanced plan icon" />
            </span>
            {isChecked ? (
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
          <input
            className="plan__input"
            type="radio"
            name="plan"
            value="pro"
            onChange={handlePlanChange}
            checked={formData.step2.plan === "pro"}
          />
          <div className="plan__content">
            <span className="icon">
              <img src={proIcon} alt="Pro plan icon" />
            </span>
            {isChecked ? (
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
        <label
          className={`billing__label ${
            isChecked ? "is-checked" : "not-checked"
          }`}
        >
          <h4>Monthly</h4>
          <Toggler />
          <h4>Yearly</h4>
        </label>
      </div>
    </FormTemplate>
  );
};

export default FormStep2;
