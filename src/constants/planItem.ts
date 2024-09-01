
export const plans = (type:"Monthly" | "Yearly")=>{
    const perk = type === "Monthly" ? "" :"2 months free"
    return [
        {title:"Arcade", perk, price: type === "Monthly" ? 9 : 90},
        {title:"Advanced", perk, price: type === "Monthly" ? 12 : 120},
        {title:"Pro", perk, price: type === "Monthly" ? 15 : 250}
        ]
}