import "./FormTemplate.css";
import Button from "../button/Button";
import { motion } from "motion/react";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

const stepTransition = {
  initial: { x: 25, opacity: 0, transformOrigin: "50% 50%" },
  animate: {
    x: 0,
    opacity: 1,
    transformOrigin: "50% 50%",
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
    exit: {
      x: -25,
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  },
};

const FormTemplate = ({
  title,
  description,
  buttonTitle,
  children,
  onNextStep,
  onBackStep,
  showBackButton = false,
  isFormValid = false,
}) => {
  return (
    <section className="wrapper">
      <div className="wrapper__container">
        <motion.div {...anim(stepTransition)} className="wrapper__content">
          <header className="wrapper__header">
            <h1 className="wrapper__title">{title}</h1>
            <p className="wrapper__description">{description}</p>
          </header>
          <div className="wrapper__body">{children}</div>
        </motion.div>
      </div>

      <div className={`wrapper__actions ${showBackButton && "spacer"}`}>
        {showBackButton && (
          <Button onClick={onBackStep} variant="secondary">
            Go Back
          </Button>
        )}
        <Button onClick={onNextStep} disabled={!isFormValid}>
          {buttonTitle}
        </Button>
      </div>
    </section>
  );
};

export default FormTemplate;
