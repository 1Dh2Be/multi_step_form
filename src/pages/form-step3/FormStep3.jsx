import "./FormStep3.css"


import { useNavigate } from "react-router";
import FormTemplate from "../components/form/FormTemplate"
import { useForm } from "../FormContext";
import CheckBox from "../components/check-box/CheckBox";


const FormStep3 = () => {

    const {currentStep, setCurrentStep, isChecked} = useForm();
    const navigate = useNavigate();

    const handleNextStep = () => {
      setCurrentStep(currentStep + 1)
      navigate("/step4");
    }

    const handleBackStep = () => {
      setCurrentStep(currentStep - 1)
      navigate("/step2");
    }


    return (
        <FormTemplate
            title="Pick add-ons"
            description="Add-ons help enhance your gaming experience."
            onNextStep={handleNextStep}
            onBackStep={handleBackStep}
            showBackButton={true}
        >
            <div className="add__ons">
                <label className="add__ons--row">
                    <div className="add__on">
                        <CheckBox name="add__on--1" value="online-service"/>
                        <div>
                            <h3 className="add__on--h3">Online service</h3>
                            <p className="add__on--p">Acces to multiplayer games</p>
                        </div>
                        {isChecked? (
                            <span className="add__on--price">+$10/yr</span>
                        ) : (
                            <span className="add__on--price">+$1/mo</span>
                        )}
                    </div>
                </label>

                <label className="add__ons--row">
                    <div className="add__on">
                        <CheckBox name="add__on--2" value="extra-storage"/>
                        <div>
                            <h3 className="add__on--h3">Larger storage</h3>
                            <p className="add__on--p">Extra 1TB of cloud save</p>
                        </div>
                        {isChecked? (
                            <span className="add__on--price">+$20/yr</span>
                        ) : (
                            <span className="add__on--price">+$2/mo</span>
                        )}
                    </div>
                </label>

                <label className="add__ons--row">
                    <div className="add__on">
                        <CheckBox name="add__on--3" value="online service"/>
                        <div>
                            <h3 className="add__on--h3">Customizable profile</h3>
                            <p className="add__on--p">Custom theme on your profile</p>
                        </div>
                        {isChecked? (
                            <span className="add__on--price">+$20/yr</span>
                        ) : (
                            <span className="add__on--price">+$2/mo</span>
                        )}
                    </div>
                </label>
            </div>

        </FormTemplate>
    )
}

export default FormStep3