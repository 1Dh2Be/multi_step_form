import { createContext, useContext, useState } from "react";

export const FormContext = createContext(null);

export const FormProvider = ({ children }) => {

    const [currentStep, setCurrentStep] = useState(1);


    return (
        <FormContext.Provider value={{currentStep, setCurrentStep}}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(FormContext);

    if (!context) {
        throw new Error("useForm must be used within a FormProvider");
    }

    return context
}