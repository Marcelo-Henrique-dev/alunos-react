import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export function Container(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; className: string }){
    return(
        <div className={`w-full max-w-7xl p-4 mx-auto ${props.className}`} id="Container">
            {props.children}
        </div>
    )
}