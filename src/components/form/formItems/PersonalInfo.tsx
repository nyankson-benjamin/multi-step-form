import BaseInput from "../../inputs/BaseInput";
import HeaderComponent from "../../HeaderComponent";
import { useForm, } from "../../../store/form";

export default function PersonalInfo() {
  const {name, email, contact, updateName, updateEmail, updateContact} = useForm()
  return (
    <div className="flex flex-col">
      <div className="flex items-start flex-col">
      <HeaderComponent text="Personal info" main />
      <HeaderComponent text="Please provide your name, email address and phone number." main={false} />
      </div>
      <div className="flex items-start flex-col gap-3 w-full mt-5">
        <BaseInput label="Name" placeholder="Name" value={name} onChange={updateName}/>
        <BaseInput label="Email Address" placeholder="Email address" value={email} onChange={updateEmail}/>
        <BaseInput label="Contact Number" placeholder="Contact number" value={contact} onChange={updateContact} />
      </div>
    </div>
  );
}
