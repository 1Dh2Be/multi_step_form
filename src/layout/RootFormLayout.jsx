//Style import
import "./RootFormLayout.css";

//Image bg import
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";

// Library/Component imports here
import { Outlet, useLocation } from "react-router";
import { useForm } from "../pages/FormContext";
import { AnimatePresence, motion } from "motion/react";

const StepList = ({ currentStep }) => {
  return (
    <ul className="list__info">
      {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map(
        (title, index) => (
          <li key={index} className="list__step">
            <span
              className={`step-number ${
                currentStep === index + 1 ? "active" : ""
              }`}
            >
              {index + 1}
            </span>
            <div className="step-content">
              <span className="step-label">STEP {index + 1}</span>
              <h2 className="step-title">{title}</h2>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

const RootFormLayout = () => {
  const { currentStep } = useForm();

  const location = useLocation();

  return (
    <div className="form__bg">
      <div className="form">
        <div className="form__container">
          <aside
            className="progress_bar"
            role="progressbar"
            aria-label="Step Progress"
          >
            <picture className="bg__picture">
              <source srcSet={bgSidebarMobile} media="(max-width: 900px)" />
              <img src={bgSidebarDesktop} alt="side bar background image" />
            </picture>

            <StepList currentStep={currentStep} />
          </aside>

          <AnimatePresence mode="wait">
            <motion.main className="form-content" key={location.pathname}>
              <Outlet />
            </motion.main>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RootFormLayout;
