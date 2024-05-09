import { createContext, useContext, useMemo, useState } from "react";
import { user } from "../utils/datas";

const StepValueContext = createContext();
const StepActionsContext = createContext();
const UserContext = createContext();

export function LandingProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);
  const userValue = user;

  const actions = useMemo(
    () => ({
      previousStep() {
        setCurrentStep(currentStep => currentStep - 1);
      },
      nextStep(key, value) {
        setCurrentStep(currentStep => currentStep + 1);
        if (key) user[key] = value;
      },
    }),
    [],
  );

  return (
    <UserContext.Provider value={userValue}>
      <StepActionsContext.Provider value={actions}>
        <StepValueContext.Provider value={currentStep}>{children}</StepValueContext.Provider>
      </StepActionsContext.Provider>
    </UserContext.Provider>
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

export function useUser() {
  const value = useContext(UserContext);

  if (value === undefined) {
    throw new Error("useUser should be used within LandingProvider");
  }

  return value;
}
