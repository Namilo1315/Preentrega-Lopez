import CartWidget from "./CartWidget";
import logo from "./images/logobrownie.png.webp";
import carrito1 from "./images/carrito1.svg"

const NavBar =() => {
    return (
     <div className="container-fluid">
           <div className="bg-success p-3 bg-opacity-50"> 
            <div className="col md-3">
            <img className="rounded mx-auto d-block" src= {carrito1} alt="carrito" width={20}/> 
            </div>
            </div>
            <div className="row">
               <div className="col">
                  <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid col-md-9">
                                <a className="navbar-brand p-4 " href= {"/"}> <img src= {logo} alt= "logo" width={220}/> </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarNav">
                                    <ul className="navbar-nav  text-center">
                                    <li className="nav-item">
                                    <a className="nav-link active " aria-current="page" href= {"/"}>Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href={"/"}>Nuestros Brownie</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href= {"/"}>Nosotros </a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href= {"/"}>Contactos</a>
                                    </li>
                                  </ul>
                              </div>
                       </div>
                    </nav>
                </div>
                <div className= "col d-flex align-items-center justify-content-end">
                <CartWidget />
               </div>
               
           </div>
       </div >
       
    
)
}

export default NavBar;