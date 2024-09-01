import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void,
  dec:()=>void,
  currentStep:number,
  setStep:(num:number)=>void
}

export const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  currentStep:0,
  setStep: (step:number):void => set(() => ({ currentStep: step })),
}))

