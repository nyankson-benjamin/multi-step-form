export default function ToggleButton({value, onChange}:{value:boolean, onChange:(value:boolean)=>void}) {


  return (
    <div className="w-full bg-slate-100 py-2 rounded-lg flex items-center justify-center gap-5">
      <p className={value ? "text-gray-500" : "text-marineBlue font-bold"}>Monthly</p>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={value}
          onChange={()=>onChange(value)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <p className={value ? "text-marineBlue font-bold" : "text-gray-500"}>Yearly</p>
    </div>
  );
}
