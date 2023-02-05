

const ItemListContainer = (prop) => {
    return (
     <div className="container"> 
        <div className="row" >
            <div className="col mb-4" >
              <h3 className="text-center" > {prop.mensaje}</h3>
              <p className="text-center" > Brownies, brownie bars, brownie balls, brownie pops, brownie cookies… <br /> Conoce la nación del brownie y déjate seducir por sus increíbles sabores y texturas, todos fabricados de forma artesanal, utilizando chocolate belga y los mejores ingredientes.</p>
              
            </div>
            <di className="row">
                <div className="col- mb-5 m-auto" >
                  <h3 className="text-center mb-3 "> {prop.titulo1}</h3>
                  <img src={"/images/DULCE-DE-LECHE-BROWNIE-BOX-4_400x.webp"} className={"ms-5 mt-2"} alt={"carrusel"} width= {"200"} />
                  <img src={"/images/CheescakeMixBox4_400x.webp"} className={"ms-5 mt-2"} alt={"carrusel"} width= {"200"} />
                  <img src={"/images/NUTELLA-BROWNIE-BOX-4_400x.webp"} className={"ms-5 mt-2"} alt={"carrusel"} width= {"200"} />
                  <img src={"/images/PEANUT-BUTTER-BROWNIE-BOX-4_400x.webp"} className={"ms-5 mt-2"} alt={"carrusel"} width= {"200"} />
                  <img src={"/images/SENSATION-BROWNIE-BOX-4_400x.webp"} className={"ms-5 mt-2"} alt={"carrusel"} width= {"200"} />
                  

                </div>
            </di >
            <div className="row">
            <div className=" col mt-2 mb-5 mt-2">
            <h3 className="text-center" >{prop.titulo2}</h3>
              <p className="text-center" > Brownies, brownie bars, brownie balls, brownie pops, brownie cookies…</p>
            <img src={"/images/4u_e3054877-0be9-468f-8686-d8a900907a8c_400x.webp"} className={"ms-4 mt-2"} alt={"carrusel"}/>
            <img src={"/images/6u_400x.webp"} className={"ms-4 mt-2"} alt={"carrusel"}/>
            <img src={"/images/8u_400x.webp"} className={"ms-4 mt-2"} alt={"carrusel"}/>
           </div>
            </div>
           </div>
        </div>

    )
}
 export default ItemListContainer;
