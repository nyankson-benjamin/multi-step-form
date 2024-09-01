import { plans } from "../../../constants/planItem";
import PlanCard from "./PlanCard";
import HeaderComponent from "../../HeaderComponent";
import { useForm } from "../../../store/form";
import ToggleButton from "../../Buttons/ToggleButton";
import { useEffect, useState } from "react";

export default function Plan() {
  const {plan,isMonthly, togglePlan, setPlan } = useForm()
const [index, setIndex] = useState(0);
  useEffect(()=>{
    setPlan({price: plan.price, title:plan.title, type: !isMonthly ? "Monthly" : "Yearly"})

  },[isMonthly, plan.price, plan.title, setPlan])


  return (
    <div>
      <div className="flex items-start flex-col mb-5">
        <HeaderComponent text="Select your plan" main />
        <HeaderComponent
          text="You have the option of monthly or yrearly billing"
          main={false}
        />
      </div>
     <div className="flex flex-wrap gap-4">
     {plans(!isMonthly ? "Monthly" : "Yearly").map((item,idx) => {
        return <div key={item.price} onClick={()=>setIndex(idx)}>
          <PlanCard item={item} showPerk = { isMonthly} active={idx === index && plan.price>0}/>
        </div>;
      })}
     </div>

<div className="my-5">
<ToggleButton value = {isMonthly} onChange = {togglePlan}/>

</div>
    </div>
  );
}
