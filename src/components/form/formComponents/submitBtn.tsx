export function SubmitBtn(props: {valueBtn: string}){
    return(
        <input className="w-full max-w-[300px] cursor-pointer bg-slate-600 shadow-xl py-4 px-2 text-2xl text-slate-300" type="submit" name="acao" value={props.valueBtn} />
    )
}