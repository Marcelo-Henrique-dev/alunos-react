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
    const [search, setSearch] = useState('')

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

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>){
        const query = event.target.value
        setSearch(query)
    }

    const filteredAlunos = search != '' ? alunosData.filter(aluno => aluno.nome.toLocaleLowerCase().includes(search) || aluno.curso.toLocaleLowerCase().includes(search)) : alunosData

    return (
        <section id="alunos">
            <Container className="border-x-2 border-b min-h-[300px] border-slate-800">
                <h1 className="w-full text-center border-b border-sky-600 p-4 text-slate-300 text-3xl">Alunos Cadastrados:</h1>
                <form className="w-full text-center p-4">
                    <input type="text" placeholder="Pesquisar aluno pelo curso ou nome..." className="w-full md:w-1/3 lg:w-1/2 bg-transparent p-2 outline-none border-b border-sky-600 text-slate-300 focus:border-sky-500" onChange={handleSearch} />
                </form>
                <div id="alunos-container" className="flex py-4 flex-wrap">
                    {filteredAlunos.map((aluno, index) => (
                        <Aluno editar={() => { handleEdit(aluno.idAluno) }} id={aluno.idAluno} excluir={() => { handleDelete(aluno.idAluno) }} key={index} aluno={aluno.nome} age={aluno.nascimento} course={aluno.curso} email={aluno.email} register={aluno.matricula} />
                    ))}
                </div>
            </Container>
        </section>
    )
}