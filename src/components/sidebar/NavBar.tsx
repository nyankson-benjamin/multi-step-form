import StepperButon from "../Buttons/StepperButton";
import { stepperItems } from "../../constants/stepperItem";
import { useStore } from "../../store/stepper";
import sidebarImg from "../../../public/sidebarImgMobile.svg"

export default function NavBar() {
    const {currentStep, setStep} = useStore()

  return (
    <div 
      className="h-20 border rounded-lg sideBarBg p-5 text-[white] bg-cover bg-no-repeat" 
      style={{backgroundImage: `url(${sidebarImg})`}} // Use `backgroundImage` instead of `background`
    >
        <div className="flex gap-5 justify-between">
            {stepperItems.map((_item, idx) => (
                <div key={idx}>
                    <StepperButon 
                        text={`${idx + 1}`} 
                        isActive={currentStep === idx} 
                        onSubmit={() => setStep(idx)} 
                    />
                </div>
            ))}
        </div>
    </div>
  )
}
