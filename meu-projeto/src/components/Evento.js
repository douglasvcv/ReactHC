import Button from "./evento/Button"


function Evento({numero}){
   
    function meuEvento(){
        alert("Meu primeiro evento! "+ numero)
    }
    function segundoEvento(){
        alert(`Meu segundo evento! ${numero}`)
    }


    return(
        <>
        <p>Clique para disparar um evento:</p>
        <Button event={meuEvento} text="Primeiro evento"></Button>
        <Button event={segundoEvento} text="Segundo evento"></Button>
        
        </>
    )

}

export default Evento