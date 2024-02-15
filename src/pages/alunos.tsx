import { useEffect, useState } from "react";
import { Aluno } from "../components/alunoComponent/aluno";
import { Container } from "../components/container/container";
import { useNavigate } from "react-router-dom";

export const Alunos: React.FC = () => {
    interface Aluno {
        idAluno: string
        nome: string
        email: string
        nascimento: string
        curso: string
        matricula: number
    }

    const navigate = useNavigate()

    const [alunosData, setAlunosData] = useState<Aluno[]>([])

    useEffect(() => {
        const alunoData = localStorage.getItem('dados')
        if (alunoData) {
            const alunoDb = JSON.parse(alunoData)
            if (Array.isArray(alunoDb)) {
                setAlunosData(alunoDb)
                navigate('/alunos')
            } else {
                console.error('Os dados não estão em um array')
            }
        }
    }, [])

    function handleDelete(idAluno: string) {
        const alunosArray = alunosData.filter(aluno => {
            return aluno.idAluno != idAluno
        })

        setAlunosData(alunosArray)

        localStorage.setItem('dados', JSON.stringify(alunosArray))
    }

    function handleEdit(idAluno: string) {
        navigate(`/alunos/${idAluno}`)
    }


    return (
        <section id="alunos">
            <Container className="border-x-2 border-b min-h-[300px] border-slate-800">
                <h1 className="w-full text-center border-b border-sky-600 p-4 text-slate-300 text-3xl">Alunos Cadastrados:</h1>
                <div id="alunos-container" className="flex py-4 flex-wrap">
                    {alunosData.map((aluno, index) => (
                        <Aluno editar={() => { handleEdit(aluno.idAluno) }} id={aluno.idAluno} excluir={() => { handleDelete(aluno.idAluno) }} key={index} aluno={aluno.nome} age={aluno.nascimento} course={aluno.curso} email={aluno.email} register={aluno.matricula} />
                    ))}
                </div>
            </Container>
        </section>
    )
}