import "./FormTemplate.css"
import Button from "../button/Button"

const FormTemplate = ({
        title,
        description,
        children,
        onNextStep,
        onBackStep,
        showBackButton = false,
        isFormValid = false
}) => {
    return (
        <section className="wrapper">
            <div className="wrapper__container">
                <div className="wrapper__content">
                    <header className="wrapper__header">
                        <h1 className="wrapper__title">{title}</h1>
                        <p className="wrapper__description">
                            {description}
                        </p>
                    </header>
                    <div className="wrapper__body">
                        {children}
                    </div>
                </div>
            </div>

            <div className={`wrapper__actions ${showBackButton && "spacer"}`}>
                {showBackButton && (
                    <Button onClick={onBackStep} variant="secondary">Go Back</Button>
                )}
                <Button 
                    onClick={onNextStep}
                    disabled={!isFormValid}
                >
                    Next Step
                </Button>
            </div>
        </section>
    )
}

export default FormTemplate