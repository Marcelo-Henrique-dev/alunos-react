import { Link } from "react-router-dom";
import { Container } from "../container/container";
import { IoSchoolSharp, IoPersonAdd } from "react-icons/io5";
import { LinkComponent } from "./linkComponent";
import { PiStudentLight } from "react-icons/pi";

export function NavBar(){
    return(
        <Container className="flex justify-between items-center">
            <Link to='/'><IoSchoolSharp className="text-slate-300 text-6xl" /></Link>
            <ul className="list-none">
                <LinkComponent to="alunos" className="text-slate-300 bg-slate-600 border-slate-600 border" content={<PiStudentLight className="text-3xl" />} contentName="Alunos" />
                <LinkComponent to="cadastro" className="text-slate-300 pl-4 pr-4 border-slate-600 border" content={<IoPersonAdd className="text-3xl" />} contentName="Novo" />
            </ul>
        </Container>
    )
}