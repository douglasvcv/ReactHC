import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const nome = "Levi"
  

  return (
    <div className="App">
      <h1>Testando Evento</h1>
      <Evento numero="2"></Evento>
      <Form></Form>
    </div>
  );
}

export default App;
