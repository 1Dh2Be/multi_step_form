import { useNavigate } from "react-router";
import { useForm } from "../FormContext";
import FormTemplate from "../components/form/FormTemplate";


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

        </FormTemplate>
    )
  }

export default FormStep2
