import { Container } from "../components/container/container";
import logo from '../../public/icon.png'
import { LinkBtn } from "../components/layoutComponents/linkBtn";
import { FaInstagram, FaLinkedin, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";


export function Home() {
    return (
        <Container className="flex flex-col items-center">
            <h1 className="text-slate-300 text-3xl uppercase w-full text-center p-4 border-b border-slate-400">Sistema de Cadastro de Alunos</h1>
            <img className="max-w-[300px] mt-3" src={logo} alt="Logo" />
            <div id="about" className="flex w-full justify-center items-center min-h-[370px]">
                <div className="flex-col md:flex-row flex gap-3 w-full justify-between" id="aboutContainer">
                    <div className="w-full md:w-1/2 flex flex-col justify-around items-center" id="tecnologies">
                        <h1 className="text-slate-300 text-center text-2xl uppercase">Tecnologias Utilizadas:</h1>
                        <div className="flex-col flex md:flex-row gap-8">
                            <LinkBtn href="https://react.dev/" contentIcon={<FaReact className="text-5xl" />} contentText="ReactJS" />
                            <LinkBtn href="https://www.typescriptlang.org/" contentIcon={<SiTypescript className="text-5xl" />} contentText="TypeScript" />
                            <LinkBtn href="https://tailwindcss.com/" contentIcon={<SiTailwindcss className="text-5xl" />} contentText="TailWind" />
                        </div>
                    </div>
                    <div className="bg-sky-600 w-px md:min-h-[300px]"></div>
                    <div className="w-full md:w-1/2 flex flex-col justify-around items-center" id="socials">
                        <h1 className="text-slate-300 text-center text-2xl uppercase">Redes Sociais:</h1>
                        <div className=" mt-8 flex-col flex md:flex-row gap-8">
                            <LinkBtn href="https://www.linkedin.com/in/marcelo-henrique-0a299019a/" contentIcon={<FaLinkedin className="text-5xl" />} contentText="Linkedin" />
                            <LinkBtn href="https://www.instagram.com/m4rc3l0_h3nr1qu3/" contentIcon={<FaInstagram className="text-5xl" />} contentText="Instagram" />
                            <LinkBtn href="https://github.com/marcelo-Henrique-dev" contentIcon={<FaGithub className="text-5xl" />} contentText="Github" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}