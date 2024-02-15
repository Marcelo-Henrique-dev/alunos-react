import { useParams } from "react-router-dom";
import { Container } from "../components/container/container";
import { FormEditar } from "../components/form/formEditar";
import { useEffect } from "react";

export function Editar() {

    let {id} = useParams()

    useEffect(()=>{
        const alunosData = localStorage.getItem('dados')
        if(alunosData){
            const alunoDb = JSON.parse(alunosData)
            let result = alunoDb.filter(aluno => aluno.find(a => a.idAluno == id))
        }
    }, [])

    return (
        <Container className="border-x border-slate-800">
        <h1 className="text-slate-300 p-4 border-b border-sky-600 text-center text-3xl">Editar nome aqui</h1>
            <FormEditar />
        </Container>
    )
}