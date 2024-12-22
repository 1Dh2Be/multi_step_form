//Style import
import "./RootFormLayout.css"

//Image bg import
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";

// Library/Component imports here
import { Outlet } from "react-router";
import { memo } from "react";
import { useForm } from "../pages/FormContext";

const StepList = memo(({ currentStep }) => {
    return (
      <ul className="list__info">
        {['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'].map((title, index) => (
          <li key={index} className="list__step">
            <span className={`step-number ${currentStep === index + 1 ? "active" : ""}`}>{index + 1}</span>
            <div className="step-content">
              <span className="step-label">STEP {index + 1}</span>
              <h2 className="step-title">{title}</h2>
            </div>
          </li>
        ))}
      </ul>
    );
  });

  const RootFormLayout = () => {
    const { currentStep } = useForm();

    return (
      <div className="form__bg">
        <div className="form">
          <div className="form__container">
            <aside className="progress_bar" role="progressbar" aria-label="Step Progress">
              <picture className="bg__picture">
                <source srcSet={bgSidebarMobile} media="(max-width: 500px)" />
                <img src={bgSidebarDesktop} alt="side bar background image" />
              </picture>

              {/* Use memoized StepList */}
              <StepList currentStep={currentStep} />
            </aside>

            <main className="form-content">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    );
  };

export default RootFormLayout;