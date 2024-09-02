export type buttonComponentProps = {
    text:string,
    onSubmit:()=>void,
    disabled?:boolean
}

export interface stepperBtnProps extends buttonComponentProps{
isActive?:boolean,
}

export type inputProps = {
    label:string,
    placeholder:string,
    value:string,
    onChange:(val:string)=>void,
    id:string
}