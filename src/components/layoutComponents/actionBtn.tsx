export function ActionBtn(props: {contentIcon: any, contentText: string, acaoBtn: any}){
    return(
        <button onClick={props.acaoBtn} className="flex text-slate-300 bg-slate-600 px-4 py-2 justify-center items-center gap-2 w-1/2 transition-all hover:text-sky-600" id="action_button">
            {props.contentIcon}
            {props.contentText}
        </button>
    )
}