function Saudacao({name}){

    function gerarSaudacao(nome){
        var frase = `Olá ${nome}, tudo bem?`
        return frase
    }

    return <><p>{name &&(gerarSaudacao(name))}</p></>
}

export default Saudacao