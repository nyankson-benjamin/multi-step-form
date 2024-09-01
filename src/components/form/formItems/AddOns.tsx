import HeaderComponent from "../../HeaderComponent";
import { addons } from "../../../constants/addons";
import AddonCard from "./AddonCard";
import { useForm } from "../../../store/form";

export default function AddOns() {

  const {isMonthly } = useForm()
  
  return (
    <div>
      <div className="flex items-start flex-col mb-5">
        <HeaderComponent text="Pick Addon-ons" main />
        <HeaderComponent
          text="Add-ons help ehnance your gaming experience."
          main={false}
        />

        <div className="w-full flex flex-col gap-5 mt-5">
          {addons(!isMonthly ? "Monthly" :"Yearly").map((item) => (
            <div key={item.price}>
              <AddonCard item = {item}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
