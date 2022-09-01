import WilsonPeluche from '../assets/images/WilsonPeluche.jfif';

function ItemListContainer() {
    
    return <>
    <p className='text-light text-center'> PELUCHE DE WILSON</p>
    <div className='d-flex justify-content-center'>
    <img  src= {WilsonPeluche} width="150" height="200"></img>
    </div>
    </>
}


export default ItemListContainer;