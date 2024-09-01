import HeaderComponent from "../../HeaderComponent";
import { useForm } from "../../../store/form";
import { useStore } from "../../../store/stepper";

export default function AddOns() {
  const { plan, addOns } = useForm();
  const { currentStep, setStep } = useStore();

  const getTotal = () => {
    return addOns.reduce((total, addon) => total + addon.price, 0);
  };

  return (
    <div>
      <div className="flex items-start flex-col">
        <HeaderComponent text="Finishing up" main />
        <HeaderComponent
          text="Double -check everything looks OK before confirming."
          main={false}
        />
        <div className="my-3 w-full bg-slate-100 p-5 rounded-lg">
          <div className="flex justify-between w-full border-b pb-3">
            <div>
              <p className="font-bold text-marineBlue">{plan.title}</p>
              <p
                className="text-sm text-left underline cursor-pointer"
                onClick={() => setStep(currentStep - 2)}
              >
                Change
              </p>
            </div>
            <p className="font-medium text-marineBlue">
              +${plan.price}{" "}
              <span>{plan.type === "Monthly" ? "/mo" : "/yr"}</span>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {addOns.map((item) => (
              <div className="flex items-center justify-between ">
                <p>{item.title}</p>
                <p>
                  +${item.price}{" "}
                  <span className="text-sm">
                    {plan.type === "Monthly" ? "/mo" : "/yr"}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
        <div className="flex justify-end items-end mr-5 text-purplishBlue font-bold">
          <p></p>
          <p> ${getTotal() + plan.price}</p>
        </div>
    </div>
  );
}
