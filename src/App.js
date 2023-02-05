
import Footer from "./components/Footer";
import CarruselDestacado from "./components/CarruselDestacado";
import NavBar from "./components/NavBar";
import PromoContacto from "./components/PromoContacto";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
  <div>
    <NavBar/>
    <CarruselDestacado/>
    <ItemListContainer mensaje = {"Un Brownie hecho Bombón"} titulo1 = {"Nuestros Favoritos"}  titulo2 = {"Categprías"}/>
    <PromoContacto/>
    <Footer/>
  </div>

  );
}

export default App;
