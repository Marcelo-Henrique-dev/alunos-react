import { SubmitBtn } from "./formComponents/submitBtn";
import { InputEdit } from "./formComponents/inputEdit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormEditar = (props: { id: any }) => {
  const navigate = useNavigate()
  const [alunoData, setAlunoData] = useState({
    nome: '',
    email: '',
    nascimento: '',
    matricula: 0,
    curso: '',
  });

  const [alunosArray, setAlunosArray] = useState([]);

  useEffect(() => {
    const alunosData = localStorage.getItem('dados');
    if (alunosData) {
      const alunoDb = JSON.parse(alunosData);
      setAlunosArray(alunoDb);
      if (props.id) {
        const aluno = alunoDb.find(
          (aluno: { idAluno: string | undefined }) => aluno.idAluno === props.id
        );
        setAlunoData(aluno);
      }
    }
  }, [props.id]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setAlunoData((prevAluno: any) => ({
      ...prevAluno,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dadosUp = props.id
      ? alunosArray.map((aluno: any) =>
        aluno.idAluno === props.id ? alunoData : aluno
      )
      : [...alunosArray, alunoData];

    localStorage.setItem('dados', JSON.stringify(dadosUp));
    alert('Aluno Editado com sucesso!');
    navigate('/alunos')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-around min-h-[689px] items-center"
      id="formularioCadastroAluno"
    >
      <InputEdit
        value={alunoData.nome}
        handleOnChange={handleChange}
        className="w-full"
        name="nome"
        placeholder="Nome"
        tipo="text"
      />
      <div className="flex w-full">
        <InputEdit
          value={alunoData.matricula}
          handleOnChange={handleChange}
          className="w-1/2"
          name="matricula"
          placeholder="Matrícula"
          tipo="number"
        />
        <InputEdit
          value={alunoData.nascimento}
          handleOnChange={handleChange}
          className="w-1/2"
          name="nascimento"
          placeholder="Nascimento"
          tipo="date"
        />
      </div>
      <InputEdit
        value={alunoData.curso}
        handleOnChange={handleChange}
        className="w-full"
        name="curso"
        placeholder="Curso"
        tipo="text"
      />
      <InputEdit
        value={alunoData.email}
        handleOnChange={handleChange}
        className="w-full"
        name="email"
        placeholder="Email"
        tipo="email"
      />
      <SubmitBtn valueBtn="Enviar" />
    </form>
  );
};
