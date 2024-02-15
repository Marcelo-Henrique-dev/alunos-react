import { Link } from "react-router-dom";

export function LinkComponent(props: {content: any, contentName: string, className: string, to: string}){
    return(
        <li className="inline-block"><Link className={`flex flex-col justify-center items-center p-2 ${props.className}`} to={props.to}>{props.content}{props.contentName}</Link></li>
    )
}