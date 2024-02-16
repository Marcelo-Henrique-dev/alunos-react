export const InputEdit = (props: {className: string, name: string, placeholder: string, handleOnChange: any, tipo: string, value: string | number}) =>{
    return(
        <div className={`${props.className} p-4`} id="inputContainer">
            <label className="text-slate-300" htmlFor={props.name}>{props.placeholder}</label>
            <input required value={props.value} onChange={props.handleOnChange} type={props.tipo} className="w-full bg-transparent p-2 outline-none border-b border-sky-600 text-slate-300 focus:border-sky-500" name={props.name} placeholder={props.placeholder} />
        </div>
    )
}