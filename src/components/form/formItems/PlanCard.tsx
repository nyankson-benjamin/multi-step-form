import pro from "../../../assets/plans/pro.svg";
import arcade from "../../../assets/plans/archade.svg";
import advanced from "../../../assets/plans/advanced.svg";
import { useForm } from "../../../store/form";

export default function PlanCard({
  item,
  showPerk,
  active
}: {
  item: { title: string; perk: string; price: number };
  showPerk: boolean;
  active:boolean,
}) {
    const {setPlan, isMonthly } = useForm()

    const getItem = ()=>{
        setPlan({price: item.price, title:item.title, type: !isMonthly ? "Monthly" : "Yearly"})
    }
  return (
    <div className={`w-full border rounded-lg p-3 lg:w-32 
    md:w-32 sm:w-32 cursor-pointer
     hover:border-marineBlue ${active ? 'border-marineBlue' :''}`}
     onClick={()=>getItem()}
     >
      {item.title === "Arcade" && <img src={arcade} />}
      {item.title === "Advanced" && <img src={advanced} />}
      {item.title === "Pro" && <img src={pro} />}

      <div className="mt-5 text-left">
        <p className="text-marineBlue font-bold">{item.title}</p>
        <p className="text-slate-300">${item.price}/mo</p>
        {showPerk && (
          <p className="text-marineBlue text-xs font-medium">{item.perk}</p>
        )}
      </div>
    </div>
  );
}
