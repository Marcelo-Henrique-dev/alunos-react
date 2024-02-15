import { Container } from "../components/container/container";
import { Form } from "../components/form/form";

export function Cadastro(){
    return(
        <Container className="border-x-2 border-slate-800">
            <h1 className="text-slate-300 p-4 border-b border-sky-600 text-center text-3xl">Cadastrar novo aluno:</h1>
            <Form />
        </Container>
    )
}