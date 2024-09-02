import StepperButon from "../Buttons/StepperButton";
import { stepperItems } from "../../constants/stepperItem";
import { useStore } from "../../store/stepper";

export default function SideBar() {
    const {currentStep, setStep} = useStore();
const sidebarImg = "/sidebarImg.svg"

  return (
    <div 
      className="border rounded-lg sideBarBg p-5 text-[white] bg-cover bg-no-repeat" 
      style={{backgroundImage: `url(${sidebarImg})`}} // Use `backgroundImage` instead of `background`
    >
        <div className="flex flex-col gap-5">
            {stepperItems.map((item, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                    <StepperButon 
                        text={`${idx + 1}`} 
                        isActive={currentStep === idx} 
                        onSubmit={() => setStep(idx)} 

                    />
                    <div 
                        className="flex flex-col items-start cursor-pointer" 
                        onClick={() => setStep(idx)}
                    >
                        <p className="text-xs uppercase text-[#cecdcd]">step {idx + 1}</p>
                        <p className="text-xs uppercase whitespace-nowrap">{item}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
