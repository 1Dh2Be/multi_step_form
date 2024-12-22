import { useEffect } from "react";
import { useForm } from "../FormContext";
import "./FormConfirmation.css"

import { useNavigate } from "react-router";


const FormConfirmation = () => {

    const {setCurrentStep} = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/step1');
            setCurrentStep(1)
        }, 10000); // 10000 milliseconds = 10 seconds

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <section className="confirmation__wrapper">
            <div className="confirmation__wrapper--container">
                <div className="confirmation__wrapper--content">
                    <header className="confirmation__wrapper--header">
                        <div className="confirmation__content--image">
                            <img className="confirmation__img" src="src/assets/images/icon-thank-you.svg" alt="Confirmation icon" />
                        </div>
                        <h1 className="confirmation__wrapper--title">Thank you!</h1>
                        <p className="confirmation__wrapper--description">
                            Thanks for confirming your subscription! We hope you have fun using our platform.
                            If you ever need support, please feel free to email us at support@loremgaming.com.
                        </p>
                    </header>
                </div>
            </div>
        </section>
    )
}

export default FormConfirmation