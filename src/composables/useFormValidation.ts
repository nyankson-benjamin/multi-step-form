import { useEffect } from "react";
import { useForm } from "../store/form";
import { useStore } from "../store/stepper";

export default function useFormValidation() {
  const { currentStep } = useStore();
  const { name, email, contact, setDisabledButton, plan, addOns } = useForm();

  const isInfoFilled = () => {
    return name?.length > 0 && email?.length > 0 && contact?.length > 0;
  };

  const isPlanSelected = () => {
    return plan.price > 0 && plan.title?.length > 0 && plan.type?.length > 0;
  };
  

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return isInfoFilled();

      case 1:
        return isPlanSelected();

        case 2:
            return addOns.length > 0
      default:
        return false; 
    }
  };

  useEffect(() => {
    setDisabledButton(validateCurrentStep());
  }, [currentStep, name, email, contact, setDisabledButton,plan, addOns]);
  return {};
}
