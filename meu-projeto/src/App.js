import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

  const nome = "Levi"
  

  return (
    <div className="App">
      <HelloWorld></HelloWorld>
      <Frase></Frase>
      <SayMyName nome="Douglas"></SayMyName>
      <SayMyName nome="Vitor"></SayMyName>
      <SayMyName nome={nome}></SayMyName>
      <Pessoa 
      nome="Douglas" 
      idade="21" 
      profissao="Programador" 
      foto="http://via.placeholder.com/150" 
      ></Pessoa>
    </div>
  );
}

export default App;
