import { inputProps } from '../../types'

export default function BaseInput({label, placeholder, value, onChange, id}:inputProps) {
  return (
    <div className='flex flex-col items-start gap-1 w-full cursor-pointer'>
        <label className='text-xs text-marineBlue font-bold cursor-pointer' htmlFor ={id} >{label}</label>
        <input placeholder={placeholder} 
        className='border w-full rounded-lg p-2 font-ubuntu focus:outline-purplishBlue text-marineBlue hover:border hover:border-marineBlue' 
        id={id}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        />
    </div>
  )
}
