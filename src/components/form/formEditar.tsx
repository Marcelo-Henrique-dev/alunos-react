import React from "react"
import { SubmitBtn } from "./formComponents/submitBtn"
import { Input } from "./formComponents/input"

export const FormEditar = () =>{
    function teste(e:React.FormEvent){
        e.preventDefault()
        alert('funcionando')
    }

    function handleChange(){
        alert('po')
    }

    return(
        <form onSubmit={teste} className="flex flex-col justify-around min-h-[689px] items-center" id="formularioCadastroAluno">
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