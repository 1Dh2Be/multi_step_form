import "./FormStep1.css"

// Component/Hooks imports
// pages/FormStep1.jsx
import { useNavigate } from "react-router"
import { Formik, Form } from "formik"
import { useForm } from "../FormContext"
import FormTemplate from "../components/form/FormTemplate"

const FormStep1 = () => {
    const { currentStep, setCurrentStep } = useForm();
    const navigate = useNavigate();

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1)
        navigate("/step2");
    }

    return (
        <FormTemplate
            title="Personal info"
            description="Please provide your name, email address, and phone number."
            onNextStep={handleNextStep}
        >
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                }}
            >
                {() => (
                    <Form className="form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="e.g. Mimoun"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="e.g. mimoun123@gmail.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="e.g. +32 123 45 67 89"
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </FormTemplate>
    )
}

export default FormStep1