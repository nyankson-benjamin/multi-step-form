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
      <div className="flex items-start flex-col gap-5 w-full mt-5">
        <BaseInput label="Name" placeholder="e.g. Stephen King" value={name} onChange={updateName} id="name"/>
        <BaseInput label="Email Address" placeholder="e.g. stephenking@lorem.com" value={email} onChange={updateEmail} id="email"/>
        <BaseInput label="Contact Number" placeholder="e.g.+1 234 567 890" value={contact} onChange={updateContact} id="contactNumber" />
      </div>
    </div>
  );
}
