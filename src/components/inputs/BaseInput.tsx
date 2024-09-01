import { inputProps } from '../../types'

export default function BaseInput({label, placeholder, value, onChange}:inputProps) {
  return (
    <div className='flex flex-col items-start gap-1 w-full'>
        <label className='text-xs text-marineBlue font-bold' htmlFor ={label} >{label}</label>
        <input placeholder={placeholder} 
        className='border w-full rounded-lg p-2 text-marineBlue hover:border hover:border-marineBlue' 
        id={label}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        />
    </div>
  )
}
