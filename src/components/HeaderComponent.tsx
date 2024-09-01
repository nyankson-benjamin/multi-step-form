
export default function HeaderComponent({text, main}:{text:string, main:boolean}) {
  return (
    <div className={main ? "font-bold text-2xl font-mono text-marineBlue" :"text-xs text-[#b8b7b7] font-semibold"}>{text}</div>
  )
}
