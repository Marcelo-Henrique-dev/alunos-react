import React, { useEffect, useState } from "react";
import { Input } from "./formComponents/input";
import { SubmitBtn } from "./formComponents/submitBtn";
import { useNavigate } from "react-router-dom";


export const Form: React.FC = () => {
    var id = crypto.randomUUID()
    const navigate = useNavigate()
    const [dados, setDados] = useState<{ idAluno: string, nome: string, matricula: number, curso: string, nascimento: string, email: string }[]>([])
    const [inputData, setInputData] = useState({ idAluno: id, nome: '', matricula: 0, curso: '', nascimento: '', email: '' })

    useEffect(() => {
        const alunoStg = localStorage.getItem('dados')
        if (alunoStg) {
            const alunoDb = JSON.parse(alunoStg)
            setDados(alunoDb)
        }
    }, [])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    function submitEvt(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const novoAluno = { ...inputData }
        const alunoUp = [...dados, novoAluno]
        localStorage.setItem('dados', JSON.stringify(alunoUp))
        alert("Aluno cadastrado com sucesso")
        navigate('/alunos')
    }

    return (
        <form onSubmit={submitEvt} className="flex flex-col justify-around min-h-[689px] items-center" id="formularioCadastroAluno">
            <Input handleOnChange={handleChange} className="w-full" name="nome" placeholder="Nome" tipo="text" />
            <div className="flex w-full">
                <Input handleOnChange={handleChange} className="w-1/2" name="matricula" placeholder="Matrícula" tipo="number" />
                <Input handleOnChange={handleChange} className="w-1/2" name="nascimento" placeholder="Nascimento" tipo="date" />
            </div>
            <Input handleOnChange={handleChange} className="w-full" name="curso" placeholder="Curso" tipo="text" />
            <Input handleOnChange={handleChange} className="w-full" name="email" placeholder="Email" tipo="email" />
            <SubmitBtn valueBtn="Enviar" />
        </form>
    )
}