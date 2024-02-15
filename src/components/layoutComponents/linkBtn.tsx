export function LinkBtn(props: {href: string, contentIcon: any, contentText: string}){
    return(
        <a target="_blank" href={props.href}>
            <div className="flex flex-col justify-center items-center py-6 px-3 rounded-xl text-2xl shadow-2xl text-sky-600 transition-transform hover:scale-105 hover:text-sky-400">
                {props.contentIcon}
                {props.contentText}
            </div>
        </a>
    )
}