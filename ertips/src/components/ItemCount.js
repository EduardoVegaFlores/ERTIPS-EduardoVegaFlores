import { useState } from "react"


function ItemCount({stock, initial}) {

    const [cont, setcont] = useState(0)
    
    function onAdd (){

        if ((cont + initial)>stock){
            alert ('Valor Incorrecto')
        }
        if ((cont + initial)<0){
            alert ('No puede ser menor a 0')
        }
    }
    
    function contador (operacion){
        if (operacion == "+"){
            setcont (cont + 1)
        } else {
            setcont (cont - 1)
        };
        }


    return <>
    <div className="text-center text-light">
        <p> stock: {stock} </p>
    </div>
    <div className="mt-3 d-flex justify-content-center">
    <button  onClick={() => contador("-")}>
        -
    </button>
    <input value={initial + cont}></input>
    <button  onClick={() => contador("+")}>
        +
    </button>
    </div>
    <div className=" mt-3 d-flex justify-content-center">
        <button onClick={() => onAdd()}>
            Agregar al carrito
        </button>
    </div>
    </>



}



export default ItemCount 