function SeuNome({setName}){

    return(
        <>
        <p>Digite seu nome</p>
        <input type="text" placeholder="Qual o seu nome?" onChange={(e)=>{setName(e.target.value)}}/>
        </>
    )
}

export default SeuNome