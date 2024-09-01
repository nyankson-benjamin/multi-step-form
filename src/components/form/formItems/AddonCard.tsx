import Checkbox from "../../Buttons/CheckBox";
import { useForm } from "../../../store/form";
export default function AddonCard({
  item,
}: {
  item: { title: string; subTitle: string; price: number; };
}) {
  const { addOns, addToAddon, isMonthly } = useForm();
  const isInAddon = () => {
    return addOns.some((addon) => addon.title === item.title);
  };

  const addTo = () => {
    const value = {
      price: item.price,
      title: item.title,
      subtitle: item.subTitle,
    };
    addToAddon(value);
  };


  return (
    <div
      className={`flex items-center justify-between w-full border
         hover:border-purplishBlue cursor-pointer p-4 rounded-lg ${
           isInAddon() ? "border-purplishBlue" : ""
         }` } onClick={() => addTo()}
    >
      <div className="flex items-center" >
        <Checkbox isChecked={isInAddon()} />
        <div>
          <p className="text-marineBlue font-bold">{item.title}</p>
          <p className="text-xs text-left text-gray-500">{item.title}</p>
        </div>
      </div>
      <p className="text-purplishBlue">
        +${item.price}/<span>{!isMonthly ? "mo" : "yr"}</span>
      </p>
    </div>
  );
}
