import { createContext, useContext, useState, useEffect } from "react";

export const FormContext = createContext(null);

export const FormProvider = ({ children }) => {

    const [currentStep, setCurrentStep] = useState(() => {
        const savedStep = localStorage.getItem('currentStep');
        return savedStep ? parseInt(savedStep) : 1;
    });

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        localStorage.setItem('currentStep', currentStep);
    }, [currentStep]);

    return (
        <FormContext.Provider value={{ currentStep, setCurrentStep, isChecked, setIsChecked }}>
            {children}
        </FormContext.Provider>
    );
}

export const useForm = () => {
    const context = useContext(FormContext);

    if (!context) {
        throw new Error("useForm must be used within a FormProvider");
    }

    return context;
}
