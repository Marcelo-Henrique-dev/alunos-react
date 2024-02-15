import { useParams } from "react-router-dom";
import { Container } from "../components/container/container";
import { FormEditar } from "../components/form/formEditar";
import React, { useEffect, useState } from "react";

export const Editar: React.FC = () => {

    let {id} = useParams()

    const [alunosData, setAlunosData] = useState({nome: ''})

    useEffect(() => {
        const alunosData = localStorage.getItem("dados");
        if(alunosData){
            const alunosDb = JSON.parse(alunosData)
            setAlunosData(alunosDb)
            const aluno = alunosDb.find(
                (aluno: {idAluno: string | undefined}) => aluno.idAluno === id
            )
            setAlunosData(aluno)
        }
    }, [id]);

    return (
        <Container className="border-x border-slate-800">
        <h1 className="text-slate-300 p-4 border-b border-sky-600 text-center text-3xl">Editar aluno <b>{alunosData.nome}</b>:</h1>
            <FormEditar id={id} />
        </Container>
    )
}