const PromoContacto = () => {
    return(
      <div className="container-fuid mt-5">
        <div className="bg-success p-3 bg-opacity-10">  
        <div className= "m-auto">
                <h3 className="text-center">Suscríbete!</h3>
                <p class="text-center">Sé de los primeros en enterarte de nuestros nuevos productos y promociones.</p>
            </div>
           <div className="mb-3 col-md-6 m-auto">
              <label for="exampleFormControlInput1" className="form-label">correo electronico*</label>
              <input type="email" className="form-control" id="exampleFormControlInput1"/>
              <button type="button" className=" d-grid gap-2 col-2 mx-auto btn bg-success p-1 bg-opacity-50 mt-2" > Aceptar</button>
            </div>
         </div>
      </div>
      
    )
}


export default PromoContacto;