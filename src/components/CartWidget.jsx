import carrito from "./images/carrito.svg";

const CartWidget = () => {
    return (
           <di className="m-5">
                <button type="button" className="btn btn-light position-relative">
                 <img src= {carrito} alt="carrito" width={20}/>
                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
                </button>
           </di >
    )
}
export default CartWidget;