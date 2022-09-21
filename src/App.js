import { useEffect, useState } from 'react';
import './App.css'
import Prato from './componentes/Prato';

function App() {

  const [pratos, setPratos] = useState([])

  useEffect(() => {
    fetch('https://sinval-pizza.herokuapp.com/api/pratos/')
      .then(resposta => resposta.json())
      .then(dados => {
        setPratos(dados)
      })
  }, [])


  return (
    <div className="App">
      <div className='banner-container'>
        <img src="/imagens/banner.png" alt="Um banner mostrando uma pizza"/>
      </div>
      <div className='logo-container'>
        <img src="/imagens/logo sinval.png" alt="Logo da Alura Pizza"/>
      </div>
      <section className='cardapio'>
        {pratos.map(prato => 
        (<Prato
        key={prato.id} 
        nome={prato.nome} 
        descricao={prato.descricao}
        imagem={prato.imagem}
        preco={prato.preco}
        /> ))}
       </section>
    </div>
  );
}

export default App;
