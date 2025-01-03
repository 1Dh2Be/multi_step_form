//         IMPORTS               //

import { createContext, useContext, useState, useEffect } from "react";

//     INITIAL FORM STATE         //

const INITIAL_FORM_STATE = {
  step1: { name: "", email: "", phone: "" },
  step2: { plan: "arcade", billingCycle: "monthly" },
  step3: {
    addons: {
      "Online-service": 0,
      "Extra-storage": 0,
      "Custom-profile": 0,
    },
  },
  step4: { summary: {} },
};

//        CONTEXT CREATION        //

export const FormContext = createContext(null);

//        FORM PROVIDER           //

export const FormProvider = ({ children }) => {
  //      FORM DATA STATE           //

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData ? JSON.parse(savedFormData) : INITIAL_FORM_STATE;
  });

  //       FORM DATA METHODS        //

  const updateFormData = (step, fieldName, value) => {
    setFormData((prev) => {
      if (step === "step3") {
        // Special handling for addons object
        return {
          ...prev,
          step3: {
            ...prev.step3,
            addons: {
              ...prev.step3.addons,
              [fieldName]: value,
            },
          },
        };
      }
      // Regular handling for other fields
      return {
        ...prev,
        [step]: {
          ...prev[step],
          [fieldName]: value,
        },
      };
    });
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setCurrentStep(1);
    localStorage.removeItem("formData");
    localStorage.removeItem("currentStep");
    localStorage.removeItem("isChecked");
  };

  //     FORM DATA PERSISTENCE      //

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  //      STEP STATE & METHODS      //

  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem("currentStep");
    return savedStep ? parseInt(savedStep) : 1;
  });

  useEffect(() => {
    localStorage.setItem("currentStep", currentStep);
  }, [currentStep]);

  //      CHECKBOX STATE            //

  const [isChecked, setIsChecked] = useState(() => {
    const savedCheckedValue = localStorage.getItem("isChecked");
    return savedCheckedValue ? JSON.parse(savedCheckedValue) : true;
  });

  useEffect(() => {
    localStorage.setItem("isChecked", isChecked);
  }, [isChecked]);

  //      BUTTON STATE            //
  const [buttonState, setButtonState] = useState(() => {
    const savedState = localStorage.getItem("buttonState");
    return savedState ? parseInt(savedState) : false;
  });

  useEffect(() => {
    localStorage.setItem("buttonState", buttonState);
  }, [buttonState]);

  const [direction, setDirection] = useState(1);

  //       CONTEXT PROVIDER         //

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        resetForm,
        currentStep,
        setCurrentStep,
        isChecked,
        setIsChecked,
        buttonState,
        setButtonState,
        direction,
        setDirection,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

//         CUSTOM HOOK             //

export const useForm = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }

  return context;
};
