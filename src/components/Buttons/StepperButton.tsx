import { stepperBtnProps } from "../../types"

export default function StepperButton({ text, onSubmit, isActive, disabled }: stepperBtnProps) {
  return (
    <button 
      className={[
        "border px-3 py-1 rounded-full",
        isActive ? "bg-[lightBlue] text-black" : "",
        disabled ? "cursor-pointer opacity-50" : "hover:bg-[lightBlue]"
      ].join(' ')}
      onClick={() => onSubmit()}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
