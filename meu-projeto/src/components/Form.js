import {useState} from 'react'

function Form(){
function cadastrarUsuario(e){
    e.preventDefault()
    console.log(`Usuário: ${name}
    Senha: ${password}`)
}

    const [name, setName] = useState("Douglas")
    const [password, setPassword] = useState("Douglas")

    return (
        <>
        <h1>Meu cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                onChange={(e) => {setName(e.target.value)}}
                />
                <label htmlFor="password">Senha: </label>
                <input type="password"
                 id="password"
                 name="password"
                 placeholder="Digite sua senha"
                 onChange={(e) => {setPassword(e.target.value)}}
                 />
            </div>
            <div> 
                <input type="submit" value="Cadastrar"/>
                
            </div>
        </form>
        </>
    )
}

export default Form