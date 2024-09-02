import FormLayout from "../../layout/FormLayout";
import { useStore } from "../../store/stepper";
import ButtonComponent from "../Buttons/ButtonComponent";
import PersonalInfo from "./formItems/PersonalInfo";
import Plan from "./formItems/Plans";
import AddOns from "./formItems/AddOns";
import Thank from "./formItems/Thank";
import { useForm } from "../../store/form";
import useFormValidation from "../../composables/useFormValidation";
import Preview from "./formItems/Preview";

export default function RegistrationForm() {
  const { currentStep, setStep } = useStore();
  const { disabledButton } = useForm();
  const val = useFormValidation();
  return (
    <div className="">
      <FormLayout>
        {currentStep === 0 && <PersonalInfo />}
        {currentStep === 1 && <Plan />}
        {currentStep === 2 && <AddOns />}
        {currentStep === 3 && <Preview />}
        {currentStep > 3 && <Thank />}
        <div className="flex justify-between items-center mt-20 ">
          {currentStep > 0 && currentStep <= 3 && (
            <p
              className="cursor-pointer"
              onClick={() => setStep(currentStep - 1)}
            >
              Go Back
            </p>
          )}

          <span>{val}</span>
          {currentStep < 4 && (
            <ButtonComponent
              text={currentStep === 3 ? "Confirm" : "Next Step"}
              onSubmit={() => setStep(currentStep + 1)}
              disabled={currentStep === 3 ? false : !disabledButton}
            />
          )}
        </div>
      </FormLayout>
    </div>
  );
}
