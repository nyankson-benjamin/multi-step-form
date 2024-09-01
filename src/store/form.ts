import { create } from "zustand";
import { devtools } from "zustand/middleware";

type PlanType = {
  title: string;
  price: number;
  type: "Monthly" | "Yearly";
};

type Addon = {
  title: string;
  subtitle: string;
  price: number;
};

type Store = {
  name: string;
  email: string;
  contact: string;
  updateName: (name: string) => void;
  updateEmail: (email: string) => void;
  updateContact: (contact: string) => void;
  disabledButton: boolean;
  setDisabledButton: (val: boolean) => void;
  plan: PlanType;
  isMonthly: boolean;
  togglePlan: () => void;
  setPlan: (plan: PlanType) => void;
  addOns: Addon[];
  addToAddon: (addon: Addon) => void;
};

export const useForm = create<Store>()(
  devtools(
    (set) => ({
      name: "",
      email: "",
      contact: "",
      disabledButton: true,
      plan: {
        title: "",
        price: 0,
        type: "Yearly",
      },
      isMonthly: false,
      addOns: [],
      updateName: (name: string) => set(() => ({ name })),
      updateEmail: (email: string) => set(() => ({ email })),
      updateContact: (contact: string) => set(() => ({ contact })),
      setDisabledButton: (val: boolean) => set(() => ({ disabledButton: val })),
      setPlan: (plan: PlanType) => set(() => ({ plan })),
      togglePlan: () => set((state) => ({ isMonthly: !state.isMonthly })),
      addToAddon: (addon: Addon) => set((state) => {
        const exists = state.addOns.some(existingAddon =>
          existingAddon.title === addon.title &&
          existingAddon.subtitle === addon.subtitle
        );

        if (exists) {
          // Remove the existing item
          return {
            addOns: state.addOns.filter(existingAddon =>
              !(existingAddon.title === addon.title &&
                existingAddon.subtitle === addon.subtitle)
            ),
          };
        } else {
          // Add the new item
          return { addOns: [...state.addOns, addon] };
        }
      }),
      
    }),
    { name: "FormStore" }
  )
);
