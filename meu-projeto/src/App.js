import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutroEvento';
import SeuNome from './components/SeuNome';
import { useState } from 'react';
import Saudacao from './components/Saudacao';

function App() {

  const nome = "Levi"
  const array = ['Douglas', 'Lima', 'Geovani', 'Risort']
  const [name, setName] = useState()
  return (
    <div className="App">
      <OutraLista itens={array}></OutraLista>
      <SeuNome setName={setName}></SeuNome>
      <p>{name}</p>
      <Saudacao name={name} ></Saudacao>
    </div>
  );
}

export default App;
