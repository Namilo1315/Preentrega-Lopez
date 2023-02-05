import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import whatsapp from "./images/whatsapp.svg";
import logo from "./images/logobrownie.png.webp";

const Footer = () => {
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                   <a className="navbar-brand p-4 " href= {"/"}> <img src= {logo} alt= {"logo"} width={150}/> </a>
                </div>
                <div className=" col text-end">
                    <a href={"https://www.facebook.com/Brownie-Republic-111366780535522"}  className= "ms-3" > <img src={facebook} alt={"facebook"}  width={"24"} /></a>
                    <a href={"https://www.instagram.com/brownie_republic/"} className= "ms-3"> <img src={instagram} alt={"instagram"}  width={"24"} /></a>
                    <a href={"/"} className= "ms-3"> <img src={whatsapp} alt={"whatsapp"}  width={"24"} /></a>
                </div>
            </div>
            <hr />
            <div className=" row ">
                <div className=" col-md-8 m-auto">
                    <ul className="nav ">
                        <li className= "nav item" >
                            <a className="nav-link text-secondary" href={"/"}>Politicas de Privacidad</a>
                        </li>
                        <li className= "nav item" >
                            <a className="nav-link text-secondary" href={"/"}>Defansa del Consumidor</a>
                        </li>
                        <li className= "nav item" >
                            <a className="nav-link text-secondary" href={"/"}>Proteccion de datos personales</a>
                        </li>
                        <li className= "nav item" >
                            <a className="nav-link text-secondary" href={"/"}>Contactos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Footer;
