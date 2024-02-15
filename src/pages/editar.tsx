import { useParams } from "react-router-dom";
import { Container } from "../components/container/container";
import { FormEditar } from "../components/form/formEditar";
import React, { useState } from "react";

export const Editar: React.FC = () => {

    let {id} = useParams()

    const [nome, setNome] = useState('')

    function passarNome(nome: string){
        setNome(nome)
    }

    return (
        <Container className="border-x border-slate-800">
        <h1 className="text-slate-300 p-4 border-b border-sky-600 text-center text-3xl">Editar aluno <b>{nome}</b>:</h1>
            <FormEditar passarNome={passarNome} id={id} />
        </Container>
    )
}