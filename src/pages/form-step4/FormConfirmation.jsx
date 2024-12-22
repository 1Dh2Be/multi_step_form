//Style import
import "./FormConfirmation.css"

//Component/Libraries import
import { useEffect } from "react";
import { useForm } from "../FormContext";
import { useNavigate } from "react-router";

// Icon Import
import thankYou from"../../assets/images/icon-thank-you.svg"


const FormConfirmation = () => {

    const {setCurrentStep} = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/step1');
            setCurrentStep(1)
        }, 10000); // 10000 milliseconds = 10 seconds

        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <section className="confirmation__wrapper">
            <div className="confirmation__wrapper--container">
                <div className="confirmation__wrapper--content">
                    <header className="confirmation__wrapper--header">
                        <div className="confirmation__content--image">
                            <img className="confirmation__img" src={thankYou} alt="Confirmation icon" />
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