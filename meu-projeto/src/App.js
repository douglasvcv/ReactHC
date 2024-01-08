import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import './App.css';

function App() {

  const name = "Douglas"
  function soma(a,b){
    return a+b
  }

  const ulr = "https://s2-techtudo.glbimg.com/Bxr-QA4_gL25CarCCxr9JQFybt8=/0x0:1024x609/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg"

  return (
    <div className="App">
      <h1>Olá mundo!</h1>
      <p>Meu primeiro app!</p>
      <p>Meu nome é {name}</p>
      <p>Soma: {soma(4,1)}</p>
      <img src={ulr} width={250}/>
      <HelloWorld></HelloWorld>
      <Frase></Frase>
      <Frase></Frase>
    </div>
  );
}

export default App;
