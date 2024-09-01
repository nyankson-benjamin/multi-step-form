export const addons = (type: "Monthly" | "Yearly") => {
  return [
    {
      title: "Online service",
      subTitle: "Access to multiplayer games",
      price: type === "Monthly" ? 1 : 10,
    },

    {
      title: "Larger storage",
      subTitle: "Extra 1TB of cloud save",
      price: type === "Monthly" ? 2 : 20,
    },

    {
      title: "Customizable profile",
      subTitle: "Custom theme on your profile",
      price: type === "Monthly" ? 2 : 20,
    },
  ];
};
