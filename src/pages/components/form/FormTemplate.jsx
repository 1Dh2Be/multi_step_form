import "./FormTemplate.css";
import Button from "../button/Button";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useForm } from "../../FormContext";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

const stepTransition = (direction) => ({
  initial: { x: direction > 0 ? 25 : -25, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
});

const FormTemplate = ({
  title,
  description,
  buttonTitle,
  children,
  submitForm = false,
  resetForm = false,
  showBackButton = false,
  isFormValid = false,
}) => {
  const { currentStep, setCurrentStep, direction, setDirection } = useForm();
  const navigate = useNavigate();

  const handleNextStep = () => {
    setDirection(1);
    setCurrentStep((prevStep) => prevStep + 1);
    resetForm && resetForm();
    submitForm
      ? navigate("/confirmation")
      : navigate(`/step${currentStep + 1}`);
  };

  const handleBackStep = () => {
    setDirection(-1);
    setCurrentStep((prevCurrentStep) => prevCurrentStep - 1);
    navigate(`/step${currentStep - 1}`);
  };

  return (
    <section className="wrapper">
      <div className="wrapper__container">
        <motion.div
          {...anim(stepTransition(direction))}
          className="wrapper__content"
        >
          <header className="wrapper__header">
            <h1 className="wrapper__title">{title}</h1>
            <p className="wrapper__description">{description}</p>
          </header>
          <div className="wrapper__body">{children}</div>
        </motion.div>
      </div>

      <div className={`wrapper__actions ${showBackButton && "spacer"}`}>
        {showBackButton && (
          <Button onClick={handleBackStep} variant="secondary">
            Go Back
          </Button>
        )}
        <Button onClick={handleNextStep} disabled={!isFormValid}>
          {buttonTitle}
        </Button>
      </div>
    </section>
  );
};

export default FormTemplate;
