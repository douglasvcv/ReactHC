import Item from "./Item"

function List(){
    return (
        <>
        <h1>Minha Lista</h1>

        <ul>
            
            <Item marca="iphone" lancamento={1985}></Item>
            <Item marca="samsung" lancamento={1982}></Item>
            <Item marca={123} lancamento="dadas"></Item>
            <Item></Item>
            
        </ul>
        </>
    )
}

export default List