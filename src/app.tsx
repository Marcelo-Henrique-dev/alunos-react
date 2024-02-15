import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navBar/navBar";
import { Home } from "./pages/home";
import { Alunos } from "./pages/alunos";
import { Cadastro } from "./pages/cadastro";
import { Editar } from "./pages/editar";

export function App() {
  return (
    <div className="App">
      <Router>
        <header className="w-full shadow-2xl">
          <NavBar />
        </header>
        <section id="principal">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="alunos" element={<Alunos />}></Route>
            <Route path="cadastro" element={<Cadastro />}></Route>
            <Route path="/editar/:id" element={<Editar />}></Route>
          </Routes>
        </section>
      </Router>
    </div>
  )
}
