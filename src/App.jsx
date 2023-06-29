import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/devolver-livro"><button>Ir para pagina de devolução do livro</button></Link>
    </>
  )
};

const DevolverLivro = () => {
  return (
    <>
      <h1>Devolver Livro</h1>
      <Link to="/confirmar-devolucao" replace><button>Devolver Livro</button></Link>
    </>
  )
};

const ConfirmarDevolucao = () => {
  return (
    <>
      <h1>Confirmação Devolver Livro</h1>
      <h2>Tem certeza que deseja devolver o livro?</h2>
      <Link to="/devolucao-concluida" replace><button>Devolver livro</button></Link>
      <br />
      <Link to="/devolver-livro" replace><button>Cancelar</button></Link>
    </>
  )
};

const DevolucaoConcluida = () => {
  return (
    <>
      <h1>Devolução Concluida!!</h1>
      <Link to="/devolver-livro" replace><button>Concluir</button></Link>
    </>
  )
};


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devolver-livro" element={<DevolverLivro />} />
        <Route path="/confirmar-devolucao" element={<ConfirmarDevolucao />} />
        <Route path="/devolucao-concluida" element={<DevolucaoConcluida />} />
      </Routes>
    </Router>
  );
}

export default App;
