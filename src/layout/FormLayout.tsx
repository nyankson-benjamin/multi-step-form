import SideBar from "../components/sidebar/SideBar";
import NavBar from "../components/sidebar/NavBar";
import useWindowWidth from "../composables/useWindowWidth";

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const windowWidth = useWindowWidth();
  return (
    <div
      className={[
        windowWidth >= 900 ? "flex-row" : "flex-col",
        "flex gap-5 border bg-white min-h-[350px] min-w-[300px] rounded-lg p-5 justify-center",
      ].join(" ")}
    >
      {windowWidth >= 900 && <SideBar />}
      {windowWidth < 900 && <NavBar />}
      <div className="w-full rounded-lg px-5">{children}</div>
    </div>
  );
}
