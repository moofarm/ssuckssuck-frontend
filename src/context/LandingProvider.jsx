import { createContext, useContext, useMemo, useState } from "react";

const StepValueContext = createContext();
const StepActionsContext = createContext();

export function LandingProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);

  const actions = useMemo(
    () => ({
      previousStep() {
        setCurrentStep(currentStep => currentStep - 1);
      },
      nextStep() {
        setCurrentStep(currentStep => currentStep + 1);
      },
    }),
    [],
  );

  return (
    <StepActionsContext.Provider value={actions}>
      <StepValueContext.Provider value={currentStep}>{children}</StepValueContext.Provider>
    </StepActionsContext.Provider>
  );
}

export function useStepValue() {
  const value = useContext(StepValueContext);

  if (value === undefined) {
    throw new Error("useStepValue should be used within LandingProvider");
  }
  return value;
}

export function useStepActions() {
  const value = useContext(StepActionsContext);

  if (value === undefined) {
    throw new Error("useStepActions should be used within LandingProvider");
  }
  return value;
}
