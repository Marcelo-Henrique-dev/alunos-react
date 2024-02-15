import { BiEdit, BiTrash } from "react-icons/bi";
import { ActionBtn } from "../layoutComponents/actionBtn";

export function Aluno(props: {aluno:string, register: number, course: string, age: string, email: string, excluir: any, editar: any, id: string}){
    return(
        <div className="bg-slate-800 flex flex-col w-1/3 border-8 border-slate-700" id="alunoContainer">
            <h1 className="bg-slate-600 p-4 text-center text-slate-300 text-xl">{props.aluno}</h1>
            <div className="flex flex-col gap-4 text-slate-400 p-4" id="infosAluno">
                <p className="border-b border-slate-400 py-2 flex justify-between gap-2">Matrícula: <span className="font-bold">{props.register}</span></p>
                <p className="border-b border-slate-400 py-2 flex justify-between gap-2">Curso: <span className="font-bold">{props.course}</span></p>
                <p className="border-b border-slate-400 py-2 flex justify-between gap-2">Nascimento: <span className="font-bold">{props.age}</span></p>
                <p className="border-b border-slate-400 py-2 flex justify-between gap-2">Email: <span className="font-bold">{props.email}</span></p>
            </div>
            <div className="p-4 flex gap-3" id="actionsAluno">
                <ActionBtn acaoBtn={props.editar} contentIcon={<BiEdit />} contentText="Editar" />
                <ActionBtn acaoBtn={props.excluir} contentIcon={<BiTrash />} contentText="Excluir" />
            </div>
        </div>
    )
}