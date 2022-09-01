import erTipsLogo from '../assets/images/logoErtips.png';
import erLogoOficial from '../assets/images/iconoOficial.png';
import CartWidget from '../components/CarWidget';


function NavBar () {
    return <>
    
    <nav className="navbar navbar-expand-lg navbar-dark" style= {{backgroundcolor: 'black'}}> 
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="./index.html"><img src= {erTipsLogo} alt="" width="70"
          height="70" className="img-fluid"/></a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
         <ul className="navbar-nav mr-auto mt-2 mt-lg m-auto" style= {{columngap: '15px'}}>
          <li className="nav-item">
            <a className="nav-link btn btn-dark btn-sm" href="./QUIENES_SOMOS.html">QUIENES SOMOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-dark btn-sm" href="./BUILDS.html">BUILDS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-dark btn-sm" href="./STREAMERS.html">STREAMERS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-dark btn-sm" href="./Clips.html">CLIPS Y HIGHLIGHTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-dark btn-sm" href="./CalculadoraBotones.html">CALCULADORABOTONES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-dark btn-sm" href="./Contactanos.html">CONTACTANOS</a>
          </li>
        </ul> 
        <a className="navbar-brand d-none d-lg-block"><img className="img-fluid"
            src= {erLogoOficial} alt="" width="150" height="150" /></a>
      </div>
      <CartWidget/>
    </div>

  </nav>
    </>;
}


export default NavBar;