import thank from "../../../assets/images/thankyou.svg";
import HeaderComponent from "../../HeaderComponent";
export default function Thank() {
  return (
    <div className="flex justify-center items-center flex-col gap-5 max-w-[300px]">
      <img src={thank} alt="" />
      <HeaderComponent text="Thank you" main />
      <HeaderComponent
        text="Thank you for confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at support@loremgaming.com"
        main={false}
      />
    </div>
  );
}
