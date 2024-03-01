function Evento({numero}){
    function meuEvento(){
        
        alert(`Evento funcioando ${numero}` )
    }
    
    return(
        <>
        <p>Clique para disparar um evento:</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    )

}

export default Evento