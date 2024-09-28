import Header from "./Header";
import CardPizza from "./CardPizza";
// import { pizzas } from "../pizzas";
import { useEffect, useState } from "react";

const Home = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const getPizzas = async () => {
        const respuesta = await fetch('http://localhost:5000/api/pizzas')
        const listaProductos = await respuesta.json()

        setListaProductos(listaProductos)
    }
    useEffect(() => {
        getPizzas()
    }, [])

    return (
        <>
            <Header />
            {listaProductos.map(pizzas => 
            <CardPizza 
            key={pizzas.id} 
            name={pizzas.name}
            price={pizzas.price} 
            ingredients={pizzas.ingredients} 
            img={pizzas.img}  
            />)}
        </>
    )
}

export default Home; 