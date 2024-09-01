import { buttonComponentProps } from "../../types"

export default function ButtonComponent({text, onSubmit, disabled}: buttonComponentProps) {
  return (
    <button 
      className={`primaryBg px-3 py-2 rounded-lg text-white ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`} 
      onClick={onSubmit} 
      disabled={disabled}
    >
      {text}
    </button>
  )
}
