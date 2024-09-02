
export default function HeaderComponent({text, main}:{text:string, main:boolean}) {
  return (
    <div className={main ? "font-bold text-2xl font-ubuntuBold text-marineBlue" :"text-xs text-[#b8b7b7] font-ubuntu"}>{text}</div>
  )
}
