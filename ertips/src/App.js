import './App.css';
import './assets/css/body.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount.js';


function App() {




  return (
    <>

    <NavBar/> 

    <ItemListContainer classname='mt-5'/>

    <ItemCount initial={3} stock={10}/>
    </>
  );


}

export default App;
